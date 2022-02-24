import React from 'react';
import ToDoList from './ToDoList';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem(){
    // create a new item with unique id
    const newItem={
      id:1 + Math.random(),
      value:this.state.newItem.slice(),
      isDeleted:false
    };

    //copy of current list
    const list=[...this.state.list];
    
    //pushing item into list
    list.push(newItem);
    console.log("add",list)

    //update state with new list , resetting input
    this.setState({
      list,
      newItem:""
    });
  }

  markItem=(id) =>{
    this.setState(state => ({
      list: state.list.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            isDeleted: !todo.isDeleted
          };
        } else {
          return todo;
        }
      })
    }));
    
  };

  deleteItem=(id) =>{
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  

  render(){
    return(
      <div className="App">
        <div
        style={{
          padding: 30,
          textAlign: "left",
          maxWidth: 500,
          margin: "auto"
        }}>
        <h1 className="app-title">Shopping List</h1>
	     <input 
        id="userinput" 
        type="text" placeholder="Enter items" value={this.state.newItem}
        onChange={e => this.updateInput("newItem", e.target.value)}
       /> &nbsp; &nbsp;

	      <button className="add-btn btn-floating" onClick={() => this.addItem()}>Enter</button>
        <br /> <br />
         <ToDoList list = {this.state.list} markItem={this.markItem} deleteItem={this.deleteItem}/> 
        </div>
      </div>
    );
  }
}


export default App;
