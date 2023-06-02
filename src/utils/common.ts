import { BaseResponseFromJSON } from "@/api/apis";

export function responseHandler<T>(r: T): Promise<T> {
    return new Promise((resolve, reject) => {
        const resp = BaseResponseFromJSON(r)
        if (resp.code === undefined && resp.message === undefined) {
            reject('接口返回结构不标准，缺少 code & message')
        }
        if (resp.code === 0 && resp.message === '') {
            resolve(r)
        } else {
            reject(r)
        }
    })
}