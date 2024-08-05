import {
    // loadAllPersons,
    // deleteLocationRow,
    // updateLocationRow,
    // loadAllLocations,
    // deletePersonnelRow,
    // updatePersonnelRow,
    // loadAllPersonnel,
    // deleteFamilyRow,
    // loadAllFamily,
    // deleteClubMemberRow,
    // updateClubMemberRow,
    // loadAllClubMembers,
    // deleteTeamFormRow,
    // updateTeamFormRow,
    // loadAllTeamFormation,
    loadQ7
    // loadQ8,
    // loadQ9,
    // loadQ10,
    // loadQ11,
    // loadQ12To14_16,
    // loadQ15, 
    // loadQ17,
    // loadQ18,
    // locationPopUp,
    // personnelPopup,
    // familyPopup,
    // clubMemPopup,
    // updateFamilyRow,
    // teamFormPopup
} from './functions/display.js';

import {
    errorPopup
} from './functions/popup.js';

document.addEventListener('DOMContentLoaded', function() {
    // READ and Queries buttons for event listener
    const crud_section = document.getElementById('crud-section');
    const queries_section = document.getElementById('queries-section');

    const crudBtn = document.getElementById('crudBtn');
    crudBtn.addEventListener('click', function() {
        crud_section.style.display = 'block';
        queries_section.style.display = 'none';
    });

    const queriesBtn = document.getElementById('queriesBtn');
    queriesBtn.addEventListener('click', function() {
        queries_section.style.display = 'block';
        crud_section.style.display = 'none';
    });

    const Q7Btn = document.getElementById('q7Btn');
    Q7Btn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=getQ7')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                errorPopup(`API error: ${data.error}`);
            } else {
                loadQ7(data.data);
            }
        })
        .catch(err => {
            console.log('Fetch error:', err);
            errorPopup(`Fetch error: ${err.message}`);
        });
    });
});

// remove popup
const modal = document.getElementById('modal');
modal.addEventListener('click', function(event) {
    if(event.target.className == 'btn btn-light') {
        popup.innerHTML = "";
        modal.style.display = 'none'; 
    }
});