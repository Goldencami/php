<?php
require_once(__DIR__ . '/../database.php');
header('Content-Type: application/json');

function getAllPersons($conn) {
    try {
        $query = $conn->prepare("SELECT id, first_name, last_name, DATE_FORMAT(date_of_birth, '%Y-%m-%d') AS date_of_birth, medic_no, 
                                phone_no, address, postal_code, email, SSN FROM person");
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 1
function getAllLocations($conn) {
    try {
        $query = $conn->prepare('SELECT * FROM location');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 2
function getAllPersonnel($conn) {
    try {
        $query = $conn->prepare('SELECT * FROM personnel');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 3
function getAllFamily($conn) {
    try {
        $query = $conn->prepare("SELECT family_id, first_name, last_name, DATE_FORMAT(date_of_birth, '%Y-%m-%d') AS date_of_birth, 
                                medic_no, phone_no, address, postal_code, email, SSN 
                                FROM family_member
                                JOIN person ON family_member.family_id = person.id");
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 4
function getAllClubMembers($conn) {
    try {
        $query = $conn->prepare('SELECT * FROM club_member');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 5
function getAllTeamFormation($conn) {
    try {
        $query = $conn->prepare("SELECT formation_id, formation_type, team_id1, team_id2, team1_score, 
                                team2_score, winner, DATE_FORMAT(created_at, '%Y-%m-%d') AS created_at FROM team_formation");
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 7
function query7($conn) {
    try {
        $query = $conn->prepare('SELECT location.address, postal_codes.city, postal_codes.postal_code, 
                                    postal_codes.province, location.phone_no, web_address, location_type, capacity, 
                                    person.first_name, person.last_name, COUNT(member_id) AS no_members
                                    FROM operates
                                    JOIN location ON location.location_id = operates.location_id 
                                    JOIN personnel ON personnel.personnel_id = operates.personnel_id
                                    JOIN person ON person.id = operates.personnel_id
                                    JOIN registered ON registered.location_id = location.location_id 
                                    JOIN location_postal_codes ON location_postal_codes.location_id = operates.location_id 
                                    JOIN postal_codes ON postal_codes.postal_code = location_postal_codes.postal_code
                                    WHERE registered.end_date is null AND operates.end_date is null AND is_manager = 1 
                                    GROUP BY location.location_id
                                    ORDER BY postal_codes.province, postal_codes.city ASC');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }

}

// query 8
function query8($conn, $familyId) {
    try {
        $query = $conn->prepare("SELECT scfam.first_name AS second_fam_first_name, scfam.last_name AS second_fam_last_name, 
                                scfam.phone_no AS second_fam_phone, club_member.member_id, cm.first_name, cm.last_name, 
                                DATE_FORMAT(cm.date_of_birth, '%Y-%m-%d') AS date_of_birth, cm.SSN, cm.medic_no,
                                cm.phone_no, cm.address, postal_codes.city, postal_codes.province, postal_codes.postal_code, 
                                associated.relationship 
                                FROM club_member 
                                JOIN person cm ON club_member.member_id = cm.id 
                                JOIN person_postal_codes ON cm.id = person_postal_codes.person_id 
                                JOIN postal_codes ON person_postal_codes.postal_code = postal_codes.postal_code 
                                JOIN person scfam ON club_member.family_id2 = scfam.id
                                JOIN associated ON club_member.family_id2 = associated.family_id AND club_member.member_id = associated.member_id 
                                WHERE club_member.family_id1 = :familyId ");
        $query->bindParam(':familyId', $familyId, PDO::PARAM_INT);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 9
function query9($conn, $address, $date) {
    try {
        $query = $conn->prepare("SELECT coach.first_name AS c_first_name, coach.last_name AS c_last_name, involves.form_time, involves.form_address, team_formation.formation_type,
                                team.team_name , team_formation.team1_score AS team1_score, team_formation.team2_score AS team2_score,
                                cm.first_name AS cm_first_name, cm.last_name AS cm_last_name, plays_in.player_role
                                FROM involves
                                JOIN person coach ON involves.coach_id = coach.id
                                JOIN team_formation ON involves.formation_id = team_formation.formation_id
                                JOIN plays_in ON team_formation.formation_id =plays_in.formation_id
                                JOIN club_member ON plays_in.member_id = club_member.member_id
                                JOIN person cm ON club_member.member_id = cm.id
                                JOIN registered ON club_member.member_id = registered.member_id AND currently_playing = 1 
                                    AND (involves.team1_id = registered.team_id OR involves.team2_id = registered.team_id)
                                JOIN team ON registered.team_id = team.team_id
                                WHERE involves.form_address = :address AND involves.form_date = :date
                                ORDER BY involves.form_time ASC");
        $query->bindParam(':address', $address, PDO::PARAM_STR);
        $query->bindParam(':date', $date, PDO::PARAM_STR);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 10
function query10($conn) {
    try {
        $query = $conn->prepare('SELECT member_id, person.first_name, person.last_name
                                FROM registered 
                                JOIN person ON person.id = registered.member_id
                                GROUP BY member_id
                                HAVING COUNT(register_date) >= 4 AND 
                                DATEDIFF(CURDATE(),MIN(register_date) ) <= 730 AND 
                                COUNT(DISTINCT(location_id)) >= 4
                                ORDER BY member_id ASC');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 11
function query11($conn, $date1, $date2) {
    try {
        $query = $conn->prepare("SELECT involves.form_address, COUNT(DISTINCT tf1.formation_id) AS total_train_sessions,
                            COUNT(pi1.member_id) AS total_players_for_train, COUNT(DISTINCT tf2.formation_id) AS total_game_sessions,
                            COUNT(pi2.member_id) AS total_players_for_game
                            FROM involves
                            LEFT JOIN team_formation tf1 ON involves.formation_id = tf1.formation_id AND tf1.formation_type = 'Training Session'
                            LEFT JOIN team_formation tf2 ON involves.formation_id = tf2.formation_id AND tf2.formation_type = 'Game'
                            LEFT JOIN plays_in pi1 ON tf1.formation_id = pi1.formation_id 
                            LEFT JOIN plays_in pi2 ON tf2.formation_id = pi2.formation_id
                            WHERE involves.form_date BETWEEN :date1 AND :date2
                            GROUP BY involves.form_address
                            HAVING COUNT(DISTINCT tf2.formation_id) >= 3
                            ORDER BY COUNT(DISTINCT tf2.formation_id) DESC");
        $query->bindParam(':date1', $date1, PDO::PARAM_STR);
        $query->bindParam(':date2', $date2, PDO::PARAM_STR);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 12
function query12($conn) {
    try {
        $query = $conn->prepare('SELECT registered.member_id, first_name, last_name, club_member.age, 
                                person.phone_no, person.email, location.name
                                FROM registered
                                JOIN person ON person.id = registered.member_id
                                JOIN club_member ON club_member.member_id = registered.member_id
                                JOIN location ON location.location_id = registered.location_id
                                WHERE registered.member_id NOT IN (SELECT member_id FROM plays_in) AND 
                                registered.currently_playing = TRUE');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 13
function query13($conn) {
    try {
        $query = $conn->prepare("SELECT plays_in.member_id, first_name, last_name, club_member.age, person.phone_no, email, location.name
                                FROM plays_in
                                JOIN club_member ON club_member.member_id = plays_in.member_id
                                JOIN person ON person.id = plays_in.member_id
                                JOIN registered ON registered.member_id = plays_in.member_id 
                                JOIN location ON location.location_id = registered.location_id
                                WHERE registered.currently_playing = TRUE 
                                GROUP BY member_id
                                HAVING COUNT(DISTINCT(player_role)) = 1 AND MAX(player_role = 'Goalkeeper')
                                ORDER BY location.name, member_id ASC");
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 14
function query14($conn) {
    try {
        $query = $conn->prepare('SELECT plays_in.member_id, first_name, last_name, club_member.age, person.phone_no, email, location.name
                                FROM plays_in 
                                JOIN club_member ON club_member.member_id = plays_in.member_id
                                JOIN person ON person.id = plays_in.member_id
                                JOIN registered ON registered.member_id = plays_in.member_id 
                                JOIN location ON location.location_id = registered.location_id
                                WHERE registered.currently_playing = TRUE 
                                GROUP BY member_id
                                HAVING COUNT(DISTINCT(player_role)) = 4
                                ORDER BY location.name, member_id ASC');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 15
function query15($conn, $address) {
    try {
        $query = $conn->prepare("SELECT person.first_name , person.last_name , person.phone_no 
                                FROM involves
                                JOIN associated ON involves.coach_id = associated.family_id
                                JOIN registered ON associated.member_id = registered.member_id AND registered.currently_playing = 1
                                JOIN person ON involves.coach_id = person.id
                                WHERE involves.form_address = :address
                                GROUP BY involves.coach_id");
        $query->bindParam(':address', $address, PDO::PARAM_STR);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 16
function query16($conn) {
    try {
        $query = $conn->prepare('SELECT registered.member_id, first_name, last_name, club_member.age, person.phone_no, person.email, location.name
                                FROM registered
                                JOIN club_member ON club_member.member_id = registered.member_id
                                JOIN person ON person.id = registered.member_id
                                JOIN plays_in ON registered.member_id = plays_in.member_id
                                JOIN team_formation ON team_formation.formation_id = plays_in.formation_id 
                                JOIN location ON location.location_id = registered.location_id
                                WHERE registered.currently_playing = TRUE AND registered.team_id in (SELECT winner FROM team_formation)
                                GROUP BY registered.member_id 
                                ORDER BY location.name, plays_in.member_id ASC');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 16
function query17($conn) {
    try {
        $query = $conn->prepare("SELECT first_name, last_name, DATE_FORMAT(start_date, '%Y-%m-%d') AS start_date, DATE_FORMAT(end_date, '%Y-%m-%d') AS end_date
                                FROM operates 
                                JOIN personnel ON personnel.personnel_id = operates.personnel_id
                                JOIN person ON person.ID = operates.personnel_id
                                WHERE personnel.is_president = TRUE
                                ORDER BY first_name, last_name, operates.start_date");
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// query 18
function query18($conn) {
    try {
        $query = $conn->prepare("SELECT first_name, last_name, person.phone_no, person.email, location.name, work_role
                                FROM personnel 
                                JOIN operates ON operates.personnel_id = personnel.personnel_id
                                JOIN location ON location.location_id = operates.location_id
                                JOIN person ON person.id = personnel.personnel_id
                                WHERE personnel.personnel_id NOT IN (SELECT family_id FROM family_member) AND operates.end_date IS NULL
                                    AND work_role = 'Volunteer'
                                ORDER BY location.name, work_role, first_name, last_name ASC");
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $err) {
        return $err->getMessage();
    }
}

// Determine which function to call based on a parameter
$query = $_GET['query'] ?? '';
$familyId = $_GET['familyId'] ?? null;
$address = $_GET['address'] ?? null;
$date = $_GET['date'] ?? null;
$date1 = $_GET['date1'] ?? null;
$date2 = $_GET['date2'] ?? null;

switch ($query) {
    case 'allPersons':
        $data = getAllPersons($conn);
        break;
    case 'allLocations':
        $data = getAllLocations($conn);
        break;
    case 'allPersonnel':
        $data = getAllPersonnel($conn);
        break;
    case 'allFamily':
        $data = getAllFamily($conn);
        break;
    case 'allClubMembers':
        $data = getAllClubMembers($conn);
        break;
    case 'allTeamFormation':
        $data = getAllTeamFormation($conn);
        break;
    case 'query7':
        $data = query7($conn);
        break;
    case 'query8':
        if ($familyId !== null) {
            $data = query8($conn, intval($familyId));
        } else {
            $data = ['error' => 'familyId parameter missing'];
        }
        break;
    case 'query9':
        if ($address !== null && $date !== null) {
            $data = query9($conn, $address, $date);
        } else {
            $data = ['error' => 'address or date parameter missing'];
        }
        break;
    case 'query10':
        $data = query10($conn);
        break;
    case 'query11':
        if ($date1 !== null && $date2 !== null) {
            $data = query11($conn, $date1, $date2);
        } else {
            $data = ['error' => 'address parameter missing'];
        }
        break;
    case 'query12':
        $data = query12($conn);
        break;
    case 'query13':
        $data = query13($conn);
        break;
    case 'query14':
        $data = query14($conn);
        break;
    case 'query15':
        if ($address !== null) {
            $data = query15($conn, $address);
        } else {
            $data = ['error' => 'address parameter missing'];
        }
        break;
    case 'query16':
        $data = query16($conn);
        break;
    case 'query17':
        $data = query17($conn);
        break;
    case 'query18':
        $data = query18($conn);
        break;
    default:
        $data = ['error' => 'Invalid query'];
        break;
}

// Output the result as JSON
echo json_encode($data);

// Close the statement and connection
$conn = null; // Close the connection
?>
