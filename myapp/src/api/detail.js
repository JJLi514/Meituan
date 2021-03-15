import request from '@/utils/request'

//Get Stores list
export function getStoreById(data){
    return request({
        url:'/get_store_id',
        data
    })
}

//Get products list
export function getProdById(data){
    return request({
        url:'/get_nav',
        data
    })
}