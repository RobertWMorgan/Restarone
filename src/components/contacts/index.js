import ContactData from '../../contact-data'
import FilterButton from '../filters/filter-buttons'
import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'

import Star from '../../images/star.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowUpRightFromSquare, faEllipsisVertical, faCopy, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

const Contactlist = () => {
  const filterList = ['First Name', 'Company', 'Title', 'Email', 'Owned By', 'Street', 'Created', 'Last Contacted']

  const [show, setShow] = useState(false)
  const [rowSelected, setRowSelected] = useState(false)
  const [rowInfo, setRowInfo] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = (e) => {
    setShow(true)
    setRowSelected(e)
    const data = ContactData.filter(contact => contact.name === e)
    setRowInfo(data)
    console.log(data)
  }

  const tableData = ContactData.map((contact, index) => {
    if (rowInfo[0] === contact){
      return(
        <tr key={index} className='table-data table-selected' onClick={() => handleShow(contact.name)}>
        <td className='table-profile-info'>
          <button className='table-check-box-selected'></button>
          <img className='star-selected' src={Star} alt={`Favorite's star`} />
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
    } else return (
      <tr key={index} className='table-data' onClick={() => handleShow(contact.name)}>
        <td className='table-profile-info'>
          <button className='table-check-box'></button>
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
        {rowSelected &&
          <Offcanvas placement="end" show={show} onHide={handleClose}>
            <Offcanvas.Header id='canvas-header' closeButton>
              <Offcanvas.Title id='canvas-title'>
                <div id='canvas-buttons'>
                  <FontAwesomeIcon icon={faArrowRight} />
                  <div id='canvas-header-right'>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    <img id='canvas-star' src={Star} alt={`Favorite's star`} />
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>

                </div>
                <div id='canvas-header-info'>
                  <div id='canvas-initials'>{rowInfo[0].initials}</div>
                  <div>
                    <h1>{rowInfo[0].name}</h1>
                    <p>{rowInfo[0].owner}'s Company</p>
                  </div>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div id='details'>
                <button id='selecteddetailbutton' className='detailbutton'>Details</button>
                <button className='detailbutton'>Activity</button>
                <button className='detailbutton'>Related</button>
              </div>
              <div id='canvas-info'>
                <div className='question' id='namediv'><p>Name <span>*</span></p> <FontAwesomeIcon icon={faCopy} /></div>
                <p className='answer'>{rowInfo[0].name}</p>
                <p className='question'>Company</p>
                <p className='answer answer-blue'>{rowInfo[0].company}</p>
                <p className='question'>Title</p>
                <p className='answer answerpgrey'>Add Title</p>
                <p className='question'>Work Email &#709; </p>
                <p className='answer answer-blue'>{rowInfo[0].email}</p>
                <p className='question'>Work Phone &#709; </p>
                <p className='answer'>{rowInfo[0].phone}</p>
                <p className='question'>Rating</p>
                <select id="rating" name="rating">
                  <option className='canvas option'>- Select Rating -</option>
                </select>
                <p className='question'>Status</p>
                <select id="status" name="status">
                  <option className='canvas option'>- Select Status -</option>
                </select>
                <p className='question'>Recycled Reasons</p>
                <select id="Recycled Reasons" name="Recycled Reasons">
                  <option className='canvas option'>- Select Recycled Reasons -</option>
                </select>
                <p className='question'>Owner </p>
                <p className='answer answer-blue'>{rowInfo[0].owner}</p>
                <p className='question'>AE Assignee</p>
                <select id="AE Assignee" name="AE Assignee">
                  <option className='canvas option'>- Select AE Asignee -</option>
                </select>
                <p className='question'>Account Owner</p>
                <FontAwesomeIcon icon={faSquareCheck} />
                <p className='question'>Company Size</p>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

        }

      </>
    </main>

  )





}

export default Contactlist