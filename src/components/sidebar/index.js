import LinkButtons from './link-buttons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons'

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
      <h1>:copper</h1>
      <FontAwesomeIcon id='ellipsis' size='lg' inverse icon={faEllipsis} />
    </aside>
  )
}

export default Sidebar