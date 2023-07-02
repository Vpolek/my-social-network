import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const ProfileInfo = (props) => {
    return (
        <div>
            <div><img className={s.header}
                      src="https://abrakadabra.fun/uploads/posts/2022-01/1642690139_1-abrakadabra-fun-p-zadnii-fon-dlya-shapki-na-yutub-1.jpg"/>
            </div>
            <div className={s.avaDiscription}>
                <img className={s.avatar}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg"/>
                <p>Name: {props.name}</p>
                <p>Date of Birth: {props.date}</p>
                <p>City: {props.location}</p>
                <p>Education: {props.edu}</p>
                <p>Contact: <a href={props.contact}>{props.contact}</a></p>
            </div>
        </div>
    )
}


const Profile = () => {
    return (
        <div>
            <ProfileInfo name={"Volodymyr B."} date={"9 March"} location={"Poltava"} edu={"None"}
                         contact={"t.me/VolodymyrFree"}/>
            <MyPosts/>
        </div>
    )
}

export default Profile;