<?php
require_once(__DIR__ . '/../database.php');
header('Content-Type: application/json');

// query 1 update
function updateLocation($conn, $newValue, $locationId, $columnName) {
    // Prepare the query
    $query = "UPDATE location SET $columnName = :newValue WHERE location_id = :locationId";
    $stmt = $conn->prepare($query);

    // Bind parameters
    $stmt->bindParam(':newValue', $newValue);
    $stmt->bindParam(':locationId', $locationId, PDO::PARAM_INT);

    try {
        // Execute the statement
        $stmt->execute();
        // Check if any rows were affected
        $affectedRows = $stmt->rowCount();
        return ['success' => $affectedRows > 0];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 2 update
function updatePersonnel($conn, $newValue, $personnelId, $columnName) {
    // Convert newValue to integer if necessary
    if ($columnName === 'is_president' || $columnName === 'is_manager') {
        $newValue = intval($newValue);
    }

    // Prepare the query
    $query = "UPDATE personnel SET $columnName = :newValue WHERE personnel_id = :personnelId";
    $stmt = $conn->prepare($query);

    // Bind parameters
    $stmt->bindParam(':newValue', $newValue);
    $stmt->bindParam(':personnelId', $personnelId, PDO::PARAM_INT);

    try {
        // Execute the statement
        $stmt->execute();
        // Check if any rows were affected
        $affectedRows = $stmt->rowCount();
        return ['success' => $affectedRows > 0];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 3 update
function updateFamily($conn, $newValue, $familyId, $columnName) {
    // Prepare the query
    $query = "UPDATE person SET $columnName = :newValue WHERE id = :familyId";
    $stmt = $conn->prepare($query);

    // Bind parameters
    $stmt->bindParam(':newValue', $newValue);
    $stmt->bindParam(':familyId', $familyId, PDO::PARAM_INT);

    try {
        // Execute the statement
        $stmt->execute();
        // Check if any rows were affected
        $affectedRows = $stmt->rowCount();
        return ['success' => $affectedRows > 0];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// query 4 update
function updateClubMember($conn, $newValue, $memberId, $columnName) {
    // Convert newValue to integer if necessary
    if (in_array($columnName, ['family_id1', 'family_id2', 'location_id', 'member_id'])) {
        $newValue = intval($newValue);
    }

    // Prepare the query
    $query = "UPDATE club_member SET $columnName = :newValue WHERE member_id = :memberId";
    $stmt = $conn->prepare($query);

    // Bind parameters
    $stmt->bindParam(':newValue', $newValue);
    $stmt->bindParam(':memberId', $memberId, PDO::PARAM_INT);

    try {
        // Execute the statement
        $stmt->execute();
        // Check if any rows were affected
        $affectedRows = $stmt->rowCount();
        return ['success' => $affectedRows > 0];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    } 
}

// query 5 update
function updateTeamFormation($conn, $newValue, $formationId, $columnName) {
    // Prepare and execute the SQL update statement
    $query = "UPDATE team_formation SET $columnName = :newValue WHERE formation_id = :formationId";
    $stmt = $conn->prepare($query);

    // Bind parameters
    $stmt->bindParam(':newValue', $newValue);
    $stmt->bindParam(':formationId', $formationId, PDO::PARAM_INT);

    try {
        $stmt->execute();
        // Check if any rows were affected
        $affectedRows = $stmt->rowCount();
        return ['success' => $affectedRows > 0];
    } catch (PDOException $e) {
        return ['error' => $e->getMessage()];
    }
}

// Determine which function to call based on the `action` parameter
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (isset($data['action'])) {
    switch ($data['action']) {
        case 'updateLocation':
            $response = updateLocation($conn, $data['newValue'], $data['locationId'], $data['columnName']);
            break;
        case 'updatePersonnel':
            $response = updatePersonnel($conn, $data['newValue'], $data['personnelId'], $data['columnName']);
            break;
        case 'updateFamily':
            $response = updateFamily($conn, $data['newValue'], $data['familyId'], $data['columnName']);
            break;
        case 'updateMember':
            $response = updateClubMember($conn, $data['newValue'], $data['memberId'], $data['columnName']);
            break;
        case 'updateTeamFormation':
            $response = updateTeamFormation($conn, $data['newValue'], $data['formationId'], $data['columnName']);
            break;
        default:
            $response = ['error' => 'Invalid action'];
            break;
    }
} else {
    $response = ['error' => 'Missing action'];
}

echo json_encode($response);
?>