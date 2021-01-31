/**
 * @author iWuzhi
 * @date 2021-01-31 13:01:39
 */

import { types, flow, Instance } from 'mobx-state-tree';
import { registerState } from 'mr-global-state';

import { getUserInfo } from '../services';

const UserInfo = types.model({
  name: types.string,
  sex: types.string,
  age: types.number,
});

const Main = types
  .model({
    userInfo: types.maybe(UserInfo),
    userInfoState: types.enumeration(['done', 'pending', 'error']),
  })
  .actions((self) => ({
    getUserInfo: flow(function* (action) {
      const { from = 'Main' } = action || {};
      // TODO: Redux devtool connected
      console.log(`action/main/getUserInfo emit from: ${from}`);
      self.userInfoState = 'pending';
      try {
        const res = yield getUserInfo();
        self.userInfo = res.data;
        self.userInfoState = 'done';
      } catch (e) {
        self.userInfoState = 'error';
      }
    }),
  }));

const MainStore = Main.create({
  userInfoState: 'done',
});

registerState('main', MainStore);

export type IMainStore = Instance<typeof Main>;
export default MainStore;
