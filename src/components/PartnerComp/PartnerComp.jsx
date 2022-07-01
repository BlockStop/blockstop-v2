import React from 'react';
import TwitterImg from '../../assets/twitter.webp';
import styles from './PartnerComp.module.scss';

function PartnerComp(props) {
  return (
    <div className={styles.page}>
        <div className={styles.content__col}>
            <img src={props.img} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href={props.link}>
                <img src={TwitterImg} />
            </a>
        </div>
    </div>
  )
}

export default PartnerComp
