import React from 'react';
import { useSelector } from 'react-redux';
import { CartBlock } from '../CartBlock/CartBlock';
import './SimilarProducts.css';

export default function SimilarProducts() {
  const similarProducts = useSelector(
    (state: any) => state?.getProducts?.product?.similar_products,
  );

  return (
    <div className="similarProduct">
      {similarProducts?.map((elem: any, index: number) => {
        return (
          <div key={index} className="similarProductItem">
            <CartBlock
              key={index}
              name={elem.title}
              cardSize="32%"
              code={elem.code}
              properties={elem.properties}
              price={elem.price}
              product_id={elem.id}
              img={elem.images[0]}
              in_stock={elem.in_stock}
            />
          </div>
        );
      })}
    </div>
  );
}
