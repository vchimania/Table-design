import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useAccordionState } from "./providers";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export const Accordion = ({
  id,
  name,
  children = null,
  className = "",
  error = "",
}) => {
  const ref = useRef();
  const state = useAccordionState();
  const isOpen = state.open.includes(id);

  useEffect(() => {
    if (ref?.current && isOpen) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return () => {};
  }, [isOpen]);

  return (
    <div
      data-testid="accordian-group"
      className="space-y-5 border border-b-[#F1F1F1] py-5"
    >
      <button
        id={id}
        type="button"
        className="flex w-full items-center justify-between px-4"
        aria-controls={`accordian-content-${id}`}
        aria-expanded={isOpen}
        onClick={() => state.handleToggle(id)}
        data-testid="accordian-button"
      >
        <span
          className={classNames(
            "text-left ",
            isOpen ? "uppercase" : "capitalize",
            className || "text-[#585858]"
          )}
        >
          {name}
          {error && <div className="text-xs text-error-base">{error}</div>}
        </span>
        <span className="ml-6 flex h-6">
          {isOpen ? (
            <ChevronUpIcon className="shrink-0" />
          ) : (
            <ChevronDownIcon className="shrink-0" />
          )}
        </span>
      </button>
      <div
        id={`accordian-content-${id}`}
        role="region"
        aria-labelledby={id}
        className={classNames("px-4", isOpen ? "block" : "hidden")}
        data-testid="accordian-content"
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  error: PropTypes.string,
  sectionCompleted: PropTypes.bool,
  feature: PropTypes.bool,
};
