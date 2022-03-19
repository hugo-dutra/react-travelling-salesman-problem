import './Controles.css';
import React, { useContext, useEffect } from 'react'
import Input from './Input';
import Button from './Button';
import RadioGroup from './RadioGroup';
import { DataContext, initialState } from '../data/DataContext';

const Controles = props => {

  const { dataState, setDataState } = useContext(DataContext);

  useEffect(() => {
    console.clear();
    console.table(dataState);
  }, [dataState])

  const criarPopulacao = () => {
    console.clear();
    console.log('Criar população');
  }

  const executarContinuar = () => {
    console.clear();
    console.log('Executar/Continuar');
  }

  const limpar = () => {
    setDataState(initialState);
  }

  const radioButtons = [
    { name: 'novoIndividuo', label: ' Novo indivíduo' },
    { name: 'populacaoGeral', label: ' População Geral' },
  ];

  const handleInputChange = (e, keyName) => {
    setDataState({ ...dataState, [`${keyName}`]: +e.target.value })
  }

  const handleSetTipoMutacao = (e, name) => {
    switch (name) {
      case 'novoIndividuo':
        setDataState({ ...dataState, [`novoIndividuo`]: true, [`populacaoGeral`]: false })
        break;
      case 'populacaoGeral':
        setDataState({ ...dataState, [`populacaoGeral`]: true, [`novoIndividuo`]: false })
        break;
      default:
        break;
    }
  }



  return (
    <div className='ComponenteControles'>
      <Input label='Tamanho da populacao' inputId='inputTamanhoPopulacao' keyName='tamanho_populacao' maxLength={5} step={1} inputChange={handleInputChange} />
      <Input label='Taxa de Crossover' inputId='inputTaxaCrossover' keyName='taxa_crossover' maxLength={4} step={0.001} inputChange={handleInputChange} />
      <Input label='Taxa de Mutação' inputId='inputTaxaMutassao' keyName='taxa_mutacao' maxLength={5} step={0.0001} inputChange={handleInputChange} />
      <Input label='Evoluções' inputId='inputEvolucoes' keyName='evolucoes' maxLength={4} step={1} inputChange={handleInputChange} />
      <Input label='Elitismo' inputId='inputElitismo' keyName='elitismo' maxLength={1} step={1} inputChange={handleInputChange} />
      <Input label='Torneio' inputId='inputTorneio' keyName='torneio' maxLength={1} step={1} inputChange={handleInputChange} />
      <RadioGroup label='Mutação' radioButtons={radioButtons} setTipoMutacao={handleSetTipoMutacao} />
      <Button label='Criar população' onClick={criarPopulacao} />
      <Button label='Executar/Continuar' onClick={executarContinuar} />
      <Button label='Limpar' onClick={limpar} />
    </div>
  )
}



export default Controles