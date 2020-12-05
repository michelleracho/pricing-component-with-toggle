import React from 'react';

import styles from '../styles/SwitchStyles.module.css';

const Switch = ({ tier, toggleSwitch }) => {
  const handleChange = () => {
    toggleSwitch();
  };

  return (
    <div className={styles.Switch}>
      <h4>Annually</h4>

      <label className={styles.Switch__container}>
        <input type="checkbox" onChange={() => handleChange()} value={tier} />
        <div className={styles.Switch__toggler}></div>
      </label>

      <h4>Monthly</h4>
    </div>
  );
};

export default Switch;
