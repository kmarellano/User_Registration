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
                'firstname': faker.name.firstName(),
                'lastname': faker.name.lastName(),
                'email': faker.internet.email(),
                'password': faker.internet.password(),
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