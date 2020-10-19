import { combineReactUse } from '/@/utils'

import initialState from './state';
import useFuntion from './use';

export default combineReactUse(initialState, useFuntion)
