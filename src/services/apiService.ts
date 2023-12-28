import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = '';

type AxiosData = AxiosRequestConfig['data'];
type AxiosParams = AxiosRequestConfig['params'];

const API = {
	request(config: {
		url: string;
		method: string;
		params?: AxiosParams;
		data?: AxiosData;
	}): Promise<AxiosResponse> {
		return new Promise((resolve, reject) => {
			const headers = {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				'ngrok-skip-browser-warning': true,
			};

			axios({ baseURL, headers, withCredentials: false, ...config })
				.then((response) => resolve(response))
				.catch((error) => reject(error));
		});
	},
	get(url: string, params?: AxiosParams) {
		return this.request({
			url,
			method: 'GET',
			params,
		});
	},
	post(url: string, data: AxiosData) {
		return this.request({
			url,
			method: 'POST',
			data,
		});
	},
	put(url: string, data: AxiosData) {
		return this.request({
			url,
			method: 'PUT',
			data,
		});
	},
	patch(url: string, data: AxiosData) {
		return this.request({
			url,
			method: 'PATCH',
			data,
		});
	},
	delete(url: string) {
		return this.request({
			url,
			method: 'DELETE',
		});
	},
};

export default API;
