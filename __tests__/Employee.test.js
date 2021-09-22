
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 5, "Dave@example.com");

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(5);
    expect(employee.email).toBe('Dave@example.com');
})

