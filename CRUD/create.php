<?php
require_once(__DIR__ . '/../database.php');
header('Content-Type: application/json'); 

function insertPerson($conn, $attributes) {
    $query = $conn->prepare('INSERT INTO person(first_name, last_name, date_of_birth, medic_no, phone_no, address, postal_code, email, SSN)
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
    try {
        $query->execute($attributes);
        return ['success' => true];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 1 insert
function insertLocation($conn, $attributes) {
    $query = $conn->prepare('INSERT INTO location(name, address, postal_code, phone_no, web_address, location_type, capacity)
                            VALUES (?, ?, ?, ?, ?, ?, ?)');
    try {
        $query->execute($attributes);
        return ['success' => true];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 2 insert
function insertPersonnel($conn, $attributes) {
    $query = $conn->prepare('INSERT INTO personnel(personnel_id, work_role, mandate, is_president, is_manager)
                            VALUES (?, ?, ?, ?, ?)');
    try {
        $query->execute($attributes);
        return ['success' => true];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 3 insert
function insertFamily($conn, $attributes) {
    $query = $conn->prepare('INSERT INTO family_member(family_id) VALUES (?)');
    
    try {
        $query->execute($attributes);
        return ['success' => true];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 4 insert
function insertClubMember($conn, $attributes) {
    $query = $conn->prepare('INSERT INTO club_member(member_id, family_id1, family_id2, location_id, gender, age, active)
                            VALUES (?, ?, ?, ?, ?, ?, ?)');
    try {
        $query->execute($attributes);
        return ['success' => true];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 5 insert
function insertTeamFormation($conn, $attributes) {
    $query = $conn->prepare('INSERT INTO team_formation(formation_type, team_id1, team_id2, team1_score, team2_score)
                            VALUES (?, ?, ?, ?, ?)');
    try {
        $query->execute($attributes);
        return ['success' => true];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// Handle the request
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (isset($data['action']) && isset($data['attributes'])) {
    $action = $data['action'];
    $attributes = $data['attributes'];

    switch ($action) {
        case 'insertLocation':
            $response = insertLocation($conn, $attributes);
            break;
        case 'insertPerson':
            $response = insertPerson($conn, $attributes);
            break;
        case 'insertPersonnel':
            $response = insertPersonnel($conn, $attributes);
            break;
        case 'insertFamily':
            $response = insertFamily($conn, $attributes);
            break;
        case 'insertClubMember':
            $response = insertClubMember($conn, $attributes);
            break;
        case 'insertTeamFormation':
            $response = insertTeamFormation($conn, $attributes);
            break;
        default:
            $response = ['error' => 'Invalid action'];
            break;
    }
} else {
    $response = ['error' => 'Missing action or attributes'];
}

echo json_encode($response);
?>