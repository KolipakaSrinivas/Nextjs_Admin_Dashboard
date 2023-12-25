import React from 'react'
import styles from './Card.module.css'
import {MdSupervisedUserCircle } from 'react-icons/md'



function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users </span>
        <span className={styles.number} >10.273</span>
        <span className={styles.details} >
          <span className={styles.positive}>12%</span>
        </span>
      </div>
    </div>
  )
}

export default Card