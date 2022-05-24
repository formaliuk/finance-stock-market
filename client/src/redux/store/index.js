import {createStore} from "redux";
import {reducer} from "../reducers";

export const initialState = {
    quotes: []
}

export function updateData(data) {
    return { type: 'UPDATE_DATA', payload: data }
}

export function deleteItem(data) {
    return { type: 'DELETE_ITEM', payload: data }
}

export const store = createStore(reducer, initialState)
