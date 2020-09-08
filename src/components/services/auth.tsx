import api from "./api";

export const TOKEN_KEY_ADMIN = "@QuemVaiAdmin-Token";
export const TOKEN_KEY = "@QuemVaiUser-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export var isAuthenticatedAdmin= () => localStorage.getItem(TOKEN_KEY_ADMIN) !== null;



export const login = async (token: string) => {
  try {
    var adminAuth = false;
    const response = await api.get("/api/user/bring/me", {
      headers: { "x-auth-token": token },
    });
    adminAuth = response.data["info"]["isAdmin"];
    if (adminAuth) {
      localStorage.setItem(TOKEN_KEY_ADMIN, token);
    } else {
      if (!adminAuth) {
        localStorage.setItem(TOKEN_KEY, token);
      } else {
        alert("Houve algum erro inesperado, tente novamente :(");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getTokenAdmin = () => localStorage.getItem(TOKEN_KEY_ADMIN);
