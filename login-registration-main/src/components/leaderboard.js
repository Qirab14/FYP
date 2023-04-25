import React from 'react';
import './leaderboard.css';

function Leaderboard(props) {

        return (
          <div className="l-wrapper">
            <div className="c-header">
              <img className="c-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/km-logo-color.svg" draggable="false" />
              <button className="c-button c-button--primary">Ranking</button>
            </div>
            <div className="l-grid">
              <div className="l-grid__item l-grid__item--sticky">
                <div className="c-card u-bg--light-gradient u-text--dark">
                  <div className="c-card__body">
                    <div className="u-display--flex u-justify--space-between">
                      <div className="u-text--left">
                        <div className="u-text--small">My Rank</div>
                        <h2>3rd Place</h2>
                      </div>
                      <div className="u-text--right">
                        <div className="u-text--small">My Score</div>
                        <h2>24</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-card">
                  <div className="c-card__body">
                    <div className="u-text--center" id="winner"></div>
                  </div>
                </div>
              </div>
              <div className="l-grid__item">
                <div className="c-card">
                  <div className="c-card__header">
                    <h3>Received Points</h3>
                    <select className="c-select">
                      <option selected>Sunday, Feb. 23 - Sunday, Feb. 30</option>
                    </select>
                  </div>
                  <div className="c-card__body">
                    <ul className="c-list" id="list">
                      <li className="c-list__item">
                        <div className="c-list__grid">
                          <div className="u-text--left u-text--small u-text--medium">Rank</div>
                          <div className="u-text--left u-text--small u-text--medium">Team Member</div>
                          <div className="u-text--right u-text--small u-text--medium"># of CodeUnity</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
    );
}

export default Leaderboard;
