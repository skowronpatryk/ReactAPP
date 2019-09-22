import React, { useState } from 'react';
import Header from './components/Header'
import HeaderItem from './components/HeaderItem'
import './App.css';

const initialState = [
  {id: 1, title: 'Może znajdź mieszkanie?', icon: 'IoIosTv', buttonText: 'Przeszukaj'},
  {id: 2, title: 'Może przeliczysz budżet?', icon: 'IoIosWallet', buttonText: 'Sprawdź budżet'},
  {id: 3, title: 'Może liste TODO?', icon: 'IoIosToday', buttonText: 'Stwórz listę'},
  {id: 4, title: 'Może zamówisz pizze?', icon: 'IoMdPizza', buttonText: 'Zamów pizze'},
]

function App() {

  const [item, setItem] = useState(initialState);

  return (
   <div className="main-app">
     <Header />
     <HeaderItem state={item}/>
    </div>
    )

}

export default App;
