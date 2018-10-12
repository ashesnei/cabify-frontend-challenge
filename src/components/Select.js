import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="prefix">Prefix</label>
        <select name="prefix" id="prefix">
          <option value=""></option>
          <option value="spain">Spain</option>
          <option value="peru">Peru</option>
          <option value="mexico">Mexico</option>
        </select>
      </React.Fragment>
    );
  }
}

export default Select;