import React, { Component } from 'react';
import cabifyLogo from './images/cabify-logo.svg';
import './styles/App.css';
import Select from './components/Select';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: "",
      phone: "",
      email: "",
      website: "",
      adress: ""
    }
  }

  catchData = (event) => {
    
    const GUILTY = event.currentTarget;

    if (GUILTY.getAttribute('name') === 'fullname') {
      this.setState({ name: GUILTY.value })
    }
    else if (GUILTY.getAttribute('name') === 'jobdescription') {
      this.setState({ job: GUILTY.value })
    }
    else if (GUILTY.getAttribute('name') === 'ponenumber') {
      this.setState({ phone: GUILTY.value })
    }
    else if (GUILTY.getAttribute('name') === 'email') {
      this.setState({ email: GUILTY.value })
    }
    else if (GUILTY.getAttribute('name') === 'website') {
      this.setState({ website: GUILTY.value })
    }
    else if (GUILTY.getAttribute('name') === 'adress') {
      this.setState({ phone: GUILTY.value })
    }
  }

  render() {
    return (
      <div className="mainWrapper row">
        <article className="businessCard col col6">
          <figure className="businessCard-badge">
            <a className="businessCard-badge-logo" href="http://www.cabify.com">
              <img src={cabifyLogo} alt="Cabify" />
            </a>
          </figure>
          <h1 className="title-main">Request your business card</h1>
          <div className="businessCard-cards">
            <div className="businessCard-cardBack" />
            <div className="businessCard-cardFront">
              <div>
                <p className="businessCard-cardFront-title">Laura Sánchez</p>
                <p className="businessCard-cardFront-subtitle">Fronte</p>
              </div>
              <div className="businessCard-cardFront-bottom">
                <p className="businessCard-icon-phone">+34 </p>
                <p className="businessCard-icon-email"></p>
                <p className="businessCard-icon-website">www.cabify.com</p>
                <p className="businessCard-icon-address">Calle Pradillo 42. CP: 28002. Madrid</p>
              </div>
            </div>
          </div>
        </article>
        <article className="builder col col6">
          <form className="form" action="">
            <div className="row">
              <div className="formField-input active col col12">
                <div className="input">
                  <input type="text" name="fullname"  onChange={this.catchData}/>
                  <label htmlFor="fullname">Full name</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              {/* you probably need to add active/focus/disabled classNames */}
              <div className="formField-input active focus col col12">
                <div className="input">
                  <input type="text" name="jobdescription" onChange={this.catchData}/>
                  <label htmlFor="jobdescription">Job description</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium row-gutterMedium">
              <div className="col col3">
                <div className="select">
                  <Select />
                </div>
              </div>
              <div className="formField-input col col9">
                <div className="input">
                  <input type="tel" name="ponenumber" onChange={this.catchData} />
                  <label htmlFor="ponenumber">Phone number</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className="formField-input col col12">
                <div className="input">
                  <input type="email" name="email" onChange={this.catchData}/>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className="formField-input active disabled col col12">
                <div className="input">
                  <input type="text" name="website" onChange={this.catchData}/>
                  <label htmlFor="website">Website</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className="formField-input active col col12">
                <div className="input">
                  <input type="text" name="address" onChange={this.catchData}/>
                  <label htmlFor="address">Address</label>
                </div>
              </div>
            </div>
            <div className="row row-separationHuge">
              <input className="button button-full button-primary disabled" type="submit" value="Request" />
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default App;
