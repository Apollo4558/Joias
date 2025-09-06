import React from 'react';
import './GenderFilter.css';

const GenderFilter = ({ genders, activeGender, onSelectGender }) => {
  return (
    <div className="gender-filter-container">
      {genders.map((gender) => (
        <button
          key={gender}
          className={`gender-button ${activeGender === gender ? 'active' : ''}`}
          onClick={() => onSelectGender(gender)}
        >
          {gender === 'todos' ? 'Todos' : gender === 'feminina' ? 'Femininas' : 'Masculinas'}
        </button>
      ))}
    </div>
  );
};

export default GenderFilter;