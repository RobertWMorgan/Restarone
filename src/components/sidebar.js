import Badge from 'react-bootstrap/Badge'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return(
    <aside id="sidebar">
      <div id='profile'>
        
      </div>
      <button>
        <a><Badge bg='info' text='primary'>1</Badge>Dashboard</a>
      </button>
    </aside>
  )
}

export default Sidebar