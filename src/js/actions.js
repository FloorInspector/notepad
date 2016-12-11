
export const ADD_NOTE = 'ADD_NOTE';

export function addNode(entry) {
    return {
        type: ADD_NOTE,
        payload: entry
    }
}