import Badge from 'react-bootstrap/Badge'

import Notification from '../images/notif_bell.svg'
import Plus from '../images/plus.svg'
import Profile from '../images/profile.svg'
import Question from '../images/question-mark.svg'

const Navbar = () => {
  return(
    <nav>
      
      <div id='navh1'>
        <h1>People</h1> 
      </div>
      <input type="text" name="emailAddress" placeholder="  Search by name, email, domain or phone number" value="" />
      <div id='nav-icons'>
        <button className='nav-icon'><img src={Plus} alt='Add New' /></button>
        <button className='nav-icon'><img src={Notification} alt='Notification Bell' /><Badge id='notif-num' bg="danger">47</Badge></button>
        <button className='nav-icon'><img id='profile' src={Profile} alt='Profile' /></button>
        <button  className='nav-icon'><img id='question' src={Question} alt='Question and FAQ' /></button>
      </div>
    </nav>
  )
}

export default Navbar