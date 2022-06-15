import React from 'react';
import PartnerComp from '../../components/PartnerComp/PartnerComp';
import ChefImg from '../../assets/chef-pizza.webp';
import CreatureImg from '../../assets/creature.webp';
import FyatImg from '../../assets/fyat.webp';
import styles from './Partners.module.scss';

function Partners() {
  return (
    <div className={styles.page}>
        <div className={styles.width__container}>
            <h3>Highlighted Partners</h3>
            <div className={styles.partner__row}>
                <PartnerComp img={CreatureImg} name='Creature Chronicles' description='From the mind and pen of former Marvel Artist Anthony Francisco, Creature Chronicles is a multiverse coming soon to Solana. Backed by Dolphin Entertainment (NASDAQ: DLPN), Creature chronicles is shaping the way entertainment can intersect with Web3' />
                <PartnerComp img={ChefImg} name='CHFTY Pizzas' description='Driven by two culinary experts Tom Colicchio and Spike Mendelsohn, CHFTY is committed to building the largest community of chefs and foodies in Web3. The BlockStop team fully serviced this project and enabled a sellout of 2,777 NFTs' />
                <PartnerComp img={FyatImg} name='Fyat Lux' description='Developed by a world-class team that has worked for MIT, Google, Nintendo, Riot, Activision Blizzard, Netflix, Vuforia, Wayfair, and Disney, Fyat Lux combines groundbreaking technologies with mind-blowing art to launch the next evolution of NFTs for world-building and storytelling' />
            </div>
        </div>
    </div>
  )
}

export default Partners
