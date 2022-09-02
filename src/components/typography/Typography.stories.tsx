import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import React from "react";

import { Typography } from "./Typography";

const TypographyMeta: ComponentMeta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  args: {
    variant: "tiny",
  },
  parameters: {
    notes: "This is the basic Typography component",
  },
};

export default TypographyMeta;

type TypographyStory = ComponentStory<typeof Typography>;

export const Regular: TypographyStory = (args) => <Typography {...args}>Sample Text</Typography>;

export const Title: TypographyStory = (args) => (
  <Typography {...args} variant="title">
    Title Text
  </Typography>
);

export const Subtitle: TypographyStory = (args) => (
  <Typography {...args} variant="subtitle">
    Title Text
  </Typography>
);
