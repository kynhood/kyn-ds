// Storybook story for the Menu component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from "@storybook/react";
import './Menu.css';
import Menu from "./Menu";

// Storybook metadata and controls for Menu
const meta = {
  title: "Components/Menu", // Storybook sidebar title
  component: Menu, // The component to document
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {}, // No controls for Menu
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};