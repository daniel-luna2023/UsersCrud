import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";


function App() {
  const [infoUpdate, setInfoUpdate] = useState();
  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = "https://users-crud.academlo.tech";
  const [users, getUsers, createUsers, deleteUsers, updateUsers] =
    useFetch(baseUrl, setCloseForm);

  useEffect(() => {
    getUsers("/users");
  }, []);

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
    <div className="body">
      <header className="header">
        <h1 className="prin_title">Usuarios</h1>
        <button className="prin_btn" onClick={handleOpenForm} ><i class='bx bx-plus bx-sm'></i>Open Form</button>
      </header>    
      <FormUser
        createUsers={createUsers}
        infoUpdate={infoUpdate}
        updateUsers={updateUsers}
        setInfoUpdate={setInfoUpdate}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className="usercard">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUsers={deleteUsers}
            setInfoUpdate={setInfoUpdate}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
