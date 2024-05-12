import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

export enum ALIGN {
  START = "flex-start",
  END = "flex-end",
  CENTER = "center",
  BASELINE = "baseline",
}

export enum FONT_FAMILY {
  THIN = "Poppins-Thin",
  LIGHT = "Poppins-Light",
  REGULAR = "Poppins-Regular",
  MEDIUM = "Poppins-Medium",
  SEMI_BOLD = "Poppins-SemiBold",
  BOLD = "Poppins-Bold",
  EXTRA_BOLD = "Poppins-Black",
}

export enum JUSTIFY {
  START = "flex-start",
  END = "flex-end",
  CENTER = "center",
  BETWEEN = "space-between",
  EVENLY = "space-evenly",
  AROUND = "space-around",
}

export const SIZES = {
  BOTTOM_SHEET: {
    HEIGHT: height - 100,
  },
  BUTTON: {
    MEDIUM: {
      HEIGHT: 36,
    },
    SMALL: {
      HEIGHT: 24,
    },
    STANDARD: {
      HEIGHT: 44,
    },
  },
  ELEMENTS: {
    SMALL: 24,
    // eslint-disable-next-line sort-keys/sort-keys-fix
    MEDIUM: 36,
    STANDARD: 40,
    // eslint-disable-next-line sort-keys/sort-keys-fix
    LARGE: 46,
    X_LARGE: 64,
  },
  GAP: 16,
  WINDOW: {
    HEIGHT: height,
    WIDTH: width,
  },
};

const FULL_HEIGHT = SIZES.WINDOW.HEIGHT;
const OVERLAP = 20;
const BOTTOM_SHEET_WITH_IMAGE_HEIGHT = SIZES.WINDOW.HEIGHT * 0.67;
// top sheet with image should be under bottom sheet on {OVERLAP} px
const TOP_SHEET_WITH_IMAGE_HEIGHT =
  FULL_HEIGHT - BOTTOM_SHEET_WITH_IMAGE_HEIGHT;
const HOME_HEADER_HEIGHT = 130;
const HOME_SEARCH_HEIGHT = 68;
const HOME_LIST_TOP_HEIGHT = 16;
const HOME_FILTER_ITEM_WIDTH = 82;
const HOME_CUISINE_RESULT = 56;

export const LAYOUT = {
  MAIN: {
    HOME_CUISINE_RESULT,
    HOME_FILTER_ITEM_WIDTH,
    HOME_HEADER_HEIGHT,
    HOME_LIST_TOP_HEIGHT,
    HOME_SEARCH_HEIGHT,
  },
  SHEET: {
    BOTTOM_SHEET_WITH_IMAGE_HEIGHT,
    FULL_HEIGHT,
    OVERLAP,
    TOP_SHEET_WITH_IMAGE_HEIGHT,
    TOP_SHEET_WITH_IMAGE_OVERLAP_HEIGHT: TOP_SHEET_WITH_IMAGE_HEIGHT + OVERLAP,
  },
};

export const STYLES = StyleSheet.create({
  ALIGN_BASELINE: {
    alignItems: "baseline",
  },
  ALIGN_CENTER: {
    alignItems: "center",
  },
  ALIGN_END: {
    alignItems: "flex-end",
  },
  ALIGN_START: {
    alignItems: "flex-start",
  },
  ALIGN_STRETCH: {
    alignItems: "stretch",
  },
  BADGE_SHADOW: {
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  BOTTOM_SHADOW: {
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 40,
  },
  CARD_SHADOW: {
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  CARD_SHADOW_2: {
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: {
      height: 4,
      width: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  CENTER: {
    alignItems: "center",
    justifyContent: "center",
  },
  FILL: {
    flexGrow: 1,
  },

  JUSTIFY_AROUND: {
    justifyContent: "space-around",
  },
  JUSTIFY_BETWEEN: {
    justifyContent: "space-between",
  },
  JUSTIFY_CENTER: {
    justifyContent: "center",
  },
  JUSTIFY_END: {
    justifyContent: "flex-end",
  },
  JUSTIFY_EVENLY: {
    justifyContent: "space-evenly",
  },
  JUSTIFY_START: {
    justifyContent: "flex-start",
  },
  ROW: {
    flexDirection: "row",
  },
  SHADOW: {
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 50,
  },
  TEXT_BOLD: {
    fontFamily: FONT_FAMILY.BOLD,
  },
  TEXT_CENTER: {
    textAlign: "center",
  },
  TEXT_EXTRA_BOLD: {
    fontFamily: FONT_FAMILY.EXTRA_BOLD,
  },
  TEXT_FILL: {
    flexGrow: 1,
    flexShrink: 1,
  },
  TEXT_JUSTIFY: {
    textAlign: "justify",
  },
  TEXT_LEFT: {
    textAlign: "left",
  },
  TEXT_LIGHT: {
    fontFamily: FONT_FAMILY.LIGHT,
  },
  TEXT_MEDIUM: {
    fontFamily: FONT_FAMILY.MEDIUM,
  },
  TEXT_REGULAR: {
    fontFamily: FONT_FAMILY.REGULAR,
  },
  TEXT_RIGHT: {
    textAlign: "right",
  },
  TEXT_SEMI_BOLD: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
  },

  TEXT_THIN: {
    fontFamily: FONT_FAMILY.THIN,
  },
});
