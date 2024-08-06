<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Youth Soccer Club System (YSCS)</title>
</head>
<body>
    <header>
        <h1>Welcome to the Youth Soccer Club System (YSCS)</h1>
        <p>Select to create/read/update/delete (CRUD) a table or display the predetermined queries (queries 7-18)</p>
        <button id="crudBtn" type="button" class="btn btn-primary btn-lg">CRUD</button>
        <button id="queriesBtn" type="button" class="btn btn-primary btn-lg">Queries</button>
    </header>

    <section id="crud-section">
        <div class="container" id="crud">
            <h3>This section allows you to insert new tuples into the following tables</h3>
            <h6>**Please separate the attribute using semicolons, some attributes can be NULL** <br>
                **personnel_id, family_id and member_id refer to the id from Person**</h6>

            <div class="container-fluid" id="create-location">
                <label for="newLocation">Create Location: </label>
                <input type="text" id="newLocation" name="newLocation" placeholder="7 attributes" required>
                <button id="createQ1Btn" type="button" class="btn btn-success createBtn">Create</button>
                <button id="q1Btn" type="button" class="btn btn-secondary">Display</button>
                <div class="form-text inputHelp">Insertion Order: (name, address, postal_code, phone_no, web_address, location_type, capacity)</div>
            </div>

            <div class="container-fluid" id="create-person">
                <label for="newPerson">Create Person: </label>
                <input type="text" id="newPerson" name="newPerson" placeholder="9 attributes" required>
                <button id="createPersBtn" type="button" class="btn btn-success createBtn">Create</button>
                <button id="persBtn" type="button" class="btn btn-secondary">Display</button>
                <div class="form-text inputHelp">Insertion Order: (first_name, last_name, date_of_birth, medic_no, phone_no, address, postal_code, email, SSN)</div>
            </div>

            <div class="container-fluid" id="create-personnel">
                <label for="newPersonnel">Create Personnel: </label>
                <input type="text" id="newPersonnel" name="newPersonnel" placeholder="5 attributes" required>
                <button id="createQ2Btn" type="button" class="btn btn-success createBtn">Create</button>
                <button id="q2Btn" type="button" class="btn btn-secondary">Display</button>
                <div class="form-text inputHelp">Insertion Order: (personnel_id, work_role, mandage, is_president, is_manager)</div>
            </div>

            <div class="container-fluid" id="create-FamMem">
                <label for="newFamMem">Create Family Member: </label>
                <input type="text" id="newFamMem" name="newFamMem" placeholder="1 attribute" required>
                <button id="createQ3Btn" type="button" class="btn btn-success createBtn">Create</button>
                <button id="q3Btn" type="button" class="btn btn-secondary">Display</button>
                <div class="form-text inputHelp">Insertion Order: (family_id)</div>
            </div>

            <div class="container-fluid" id="create-clubMem">
                <label for="newClubMem">Create Club Member: </label>
                <input type="text" id="newClubMem" name="newClubMem" placeholder="7 attributes" required>
                <button id="createQ4Btn" type="button" class="btn btn-success createBtn">Create</button>
                <button id="q4Btn" type="button" class="btn btn-secondary">Display</button>
                <div class="form-text inputHelp">Insertion Order: (member_id, family_id1, family_id2, location_id, gender, age, active)</div>
            </div>

            <div class="container-fluid" id="create-teamForm">
                <label for="newteamForm">Create Team Formation: </label>
                <input type="text" id="newteamForm" name="newteamForm" placeholder="5 attributes" required>
                <button id="createQ5Btn" type="button" class="btn btn-success createBtn">Create</button>
                <button id="q5Btn" type="button" class="btn btn-secondary">Display</button>
                <div class="form-text inputHelp">Insertion Order: (formation_type, team_id1, team_id2, team1_score, team2_score)</div>
            </div>
        </div>
    </section>

    <section id="queries-section">
        <div class="container" id="queries">
            <h3>This section allows you to select predetermined queries</h3>

            <div class="row">
                <div class="col">
                    <div class="container-fluid" id="q7">
                        <h5>Query 7</h5>
                        <p>Get complete details for every location in the system.</p>
                        <button id="q7Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
                <div class="col">
                    <div class="container-fluid">
                        <h5>Query 8</h5>
                        <p>For a given family member, get details of the secondary family member and all the associated club members with the primary family member.</p>
                        <label for="FamilyMemId">Family Member ID: </label>
                        <input type="number" id="FamilyMemId" name="FamilyMemId" required>
                        <button id="q8Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
                <div class="col">
                    <div class="container-fluid">
                        <h5>Query 9</h5>
                        <p>For a given location and day, <span id="semicolons">separated by semicolons</span>, get details of all the teams formations recorded in the system.</p>
                        <label for="location-day">Location address and day(YY-MM-DD) : </label>
                        <input type="text" id="location-day" name="location-day" required>
                        <button id="q9Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="container-fluid">
                        <h5>Query 10</h5>
                        <p>Get details of club members who are currently active and have been associated with at least four different locations and are members for at most two years.</p>
                        <button id="q10Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
                <div class="col">
                    <div class="container-fluid">
                        <h5>Query 11</h5>
                        <p>For a given period of, <span id="semicolons">separated by semicolons</span>, give a report of the teams’ formations for all the locations.</p>
                        <label for="team-time">Dates (YY-MM-DD): </label>
                        <input type="text" id="team-time" name="team-time" required>
                        <button id="q11Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
                <div class="col">
                    <div class="container-fluid">
                        <h5>Query 12</h5>
                        <p>Get a report of all active club members who have never been assigned to any formation team session.</p>
                        <button id="q12Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="container-fluid">
                        <h5>Query 13</h5>
                        <p>Get a report of all active club members who have only been assigned as goalkeepers in all the formation team sessions they have been assigned to.</p>
                        <button id="q13Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
                <div class="col">
                    <div class="container-fluid">
                        <h5>Query 14</h5>
                        <p>Get a report of all active club members who have only been assigned at least once to every role throughout all the formation team game sessions.</p>
                        <button id="q14Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
                <div class="col">
                    <div class="container-fluid">
                        <h5>Query 15</h5>
                        <p>For a given location, get the list of all family members who have currently active club members associated with them and are also head coaches for the same location.</p>
                        <label for="q15_address">Location Address: </label>
                        <input type="text" id="q15_address" name="q15_address" required>
                        <button id="q15Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="container-fluid">
                        <h5>Query 16</h5>
                        <p>Get a report of all active club members who have never lost a game in which they played in.</p>
                        <button id="q16Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
                <div class="col">
                    <div class="container-fluid">
                        <h5>Query 17</h5>
                        <p>Get a report of all the personnels who were president of the club at least once or is currently president of the club.</p>
                        <button id="q17Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
                <div class="col">
                    <div class="container-fluid">
                        <h5>Query 18</h5>
                        <p>Get a report of all volunteer personnels who are not family members of any club  member.</p>
                        <button id="q18Btn" type="button" class="btn btn-secondary">Display</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="output-section">
        <div class="container-fluid" id="output">
            <h3>Results</h3>
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
    </section>

    <div id="modal">
        <div class="container" id="popup"></div>
    </div>

    <script type="module" src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>