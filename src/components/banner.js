import React from 'react'

import PropTypes from 'prop-types'

import StoreBanner from './store-banner'
import projectStyles from '../style.module.css'
import styles from './banner.module.css'

const Banner = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <h2 className={` ${projectStyles['headline2']} ${styles['text']} `}>
          <span className={styles['text1']}>
            Manage your projects from your mobile
          </span>
        </h2>
        <span className={` ${styles['text2']} ${projectStyles['lead1']} `}>
          <span className={styles['text3']}>
            Download the app to manage your projects, keep track of the progress
            and complete tasks without procastinating. Stay on track and
            complete on time!
          </span>
        </span>
        <span className={` ${styles['text4']} ${projectStyles['subtitle2']} `}>
          <span className={styles['text5']}>Get the App</span>
        </span>
        <StoreBanner rootClassName="rootClassName"></StoreBanner>
      </div>
      <div className={styles['container2']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          image_src="/playground_assets/iPhoneX-300w.png"
          className={styles['image']}
        />
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          image_src="/playground_assets/iPhoneX-300w.png"
          className={styles['image1']}
        />
      </div>
    </div>
  )
}

Banner.defaultProps = {
  image_src: '/playground_assets/iPhoneX-300w.png',
  image_alt: 'image',
  image_src1: '/playground_assets/iPhoneX-300w.png',
  rootClassName: '',
  image_alt1: 'image',
}

Banner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Banner
