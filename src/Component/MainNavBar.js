import { Link } from "react-router-dom";
import { useAuth } from "../Component/AuthContaxt";

export default function MainNavBar() {
  const { logOut } = useAuth();

  const handleout = () => {
    logOut();
  };

  return (
    <div className="bg-gray-900 px-6 py-4 flex items-center gap-6">
      <Link
        to="/addemp"
        className="text-white font-medium hover:text-blue-400 transition"
      >
        Add Employee
      </Link>

      <Link
        to="/view"
        className="text-white font-medium hover:text-blue-400 transition"
      >
        View All Employee
      </Link>

      <button
        onClick={handleout}
        className="ml-auto bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition"
      >
        LogOut
      </button>
    </div>
  );
}
