import React from 'react';
import StratIcon from '../../assets/strat.png';
import CornerImg from '../../assets/corner.webp';
import styles from './StrategyComp.module.scss';
import { useMediaQuery } from "react-responsive";

function StrategyComp() {
    const isMobile = useMediaQuery({ query: "(max-width: 850px)" });

  return (
    <div className={styles.page}>
        <div className={styles.icon}>
        </div>

      {!isMobile && 
      <div className={styles.content__row}>
            <img src={CornerImg} />

            <div className={styles.divider}>
            <div className={styles.content_column}>
                <h2>Strategy</h2>
                <p>Every NFT project has its own story to tell. In such a competitive space, it is essential to stand out and be unique. From roadmap creation, to artistic and technical direction, BlockStop is here to create and guide your project vision</p>
            </div>
            </div>
      </div> 
      }

      {isMobile && 
        <div className={styles.mobile__column}> 
            <img src={CornerImg} />
            <div className={styles.mobile__content__column}> 
            <h2>Strategy</h2>
            <p>Every NFT project has its own story to tell. In such a competitive space, it is essential to stand out and be unique. From roadmap creation, to artistic and technical direction, BlockStop is here to create and guide your project vision</p>
            </div>
        </div>
      }
    </div>
  )
}

export default StrategyComp
