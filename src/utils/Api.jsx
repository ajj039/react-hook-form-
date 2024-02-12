import axios from 'axios'

const url = "http://localhost:3000/users";

export const getTodos = async ()=>{
    const data = await axios.get(url);

return data;
}

// export const AddTodo = async (data)=>{
//     const res = await axios.post(url, data)
//     return res;
// }

// export const DeleteTodo = async (id)=>{
//     const res = await axios.delete(`${url}/${id}`)
//     return {
//         message:"todo delete successfully"
//     };
// }