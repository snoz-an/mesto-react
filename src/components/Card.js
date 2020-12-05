import React from 'react';
import Like from '../images/like.svg';
import Delete from '../images/card-delete.svg'

function Card(props) {
    const cardData = props.cardData;
    function handleClick() {
        props.onCardClick(cardData);
      } 
    
    return(
        <div key={cardData.id} className="card">
        <img src = {cardData.link} alt={cardData.name} className="card__img" onClick={handleClick} />
         <div className="card__name-container">
             <h3 className="card__name">{cardData.name}</h3>
             <div className="like__container">
                 <button type="button" className="like">
                 <img src={Like} alt="лайк"/>
             </button>
             <span className="like__counter">{cardData.likes.length}</span>
             </div>
             <button type="button" className="card__delete">
                 <img src={Delete} alt="удалить"/>
             </button>
        </div>
        </div>
    ) 

}

export default Card