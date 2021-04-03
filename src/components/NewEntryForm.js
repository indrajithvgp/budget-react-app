import React from 'react'
import {Form} from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm'

const NewEntryForm = ({addEntry, value, description, setDescription, setValue, isExpense, setIsExpense}) => {
    

    return (
        <Form unstackable>
        <EntryForm value={value} 
        isExpense={isExpense} 
        description={description} 
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}/>
        <ButtonSaveOrCancel addEntry={addEntry} />
        </Form>
    )
}

export default NewEntryForm
