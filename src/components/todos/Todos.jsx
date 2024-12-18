import { useDispatch, useSelector } from "react-redux"
import { todos } from "../../data/data"
import { useState } from "react"
import ModalPopUp from "../ModalPopUp/ModalPopUp"
import { deleteTodoData, loadAllTodos } from "../../App/Feature/Todos/todosSlice"
import { MdOutlineCancel } from "react-icons/md";
import Swal from 'sweetalert2'



const Todos = () => {
    const {todos} = useSelector((state)=>state.todos)
    const [modal,setModal] = useState(false);
    const dispatch = useDispatch();

    const [input,setInput] = useState({
        name : "",
        status : "pending"
    });

    const handleInputChange = (e) => {
        setInput((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    const handleDataSubmit = (e) => {
        e.preventDefault();
        dispatch(loadAllTodos(input));
        setInput({
        name : "",
        status : "pending"
        })

        setModal(false);
    }

    const handleDataDelete = (id)=> {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            dispatch(deleteTodoData(id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
        
    }
  return (
    <>
    {modal && <ModalPopUp hide={setModal} title={"Create New Todos"}>
        <form onSubmit={handleDataSubmit} >
            <input className="border-2 border-black rounded-md" placeholder="Name of todos" type="text" name="name" value={input.name} onChange={handleInputChange} />
            <select name="status" id="" value={input.status} onChange={handleInputChange}>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="done">Done</option>
            </select>
            <button className="bg-blue-600 text-white py-2 px-2 rounded-md">Create</button>
        </form>
    </ModalPopUp>}

    <div className="w-96 mx-auto mt-20 shadow-lg py-5 px-5 flex justify-between">
        <h2 className='text-3xl font-bold'>ALL TODOS</h2>
        <button onClick={()=>setModal(true)} className="bg-blue-600 text-white py-2 px-2 rounded-md">Create New Todos</button>
    </div>
    <ul>
  {todos.map((item) => {
    return (
      <li
        className="w-96 mx-auto mt-1 shadow-lg py-3 px-5 flex items-center justify-between"
        key={item.id}
      >
        <span>{item.name}</span>
        <div className="flex items-center gap-4">
          <button onClick={() => handleDataDelete(item.id)}>
            <MdOutlineCancel />
          </button>
          {item.status === "pending" ? (
            <button
              style={{ backgroundColor: "orange", color: "white" }}
              className="px-2 py-1 rounded"
            >
              Processing
            </button>
          ) : (
            <span>{item.status}</span>
          )}
        </div>
      </li>
    );
  })}
</ul>

    </>
  )
}

export default Todos