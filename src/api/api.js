import * as axios from 'axios';

const instance = axios.create ({
    withCredential: true,
    beseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "11ba5223-868e-4b1d-a103-f871e338ca7c"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {  
    
        return instance.get(`users?page=${currentPage} &count=${pageSize}` ) 
          .then(response => {
              return response.data;
          });
       }

}

