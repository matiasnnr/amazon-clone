import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <div className="product__rating--margin">
                                <span role="img" aria-label="star">⭐️</span>
                            </div>
                        ))}
                </div>
            </div>

            <img src={image} alt="product" />

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
