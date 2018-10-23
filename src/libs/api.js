import _ from 'lodash';
import axios from 'axios';

let API = {};
API.ajax = function (options) {
    let promise = new Promise((resolve, reject) => {
        options = _.extend({
            method: 'post',
            contentType: 'application/json',
            dataType: 'json',
            url: '/',
            data: {}

        }, options);
        
        axios(options).then(function (response) {
            let data = response.data;
            
            let success = data.success;
            let errors = data.errors;
            let result = data.result;
            if (success) {
                resolve(data);
                return;
            }
            reject(data);
        }).catch(function (err) {
            // window.vue.$emit('loading', {
            //     loading: false,
            //     silent
            // });
            // let status = err.status;
            // window.vue.$message({
            //     message: respErrors.HTTP[status] || '服务异常，请联系客服或稍后重试',
            //     type: 'error'
            // });
            // // 为了api.get().fail(()=>{这里写代码使用})
            reject(err);
        });
    });
    return promise;
};
API.get = function (options) {
    options.method = 'get';
    return API.ajax(options);
};

API.post = function (options) {
    return API.ajax(options);
};

// API.delete = function (options) {
    
//     return API.ajax(options);
// };

// API.patch = function (options) {
    
//     return API.ajax(options);
// };

// API.put = function (options) {
  
//     return API.ajax(options);
// };


export default API;