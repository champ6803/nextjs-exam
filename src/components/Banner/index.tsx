"use client";
import BreadcrumbTwo from "@/components/Breadcrumbs/BreadcrumbTwo";
import SelectZone from "@/components/SelectGroup/SelectZone";
import SelectBannerType from "@/components/SelectGroup/SelectBannerType";

const FormElements = () => {
  return (
    <>
      <BreadcrumbTwo pageName="Banner" />

      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <div className="rounded-2xl border border-stroke bg-white shadow-default">
            <div className="flex flex-col gap-5.5 p-6">
              <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500">
                <ul className="-mb-px flex flex-wrap">
                  <li className="me-2">
                    <a
                      href="#"
                      className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600"
                    >
                      List
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      className="active inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600"
                      aria-current="page"
                    >
                      Add New Banner
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 grid-rows-4 gap-5">
                <div className="row-span-4 flex flex-col gap-5">
                  <div>
                    <label className="mb-3 block text-sm font-medium">
                      Title (Default)
                    </label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>
                  <SelectZone />
                  <SelectBannerType />
                  <div>
                    <label className="mb-3 block text-sm font-medium">
                      Date
                    </label>
                    <div className="flex gap-5">
                      <input
                        type="text"
                        placeholder="12/12/2024"
                        className="w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      />
                      <input
                        type="text"
                        placeholder="14/12/2024"
                        className="w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      />
                    </div>
                  </div>
                </div>
                <div className="row-span-3 flex flex-col gap-5">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Banner Image *
                    </label>
                    <div className="flex w-full items-center justify-center">
                      <label
                        htmlFor="dropzone-file"
                        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:hover:bg-gray-800"
                      >
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                          <svg
                            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-start-2 flex flex-col gap-5">
                  <div>
                    <label className="mb-3 block text-sm font-medium">
                      Link
                    </label>
                    <input
                      type="text"
                      placeholder="เพิ่ม Link (ไม่จำเป็น)"
                      className="w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4.5">
            <button
              className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1"
              type="submit"
            >
              Reset
            </button>
            <button
              className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormElements;
