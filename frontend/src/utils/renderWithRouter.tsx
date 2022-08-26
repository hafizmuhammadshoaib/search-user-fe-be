import React, { ReactElement } from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

interface WrapperProps {
  children?: React.ReactNode;
}

export const renderWithRouter = (
  ui: ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route], }),
  }: { route?: string; history?: any } = {}
) => {
  const Wrapper = ({ children }: WrapperProps) => (
    <Router history={history}>
      <Route path={route}>{children}</Route>
    </Router>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
};
