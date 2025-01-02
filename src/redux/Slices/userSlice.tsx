import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    tempMail: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            if (state.user !== action.payload) {
                console.log(`Your ${action.payload} is nulled in redux store,`, state.user)
                state.user = null
            }
            state.user = action.payload
        },
        addEmail: (state, action) => {
            if (state.tempMail !== action.payload) {

                console.log(`Your ${action.payload} is nulled in redux store,`, state.tempMail)
                state.tempMail = ''
            }
            state.tempMail = action.payload
        }
    }

})


export const { addUser, addEmail } = userSlice.actions
export default userSlice.reducer