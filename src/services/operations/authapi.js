import {setLoading, setToken} from "../../slices/authSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"
import { toast } from "react-hot-toast"
import { setUser } from "../../slices/profileSlice"
const {
    
    LOGIN_API,
    
  } = endpoints


  export function login(userName, password, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          userName,
          password,
        })
  
        // console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          toast.error(response.data.message) 
          throw new Error(response.data.message)
         
        }
  
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        // console.log(response.data.user);
        dispatch(setUser( response.data.user ))
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        navigate("/dashboard")
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
  

  export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
   
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }
  