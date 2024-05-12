import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DefaultCoordinates, ZoomLevels } from '~domain/constants/map';
import { ICoords } from '~domain/types/map';

export interface MapState {
  region: ICoords;
  userLocation: ICoords | undefined;
  moving: boolean;
  movingBetweenPoints: boolean;
  zoom: number;
}

const initialState: MapState = {
  moving: false,
  movingBetweenPoints: false,
  region: {
    latitude: DefaultCoordinates.latitude,
    longitude: DefaultCoordinates.longitude,
  },
  userLocation: undefined,
  zoom: 10,
};

export const mapSlice = createSlice({
  initialState,
  name: 'map',
  reducers: {
    setCoordinates: (state, action: PayloadAction<ICoords>) => ({
      ...state,
      region: action.payload,
    }),
    setMapMoving: (state, action: PayloadAction<boolean>): void => {
      state.moving = action.payload;
    },
    setMovingBetweenPoints: (state, action: PayloadAction<boolean>): void => {
      state.movingBetweenPoints = action.payload;
    },
    setUserLocation: (state, action: PayloadAction<ICoords | undefined>) => ({
      ...state,
      userLocation: action.payload,
    }),
    setZoom: (state, action: PayloadAction<number>): void => {
      state.zoom = action.payload;
    },
    zoomIn: (state): void => {
      if (state.moving || state.zoom + 1 > ZoomLevels.max) return;
      state.zoom += 1;
    },
    zoomOut: (state): void => {
      if (state.moving || state.zoom - 1 < ZoomLevels.min) return;
      state.zoom -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  zoomIn,
  zoomOut,
  setMapMoving,
  setMovingBetweenPoints,
  setZoom,
  setCoordinates,
  setUserLocation,
} = mapSlice.actions;

export default mapSlice.reducer;
