import Axios from "axios";


export function request(config) {

    const instance1 = Axios.create({
        baseURL: 'http://123.207.32.32:8000',

        timeout: 5000
    })

    //请求拦截器
    instance1.interceptors.request.use(config => {
            return config
        }, err => {

        })
        //响应拦截器
    instance1.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })





    return instance1(config)

}



export function request1(config) {

    const instance1 = Axios.create({
        // baseURL: 'http://www.blogry.cn',
        baseURL: 'http://106.54.54.237:8000',
        timeout: 5000
    })

    //请求拦截器
    instance1.interceptors.request.use(config => {
            return config
        }, err => {

        })
        //响应拦截器
    instance1.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })





    return instance1(config)

}



// 使用
// import { request } from './network/request'
// request({
//         url: '/home/multidata'
//     })
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })