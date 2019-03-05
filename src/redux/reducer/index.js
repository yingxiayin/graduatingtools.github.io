import { type } from './../action'

/*
* 传输初始化*/
const initialState = {
  "studentID": '',
  "studentPassword": '',
  "studentMajor": '',
  "J": '',
  "S": '',
  "FL": '',
  "GC": '',
  "PA": '',
  "NS": '',
  "NC": '',
  "CC": '',
  "Credit": '',
};

export default (state = initialState, action) =>{
  switch (action.type) {
    case type.SEND_DATA :
      return{
        ...state,
        "studentID": action.studentData.studentID,
        "studentPassword": action.studentData.studentPassword,
        "studentMajor": action.studentData.studentMajor,
        "J": action.studentData.isAttendJLesson,
        "S": action.studentData.isAttendSLesson,
        "FL": action.studentData.isAttendFLesson,
        "GC": action.studentData.totalCreditOfGeneralCourse,
        "PA": action.studentData.totalCreditOfPACourse,
        "NS": action.studentData.totalCreditOfNSCourse,
        "NC": action.studentData.totalCreditOfNCourse,
        "CC": action.studentData.totalCreditOfCCourse,
        "Credit": action.studentData.totalCreditOfCourse,
      };
    default :
      return{
        ...state,
      };
  }
}