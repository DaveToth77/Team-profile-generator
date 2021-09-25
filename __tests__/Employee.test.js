
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 5, "Dave@example.com");

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(5);
    expect(employee.email).toBe('Dave@example.com');
})

test('should set the name via the constructor', () => {
    const input = "Dave";
    const expected = {"name": "Dave", "id": 1, "email": "name@name.com"};
    
    const result = new Employee(input, 1, "name@name.com");

    expect(result).toEqual(expected);
    });

test('should set the Employee ID via the constructor', () => {
    const input = 100;
        const expected = {"name": "First Last", "id": 100, "email": "name@name.com"};
        
        const result = new Employee("First Last", input, "name@name.com");

        expect(result).toEqual(expected);
        });

test('Should set the email vis the constructor', () => {
    const input = "dave@gmail.com";
    const expected = {"name": "First Last", "id": 1, "email": "dave@gmail.com"};
    
    const result = new Employee("First Last", 1, input);

    expect(result).toEqual(expected);
    });