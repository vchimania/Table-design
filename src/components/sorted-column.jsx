import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const SortedColumn = ({ columnName, label, onSort, sortOrder }) => {
  const isNumeric = typeof sortOrder.column === "number";

  const sortedIcon = () => {
    if (sortOrder.column === columnName) {
      return sortOrder.order === "asc" ? (
        <ChevronUpDownIcon className="inline-flex w-5 mr-2" />
      ) : (
        <ChevronDownIcon className="inline-flex w-5 mr-2" />
      );
    }
    return null;
  };
  return (
    <th
      scope="col"
      className="p-4 text-sm font-semibold text-gray-900 text-center"
    >
      <div className="flex items-center">
        <span className="mr-2">{label}</span>
        <button type="button" onClick={() => onSort(columnName, isNumeric)}>
          {sortedIcon()}
        </button>
        <FunnelIcon className="inline-flex w-5 mr-2" />
      </div>
    </th>
  );
};

export default SortedColumn;
