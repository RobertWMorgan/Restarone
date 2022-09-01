import LinkButtons from './link-buttons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import Profile from '../../images/profile-image.png'

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
    </aside>
  )
}

export default Sidebar