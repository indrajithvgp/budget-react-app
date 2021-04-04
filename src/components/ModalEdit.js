import React, {useState} from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'
import {closeModal} from '../redux/actions/modalActions'
import {updateEntry} from '../redux/actions/entriesActions'
import {useSelector, useDispatch} from 'react-redux'


const ModalEdit = ({isOpen}) => {
    const dispatch = useDispatch()
    const index = useSelector(state => state.modal.id)
    const entries = useSelector(state => state.entries)
    const entry = entries.find(e => e.id === index)

    const [description, setDescription] = useState(entry.description)
    const [value, setValue] = useState(entry.value)
    const [isExpense, setIsExpense] = useState(entry.isExpense)

    const resetEntries =()=>{
        setDescription('')
        setValue('')
        setIsExpense(false)
    }
    const updateEntries = ()=>{
        const newEntry = {
            id:index, description, value, isExpense
        }
        dispatch(updateEntry(index, newEntry))
        dispatch(closeModal())
        resetEntries()
      }

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
                <Button onClick={()=>dispatch(closeModal())}>Close</Button>
                <Button onClick={updateEntries} positive>OK</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit
