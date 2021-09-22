
const Intern = require('../lib/Intern');

test('Should create an intern object with a name, id, email, and school', () => {

    const intern = new Intern('Dave', 5, 'dave@gmail.com', 'UConn');

    expect(intern.name).to.equal('Dave');
    expect(intern.id).to.equal('5'),
    expect(intern.email).to.equal('dave@gmail.com'),
    expect(intern.school).to.equal('UConn');
    expect(intern.role).to.equal('Intern')
})