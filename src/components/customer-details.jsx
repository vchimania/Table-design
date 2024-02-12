import React, { useState } from "react";
import {
  EllipsisVerticalIcon,
  ExclamationCircleIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const CustomerDetails = ({
  id,
  name,
  language,
  contentType,
  version,
  publishStage,
  workflowStage,
  modifiedAt,
  tags,
  onSelect,
  isSelected,
  onDelete,
  modifiedName,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <tr
      className={`${
        isSelected ? "bg-gray-200" : ""
      } divide-x divide-gray-200 text-center relative`}
    >
      <td className="h-[60px] text-left pl-3">
        <label className="flex">
          <input
            type="radio"
            checked={isSelected}
            onChange={() => onSelect(id)}
            className="mr-3"
          />
          <span>{name}</span>
        </label>
      </td>
      <td className="h-[60px] text-left pl-3">{language}</td>
      <td className="h-[60px] text-left pl-3">{contentType}</td>
      <td className="h-[60px] text-right pr-3">{version}</td>
      <td className="h-[60px] text-left pl-3">
        <div className="flex items-center">
          <div>{publishStage}</div>
          <ExclamationCircleIcon className="w-5 text-gray-600 h-5 ml-2" />
        </div>
      </td>
      <td className="h-[60px] text-center">
        <span className="rounded-full bg-gray-200 p-2">{workflowStage}</span>
      </td>
      <td className="h-[60px] text-left pl-3">
        <span>{modifiedAt}</span>
        <span className="text-xs block">{modifiedName}</span>
      </td>
      <td className="h-[60px] text-left pl-3">{tags}</td>
      <td className="h-[60px] bg-white">
        <>
          <button
            type="button"
            onClick={() => {
              handleMenuToggle();
            }}
            className="z-10 relative"
          >
            <EllipsisVerticalIcon className="w-6" />
          </button>
          {menuVisible && (
            <div
              className="absolute z-50 text-center mt-2 w-40 bg-white rounded-md shadow-lg"
              style={{ top: "100%" }}
            >
              <div className="py-1">
                <div
                  onClick={() => {}}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="flex items-center">
                    <PencilIcon className="w-4 inline-flex mr-3" />
                    <span>Edit</span>
                  </div>
                </div>
                <div
                  onClick={() => {
                    onDelete(id);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-100 cursor-pointer"
                >
                  <div className="flex items-center">
                    <PencilIcon className="w-4 inline-flex mr-3 text-red-400" />
                    <span className="text-red-400">Delete</span>
                  </div>
                </div>
                <div
                  onClick={() => {}}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 cursor-pointer"
                >
                  <div className="flex items-center">
                    <PencilIcon className="w-4 inline-flex mr-3 text-purple-400" />
                    <span className="text-purple-400">Clone</span>
                  </div>
                </div>
                <div
                  onClick={() => {}}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Publish
                </div>
                <div
                  onClick={() => {}}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Unpublish
                </div>
                <div
                  onClick={() => {}}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Add to Release
                </div>
              </div>
            </div>
          )}
        </>
      </td>
    </tr>
  );
};

export default CustomerDetails;
