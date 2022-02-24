import React from 'react';
import ToDo from './ToDo';

const ToDoList=({list,markItem,deleteItem})=>
{
    return(
    <div>{
        list.map(item =>{
                return(
                    <ul>
                    <ToDo item={item} markItem={markItem} deleteItem={deleteItem}/>
                    </ul>
                );
            })
          
        }
       
    </div>
    );
}
export default ToDoList;