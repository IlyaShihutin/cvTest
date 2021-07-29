import React from 'react';
import './style/index.scss';
import { Link } from 'react-router-dom';
const listProjects = [
  {
    name: 'Mapper',
    id: '1',
    skill: 'sleep',
  },
  {
    name: 'SVG',
    id: '2',
    skill: 'deep ...',
  },
  {
    name: 'CV1',
    id: '3',
    skill: 'eat',
  },
  {
    name: 'CV1',
    id: '4',
  },
  {
    name: 'CV1',
    id: '5',
  },
  {
    name: 'CV1',
    id: '6',
  },
  {
    name: 'CV1',
    id: '7',
  },
];
const ProfilePage = (props) => {
  return (
    <div className="profile_wrapper">
      <div className="profile_info">
        <div className="profile_img">
          <p>I</p>
        </div>
        <div className="profile_name">
          <p>Ilya</p>
        </div>
        <div className="profile_desk">
          <p>Description</p>
          <p>Какая-то инфа</p>
        </div>
        <div className="profile_tech">
          <p>Technologies</p>
          <p>Js React html css</p>
        </div>
      </div>
      <div className="profile_cv">
        {listProjects.map((elem) => (
          <Link className="cv_item" to={'/cv:' + elem.id}>
            <div className="cv_name">{elem.name}</div>
            <div className="cv_tech">Tech: {elem.skill}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
