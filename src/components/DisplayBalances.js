import React from 'react'
import DisplayBalance from '../components/DisplayBalance'
import {Grid, Segment} from 'semantic-ui-react'


const DisplayBalances = () => {
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <DisplayBalance title="Income" value="1253.45"/>
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance title="Expenses" color="red" value="53.45"/>
            </Grid.Column>
          </Grid.Row>
          </Grid>
      </Segment>
    )
}

export default DisplayBalances
