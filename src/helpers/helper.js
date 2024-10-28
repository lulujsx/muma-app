import axios from  "axios";

const apiUrl = "http://localhost:8081/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMjc3NmQ0My1kNDQ0LTQ1ZWYtYTA0Ny1mNzdkNzcyMTNiMDMiLCJ1bmlxdWVfbmFtZSI6Imx1YW5hQG11bWEuY29tIiwibmJmIjoxNzMwMTQwOTgwLCJleHAiOjE3MzAyMjczODAsImlhdCI6MTczMDE0MDk4MCwiaXNzIjoiTVVNQS1BUEkiLCJhdWQiOiJNVU1BLUF1ZGllbmNlIn0.wkmMW3AhLKNpuizsRqN-n6Un4zqEf0dNvLiXU-WkC7I"
export const getAllPets = async () => {
    const response = await axios.get(`${apiUrl}/Mascotas`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const getPetById = async (id) => {
    const response = await axios.get(`${apiUrl}/Mascotas/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response
}

export const registerPet = (petObj) => {
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