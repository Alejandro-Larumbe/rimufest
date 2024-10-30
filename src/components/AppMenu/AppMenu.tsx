"use client";

import React from "react";
import {
  AppMenuRoot,
  AppMenuContent,
  AppMenuTitle,
  AppMenuTrigger,
  AppMenuNavigationLinks,
  AppMenuFooter,
} from "./AppMenuPrimitives";

export const AppMenu = () => {
  const [backgroundImage, setBackgroundImage] = React.useState<string>("");

  return (
    <AppMenuRoot onOpenChange={() => setBackgroundImage("")}>
      <AppMenuTrigger />
      <AppMenuContent backgroundImage={backgroundImage}>
        <AppMenuTitle />
        <AppMenuNavigationLinks setBackgroundImage={setBackgroundImage} />
        <AppMenuFooter />
      </AppMenuContent>
    </AppMenuRoot>
  );
};
