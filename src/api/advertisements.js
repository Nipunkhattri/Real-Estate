import instance from "./config"

export const fetchAllAdvertisements = async () => {
    try {
        const res = await instance.get('/advertisements')
        return res.data
    }
    catch (err) {
        return err
    }
}