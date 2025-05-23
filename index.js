import React from "react";
import { CarIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="max-w-6xl mx-auto grid gap-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Welcome to CABIN CAR RENTAL
        </h1>

        <div className="bg-white shadow-xl rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Find a Car</h2>
            <input placeholder="Enter location" className="border p-2 rounded w-full" />
            <div className="flex gap-4">
              <input type="date" className="flex-1 border p-2 rounded" />
              <input type="time" className="flex-1 border p-2 rounded" />
            </div>
            <div className="flex gap-4">
              <input type="date" className="flex-1 border p-2 rounded" />
              <input type="time" className="flex-1 border p-2 rounded" />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded">Search Cars</button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-4 border rounded shadow">
              <CarIcon className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-semibold text-lg">Economy Cars</h3>
                <p className="text-sm text-gray-500">Affordable and fuel-efficient</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded shadow">
              <CarIcon className="w-6 h-6 text-green-500" />
              <div>
                <h3 className="font-semibold text-lg">Luxury Vehicles</h3>
                <p className="text-sm text-gray-500">Style, comfort, and performance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          &copy; 2025 CABIN CAR RENTAL. All rights reserved.
        </div>
      </div>
    </div>
  );
}