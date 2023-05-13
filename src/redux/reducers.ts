import { ADD_ITEM, DELETE_ITEM } from "./redux.types";

const items:string[] = ["uno","dos","tres"];

const initialState = {
  items
};


export const reducer = ( state = initialState , action:any) => {
    switch( action.type ){
      case  ADD_ITEM :
        return {...state, items: [ ...state.items, action.payload] } ;
      case DELETE_ITEM:
        return {...state, items: [ ...state.items.filter( item => item !== action.payload  ) ] } ;
      default:
        return state;
    }
};



