const id = 'ACc41a82b3e71e61feaddc9169a3352ca0';
const token = '32831d6cc9e30d9124537d831aa118ae';

// Importing the Twilio module
const twilio = require('twilio');

// Creating a client
const client = twilio(id, token);

// Sending messages to the client

const sendnotification = (req, res) => {
    const { to, body } = req.body;

    client.messages.create({
        to: `whatsapp:+91${to}`,
        from: 'whatsapp:+14155238886',
        body: body
    }).then((message) => console.log(message.sid));
    res.send('Message sent');
}

// client.messages
//     .create({

//         // Message to be sent
//         body: 'Hello from Neeraj',

//         // Senders Number (Twilio Sandbox No.)
//         from: 'whatsapp:+14155238886',

//         // Number receiving the message
//         to: 'whatsapp:+919111669642'
//     })
//     .then(message => console.log("Message sent successfully"))
//     .done();

module.exports = { sendnotification }