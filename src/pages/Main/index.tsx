import React, { useEffect, useState } from 'react';
import './styles.css'

// import { Container } from './styles';

const Main: React.FC = () => {
  const numbers1a9 = [2, 4, 4, 6, 5, 4, 4, 4, 4]

  const numbers10a19 = [3, 4, 4, 5, 8, 6, 9, 9, 7, 8]

  const dezenas = [5, 6, 8, 9, 8, 7,7,7]

  const centenas = [3, 8, 9, 12, 10, 10, 10, 10, 10]

const [soma, setSoma] = useState(0)

function cont ()  {
  let valor1a9 = 0;

  numbers1a9.map(numero => {
    valor1a9 = numero + valor1a9;
  })

  let valor10a19 = 0

  numbers10a19.map(numero => {
    valor10a19 = numero + valor10a19;

  })

  let valorDezenas = 0;
  dezenas.map(dezena => {
    numbers1a9.map(numero => {
      valorDezenas = numero + valorDezenas + dezena;
    })
  })

  let valorCentenas = 0; 
  centenas.map(centena => {
    dezenas.map(dezena => {
      numbers1a9.map(numero => {
        valorDezenas = numero + valorDezenas + dezena + centena;
      })
    })
  })

  setSoma(valor1a9 + valor10a19 + valorDezenas + valorCentenas + 3)
  console.log("total centenas", soma)
}

  return (
    <>
    <div className="content">
      <h1 >Ficou curioso para saber o valor da quantidade de caracteres? Clique no botão a baixo haha! </h1>
      <button className="buttonStyle" type="button" onClick={cont}>Calcular</button>
      <h2><strong> {soma === 0 ? '' : soma}</strong></h2>
    </div>
    </>
  )
}

export default Main;