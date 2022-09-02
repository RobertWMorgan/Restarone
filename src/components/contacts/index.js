import ContactData from '../../contact-data'
import FilterButton from '../filters/filter-buttons'
import Star from '../../images/star.png'
import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'

const Contactlist = () => {
  const filterList = ['First Name', 'Company', 'Title', 'Email', 'Owned By', 'Street', 'Created', 'Last Contacted']

  const [show,setShow] = useState(false)
  const [rowSelected, setRowSelected] = useState(false)
  const [rowInfo, setRowInfo] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = (e) => {
    setShow(true)
    setRowSelected(e)
    const data = ContactData.filter(contact => contact.name === e)
    setRowInfo(data)
  } 

  const tableData = ContactData.map((contact, index) => {
    return (
      <tr key={index} className='table-data' onClick={() => handleShow(contact.name)}>
        <td className='table-profile-info'>
          <button className='check-box'></button>
          <img className='star' src={Star} alt={`Favorite's star`} />
          <div className='profileini'>{contact.initials} </div>
        </td>
        <td className='data-name'>
          {contact.name}
        </td>
        <td className='data-blue'>
          {contact.company}
        </td>
        <td className='data-grey'>
          {contact.title}
        </td>
        <td className='data-blue'>
          {contact.email}
        </td>
        <td className='data-blue'>
          {contact.owner}
        </td>
        <td className='data-grey'>
          {contact.street}
        </td>
        <td className='data-grey'>
          {contact.dateCreated}
        </td>
        <td className='data-grey'>
          {contact.lastContact}
        </td>
      </tr>
    )
  })

  return (
    <main>
      <table id='contact-table'>
        <tr id='header-row'>
          <th><button className='check-box'></button></th>
          <FilterButton filterList={filterList} />
        </tr>
        {tableData}
      </table>
      <>
      
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
    </main>
    
  )





}

export default Contactlist