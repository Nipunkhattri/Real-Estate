import {createSlice , createAsyncThunk}  from "@reduxjs/toolkit"
import * as api from "../../api/config";
import { toast } from "react-toastify";

export const authlogin = createAsyncThunk(
    'auth/login',
    async ({data,navigate}) =>{
      try {
        const res = await api.Adminlogin(data);
        console.log(res);
        toast.success('Login successfull')
        navigate('/')
        return res;
      } catch (error) {
        toast.error('Invalid Crediantials')
        console.log(error);
      }
    }
  )
  
  export const register = createAsyncThunk(
    'auth/register',
    async ({data, navigate },{rejectWithValue}) => {
      try { 
        // console.log(formValue)
        const response = await api.signUp(data);
        console.log(response)
        toast.success("Registered successfully");
        // <NotificationBox message="Success message" type="success" />
        // navigate("/otplogin");
        return response.data;
      } catch (err) {
        // toast.error("Something Wrong");
        toast.error(err.response.data.message)
        // return rejectWithValue(err.response.data);
      }
    }
);

  export const setotp = createAsyncThunk(
    'auth/setotp',
    async ({data, navigate},{rejectWithValue}) => {
      try {
        console.log(data)
        const res = await api.setotp(data);
        console.log(res);
        toast.success("Login Success");
        navigate('/');
        return res 
    } catch (error) {
        navigate('/signup')
        toast.error("Number Not Registered! SignUp");
        console.log(error);
    }
    }
);


const persistedState = localStorage.getItem('profile')
  ?  JSON.parse(localStorage.getItem('profile')) : null;

const persistedState1 = localStorage.getItem('auth')
  ?  JSON.parse(localStorage.getItem('auth')) : false;

  const authSlice = createSlice({
    name: "auth",
    initialState: {
      isAuthenticated: persistedState1,
      user:persistedState,
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
      login: (state , action) => {
        state.isAuthenticated = action.payload.data.isauth;
      },
      setLogout: (state) => {
        state.isAuthenticated = false;
        localStorage.clear();
        state.user = null;
      },
    },
    extraReducers:{
      [authlogin.pending]: (state, action) => {
        state.loading = true;
      },
      [authlogin.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("auth", JSON.stringify(action.payload.data.isauth ));
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
        state.isAuthenticated = action.payload.data.isauth;
      },
      [authlogin.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      [setotp.pending]: (state, action) => {
        state.loading = true;
      },
      [setotp.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("auth", JSON.stringify(state.isAuthenticated ));
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        console.log(action.payload)
        state.user = action.payload;
        state.isAuthenticated = action.payload.data.isauth;
      },
      [setotp.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    }
  });

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
