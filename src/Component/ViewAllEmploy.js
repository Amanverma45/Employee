import axios from "axios";
import { useEffect, useState } from "react";

const ViewAllEmploy = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    salary: "",
    city: "",
    mobile: "",
  });

  const [selectedId, setSelectedId] = useState(null);
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      "https://onestbackend-b051.onrender.com/api/emp/view"
    );
    setEmp(res.data.employ);
  };

  const Handledelete = async (id) => {
    await axios.delete(
      `https://onestbackend-b051.onrender.com/api/emp/delete/${id}`
    );
    getData();
  };

  const HandleEdit = (item) => {
    setFormData({
      name: item.name,
      age: item.age,
      salary: item.salary,
      city: item.city,
      mobile: item.mobile,
    });
    setSelectedId(item._id);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedId) {
      await axios.put(
        `https://onestbackend-b051.onrender.com/api/emp/update/${selectedId}`,
        formData
      );
    } else {
      await axios.post(
        "https://onestbackend-b051.onrender.com/api/emp/save",
        formData
      );
    }

    getData();
    setFormData({ name: "", age: "", salary: "", city: "", mobile: "" });
    setSelectedId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        View All Employees
      </h1>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white shadow rounded-lg mb-10">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">Mobile</th>
              <th className="py-3 px-4">City</th>
              <th className="py-3 px-4">Salary</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {emp.map((item, index) => (
              <tr
                key={item._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4 text-center">{item.age}</td>
                <td className="py-2 px-4 text-center">{item.mobile}</td>
                <td className="py-2 px-4 text-center">{item.city}</td>
                <td className="py-2 px-4 text-center">{item.salary}</td>
                <td className="py-2 px-4 flex gap-2 justify-center">
                  <button
                    onClick={() => HandleEdit(item)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => Handledelete(item._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FORM */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {selectedId ? "Update Employee" : "Add Employee"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "age", "salary", "city", "mobile"].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 font-medium mb-1 capitalize">
                {field}
              </label>
              <input
                type={
                  field === "age" || field === "salary"
                    ? "number"
                    : field === "mobile"
                    ? "tel"
                    : "text"
                }
                name={field}
                placeholder={`Enter ${field}`}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <button
            type="submit"
            className={`w-full py-2 rounded-md font-semibold text-white transition ${
              selectedId
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {selectedId ? "Update Employee" : "Add Employee"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ViewAllEmploy;
