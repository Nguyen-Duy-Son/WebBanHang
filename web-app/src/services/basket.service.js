import axios from "axios";
export const getBasketByUserId = async(userId,token)=>{
    
    try{
        const response = await axios.get(`http://localhost:5000/api/v1/baskets/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error.message);
        throw error;
    }
}