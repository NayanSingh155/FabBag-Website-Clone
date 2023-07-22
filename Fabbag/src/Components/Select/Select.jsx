import React from 'react';
import styles from './Select.module.scss'
import cn from 'classnames'

const Select = ({ name, id, onChange, label, value, data, error }) => {
    return (
        <>
         <div className={styles.formWrapper }>
            <div className={ cn(styles.fullInput, { [styles.invalid]:error  })}><label htmlFor={name}>{label}</label>
                <select name={name} id={id} onChange={onChange} value={value}>
                    {data && data.length > 0 && data.map(x => <option key={x.title}>{x.title}</option>)}
                </select>
            </div>
        </div>
        {error && <div className={styles.error}>{error}</div>}
        </>
       
    )
}

export default Select;