const modal = document.getElementById('modal');
const popup = document.querySelector('#modal #popup');

export function locationPopUp(locationId) {
    let popuphtml = '<div class="container" id="edit-container">';
    popuphtml += '<p>Edit Location Table</p>';
    popuphtml += editInput("editLocName", "updLocation", "Name", "text", "name", locationId, 'location');
    popuphtml += editInput("editLocAddress", "updLocation", "Address", "text", "address", locationId, 'location');
    popuphtml += editInput("editLocPc", "updLocation", "Postal-Code", "text", "postal_code", locationId, 'location');
    popuphtml += editInput("editLocPhone", "updLocation", "Phone Number", "text", "phone_no", locationId, 'location');
    popuphtml += editInput("editLocWeb", "updLocation", "Web Address", "text", "web_address", locationId, 'location');
    popuphtml += editInput("editLocCapacity", "updLocation", "Capacity", "number", "capacity", locationId, 'location');
    popuphtml += editInput("editLocType", "updLocation", "Location Type", "text", "location_type", locationId, 'location');
    popuphtml += '</div>';

    popuphtml += '<div class="container" id="btnContainer">';
    popuphtml += '<button type="button" id="closeBtn" class="btn btn-light">Close</button>';
    popuphtml += '</div>';

    popup.innerHTML += popuphtml;
    modal.style.display = 'block';
}

export function personnelPopup(personnelId) {
    let popuphtml = '<div class="container" id="edit-container">';
    popuphtml += '<p>Edit Personnel Table</p>';
    popuphtml += editInput("editPersRole", "updPersonnel", "Work Role", "text", "work_role", personnelId, 'personnel');
    popuphtml += editInput("editPersMandate", "updPersonnel", "Mandate", "text", "mandate", personnelId, 'personnel');
    popuphtml += editInput("editPersPres", "updPersonnel", "Is President? (1 or 0)", "number", "is_president", personnelId, 'personnel');
    popuphtml += editInput("editPersMng", "updPersonnel", "Is Manager? (1 or 0)", "number", "is_manager", personnelId, 'personnel');
    popuphtml += '</div>';

    popuphtml += '<div class="container" id="btnContainer">';
    popuphtml += '<button type="button" id="closeBtn" class="btn btn-light">Close</button>';
    popuphtml += '</div>';

    popup.innerHTML += popuphtml;
    modal.style.display = 'block';
}

export function familyPopup(familyId) {
    let popuphtml = '<div class="container" id="edit-container">';
    popuphtml += '<p>Edit Family Member Table</p>';
    popuphtml += editInput("editPhone", "updFamily", "Phone Number", "text", "phone_no", familyId, 'family_member');
    popuphtml += editInput("editAddress", "updFamily", "Address", "text", "address", familyId, 'family_member');
    popuphtml += editInput("editPostal", "updFamily", "Postal-Code", "text", "postal_code", familyId, 'family_member');
    popuphtml += '</div>';

    popuphtml += '<div class="container" id="btnContainer">';
    popuphtml += '<button type="button" id="closeBtn" class="btn btn-light">Close</button>';
    popuphtml += '</div>';

    popup.innerHTML += popuphtml;
    modal.style.display = 'block';
}

export function clubMemPopup(memberId) {
    let popuphtml = '<div class="container" id="edit-container">';
    popuphtml += '<p>Edit Club Member Table</p>';
    popuphtml += editInput("editMemFam1", "updMember", "Family Member 1 ID", "number", "family_id1", memberId, 'club_member');
    popuphtml += editInput("editMemFam2", "updMember", "Family Member 2 ID", "number", "family_id2", memberId, 'club_member');
    popuphtml += editInput("editGenderId", "updMember", "Gender(F or M)", "text", "gender", memberId, 'club_member');
    popuphtml += editInput("editAgeId", "updMember", "Age", "number", "age", memberId, 'club_member');
    popuphtml += editInput("editActvId", "updMember", "Active? (1 or 0)", "number", "active", memberId, 'club_member');
    popuphtml += '</div>';

    popuphtml += '<div class="container" id="btnContainer">';
    popuphtml += '<button type="button" id="closeBtn" class="btn btn-light">Close</button>';
    popuphtml += '</div>';

    popup.innerHTML += popuphtml;
    modal.style.display = 'block';
}

export function teamFormPopup(formationId) {
    let popuphtml = '<div class="container" id="edit-container">';
    popuphtml += '<p>Edit Club Member Table</p>';
    popuphtml += editInput("editFormType", "updFormation", "Formation Type(Game or Training Session)", "text", "formation_type", formationId, 'team_formation');
    popuphtml += editInput("editTeam1Id", "updFormation", "Team 1 ID", "number", "team_id1", formationId, 'team_formation');
    popuphtml += editInput("editTeam2Id", "updFormation", "Team 2 ID", "number", "team_id2", formationId, 'team_formation');
    popuphtml += editInput("editScore1", "updFormation", "Team 1 Score", "number", "team1_score", formationId, 'team_formation');
    popuphtml += editInput("editScore2", "updFormation", "Team 2 Score", "number", "team2_score", formationId, 'team_formation');
    popuphtml += '</div>';

    popuphtml += '<div class="container" id="btnContainer">';
    popuphtml += '<button type="button" id="closeBtn" class="btn btn-light">Close</button>';
    popuphtml += '</div>';

    popup.innerHTML += popuphtml;
    modal.style.display = 'block';
}

function editInput(input, inputClass, labelText, inputType, setType, data, table) {
    let editHtml = '<div class="container-fluid">';
    editHtml += `<label for="${input}">${labelText}: </label>`;
    editHtml += `<input type="${inputType}" id="${input}" class="${inputClass}" name="${input}" required>`;
    editHtml += `<button type="button" id="${setType}" data-id="${data}" class="btn btn-warning btn-sm ${table}">Update</button>`;
    editHtml += '</div>';
    return editHtml
}

// display popup
export function errorPopup(err) {
    let popuphtml = '<div class="container" id="edit-container">';
    popuphtml += `<p>${err}</p>`;
    popuphtml += '</div>';

    popuphtml += '<div class="container" id="btnContainer">';
    popuphtml += '<button type="button" id="closeBtn" class="btn btn-light">Close</button>';
    popuphtml += '</div>';

    popup.innerHTML += popuphtml;
    modal.style.display = 'block';
}