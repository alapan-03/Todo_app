import React from 'react';
import List from './List';
import AddList from './AddList';

function TodoCard({ title, list, handleAdd, getContactId, getContactId2, getTitle }) {
  return (
    <div class="g-col-6 g-col-md-4">
      <div class="card my-5 start-50" id='media' style={{ width: "53rem", transform: "translate(-28vw, -3vh)", boxShadow: "3px 3px black" }}>
        <div class="card-body">
          <h5 class="card-title my-2">{title} :</h5>
          <p class="card-text my-4"><List list={list} contactId={getContactId} contactId2={getContactId2}/></p>
          <AddList handler={handleAdd} getTitle={getTitle}/>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;