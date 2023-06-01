import { useState } from 'react';
import Header from './components/Header/Header'
import AllUsers from './pages/AllUsers/AllUsers'


const App = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="App">
        <Header setName={setName} name={name} setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} password={password} setPassword={setPassword} />
        <AllUsers name={name} />
    </div>
  );
}

export default App;
