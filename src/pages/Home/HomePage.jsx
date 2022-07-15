import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ParticlesComponent from "../../components/Particles/Particles";
import ParticlesComponentMobile from "../../components/Particles/ParticlesMobile";
import BlockStopLogo from "../../assets/bstop-logo.webp";
import styles from "./HomePage.module.scss";
import { useMediaQuery } from "react-responsive";
import Loader from 'react-loaders'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HomePage = (props) => {
    const isMobile = useMediaQuery({ query: "(max-width: 850px)" });

    const stylesInner = {
        primary: {color: '#00D4AB'},
    };

    return(
        <>
    <div className={styles.page}>
        <section className={styles.page__filter}>
            <Navbar />
            {!isMobile && <ParticlesComponent id="tsparticles" />}
            {isMobile && <ParticlesComponentMobile id="tsparticles" />}

            <div className={styles.hero__row}>
                <img src={BlockStopLogo} />
                <div className={styles.hero__column}>
                    <h1>Block<span style={stylesInner.primary}>Stop</span></h1>
                    <h3>Web3 Strategy <span style={stylesInner.primary}>|</span> Marketing <span style={stylesInner.primary}>|</span> Development</h3>
                </div>
            </div>
        </section>
        <div className={styles.bottom}>
            <div />
        </div>
    </div> 
    </>
    );
}

export default HomePage;