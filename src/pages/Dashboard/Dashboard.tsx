import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface StatCard {
  id: string;
  title: string;
  value: number;
  unit?: string;
  color: "yellow" | "orange";
}

interface FertilityItem {
  id: string;
  label: string;
  count: number;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const statCards: StatCard[] = [
    { id: "1", title: "Total Cows 🐄", value: 27, color: "yellow" },
    { id: "2", title: "Milking Cows 🥛", value: 18, color: "orange" },
    { id: "3", title: "Avg Milk (kgs) 🧾", value: 20, color: "yellow" },
    { id: "4", title: "Dry Cows 🌾", value: 27, color: "orange" },
  ];

  const fertilityItems: FertilityItem[] = [
    { id: "1", label: "Open Cows 🔓", count: 12 },
    { id: "2", label: "Pregnant Cows 🤰", count: 3 },
    { id: "3", label: "Lactating Cows 🍼", count: 4 },
    { id: "4", label: "Estrous Cows 🔁", count: 1 },
    { id: "5", label: "Dry Cows 🌾", count: 2 },
    { id: "6", label: "On Treatment 💊", count: 5 },
  ];

  const getColorClasses = (color: "yellow" | "orange") => {
    return color === "yellow" ? "bg-yellow-400" : "bg-orange-400";
  };

  // Live-like dummy data for Cattle Health card
  const [temperature, setTemperature] = useState<number>(38.5);
  const [heartRate, setHeartRate] = useState<number>(72);
  const [activity, setActivity] = useState<string>("Grazing");
  const [status, setStatus] = useState<"Normal" | "Alert" | "Critical">(
    "Normal"
  );
  const [lastUpdated, setLastUpdated] = useState<string>(() =>
    new Date().toLocaleTimeString()
  );
  const [tempHistory, setTempHistory] = useState<number[]>(() => {
    const base = 38.0;
    return Array.from({ length: 12 }, () => base + Math.random() * 1.2 - 0.6);
  });

  useEffect(() => {
    const activities = ["Grazing", "Resting", "Walking", "Feeding"];
    const id = setInterval(() => {
      setTemperature((prev) => {
        const next = +(prev + (Math.random() * 0.6 - 0.3)).toFixed(1);
        setTempHistory((p) => [...p.slice(-11), next]);
        return next;
      });

      setHeartRate((prev) => {
        const next = Math.max(40, Math.round(prev + (Math.random() * 6 - 3)));
        return next;
      });

      setActivity(activities[Math.floor(Math.random() * activities.length)]);

      // derive status from latest values after small timeout to ensure both updated
      setTimeout(() => {
        const t = temperature;
        const hr = heartRate;
        const newStatus =
          t > 40 || hr > 110
            ? "Critical"
            : t > 39.2 || hr > 90
            ? "Alert"
            : "Normal";
        setStatus(newStatus);
        setLastUpdated(new Date().toLocaleTimeString());
      }, 50);
    }, 3000);

    return () => clearInterval(id);
    // intentionally omit deps to keep interval behavior predictable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshNow = () => {
    const t = +(38 + Math.random() * 2).toFixed(1);
    const hr = Math.round(60 + Math.random() * 60);
    setTemperature(t);
    setHeartRate(hr);
    setTempHistory((p) => [...p.slice(-11), t]);
    const newStatus =
      t > 40 || hr > 110
        ? "Critical"
        : t > 39.2 || hr > 90
        ? "Alert"
        : "Normal";
    setStatus(newStatus);
    setLastUpdated(new Date().toLocaleTimeString());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-yellow-400 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button className="text-gray-800 hover:text-gray-600">
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
              <h1 className="text-xl font-bold text-gray-800">🐄 PASHUMITRA</h1>
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
              <button
                onClick={() => navigate("/cattle")}
                className="text-gray-800 hover:text-gray-600 font-medium"
              >
                Cattle
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
        {/* Welcome Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome, Uday Singh
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card) => (
            <div
              key={card.id}
              className={`${getColorClasses(
                card.color
              )} rounded-lg p-6 text-white relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="text-3xl font-bold mb-2">
                  {card.value}
                  {card.unit && ` ${card.unit}`}
                </div>
                <div className="text-sm opacity-90">{card.title}</div>
              </div>
              {/* Decorative wave line */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-white opacity-20">
                <svg viewBox="0 0 100 20" className="w-full h-full">
                  <path
                    d="M0,10 Q25,5 50,10 T100,10 L100,20 L0,20 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fertility Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Fertility Summary 🧭
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {fertilityItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-yellow-400 rounded-lg p-4 text-center text-white"
                >
                  <div className="text-lg font-bold mb-1">{item.count}</div>
                  <div className="text-xs opacity-90">{item.label}</div>
                </div>
              ))}
            </div>
            <button className="w-full bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
              View Graph
            </button>
          </div>

          {/* Cattle Health */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Cattle Health ❤️‍🩹
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div>
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-gray-500">Cow ID</div>
                  <div className="text-lg font-bold">#C-1024</div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="p-3 bg-yellow-50 rounded-lg text-center">
                    <div className="text-xs text-gray-500">🌡️</div>
                    <div className="text-sm font-semibold text-gray-800">
                      {temperature.toFixed(1)}°C
                    </div>
                    <div className="text-xs text-gray-500">Temperature</div>
                  </div>

                  <div className="p-3 bg-red-50 rounded-lg text-center">
                    <div className="text-xs text-gray-500">❤️</div>
                    <div className="text-sm font-semibold text-gray-800">
                      {heartRate}
                    </div>
                    <div className="text-xs text-gray-500">bpm</div>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg text-center">
                    <div className="text-xs text-gray-500">⚡</div>
                    <div className="text-sm font-semibold text-gray-800">
                      {activity}
                    </div>
                    <div className="text-xs text-gray-500">Activity</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div
                  className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full mt-1 text-sm font-medium ${
                    status === "Normal"
                      ? "bg-green-100 text-green-800"
                      : status === "Alert"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <span>
                    {status === "Normal"
                      ? "✅"
                      : status === "Alert"
                      ? "⚠️"
                      : "❗"}
                  </span>
                  <span>{status}</span>
                </div>

                <div className="mt-4">
                  <div className="text-xs text-gray-500">Last Updated</div>
                  <div className="text-sm text-gray-600">{lastUpdated}</div>
                </div>

                <button
                  onClick={refreshNow}
                  className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors inline-flex items-center space-x-2"
                >
                  <span>🔁</span>
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-xs text-gray-500 mb-2">
                Live Temperature (last 12 points)
              </div>
              <div className="flex items-end h-24 space-x-1">
                {tempHistory.map((t, i) => (
                  <div
                    key={i}
                    title={`${t.toFixed(1)}°C`}
                    className="bg-yellow-400 rounded-sm"
                    style={{
                      width: 8,
                      height: `${Math.max(4, Math.min(100, (t - 35) * 50))}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
