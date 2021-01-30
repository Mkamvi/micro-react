/**
 * @author iWuzhi
 * @date 2021-01-30 23:33:50
 */

interface IState {
  [key: string]: unknown;
}

type IStates = {
  [name: string]: IState;
};

const globalStates: IStates = {};

export const getState = (name: string): IState => {
  if (!globalStates[name]) {
    // TODO: prod vs dev
    throw new Error(`Can't find state <${name}> in global state.`);
  }
  return globalStates[name];
};

export const registerState = (name: string, state: IState): IState => {
  if (globalStates[name]) {
    // TODO: prod vs dev
    throw new Error(`State <${name}> already exist in global state.`);
  }
  globalStates[name] = state;
  return state;
};

export const getAllStates = (): IStates => globalStates;

export default globalStates;
