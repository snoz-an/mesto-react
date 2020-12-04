import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWidthForm from './PopupWidthForm';
import ImagePopup from './ImagePopup';
import Card from './Card'
import api from '../utils/Api'

function App() {

  const [cards, setCards] = React.useState([])

React.useEffect(()=>{
    const infoCards = api.getInitialCards()
        infoCards
        .then((data)=>{
            setCards(data)
  
        })
        .catch((err)=>{
          console.log(err)
      })
    
}, [])

const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false)

function handleEditProfileClick() {
    setProfilePopupOpen(!isEditProfilePopupOpen)
}

const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)

function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen)
}

const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)

function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen)
}

const [selectedCard, setSelectedCard] = React.useState(false)

function handleCardClick(card) {
  setSelectedCard(card)
} 

function closeAllPopups() {
  setProfilePopupOpen(false)
  setAddPlacePopupOpen(false)
  setEditAvatarPopupOpen(false)
  setSelectedCard(false)
}

  return (
    
    <>

<Header/>
<Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
<div id="elementsTemplate">
  <div className="elements cards">
      {cards.map((card)=> (
        <Card key={card._id} cardData={card} onCardClick={handleCardClick}/>
       )
       )}
  </div>
</div> 
<Footer/>
<PopupWidthForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="popupEdit" title="Редактировать профиль" textBtn="Сохранить"  children = {
<>
   <input required minLength="2" maxLength="40" type="text" name="name" placeholder="Имя" id="input-name" className="popup__input popup__input_name"/>
   <span className="popup__error" id="input-name-error"></span>
   <input required minLength="2" maxLength="200" type="text" name="activity" placeholder="О себе" id="input-activity" className="popup__input popup__input_activity"/>
   <span className="popup__error" id="input-activity-error"></span>
</>
}/>

<PopupWidthForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}  name="popupAdd" title="Новое место" textBtn="Создать"  children = {
<>
       <input required minLength="2" maxLength="30" type="text" name="card-name" placeholder="Название" id="input-text" className="popup__input popup__input_card-name"/>
       <span className="popup__error" id="input-text-error"></span>
       <input required name="card-url" placeholder="Ссылка на картинку" id="input-url" className="popup__input popup__input_card-link" type="url"/>
       <span className="popup__error" id="input-url-error"></span>
</>
}/>

<PopupWidthForm  isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="popupAvatar" title="Обновить аватар" textBtn="Сохранить"  children = {
<>
       <input required name="avatar-url" placeholder="Ссылка на картинку" id="input-url" className="popup__input popup__input_avatar-link" type="url"/>
       <span className="popup__error" id="input-url-error"></span>
</>
}/>

<PopupWidthForm name="popupWarning" title="Вы уверены" textBtn="Да" />
<ImagePopup onClose={closeAllPopups} card={selectedCard}/>

</>
  );
}

export default App;
