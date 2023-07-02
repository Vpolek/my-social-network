import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <li>
        <NavLink to={"/messages/" + props.id} className={s.user}>
          {props.name}
        </NavLink>
      </li>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={s.message}>
      <p>{props.vnutri}</p>
    </div>
  );
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Radim" },
    { id: 3, name: "Maria" },
    { id: 4, name: "Karina" },
    { id: 5, name: "Evgen" },
    { id: 6, name: "Kolya" },
    { id: 7, name: "Vasya" },
  ];

  let messagesData = [
    { id: 1, message: "Zdarova cherkashyla" },
    { id: 2, message: "How are u?" },
    { id: 3, message: "I hate nig" },
  ];

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
        <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />
      </ul>
      <div className={s.messages}>
        <Message vnutri={messagesData[0].message} />
        <Message vnutri={messagesData[1].message} />
        <Message vnutri={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
