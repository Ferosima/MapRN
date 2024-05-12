import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ResultMap } from 'react-native-permissions/dist/typescript/results';

export interface AppState {
  confirmPermission: boolean;
  locationPermission: ResultMap[keyof ResultMap] | undefined;
}

const initialState: AppState = {
  confirmPermission: false,
  locationPermission: undefined,
};

export const appSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    setConfirmPermission: (state, action: PayloadAction<boolean>) => {
      state.confirmPermission = action.payload;
    },
    setLocationPermission: (
      state,
      action: PayloadAction<ResultMap[keyof ResultMap]>,
    ) => {
      state.locationPermission = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLocationPermission, setConfirmPermission } = appSlice.actions;

export default appSlice.reducer;
