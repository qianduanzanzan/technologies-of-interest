import {LoginFormInterface} from "@/views/login/interface"

export default () => {
    function login(req: any) {
        // return new Promise((resolve:Function,reject:Function) => {
        //     const body:LoginFormInterface = JSON.parse(req.body)
        //     if(body.account === 'admin' && body.password === '123456'){
        //         resolve({status: 200})
        //     }
        //     reject({status: 500,msg: '账号或密码错误'})
        // })

        const body: LoginFormInterface = JSON.parse(req.body)
        if (body.account === 'admin' && body.password === '123456') {
            return {
                status: 200,
                data: {
                    avatar: 'https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1657904400&t=7b3f50c245381077202716389811f4fe',
                    nick_name: 'admin',
                    routeList: [
                        {}
                    ],
                }
            }
        }
        return {status: 500, msg: '账号或密码错误'}
    }

    return [
        {
            type: 'post',
            api: login,
            url: 'login'
        }
    ]
}
