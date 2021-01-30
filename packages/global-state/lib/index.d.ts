/**
 * @author iWuzhi
 * @date 2021-01-30 23:33:50
 */
interface IState {
  [key: string]: unknown;
}
declare type IStates = {
  [name: string]: IState;
};
declare const globalStates: IStates;
export declare const getState: (name: string) => IState;
export declare const registerState: (name: string, state: IState) => IState;
export declare const getAllStates: () => IStates;
export default globalStates;
