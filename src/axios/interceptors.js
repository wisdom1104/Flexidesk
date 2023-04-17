import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

//요청시 AccessToken 계속 보내주기
api.interceptors.request(function (config) {
    const token = localStorage.getItem("token");

    if (!token) {
        config.headers["Access_Token"]= null;
        config.headers["Refresh_Token"]= null;
        return config;
    }
    if (config.headers && token) {
        const {Access_Token, Refresh_Token} = JSON.parse(token);
        config.headers[Access_Token]= `Bearer ${Access_Token}`;
        config.headers[Refresh_Token]= `Bearer ${Refresh_Token}`;
        return config;
    }
});

// AccessToken이 만료되었을 때
api.interceptors.response(
    function (response) {
        return response;
    },
    async function (err) {
        const originalConfig = err.config;

        if(err.response && err.response.status === 401) {
            const refreshToken = originalConfig.headers["Refresh_Token"];
            try {
                const data = await axios ({
                    url:'/users/refresh',
                    method:'GET',
                    headers: {
                        authorization: refreshToken
                    },
                    if(data) {
                        localStorage.setItem("token",
                        JSON.stringify(data.data, ["Access_Token","Refresh_Token"])
                        )
                        return await api.request(originalConfig)
                    }
                } catch (e) {
                    console.log("토큰 갱신 에러");
                }
                )
            }
        }
    }
)
