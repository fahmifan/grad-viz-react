import * as actionType from './action';

const initialState = {
  countId: 5,
  user: {
    "id": 1,
    "title": "Matematika",
    "created_at": "2018-01-15 14:46:47",
    "updated_at": "2018-01-15 14:46:47",
    "quizes": [
      {
        "id": 1,
        "quiz_title": "Quiz 1",
        "value": 80,
        "created_at": "2018-01-15",
        "updated_at": "2018-01-15"
      },
      {
        "id": 2,
        "quiz_title": "Quiz 2",
        "value": 65,
        "created_at": "2018-01-15",
        "updated_at": "2018-01-15"
      },
      {
        "id": 3,
        "quiz_title": "Quiz 3",
        "value": 100,
        "created_at": "2018-01-15",
        "updated_at": "2018-01-15"
      },
      {
        "id": 4,
        "quiz_title": "Quiz 4",
        "value": 85,
        "created_at": "2018-01-15",
        "updated_at": "2018-01-15"
      }
    ]
  },
  newQuiz: {
    title: 'hello',
    date: '',
    score: '',
  }
}

const reducer = (state = initialState, action) => {
  switch(action) {
    case actionType.SUBMIT_QUIZ: 
      const countId = state.countId;
      return {
        countId: countId + 1,
        user: {
          ...state.user,
          quizes: [
            ...state.user.quizes,
            state.newQuiz
          ]
        }
      }
    case actionType.CHANGE_FORM: 
      console.log('change form');
      return {
        ...state,
        newQuiz: {
          ...state.newQuiz,
          [action.type]: action.value
        }
      }
    default: 
      return state
  }
}

export default reducer;