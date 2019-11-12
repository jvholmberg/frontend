import { SET_LOCAL_STORAGE, GET_LOCAL_STORAGE, DELETE_LOCAL_STORAGE } from './actions';

/**
 * Application specific storage actions
 */

export const setAccessToken = () => ({
  type: SET_LOCAL_STORAGE,
  payload: {
    key: 'accessToken'
  },
});

export const setRefreshToken = () => ({
  type: SET_LOCAL_STORAGE,
  payload: {
    key: 'refreshToken'
  },
});

export const getAccessToken = () => ({
  type: GET_LOCAL_STORAGE,
  payload: {
    key: 'accessToken'
  },
});

export const getRefreshToken = () => ({
  type: GET_LOCAL_STORAGE,
  payload: {
    key: 'refreshToken'
  },
});

export const deleteAccessToken = () => ({
  type: DELETE_LOCAL_STORAGE,
  payload: {
    key: 'accessToken'
  },
});

export const deleteRefreshToken = () => ({
  type: DELETE_LOCAL_STORAGE,
  payload: {
    key: 'refreshToken'
  },
});
