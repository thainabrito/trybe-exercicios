import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';
// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

import { screen } from '@testing-library/react'; // importou screen e colocou nas linhas abaixo para pode funcionar
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}


describe('testing clicks', () => {
  test('the page should has a button and a text 0', () => {
    // const { screen.getByText } = comentou para poder funcionar
    renderWithRedux(<App />);

    // para alterar o valor inicial do clickReducer:
// renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    const buttonAdicionar = screen.getByText('Clique aqui');
    expect(buttonAdicionar).toBeInTheDocument();

    expect(screen.getByText('0')).toBeInTheDocument();

    // para testar se alterasse o valor inicial para 5
    // expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('testar se um clique funciona', () => {
    renderWithRedux(<App />);

    const buttonAdicionar = screen.getByText('Clique aqui');
    expect(buttonAdicionar).toBeInTheDocument();
    userEvent.click(buttonAdicionar);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test.only('Altera o valor inicial do counter para 10, clica no botão e cria os testes', () => {
renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

    expect(screen.getByText('10')).toBeInTheDocument();
  });
});

















































// Testes assíncronos
// src/helper/index.js
// import React from 'react';
// import { Provider } from 'react-redux';
// import { render } from '@testing-library/react';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';     --------importa o thunk-----------
// import reducer from '../../reducers';

// const createMockStore = (initialState) => (
//   createStore(combineReducers({ reducer }), initialState, applyMiddleware(thunk))
// // -----------coloca o "applyMiddleware(thunk)" na linha acima -----------------------
// );

// const renderWithRedux = (
//   component, { initialState, store = createMockStore(initialState) } = {},
// ) => ({
//   ...render(<Provider store={ store }>{component}</Provider>),
//   store});

// export default renderWithRedux;




// // src/App.test.js
// import { fireEvent, waitFor } from '@testing-library/react';
// import React from 'react';
// import fetchMock from 'fetch-mock-jest';     --------importa o fetchock------------
// import App from '../App';
// import renderWithRedux from './helpers';

// describe('Página principal', () => {
//   test('Testa que o botão de adicionar cachorro está presente', async () => {
//     const { queryByText } = renderWithRedux(<App />);
//     const buttonDoguinho = queryByText('Novo Doguinho');

//     expect(buttonDoguinho).toBeInTheDocument();

// // ao clicar no botão garantir que retornou uma nova imagem...
// // ...(que a api foi chamada, que a lógica assíncrona está feita), todas as linhas até o fim:

// // getOnce, espera que vai mockar uma vez, e coloca fetchMock, linha abaixo
//     fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
//       body: { message: 'myDogUrl' },
//     });

//     fireEvent.click(buttonDoguinho);
// // faz await e espera que fetchMock tenha sido chamado:
//     await waitFor(() => expect(fetchMock.called()).toBeTruthy());
//   });
// });