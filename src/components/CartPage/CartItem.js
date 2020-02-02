import React from 'react'
import {FaTrash,FaChevronCircleUp,FaChevronCircleDown} from 'react-icons/fa';
export default function CartItem({cartItem,increment,decrement,removeItem}) {
    const {id,title,price,count,total,image} =cartItem;
    return (
        <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
            {/*image */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <img src={image} alt="product" width="60px" className="img-fluid" />
            </div>
            {/*end of image */}
            {/*Title */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">product : </span> {title}
            </div>
            {/*end of Title */}
            {/*Price */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">Price : $</span> {price}
            </div>
            {/*end of Price */}
            {/*Count Controls */}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <FaChevronCircleDown className=" cart-icon text-primary" onClick={()=>decrement(id)} />
                        <span className="text-title text-muted mx-3">{count}</span>
                        <FaChevronCircleUp className=" cart-icon text-primary" onClick={()=>increment(id)} />
                    </div>
                </div>
            </div>
            {/*end of Count Controls*/}
            {/*Start of Remove */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <FaTrash className="text-danger cart-icon" onClick={()=> removeItem(id)} />
            </div>
            {/*end of Remove */}
            {/*Start of Item Total */}
            <div className="col-10 mx-auto col-lg-2">
             <strong className="text-muted">item total : ${total}</strong>
            </div>
            {/*End of Item Total */}
        </div>
    )
}
