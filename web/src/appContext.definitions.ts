export interface AppConfig {
    API_BASE_URL:string
}

export type Action =
  | ConfigAction

export interface ConfigAction {
  type: 'setConfig';
  data: AppConfig;
}

export type Dispatch = (action: Action) => void;

export type AppProviderProps = {children: React.ReactNode};

export interface State {
  config?: AppConfig;
}
