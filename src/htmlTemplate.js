
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="./styles/style.css">
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
                    ${engineerCardsHTML.join(" ")}
                </div>
            </section>

            <hr class='mt-1 mb-4'/>

            <section class='container'>
                <div class='row'>
                    ${internCardsHTML.join(" ")}
                </div>
            </section>

    </main>
</body>
</html>
`
}

const generateHTML = (teamProfileArr) => {
    fs.writeFile('./dist/TheTeam.html'), generate(teamProfileArr), function(err, result) {
        (err) ? console.log('error', err): console.log('File generated, look in the dist file for your document')
    }
    }

    module.exports = generateHTML;