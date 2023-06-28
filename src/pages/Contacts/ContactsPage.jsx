import { ContactsTitle, Container, MainTitle, Message } from 'components/App.styled'
import { Contacts } from 'components/Contacts/Contacts'
import { FormFilter } from 'components/Filter/Filter'
import { FormContact } from 'components/FormContact/FormContact'
import { Loader } from 'components/Loader/Loader'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from 'redux/operations'
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors'

const ContactsPage = () => {

const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  

  return (
    <div>
     <Container>
      <MainTitle>Phonebook</MainTitle>
       <FormContact />
       {isLoading && !error && <Loader />}
       <ContactsTitle>Contacts</ContactsTitle>
      <FormFilter label="Find contacts by name" />
       {contacts.length === 0 ? (
        <Message>You don't have contacts yet</Message>
      ) : (
        <Contacts />
      )}
    </Container>
</div>
  )
}

export default ContactsPage
