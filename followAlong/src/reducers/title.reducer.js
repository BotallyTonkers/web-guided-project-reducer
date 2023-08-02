import { SET_TITLE } from "../actions/title.actions"

export const initialState = {
    title: 'Hello earthlings!',
    editing: false,
    newTitleText: ''
}

export const reducer = (state, action) => {
    switch(action.type) {
        case(SET_TITLE):
            return ({...state, title: payload.title, newTitleText: '', editing: false})
        case(TOGGLE_EDITING):
            return ({...state, editing: !state.editing})
        case(SET_NEW_TEXT_TITLE):
            return ({...state, newTitleText: payload.newTitleText})
        default:
            return (state);
    }
}