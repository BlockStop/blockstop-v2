import React from 'react'
import Logo from '../Logo/Logo';
import LogoImg from '../../assets/logo-small.webp';
import Fade from 'react-reveal/Fade';
import TwitterImg from '../../assets/twitter-48.png';
import styles from './Popup.module.scss';

function Popup(props) {
  return (props.trigger)?(
    <div className={styles.popup}>
        <div className={styles.innerpop}> 
            <div className={styles.header}>
                <div className={styles.imgwrap}>
                    <img src={LogoImg} />
                </div>
                <button className={styles.closebtn} onClick={() => props.setTrigger(false)} style={{ fontSize: '24px', color:'#ffffff' }}> X </button>
            </div>


            <div className={styles.img__container}>
                <img src={props.popupImg} loading="lazy"/>
            </div>

            <div className={styles.text__container}>
                <h4>{props.name}</h4>
                <h5>{props.title}</h5>
                <p>{props.bio}</p>

                <a href={props.twitter} >
                    <img src={TwitterImg} />
                </a>
            </div>


            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup;
