// 这个文件专门用于处理与users表相关的业务
// 1引入axios文件
import axios from '@/utils/myaxios.js'
// 2.实现登入验证
//  userLogin=(data)结果最后返回到userLogin,后续使用方法可以直接调用userLogin
export const userLogin=(data)=>{
    // axios({})返回的是一个promise对象
    //  return axios返回结果
    return axios({
        // method:'post',方法
        method:'post',
        //  url:'/login',路径
        url:'/login',
        // 数据
        data
    })
}