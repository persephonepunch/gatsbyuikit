import React, { Component } from 'react';
import Link from 'gatsby-link';

export class Navigation extends Component {
  render() {
    return (
      <nav className="uk-navbar-container uk-light">
        <div className="uk-container uk-container-expand">
          <div data-uk-navbar>
            <div className="uk-navbar-left uk-visible@m">
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="page-2">Page 2</Link>
                </li>
                <li>
                  <a href="#">Dropdown</a>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li>
                        <a href="#">Something</a>
                      </li>
                      <li>
                        <a href="#">Something 2</a>
                      </li>
                      <li>
                        <a href="#">Something 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="uk-padding uk-hidden@m" />

            <div className="uk-navbar-center">
              <Link className="uk-logo" to="/">
                GeoLocation
              </Link>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                <li className="uk-visible@m">
                  <button className="uk-button uk-button-primary">
                    Request a Demo
                  </button>
                </li>
                <li>
                  <button
                    className="uk-hidden@m uk-button-default uk-margin-medium-right"
                    data-uk-toggle="target: #offcanvas"
                    type="button"
                  >
                    <span data-uk-icon="menu" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
