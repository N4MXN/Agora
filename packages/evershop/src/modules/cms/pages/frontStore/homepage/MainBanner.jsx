import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import './MainBanner.scss';

export default function MainBanner() {
  const text = _('FLAT ${discount} Off For All Orders Over ${price}', {
    discount: '20%',
    price: '₹2000'
  });
  return (
    <div className="main-banner-home flex">
      <div className="container grid grid-cols-4 md:grid-cols-4 gap-2">
      <div />
      <div />
      <div/>
      <div className="text-center md:text-left">
          <h2 className="h1 ">{text}</h2>
          <p>
            Use coupon code 
            <span className="font-bold">DISCOUNT20</span>
          </p>
          <p>{_('Use coupon ${coupon}', { coupon: 'DISCOUNT20' })}</p>
          <p></p> 
        </div>
        
        
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
