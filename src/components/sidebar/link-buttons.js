import linkDetails from "./links"
import Badge from 'react-bootstrap/Badge'


const LinkButtons = () => {
  console.log(linkDetails)
  const buttonMap = linkDetails.map((link, index) => {
    return <a><Badge bg='info' text='primary'>{link.badgeNum}</Badge>{link.icon}{link.name}</a>
  })

  return buttonMap

}

export default LinkButtons