const { faker } = require('@faker-js/faker'); 

module.exports = 
    [
        {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            subject: "Cannot purchase hat",
            message: "When will you restock?! I really want to purchase this item.",
            expectedMsgTitle: "Message Sent!",
            expectedMsgBody: "Your message has been sent!"
        },
        {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            subject: "Hp Laptop overheating ",
            message: "My laptop is overheating. Is there someone I can talk to about a refund?",
            expectedMsgTitle: "Message Sent!",
            expectedMsgBody: "Your message has been sent!"
        },
        {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            subject: "Poor Quality sweatshirt",
            message: "I want a refund!",
            expectedMsgTitle: "Message Sent!",
            expectedMsgBody: "Your message has been sent!"
        },
        {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            subject: "I love my new Mackbook",
            message: "This is an amazing store!",
            expectedMsgTitle: "Message Sent!",
            expectedMsgBody: "Your message has been sent!"
        },
        {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(undefined, undefined, 'gmail.com'),
            subject: "Quality Socks",
            message: "When will you restock the Quality knitted socks?",
            expectedMsgTitle: "Message Sent!",
            expectedMsgBody: "Your message has been sent!"
        }
    ]
;