import React from 'react'
import { Card } from 'antd';
import Login from '../../pages/Login';
import Feedback from '../../pages/Feedback';
//import Router from '../../router';
import './index.css'

export default class Middle extends React.Component {

  render() {

    //主页内容
    return(
        <div>
          <Card className="login" title="教务网登入">
            <Login/>
          </Card>
          <Card className="feedback">
            <Feedback/>
          </Card>
        </div>
    )
  }

}