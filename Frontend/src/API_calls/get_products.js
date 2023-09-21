import axios from 'axios'
export const products_data = async () => {
  try {
    return await axios.get('http://localhost:5000/admin/products').then((res) => res.data)
  } catch (e) {
    console.log(e)
  }
}
