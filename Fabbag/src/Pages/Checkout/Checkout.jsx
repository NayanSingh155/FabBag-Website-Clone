import React from 'react';
import cn from 'classnames';
import Form from '../../components/Form/Form'
import logo from '../../logo.png';
import fab from './fab.jpg'
import styles from './Checkout.module.scss';

const Checkout = () => {
    const braedCrumb = [{ id: 1, link: '/cart', title: 'Cart', active: true }, { id: 2, link: '/information', title: 'Information', active: false }, { id: 3, link: '/shopping', title: 'Shopping', active: false }, { id: 4, link: '/payment', title: 'Payment', active: false }]
    const items = [{ id: 1, url: fab, desc: "The AweSummer May Fab Bag", subDesc: '1 month', amt: '599.00' }];
    const totals = {
        'Subtotal':' 599.00',
        'Shipping': 'Calculated at next step',
        'Total': '599.00'
    }
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.header}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <div className={styles.braedCrumb}>
                        {braedCrumb && braedCrumb.length > 0 && braedCrumb.map(x => <div className={cn(styles.links, { [styles.active]: x.active })} key={x.id}>{x.title} {x.id < 4 && <span> &gt;&gt;</span>}</div>)}
                    </div>
                    <div className={styles.contactInfo}>
                        <div className={styles.info}>Contact Information</div>
                        <div className={styles.login}>Already have an acount? Login</div>

                    </div>
                    <Form />
                </div>

            </div>
            <div className={styles.rightContainer}>
                <div className={styles.itemDetails}>
                    {items && items.length > 0 && items.map(x => (<>
                        <div className={styles.imgWrapper}><img className={styles.img} src={x.url} alt='item image' />
                            <div className={styles.count}>1</div></div>
                        <div className={styles.descWrapper}>
                            <div className={styles.desc}>{x.desc}</div>
                            <div className={styles.subDesk}>{x.subDesc}</div>
                        </div>
                        <div className={styles.amountWrapper}>{x.amt}</div>
                    </>))}

                </div>
                <div className={styles.horizonatlBar}>
                    <hr />
                </div>
                <div className={styles.coupanWrapper}>
                    <input type="text" placeholder="Discount Code" /> <button>Apply</button>
                </div>

                <div className={styles.horizonatlBar}>
                    <hr />
                </div>
                <div className={styles.subCalc}>
                    <div className={styles.leftText}>Subtotal</div>
                    <div className={styles.subTotal}>{totals.Subtotal}</div>
                </div>
                <div className={styles.subCalc}>
                    <div className={styles.leftText}>Shipping</div>
                    <div className={styles.shipping}>{totals.Shipping}</div>
                </div>
                <div className={styles.horizonatlBar}>
                    <hr />
                </div>
                <div className={styles.finalCalc}>
                    <div className={styles.leftText}>Total</div>
                    <div className={styles.total}><span className={styles.inr}>INR </span> {totals.Total}</div>
                </div>
            </div>
        </div >
    )
}

export default Checkout; 