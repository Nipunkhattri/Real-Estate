import instance from "./config";

export const fetchAllProperties = async () => {
    try {
        const res = await instance.get('/properties')
        console.log(res.data);
        return res.data
        
    }
    catch (err) {
        return err
    }
}

export const fetchPropertyById = async (property_id) => {
    try {
        const res = await instance.get(`/properties/${property_id}`)
        return res.data
    }
    catch (err) {
        return err
    }
}