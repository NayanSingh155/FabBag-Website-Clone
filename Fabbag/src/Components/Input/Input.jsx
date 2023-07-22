import React from 'react';
import cn from 'classnames'
import styles from './Input.module.scss'

const Input = ({ className, name, id, type, onChange, label, value, placeholder, error }) => {
    return (
        <>
            <div className={cn(styles.formWrapper, className)}>
                <div className={cn(styles.fullInput, { [styles.invalid]:error  })}><label htmlFor={name}>{label}</label>
                    <input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} /></div>
            </div>
            {error && <div className={styles.error}>{error}</div>}
        </>

    )
}

export default Input;