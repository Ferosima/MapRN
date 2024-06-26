module.exports = {
  assets: ['./assets/fonts'],
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
  project: {
    android: {
      unstable_reactLegacyComponentNames: [
        'AIRGoogleMap',
        'AIRGoogleMapMarker',
        'AIRGoogleMapCallout',
        'AIRGoogleMapPolygon',
        'AIRGoogleMapPolyline',
        'AIRGoogleMapCoordinate',
        'AIRMap',
        'AIRMapMarker',
        'AIRMapCallout',
        'AIRMapCoordinate',
        'AIRMapPolygon',
        'AIRMapPolyline',
        'AIRMapPolylineRenderer',
        'AIRGMSPolyline',
        'AIRGoogleMapMarkerManager',
        'RNPermissions',
      ],
    },
    ios: {
      unstable_reactLegacyComponentNames: [
        'AIRGoogleMap',
        'AIRGoogleMapMarker',
        'AIRGoogleMapCallout',
        'AIRGoogleMapCalloutManager',
        'AIRGoogleMapCalloutSubview',
        'AIRGoogleMapCalloutSubviewManager',
        'AIRGoogleMapPolygon',
        'AIRGoogleMapPolyline',
        'AIRGoogleMapCoordinate',
        'AIRMap',
        'AIRMapMarker',
        'AIRMapCallout',
        'AIRMapCalloutManager',
        'AIRMapCoordinate',
        'AIRMapPolygon',
        'AIRMapPolyline',
        'AIRMapPolylineRenderer',
        'AIRGMSPolyline',
        'AIRGoogleMapMarkerManager',
        'RNPermissions',
      ],
    },
  },
};
