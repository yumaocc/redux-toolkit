import React, { useEffect, useState } from 'react'
import { IInput } from '../../types'
import { useDispatch } from 'react-redux'
import { add ,getDataAsync} from '../../store/reducer'
import { AppDispatch } from '../../store/index'
export default function Input() {
    const [value, setValue] = useState<string>('')
    //dispatch需要加类型，不然异步action会报错
    const dispatch: AppDispatch = useDispatch()
    const onChange = (e: IInput) => {
        setValue(e.target.value)
    }
    function handleClick() {
        dispatch(add({
            name: value,
            id: Date.now(),
            age: 20
        }))
    }
    function getData() {
        dispatch(getDataAsync('小小'))
    }
    return (
        <>
            <input value={value} onChange={onChange} />
            <hr />
            <button onClick={handleClick}>点击</button>
            <hr />
            <button onClick={getData}>请求</button>
        </>
    )
}
