import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => 
  axios
    .get(baseURL)
    .then(response => response.data)

const create = newObject => 
  axios
    .post(baseURL, newObject)
    .then(response => response.data)

const deleteOne = id => 
  axios
    .delete(`${baseURL}/${id}`)
    .then(response => response.data)

const update = (id, newObject) => 
  axios
    .put(`${baseURL}/${id}`, newObject)
    .then(response => response.data)
export default {getAll, create, deleteOne, update}