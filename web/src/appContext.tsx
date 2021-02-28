import React from 'react';
import {
  State,
  AppProviderProps,
  Action,
  Dispatch,
} from './appContext.definitions';

const initialState: State = {
  config: undefined,
};

const AppStateContext = React.createContext<State | undefined>(undefined);

const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const AppReducer = (state: State, action: Action) => {
  const newState = {...state};
  switch (action.type) {
    case 'setConfig': {
      newState.config = action.data;
      return newState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

const AppProvider = ({children}: AppProviderProps) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
};

const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return context;
};
export {AppProvider, useAppState, useAppDispatch};
