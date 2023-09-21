import axios from 'axios'


export const del_product = async (id) => {
  try {
    console.log(id)
    await axios
      .delete(`http://localhost:5000/admin/products/delete/${id}`)
      .then(() => {
        console.log('Success')
      })
  } catch (e) {
    console.log(e)
  }
}
