import request from "@/utils/request";

export const login = (data: any = {}) => {
    return request({
        url: '/mock/login',
        method: "post",
        data
    });
};