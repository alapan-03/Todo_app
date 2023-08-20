import icon1 from "./icon.png"
import { useReducer } from "react";
import List from "./List";
const { v4: uuidv4 } = require('uuid');

let toggle = false;
const initialTodo = {
  id: 1,
  title: "",
  complete: false,
};
function z(state, action) {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        id: state.length+1,
        toggle: !state.toggle,
      };

      case "delete":
        return null;

    default:
      return state;
  }
}

const ListedTodo = (props) => {

  
const [state, y] = useReducer(z, initialTodo);
function toggler() {
  y({ type: "toggle" });
}



if (!state) {
  return null; // Don't render if the todo is deleted
}
// export default function ListedTodo(props) {

  return (
    <>
      <div className="text-center">

        <div className="form-check">
          <input
            class="form-check-input position-relative start-25"
            onClick={toggler}
            // style={{ color: !state.toggle ? "grey" : "black" }}
            
            type="checkbox"
            value=""
            id={`flexCheckDefault-${state.id}`}
          />
          <label key={state.id} class="form-check-label" style={{ color: state.toggle ? "grey" : "black", textDecoration: state.toggle ? "line-through" : "none", wordWrap:"break-word", wordBreak:"break-all"}} htmlFor={`flexCheckDefault-${state.id}`}>
            {props.list.length===0?"sss":props.list.title}
          
            {props.list.complete}
          </label>
          {/* <button onClick={()=> props.clickHandler(props.list.id)}>Delete</button> */}
        </div>
        <div>
          {/* <img src={icon1} onClick={()=> props.clickHandler(props.list.id)}></img> */}
          <span class="material-symbols-outlined position-relative start-50" style={{transform:"translate(-3vw, -4vh)", cursor:"pointer"}} onClick={()=> props.clickHandler(props.list.id)}>
delete
</span>
{/* <span  className="edit" onClick={()=>props.clickHandler2(props.list.id, props.list.title)}>Edit</span> */}
</div>
      </div>
    </>
  );
}
export default ListedTodo
