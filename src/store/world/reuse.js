import { combineReactUse } from '/@/utils'

import helloInitialState, { reuseInitialState } from './state';
import useFuntion from './use';

helloInitialState.count = 888;

export default combineReactUse(reuseInitialState, useFuntion)
// export default combineReactUse(helloInitialState, useFuntion)
