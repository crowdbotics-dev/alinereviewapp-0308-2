import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const musicapi_get_music_read = createAsyncThunk(
  "musicapi_response_get_Getmusics/musicapi_get_music_read",
  async payload => {
    const response = await apiService.musicapi_get_music_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const musicapi_response_get_GetmusicsSlice = createSlice({
  name: "musicapi_response_get_Getmusics",
  initialState,
  reducers: {},
  extraReducers: {
    [musicapi_get_music_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [musicapi_get_music_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [musicapi_get_music_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  musicapi_get_music_read,
  slice: musicapi_response_get_GetmusicsSlice
}
