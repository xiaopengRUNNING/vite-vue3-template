import { createPinia } from 'pinia';
import useAppState from './modules/app';

const pinia = createPinia();

export { useAppState };
export default pinia;
