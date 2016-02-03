import axios from 'axios';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const ORDER_ITEM = 'ORDER_ITEM';
export const FETCH_ITEM = 'FETCH_ITEM';
export const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS';
export const FETCH_OWN_ITEMS = 'FETCH_OWN_ITEMS';
export const APPROVE_ITEM = 'APPROVE_ITEM';
export const SHOW_PAGE = 'SHOW_PAGE';

export const ROOT_URL = 'http://localhost:9090/api';

export function logIn(user) {
  const request = axios.post(`${ROOT_URL}/login`, null ,{ auth: user });

  return {
    type: LOG_IN,
    payload: request
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
    payload: {}
  };
}

export function orderItem(user_id,item) {
  const request = axios.post(`${ROOT_URL}/users/${user_id}/items`, item);

  return {
    type: ORDER_ITEM,
    payload: request
  };
}

export function fetchItem(user_id,item_id) {
  const request = axios.get(`${ROOT_URL}/users/${user_id}/items/${item_id}`);

  return {
    type: FETCH_ITEM,
    payload: request
  };
}

export function fetchAllItems() {
  const request = axios.get(`${ROOT_URL}/items`);

  return {
    type: FETCH_ALL_ITEMS,
    payload: request
  };
}

export function fetchOwnItems(user_id) {
  const request = axios.get(`${ROOT_URL}/users/${user_id}/items`);

  return {
    type: FETCH_OWN_ITEMS,
    payload: request
  };
}

export function approveItem(user_id, item) {
  const request = axios.put(`${ROOT_URL}/users/${user_id}/items/${item.id}`, item);

  return {
    type: APPROVE_ITEM,
    payload: request
  };
}

export function showPage(pageNumber) {
  return {
    type: SHOW_PAGE,
    payload: { selected: pageNumber }
  };
}