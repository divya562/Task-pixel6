import { HiFilter } from "react-icons/hi";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Header = ({
  selectedGender,
  onGenderChange,
  selectedCountry,
  onCountryChange,
}) => {
  return (
    <>
      <div className="flex justify-between mt-10 items-center">
        <div className="text-3xl font-bold text-gray-700">Employees</div>
        <div className="flex items-center space-x-4">
          <HiFilter className="h-5 w-5 text-red-700 mr-4" />

          <select
            className="border p-2 rounded-lg"
            name="Country"
            id="gender"
            value={selectedCountry}
            onChange={onCountryChange}
          >
            <option value="" disabled>
              {" "}
              Country
            </option>
            <option value="canada">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
          </select>

          <select
            className="border p-2 rounded-lg"
            name="gender"
            id="gender"
            value={selectedGender}
            onChange={onGenderChange}
          >
            <option value="" disabled>
              {" "}
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
