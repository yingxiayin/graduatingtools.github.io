 import axios from 'axios'
 import { Modal } from 'antd'

 export default class Axios{

  static ajax(options){
    let baseApi = '';
    return new Promise((resolve, reject)=>{
      axios({
        url: options.url,
        method: 'post',
        dataType: 'json',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || '',
      }).then((response)=>{
        if (response.status === 200){
          let result = response;
          if (result.code === '0'){
            resolve(result);
          } else {
            Modal.info({
              title: "提示",
              content: result.msg,
            })
          }
        } else {
          reject(response.data);
        }
      })
    });
  }
 }