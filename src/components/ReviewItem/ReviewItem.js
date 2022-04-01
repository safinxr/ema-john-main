import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { product, remove }= props
    const { name, img, price, shipping, quantity } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="details-container">
                <div className="item-details">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + "..." : name}
                    </p>
                    <p>Price: <span className='orange-color'>{price}</span></p>
                    <p><small>Shiping: {shipping}</small></p>
                    <p><small>quantity: {quantity}</small></p>

                </div>
                <div className="delete">
                    <button onClick={()=>{remove(product)}} className='delete-button'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;