import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppHeader } from './component/AppHeader';
import { SearchList } from './container/search';

export interface Error {
  show: boolean;
  message: string;
}

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Switch>
        <Route path="/">
          <SearchList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
