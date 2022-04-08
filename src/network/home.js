import { request, request1 } from "./request";

export function getHomeMultidata() {

    return request({
        url: '/home/multidata'
    })


}



// export function getHomeGoods(title) {

//     return request1({
//         url: '/test/blog?' + title,
//         // params: {
//         //     type: "title",

//         // }
//     })


// }
export function getHomeGoods(type, page) {

    return request1({
        url: '/api/mn/home/data',
        params: {
            type,
            page
        }
    })


}