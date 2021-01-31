/**
 * author iWuzhi
 * date 2021-01-08 17:25:45
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Skeleton from '@material-ui/lab/Skeleton';

import { IMainStore } from '@/models';

interface IProps {
  store: IMainStore;
}

const App: React.FC<IProps> = (props) => {
  const { userInfo, userInfoState } = props.store;
  useEffect(() => {
    props.store.getUserInfo();
  }, []);
  return (
    <div className="container mx-auto min-h-full py-4 flex flex-col">
      <header className="m-4 border-green-100 text-blue-700 h-16 border-4 border-double rounded-2xl flex justify-center items-center">
        {userInfoState === 'pending' ? <Skeleton className="w-40 min-h-full" /> : userInfo?.name}
      </header>
      <main className="flex-grow flex py-4">
        <nav className="w-48 border-green-100 text-blue-700 border flex justify-center items-center rounded-2xl">
          Nav
        </nav>
        <section className="flex-grow ml-4 border-green-100 text-blue-700 border flex justify-center items-center rounded-2xl">
          Content
        </section>
      </main>
      <footer className="border-green-100 text-blue-700 h-16 border-4 border-double rounded-2xl flex justify-center items-center">
        Footer
      </footer>
    </div>
  );
};

export default observer(App);
