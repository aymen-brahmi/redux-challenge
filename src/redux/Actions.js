import {ADD,DELETE,DONE} from './Actions-types';

export const addHandler = ()=> {
    return{
        type: ADD,
    }
}
export const doneHandler = ()=> {
    return{
        type: DONE,
    }
}
export const deleteHandler = ()=> {
    return{
        type: DELETE,
    }
}