import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="prefix">Prefix</label>
        <select name="prefix" id="prefix">
          <option value=""></option>
          <option value="spain"><span className="flag"></span>Spain <span className="prefix">+34</span></option>
          <option value="chile"><span className="flag"></span>Chile <span className="prefix">+56</span></option>
          <option value="peru"><span className="flag"></span>Peru <span className="prefix">+51</span></option>
          <option value="mexico"><span className="flag"></span>Mexico <span className="prefix">+521</span></option>
        </select>
      </React.Fragment>
    );
  }
}

export default Select;