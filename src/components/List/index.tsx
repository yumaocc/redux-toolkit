import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {decrease} from '../../store/reducer'
export default function Input() {
    const list = useSelector((state:RootState) => state.userStore.user)
    const dispatch = useDispatch()
    const del = (id:number) => {
        dispatch(decrease(id))
    }
  return (
    
        <ul>
            {
                list.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>姓名：{item.name}</span> | 
                            <span>年龄：{item.age}</span>        |     
                            <button onClick={()=>del(item.id)}>      删除</button>
                        </li>
                    )
                })
            }
        </ul>
  )
}
