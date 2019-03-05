import React from 'react'
import { Button } from 'antd';
import { connect } from 'react-redux'
import './index.less'


class Feedback extends React.Component {

  //初始化
  state = {
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

  //更新接收信息状态
  componentWillReceiveProps(){

  }

  studentDataResult = () =>{

  };

  render() {

    // const { studentID, studentPassword, studentMajor } = this.props;
    return(
        <div>
          <p>你的学号是{this.props.studentID}</p>
          <p>你的专业是{this.props.studentMajor}</p>
          <p>是否已上J类 {this.props.J}</p>
          <p>是否已上通核 {this.props.S}</p>
          <p>你已经修读的外语类总学分 {this.props.FL}</p>
          <p>你已经修读的通识类总学分 {this.props.GC}</p>
          <p>你已经修读的军体类总学分 {this.props.PA}</p>
          <p>你已经修读的自然科学类总学分 {this.props.NS}</p>
          <p>你已经修读的专业选修课程总学分 {this.props.NC}</p>
          <p>你已经修读的专业必修课程总学分 {this.props.CC}</p>
          <p>专业选修课程总学分 {this.props.PA}</p>
          <p>你已经修读的总学分{this.props.Credit}</p>
          <Button
              className="generate-report-button"
              htmlType="button"
              disabled
              onClick={this.studentDataResult.bind(this)}
          >生成报告</Button>
        </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    "studentID": state.studentID,
    "studentPassword": state.studentPassword,
    "studentMajor": state.studentMajor,
    "J": state.isAttendJLesson,
    "S": state.isAttendSLesson,
    "FL": state.sAttendFLesson,
    "GC": state.totalCreditOfGeneralCourse,
    "PA": state.totalCreditOfPACourse,
    "NS": state.totalCreditOfNSCourse,
    "NC": state.totalCreditOfNCourse,
    "CC": state.totalCreditOfCCourse,
    "Credit": state.totalCreditOfCourse,
  }
};
export default connect(mapStateToProps)(Feedback);