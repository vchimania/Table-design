import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { AccordionContext } from "./providers";

/**
 * toggleCloseAll: boolean - whether or not to close all accordians when one is opened
 * initialOpen: array of string - the id of the accordian to open initially
 * open: string - the id of the accordian to open
 * onOpenChange: function - a callback to fire when the open state changes
 * onToggle: function - a callback to fire when an accordian is toggled mostly used to control extend toggle callback
 */
function useAccordion({ toggleCloseAll = true, initialOpen = [], onToggle }) {
  const [open, setOpen] = React.useState(initialOpen);

  const handleToggle = useCallback(
    (id) => {
      setOpen((prev) => {
        let newOpen = prev;
        if (toggleCloseAll) {
          newOpen = prev.includes(id) ? [] : [id];
        } else {
          newOpen = prev.includes(id)
            ? prev.filter((i) => i !== id)
            : [...prev, id];
        }
        if (onToggle) {
          onToggle(id, newOpen);
        }
        return newOpen;
      });
    },
    [toggleCloseAll, onToggle]
  );

  return React.useMemo(
    () => ({
      open,
      handleToggle,
    }),
    [open, handleToggle]
  );
}

export function AccordionGroup({ children, ...options }) {
  // This can accept any props as options, e.g. `toggleCloseAll`, `initialOpen`, etc.
  const state = useAccordion(options);
  return (
    <AccordionContext.Provider value={state}>
      {children}
    </AccordionContext.Provider>
  );
}

AccordionGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
