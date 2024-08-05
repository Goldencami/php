<?php
header('Content-Type: application/json');
require '../database.php';

function query7($conn) {
    $sql = "SELECT location.address, postal_codes.city, postal_codes.postal_code, 
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
            ORDER BY postal_codes.province, postal_codes.city ASC";

    
    $result = $conn->query($sql);

    if ($result === false) {
        return ['error' => 'Query failed: ' . $conn->error];
    }

    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    return ['data' => $data];
}


// Determine which query to run based on the 'query' parameter
$queryType = isset($_GET['query']) ? $_GET['query'] : '';
switch ($queryType) {
    case 'getQ7':
        $response = query7($conn);
        break;
    case 'getQ8':
        $response = query8($conn);
        break;
    default:
        $response = ['error' => 'Invalid query type'];
        break;
}

// Output the JSON response
// echo json_encode($response);
echo json_encode(['message' => 'Test successful']);

// Close the connection
$conn->close();
?>
