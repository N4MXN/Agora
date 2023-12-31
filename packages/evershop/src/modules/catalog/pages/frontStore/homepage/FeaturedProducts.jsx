import ProductList from '@components/frontStore/catalog/product/list/List';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import PropTypes from 'prop-types';
import React from 'react';

export default function FeaturedProducts({ collection }) {
  if (!collection) {
    return null;
  }
  return (
      <div className="page-width">
        <h1 className="mt-3 mb-3 text-center uppercase h1 tracking-widest">
          {collection.name}
        </h1>
        <ProductList products={collection.products.items} countPerRow={4} />
      </div>
  );
}

FeaturedProducts.propTypes = {
  collection: PropTypes.shape({
    collectionId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    products: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          productId: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.shape({
            regular: PropTypes.shape({
              value: PropTypes.number.isRequired,
              text: PropTypes.string.isRequired
            }).isRequired,
            special: PropTypes.shape({
              value: PropTypes.number.isRequired,
              text: PropTypes.string.isRequired
            }).isRequired
          }).isRequired,
          image: PropTypes.shape({
            alt: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
          }).isRequired,
          url: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};

FeaturedProducts.defaultProps = {
  featuredProducts: []
};

export const layout = {
  areaId: 'content',
  sortOrder: 15
};

export const query = `
  query query {
    collection (code: "FLAT20") {
      collectionId
      name
      products (filters: [{key: "limit", operation: "=", value: "4"}]) {
        items {
          productId
          name
          price {
            regular {
              value
              text
            }
            special {
              value
              text
            }
            }
          image {
            alt
            url: listing
          }
          url
        }
      }
    }
  }
`;
