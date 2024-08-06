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

// query 1 delete
export function deleteLocationRow(locationId) {
    fetch('CRUD/delete.php', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({ action: 'deleteLocation', id: locationId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            errorPopup(data.error);  // Handle the error message
        } else {
            console.log('Delete successful:', data);
            fetch('CRUD/read.php?query=allLocations')
            .then(response => response.json())
            .then(data => loadAllLocations(data));
        }
    })
    .catch(error => errorPopup(error));
}

// query 2 delete
export function deletePersonnelRow(personnelId) {
    fetch('CRUD/delete.php', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({ action: 'deletePersonnel', id: personnelId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            errorPopup(data.error);  // Handle the error message
        } else {
            console.log('Delete successful:', data);
            fetch('CRUD/read.php?query=allPersonnel')
            .then(response => response.json())
            .then(data => loadAllPersonnel(data));
        }
    })
    .catch(error => errorPopup(error));
}

// query 3 delete
export function deleteFamilyRow(familyId) {
    fetch('CRUD/delete.php', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({ action: 'deleteFamily', id: familyId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            errorPopup(data.error);  // Handle the error message
        } else {
            console.log('Delete successful:', data);
            fetch('CRUD/read.php?query=allFamily')
            .then(response => response.json())
            .then(data => loadAllFamily(data));
        }
    })
    .catch(error => errorPopup(error));
}

// query 4 delete
export function deleteClubMemberRow(memberId) {
    fetch('CRUD/delete.php', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({ action: 'deleteMember', id: memberId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            errorPopup(data.error);  // Handle the error message
        } else {
            console.log('Delete successful:', data);
            fetch('CRUD/read.php?query=allClubMembers')
            .then(response => response.json())
            .then(data => loadAllClubMembers(data));
        }
    })
    .catch(error => errorPopup(error));
}

// query 5 delete
export function deleteTeamFormRow(formationId) {
    fetch('CRUD/delete.php', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({ action: 'deleteFormation', id: formationId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            errorPopup(data.error);  // Handle the error message
        } else {
            console.log('Delete successful:', data);
            fetch('CRUD/read.php?query=allTeamFormation')
            .then(response => response.json())
            .then(data => loadAllTeamFormation(data));
        }
    })
    .catch(error => errorPopup(error));
}