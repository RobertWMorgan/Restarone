import ContactData from './contact-data'
import FilterButton from '../filters/filter-buttons'
import Star from '../../images/star.png'


const Contactlist = () => {
  const filterList = ['First Name', 'Company', 'Title', 'Email', 'Owned By', 'Street', 'Created', 'Last Contacted']  
  console.log(ContactData)



return(
  <main>
    <table>
      <tr id='header-row'>
        <th><button className='check-box'></button></th>
        <FilterButton filterList={filterList} />
      </tr>
    </table>
  </main>
)





}

export default Contactlist