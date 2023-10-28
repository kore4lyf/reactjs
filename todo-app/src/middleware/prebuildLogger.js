const prebuilLogger = (store) => (next) => (action) => {
	console.group(action.type)
	console.log('Action: ', action.type)
	console.log('Store: ', store.getState())
	next(action)
	console.groupEnd()
}

export default prebuildLogger
