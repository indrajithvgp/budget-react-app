import React from 'react'
import {Form} from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

const NewEntryForm = () => {
    return (
        <Form unstackable>
        <Form.Group>
          <Form.Input 
          placeholder="Gym Fees" 
          icon='tags' 
          width={12}
          label="Description"
          />
          <Form.Input 
          placeholder="100.00" 
          icon='dollar' 
          width={4}
          iconPosition="left"
          label="Value"
          />
        </Form.Group>
        <ButtonSaveOrCancel/>
        </Form>
    )
}

export default NewEntryForm
