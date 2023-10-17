import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { Input } from '@components/common/form/fields/Input';
import XIcon from '@heroicons/react/solid/esm/XIcon';
import './SearchBox.scss';

export default function SearchBox({ searchPageUrl }) {
  const InputRef = useRef();
  // Get the key from the URL
  const [keyword, setKeyword] = useState(null);

  React.useEffect(() => {
    const url = new URL(window.location.href);
    const key = url.searchParams.get('keyword');
    setKeyword(key);
    InputRef.current.focus(); // Focus the input field when the page loads
  }, []);

  return (
    <div className="search-box">
      <div className="search-input">
        <Input
          prefix={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '1.8rem', height: '1.8rem' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          placeholder="Search for products, brands and more"
          ref={InputRef}
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              // Redirect to search page with search query as the keyword in the url
              const url = new URL(searchPageUrl, window.location.origin);
              url.searchParams.set('keyword', InputRef.current.value);

              window.location.href = url;
            }
          }}
        />
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  searchPageUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'icon-wrapper',
  sortOrder: 5
};

export const query = `
  query Query {
    searchPageUrl: url(routeId: "catalogSearch")
  }
`;