import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
const baseURL = process.env.domain + '/api'

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken && config.headers) config.headers["authorization"] = `Bearer: ${accessToken}`;
        return config;
    },
    (error: AxiosError) => {
        Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async function (error: AxiosResponse) {
        //@ts-ignore
        if(!error?.response){
            return;
        }
        const originalRequest = error.config;
        //@ts-ignore
        if ( error.response.status === 401 && !originalRequest._retry) { // 403
            //@ts-ignore
            originalRequest._retry = true;
            resetToken()
            const access_token = await refreshAccessToken();
            axios.defaults.headers.common['authorization'] = 'Bearer: ' + access_token;
            return api(originalRequest);
        }

        return Promise.reject(error);
    }
);

const refreshAccessToken = async () => {
    let refreshToken = localStorage.getItem("refreshToken");
    let accessToken = localStorage.getItem("accessToken");

    await axios
        .post(`${baseURL}/refresh`, { refreshToken })
        .then((res: AxiosResponse) => {
            const { accessToken, refreshToken } = res.data;
            if (res.status === 200 && accessToken && refreshToken) {
                resetToken(accessToken, refreshToken)
            }
        });

    return accessToken;
}

const resetToken = (access = '', refresh = '') => {
    if (access && refresh) {
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
    } else {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
    }
}

export default api;