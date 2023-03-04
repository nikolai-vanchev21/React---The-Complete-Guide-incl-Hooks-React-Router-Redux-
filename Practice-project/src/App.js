
import UsersList from "./Components/Users/UsersList";
import NewUser from "./Components/NewUser/NewUser";
import { useState } from "react";
function App() {

  

  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (user) => {
    setUsersList((prevUsers) => [user, ...prevUsers]);
  };

  


  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
