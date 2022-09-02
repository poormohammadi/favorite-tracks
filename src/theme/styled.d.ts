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
        dark: string;
      };

      card: string;

      text: {
        default: string;
      };

      border: {
        default: string;
      };
    };
  }
}
