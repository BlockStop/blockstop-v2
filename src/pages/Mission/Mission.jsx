import React from 'react';
import MissionImg from '../../assets/science.webp';
import styles from './Mission.module.scss';
import { useMediaQuery } from "react-responsive";

function Mission() {
    const isMobile = useMediaQuery({ query: "(max-width: 850px)" });

    const stylesInner = {
        bold: {fontWeight: 'bold'},
    };

  return (
    <div className={styles.page}>
        <div className={styles.mission__container}>
            {!isMobile &&
            <React.Fragment>
            <div className={styles.white__line}>
                <div/>
            </div>

            <div className={styles.content__row}>
                <img src={MissionImg} />
                <div className={styles.content__column}>
                    <h2>Our Mission</h2>
                    <p>BlockStop is not your average Web3 company. While we certainly work with teams to market and develop their NFT projects, our real mission is to <span style={stylesInner.bold}>accelerate the maturity of the ecosystem</span> <br/></p>
                    <p>We accomplish this by using extensive IRL connections to bring in world class companies, brands, and public figures onto the blockchain. Focusing heavily on uitility, BlockStop works with their clients to deliver benefits above and beyond the current meta, pushing the entire space forward and demanding a higher standard</p>
                </div>
            </div>

            <div className={styles.white__line__bottom}>
                <div/>
            </div> 
            </React.Fragment>
            }

            {isMobile && 
                <div className={styles.mobile__column}>
                    <h2>Our Mission</h2>
                    <div className={styles.mobile__content__wrap}>
                    <p>BlockStop is not your average Web3 company. While we certainly work with teams to market and develop their NFT projects, our real mission is to <span style={stylesInner.bold}>accelerate the maturity of the ecosystem</span> <br/></p>
                    <p>We accomplish this by using extensive IRL connections to bring in world class companies, brands, and public figures onto the blockchain. Focusing heavily on uitility, BlockStop works with their clients to deliver benefits above and beyond the current meta, pushing the entire space forward and demanding a higher standard</p>
                    <img src={MissionImg} />
                    </div>
                </div>
                }
        </div>
      
    </div>
  )
}

export default Mission
