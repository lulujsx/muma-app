import axios from  "axios";

const apiUrl = "http://localhost:8081/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiY2U2Nzk2Ni0zM2MzLTRlMmUtYmY4OC0yYWM2NzhhMjI1MDciLCJ1bmlxdWVfbmFtZSI6InVzdWFyaW9AbXVtYS5jb20iLCJuYmYiOjE3MzAxNDUxMjUsImV4cCI6MTczMDIzMTUyNSwiaWF0IjoxNzMwMTQ1MTI1LCJpc3MiOiJNVU1BLUFQSSIsImF1ZCI6Ik1VTUEtQXVkaWVuY2UifQ.rOF25LQ8Rbp4M1lNCiVbj7YFUTqYNQ7c7lijaEEEjQE"
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