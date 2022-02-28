import React ,{useState,useEffect} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
    const [user,setUser] = useState([]);
    const[filteredUsers,setFilteredUsers]=useState([]);
    const fetchData =()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            setUser(data)
            setFilteredUsers(data)
        })
    }
    useEffect(()=>{    
        fetchData();
    },[])

    const onSearchChange = e => {
      const searchfield=e.target.value;
      if(searchfield!==""){           //for current value
        const filteredUsers=user.filter(robot =>{
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        }
        )
        setFilteredUsers(filteredUsers);
      }
        else
        setFilteredUsers(user);
    }; 

    return (
      !user.length ?
      <h1>Loading</h1> :
      (
      <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        <CardList robots={filteredUsers} />
      </Scroll>
    </div>
    )
    ) 
}

export default App