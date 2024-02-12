import { useState } from "react";
import "./App.css";
import CustomerDetails from "./components/customer-details";
import { CustomerData, tabs } from "./components/helpers";
import Search from "./components/search";
import Primary from "./components/primary";
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  Cog8ToothIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import ReactPaginate from "react-paginate";
import Header from "./components/header";
import Tabs from "./components/tabs";
import Steppers from "./components/steppers";
import Sidebar from "./components/sidebar";
import noResult from "./components/no-result.png";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState({
    column: "name", // Initial sorting column
    order: "asc",
  });
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [recordsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState(tabs.ENTRIES);

  const filteredData = CustomerData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSort = (columnName) => {
    setSortOrder((prevSortOrder) => ({
      column: columnName,
      order:
        prevSortOrder.column === columnName && prevSortOrder.order === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortOrder.column];
    const bValue = b[sortOrder.column];

    if (sortOrder.order === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleRowSelect = (id) => {
    setSelectedRow(id === selectedRow ? null : id);
  };

  const handleDeleteRow = (id) => {
    // Delete the row from your data source (e.g., API, state, etc.)
    // here i'm filter it out from the state
    const updatedData = CustomerData.filter((item) => item.id !== id);
    CustomerData.splice(0, CustomerData.length, ...updatedData);
    setSelectedRow(null);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastRecord = (currentPage + 1) * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sortedData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(sortedData.length / recordsPerPage);
  return (
    <>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Steppers />
      {activeTab === tabs.DASHBOARD && <div>Work in progress</div>}

      {activeTab === tabs.ENTRIES && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border pt-3">
          <Sidebar />
          <div className="p-4 sm:ml-64 bg-white flex justify-between">
            <Search
              searchProps={{
                search: (value) => setSearchTerm(value),
                results: filteredData,
              }}
              defaultValue={searchTerm}
            />
            <div className="flex items-center">
              <div className="pr-4">
                <Primary
                  type="button"
                  className="p-2 rounded border border-[#7982d3] text-[#868edb] w-40 font-semibold"
                >
                  <Cog8ToothIcon className="inline-block w-5 mr-2" />
                  <span className="mr-2">Settings</span>
                  <ChevronDownIcon className="inline-block w-5" />
                </Primary>
              </div>
              <Primary
                type="button"
                className=" p-2 rounded border border-[#7982d3] text-[#868edb] w-32 font-semibold"
              >
                Add Filter
              </Primary>
            </div>
          </div>

          <div className="px-4">
            <table className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg min-h-full sm:ml-64 table-fixed hover:border-[#F7F9FC]">
              <thead className="bg-gray-50 ">
                <tr className="divide-x divide-gray-200">
                  <th
                    scope="col"
                    className="h-10 text-sm font-semibold text-gray-900 text-center bg-white"
                  >
                    <button
                      type="button"
                      className="flex items-center"
                      onClick={() => handleSort("name")}
                    >
                      <span className="mr-2">Name</span>
                      <ChevronUpDownIcon className="inline-flex w-5 mr-2 text-[#DDE3EE]" />
                      <FunnelIcon className="inline-flex w-5 mr-2" />
                    </button>
                  </th>
                  <th
                    scope="col"
                    className="h-10 text-sm font-semibold text-gray-900 text-center bg-white"
                  >
                    <button type="button" className="flex items-center">
                      <span className="mr-2">Language</span>
                      <FunnelIcon className="inline-flex w-5 mr-2" />
                    </button>
                  </th>
                  <th
                    scope="col"
                    className="h-10 text-sm font-semibold text-gray-900 w-auto text-center bg-white"
                  >
                    <div className="flex items-center">
                      <span className="mr-2"> Content Type</span>
                      <FunnelIcon className="inline-flex w-5 mr-2" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="h-10 text-sm font-semibold text-gray-900 text-center bg-white"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">Version</span>
                      <FunnelIcon className="inline-flex w-5 mr-2" />
                    </div>
                  </th>

                  <th
                    scope="col"
                    className="h-10 text-sm font-semibold text-gray-900 text-center bg-white"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">Publish Stage</span>
                      <FunnelIcon className="inline-flex w-5 mr-2" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="h-10 text-sm font-semibold text-gray-900 text-center bg-white"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">Workflow Stage</span>
                      <FunnelIcon className="inline-flex w-5 mr-2" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="h-10 text-sm font-semibold text-gray-900 text-center bg-white"
                  >
                    <div className="flex items-center">
                      <span className="mr-2"> Modified At</span>
                      <FunnelIcon className="inline-flex w-5 mr-2" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="h-10 text-sm font-semibold text-gray-900 text-center bg-white"
                  >
                    <div className="flex items-center">
                      <span className="mr-2"> Tags</span>
                      <FunnelIcon className="inline-flex w-5 mr-2" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="h-10 text-sm font-semibold text-gray-900 text-center bg-white"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">Actions</span>
                      <FunnelIcon className="inline-flex w-5 mr-2" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 text-sm">
                {currentRecords.map((m) => (
                  <CustomerDetails
                    key={m.id}
                    id={m.id}
                    name={m.name}
                    language={m.language}
                    contentType={m.content_type}
                    version={m.version}
                    publishStage={m.publish_stage}
                    workflowStage={m.workflow_stages}
                    modifiedAt={m.modified_at}
                    tags={m.tags}
                    onSelect={() => handleRowSelect(m.id)}
                    isSelected={m.id === selectedRow}
                    onDelete={handleDeleteRow}
                    modifiedName={m.modified_name}
                  />
                ))}
              </tbody>
            </table>
          </div>
          {sortedData.length > 0 && (
            <div className="p-4 sm:ml-64">
              <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                pageCount={nPages}
                previousLabel="<"
                nextClassName="page-item"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                renderOnZeroPageCount={null}
                initialPage={currentPage}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
              />
            </div>
          )}

          {sortedData.length === 0 && (
            <p className="text-center text-gray-500 p-4 sm:ml-64 ">
              <img
                src={noResult}
                alt="profile"
                className="rounded-full border border-gray-100 shadow-sm mx-auto"
              />
              <div className="font-bold text-gray-400 text-lg">
                No results found for your search criteria
              </div>
              <div className="mt-6">
                Don't worry though, we're here to help. Try adjusting your
              </div>
              <div>search terms or check if you misspelled anything.</div>
            </p>
          )}
        </div>
      )}
      {activeTab === tabs.ASSETS && <div>Work in progress</div>}
      {activeTab === tabs.CONTENT_MODELS && <div>Work in progress</div>}
      {activeTab === tabs.PUBLISH_QUEUE && <div>Work in progress</div>}
    </>
  );
}

export default App;
