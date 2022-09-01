import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleDot, faUser, faBuilding, faAnglesRight, faBriefcase, faSquareCheck, faCirclePlay, faEnvelope, faChartPie, faSquarePollVertical, faGear } from '@fortawesome/free-solid-svg-icons'


const linkDetails = [
  {
    name: 'Dashboard',
    icon: <FontAwesomeIcon icon={faHouse} />,
    badgeNum: 1,
    lock: false
  }, 
  {
    name: 'Leads',
    icon: <FontAwesomeIcon icon={faCircleDot} />,
    badgeNum: 2,
    lock: true
  },
  {
    name: 'People',
    icon: <FontAwesomeIcon icon={faUser} />,
    badgeNum: 3,
    lock: false
  },
  {
    name: 'Companies',
    icon: <FontAwesomeIcon icon={faBuilding} />,
    badgeNum: 4,
    lock: false
  },
  {
    name: 'Pipelines',
    icon: <FontAwesomeIcon icon={faAnglesRight} />,
    badgeNum: 5,
    lock: false
  },
  {
    name: 'Projects',
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    badgeNum: 6,
    lock: false
  },
  {
    name: 'Tasks',
    icon: <FontAwesomeIcon icon={faSquareCheck} />,
    badgeNum: 7,
    lock: false
  },
  {
    name: 'Marketing Tools',
    icon: <FontAwesomeIcon icon={faCirclePlay} />,
    badgeNum: false,
    lock: false
  },
  {
    name: 'My Tracked Emails',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    badgeNum: 8,
    lock: false
  },
  {
    name: 'Reports',
    icon: <FontAwesomeIcon icon={faChartPie} />,
    badgeNum: false,
    lock: false
  },
  {
    name: 'Legacy Reports',
    icon: <FontAwesomeIcon icon={faSquarePollVertical} />,
    badgeNum: 9,
    lock: false
  },
  {
    name: 'Settings',
    icon: <FontAwesomeIcon icon={faGear} />,
    badgeNum: '0',
    lock: false
  },

]

export default linkDetails