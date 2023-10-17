import React from 'react';
import Button from '@components/frontStore/cms/Button';
import './Featured.scss';

export default function FeaturedCategories() {
  return (
    <div className="mt-3">
      <div className="text-center">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/e773974d-4748-48dd-9f93-d6b9808a70581691152509520-Rakshabandhan-Gifts-This-Way.png" alt="" />
          </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
        <div>
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Kids shoes collection</h3>
          <div className="mb-1">
            <p>
              Constructed from luxury nylons, leathers, and custom hardware,
              featuring sport details such as hidden breathing vents, waterproof
              + antimicrobial linings, and more.
            </p>
          </div>
          <Button url="/kids" title="Shop kids" variant="primary" />
        </div>
        <div>
          <div>
            <img src="https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Women shoes collection</h3>
          <div className="mb-1">
            <p>
              Constructed from luxury nylons, leathers, and custom hardware,
              featuring sport details such as hidden breathing vents, waterproof
              + antimicrobial linings, and more.
            </p>
          </div>
          <Button url="/women" title="Shop women" variant="primary" />
        </div>
        <div>
          <div>
            <img src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lbnMlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Men shoes collection</h3>
          <div className="mb-1">
            <p>
              Constructed from luxury nylons, leathers, and custom hardware,
              featuring sport details such as hidden breathing vents, waterproof
              + antimicrobial linings, and more.
            </p>
          </div>
          <Button url="/men" title="Shop men" variant="primary" />
        </div>
      </div>
      <div className="text-center">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/d3cafced-05c3-4651-8369-d283d63236e61691150598111-Grand-Global-Brands.png" alt="" />
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
