const fs = require('fs');
const index = require('../index');

// Generate HTML file
const generate = (teamProfileArr) => {
    //functions for different employee classes
    function genManagers(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Manager") {
                managerCardHTML.push(employee[i].managerCard);
            }
        }
    }

    function genEngineers(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Engineer") {
                engineerCardHTML.push(employee[i].engineerCard);
            }
        }
    }

    function genInterns(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Intern") {
                internCardHTML.push(employee[i].internCard);
            }
        }
    }


    //HTML Arrays
    let managerCardHTML = [];
    let engineerCardHTML = [];
    let internCardHTML = [];

    //generate arrays of cards
    genManagers(teamProfileArr);
    genEngineers(teamProfileArr);
    genInterns(teamProfileArr);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/style.css">
    <title>Team Profile</title>
</head>
<body>
    <header class="jumbotron">
        <div class="container">
            <div class='row align-center'> 
                <h1 class="text-center">The A Team</h1>
            </div>

        </div>
    </header>

    <main>
        <section class="container">
            <div class="row">
                ${managerCardHTML.join("")}
            </div>

            <section class='container'>
                <div class='row'>
                    ${engineerCardHTML.join(" ")}
                </div>
            </section>

            <hr class='mt-1 mb-4'/>

            <section class='container'>
                <div class='row'>
                    ${internCardHTML.join(" ")}
                </div>
            </section>

    </main>
</body>
</html>
`
}

const generateHTML = teamProfileArr => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/myteam.html', generate(teamProfileArr), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve(console.log(`
    ==========================================================
    File created! look in the dist folder for your myteam.html
    ==========================================================
    `))

        })
    })
}


module.exports = generateHTML;