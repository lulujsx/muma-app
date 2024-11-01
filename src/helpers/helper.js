import axios from  "axios";

const apiUrl = "http://localhost:8081/api"

//Mascotas

export const getAllPets = async (token) => {
    const response = await axios.get(`${apiUrl}/Mascotas`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const getPetById = async (id,token) => {
    const response = await axios.get(`${apiUrl}/Mascotas/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const registerPet = (petObj,token) => {
    const response = axios.post(`${apiUrl}/Mascotas/registro`, petObj,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const editPet = (petObj,id) => {
    const response = axios.put(`${apiUrl}/Mascotas/${id}`, petObj,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

export const deletePet = (id) => {
    axios.delete(`${apiUrl}/Mascotas/${id}`)
}

// Protectoras

export const getAllProtectors = async (token) => {
    const response = await axios.get(`${apiUrl}/Protectoras`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const getProtectorById = async (id,token) => {
    const response = await axios.get(`${apiUrl}/Protectoras/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}
