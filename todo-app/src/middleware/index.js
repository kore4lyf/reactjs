import prebuildLogger from './prebuildLogger.js'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export default applyMiddleware (
 thunk,
 prebuildLogger 
) 

