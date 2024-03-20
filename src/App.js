import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const auth = useSelector(State => State.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
