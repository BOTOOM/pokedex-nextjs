"use client";

import { useGetParamURL, useUpdateURL } from "@/lib/hooks";
import { ParamsType } from "@/lib/types";

export default function PaginationButtons({ totals }: { totals: number }) {
  const totalRecords = totals;
  const totalPages = Math.ceil(totalRecords / 10);
  console.log(totalPages);
  const limitParam = useGetParamURL("limit");
  const offsetParam = useGetParamURL("offset");
  const totalPerPage =
    limitParam === ""
      ? Number(offsetParam) + 10
      : Number(limitParam) - 1 + Number(offsetParam);
  console.log({ limitParam, offsetParam, totalPerPage });
  const offsetPage = offsetParam === "" ? 1 : Number(offsetParam);
  console.log({ limitParam, offsetParam, totalPerPage, offsetPage });

  const [urlParams, updateURLParams] = useUpdateURL([]);
  const handleNextPage = () => {
    handleChangePage(true);
  };

  const handlePreviousPage = () => {
    handleChangePage(false);
  };

  const handleChangePage = (next: boolean) => {
    (updateURLParams as (params: ParamsType[]) => void)([
      { key: "limit", value: "10" },
      {
        key: "offset",
        value: `${
          offsetPage + 10 * (next ? 1 : -1) + (offsetPage === 1 ? -1 : 0)
        }`,
      },
    ]);

  };

  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {offsetPage + (offsetPage === 1 ? 0 : 1)}-
          {totalPerPage > totals
            ? totals
            : totalPerPage + (offsetPage === 1 ? 0 : 1)}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {totals}
        </span>
      </span>
      <div className="flex pb-2 pr-2">
        <button
          type="button"
          disabled={offsetPage <= 1}
          onClick={handlePreviousPage}
          className={`flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 ${
            offsetPage <= 1 ? "bg-gray-200" : "bg-white"
          } border border-gray-300 rounded-lg ${
            offsetPage <= 1 ? "" : "hover:bg-gray-100 hover:text-gray-700"
          } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        <button
          type="button"
          className={`flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 ${
            totalPerPage > totals ? "bg-gray-200" : "bg-white"
          } border border-gray-300 rounded-lg ${
            totalPerPage > totals ? "" : "hover:bg-gray-100 hover:text-gray-700"
          } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          onClick={handleNextPage}
          disabled={totalPerPage > totals}
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
