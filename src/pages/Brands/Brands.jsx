import React from 'react';
import DolphinLogo from '../../assets/dolphin-logo-bw.webp';
import CraftLogo from '../../assets/craft.webp';
import ChftyLogo from '../../assets/chftypizzas.webp';
import FyatLogo from '../../assets/fyat-logo.webp';
import VersusLogo from '../../assets/versus-logo.webp';
import DoorLogo from '../../assets/door-logo.png';
import styles from './Brands.module.scss';

function Brands() {
  return (
    <div className={styles.page}>
        <div className={styles.width__container}>
            <h3>Guiding Established Companies and Brands into Web3</h3>
            <p>BlockStop is trusted by high profile individuals and brands. We ensure all of our clients are properly educated and immersed in the ecosystem in order to to deliver the highest quality projects </p>
            <div className={styles.brand__container}>
            <div className={styles.brand__row}>
                <a href="https://www.dolphinentertainment.com/" ><img src={DolphinLogo} /></a>
                <a href="https://www.craftedhospitality.com/" ><img src={CraftLogo} /> </a>
            </div>
            <div className={styles.brand__row}>
                <a href="https://www.chftypizzas.com/"><img src={ChftyLogo} /> </a>
                <a href="https://fyatlux.com/"><img src={FyatLogo} /> </a>
                <a href="https://www.versusequity.com/"><img src={VersusLogo} /> </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Brands
