import request from '@/api'

export const homeService = {
    get_banner: params => {
        return request.get('/home/get_banner', params)
    },
    get_recommend: params => {
        return request.get('/home/get_recommend', params)
    }
}
