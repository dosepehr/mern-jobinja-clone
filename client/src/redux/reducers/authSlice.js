import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const signupUser = createAsyncThunk('/users/signup', async (body) => {
    const { data } = await axios.post(
        'http://localhost:5000/api/v1/users/signup',
        body
    );
    return data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        user: [],
    },
    extraReducers: (builder) => {
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        });
    },
});

export default authSlice.reducer;
