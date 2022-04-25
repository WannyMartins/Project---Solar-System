import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <div className="planetas">
          {planets.map((planet) => (
            <PlanetCard
              planetImage={ planet.image }
              planetName={ planet.name }
              key={ planet.name }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
