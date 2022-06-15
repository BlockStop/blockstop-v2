import React from 'react';
import styles from './ServiceComp.module.scss';
import { useMediaQuery } from "react-responsive";

function ServiceComp(props) {
    const isMobile = useMediaQuery({ query: "(max-width: 850px)" });

  return (
    <div className={`${styles.page} ${props.isDark && styles.dark}`}>
        <div className={styles.content_column}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default ServiceComp
