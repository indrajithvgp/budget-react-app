import React from 'react'
import DisplayBalance from '../components/DisplayBalance'
import {Grid, Segment} from 'semantic-ui-react'


const DisplayBalances = ({expense, income}) => {
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <DisplayBalance title="Income" value={income}/>
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance title="Expenses" color="red" value={expense}/>
            </Grid.Column>
          </Grid.Row>
          </Grid>
      </Segment>
    )
}

export default DisplayBalances
