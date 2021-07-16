import React, { useState } from 'react';
import style from 'styled-components';
import './App.css';

const Input = style.input`
  margin-top: 20px;
  width:400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #000;
`;

function App() {

  const [texto, setTexto] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = (e) => {
    setTexto(e.target.value);
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }

  const emailLogin = "manoel.programer@gmail.com";
  const senhaLogin = 123;

  const verificar = () => {
    if( `${texto }` == emailLogin  && `${password}` == senhaLogin){
      alert("Logado");
    } 

    return alert("LOGIN ou SENHA INVALIDOS")
  
  }

  return (
    <>
      <Input placeholder="email" type="email"  onChange={handleEmailInput} />
      <Input placeholder="senha" type="password"  onChange={handlePasswordInput} />
      <button  onClick={verificar}>LOGAR</button>
    
    
    
    </>
  );
}

export default App;
