import React, {useState, useEffect} from 'react'
import {Container} from 'semantic-ui-react'
import './App.css';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import DisplayBalance from './components/DisplayBalance'
import {useSelector} from 'react-redux'



function App() {

  const entries = useSelector(state => state.entries)
  const [income, setIncomeTotal] = useState(0)
  const [expense, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    let totalIncome = 0
    let totalExpenses = 0
    entries.map(e=>{
        if(e.isExpense){
          return (totalExpenses += Number(e.value))
        }else{
          return (totalIncome+= Number(e.value))
        }
    })
      setTotal(totalIncome-totalExpenses)
      setExpenseTotal(totalExpenses)
      setIncomeTotal(totalIncome)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[entries])
  
    
  return (
    
    <Container >
    
      <MainHeader title="BUDGET"/>

      <DisplayBalance title="Your Balance: " value={total} size="small"/>

      <DisplayBalances expense={expense} income={income}/>

      <MainHeader type="h3" title="History"/>

      <EntryLines entries={entries}/>

      <MainHeader type="h3" title="Add New Transaction"/>
      
      <NewEntryForm />

      

    </Container>
  
    );
}

export default App;

