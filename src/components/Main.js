import editButton from '../images/edit__button.svg'
import addButton from '../images/add__button.svg'
import React from 'react';
import api from '../utils/Api'

function Main(props) {

const [userName, setUserName] = React.useState()
const [userDescription , setUserDescription ] = React.useState()
const [userAvatar, setUserAvatar] = React.useState()


React.useEffect(()=>{
    function setProfile() {
        const infoUser = api.getUserProfile()
        infoUser
        .then((info)=>{
            setUserName(info.name)
            setUserDescription(info.about)
            setUserAvatar(info.avatar)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    setProfile()
})



    return(
        
        <main>
            <section className="profile">   
                <div className="profile__container">     
                    <img src={userAvatar} alt="аватар" className="profile__avatar"/>
                    <button type="button" className="profile__avatar-button"  onClick={props.onEditAvatar}></button>
                        <div className="profile__info">
                            <div className="profile__info-container"><h1 className="profile__name">{userName}</h1>
                                <button type="button" className="profile__edit-button" onClick={props.onEditProfile}>
                                    <img src={editButton} alt="ручка" className="profile__edit-button-vector"/>
                                </button>
                            </div>
    <p className="profile__activity">{userDescription}</p>          
                        </div>
                </div>
                <button type="button" className="profile__add-button"  onClick={props.onAddPlace}>
                    <img src={addButton} alt="добавить" className="profile__add-button-vector"/>
                </button>
            </section>
           
        </main>

        
    ) 
}

export default Main