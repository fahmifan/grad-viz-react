import * as actionTypes from '../actions/actionTypes';

const initState = {
  students: null,
  error: null,
  loading: false
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes.INIT_STUDENTS: 
      return {
        ...state,
        loading: true
      }
    case actionTypes.INIT_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.students,
        loading: false
      }
    case actionTypes.INIT_STUDENTS_FAIL:
     return {
      ...state,
      loading: false,
      error: action.error
     }
    default: return state
  }
}

export default reducer;