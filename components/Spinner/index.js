import React from 'react';
import s from './index.css';

const Spinner = (props) => (
  <div className={`${s.main} ${props.active ? s.main_active : ''}`}>
    <div className={s.spinner}>
      <div className={`${s.fountainG} ${s.fountainG_1}`}></div>
      <div className={`${s.fountainG} ${s.fountainG_2}`}></div>
      <div className={`${s.fountainG} ${s.fountainG_3}`}></div>
      <div className={`${s.fountainG} ${s.fountainG_4}`}></div>
      <div className={`${s.fountainG} ${s.fountainG_5}`}></div>
      <div className={`${s.fountainG} ${s.fountainG_6}`}></div>
      <div className={`${s.fountainG} ${s.fountainG_7}`}></div>
      <div className={`${s.fountainG} ${s.fountainG_8}`}></div>
    </div>
  </div>
);

Spinner.propTypes = {
  active: React.PropTypes.bool.isRequired,
};

export default Spinner;
