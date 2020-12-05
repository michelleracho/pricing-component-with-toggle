import React from 'react';

import styles from '../styles/SwitchStyles.module.css';

const Switch = ({ tier, toggleSwitch }) => {
  const handleChange = () => {
    toggleSwitch();
  };

  return (
    <div className={styles.Switch}>
      <h4>Annually</h4>

      <label
        className={styles.Switch__container}
        onChange={() => handleChange()}
      >
        <input
          type="checkbox"
          value={tier}
          className={styles.Switch__toggler}
        />
        <div className={styles.Switch__toggler}></div>
      </label>

      <h4>Monthly</h4>
    </div>
  );
};

export default Switch;
