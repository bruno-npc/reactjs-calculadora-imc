import {useState} from "react"
import "./App.css"

export default function App() {

  const [peso, setPeso] = useState ('');
  const [altura, setAltura] = useState ('');
  const [mensagem, setMensagem] = useState('');


  function calcularIMC (){
    const alt = altura/100;
    const imc = peso / (alt * alt);

    if(imc < 18.5){
      setMensagem("Você está abaixo do peso. Seu IMC é: " + imc.toFixed(2))
    }
    else if(imc >= 18.5 && imc <= 24.9){
      setMensagem("Seu peso está normal. Seu IMC é: " + imc.toFixed(2))
    }
    else if(imc >= 24.9 && imc <= 30){
      setMensagem("Você está com sobrepeso. Seu IMC é: " + imc.toFixed(2))
    }
    else if(imc>30){
      setMensagem("Você está com obesidade. Seu IMC é: " + imc.toFixed(2))
    }
  }


  return(

    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC.</span>

      <div className="area-input">
        <input 
        type="text"
        placeholder="Peso em (kg), ex: 90"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        />
        <input 
        type="text"
        placeholder="Altura em (cm), ex: 180"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
    </div>
    
  )
}