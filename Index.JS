const url = 'https://zillow-base1.p.rapidapi.com/WebAPIs/zillow/homedetails/nearbyHomes?zpid=30584218';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ad6b6426aemshdfa22108bf6bf33p1b0f42jsn3187b2484492',
		'x-rapidapi-host': 'zillow-base1.p.rapidapi.com'
	}
};
async function getdata() {
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}}