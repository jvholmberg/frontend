import {
	makeRequest,
	forceRequest,
	removeRequest,
	REQUEST_METHOD,
	FORCE_REQUEST,
	REMOVE_REQUEST,
} from '../middleware/Requests';
import {
	getFromStorage,
	createObjectForStorageActions,
	LOCAL_STORAGE,
} from '../middleware/Storage';

/**
 * Login user
 */
export const GET_JWT = 'GET_JWT';
export const getJwt = (values) =>
	makeRequest({
		type: GET_JWT,
		url: `/api/users/auth`,
		method: REQUEST_METHOD.POST,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		body: values,
	});

/**
 * Validate jwt-token
 */
export const VALIDATE_JWT = 'VALIDATE_JWT';
export const validateJwt = () => ({
	...forceRequest({
		type: VALIDATE_JWT,
		url: '/api/users/auth',
		method: REQUEST_METHOD.GET,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
	}),
	...getFromStorage([
		createObjectForStorageActions(LOCAL_STORAGE, 'accessToken', null, (e) => ({
			key: `${FORCE_REQUEST}.headers.Authorization`,
			value: `Bearer ${e}`
		}))
	]),
});

/**
 * Refresh jwt-token
 */
export const REFRESH_JWT = 'REFRESH_JWT';
export const refreshJwt = () => ({
	...forceRequest({
		type: REFRESH_JWT,
		method: REQUEST_METHOD.GET,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
	}),
	...getFromStorage([
		createObjectForStorageActions(LOCAL_STORAGE, 'refreshToken', null, (e) => ({
			key: `${FORCE_REQUEST}.url`,
			value: `/api/users/auth/${e}`
		})),
		createObjectForStorageActions(LOCAL_STORAGE, 'accessToken', null, (e) => ({
			key: `${FORCE_REQUEST}.headers.Authorization`,
			value: `Bearer ${e}`
		}))
	]),
});

/**
 * Destroy jwt-token
 */
export const DESTROY_JWT = 'DESTROY_JWT';
export const destroyJwt = () => ({
	...forceRequest({
    type: DESTROY_JWT,
    url: `/api/users/auth`,
		method: REQUEST_METHOD.DELETE,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
	}),
	...getFromStorage([
		createObjectForStorageActions(LOCAL_STORAGE, 'accessToken', null, (e) => ({
			key: `${FORCE_REQUEST}.headers.Authorization`,
			value: `Bearer ${e}`
		}))
	]),
});