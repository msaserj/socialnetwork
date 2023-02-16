import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../redux/redux-store';
import { Paginator } from './Paginator';

describe('Paginator component', () => {
  //store.getState().profilePage.status = 'It-kamasutra.com'
  test('pages count is 11, but should be showed 10', async () => {
    const component = create(
      <Provider store={store}>
        <Paginator currentPage={1} onPageChanged={x => x} pageSize={1} totalItemsCount={11} isFetching reset={1} />
      </Provider>
    );
    const root = component.root;
    const spans = root.findAllByType('span');
    expect(spans.length).toBe(10);
  });

  test('pages count is 1, but should be showed 10', async () => {
    const component = create(
      <Provider store={store}>
        <Paginator currentPage={1} onPageChanged={x => x} pageSize={1} totalItemsCount={11} isFetching reset={1} />
      </Provider>
    );
    const root = component.root;
    const button = root.findAllByType('span');
    expect(button.length).toBe(1);
  });
});
