import DownArrow from '../images/down-arrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faGear, faUser, faMagnifyingGlass, faArrowDownShortWide, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons'

const Filters = () => {
  return (
    <div id="filters">
      <div id='top-filter'>
        <div id='filter-left'>
          <form id='people-dropdown'>
            <select id="People" name="People">
              <option value="All">All People (156663)</option>
            </select>
          </form>
          <button id='btn-add'>ADD NEW</button>
          <div id='btn-add-dropdown'>
            <button class='btn'>
            <img id='add-dropdown-arrow' src={DownArrow} alt='dropdown arrow' />
            </button>
          </div>
        </div>
        <div id='filter-right'>
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          <button><FontAwesomeIcon icon={faUser} /></button>
          <button><FontAwesomeIcon icon={faGear} /></button>
          <button><FontAwesomeIcon icon={faFilter} />Filters</button>
        </div>
      </div>
      <div id='detailed-filter'>
      <button className='check-box'></button>
      <button className='filter-button selected'>First Name <FontAwesomeIcon icon={faArrowDownShortWide} /></button>
      <button className='filter-button'>Company <FontAwesomeIcon icon={faArrowUpWideShort} /></button>
      <button className='filter-button'>Title <FontAwesomeIcon icon={faArrowUpWideShort} /></button>
      <button className='filter-button'>Email <FontAwesomeIcon icon={faArrowUpWideShort} /></button>
      <button className='filter-button'>Owned By <FontAwesomeIcon icon={faArrowUpWideShort} /></button>
      <button className='filter-button'>Street </button>
      <button className='filter-button'>Created <FontAwesomeIcon icon={faArrowUpWideShort} /></button>
      <button className='filter-button'>Last Contacted <FontAwesomeIcon icon={faArrowUpWideShort} /></button>
      </div>
    </div>
  )
}

export default Filters