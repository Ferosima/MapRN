import { IPoint } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum WayPointPosition {
  Start = 'start',
  End = 'end',
}

export interface WayState {
  activePoint: WayPointPosition;
  points: Record<WayPointPosition, IPoint | undefined>;
  confirmed: boolean;
}

const initialState: WayState = {
  activePoint: WayPointPosition.Start,
  confirmed: false,
  points: {
    end: undefined,
    start: undefined,
  },
};

export const waySlice = createSlice({
  initialState,
  name: 'way',
  reducers: {
    setActivePoint: (state, action: PayloadAction<WayPointPosition>) => {
      state.activePoint = action.payload;
    },
    setConfirm: (state, action: PayloadAction<boolean>) => {
      state.confirmed = action.payload;
    },
    setPoint: (
      state,
      action: PayloadAction<{
        position: WayPointPosition;
        point: IPoint | undefined;
      }>,
    ) => {
      state.points[action.payload.position] = action.payload.point;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPoint, setActivePoint, setConfirm } = waySlice.actions;

export default waySlice.reducer;
