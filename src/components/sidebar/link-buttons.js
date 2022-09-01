import linkDetails from "./links"
import Badge from 'react-bootstrap/Badge'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const LinkButtons = () => {
  console.log(linkDetails)
  const buttonMap = linkDetails.map((link, index) => {
    if (link.name === 'Dashboard' || link.name === 'Projects' || link.name === 'Legacy Reports') {
      return (
        <>
          <button className="btn-link break" key={index}><a><Badge className='link-badge' bg='info' text='primary'>{link.badgeNum}</Badge>{link.icon}<p>{link.name}</p></a></button>
        </>
      )
    } else if (link.lock === true) {
      return <button className="btn-link" key={index}><a><Badge className='link-badge' bg='info' text='primary'>{link.badgeNum}</Badge>{link.icon}<p>{link.name}</p> <FontAwesomeIcon className='btn-lock' icon={faLock} /></a></button>
    } else if (link.name === 'People') {
      return <button className="btn-link selected" key={index}><a><Badge className='link-badge' bg='info' text='primary'>{link.badgeNum}</Badge>{link.icon}<p>{link.name}</p></a></button>
    } else return <button className="btn-link" key={index}><a><Badge className='link-badge' bg='info' text='primary'>{link.badgeNum}</Badge>{link.icon}<p>{link.name}</p></a></button>
  })

  return buttonMap
}

export default LinkButtons