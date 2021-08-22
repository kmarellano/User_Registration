const faker = require('faker');
const User = require('./user.model');
const connectDatabase = require('../db');

const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config/env' });

connectDatabase();

const seedUsers = async() => {
    try {
        await User.deleteMany();
        console.log("Items Reset");
        for (var i = 0; i < 10; i++) {
            let users = await User.create({
                'username': faker.internet.userName(),
                'email': faker.internet.email(),
                'password': faker.internet.password(),
                'name': `${faker.name.firstName()} ${faker.name.lastName()}`,
                'address': faker.address.streetAddress(),
                'phone': faker.datatype.number(),
                'birthday': faker.datatype.datetime(),
            });
            console.log(users);
        }
        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedUsers();