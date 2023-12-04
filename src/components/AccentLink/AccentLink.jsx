import PropTypes from 'prop-types'
import Link from '../Link/Link'

function AccentLink(props) {
  return (
    <Link className={`accent-link-${props.size} ${props.faded && 'faded'}`} href={props.href}>
      {props.children}
    </Link>
  )
}

AccentLink.defaultProps = {
  size: 'normal',
  faded: false,
}

AccentLink.propTypes = {

  size: PropTypes.oneOf(['normal', 'large', 'small']),
  href: PropTypes.string,
  faded: PropTypes.bool,
  children: PropTypes.node,
}

export default AccentLink