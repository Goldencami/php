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