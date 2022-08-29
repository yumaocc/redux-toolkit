import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUser {
    name: string
    id: number
    age: number

}

interface IState {
    user: IUser[]
}

const initialState: IState = {
    user: [{
        name: '小黑',
        age: 19,
        id: 1
    }]
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //新增功能action
        add: (state, action) => {
            state.user.push(action.payload)
        },
        //删除功能action
        decrease: (state, action) => {
            state.user =  state.user.filter((item: IUser) => {
               return  item.id !== action.payload
            })
        },
    },
    //异步请求action
    extraReducers(builder) {

        builder.addCase(getDataAsync.fulfilled, (state, action) => {
            state.user.push(action.payload)
        })
        //多个异步任务可以直接写
    }
})
///异步请求action
export const getDataAsync = createAsyncThunk<IUser,string>('getDataAsync', async (name:string) => {
    const res = await new Promise<IUser>((resolve) => {
        setTimeout(() => {
            resolve({
                name: '小白',
                age: 19,
                id: 88
            })
        }, 2000)
    })
    return res
})

//导出所有action
export const { add, decrease } = userSlice.actions
//导出reducer
export default userSlice.reducer

