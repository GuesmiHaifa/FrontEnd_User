import axios from "axios";

class UserService {
   // users_rest_api_url = 'http://localhost:8085/api/users';
    getUsers() {
        return axios.get('http://localhost:8085/api/users');
    }

    deleteUser(id) {
        return axios.delete('http://localhost:8085/api/users/delete/' + id);
    }

    // updateUser(id) {
    //     return axios.put('http://localhost:8085/api/users/' + id);
    // }

}

export default new UserService();