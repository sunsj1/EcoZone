import React from "react";
import { useNavigate } from "react-router-dom";

interface Cattle {
  id: string;
  name: string;
  number: string;
  imageUrl: string;
}

const CattleList: React.FC = () => {
  const navigate = useNavigate();

  // Dummy data for cattle - you can replace imageUrl with actual images
  const cattleList: Cattle[] = [
    {
      id: "1",
      name: "Ragini",
      number: "90078689",
      imageUrl:
        "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
    {
      id: "2",
      name: "Lakshmi",
      number: "90078690",
      imageUrl: "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
    {
      id: "3",
      name: "Sita",
      number: "90078691",
      imageUrl: "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
    {
      id: "4",
      name: "Gauri",
      number: "90078692",
      imageUrl: "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
    {
      id: "5",
      name: "Parvati",
      number: "90078693",
      imageUrl: "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
    {
      id: "6",
      name: "Durga",
      number: "90078694",
      imageUrl: "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
    {
      id: "7",
      name: "Kali",
      number: "90078695",
      imageUrl: "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
    {
      id: "8",
      name: "Saraswati",
      number: "90078696",
      imageUrl: "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
    {
      id: "9",
      name: "Radha",
      number: "90078697",
      imageUrl: "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
    {
      id: "10",
      name: "Rukmini",
      number: "90078698",
      imageUrl: "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
    {
      id: "11",
      name: "Draupadi",
      number: "90078699",
      imageUrl: "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
    {
      id: "12",
      name: "Kunti",
      number: "90078700",
      imageUrl: "https://thumbs.dreamstime.com/b/spotted-cow-vector-illustration-farm-cattle-animal-collection-cute-domestic-71817680.jpg",
    },
  ];

  const getCardColor = (index: number) => {
    // Alternate between light yellow and light orange
    return index % 2 === 0 ? "bg-yellow-100" : "bg-orange-100";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-yellow-400 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="text-gray-800 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-gray-800">PASHUMITRA</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <button
                onClick={() => navigate("/dashboard")}
                className="text-gray-800 hover:text-gray-600 font-medium"
              >
                Home
              </button>
              <button className="text-gray-800 hover:text-gray-600 font-medium">
                Reports
              </button>
              <button className="text-gray-800 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="text-gray-800 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Cattle Management
          </h2>
          <p className="text-gray-600 mt-2">
            Manage your cattle inventory and information
          </p>
        </div>

        {/* Cattle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cattleList.map((cattle, index) => (
            <div
              key={cattle.id}
              className={`${getCardColor(
                index
              )} rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
              onClick={() => navigate(`/cattle/${cattle.id}`)}
            >
              <div className="flex items-center space-x-4">
                {/* Cow Image */}
                <div className="flex-shrink-0">
                  <img
                    src={cattle.imageUrl}
                    alt={`${cattle.name} the cow`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>

                {/* Cattle Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {cattle.name}
                  </h3>
                  <p className="text-sm text-gray-600">{cattle.number}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Cattle Button */}
        <div className="mt-8 text-center">
          <button className="bg-yellow-400 text-white font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors">
            Add New Cattle
          </button>
        </div>
      </main>
    </div>
  );
};

export default CattleList;
