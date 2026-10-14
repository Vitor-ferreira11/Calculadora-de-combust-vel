import { useState } from 'react'
import type { FormEvent } from 'react'
import { escolherCombustivel } from './fuel'
import './App.css'
import logoImg from './assets/logo.png'

interface InfoProps{
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {

  const [gasolinaInput, setGasolinaInput] = useState('')
  const [alcoolInput, setAlcooInput] = useState('')
  const [info, setInfo] = useState<InfoProps>()
  const [erro, setErro] = useState('')

  function calcular(event:FormEvent ){
    event.preventDefault();

    setErro('');
    try {
      const alcool = Number(alcoolInput);
      const gasolina = Number(gasolinaInput);
      setInfo({
        title: escolherCombustivel(alcool, gasolina) === 'alcool'
          ? 'Compensa usar álcool' : 'Compensa usar gasolina',
        gasolina: formatarMoeda(gasolina),
        alcool: formatarMoeda(alcool)
      });
    } catch {
      setInfo(undefined);
      setErro('Informe preços positivos e válidos para os dois combustíveis.');
    }
  }

  function formatarMoeda(valor: number){
    const valorFormatado = valor.toLocaleString("pt-br",
    {
      style: "currency",
      currency: "BRL"
    })

    return valorFormatado;
  }


  return(
    <div>
      <main className='container'>
        <img
          className='logo'
          src={logoImg}
          alt='logo calculadora'
        />
        <h1 className='title'>Qual melhor opção?</h1>

        <form className='form' onSubmit={calcular}>
        <label htmlFor='alcool'>Álcool (preço por litro):</label>
        <input
          id='alcool'
          className='input'
          type='number'
          placeholder='4,90'
          min='0.01'
          step='0.01'
          required
          value={alcoolInput}
          onChange={(e) => { setAlcooInput(e.target.value); setInfo(undefined); setErro(''); } }
        />


        <label htmlFor='gasolina'>Gasolina (preço por litro):</label>
        <input
          id='gasolina'
          className='input'
          type='number'
          placeholder='4,90'
          min='0.01'
          step='0.01'
          required
          value={gasolinaInput}
          onChange={(e) => { setGasolinaInput(e.target.value); setInfo(undefined); setErro(''); } }
        />
        <input className='button' type='submit' value="calcular" />
        </form>
        <p className='note'>Estimativa pela regra de 70%. O consumo real varia conforme o veículo.</p>
        {erro && <p className='error' role='alert'>{erro}</p>}

        {info && Object.keys(info).length > 0 && (
          <section className='result' role='status' aria-live='polite'>
          <h2 className='result-title'>{info.title}</h2>

          <span>Álcool {info.alcool}</span>
          <span>Gasolina {info.gasolina}</span>
        </section>
        )}

      </main>
    </div>
  )
}

export default App
