import Header from './Component/Header.js';
import Content from './Component/Content.js'
import {useState, useRef} from 'react'
import {member} from './Component/Content.js'
import './App.css';


function App() {
  const currentUser = useRef(member)
  const [user, setUsers] = useState(member);
  // const storageAdd = JSON.parse(localStorage.getItem('add'))
  // const [add, setUser] = useState(storageAdd)
  const HandleAdd = (newUsers) =>{
    setUsers([...user,newUsers]);
  };
  const handleEdit = (users) =>{
    const userCoppy =[...user]
    const userMember= userCoppy.findIndex((Item)=>Item.id===users.id); 
    userCoppy[userMember].id = users.id
    userCoppy[userMember].image = users.image
    userCoppy[userMember].name = users.name
    userCoppy[userMember].adress = users.adress
    userCoppy[userMember].phoneNumber = users.phoneNumber
    userCoppy[userMember].year = users.year
    setUsers([...user], userCoppy[userMember])
  };
  const handleDelete = (id) => {
    const newUses = user.filter(user => user.id !==id)
    setUsers(newUses)
  };
  const search = (userText) =>{

  const save = currentUser.current.filter((item) => (
      item.name === userText 
       || item.id === userText
       || item.adress === userText
       || item.phoneNumber === userText
       || item.year === userText

    ))
  setUsers(save)
   
}
  return (
    <div className='App'>
      <Header member={user} onAdd={HandleAdd}
      search={search}
      type = {'Add'}/>
      
      <Content member={user} 
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      type ={'Edit'}/>

    </div>
  );
}

export default App;
