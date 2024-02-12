import React from "react";

export const AccordionContext = React.createContext(null);

export const useAccordionState = () => {
  const context = React.useContext(AccordionContext);

  if (context == null) {
    throw new Error(
      "Accordion components must be wrapped in <AccordionGroup />"
    );
  }

  return context;
};
