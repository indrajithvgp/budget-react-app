import React, {useState} from 'react'
import {Form} from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm'
import ModalEdit from './ModalEdit'
import {useSelector} from 'react-redux'

const NewEntryForm = () => {
    const isOpen = useSelector(state => state.modal.value)
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(false)
    
    const resetEntries=()=>{
        setDescription('')
        setValue('')
        setIsExpense(false)
      }

    return (
        <>
        <Form unstackable>
        <EntryForm resetEntries={resetEntries} value={value} 
        isExpense={isExpense} 
        description={description} 
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}/>
        <ButtonSaveOrCancel resetEntries={resetEntries} isExpense={isExpense} description={description} value={value}/>
        </Form>
        {isOpen && <ModalEdit 
            isOpen={isOpen}
            value={value} 
            isExpense={isExpense} 
            description={description} 
            setValue={setValue}
            setDescription={setDescription}
            setIsExpense={setIsExpense}/>}
        </>
    )
}

export default NewEntryForm
