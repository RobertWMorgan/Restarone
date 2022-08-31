import DownArrow from '../images/down-arrow.png'

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
        </div>

      </div>





      <div id='detailed-filter'>

      </div>
    </div>
  )
}

export default Filters