import axios from 'axios';
import { User, getUserByIdRequest, getUserByIdResponse } from "../type/user";
import { ErrorMessage } from '../type/errorMessage'

// GET /users/${userId}
async function getUserById(userId: string, getUserById: getUserByIdRequest): Promise<getUserByIdResponse | ErrorMessage> {
    return new Promise((resolve, reject) => {
        axios.get<getUserByIdResponse>(`/users/${userId}`, {})
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
    });
}
