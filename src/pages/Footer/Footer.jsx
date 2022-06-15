import React from 'react';
import Logo from '../../components/Logo/Logo';
import TwitterImg from '../../assets/twitter.webp';
import InstaImg from '../../assets/insta.webp';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.page}>

            <div className={styles.content__col}>
                <h2>Delivering NFT Projects the Right Way.</h2>
                <button> Let's Connect </button>
                <div className={styles.content__row}>
                <img src={TwitterImg} />
                <img src={InstaImg} />
                </div>
            </div>
      
    </div>
  )
}

export default Footer
