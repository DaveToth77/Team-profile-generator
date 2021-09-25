
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email) 
this.officeNumber = officeNumber;
this.role = 'Manager';
this.managerCard =
            `<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                <div class='card manager'>
                    <div class='card-body'>
                        <h4 class='card-title text-center'>${name}</h4>
                        <h5 class='card-title text-center'><i class="fas fa-book"></i>&nbsp Manager</h5>
                        <div class='card'>
                            <ul class='list-group list-group-flush'>
                                <li class='list-group-item'>EMPLOYEE ID:&nbsp ${id}</li>
                                <li class='list-group-item'>EMAIL:&nbsp <a href="mailto:${email}">${email}</a></li>
                                <li class='list-group-item'>OFFICE NUMBER:&nbsp ${this.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
        }
    }

    getOfficeNumber= () => { return this.officeNumber};
    getRole = () => { return this.role};
    getOfficeNumber();
    getRole();
    module.exports = Manager;