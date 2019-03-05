import React from 'react'
import { Row,Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import Middle from './components/Middle'
//import Router from './router'
import './style/comment.less'

export default class Admin extends React.Component{

  render(){

    return (
      <Row className="container" >
        <Col span="6"/>
        <Col span="12" className="main">
          <Header/>
          <Row className="content">
            <Middle/>
          </Row>
          <Footer/>
        </Col>
        <Col span="6"/>
      </Row>
    );
  }
}