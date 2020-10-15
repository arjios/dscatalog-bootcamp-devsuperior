import React from 'react';

import { ReactComponent as ProductImage } from "../../../../core/assets/images/product.svg";
import ProductPrice from '../../../../core/components/ProductPrice';
import './style.scss';

const ProductCard = () => (
    <div className="card-base border-radius-10 product-card">
        <ProductImage />
        <div className="product-info">
            <h6 className="product-name">
                Computer Desktop - <br />Intel core i7
            </h6>
            <ProductPrice price="2.779,00" /> 
        </div>
    </div>
);


export default ProductCard;