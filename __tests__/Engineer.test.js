
const Engineer = require('../lib/Engineer');

test('Should create an Engineer object with a name, id, email and github username', () => {
    const engineer = new Engineer('Dave', 5, 'dave@gmail.com', 'davetoth77');

    expect(engineer.name).to.equal('Dave');
    expect(engineer.id).to.equal('5');
    expect(engineer.email).to.equal('dave@gmail.com');
    expect(engineer.github).to.equal('davetoth77');
    expect(engineer.role).to.equal('Engineer')
    })

    test('should set the github username via the constructor function', () => {
        const input = "davetoth77"
        const result = new Engineer('Name', 5, 'dave@gmail.com', input.getGithub());
        
        expect(input).toEqual(result);
        
    })