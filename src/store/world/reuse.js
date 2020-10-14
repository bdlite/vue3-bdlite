import { conbineReactUse } from '/@/utils'

import helloInitialState, { reuseInitialState } from './state';
import useFuntion from './use';

helloInitialState.count = 888;

export default conbineReactUse(reuseInitialState, useFuntion)
// export default conbineReactUse(helloInitialState, useFuntion)