import React, {useState, useEffect} from 'react'
import {Container} from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import DisplayBalance from './components/DisplayBalance'
import './App.css';
import ModalEdit from './components/ModalEdit'


function App() {

  const [entries, setEntries] = useState(initialEntries)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [income, setIncomeTotal] = useState(0)
  const [expense, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if(!isOpen && entryId){
      const index= entries.findIndex(e => e.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntries()
    }    
  }, [isOpen])

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
  },[entries])

  const deleteEntry = (id) => {
      const results = entries.filter(entry => entry.id !== id)
      setEntries(results)
  }
  const editEntry = (id)=>{
    if(id){
      const index = entries.findIndex(e=>e.id === id)
      const entry = entries[index]
      setEntryId(entry.id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }
  }
  const addEntry = ()=>{
    const results = entries.concat({
      id:entries.length+1,
      description, 
      value:value,
      isExpense
    })
    setEntries(results)
    resetEntries()
  }
  const resetEntries = ()=>{
      setDescription('')
      setValue('')
      setIsExpense(false)
  }
  return (
    
    <Container >
    
      <MainHeader title="BUDGET"/>

      <DisplayBalance title="Your Balance: " value={total} size="small"/>

      <DisplayBalances expense={expense} income={income}/>

      <MainHeader type="h3" title="History"/>

      <EntryLines editEntry={editEntry} entries={entries} deleteEntry={deleteEntry} isOpen={isOpen} setIsOpen={setIsOpen}/>

      <MainHeader type="h3" title="Add New Transaction"/>
      
      <NewEntryForm addEntry={addEntry}
        value={value}
        isExpense={isExpense} 
        description={description} 
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />
    <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}
        value={value}
        isExpense={isExpense} 
        description={description} 
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}/>
    </Container>
  
    );
}

export default App;

const initialEntries = [
  {
  id:1,
    description:'Work Income',
  value:1000,
  isExpense:false
},{
  id:2,
  description:'Water Bill',
  value:10,
  isExpense:true
},{
  id:3,
  description:'Freelance Income',
  value:1000,
  isExpense:false
},{
  id:4,
  description:'Shopping',
  value:1000,
  isExpense:true
},

]