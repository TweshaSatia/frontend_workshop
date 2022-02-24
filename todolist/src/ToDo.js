import './style.css';
import React from 'react';
const ToDo = ({item,markItem,deleteItem}) =>
{
    return(
        <li key={item.id}>  {item.isDeleted===false?
            <span> 
              {item.value} 
              <button className="btn btn-floating" onClick={() => markItem(item.id)}>
            Mark as Done
           </button>  </span>
          : <span style={{textDecoration:"line-through"}}> {item.value} </span>} 
          <button className="btn btn-floating" onClick={() => deleteItem(item.id)}>Delete</button>
         
          </li>
    )
}

export default ToDo;