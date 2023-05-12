import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmib: true
    },
    {
        name: 'Himanshu Mishra',
        email: 'mishra@example.com',
        password:  bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jay Dev Sharma',
        email: 'jay@example.com',
        password:  bcrypt.hashSync('123456', 10),
    }
]

export default users