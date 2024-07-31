import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";
import TableData from "./TableData";

const Table = ({ data, handleSort }) => {
  return (
    <>
      <table className="rounded-[30px] border-separate border  mt-14 w-full">
        <thead className="">
          <tr className="text-gray-700">
            <th className="px-8 py-8 text-left flex items-center">
              <span>ID</span>
              <div className="flex  items-center">
                <HiOutlineArrowSmUp
                  className="text-gray-400 h-5 w-5"
                  onClick={() => handleSort("id", "ascending")}
                />
                <HiOutlineArrowSmDown
                  className="text-red-700 h-5 w-5 "
                  onClick={() => handleSort("id", "descending")}
                />
              </div>
            </th>
            <th className="px-8 py-8 text-left ">Image</th>
            <th className="px-8 py-8 text-left">
              <div className="flex items-center">
                Full Name
                <div className="flex  items-center">
                  <HiOutlineArrowSmUp
                    className="text-gray-400 h-5 w-5"
                    onClick={() => handleSort("firstName", "ascending")}
                  />
                  <HiOutlineArrowSmDown
                    className="text-red-700 h-5 w-5 "
                    onClick={() => handleSort("firstName", "descending")}
                  />
                </div>
              </div>
            </th>
            <th className="px-8 py-8 text-left flex flex-row">
              Demography
              <div className="flex  items-center">
                <HiOutlineArrowSmUp
                  className="text-gray-400 h-5 w-5"
                  onClick={() => handleSort("age", "ascending")}
                />
                <HiOutlineArrowSmDown
                  className="text-red-700 h-5 w-5 "
                  onClick={() => handleSort("age", "descending")}
                />
              </div>
            </th>
            <th className="px-8 py-8 text-left ">Designation</th>
            <th className="px-8 py-8 text-left ">Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableData key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
