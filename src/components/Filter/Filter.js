import React from 'react';

function Filter({ value, onChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={value}
        onChange={event => onChangeFilter(event.target.value)}
      />
    </label>
  );
}

export default Filter;
