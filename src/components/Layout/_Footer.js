import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className="uk-section uk-section-secondary">
        <div className="uk-container uk-container-small">
          <div
            className="uk-grid-match uk-child-width-1-3@m uk-grid-divider"
            data-uk-grid
          >
            <div>
              <h4>About</h4>
              <div className="uk-panel">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div>
              <h4>Something</h4>

              <ul className="uk-list uk-link-text">
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Connect</h4>

              <ul className="uk-iconnav">
                <li>
                  <a href="#" data-uk-icon="icon: facebook" />
                </li>
                <li>
                  <a href="#" data-uk-icon="icon: twitter" />
                </li>
                <li>
                  <a href="#" data-uk-icon="icon: google" />
                </li>
                <li>
                  <a href="#" data-uk-icon="icon: github" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
