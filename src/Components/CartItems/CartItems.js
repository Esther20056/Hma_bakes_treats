import React, { useContext } from 'react'
import './CartItems.css'
import { HomeContexts } from '../../Contexts/HomeContexts'
import removeIcon from '../../Components/Assets/removeIcon.png'


function CartItems() {
    const {getTotalItemAmount , all_products, cartProducts, removeFromCart } = useContext(HomeContexts);
    return (
        <div className='cartitems'>
            <div id='cy'>
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_products.map((r) => {
                if (cartProducts[r.id] > 0) {
                    return <div>
                        <div id='rest'>
                            <img src={r.image} alt="" id='treat' />
                            <p className='water'>{r.name}</p>
                            <p className='flour'>#{r.current_price}</p>
                            <button className='cart-quantity'>{cartProducts[r.id]}</button>
                            <p className='sugar'>#{r.current_price * cartProducts[r.id]}</p>
                            <img style={{ width: '1.5rem', marginLeft: '3rem' }} src={removeIcon} onClick={() => { removeFromCart(r.id) }} alt="" />
                        </div>
                        <hr />
                    </div>

                }
                return null;
            })}
            <div id='cart'>
                <div className="total">
                    <p>Cart Totals</p>
                    <hr />
                    <div className="total-items">
                    <p>Subtotal</p>
                    <p>#{getTotalItemAmount()}</p>
                    </div>
                  <hr />
                <div className="total-items">
                    <p>Delivery Fee</p>
                </div>
                <hr />
                  <div className="total-items">
                    <p>Total</p>
                    <p>#{getTotalItemAmount()}</p>
                  </div>
                </div>
            </div>
            <div>
                <ul id='lol'>
                    <li id='sensation'>
                        Have Enquiries or payment issues? Simply message or call +234 706 8491 018.
                    </li>
                    <li id='sensation'>
                        To ensure the care and quality of our fragile cakes, treats and cocktails combimed with the sensitivity
                        to temperature  requirements. We deliver all orders through BOLT/UBER.
                    </li>
                    <li id='sensation'>
                     We offer a free pickup option, available everyday of the week. Simply place your order, 
                     select pickup at CHECKOUT and your order will await you on your preffered pickup time and date.
                    </li>
                    
                </ul>
            </div>
            <button id='velvet'>CHECKOUT</button>
        </div>
    )
}
export default CartItems