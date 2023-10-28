import prebuildLogger from './prebuildLogger.js'
import thunk from 'redux-thunk'

export default applyMiddleware (
 thunk,
 prebuildLogger 
) 

