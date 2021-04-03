import {Container} from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalances from './components/DisplayBalances'
import EntryLine from './components/EntryLine'
import DisplayBalance from './components/DisplayBalance'
import './App.css';


function App() {
  return (
    
    <Container >
    
      <MainHeader title="BUDGET"/>

      <DisplayBalance title="Your Balance: " value="12500" size="small"/>

      <DisplayBalances/>

      <MainHeader type="h3" title="History"/>

      <EntryLine description="Income" value="100"/>
      
      <EntryLine description="Expense" value="10" isExpense/>

      <MainHeader type="h3" title="Add New Transaction"/>
      
      <NewEntryForm/>

    </Container>
  
    );
}

export default App;
