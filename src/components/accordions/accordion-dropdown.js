import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

import { useAccordionState } from "./providers";
import classNames from "classnames";

export const AccordionDropdown = ({
  id,
  name,
  disabled,
  children = null,
  className = "",
}) => {
  const state = useAccordionState();
  const isOpen = state.open.includes(id);

  return (
    <div data-testid="accordian-group">
      <button
        id={id}
        type="button"
        className={classNames(
          "relative z-20 flex w-full items-center justify-between px-3 py-2",
          isOpen ? " bg-[#f7f8fa]" : "bg-[#f7f8fa]"
        )}
        aria-controls={`accordian-content-${id}`}
        aria-expanded={isOpen}
        onClick={() => state.handleToggle(id)}
        data-testid="accordian-button"
        disabled={disabled}
      >
        <div
          className={classNames(
            "flex items-center space-x-2 font-GingerProDemi ",
            isOpen ? "text-gray-500" : "text-gray-600",
            className
          )}
        >
          <span className="font-semibold">{name}</span>
        </div>
        <div className="ml-6 flex h-6">
          {isOpen ? (
            <ChevronUpIcon className="shrink-0 text-[#585858]" />
          ) : (
            <ChevronDownIcon className="shrink-0 text-[#585858]" />
          )}
        </div>
      </button>
      <div
        id={`accordian-content-${id}`}
        role="region"
        aria-labelledby={id}
        className={classNames(isOpen ? "block" : "hidden")}
        data-testid="accordian-content"
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
