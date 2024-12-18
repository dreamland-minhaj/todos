import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../App/Feature/counter/counterSlice";

const Counter = () => {
    const {count} = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
  return (
    <div className="container w-44 mx-auto text-center">
    <h1 className="text-[40px]">{count}</h1>
    <hr />
    <button onClick={()=>dispatch(increment())} className="text-[40px]">++</button>
    <button onClick={()=>dispatch(decrement())} className="text-[40px]">--</button>
    </div>
  )
}

export default Counter