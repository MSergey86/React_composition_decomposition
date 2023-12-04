import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem'
import Link from '../Link/Link'


function LinkedListItem(props) {
  return (
    <ListItem className='' {...props} style={props.style}>
      <Link href={props.href}>{props.children}</Link>
    </ListItem>
  )
}

export default LinkedListItem

LinkedListItem.propTypes = {
  style: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
}