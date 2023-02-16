import React from 'react';
import { create } from 'react-test-renderer';
import { ProfileStatus } from './ProfileStatus';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/redux-store';

describe('ProfileStatus component', () => {
  //store.getState().profilePage.status = 'It-kamasutra.com'

  test('after creation span with status text should be displayed', async () => {
    const component = create(
      <Provider store={store}>
        <ProfileStatus getStatus={x => x} status={'It-kamasutra.com'} updateStatus={x => x} />
      </Provider>
    );
    const root = component.root;
    const span = await root.findByType('span');
    expect(span).not.toBeNull();
  });

  test(`after creation input shouldn't be displayed`, () => {
    const component = create(
      <Provider store={store}>
        <ProfileStatus getStatus={x => x} status={'It-kamasutra.com'} updateStatus={x => x} />
      </Provider>
    );
    const root = component.root;
    expect(() => {
      return root.findByType('input');
    }).toThrow();
  });

  test(`after creation span should be contains correct status`, async () => {
    const component = create(<ProfileStatus getStatus={x => x} status="It-kamasutra.com" updateStatus={x => x} />);
    const root = component.root;
    let span = await root.findByType('span');
    expect(span.children[0]).toBe('It-kamasutra.com');
  });

  test(`Input should be displayed in edit mode instead of span`, async () => {
    const component = create(<ProfileStatus getStatus={x => x} status="It-kamasutra.com" updateStatus={x => x} />);
    const root = component.root;
    let span = await root.findByType('span');
    span.props.onDoubleClick();
    let input = await root.findByType('input');
    expect(input.props.value).toBe('It-kamasutra.com');
  });

  test(`call back should be called`, async () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus getStatus={x => x} status="It-kamasutra.com" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    // @ts-ignore
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
