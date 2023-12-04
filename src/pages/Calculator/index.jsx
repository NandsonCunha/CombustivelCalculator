import React, { useState } from 'react';
import combustivelLogo from "../../../public/combustivel.png";
import styles from './Calculator.module.css';

const Calculator = () => {
  const [ethanolPrice, setEthanolPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!ethanolPrice || !gasolinePrice) {
      alert('Preencha ambos os valores, por favor');
      return;
    }
    const calculation = parseFloat(ethanolPrice.replace(',', '.')) / parseFloat(gasolinePrice.replace(',', '.'));

    setResult(calculation < 0.7 ? alert(`Calculo será igual a ${calculation.toFixed(2)}. Portanto, compensa mais abastecer com Etanol.`) : alert(`Calculo será igual a ${calculation.toFixed(2)}. Portanto, compensa mais abastecer com Gasolina.`));
  };

  return (
    <div className={styles.calculatorContainer}>
      <img className={styles.image} src={combustivelLogo} alt="Imagem"/>
      <h2>Você sabe com qual combustível compensa mais abastecer seu carro?</h2>
      <h2>Utilize a calculadora abaixo:</h2>
      <div className={styles.inputsContainer}>
        <div className={styles.labelInput}>
          <label htmlFor="ethanolPrice">Preço - litro Etanol (R$)</label>
          <input
            type="text"
            id="ethanolPrice"
            value={ethanolPrice}
            placeholder='0'
            onChange={(e) => setEthanolPrice(e.target.value)}
          />
        </div>
        <div div className={styles.labelInput}>
          <label htmlFor="gasolinePrice">Preço - litro Gasolina (R$)</label>
          <input
            type="text"
            id="gasolinePrice"
            value={gasolinePrice}
            placeholder='0'
            onChange={(e) => setGasolinePrice(e.target.value)}
          />
        </div>
        <button onClick={calculate}>Calcular</button>
      </div>
    </div>
  );
};

export default Calculator;
