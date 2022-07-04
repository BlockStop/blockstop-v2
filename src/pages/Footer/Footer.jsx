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
                <a href = "https://gf144bwmy12.typeform.com/to/hcPphVaO"><button> Let's Connect </button> </a>
                <div className={styles.content__row}>
                <a href = "https://twitter.com/BlockStopXYZ"> <img src={TwitterImg}/> </a>
                <a href = "https://www.blockstop.xyz/"> <img src={InstaImg}/> </a>
                </div>
            </div>
    </div>
  )
}

export default Footer
