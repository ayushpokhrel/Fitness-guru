import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LevelContent from './LevelContent';

const Gymtypes = () => {
  const [data, setData] = useState([]);
  const [selectedGymType, setSelectedGymType] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    fetch('http://localhost:3005/gymtype')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className='gymContainer'>
      <div className='mainbox' style={{ display }}>
        {data.map((item, id) => {
          const file = item.file;
          const rfile = file.replace('\\', '/');
          const rrfile = rfile.replace('\\', '/');

          const backgroundImageStyle = {
            background: `url(http://localhost:3005/${rrfile})`,
          };

          return (
            <div className='box' style={backgroundImageStyle} key={id}>
              <b>{item.name}</b> <br /><br />
              {item.des}
              <div className='boxinfo'>{item.description}</div>
              <Link
                className='linksbox'
                onClick={() => {
                  setSelectedGymType(item.name);
                  setSelectedLevel('beginner');
                  // setDisplay('none');
                }}
              >
                Beginner
              </Link>
              <Link
                className='linksbox'
                onClick={() => {
                  setSelectedGymType(item.name);
                  setSelectedLevel('intermediate');
                  // setDisplay('none');
                }}
              >
                Intermediate
              </Link>
              <Link
                className='linksbox'
                onClick={() => {
                  setSelectedGymType(item.name);
                  setSelectedLevel('advanced');
                  // setDisplay('none');
                }}
              >
                Advanced
              </Link>
            </div>
          );
        })}
      </div>
      <div className='rightrow'>

        {selectedGymType && selectedLevel && (
          <LevelContent gymType={selectedGymType} level={selectedLevel} />
        )}
      </div>
    </div>
  );
};

export default Gymtypes;
