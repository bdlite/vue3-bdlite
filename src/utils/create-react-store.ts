import { reactive, toRefs, readonly } from 'vue'
import { Map } from 'immutable'

import { ICombineReactUse, IOriginState, IUseFunction } from '@/types/create-react-store';

export function combineReactUse(originState: IOriginState, getUseFunction: IUseFunction<IOriginState>): ICombineReactUse<IOriginState, IUseFunction<IOriginState>> {
  const stateMap = Map(originState);
  const stateReactive: any = reactive(stateMap.toJS());
  const useFunctionMap = Map(getUseFunction(stateReactive) as any);

  return {
    state: readonly(stateReactive),
    use: Object.freeze(useFunctionMap.toJS()),
    initialState: Object.freeze(stateMap.toJS()),
    getRefState() {
      return toRefs(stateReactive)
    }
  }
}
