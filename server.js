const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const config = require('./config');
const webhookDialogflow = require('./controllers/dialogflowWebhook');
const spaces = require('./controllers/spacesController');

const app = express();

// Setup views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define routers
const whatsappRouter = require('./routes/whatsapp');
const spacesRouter = require('./routes/spaces');

// Setup app
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/whatsapp', whatsappRouter);
app.use('/spaces', spacesRouter);


// WEBHOOK for receiving Google Dialogflow messages
app.post('/dialogflow/webhook', webhookDialogflow)


// CALLBACK URL for receiving Whatsapp messages
app.post('/cpaas/callback', (req, res) => {
	const data = req.body;
	if (data._EventType === 'message_event' && data.Direction === 'inbound') {	
		const messageText = data.Body;
		const senderID = data.From;
		const senderName = data.RecipientName;
		spaces.sendWhatsappToSpace('[' + senderName + ']: ' + messageText);
	}
});


// ********* Express server **********
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Now listening on port ${port}...`));