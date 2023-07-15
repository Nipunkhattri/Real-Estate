import instance from "./config";

export const Adminlogin = async (data) => {
    try {
        const res = await instance.post('/auth/login',data)
        console.log(res);
        return res.data
    }
    catch (err) {
        return err
    }
}
export const signUp = async (data) => {
    try {
        const res = await instance.post('/auth/register',data)
        console.log(res);
        return res.data
    }
    catch (err) {
        return err
    }
}