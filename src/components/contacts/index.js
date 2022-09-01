import ContactData from './contact-data'

const Contactlist = () => {
  console.log(ContactData)
  const contactRow = ContactData.map((contact, index) => {
    return <div key={index} className='contact-row'><span><button id='check-square' className='check-box'></button></span><span>{contact.name}</span> <span>{contact.company}</span> <span>{contact.title}</span> <span>{contact.email}</span> <span>{contact.owner}</span> <span>{contact.street}</span> <span>{contact.dateCreated}</span> <span>{contact.lastContact}</span></div>
  })

  return(
    <main id='contacts'>
      {contactRow}
    </main>
  )
}

export default Contactlist