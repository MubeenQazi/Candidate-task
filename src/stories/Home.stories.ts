import type { Meta, StoryObj } from "@storybook/react";
import Home from "./Home";

const meta = {
  title: "Home",
  component: Home,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const LoggedIn: Story = {
//   args: {
//     user: {
//       name: 'Jane Doe',
//     },
//   },
// };

export const Homes: Story = {};
