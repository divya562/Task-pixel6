import { useEffect, useState } from "react";
import Header from "./Header";
import axios, { all } from "axios";

import ReactLoading from "react-loading";
import Table from "./Table";

const Home = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);

  const limit = 10;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dummyjson.com/users?skip=${skip}&limit=${limit}`
      );

      const allData = response.data.users;
      setData((prev) => [...prev, ...allData]);
      // setLoading(false);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [skip]);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("innerHeight", window.innerHeight);
      // console.log("scrolltop", document.documentElement.scrollTop);
      // console.log("scrollHeight",document.documentElement.scrollHeight);
      try {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        )
          // setLoading(true);
          setSkip((prev) => prev + limit);
      } catch (error) {}
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //sort
  const handleSort = (key, direction) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
  };

  //filter of gender

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const filteredData = data.filter((item) => {
    const matchesGender = selectedGender
      ? item.gender === selectedGender
      : true;
    const matchesCountry = selectedCountry
      ? item.country === selectedCountry
      : true;
    return matchesGender && matchesCountry;
  });

  return (
    <>
      <div className="py-5 px-8 ">
        <Header
          selectedGender={selectedGender}
          onGenderChange={handleGenderChange}
          selectedCountry={selectedCountry}
          onCountryChange={handleCountryChange}
        />
        <Table data={filteredData} handleSort={handleSort} />

        {loading && (
          <div className="flex items-center justify-center py-4">
            <ReactLoading
              type={"spin"}
              color={"black"}
              height={50}
              width={50}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
