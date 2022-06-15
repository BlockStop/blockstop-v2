import React from 'react';
import PizzaImg from '../../assets/chef-pizza.webp';
import CreatureImg from '../../assets/creature.webp';
import FyatImg from '../../assets/fyat.webp';
import styles from './About.module.scss';
import TypeWriter from 'react-typewriter';

function About() {
    const stylesInner = {
        primary: {color: '#00D4AB'},
    };

  return (
    <div className={styles.page}>
        <div className={styles.content__row}>
            <div className={styles.divider}>
            <div className={styles.image__row}>
                <img src={PizzaImg} />
                <div className={styles.image__column}>
                    <img src={CreatureImg} />
                    <img src={FyatImg} />
                </div>
            </div>
            </div>
            <div className={styles.divider}>
                <TypeWriter typing={1} initDelay={5000}>
                    <h2>A Team Designed to Deliver NFT Projects the <span style={stylesInner.primary}>Right</span> Way<span style={stylesInner.primary}>.</span></h2>
                </TypeWriter>
            </div>
        </div>
    </div>
  )
}

export default About;
