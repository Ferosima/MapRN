import { IAlert } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AlertState {
  list: IAlert[];
}

const initialState: AlertState = {
  list: [],
};

export const alertsSlice = createSlice({
  initialState,
  name: 'alerts',
  reducers: {
    addAlert: (
      state,
      action: PayloadAction<Omit<IAlert, 'uuid'> & { uuid?: string }>,
    ): void => {
      const uuid = action.payload.uuid ?? Date.now().toString();
      state.list.push({ ...action.payload, uuid });
    },
    closeAll: state => ({ ...state, list: [] }),
    hideAlert: (state, action) => {
      state.list = state.list.filter(alert => alert.uuid !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAlert, hideAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
