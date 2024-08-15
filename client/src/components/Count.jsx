import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../counterState";

const Count = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="count">
      <div>
        <p color="black">Count: {count}</p>
      </div>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>Increment Me</button>
        <button onClick={() => dispatch(decrement())}>Decrement Me</button>
      </div>
    </div>
  );
};

export default Count;
