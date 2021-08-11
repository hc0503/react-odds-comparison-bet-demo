export default {
	appName: process.env.REACT_APP_NAME ?? 'React App',
	apiKey: process.env.REACT_APP_API_KEY ?? 'YOUR_API_KEY',
	apiURL: process.env.REACT_APP_API_URL ?? 'https://api.the-odds-api.com/v3',
	backendURL: process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080',
	paypalClientId: process.env.REACT_APP_PAYPAL_CLIENTID ?? 'PAYPAL_CLIENT_ID',
	paypalPlanId: process.env.REACT_APP_PAYPAL_PLANID ?? 'PAYPAL_PLANID'
}