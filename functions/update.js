import {
    loadAllLocations,
    loadAllPersonnel,
    loadAllFamily,
    loadAllClubMembers,
    loadAllTeamFormation
} from './display.js'

import {
    errorPopup
} from './popup.js'

// query 1 update
export function updateLocationRow(inputArr, locationId, updType) {
    let req_body = { action: 'updateLocation' }
    if(updType === 'name') {
        req_body = {
            ...req_body,
            newValue: inputArr[0].value,
            locationId: locationId,
            columnName: updType
        };
    }
    else if(updType === 'address') {
        req_body = {
            ...req_body,
            newValue: inputArr[1].value,
            locationId: locationId,
            columnName: updType
        };
    }
    else if(updType === 'postal_code') {
        req_body = {
            ...req_body,
            newValue: inputArr[2].value,
            locationId: locationId,
            columnName: updType
        };
    }
    else if(updType === 'phone_no') {
        req_body = {
            ...req_body,
            newValue: inputArr[3].value,
            locationId: locationId,
            columnName: updType
        };
    }
    else if(updType === 'web_address') {
        req_body = {
            ...req_body,
            newValue: inputArr[4].value,
            locationId: locationId,
            columnName: updType
        };
    }
    else if(updType === 'capacity') {
        req_body = {
            ...req_body,
            newValue: parseInt(inputArr[5].value),
            locationId: locationId,
            columnName: updType
        };
    }
    else if(updType === 'location_type') {
        req_body = {
            ...req_body,
            newValue: inputArr[6].value,
            locationId: locationId,
            columnName: updType
        };
    }

    console.log(req_body)
    fetch('CRUD/update.php', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body)
    })
    .then(response => response.json())
    .then(data => {
        if(data.error) {
            errorPopup(data.error);  // Handle the error message
        } else {
            console.log('Response Data:', data)
            fetch('CRUD/read.php?query=allLocations')
            .then(response => response.json())
            .then(data => loadAllLocations(data));
        }
    })
    .catch(error => errorPopup(error));
}

// query 2 update
export function updatePersonnelRow(inputArr, personnelId, updType) {
    let req_body = { action: 'updatePersonnel' }
    if(updType === 'work_role') {
        req_body = {
            ...req_body,
            newValue: inputArr[0].value,
            personnelId: personnelId,
            columnName: updType
        };
    }
    else if(updType === 'mandate') {
        req_body = {
            ...req_body,
            newValue: inputArr[1].value,
            personnelId: personnelId,
            columnName: updType
        };
    }
    else if(updType === 'is_president') {
        req_body = {
            ...req_body,
            newValue: parseInt(inputArr[2].value),
            personnelId: personnelId,
            columnName: updType
        };
    }
    else if(updType === 'is_manager') {
        req_body = {
            ...req_body,
            newValue: parseInt(inputArr[3].value),
            personnelId: personnelId,
            columnName: updType
        };
    }

    console.log(req_body)
    fetch('CRUD/update.php', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body)
    })
    .then(response => response.json())
    .then(data => {
        if(data.error) {
            errorPopup(data.error);  // Handle the error message
        } else {
            console.log('Response Data:', data)
            fetch('CRUD/read.php?query=allPersonnel')
            .then(response => response.json())
            .then(data => loadAllPersonnel(data));
        }
    })
    .catch(error => errorPopup(error));
}

// query 3 update
export function updateFamilyRow(inputArr, familyId, updType) {
    let req_body = { action: 'updateFamily' }
    if(updType === 'phone_no') {
        req_body = {
            ...req_body,
            newValue: inputArr[0].value,
            familyId: familyId,
            columnName: updType
        };
    }
    else if(updType === 'address') {
        req_body = {
            ...req_body,
            newValue: inputArr[1].value,
            familyId: familyId,
            columnName: updType
        };
    }
    else if(updType === 'postal_code') {
        req_body = {
            ...req_body,
            newValue: inputArr[2].value,
            familyId: familyId,
            columnName: updType
        };
    }

    console.log(req_body)
    fetch('CRUD/update.php', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body)
    })
    .then(response => response.json())
    .then(data => {
        if(data.error) {
            errorPopup(data.error);  // Handle the error message
        } else {
            console.log('Response Data:', data)
            fetch('CRUD/read.php?query=allFamily')
            .then(response => response.json())
            .then(data => loadAllFamily(data));
        }
    })
    .catch(error => errorPopup(error));
}

// query 4 update
export function updateClubMemberRow(inputArr, memberId, updType) {
    let req_body = { action: 'updateMember' }
    if(updType === 'family_id1') {
        req_body = {
            ...req_body,
            newValue: parseInt(inputArr[0].value),
            memberId: memberId,
            columnName: updType
        };
    }
    else if(updType === 'family_id2') {
        req_body = {
            ...req_body,
            newValue: parseInt(inputArr[1].value),
            memberId: memberId,
            columnName: updType
        };
    }
    else if(updType === 'gender') {
        req_body = {
            ...req_body,
            newValue: inputArr[2].value,
            memberId: memberId,
            columnName: updType
        };
    }
    else if(updType === 'age') {
        req_body = {
            ...req_body,
            newValue: parseInt(inputArr[3].value),
            memberId: memberId,
            columnName: updType
        };
    }
    else if(updType === 'active') {
        req_body = {
            ...req_body,
            newValue: parseInt(inputArr[4].value),
            memberId: memberId,
            columnName: updType
        };
    }

    console.log(req_body)
    fetch('CRUD/update.php', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body)
    })
    .then(response => response.json())
    .then(data => {
        if(data.error) {
            errorPopup(data.error);  // Handle the error message
        } else {
            console.log('Response Data:', data)
            fetch('CRUD/read.php?query=allClubMembers')
            .then(response => response.json())
            .then(data => loadAllClubMembers(data));
        }
    })
    .catch(error => errorPopup(error));
}

// query 5 update
export function updateTeamFormRow(inputArr, formationId, updType) {
    let req_body = { action: 'updateTeamFormation' }
    if(updType === 'formation_type') {
        req_body = {
            ...req_body,
            newValue: inputArr[0].value,
            formationId: formationId,
            columnName: updType
        };
    }
    else if(updType === 'team1_id') {
        req_body = {
            ...req_body,
            newValue: parseInt(inputArr[1].value),
            formationId: formationId,
            columnName: updType
        };
    }
    else if(updType === 'team2_id') {
        req_body = {
            ...req_body,
            newValue: parseInt(inputArr[2].value),
            formationId: formationId,
            columnName: updType
        };
    }
    else if(updType === 'team1_score') {
        req_body = {
            ...req_body,
            newValue: parseInt(inputArr[3].value),
            formationId: formationId,
            columnName: updType
        };
    }
    else if(updType === 'team2_score') {
        req_body = {
            ...req_body,
            newValue: parseInt(inputArr[4].value),
            formationId: formationId,
            columnName: updType
        };
    }

    console.log(req_body)
    fetch('CRUD/update.php', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body)
    })
    .then(response => response.json())
    .then(data => {
        if(data.error) {
            errorPopup(data.error);  // Handle the error message
        } else {
            console.log('Response Data:', data)
            fetch('CRUD/read.php?query=allTeamFormation')
            .then(response => response.json())
            .then(data => loadAllTeamFormation(data));
        }
    })
    .catch(error => errorPopup(error));
}