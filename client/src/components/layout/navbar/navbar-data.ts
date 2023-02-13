import routes from "navigation/routes";
import { type Breakpoint } from "@mui/material";
import type LinkData from "./link-data";

export const linksData: LinkData[] = [
  { link: routes.HomePage, text: "Home" },
  { link: routes.PlayerInventory, text: "Inventory" },
];

export const linksGroups = [];

export const expandBreakpoint: Breakpoint = "sm";
