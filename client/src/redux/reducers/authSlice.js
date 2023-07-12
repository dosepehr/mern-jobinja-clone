import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
export const signupUser = createAsyncThunk('/users/signup', async (body) => {
    const { data } = await axios.post(
        'http://localhost:5000/api/v1/users/signup',
        body
    );
    return data;
});
export const getMe = createAsyncThunk('users/me', async (token) => {
    const { data } = await axios.get('http://localhost:5000/api/v1/users/me', {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    return data;
});

export const loginUser = createAsyncThunk('/users/login', async (body = {}) => {
    const { data } = await axios.post(
        'http://localhost:5000/api/v1/users/login',
        body
    );
    return data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        user: {},
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupUser.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = action.payload.data.user;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.user = action.payload.data;
            })
            .addCase(loginUser.rejected, (state, action) => {
                toast.error(`ایمیل یا رمز عبور اشتباه است`);
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.user = action.payload.data.user;
                localStorage.setItem('token', action.payload.token);
                toast.success(`با موفقیت وارد شدید`);
            });
    },
});

export default authSlice.reducer;
