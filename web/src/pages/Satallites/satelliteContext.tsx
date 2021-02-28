import React from 'react';

type Action =
  | DirectoryAction

interface DirectoryAction {
  type: 'setDirectory';
  data: {directoryName: keyof State ,directories:string[]};
}

type Dispatch = (action: Action) => void;

type SatelliteProviderProps = {children: React.ReactNode};

interface State {
    ABI_GeoColor: string[],
    ABI_TrueColor: string[],
    color_IR: string[],
    color_WV: string[],
}

const initialState: State = {
    ABI_GeoColor: [],
    ABI_TrueColor: [],
    color_IR: [],
    color_WV: [],
};

const SatelliteStateContext = React.createContext<State | undefined>(undefined);

const SatelliteDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const SatelliteReducer = (state: State, action: Action) => {
  const newState = {...state};
  switch (action.type) {
    case 'setDirectory': {
      newState[action.data.directoryName] = action.data.directories;
      return newState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

const SatelliteProvider = ({children}: SatelliteProviderProps) => {
  const [state, dispatch] = React.useReducer(SatelliteReducer, initialState);
  return (
    <SatelliteStateContext.Provider value={state}>
      <SatelliteDispatchContext.Provider value={dispatch}>
        {children}
      </SatelliteDispatchContext.Provider>
    </SatelliteStateContext.Provider>
  );
};

const useSatelliteState = () => {
  const context = React.useContext(SatelliteStateContext);
  if (context === undefined) {
    throw new Error('useSatelliteState must be used within a SatelliteProvider');
  }
  return context;
};

const useSatelliteDispatch = () => {
  const context = React.useContext(SatelliteDispatchContext);
  if (context === undefined) {
    throw new Error('useSatelliteDispatch must be used within a SatelliteProvider');
  }
  return context;
};
export {SatelliteProvider, useSatelliteState, useSatelliteDispatch};
