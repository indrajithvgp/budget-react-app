import React from 'react'
import { Grid, Segment, Icon } from 'semantic-ui-react'
import {useDispatch} from 'react-redux'
import {removeEntry} from '../redux/actions/entriesActions'
import {openModal} from '../redux/actions/modalActions'

const EntryLine = ({id, description, value, isExpense})=> {

    const dispatch = useDispatch()
    return (
      <>
        <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              ${value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={()=>dispatch(openModal(id))}/>
              <Icon name="trash" bordered onClick={()=>dispatch(removeEntry(id))}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      
      </>
    )
}

export default EntryLine
