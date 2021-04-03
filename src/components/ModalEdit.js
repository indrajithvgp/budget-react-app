import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'


const ModalEdit = ({isOpen, setIsOpen, description, setDescription, value, setValue, isExpense, setIsExpense}) => {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm value={value} 
                isExpense={isExpense} 
                description={description} 
                setValue={setValue}
                setDescription={setDescription}
                setIsExpense={setIsExpense}/>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={()=>setIsOpen(false)}>Close</Button>
                <Button onClick={()=>setIsOpen(false)} positive>OK</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit
