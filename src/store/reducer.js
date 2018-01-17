import * as actionType from './action';

const initialState = {
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
}

const reducer = (state = initialState, action) => {
  switch(action) {
    default: 
      return state
  }
}

export default reducer;