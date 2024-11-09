import styles from './Avatar.module.css'
import ProtoTypes from 'prop-types'

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}

Avatar.propTypes = {
  hasBorder: ProtoTypes.bool,
  src: ProtoTypes.string.isRequired
}