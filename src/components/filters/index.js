import FilterButton from './filter-button'

import DownArrow from '../../images/down-arrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faGear, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Filters = () => {
  const filterList = ['First Name', 'Company', 'Title', 'Email', 'Owned By', 'Street', 'Created', 'Last Contacted']

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
        <FilterButton filterList={filterList} />
      </div>
    </div>
  )
}

export default Filters