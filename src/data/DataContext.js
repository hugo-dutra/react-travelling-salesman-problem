import React from 'react';

export const data = {
  tamanho_populacao: 0,
  taxa_crossover: 0,
  taxa_mutacao: 0,
  evolucoes: 0,
  elitismo: 0,
  torneio: 0,
  novoIndividuo: false,
  populacaoGeral: false,
  pointos: []
};

export const initialState = {
  tamanho_populacao: 0,
  taxa_crossover: 0,
  taxa_mutacao: 0,
  evolucoes: 0,
  elitismo: 0,
  torneio: 0,
  novoIndividuo: false,
  populacaoGeral: false,
  pointos: []
};

export const DataContext = React.createContext();