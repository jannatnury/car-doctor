import React from 'react';

const SingleCard = ({ img, bgClass,cardTitle,cardDetails }) => {
    return (
        <div className={`card lg:card-side shadow-xl mb-5 ${bgClass}`}>
            <figure className='ps-4'>
                <img src={img} alt="Album" />
                </figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardDetails}</p>
            </div>
        </div>
    );
};

export default SingleCard;