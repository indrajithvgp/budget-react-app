import React from 'react'
import {Button} from 'semantic-ui-react'
import {addEntry} from '../redux/actions/entriesActions'
import {v4 as uuidv4} from 'uuid'
import {useDispatch} from 'react-redux'

const ButtonSaveOrCancel = ({description, value, isExpense, resetEntries}) => {

  const entry = {
    id:uuidv4(),
    description, 
    value,
    isExpense
  }
  const addEntries = ()=>{
    dispatch(addEntry(entry))
    resetEntries()
  }
    const dispatch = useDispatch()
    return (
        <Button.Group style={{marginTop:20}}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary onClick={addEntries}>OK</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel
