import axios from "axios"
const anotherConnector = axios.create({
  baseURL: "https://test.com/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function anotherconnector_get_users_read(payload) {
  return anotherConnector.get(`/users`)
}
export const apiService = { anotherconnector_get_users_read }
