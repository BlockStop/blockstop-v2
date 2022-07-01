import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './RoadmapItem.module.scss';

function RoadmapItem(props) {
  return (
    <div className={styles.container}>
      <img src={props.image} />
    </div>
  )
}

export default RoadmapItem
