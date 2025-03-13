"use client";

import { useState } from "react";

interface Model {
  id: string;
  name: string;
}

export default function ModelList() {
  const [activeModel, setActiveModel] = useState<string | null>(null);
  
  const models: Model[] = [
    { id: "bes920", name: "BES920 Dual Boiler" },
    { id: "bes980", name: "BES980 Oracle" },
    { id: "bes985", name: "BES985 Oracle Jet" },
    { id: "bes990", name: "BES990 Oracle Touch" },
    { id: "bes878", name: "BES878 Barista Pro" },
    { id: "bes880", name: "BES880 Barista Touch" },
  ];
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {models.map((model) => (
          <button
            key={model.id}
            className={`relative overflow-hidden rounded-xl p-4 transition-all duration-300 ${
              activeModel === model.id
                ? "bg-gradient-to-br from-amber-500/30 to-red-500/30 border-amber-500/50"
                : "bg-white/5 hover:bg-white/10 border-white/10"
            } border backdrop-blur-sm`}
            onClick={() => setActiveModel(model.id === activeModel ? null : model.id)}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-12 h-12 mb-3 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className={`w-6 h-6 ${
                    activeModel === model.id ? "text-amber-400" : "text-white/70"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <p className="text-sm text-center font-medium text-white/90">
                {model.name}
              </p>
            </div>
            
            {activeModel === model.id && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-red-500"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
