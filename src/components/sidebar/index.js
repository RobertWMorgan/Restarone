import LinkButtons from './link-buttons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons'

import Profile from '../../images/profile-image.png'
import Logo from '../../images/copper-logo.svg'

const Sidebar = () => {

  return (
    <aside id="sidebar">
      <div id='profile'>
        <div id='profile-image'>
          <img src={Profile} alt='Profile' />
        </div>
        <div>
          <p>Kelly Cheng</p>
          <p id='subtext'>Copper</p>
        </div>
        <FontAwesomeIcon id='X' size='2x' inverse icon={faXmark} />
      </div>
      <LinkButtons />
      <img src={Logo} id='copper-logo' alt='Copper CRM Logo' />
      <FontAwesomeIcon id='ellipsis' size='lg' inverse icon={faEllipsis} />
    </aside>
  )
}

export default Sidebar