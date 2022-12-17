const { faker } = require('@faker-js/faker'); 

module.exports = 
    [
        {
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            password: (faker.random.alphaNumeric(8) + "!"),
            expectedUrl: "https://ui-automation-camp.vercel.app/products",
            expectedTitle: "Automation Camp Store"
        },
        {
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            password: (faker.random.alphaNumeric(8) + "!"),
            expectedUrl: "https://ui-automation-camp.vercel.app/products",
            expectedTitle: "Automation Camp Store"
        },
        {
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            password: (faker.random.alphaNumeric(8) + "!"),
            expectedUrl: "https://ui-automation-camp.vercel.app/products",
            expectedTitle: "Automation Camp Store"
        },
        {
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            password: (faker.random.alphaNumeric(8) + "!"),
            expectedUrl: "https://ui-automation-camp.vercel.app/products",
            expectedTitle: "Automation Camp Store"
        },
        {
            email: "hansel@catfish.com",
            password: "Password123!",
            expectedTitle: "Sign Up"
        }
    ]
;