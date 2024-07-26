import React, { useState } from 'react';
import './IMCForm.module.css';

function IMCForm() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setIMC(imcCalculado);
    setClassificacao(classificarIMC(imcCalculado));
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I';
    if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II';
    return 'Obesidade grau III';
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <div className="form-group">
        <label htmlFor="altura">Altura (cm):</label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="peso">Peso (kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && (
        <div className="resultado">
          <h2>Seu IMC é: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default IMCForm;