import React from 'react';
import './Billboard.css';

const Movie = () => {
  return (
    <div className="movie">
      <img className="movie__preview" src="/images/sample1.jpg" />
      <div className="movie__info">
        <h4 className="movie__title">The Walking Dead</h4>
        <h5 className="movie__year">2007</h5>
      </div>
    </div>
  );
};

const Group = () => {
  return (
    <div className="billboard__group">
      <h2 className="group__title">Populares en Netflix</h2>
      <div className="group__list">
        <Movie /><Movie /><Movie /><Movie /><Movie /><Movie />
      </div>
    </div>
  );
};

const Billboard: React.FC = () => {
  return (
    <div className="billboard">
      <Group />
      <Group />
      <Group />
    </div>
  );
}

export default Billboard;
