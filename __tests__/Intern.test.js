
const Intern = require('../lib/Intern');

test('Should create an intern object with a name, id, email, and school', () => {

    const intern = new Intern('Dave', '5', 'dave@gmail.com', 'UConn');

    expect(intern.name).toEqual('Dave');
    expect(intern.id).toEqual('5'),
    expect(intern.email).toEqual('dave@gmail.com'),
    expect(intern.school).toEqual('UConn');
    expect(intern.role).toEqual('Intern')
})