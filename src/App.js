import React, { Component } from 'react';
import cabifyLogo from './images/cabify-logo.svg';
import './styles/App.css';
import Select from './components/Select';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      jobdescription: "",
      ponenumber: "",
      email: "",
      website: "www.cabify.com",
      address: "",
      inputState: {
        fullname: '',
        jobdescription: '',
        ponenumber: '',
        email: '',
        website: 'disabled',
        address: ''
      }
    }
  }

  handleClick = (event) => {
    const GUILTY = event.currentTarget;
    const data = GUILTY.getAttribute('name');

    this.setState((state) => {
      const j = {
        ...this.state.inputState,
        [data]: "active focus"
      }
      return (
        { inputState: j }
      )
    })
  }

  handleBlur = (event) => {
    const GUILTY = event.currentTarget;
    const data = GUILTY.getAttribute('name');

    if (this.state[data] !== "") {
      this.setState((state) => {
        const j = {
          ...this.state.inputState,
          [data]: "active"
        }
        return (
          { inputState: j }
        )
      })
    }
    else if (this.state[data] === "") {
      this.setState((state) => {
        const j = {
          ...this.state.inputState,
          [data]: ""
        }
        return (
          { inputState: j }
        )
      })
    }
  }


  catchData = (event) => {

    const GUILTY = event.currentTarget;

    if (GUILTY.getAttribute('name') === 'fullname') {
      this.setState({ fullname: GUILTY.value })
    }
    else if (GUILTY.getAttribute('name') === 'jobdescription') {
      this.setState({ jobdescription: GUILTY.value })
    }
    else if (GUILTY.getAttribute('name') === 'ponenumber') {
      this.setState({ ponenumber: GUILTY.value })
    }
    else if (GUILTY.getAttribute('name') === 'email') {
      this.setState({ email: GUILTY.value })
    }
    else if (GUILTY.getAttribute('name') === 'website') {
      this.setState({ website: GUILTY.value })
    }
    else if (GUILTY.getAttribute('name') === 'address') {
      this.setState({ address: GUILTY.value })
    }
  }


  render() {
    const { fullname, jobdescription, ponenumber, email, website, address } = this.state;
    

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
                <p className="businessCard-cardFront-title">{fullname}</p>
                <p className="businessCard-cardFront-subtitle">{jobdescription}</p>
              </div>
              <div className="businessCard-cardFront-bottom">
                <p className="businessCard-icon-phone">+34 {ponenumber} </p>
                <p className="businessCard-icon-email">{email}</p>
                <p className="businessCard-icon-website">{website}</p>
                <p className="businessCard-icon-address">{address}</p>
              </div>
            </div>
          </div>
        </article>
        <article className="builder col col6">
          <form className="form" action="">
            <div className="row">
              <div className={`formField-input col col12 ${this.state.inputState.fullname}`}>
                <div className="input">
                  <input type="text" name="fullname"
                    onChange={this.catchData}
                    value={this.state.name}
                    onFocus={this.handleClick}
                    onBlur={this.handleBlur} />
                  <label htmlFor="fullname">Full name</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              {/* you probably need to add active/focus/disabled classNames */}
              <div className={`formField-input col col12 ${this.state.inputState.jobdescription}`}>
                <div className="input">
                  <input type="text" name="jobdescription"
                    onChange={this.catchData}
                    value={this.state.job}
                    onFocus={this.handleClick}
                    onBlur={this.handleBlur} />
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
              <div className={`formField-input col col9 ${this.state.inputState.ponenumber}`}>
                <div className="input">
                  <input type="tel" name="ponenumber"
                    onChange={this.catchData}
                    value={this.state.phone}
                    onFocus={this.handleClick}
                    onBlur={this.handleBlur} />
                  <label htmlFor="ponenumber">Phone number</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className={`formField-input col col12 ${this.state.inputState.email}`}>
                <div className="input">
                  <input type="email" name="email"
                    onChange={this.catchData}
                    value={this.state.email}
                    onFocus={this.handleClick}
                    onBlur={this.handleBlur} />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className="formField-input active disabled col col12">
                <div className="input">
                  <input type="text" name="website"
                    onChange={this.catchData}
                    value={this.state.website} />
                  <label htmlFor="website">Website</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className={`formField-input col col12 ${this.state.inputState.address}`}>
                <div className="input">
                  <input type="text" name="address"
                    onChange={this.catchData}
                    value={this.state.address}
                    onFocus={this.handleClick}
                    onBlur={this.handleBlur} />
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
