import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './mytestcomponent.module.css'

const Mytestcomponent = (props) => {
  return (
    <div className={styles['container']}>
      <ul className={` ${styles['ul']} ${projectStyles['list']} `}>
        <li className={projectStyles['list-item']}>
          <span>Text</span>
        </li>
        <li className={projectStyles['list-item']}>
          <span>Text</span>
        </li>
        <li className={projectStyles['list-item']}>
          <span>Text</span>
        </li>
      </ul>
      <span>{props.text}</span>
      <div className={styles['container1']}></div>
      <div className={styles['container2']}>
        <video
          src={props.video_src}
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          className={styles['video']}
        ></video>
      </div>
    </div>
  )
}

Mytestcomponent.defaultProps = {
  text: 'Kur',
  video_src: '',
}

Mytestcomponent.propTypes = {
  text: PropTypes.string,
  video_src: PropTypes.string,
}

export default Mytestcomponent
