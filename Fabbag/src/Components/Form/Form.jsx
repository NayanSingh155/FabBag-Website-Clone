import React from 'react';
import { ErrorMessage, useFormik } from 'formik';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import styles from './Form.module.scss'
import Select from '../Select/Select';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate()
    const formSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        address1: Yup.string()
            .required('Required'),
        address2: Yup.string()
            .required('Required'),
        region: Yup.string()
            .required('Required'),
        city: Yup.string()
            .required('Required'),
        state: Yup.string()
            .required('Required'),
        pin: Yup.string().length(6, 'Invalid Pin')
            .required('Required'),
        phone: Yup.string().length(10, 'Invalid Phone Number').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    const country = [{
        id: 1, title: 'India'
    }, { id: 2, title: 'Sri Lanka' }];
    const state = [{ id: 1, title: 'Karnataka' }, { id: 2, title: "Uttara Pradesh" }]
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            region: '',
            company: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            pin: '',
            phone: '',
            saveEmail: '',
            saveInfo: ''

        },
        validationSchema: formSchema,
        onSubmit: values => {
            alert("Your order has been Sucessful");
            navigate("/")
        },
    });
   
    return (
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
            <div className={styles.formGroup}>
                <Input name="email" id="email" type="text" onChange={formik.handleChange}
                    value={formik.values.email} label="Email" placeholder="Email" error={formik.errors.email ? formik.errors.email : null} />
                <Checkbox id='saveEmail' name='saveEmail' value={formik.values.saveEmail} onChange={formik.handleChange} label='Email me with news and offers' />
            </div>
            <div className={styles.shippAdd}>Shipping Address</div>
            <div className={styles.formGroup}>
                <Select name="region" id="region" onChange={formik.handleChange}
                    value={formik.values.region} label="Country/Region" data={country} error={formik.errors.region ? formik.errors.region : null} />
            </div>
            <div className={styles.formHorizontal}>
                <div>
                    <Input className={styles.imp} name="firstName" id="firstName" type="text" onChange={formik.handleChange}
                        value={formik.values.firstName} label="First Name" placeholder="First Name" error={formik.errors.firstName ? formik.errors.firstName : null} />
                </div>
                <div>
                    <Input className={styles.imp} name="lastName" id="lastName" type="text" onChange={formik.handleChange}
                        value={formik.values.lastName} label="Last Name" placeholder="Last Name" error={formik.errors.lastName ? formik.errors.lastName : null} />
                </div>


            </div>
            <div className={styles.formGroup}>
                <Input name="company" id="company" type="text" onChange={formik.handleChange}
                    value={formik.values.company} label="Company" placeholder="Company(optional)" />
            </div>
            <div className={styles.formGroup}>
                <Input name="address1" id="address1" type="text" onChange={formik.handleChange}
                    value={formik.values.address1} label="Address" placeholder="Address" error={formik.errors.address1 ? formik.errors.address1 : null} />
            </div>
            <div className={styles.formGroup}>
                <Input name="address2" id="address2" type="text" onChange={formik.handleChange}
                    value={formik.values.address2} label="Apartment" placeholder="Apartment, suite, etc(optional)" error={formik.errors.address2 ? formik.errors.address2 : null} />
            </div>
            <div className={styles.formHorizontal}>
                <div>
                    <Input name="city" id="city" type="text" onChange={formik.handleChange}
                        value={formik.values.city} label="City" placeholder="City" error={formik.errors.city ? formik.errors.city : null} />
                </div>
                <div>
                    <Select name="state" id="state" onChange={formik.handleChange}
                        value={formik.values.state} label="State" data={state} error={formik.errors.state ? formik.errors.state : null} />
                </div>
                <div>
                    <Input name="pin" id="pin" type="text" onChange={formik.handleChange}
                        value={formik.values.pin} label="Pin" placeholder="Pin" error={formik.errors.pin ? formik.errors.pin : null} />
                </div>

            </div>

            <div className={styles.formGroup}>
                <Input name="phone" id="phone" type="text" onChange={formik.handleChange}
                    value={formik.values.phone} label="Phone" placeholder="Phone" error={formik.errors.phone ? formik.errors.phone : null} />
            </div>
            <div className={styles.formGroup}>
                <Checkbox id='saveInfo' name='saveInfo' value={formik.values.saveInfo} onChange={formik.handleChange} label='Save this info for next time' />
            </div>
            <div className={styles.formfooter}>
                <div className={styles.retToCart}>&lt; Return to Cart</div>
                <button className={styles.shoppingBtn} type='submit'>Confirm Order</button>
            </div>
            {/* <button type="submit">Submit</button> */}
        </form >
    );
};

export default Form;