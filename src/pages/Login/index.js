import React from 'react'
import { Button, Form, Icon, Input, Cascader } from 'antd';
import { connect } from 'react-redux'
import { sendStudentData } from './../../redux/action'
import majorOptions from '../../list'
import request  from '../../dataCal/dataCal'
const FormItem = Form.Item;

class Login extends React.Component {

  //初始化
  constructor(props){
    super(props);
    this.state = {
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

  }


  //传递学生数据
  handleClick = () =>{

    //const that = this;
    //与后端通讯
    request(this.state.studentID, this.state.studentPassword, this).then(function (response) {
      const that = this;
      console.log(response);
      if (response.status === 200){
        console.log(response.data);
        let res = response.data;
        console.log(res);
        const { dispatch } = that.props;
        dispatch(sendStudentData(that.state));
      }
    }).catch(function (error) {
      console.log(error);
    });

    console.log(this.state);
  };

  //读取学生的学号和密码
  handleChange = (studentData) =>{
    switch (studentData.target.id) {
      case "sd":
        this.setState({
          "studentID": studentData.target.value ,
        });
        break;
      case "pw":
        this.setState({
          "studentPassword": studentData.target.value ,
        });
        break;
      default:
        break;
    }
  };

  doHandleClick= () =>{

  };

  //读取学生的专业
  handleChoose = (studentData) =>{
    this.setState({
      "studentMajor": studentData[1],
    });
  };

  render() {

    return(
        <div>
            <Form className="login">
              <FormItem>
                <Input
                    prefix={<Icon type="user"/>}
                    id="sd"
                    placeholder="学号"
                    onChange={this.handleChange.bind(this)}
                />
              </FormItem>
              <FormItem>
                <Input
                    prefix={<Icon type="lock"/>}
                    id="pw"
                    type="password"
                    placeholder="密码"
                    onChange={this.handleChange.bind(this)}
                />
              </FormItem>
              <FormItem>
                <Cascader
                    options={majorOptions}
                    id="mo"
                    placeholder="选择专业"
                    onChange={this.handleChoose.bind(this)}
                />
              </FormItem>
              <FormItem>
                <Button
                    htmlType="submit"
                    className="login-form-button"
                    onClick={this.handleClick.bind(this)}
                >查询</Button>
              </FormItem>
            </Form>
        </div>
    )
  }
}
export default connect()(Login)