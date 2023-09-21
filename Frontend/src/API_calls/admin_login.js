import axios from 'axios'


export const login = async (username, password) => {
  try {
    return await axios
      .post('http://localhost:5000/authUser/login', {
        username: username,
        password: password,
      })
      .then((res) => res.data)
  } catch (error) {
    console.log(error)
    return 'Error'
  }
}
