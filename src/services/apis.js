const BASE_URL = process.env.REACT_APP_API_URL

export const endpoints = {
    
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/api/v1/auth/login",
    GET_INS: BASE_URL + "/api/v1/auth/getallinstructors",
    SIGNUP: BASE_URL + "/api/v1/auth/signup",
    ADD: BASE_URL + "/api/v1/auth/addtoclass",
    BASE_URL
  }


