const Manager = require('../lib/Manager');

test('Creates a Manager object with a name, id, email and office number', () => {
    const manager = new Manager('Dave', '5', 'dave@gmail.com', '101');

    expect(manager.name).toEqual('Dave');
    expect(manager.id).toEqual('5');
    expect(manager.email).toEqual('dave@gmail.com');
    expect(manager.officeNumber).toEqual('101');
    expect(manager.role).toEqual('Manager')

})