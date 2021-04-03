import React from 'react'
import {Form, Segment, Checkbox} from 'semantic-ui-react'

const EntryForm = ({value, description, setDescription, setValue, isExpense, setIsExpense}) => {
    return (
        <>
        <Form.Group>
          <Form.Input 
          placeholder="Gym Fees" 
          icon='tags' 
          width={12}
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          label="Description"
          />
          <Form.Input 
          placeholder="100.00" 
          icon='dollar' 
          width={4}
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          iconPosition="left"
          label="Value"
          />
        </Form.Group>
        <Segment compact>
        <Checkbox label="Is Expense" toggle checked={isExpense} onChange={()=>setIsExpense(!isExpense)}/>
        </Segment>
        </>
    )
}

export default EntryForm
