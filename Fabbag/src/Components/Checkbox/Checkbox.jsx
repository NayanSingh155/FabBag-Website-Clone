import React from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = ({ name, id, onChange, label, value, }) => {
    return (
        <div className={styles.formWrapper}>
            <input id={id} type="checkbox" name={name} value={value} onChange={onChange} /> <span className={styles.checkboxLabel}>{label}</span>
        </div>

    )
}

export default Checkbox;