import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLocationCrosshairs, faUser, faBuilding, faAnglesRight, faBriefcase, faSquareCheck, faCirclePlay, faEnvelope, faChartPie, faSquarePollVertical, faGear } from '@fortawesome/free-solid-svg-icons'


const linkDetails = [
  {
    name: 'Dashboard',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faHouse} />,
    badgeNum: 1,
    lock: false
  },
  {
    name: 'Leads',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faLocationCrosshairs} />,
    badgeNum: 2,
    lock: true
  },
  {
    name: 'People',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faUser} />,
    badgeNum: 3,
    lock: false
  },
  {
    name: 'Companies',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faBuilding} />,
    badgeNum: 4,
    lock: false
  },
  {
    name: 'Pipelines',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faAnglesRight} />,
    badgeNum: 5,
    lock: false
  },
  {
    name: 'Projects',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faBriefcase} />,
    badgeNum: 6,
    lock: false
  },
  {
    name: 'Tasks',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faSquareCheck} />,
    badgeNum: 7,
    lock: false
  },
  {
    name: 'Marketing Tools',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faCirclePlay} />,
    badgeNum: false,
    lock: false
  },
  {
    name: 'My Tracked Emails',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faEnvelope} />,
    badgeNum: 8,
    lock: false
  },
  {
    name: 'Reports',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faChartPie} />,
    badgeNum: false,
    lock: false
  },
  {
    name: 'Legacy Reports',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faSquarePollVertical} />,
    badgeNum: 9,
    lock: false
  },
  {
    name: 'Settings',
    icon: <FontAwesomeIcon size='lg' className='link-icon' icon={faGear} />,
    badgeNum: '0',
    lock: false
  },

]

export default linkDetails