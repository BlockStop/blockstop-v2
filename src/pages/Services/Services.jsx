import React from 'react';
import StrategyComp from '../../components/StrategyComp/StrategyComp';
import ServiceComp from '../../components/ServiceComp/ServiceComp';
import styles from './Services.module.scss';
import { useMediaQuery } from "react-responsive";

function Services() {
    const isMobile = useMediaQuery({ query: "(max-width: 850px)" });

  return (
    <div>
      <StrategyComp />
      {!isMobile &&
      <div className={styles.content__row}>
      <div className={styles.divider}>
          <ServiceComp title='Marketing' description='Marketing in Web3 is extremely different than typical digital advertising. It requires a detailed understanding of the ecosystem and the niche communities at play. BlockStop prides itself on community building, partnerships, engagement and organic growth'/>
      </div>
      <div className={styles.divider}>
          <ServiceComp isDark title='Development' description='Selling digital assets requires that you properly establish your online presence. BlockStop builds custom websites with Web3 integration and minting capabilities on either the Ethereum or Solana Blockchain'/>
      </div>
      </div> }

      {isMobile &&
      <div className={styles.mobile__content}> 
        <ServiceComp title='Marketing' description='Marketing in Web3 is extremely different than typical digital advertising. It requires a detailed understanding of the ecosystem and the niche communities at play. BlockStop prides itself on community building, partnerships, engagement and organic growth'/>
        <ServiceComp isDark title='Development' description='Selling digital assets requires that you properly establish your online presence. BlockStop builds custom websites with Web3 integration and minting capabilities on either the Ethereum or Solana Blockchain'/>
      </div>
      }
    </div>
  )
}

export default Services
