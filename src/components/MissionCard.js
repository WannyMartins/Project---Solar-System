import PropTypes from 'prop-types';
import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missionsCard">
        <div className="titleCard">
          <p data-testid="mission-name">{ name }</p>
        </div>
        <div className="dadosMission">
          <p data-testid="mission-year" className="contentCard">{ year }</p>
          <p data-testid="mission-country" className="contentCard">{ country }</p>
          <p data-testid="mission-destination" className="contentCard">{ destination }</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
