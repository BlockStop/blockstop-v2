import React from 'react';
import RoadmapItem from '../RoadmapItem/RoadmapItem';
import { RoadmapContent } from '../../text/RoadmapContent';
import styles from './FullRoadmapItem.module.scss';

function FullRoadmapItem(props) {

  return (
    <div className={styles.wrapper}>
        <button onClick={() => {props.setButtonPopup(true); props.setNumber(props.num)}}>
            <RoadmapItem image={props.teamImage}/>
        </button>
    </div>
  )
}

export default FullRoadmapItem;
