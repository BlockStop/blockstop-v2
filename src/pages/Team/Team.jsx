import React from 'react'
import ThomasPic from '../../assets/thomasclone.webp';
import JaredPic from '../../assets/dape.webp';
import SeanPic from '../../assets/seanbird.webp';
import NickPic from '../../assets/potoclone.webp';
import styles from './Team.module.scss';

function Team() {
  return (
    <div className={styles.page}>
        <div className={styles.width__container}>
            <h3>The Team</h3>
            <div className={styles.team__row}>
                <div className={styles.individual}>
                    <img src={ThomasPic} />
                    <h4>Thomas Cadle</h4>
                </div>

                <div className={styles.individual}>
                <img src={JaredPic} />
                <h4>Jared Nozick</h4>
                </div>

            </div>
            <div className={styles.team__row}>
            <div className={styles.individual}>
                <img src={SeanPic} />
                <h4>Sean Funke</h4>
            </div>
            <div className={styles.individual}>
                <img src={NickPic} />
                <h4>Nick Poto</h4>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Team
