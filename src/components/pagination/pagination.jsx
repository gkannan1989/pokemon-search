import React from 'react';
import './pagination.styles.scss';

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="suggestion-list buttons">
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
}

export default Pagination;
