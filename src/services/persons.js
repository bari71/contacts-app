import axios from "axios";
const baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getPersons = () => {
    return axios.get(baseUrl)
}

export default { getPersons }