import { ADD_ITEM, DELETE_ITEM } from "./redux.types";

export const removeItemRedux = ( item:any ) => {
    return { type: DELETE_ITEM , payload: item };
};

export const appendItem = (value:string) => {
   return { type: ADD_ITEM , payload: value };
};

