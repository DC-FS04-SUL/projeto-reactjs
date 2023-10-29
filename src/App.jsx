import { useState } from "react";
import baralhoCartas from "./assets/baralho-cartas.png";
// resultados
import cardUm from "./assets/carts/1.png";
import cardDois from "./assets/carts/2.png";
import cardTreis from "./assets/carts/3.png";

const App = () => {
  
  const [virarCarta, setVirarCarta] = useState("verso");
  const [imgCard, setImgCard] = useState(baralhoCartas);
  const [cartas] = useState([
    cardUm,
    cardDois,
    cardTreis
  ])

  const sortearCarta = () => {
   
    if (virarCarta === "verso") {
      // trocar imagem da carta
      setVirarCarta("frente");
      // criando o random das cartas
      const index_resultado = Math.floor(Math.random()*(cartas.length));
      
      setImgCard(cartas[index_resultado]);
    }else {

      setVirarCarta("verso");
      setImgCard(baralhoCartas);
    }
  }

  return (
    <>
      <h1>Virar a Carta - {virarCarta}</h1>
      <div>
        <img
          src={imgCard}
          onClick={sortearCarta}
        />
      </div>
    </>
  );
};

export default App;
