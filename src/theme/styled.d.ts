import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    normalize: (size: number) => number;
    fontSize: {
      tiny: string;
      small: string;
      normal: string;
      medium: string;
      large: string;
    };
    colors: {
      screen: {
        default: string;
      };

      card: string;

      indicator: {
        default: string;
        active: string;
      };

      icon: {
        default: string;
        info: string;
        success: string;
        error: string;
      };

      button: {
        primary: string;
        outlined: string;
      };

      text: {
        default: string;
      };

      border: {
        default: string;
      };
    };
  }
}
