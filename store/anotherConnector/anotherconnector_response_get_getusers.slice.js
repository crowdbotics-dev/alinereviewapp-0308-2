import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const anotherconnector_get_users_read = createAsyncThunk(
  "anotherconnector_response_get_getusers/anotherconnector_get_users_read",
  async payload => {
    const response = await apiService.anotherconnector_get_users_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const anotherconnector_response_get_getusersSlice = createSlice({
  name: "anotherconnector_response_get_getusers",
  initialState,
  reducers: {},
  extraReducers: {
    [anotherconnector_get_users_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [anotherconnector_get_users_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [anotherconnector_get_users_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  anotherconnector_get_users_read,
  slice: anotherconnector_response_get_getusersSlice
}
