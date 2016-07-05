import {FETCH_WEATHER} from '../actions/index'

const weather = (state = [], action) => {
  switch (action.type) {
   case FETCH_WEATHER:
      return [action.payload.data, ...state]
   default:
     return state
   }

   return state
}

export default weather
