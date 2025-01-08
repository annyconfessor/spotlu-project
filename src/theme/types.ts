import { Theme } from 'styled-system';

export interface ThemeInterface extends Theme {
  colors: {
    grey: {
      0: string;
      300: string;
      500: string;
      600: string;
      999: string;
    };
    primary: {
      50: string;
    };
    feedback: {
      success: string;
      critical: string;
    };
  };
}