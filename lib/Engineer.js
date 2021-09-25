
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
        this.engineerCard = 
        `<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
            <div class='card engineer'>
                <div class='card-body'>
                    <h4 class='card-title text-center'>${name}</h4>
                    <h5 class='text-center'><i class="fas fa-code"></i>&nbsp Engineer</h5>
                    <div class='card'>
                        <ul class='list-group list-group-flush'>
                            <li class='list-group-item'>EMPLOYEE ID:&nbsp ${id}</li>
                            <li class='list-group-item'>EMAIL:&nbsp <a href="mailto:${email}">${email}</a></li>
                            <li class='list-group-item'>GITHUB USERNAME:&nbsp <a href="https://github.com/${this.github}">${this.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`    }


getGithub() { return this.github};
getRole() { return this.role};
}

module.exports = Engineer;