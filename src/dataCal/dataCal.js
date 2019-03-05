import axios from 'axios'

/*
* 发送请求获取成绩数据*/
export default function request(studentID, studentPassword, thisP){

  return new Promise((resolve, reject)=>{
    axios({
      method: 'post',
      datatype: 'json',
      url: 'http://localhost:1323/test',
      data: {
        Sid: studentID,
        Pwd: studentPassword,
      }
    }).then(function (response) {
      console.log(response);
      if (response.status === 200){
        console.log(response.data);
        let result = response;
        thisP.setState({
          "J": result.data.isAttendJLesson,
          "S": result.data.isAttendSLesson,
          "FL": result.data.isAttendFLesson,
          "GC": result.data.totalCreditOfGeneralCourse,
          "PA": result.data.totalCreditOfPACourse,
          "NS": result.data.totalCreditOfNSCourse,
          "NC": result.data.totalCreditOfNCourse,
          "CC": result.data.totalCreditOfCCourse,
          "Credit": result.data.totalCreditOfCourse,
        });
        console.log(result);
        resolve(result);
        } else {
        reject(response.data);
      }
    }).catch(function (error) {
      console.log(error);
    });
  })
};

