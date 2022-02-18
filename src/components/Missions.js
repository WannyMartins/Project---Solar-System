import React from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((mission) => (
            <MissionCard
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
              key={ mission.name }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;
