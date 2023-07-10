import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        user: [],
    },
});

export default authSlice.reducer;
