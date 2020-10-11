import React from 'react'
import { useStateValue } from "./StateProvider"
import './Product.css'

function Product({ id, title, image, price, rating }) {

    /* So this means two things, we are using the useStateValue hook to:
    - Bring in a state named basket
    - And we are also getting the dispatch function which allows us to dispatch actions to change the state in the reducer. */
    const [{ basket }, dispatch] = useStateValue();

    /* The addToBasket function fires off the dispatch to the reducer instructing to update the state with the provided data. 
    Here the type is “ADD_TO_BASKET”. We are dispatching the action along with its data. */
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      };

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

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
