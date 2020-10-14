import { reactive, toRefs, readonly } from 'vue'
import { Map } from 'immutable'

export function conbineReactUse(originState, getUseFunction) {
  const stateMap = Map(originState);
  const stateReactive = reactive(stateMap.toJS());
  const useFunctionMap = Map(getUseFunction(stateReactive));

  return {
    state: readonly(stateReactive),
    use: Object.freeze(useFunctionMap.toJS()),
    initialState: Object.freeze(stateMap.toJS()),
    getRefState() {
      return toRefs(stateReactive)
    }
  }
}