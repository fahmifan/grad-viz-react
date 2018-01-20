import * as actionTypes from './actionTypes';
import axios from '../../axios-students';

export const initStudents = () => {
  return {
    type: actionTypes.INIT_STUDENTS
  }
}

export const initStudentsSuccess = (students) => {
  return {
    type: actionTypes.INIT_STUDENTS_SUCCESS,
    students: students
  }
}

export const initStudentsFail = (error) => {
  return {
    type: actionTypes.INIT_STUDENTS_FAIL,
    error: error
  }
} 

export const fetchStudents = dispatch => {
  return dispatch => {
    dispatch(initStudents());
    axios.get('/student')
      .then(res => {
        dispatch(initStudentsSuccess(res.data));
        console.log(res.data);
      })
      .catch(error => {
        dispatch(initStudentsFail(error));
      })
  }
}
