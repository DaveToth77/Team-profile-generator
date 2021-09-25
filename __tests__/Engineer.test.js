
const Engineer = require('../lib/Engineer');

test('Should create an Engineer object with a name, id, email and github username', () => {
    const engineer = new Engineer('Dave', '5', 'dave@gmail.com', 'davetoth77');

    expect(engineer.name).toEqual('Dave');
    expect(engineer.id).toEqual('5');
    expect(engineer.email).toEqual('dave@gmail.com');
    expect(engineer.github).toEqual('davetoth77');
    expect(engineer.role).toEqual('Engineer')
    })

test('should set the github username via the constructor function', () => {
    const input = "davetoth77"
    const result = new Engineer('Name', 5, 'dave@gmail.com', input.getGithub());
    
    expect(input).toEqual(result);
    
    })