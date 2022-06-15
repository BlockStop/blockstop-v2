import React from 'react';
import DolphinLogo from '../../assets/dolphin-logo.webp';
import CraftLogo from '../../assets/craft-logo.webp';
import ChftyLogo from '../../assets/chftypizzas.webp';
import FyatLogo from '../../assets/fyat-logo.webp';
import VersusLogo from '../../assets/versus.webp';
import styles from './Brands.module.scss';

function Brands() {
  return (
    <div className={styles.page}>
        <div className={styles.width__container}>
            <h3>Guiding Established Companies and Brands into Web3</h3>
            <p>BlockStop is trusted by high profile individuals and brands. We pride ourselves on bringing them into Web3 with proper authenticity so they truly immerse themselves and become part of the ecosystem </p>
            <div className={styles.brand__row}>
                <img src={DolphinLogo} />
                <img src={CraftLogo} />
            </div>
            <div className={styles.brand__row}>
                <img src={ChftyLogo} />
                <img src={FyatLogo} />
                <img src={VersusLogo} />
            </div>
        </div>
    </div>
  )
}

export default Brands
