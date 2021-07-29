import React from 'react';
import './style/index.scss';
import FilterTech from '../_component/FilterTech/FilterTech';
import { Link } from 'react-router-dom';
const listUsers = [
  {
    name: 'Ilya',
    id: '1',
    skill: 'sleep',
  },
  {
    name: 'pasha',
    id: '2',
    skill: 'deep ...',
  },
  {
    name: 'artem',
    id: '3',
    skill: 'eat',
  },
  {
    name: 'loki',
    id: '4',
  },
];
const Home = (props) => {
  return (
    <div className="home_wrapper">
      <FilterTech />
      {listUsers?.map((user) => (
        <Link
          to={'/profile:' + user.id}
          key={user.id}
          className="user_list_item"
        >
          <div className="user_icon">
            <p>{user.name[0]}</p>
          </div>
          <p className="user_text"> {user.name}</p>
          <p className="user_disc">Skills: {user.skill}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
