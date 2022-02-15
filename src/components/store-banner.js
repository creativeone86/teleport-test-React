import React from 'react'

import PropTypes from 'prop-types'

import styles from './store-banner.module.css'

const StoreBanner = (props) => {
  return (
    <div
      className={` ${styles['StoreBanner']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className={styles['image']}
      />
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image1']}
      />
    </div>
  )
}

StoreBanner.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/app-store-badge-200h.png',
  image_alt1: 'image',
  image_src1: '/playground_assets/google-play-badge-200h.png',
  image_alt: 'image',
}

StoreBanner.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default StoreBanner
