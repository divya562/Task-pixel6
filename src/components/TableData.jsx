const TableData = ({ data }) => {
  const { id } = data;

  return (
    <tr className="text-gray-600 ">
      <td className="px-8 py-2 border-t">
        {id.toString().length == 1 ? "0" + id : id}
      </td>

      <td className="px-8 py-2 border-t">
        <img
          src={data.image}
          alt="img"
          className="h-12 w-12 rounded-full object-cover"
        />
      </td>
      <td className="px-8 py-2 border-t">
        {data.firstName} {data.maidenName} {data.lastName}
      </td>
      <td className="px-8 py-2 border-t">
        {data.gender.split("")[0].toUpperCase()}/{data.age}
      </td>
      <td className="px-8 py-2 border-t">{data.company.title}</td>
      <td className="px-8 py-2 border-t">
        {data.address.state},{" "}
        {data.address.country === "United States" && "USA"}
      </td>
    </tr>
  );
};
export default TableData;
