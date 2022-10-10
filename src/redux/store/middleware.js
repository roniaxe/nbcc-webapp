import { createListenerMiddleware } from '@reduxjs/toolkit';
import { actions as generalActions } from '../general/slice';

const { toggleMode } = generalActions;

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: toggleMode,
    effect: (action, listenerApi) => {
        const { general: { mode } } = listenerApi.getState();
        localStorage.setItem('mode', mode);
    }
});
