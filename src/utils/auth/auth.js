import Cookies from "js-cookie"

const Auth = {
    login: (token) => {
        Cookies.set("user", token, { path: "/" });
    },
    logout: () => {
        Cookies.remove("user", { path: "/" });
    },
    isAuthenticated: () => {
        return !!Cookies.get("user");
    },
    authenticated: () => {
        return Cookies.get("user");
    }
};

export default Auth;