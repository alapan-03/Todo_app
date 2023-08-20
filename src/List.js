import ListedTodo from "./ListedTodo";



// function handleDelete(id) {
//     const updatedTodo = todo.filter(item => item.id !== id);
//     setTodo(updatedTodo);
//   }

const List = (props) => {
    const deleteContactHandler = (id) => {
        props.contactId(id)
    } 
    const editContactHandler = (id) => {
        props.contactId2(id)
    }


  const render = props.list.map((ll) => {
    return (
        <>
        <ListedTodo list={ll} {...ll.props} clickHandler={deleteContactHandler} clickHandler2={editContactHandler}/>
        </>
    )
});
    return(
    <>
          {render}
          </>
    )
}
export default List