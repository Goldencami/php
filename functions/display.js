// select table
const tableOutput = document.querySelector('#output-section table tbody');
const tableHead = document.querySelector('#output-section table thead');

// query person display
export function loadAllPersons(data) {
    tableHead.innerHTML = "<th>Person ID</th><th>First Name</th><th>Last Name</th><th>Date of Birth</th><th>Medical Number</th>" +
                            "<th>Phone Number</th><th>Address</th><th>Postal-Code</th><th>Email</th><th>SSN</th>";

    let tableHtml = "";

    data.forEach(function ({id, first_name, last_name, date_of_birth, medic_no, phone_no, address, postal_code, email, SSN}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${id}</td>`;
        tableHtml += `<td>${first_name}</td>`;
        tableHtml += `<td>${last_name}</td>`;
        tableHtml += `<td>${date_of_birth}</td>`;
        tableHtml += `<td>${medic_no}</td>`;
        tableHtml += `<td>${phone_no}</td>`;
        tableHtml += `<td>${address}</td>`;
        tableHtml += `<td>${postal_code}</td>`;
        tableHtml += `<td>${email}</td>`;
        tableHtml += `<td>${SSN}</td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 1 display
export function loadAllLocations(data) {
    tableHead.innerHTML = "<th>Location ID</th><th>Name</th><th>Address</th><th>Postal-Code</th><th>Phone Number</th>" +
                            "<th>Web Address</th><th>Location Type</th><th>Capacity</th><th>Edit</th><th>Delete</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='10'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({location_id, name, address, postal_code, phone_no, web_address, capacity, location_type}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${location_id}</td>`;
        tableHtml += `<td>${name}</td>`;
        tableHtml += `<td>${address}</td>`;
        tableHtml += `<td>${postal_code}</td>`;
        tableHtml += `<td>${phone_no}</td>`;
        tableHtml += `<td>${web_address}</td>`;
        tableHtml += `<td>${location_type}</td>`;
        tableHtml += `<td>${capacity}</td>`;
        tableHtml += `<td><button type="button" data-id="${location_id}" class="btn btn-warning locEditBtn">Edit</button></td>`;
        tableHtml += `<td><button type="button" data-id="${location_id}" class="btn btn-danger locDeleteBtn">Delete</button></td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 2 display
export function loadAllPersonnel(data) {
    tableHead.innerHTML = "<th>Personnel ID</th><th>Work Role</th><th>Madate</th><th>Is President</th><th>Is Manager</th><th>Edit</th><th>Delete</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='7'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({personnel_id, work_role, mandate, is_president, is_manager}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${personnel_id}</td>`;
        tableHtml += `<td>${work_role}</td>`;
        tableHtml += `<td>${mandate}</td>`;
        tableHtml += `<td>${is_president}</td>`;
        tableHtml += `<td>${is_manager}</td>`;
        tableHtml += `<td><button type="button" data-id="${personnel_id}" class="btn btn-warning personnelEditBtn">Edit</button></td>`;
        tableHtml += `<td><button type="button" data-id="${personnel_id}" class="btn btn-danger personnelDeleteBtn">Delete</button></td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 3 display
export function loadAllFamily(data) {
    tableHead.innerHTML = "<th>Family ID</th><th>First Name</th><th>Last Name</th><th>Date of Birth</th><th>Medical number</th>" +
                            "<th>Phone Number</th><th>Address</th><th>Postal-Code</th><th>Email</th><th>SSN</th><th>Edit</th><th>Delete</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='12'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({family_id, first_name, last_name, date_of_birth, medic_no, phone_no, address, postal_code, email, SSN}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${family_id}</td>`;
        tableHtml += `<td>${first_name}</td>`;
        tableHtml += `<td>${last_name}</td>`;
        tableHtml += `<td>${date_of_birth}</td>`;
        tableHtml += `<td>${medic_no}</td>`;
        tableHtml += `<td>${phone_no}</td>`;
        tableHtml += `<td>${address}</td>`;
        tableHtml += `<td>${postal_code}</td>`;
        tableHtml += `<td>${email}</td>`;
        tableHtml += `<td>${SSN}</td>`;
        tableHtml += `<td><button type="button" data-id="${family_id}" class="btn btn-warning famEditBtn">Edit</button></td>`;
        tableHtml += `<td><button type="button" data-id="${family_id}" class="btn btn-danger famDeleteBtn">Delete</button></td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 4 display
export function loadAllClubMembers(data) {
    tableHead.innerHTML = "<th>Club Member ID</th><th>Family 1 ID</th><th>Family 2 ID</th><th>Location ID</th><th>Gender</th><th>Age</th><th>Active</th><th>Edit</th><th>Delete</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='9'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({member_id, family_id1, family_id2, location_id, gender, age, active}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${member_id}</td>`;
        tableHtml += `<td>${family_id1}</td>`;
        tableHtml += `<td>${family_id2}</td>`;
        tableHtml += `<td>${location_id}</td>`;
        tableHtml += `<td>${gender}</td>`;
        tableHtml += `<td>${age}</td>`;
        tableHtml += `<td>${active}</td>`;
        tableHtml += `<td><button type="button" data-id="${member_id}" class="btn btn-warning clubMemEditBtn">Edit</button></td>`;
        tableHtml += `<td><button type="button" data-id="${member_id}" class="btn btn-danger clubMemDeleteBtn">Delete</button></td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 5 display
export function loadAllTeamFormation(data) {
    tableHead.innerHTML = "<th>Formation ID</th><th>Formation Type</th><th>Team 1 ID</th><th>Team 2 ID</th><th>Team 1 Score</th>" +
                            "<th>Team 2 Score</th><th>Winner</th><th>Created At</th><th>Edit</th><th>Delete</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='10'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({formation_id, formation_type, team_id1, team_id2, team1_score, team2_score, winner, created_at}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${formation_id}</td>`;
        tableHtml += `<td>${formation_type}</td>`;
        tableHtml += `<td>${team_id1}</td>`;
        tableHtml += `<td>${team_id2}</td>`;
        tableHtml += `<td>${team1_score}</td>`;
        tableHtml += `<td>${team2_score}</td>`;
        tableHtml += `<td>${winner}</td>`;
        tableHtml += `<td>${created_at}</td>`;
        tableHtml += `<td><button type="button" data-id="${formation_id}" class="btn btn-warning teamFormEditBtn">Edit</button></td>`;
        tableHtml += `<td><button type="button" data-id="${formation_id}" class="btn btn-danger teamFormDeleteBtn">Delete</button></td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 7
export function loadQ7(data) {
    tableHead.innerHTML = "<th>Address</th><th>City</th><th>Province</th><th>Postal-Code</th><th>Phone Number</th><th>Web Address</th><th>Location Type</th>" +
                            "<th>Capacity</th><th>First Name</th><th>Last Name</th><th>Number of Members</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='10'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({address, city, province, postal_code, phone_no, web_address, location_type, capacity, first_name, last_name, no_members}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${address}</td>`;
        tableHtml += `<td>${city}</td>`;
        tableHtml += `<td>${province}</td>`;
        tableHtml += `<td>${postal_code}</td>`;
        tableHtml += `<td>${phone_no}</td>`;
        tableHtml += `<td>${web_address}</td>`;
        tableHtml += `<td>${location_type}</td>`;
        tableHtml += `<td>${capacity}</td>`;
        tableHtml += `<td>${first_name}</td>`;
        tableHtml += `<td>${last_name}</td>`;
        tableHtml += `<td>${no_members}</td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 8
export function loadQ8(data) {
    tableHead.innerHTML = "<th>2nd Family First Name</th><th>2nd Family Last Name</th><th>2nd Family Phone Number</th><th>Club Member ID</th><th>First Name</th><th>Last Name</th><th>Date of Birth</th>" +
                            "<th>SSN</th><th>Medical Number/th><th>Phone Number</th><th>Address</th><th>City</th><th>Province</th><th>Postal-Code</th><th>Relationship</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='15'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({second_fam_first_name, second_fam_last_name, second_fam_phone, member_id, first_name, 
                            last_name, date_of_birth, SSN, medic_no, phone_no, address, city, province, postal_code, relationship}) {

        tableHtml += "<tr>";
        tableHtml += `<td>${second_fam_first_name}</td>`;
        tableHtml += `<td>${second_fam_last_name}</td>`;
        tableHtml += `<td>${second_fam_phone}</td>`;
        tableHtml += `<td>${member_id}</td>`;
        tableHtml += `<td>${first_name}</td>`;
        tableHtml += `<td>${last_name}</td>`;
        tableHtml += `<td>${date_of_birth}</td>`;
        tableHtml += `<td>${SSN}</td>`;
        tableHtml += `<td>${medic_no}</td>`;
        tableHtml += `<td>${phone_no}</td>`;
        tableHtml += `<td>${address}</td>`;
        tableHtml += `<td>${city}</td>`;
        tableHtml += `<td>${province}</td>`;
        tableHtml += `<td>${postal_code}</td>`;
        tableHtml += `<td>${relationship}</td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 9
export function loadQ9(data) {
    tableHead.innerHTML = "<th>Coach First Name</th><th>Coach Last Name</th><th>Formation Time</th><th>Address</th><th>Formation Type</th><th>Team Name</th>" +
                            "<th>Team 1 Score</th><th>Team 2 Score</th><th>Member First Name</th><th>Member Last Name</th><th>Member Role</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='11'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({c_first_name, c_last_name, form_time, form_address, formation_type, team_name, team1_score, team2_score, cm_first_name, cm_last_name, player_role}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${c_first_name}</td>`;
        tableHtml += `<td>${c_last_name}</td>`;
        tableHtml += `<td>${form_time}</td>`;
        tableHtml += `<td>${form_address}</td>`;
        tableHtml += `<td>${formation_type}</td>`;
        tableHtml += `<td>${team_name}</td>`;
        tableHtml += `<td>${team1_score}</td>`;
        tableHtml += `<td>${team2_score}</td>`;
        tableHtml += `<td>${cm_first_name}</td>`;
        tableHtml += `<td>${cm_last_name}</td>`;
        tableHtml += `<td>${player_role}</td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 10
export function loadQ10(data) {
    tableHead.innerHTML = "<th>Member ID</th><th>First Name</th><th>Last Name</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='3'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({member_id, first_name, last_name}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${member_id}</td>`;
        tableHtml += `<td>${first_name}</td>`;
        tableHtml += `<td>${last_name}</td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 11
export function loadQ11(data) {
    tableHead.innerHTML = "<th>Formation Address</th><th>Total Training Sessions</th><th>Total Players</th><th>Total Games</th><th>Total Players for Games</th>"

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({form_address, total_train_sessions, total_players_for_train, total_game_sessions, total_players_for_game}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${form_address}</td>`;
        tableHtml += `<td>${total_train_sessions}</td>`;
        tableHtml += `<td>${total_players_for_train}</td>`;
        tableHtml += `<td>${total_game_sessions}</td>`;
        tableHtml += `<td>${total_players_for_game}</td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 12-13-14-16
export function loadQ12To14_16(data) {
    tableHead.innerHTML = "<th>Member ID</th><th>First Name</th><th>Last Name</th><th>Age</th><th>Phone Number</th><th>Email</th><th>Location</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='7'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({member_id, first_name, last_name, age, phone_no, email, name}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${member_id}</td>`;
        tableHtml += `<td>${first_name}</td>`;
        tableHtml += `<td>${last_name}</td>`;
        tableHtml += `<td>${age}</td>`;
        tableHtml += `<td>${phone_no}</td>`;
        tableHtml += `<td>${email}</td>`;
        tableHtml += `<td>${name}</td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 15
export function loadQ15(data) {
    tableHead.innerHTML = "<th>First Name</th><th>Last Name</th><th>Phone Number</th>";

    if(data.length == 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='3'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({first_name, last_name, phone_no}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${first_name}</td>`;
        tableHtml += `<td>${last_name}</td>`;
        tableHtml += `<td>${phone_no}</td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 17
export function loadQ17(data) {
    tableHead.innerHTML = "<th>First Name</th><th>Last Name</th><th>Start Date</th><th>End Date</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='4'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({first_name, last_name, start_date, end_date}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${first_name}</td>`;
        tableHtml += `<td>${last_name}</td>`;
        tableHtml += `<td>${start_date}</td>`;
        tableHtml += `<td>${end_date}</td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}

// query 18
export function loadQ18(data) {
    tableHead.innerHTML = "<th>First Name</th><th>Last Name</th><th>Phone Number</th><th>Email</th><th>Location Name</th><th>Work Role</th>";

    if(data.length === 0) {
        tableOutput.innerHTML = "<tr><td class='no-data' colspan='6'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({first_name, last_name, phone_no, email, name, work_role}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${first_name}</td>`;
        tableHtml += `<td>${last_name}</td>`;
        tableHtml += `<td>${phone_no}</td>`;
        tableHtml += `<td>${email}</td>`;
        tableHtml += `<td>${name}</td>`;
        tableHtml += `<td>${work_role}</td>`;
        tableHtml += "</tr>";
    });

    tableOutput.innerHTML = tableHtml;
}