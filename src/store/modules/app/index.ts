import { defineStore } from 'pinia';
import { AppState } from './types';

const useAppState = defineStore('app', {
  state: (): AppState => ({ systemName: 'TEMPLATE' }),
});

export default useAppState;
