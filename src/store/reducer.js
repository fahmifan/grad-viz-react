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
    id: null,
    quiz_title: 'hello',
    created_at: '',
    value: '',
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionType.SUBMIT_QUIZ: 
      const countId = state.countId;
      const newQuizCopy = state.newQuiz;
      return {
        ...state,
        "countId": countId + 1,
        "user": {
          ...state.user,
          "quizes": [
            ...state.user.quizes,
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
    case actionType.CHANGE_FORM: 
      return {
        ...state,
        countId: countId + 1,
        newQuiz: {
          ...state.newQuiz,
          id: countId + 1,
          [action.field]: action.value
        }
      }
    default: 
      return state
  }
}

export default reducer;