import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownShortWide, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons'

const FilterButton = ({ filterList }) => {
  const filterMap = filterList.map(filter => {
    return filter === 'First Name' ?
      <button className='filter-button selected'>{filterList[0]}<FontAwesomeIcon icon={faArrowDownShortWide} /></button>
      :
      <button className='filter-button'>{filter}<FontAwesomeIcon icon={faArrowUpWideShort} /></button>
  })

  return filterMap
}

export default FilterButton