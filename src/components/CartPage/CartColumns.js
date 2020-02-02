import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                {/* single column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">product</p>
                </div>
                 {/* end of single column */}
                 {/* single column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">Name</p>
                </div>
                 {/* end of single column */}
                 {/* single column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">Price</p>
                </div>
                 {/* end of single column */}
                 {/* single column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">Quantity</p>
                </div>
                 {/* end of single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">Remove</p>
                </div>
                 {/* end of single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">Total</p>
                </div>
                 {/* end of single column */}
            </div>
        </div>
    )
}
