import axios from 'axios';
const baseURL = 'https://cli-serv-grupo1.herokuapp.com';

const axiosInstance = axios.create({
	baseURL,
	headers: {
		'content-type': 'application/octet-stream',
	},
});

class HttpClient {
	instance() {}
}

export default axiosInstance;
