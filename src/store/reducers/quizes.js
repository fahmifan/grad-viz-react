import * as actionTypes from '../actions/actionTypes';

const initState = {
  quizes: null,
  newQuiz: {
    quiz_title: '',
    created_at: '',
    value: '',
  }
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes.SUBMIT_QUIZ: 
      const countId = state.countId;
      const newQuizCopy = state.newQuiz;
      return {
        ...state,
        countId: countId + 1,
        quizes: {
          ...state.quizes,
          quizes: [
            ...state.quizes.quizes,
            {
              ...newQuizCopy,
              id: countId + 1
            }
          ]
        },
        newQuiz: {
          ...newQuizCopy,
          id: null,
          quiz_title: '',
          created_at: '',
          value: ''
        }
      }
    case actionTypes.CHANGE_FORM: 
      return {
        ...state,
        countId: countId + 1,
        newQuiz: {
          ...state.newQuiz,
          id: countId + 1,
          [action.field]: action.value
        }
      }
  }
}

export default reducer;