import React from "react";
import { AccordionDropdown, AccordionGroup } from "./accordions";

const Sidebar = () => {
  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <aside
        id="separator-sidebar"
        className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <AccordionGroup initialOpen={["1"]}>
            <AccordionDropdown id="1" name="Popular Views">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Created By Me</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    122
                  </div>
                </div>
                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Modified By Me</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    232
                  </div>
                </div>
                <div className="flex items-center text-sm ">
                  <div className="pl-5 pr-2 text-[#6d76c5]">
                    Modified in last 30 days
                  </div>
                  <div className="rounded-full border border-slate-300 p-1 text-[#585858]">
                    50
                  </div>
                </div>
                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Not Published</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    232
                  </div>
                </div>
              </div>
            </AccordionDropdown>
          </AccordionGroup>
          <AccordionGroup initialOpen={["2"]} className="pt-4">
            <AccordionDropdown id="2" name="My Views">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Created By Me</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    56
                  </div>
                </div>
                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Modified By Me</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    44
                  </div>
                </div>
                <div className="flex items-center text-sm ">
                  <div className="pl-5 pr-2 text-[#6d76c5]">
                    Modified in last 30 days
                  </div>
                  <div className="rounded-full border border-slate-300 p-1 text-[#585858]">
                    2311
                  </div>
                </div>
                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Not Published</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    87
                  </div>
                </div>
              </div>
            </AccordionDropdown>
          </AccordionGroup>

          <AccordionGroup initialOpen={["3"]} className="pt-4">
            <AccordionDropdown id="3" name="All Content Types">
              <div className="space-y-2">
                <div>
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search in type..."
                      required
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Created By Me</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    56
                  </div>
                </div>
                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Modified By Me</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    44
                  </div>
                </div>
                <div className="flex items-center text-sm ">
                  <div className="pl-5 pr-2 text-[#6d76c5]">
                    Modified in last 30 days
                  </div>
                  <div className="rounded-full border border-slate-300 p-1 text-[#585858]">
                    2311
                  </div>
                </div>
                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Not Published</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    87
                  </div>
                </div>
              </div>
            </AccordionDropdown>
          </AccordionGroup>

          <AccordionGroup initialOpen={["4"]} className="pt-4">
            <AccordionDropdown id="4" name="All Labels">
              <div className="space-y-2">
                <div>
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search in labels..."
                      required
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Created By Me</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    56
                  </div>
                </div>
                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Modified By Me</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    44
                  </div>
                </div>
                <div className="flex items-center text-sm ">
                  <div className="pl-5 pr-2 text-[#6d76c5]">
                    Modified in last 30 days
                  </div>
                  <div className="rounded-full border border-slate-300 p-1 text-[#585858]">
                    2311
                  </div>
                </div>
                <div className="flex items-center text-sm text-[#585858]">
                  <div className="pl-5 pr-2">Not Published</div>
                  <div className="rounded-full border border-slate-300 p-1">
                    87
                  </div>
                </div>
              </div>
            </AccordionDropdown>
          </AccordionGroup>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
