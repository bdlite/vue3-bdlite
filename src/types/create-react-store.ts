export interface IOriginState {
  [Key: string]: any
}
// S in keyof IOriginState
export interface IUseFunction<S> {
  (state: S): Object
}

export interface ICombineReactUse<state extends IOriginState, fn extends IUseFunction<state>> {
  readonly state: Object;
  use: any;
  initialState: any;
  getRefState: () => any
}

