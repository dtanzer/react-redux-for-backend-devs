const initialState = {
	someForm: {
		inputValue: 'Enter Greeting',
		otherData: 'We ignore that',
	},
	otherData: 'We ignore that too',
}

export function reducer(state = initialState, action) {
	switch(action.type) {
		case 'GREETING_CHANGED': {
			return {
				...state,
				someForm: {
					...state.someForm,
					inputValue: action.newGreeting
				}
			}
		}
	}
	return state;
}
