import './Controles.css';
import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input';
import Button from './Button';
import RadioGroup from './RadioGroup';

const Controles = props => {

  const criarPopulacao = () => {
    console.clear();
    console.log('Criar população');
  }

  const executarContinuar = () => {
    console.clear();
    console.log('Executar/Continuar');
  }

  const limpar = () => {
    console.clear();
    console.log('Limpar');
  }

  const radioButtons = [
    { name: 'novoIndividuio', value: 'novoIndividuo', label: ' Novo indivíduo' },
    { name: 'populacaoGeral', value: 'populacaoGeral', label: ' População Geral' },
  ];

  return (
    <div className='ComponenteControles'>
      <Input label='Tamanho da populacao' inputId='inputTamanhoPopulacao' maxLength={5} step={1} />
      <Input label='Taxa de Crossover' inputId='inputTaxaCrossover' maxLength={4} step={0.001} />
      <Input label='Taxa de Mutação' inputId='inputTaxaMutassao' maxLength={5} step={0.0001} />
      <Input label='Evolucoes' inputId='inputEvolucoes' maxLength={4} step={1} />
      <Input label='Elitismo' inputId='inputElitismo' maxLength={1} step={1} />
      <Input label='Torneio' inputId='inputTorneio' maxLength={1} step={1} />
      <RadioGroup label='Mutação' radioButtons={radioButtons} />
      <Button label='Criar população' onClick={criarPopulacao} />
      <Button label='Executar/Continuar' onClick={executarContinuar} />
      <Button label='Limpar' onClick={limpar} />
    </div>
  )
}

Controles.propTypes = {}

export default Controles