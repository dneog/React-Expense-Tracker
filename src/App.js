

import Expenselist from './Components/Expenselist';

function App() {
  const expenses=[
    {
      id: 'e1',
      LocationOfExpenditure: 'Location of Expenditure',
      title: 'Car Insurence',
      amount: 450,
      date: new Date(2021, 5, 12)
    },
    {
      id: 'e2',
      LocationOfExpenditure: 'Location of Expenditure',
      title: 'New Desk',
      amount: 500,
      date: new Date(2021, 10, 12)
    },
    {
      id: 'e3',
      LocationOfExpenditure: 'Location of Expenditure',
      title: 'Books',
      amount: 700,
      date: new Date(2021, 15, 12)
    },
    
  ];

  return (
  <div>
   <Expenselist title={expenses[0].title}
   LocationOfExpenditure = {expenses[0].LocationOfExpenditure}
    amount= {expenses[0].amount}
     date={expenses[0].date}>      
    </Expenselist>
     
 
   <Expenselist title={expenses[1].title}
   LocationOfExpenditure = {expenses[1].LocationOfExpenditure}
    amount= {expenses[1].amount}
     date={expenses[1].date}>      
    </Expenselist>
     
 
   <Expenselist title={expenses[2].title}
   LocationOfExpenditure = {expenses[2].LocationOfExpenditure}
    amount= {expenses[2].amount}
     date={expenses[2].date}>      
    </Expenselist>
     
 
  
     
  </div>
   
  );
}

export default App;
