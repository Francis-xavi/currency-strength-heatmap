import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [pairs, setPairs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedPairs = JSON.parse(localStorage.getItem("selectedPairs")) || [];
    setPairs(savedPairs);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Currency Strength Heatmap</h1>

      {/* Show selected pairs */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Selected Pairs:</h2>
        <ul className="list-disc list-inside">
          {pairs.map((pair, index) => (
            <li key={index}>{pair}</li>
          ))}
        </ul>
      </div>

      {/* Navigation back */}
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
}