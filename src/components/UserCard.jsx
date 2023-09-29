import React from "react";
import "./styles/Usercard.css"

const UserCard = ({ user, deleteUsers, setInfoUpdate, handleOpenForm }) => {

  const handleDelete = () => {
    deleteUsers('/users', user.id)
  }

  const handleEdit = () => {
    setInfoUpdate(user)
    handleOpenForm()
  }
  return (
    <div className="card_conteiner">
    <article className="card_article">
      <h3 className="card_title">#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
      <hr />
      <ul className="card_ul">
        <li className="card_li">
          <span className="card_span">Email: </span>
          <span className="card_span"> {user.email}</span>
        </li>
        <li className="card_li">
          <span className="card_span">Birthday: </span>
          <span className="card_span">{user.birthday}</span>
        </li>
      </ul>
      <hr />
      <div className="container_btn">
      <button className="card_btn1" onClick={handleDelete}><i className='bx bxs-trash bx-sm'></i></button>
      <button className="card_btn2" onClick={handleEdit}><i className='bx bxs-edit-alt bx-sm'></i></button>
      </div>
    </article>
    </div>
  );
};

export default UserCard;
