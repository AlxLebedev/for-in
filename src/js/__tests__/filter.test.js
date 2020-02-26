import obj from '../data';

import orderByProps from '../orderByProps';

import filterProp from '../filterProp';


test('Filter with properties', () => {
  const recieved = orderByProps(obj, filterProp);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(recieved).toEqual(expected);
});

test('Filter without properties', () => {
  const recieved = orderByProps(obj);
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(recieved).toEqual(expected);
});

test('Empty function', () => {
  const recieved = orderByProps();
  const expected = [];
  expect(recieved).toEqual(expected);
});
