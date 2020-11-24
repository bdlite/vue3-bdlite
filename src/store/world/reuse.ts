// @ts-ignore
import { combineReactUse } from '/@/utils'

import helloInitialState, { reuseInitialState } from './state';
import useFunction from './use';

helloInitialState.count = 888;

export default combineReactUse(reuseInitialState, useFunction)
