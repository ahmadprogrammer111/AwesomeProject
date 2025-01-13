import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    bloodUser: null,
    bloodMail: '',
}

const BloodSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            if (state.bloodUser !== action.payload) {
                console.log(`Your ${action.payload} is nulled in redux store,`, state.bloodUser)
                state.bloodUser = null
            }
            state.bloodUser = action.payload
        },
        addEmail: (state, action) => {
            if (state.bloodMail !== action.payload) {
                console.log(`Your ${action.payload} is nulled in redux store,`, state.bloodMail)
                state.bloodMail = ''
            }
            state.bloodMail = action.payload
        }
    }

})


export const { addUser, addEmail } = BloodSlice.actions
export default BloodSlice.reducer