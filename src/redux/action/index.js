export const type = {
  SEND_DATA: 'SEND_DATA',
};

export function sendStudentData(studentData) {
  return{
    type: type.SEND_DATA,
    studentData,
  }
}
