import { useState } from "react";
import useNavigate from "react-router-dom";


const availablepairs = ["EURUSD", "GBPUSD", "USDJPY", "USDCHF", "USDCAD", "AUDUSD", "NZDUSD",];

export const Welcome = () => {

    const [pair1, setpair1] = useState('');
    const [pair2, setpair2] = useState('');
    const navigate = useNavigate();

    const handleContinue = () => {
        if (pair1 && pair2 && pair1 !== pair2) {
            const selectedPairs = [pair1, pair2];
            localStorage.setItem("selectedPairs", JSON.stringify(selectedPairs));
            navigate("/dashboard");
        }
    }

}

return (
    <div className="welcome-container">
        <h1 className="welcome-title">Welcome to Currency Strength Heatmap</h1>
        <p>select your currency pairs</p>

        <select
        value={pair1}
        onChange={(e) => setPair1(e.target.value)}
        className="mb-3 p-2 border rounded w-60"
      >
        <option value="">-- Select First Pair --</option>
        {availablePairs.map((pair) => (
          <option key={pair} value={pair}>
            {pair}
          </option>
        ))}
      </select>

      {/* Pair 2 Dropdown */}
      <select
        value={pair2}
        onChange={(e) => setPair2(e.target.value)}
        className="mb-6 p-2 border rounded w-60"
      >
        <option value="">-- Select Second Pair --</option>
        {availablePairs.map((pair) => (
          <option key={pair} value={pair}>
            {pair}
          </option>
        ))}
      </select>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!pair1 || !pair2 || pair1 === pair2}
        className={`px-6 py-2 rounded text-white font-semibold ${
          !pair1 || !pair2 || pair1 === pair2
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Continue
      </button>
    </div>
    
    
)