
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
        this.internCard = 
            `<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                <div class='card intern'>
                    <div class='card-body'>
                    <h4 class='card-title text-center'>${name}</h4>
                    <h5 class='text-center'><i class="fas fa-coffee"></i>&nbsp Intern</h5>
                        <div class='card'>
                            <ul class='list-group list-group-flush'>
                                <li class='list-group-item'>EMPLOYEE ID:&nbsp ${id}</li>
                                <li class='list-group-item'>EMAIL:&nbsp <a href="mailto:${email}">${email}</a></li>
                                <li class='list-group-item'>SCHOOL:&nbsp ${this.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`

    }
}
getSchool = () =>{ return this.school; };
getRole = () =>{ return this.role; };
getSchool()
getRole()

module.exports = Intern;