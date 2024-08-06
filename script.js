import {
    loadAllPersons,
    loadAllLocations,
    loadAllPersonnel,
    loadAllFamily,
    loadAllClubMembers,
    loadAllTeamFormation,
    loadQ7,
    loadQ8,
    loadQ9,
    loadQ10,
    loadQ11,
    loadQ15,
    loadQ12To14_16,
    loadQ17,
    loadQ18
} from './functions/display.js'

import {
    deleteLocationRow,
    deletePersonnelRow,
    deleteFamilyRow,
    deleteClubMemberRow,
    deleteTeamFormRow
} from './functions/delete.js'

import {
    updateLocationRow,
    updatePersonnelRow,
    updateFamilyRow,
    updateClubMemberRow,
    updateTeamFormRow
} from './functions/update.js'

import {
    locationPopUp,
    personnelPopup,
    familyPopup,
    clubMemPopup,
    teamFormPopup,
    errorPopup
} from './functions/popup.js';

document.addEventListener('DOMContentLoaded', () => {
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

    // Queries buttons to fetch data
    const allLocationBtn = document.getElementById('q1Btn');
    allLocationBtn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=allLocations')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadAllLocations(data);
            }
        })
        .catch(err => errorPopup(err));
    });
    
    const allPersonBtn = document.getElementById('persBtn');
    allPersonBtn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=allPersons')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadAllPersons(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const allPersonnelBtn = document.getElementById('q2Btn');
    allPersonnelBtn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=allPersonnel')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadAllPersonnel(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const allFamilyBtn = document.getElementById('q3Btn');
    allFamilyBtn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=allFamily')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadAllFamily(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const allClubMemBtn = document.getElementById('q4Btn');
    allClubMemBtn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=allClubMembers')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadAllClubMembers(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const allTeamFormBtn = document.getElementById('q5Btn');
    allTeamFormBtn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=allTeamFormation')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadAllTeamFormation(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const Q7Btn = document.getElementById('q7Btn');
    Q7Btn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=query7')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ7(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const Q8Btn = document.getElementById('q8Btn');
    Q8Btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const familyId = document.getElementById('FamilyMemId').value;

        fetch(`CRUD/read.php?query=query8&familyId=${familyId}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ8(data);
            }
        })
        .catch(err => errorPopup(err)); 
    });

    const Q9Btn = document.getElementById('q9Btn');
    Q9Btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        let location_day = document.getElementById('location-day').value;
        const loc_dayArr = location_day.split(';')
        loc_dayArr.forEach((element, index) => {
            loc_dayArr[index] = element.trim();
        });

        fetch(`CRUD/read.php?query=query9&address=${loc_dayArr[0]}&date=${loc_dayArr[1]}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ9(data);
            }
        })
        .catch(err => errorPopup(err));   
    });

    const Q10Btn = document.getElementById('q10Btn');
    Q10Btn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=query10')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ10(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const Q11Btn = document.getElementById('q11Btn');
    Q11Btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        let date_range = document.getElementById('team-time').value;
        const datesArr = date_range.split(';')
        datesArr.forEach((element, index) => {
            datesArr[index] = element.trim();
        });

        fetch(`CRUD/read.php?query=query11&date1=${datesArr[0]}&date2=${datesArr[1]}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ11(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const Q12Btn = document.getElementById('q12Btn');
    Q12Btn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=query12')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ12To14_16(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const Q13Btn = document.getElementById('q13Btn');
    Q13Btn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=query13')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ12To14_16(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const Q14Btn = document.getElementById('q14Btn');
    Q14Btn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=query14')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ12To14_16(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const Q15Btn = document.getElementById('q15Btn');
    Q15Btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const address = document.getElementById('q15_address').value;

        fetch(`CRUD/read.php?query=query15&address=${address}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ15(data);
            }
        })
        .catch(err => errorPopup(err)); 
    });

    const Q16Btn = document.getElementById('q16Btn');
    Q16Btn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=query16')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ12To14_16(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const Q17Btn = document.getElementById('q17Btn');
    Q17Btn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=query17')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ17(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    const Q18Btn = document.getElementById('q18Btn');
    Q18Btn.addEventListener('click', function() {
        fetch('CRUD/read.php?query=query18')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                errorPopup(data.error);  // Handle error from get
            } else {
                loadQ18(data);
            }
        })
        .catch(err => errorPopup(err));
    });

    // display popup
    tableOutput.addEventListener('click', function(event) {
        if(event.target.className === 'btn btn-warning locEditBtn') {
            console.log(`location with id ${event.target.dataset.id} is being updated`);
            locationPopUp(event.target.dataset.id);
        }
        else if(event.target.className === 'btn btn-warning personnelEditBtn') {
            console.log(`personnel with id ${event.target.dataset.id} is being updated`);
            personnelPopup(event.target.dataset.id);
        }
        else if(event.target.className === 'btn btn-warning famEditBtn') {
            console.log(`family member with id ${event.target.dataset.id} is being updated`);
            familyPopup(event.target.dataset.id);
        }
        else if(event.target.className === 'btn btn-warning clubMemEditBtn') {
            console.log(`club member with id ${event.target.dataset.id} is being updated`);
            clubMemPopup(event.target.dataset.id);
        }
        else if(event.target.className === 'btn btn-warning teamFormEditBtn') {
            console.log(`team formation with id ${event.target.dataset.id} is being updated`);
            teamFormPopup(event.target.dataset.id);
        }
    });

    // remove popup
    const modal = document.getElementById('modal');
    modal.addEventListener('click', function(event) {
        if(event.target.className == 'btn btn-light') {
            popup.innerHTML = "";
            modal.style.display = 'none'; 
        }
    });
});


// INSERT buttons
const createBtns = document.querySelectorAll('.createBtn');
for(let i=0; i < 6; i++) {
    createBtns[i].addEventListener('click', function() {
        if(createBtns[i].id === 'createQ1Btn') {
            console.log('you clicked create a location!');
            let newLocation = document.getElementById('newLocation').value;
            const locationArr = newLocation.split(';');
            locationArr.forEach((element, index) => {
                locationArr[index] = element.trim();
            });
        
            if(locationArr.length === 7) {
                locationArr[6] = parseInt(locationArr[6]);
        
                fetch('CRUD/create.php', {
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({ action: 'insertLocation', attributes: locationArr })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        errorPopup(data.error);  // Handle error from inserting
                    } else {
                        fetch('CRUD/read.php?query=allLocations')
                        .then(response => response.json())
                        .then(data => loadAllLocations(data));  
                    }
                })
                .catch(err => errorPopup(err));
            }
            else {
                errorPopup("Please enter exactly 9 attributes separated by semicolons.");
            }
        }
        else if(createBtns[i].id === 'createPersBtn') {
            console.log('you clicked create a person!')
            let newPerson = document.getElementById('newPerson').value;
            const personArr = newPerson.split(';');
            personArr.forEach((element, index) => {
                personArr[index] = element.trim();
            });
            
            if(personArr.length === 9) {
                fetch('CRUD/create.php', {
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({ action: 'insertPerson', attributes: personArr })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        errorPopup(data.error);  // Handle error from inserting
                    } else {
                        fetch('CRUD/read.php?query=allPersons')
                        .then(response => response.json())
                        .then(data => loadAllPersons(data));  
                    }
                })
                .catch(err => errorPopup(err));
            }
            else {
                errorPopup("Please enter exactly 11 attributes separated by semicolons.");
            }
        }
        else if(createBtns[i].id === 'createQ2Btn') {
            console.log('you clicked create a personnel!')
            let newPersonnel = document.getElementById('newPersonnel').value;
            const personnelArr = newPersonnel.split(';');
            personnelArr.forEach((element, index) => {
                personnelArr[index] = element.trim();
            });
            
            if(personnelArr.length === 5) {
                personnelArr[3] = parseInt(personnelArr[3]);
                personnelArr[4] = parseInt(personnelArr[4]);
        
                fetch('CRUD/create.php', {
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({ action: 'insertPersonnel', attributes : personnelArr })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        errorPopup(data.error);  // Handle error from inserting
                    } else {
                        fetch('CRUD/read.php?query=allPersonnel')
                        .then(response => response.json())
                        .then(data => loadAllPersonnel(data));  
                    }
                })
                .catch(err => errorPopup(err));
            }
            else {
                errorPopup("Please enter exactly 5 attributes separated by semicolons.");
            }
        }
        else if(createBtns[i].id === 'createQ3Btn') {
            console.log('you clicked create a family member!')
            let newFamMem = document.getElementById('newFamMem').value;
            const familyArr = newFamMem.split(';');
            familyArr.forEach((element, index) => {
                familyArr[index] = element.trim();
            });

            if(familyArr.length === 1 && familyArr[0] !== '') {
                familyArr[0] = parseInt(familyArr[0]);
                fetch('CRUD/create.php', {
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({ action: 'insertFamily', attributes : familyArr })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        errorPopup(data.error);  // Handle error from inserting
                    } else {
                        fetch('CRUD/read.php?query=allFamily')
                        .then(response => response.json())
                        .then(data => loadAllFamily(data));  
                    }
                })
                .catch(err => errorPopup(err));
            }
            else {
                errorPopup("Please enter exactly 1 attribute separated by semicolons.");
            }
        }
        else if(createBtns[i].id === 'createQ4Btn') {
            console.log('you clicked create a club member!')
            let newClubMem = document.getElementById('newClubMem').value;
            const memberArr = newClubMem.split(';');
            memberArr.forEach((element, index) => {
                memberArr[index] = element.trim();
            });
            
            if(memberArr.length === 7) {
                memberArr[0] = parseInt(memberArr[0]);
                memberArr[1] = parseInt(memberArr[1]);
                memberArr[2] = parseInt(memberArr[2]);
                memberArr[3] = parseInt(memberArr[3]);
                memberArr[5] = parseInt(memberArr[5]);
                memberArr[6] = parseInt(memberArr[6]);
        
                fetch('CRUD/create.php', {
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({ action: 'insertClubMember', attributes : memberArr })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        errorPopup(data.error);  // Handle error from inserting
                    } else {
                        fetch('CRUD/read.php?query=allClubMembers')
                        .then(response => response.json())
                        .then(data => loadAllClubMembers(data));  
                    }
                })
                .catch(err => errorPopup(err));
            }
            else {
                errorPopup("Please enter exactly 7 attributes separated by semicolons.");
            }
        }
        else if(createBtns[i].id === 'createQ5Btn') {
            console.log('you clicked create a team formation!')
            let newTeamForm = document.getElementById('newteamForm').value;
            const FormationArr = newTeamForm.split(';');
            FormationArr.forEach((element, index) => {
                FormationArr[index] = element.trim();
            });
            
            if(FormationArr.length === 5) {
                FormationArr[1] = parseInt(FormationArr[1]);
                FormationArr[2] = parseInt(FormationArr[2]);
                FormationArr[3] = parseInt(FormationArr[3]);
                FormationArr[4] = parseInt(FormationArr[4]);

                console.log(FormationArr)
        
                fetch('CRUD/create.php', {
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({ action: 'insertTeamFormation', attributes : FormationArr })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        errorPopup(data.error);  // Handle error from inserting
                    } else {
                        fetch('CRUD/read.php?query=allTeamFormation')
                        .then(response => response.json())
                        .then(data => loadAllTeamFormation(data));  
                    }
                })
                .catch(err => errorPopup(err));
            }
            else {
                errorPopup("Please enter exactly 7 attributes separated by semicolons.");
            }
        }
    });
}

// select table
const tableOutput = document.querySelector('#output-section table tbody');

// DELETE buttons
tableOutput.addEventListener('click', function(event) {
    if(event.target.className == 'btn btn-danger locDeleteBtn') {
        deleteLocationRow(event.target.dataset.id)
        console.log(`location with id ${event.target.dataset.id} got deleted`)

        fetch('CRUD/read.php?query=allLocations')
        .then(response => response.json())
        .then(data => loadAllLocations(data));
    }
    else if(event.target.className == 'btn btn-danger personnelDeleteBtn') {
        deletePersonnelRow(event.target.dataset.id)
        console.log(`personnel with id ${event.target.dataset.id} got deleted`)

        fetch('CRUD/read.php?query=allPersonnel')
        .then(response => response.json())
        .then(data => loadAllPersonnel(data));
    }
    else if(event.target.className == 'btn btn-danger famDeleteBtn') {
        deleteFamilyRow(event.target.dataset.id)
        console.log(`family with id ${event.target.dataset.id} got deleted`)

        fetch('CRUD/read.php?query=allFamily')
        .then(response => response.json())
        .then(data => loadAllFamily(data));
    }
    else if(event.target.className == 'btn btn-danger clubMemDeleteBtn') {
        deleteClubMemberRow(event.target.dataset.id)
        console.log(`club member with id ${event.target.dataset.id} got deleted`)

        fetch('CRUD/read.php?query=allClubMembers')
        .then(response => response.json())
        .then(data => loadAllClubMembers(data));
    }
    else if(event.target.className == 'btn btn-danger teamFormDeleteBtn') {
        deleteTeamFormRow(event.target.dataset.id)
        console.log(`team formation with id ${event.target.dataset.id} got deleted`)

        fetch('CRUD/read.php?query=allTeamFormation')
        .then(response => response.json())
        .then(data => loadAllTeamFormation(data)); 
    }
});

// UPDATE buttons
const popup = document.querySelector('#modal #popup');
popup.addEventListener('click', function(event) {
    if(event.target.className == 'btn btn-warning btn-sm location') {
        console.log(`button with id: ${event.target.dataset.id} will update ${event.target.id}`);
        const updInfo = document.querySelectorAll('.updLocation');
        updateLocationRow(updInfo, event.target.dataset.id, event.target.id);

        fetch('CRUD/read.php?query=allLocations')
        .then(response => response.json())
        .then(data => loadAllLocations(data));
    }
    else if(event.target.className == 'btn btn-warning btn-sm personnel') {
        console.log(`button with id: ${event.target.dataset.id} will update ${event.target.id}`);
        const updInfo = document.querySelectorAll('.updPersonnel');
        updatePersonnelRow(updInfo, event.target.dataset.id, event.target.id);

        fetch('CRUD/read.php?query=allPersonnel')
        .then(response => response.json())
        .then(data => loadAllPersonnel(data));  
    }
    else if(event.target.className == 'btn btn-warning btn-sm family_member') {
        console.log(`button with id: ${event.target.dataset.id} will update ${event.target.id}`);
        const updInfo = document.querySelectorAll('.updFamily');
        console.log(updInfo)
        updateFamilyRow(updInfo, event.target.dataset.id, event.target.id);

        fetch('CRUD/read.php?query=allFamily')
        .then(response => response.json())
        .then(data => loadAllFamily(data));  
    }
    else if(event.target.className == 'btn btn-warning btn-sm club_member') {
        console.log(`button with id: ${event.target.dataset.id} will update ${event.target.id}`);
        const updInfo = document.querySelectorAll('.updMember');
        updateClubMemberRow(updInfo, event.target.dataset.id, event.target.id);

        fetch('CRUD/read.php?query=allClubMembers')
        .then(response => response.json())
        .then(data => loadAllClubMembers(data));  
    }
    else if(event.target.className == 'btn btn-warning btn-sm team_formation') {
        console.log(`button with id: ${event.target.dataset.id} will update ${event.target.id}`);
        const updInfo = document.querySelectorAll('.updFormation');
        updateTeamFormRow(updInfo, event.target.dataset.id, event.target.id);

        fetch('CRUD/read.php?query=allTeamFormation')
        .then(response => response.json())
        .then(data => loadAllTeamFormation(data));  
    }
});