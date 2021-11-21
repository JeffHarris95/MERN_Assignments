const express = require("express");
const app = express();
const port = 8000;

app.listen( port, () => console.log(`Listening on port: ${port}`) );

const faker = require("faker");


// const faker = require("faker");
// const app = faker();

const createUser = () => {
    const newFakeUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newFakeUser;
};

const createCompany = () => {
    const newFakeCompany = {
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFakeCompany;
};

app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    res.json( newFakeUser );
});

app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    res.json( newFakeCompany );
});

app.get("/api/user/company/", (req, res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    res.json({
        user: newFakeUser,
        company: newFakeCompany
    });
});