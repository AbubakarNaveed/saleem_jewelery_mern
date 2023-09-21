import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = { login: false }

const authUser_reducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn(state) {
      state.login = true
    },
  },
})

export default authUser_reducer.reducer

export const { loggedIn } = authUser_reducer.actions
