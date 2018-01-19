import * as actionTypes from './actionTypes';

export const initStudents = (students) => {
  return {
    type: actionTypes.INIT_STUDENTS,
    students: students
  }
}

export const fetchStudents = () => {
  return {

  }
}