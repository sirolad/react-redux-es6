import { combinereducers } from "redux";
import courses from './courseReducer'

const rootReducer = combinereducers({
    courses
})

export default rootReducer;