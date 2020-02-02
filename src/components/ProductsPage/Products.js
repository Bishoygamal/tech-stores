import React from 'react';
import { ProductConsumer } from "../../context";

import  styled  from 'styled-components';
import Title from './../Title';
import Product from './../Product';
import ProductFilter from './ProductFilter';
export default function Products() {
    return (
        <ProductConsumer>
            {
                value =>{
                    const {filterProducts} =value;
                    return (
                        <section className="py-5">
                            <div className="container">
                                <Title center title="our products" />
                                <ProductFilter></ProductFilter>
                                {/*total count */}
                                <div className="row">
                                    <div className="col-10 mx-auto">
                                        <h6 className="text-title">
                                            total product : {filterProducts.length}
                                        </h6>
                                    </div>
                                </div>
                                {/*products */}
                                <div className="row py-5">
                                    {filterProducts.length === 0 ?(
                                        <div className="col text-title text-center">
                                            sorry , no items matched your search
                                        </div>
                                    ):(
                                    filterProducts.map(product =>{
                                        return <Product key={product.id} product={product}/>
                                    })
                                    )}

                                </div>
                            </div>
                        </section>
                    )
                }
            }
        </ProductConsumer>
    )
}
