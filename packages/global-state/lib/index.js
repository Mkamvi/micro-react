/**
 * @author iWuzhi
 * @date 2021-01-30 23:33:50
 */
var globalStates = {};
export var getState = function (name) {
  if (!globalStates[name]) {
    // TODO: prod vs dev
    throw new Error("Can't find state <" + name + '> in global state.');
  }
  return globalStates[name];
};
export var registerState = function (name, state) {
  if (globalStates[name]) {
    // TODO: prod vs dev
    throw new Error('State <' + name + '> already exist in global state.');
  }
  globalStates[name] = state;
  return state;
};
export var getAllStates = function () {
  return globalStates;
};
export default globalStates;
