import React from 'react';
import styles from './PartnerComp.module.scss';

function PartnerComp(props) {
  return (
    <div className={styles.page}>
        <div className={styles.content__col}>
            <img src={props.img} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default PartnerComp
