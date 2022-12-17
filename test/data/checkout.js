const { faker } = require('@faker-js/faker'); 

module.exports = 
    [
        {
            fullName: faker.name.fullName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            streetAddress: faker.address.streetAddress(),
            apt: '413',
            city: faker.address.city(),
            country: 'United States',
            province: 'Florida',
            zipcode: faker.address.zipCode(),
            cardNumber: '4242 4242 4242 4242',
            cardExp: '06/25',
            cardCVV: '123',
            expectedMsgTitle: "Thank you for your order",
            expectedUrl: "https://ui-automation-camp.vercel.app/products#/order/"
        },
        {
            fullName: faker.name.fullName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            streetAddress: faker.address.streetAddress(),
            apt: '413',
            city: faker.address.city(),
            country: 'United States',
            province: 'Florida',
            zipcode: faker.address.zipCode(),
            cardNumber: '4242 4242 4242 4242',
            cardExp: '06/25',
            cardCVV: '123',
            expectedMsgTitle: "Thank you for your order",
            expectedUrl: "https://ui-automation-camp.vercel.app/products#/order/"
        },
        {
            fullName: faker.name.fullName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            streetAddress: faker.address.streetAddress(),
            apt: '413',
            city: faker.address.city(),
            country: 'United States',
            province: 'Florida',
            zipcode: faker.address.zipCode(),
            cardNumber: '4242 4242 4242 4242',
            cardExp: '06/25',
            cardCVV: '123',
            expectedMsgTitle: "Thank you for your order",
            expectedUrl: "https://ui-automation-camp.vercel.app/products#/order/"
        },
        {
            fullName: faker.name.fullName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            streetAddress: faker.address.streetAddress(),
            apt: '413',
            city: faker.address.city(),
            country: 'United States',
            province: 'Florida',
            zipcode: faker.address.zipCode(),
            cardNumber: '4242 4242 4242 4242',
            cardExp: '06/25',
            cardCVV: '123',
            expectedMsgTitle: "Thank you for your order",
            expectedUrl: "https://ui-automation-camp.vercel.app/products#/order/"
        },
        {
            fullName: faker.name.fullName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            streetAddress: faker.address.streetAddress(),
            apt: '413',
            city: faker.address.city(),
            country: 'United States',
            province: 'Florida',
            zipcode: faker.address.zipCode(),
            cardNumber: '4242 4242 4242 4242',
            cardExp: '06/25',
            cardCVV: '123',
            expectedMsgTitle: "Thank you for your order",
            expectedUrl: "https://ui-automation-camp.vercel.app/products#/order/"
        },
    ]
;