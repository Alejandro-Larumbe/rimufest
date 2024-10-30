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
    <AppMenuRoot>
      <AppMenuTrigger />
      <AppMenuContent
        setBackgroundImage={setBackgroundImage}
        backgroundImage={backgroundImage}
      >
        <AppMenuTitle />
        <AppMenuNavigationLinks setBackgroundImage={setBackgroundImage} />
        <AppMenuFooter />
      </AppMenuContent>
    </AppMenuRoot>
  );
};
