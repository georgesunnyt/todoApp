import { useDispatch, useSelector } from "react-redux"
import {toggleStrike, deleteItem} from './appSlice'
import './styles.css'


export default function TodoListComponent () {

    let dispatch = useDispatch()
    let list = useSelector(state=>state.todo)

    const handleStrike = (id) => {
        dispatch(toggleStrike(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }

    return (
        <div className='container'>
            {list?.map((item) => 
                <div className='item' key = {item.id}>
                    <input type='checkbox' checked={item.striked} onChange={() => handleStrike(item.id)}/>   
                    <span className={item.striked? 'striked' : 'non-striked'} >{item.name}</span>
                    <button onClick = {() => handleDelete(item.id)}>Delete item</button>
                </div>)}
        </div>
    )
}