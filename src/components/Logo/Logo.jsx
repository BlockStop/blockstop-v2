import React from 'react';
import LogoImg from '../../assets/logo-small.webp';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={LogoImg} loading="lazy"/>
        </div>
    );
}

export default Logo;