import axios from "axios"
const musicAPI = axios.create({
  baseURL: "https://something.com/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function musicapi_get_music_read(payload) {
  return musicAPI.get(`/music`)
}
export const apiService = { musicapi_get_music_read }
