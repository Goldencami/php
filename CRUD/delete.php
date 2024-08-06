<?php
require_once(__DIR__ . '/../database.php');
header('Content-Type: application/json'); 

// query 1 delete
function deleteLocation($conn, $locationId) {
    try {
        $query = $conn->prepare('DELETE FROM location WHERE location_id = :locationId');
        $query->bindParam(':locationId', $locationId, PDO::PARAM_INT);
        $query->execute();
        return ['success' => true];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 2 delete
function deletePersonnel($conn, $personnelId) {
    try {
        $query = $conn->prepare('DELETE FROM personnel WHERE personnel_id = :personnelId');
        $query->bindParam(':personnelId', $personnelId, PDO::PARAM_INT);
        $query->execute();
        return ['success' => true];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 3 delete
function deleteFamily($conn, $familyId) {
    try {
        $query = $conn->prepare('DELETE FROM family_member WHERE family_id = :familyId');
        $query->bindParam(':familyId', $familyId, PDO::PARAM_INT);
        $query->execute();
        return ['success' => true];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 4 delete
function deleteClubMember($conn, $memberId) {
    try {
        $query = $conn->prepare('DELETE FROM club_member WHERE member_id = :memberId');
        $query->bindParam(':memberId', $memberId, PDO::PARAM_INT);
        $query->execute();
        return ['success' => true];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 5 delete
function deleteTeamFormation($conn, $formationId) {
    try {
        $query = $conn->prepare('DELETE FROM team_formation WHERE formation_id = :formationId');
        $query->bindParam(':formationId', $formationId, PDO::PARAM_INT);
        $query->execute();
        return ['success' => true];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// Handle the request
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (isset($data['action']) && isset($data['id'])) {
    $action = $data['action'];
    $id = intval($data['id']); // Sanitize ID

    switch ($action) {
        case 'deleteLocation':
            $response = deleteLocation($conn, $id);
            break;
        case 'deletePersonnel':
            $response = deletePersonnel($conn, $id);
            break;
        case 'deleteFamily':
            $response = deleteFamily($conn, $id);
            break;
        case 'deleteMember':
            $response = deleteClubMember($conn, $id);
            break;
        case 'deleteFormation':
            $response = deleteTeamFormation($conn, $id);
            break;
        default:
            $response = ['error' => 'Invalid action'];
            break;
    }
} else {
    $response = ['error' => 'Missing action or ID'];
}

echo json_encode($response);
?>