require('dotenv').config();

const config = {
	spaces: {
		senderId: process.env.SPACES_SENDER_ID,
		defaultSpace: process.env.SPACES_DEFAULT_SPACE,
		token: process.env.SPACES_TOKEN
	},
	whatsapp: {
		nr: '+31342788105'
	},
	cpaas: {
		accountSid: process.env.CPAAS_ACCOUNT_SID,
		authToken: process.env.CPAAS_AUTH_TOKEN,
		deploymentId: process.env.CPAAS_DEPLOYMENT_ID
	},
	dialogflow: {
		projectId: process.env.DIALOGFLOW_PROJECT_ID,
		sessionId: process.env.DIALOGFLOW_SESSION_ID,
		languageCode: process.env.DIALOGFLOW_LANGUAGE_CODE,
		privateKey: process.env.DIALOGFLOW_PRIVATE_KEY,
		clientEmail: process.env.DIALOGFLOW_CLIENT_EMAIL
	}
}

module.exports = config;