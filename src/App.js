import './App.css';
import { useState } from 'react'


function App() {
    const wordList = ['Simppu', 'Samppu', 'Limppu', 'Lamppu', 'Kamppu', 'Kimppu', 'Tumppu', 'Timppu', 'Himppu', 'Hamppu', 'Humppu', 'Hilppu', 'Mimppu',];
    const [generatedSimppu, setGeneratedSimppu] = useState('');

    const handleClick = () => {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      setGeneratedSimppu(wordList[randomIndex]);
      console.log("Help me I'm bored.")
    };
      return (
        <div className="container">
          <div>
            <h2>SimppuGeneraattori</h2>
            <p>Tämä on "hauska" pila kavereiden kesken..</p>
            <p> {generatedSimppu} </p>
            <button onClick={handleClick}>GeneroiSimppu</button>
          </div>
        </div>

      );
}

export default App;
