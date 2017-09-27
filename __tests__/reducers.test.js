import reducer from '../reducers/counter.reducer.js';

describe('reducer', () => {

	test('can increment', () => {
		let state;
		state = reducer(1, {type:'INCREMENT'});
		expect(state).toEqual(2);
	})

	test('can decrement', () => {
		let state;
		state = reducer(1, {type:'DECREMENT'});
		expect(state).toEqual(0);
	})
});
