import apiClient from "./axios.config";

const authService = {
  login: (data) => apiClient.post("/auth/login", data),
  register: (data) => apiClient.post("/auth/register", data),
  logout: () => {
    localStorage.removeItem("token");
  },
  getProfile: () => apiClient.get("/auth/me"),
};

export default authService;
