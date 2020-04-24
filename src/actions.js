import { CHANGE_SEARCH_FIELD } from './constants.js';

//action is going to take text and return an object of type/payload
export const setSearchField = (text) => ({
    type:  CHANGE_SEARCH_FIELD,
    payload: text
})