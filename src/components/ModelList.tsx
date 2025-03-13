"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Model {
  id: string;
  name: string;
  breville_link: string;
  service_price: string;
  repair_price: string;
}

export default function ModelList() {
  const [activeModel, setActiveModel] = useState<string | null>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  
  const models800Series: Model[] = [
    { 
      id: "bes810", 
      name: "BES810 Duo-Temp Pro", 
      breville_link: "https://www.breville.com/en-au/product/bes810",
      service_price: "$90",
      repair_price: "$180-$280"
    },
    { 
      id: "bes870", 
      name: "BES870 Barista Express", 
      breville_link: "https://www.breville.com/en-au/product/bes870",
      service_price: "$100",
      repair_price: "$200-$300"
    },
    { 
      id: "bes876", 
      name: "BES876 Barista Express Impress", 
      breville_link: "https://www.breville.com/en-au/product/bes876",
      service_price: "$110",
      repair_price: "$220-$320"
    },
    { 
      id: "bes878", 
      name: "BES878 Barista Pro", 
      breville_link: "https://www.breville.com/en-au/product/bes878",
      service_price: "$115",
      repair_price: "$230-$330"
    },
    { 
      id: "bes880", 
      name: "BES880 Barista Touch", 
      breville_link: "https://www.breville.com/en-au/product/bes880",
      service_price: "$125",
      repair_price: "$250-$350"
    },
  ];
  
  const models900Series: Model[] = [
    { 
      id: "bes900", 
      name: "BES900 Dual Boiler", 
      breville_link: "https://www.breville.com/en-au/product/bes920",
      service_price: "$150",
      repair_price: "$300-$400"
    },
    { 
      id: "bes920", 
      name: "BES920 Dual Boiler", 
      breville_link: "https://www.breville.com/en-au/product/bes920",
      service_price: "$150",
      repair_price: "$300-$400"
    },
    { 
      id: "bes980", 
      name: "BES980 Oracle", 
      breville_link: "https://www.breville.com/en-au/product/bes980",
      service_price: "$325",
      repair_price: "$650-$750"
    },
    { 
      id: "bes985", 
      name: "BES985 Oracle Jet", 
      breville_link: "https://www.breville.com/en-au/product/bes985",
      service_price: "$340",
      repair_price: "$680-$780"
    },
    { 
      id: "bes990", 
      name: "BES990 Oracle Touch", 
      breville_link: "https://www.breville.com/en-au/product/bes990",
      service_price: "$350",
      repair_price: "$700-$800"
    },
  ];

  // Combine all models for rotation
  const allModels = [...models800Series, ...models900Series];

  // Auto-rotate active model
  useEffect(() => {
    if (!autoRotate) return;

    // Set initial active model if none is set
    if (activeModel === null) {
      setActiveModel(allModels[0].id);
    }

    const interval = setInterval(() => {
      setActiveModel(currentActive => {
        if (currentActive === null) return allModels[0].id;
        
        // Find current index
        const currentIndex = allModels.findIndex(model => model.id === currentActive);
        // Get next index, wrapping around to 0 if at the end
        const nextIndex = (currentIndex + 1) % allModels.length;
        
        return allModels[nextIndex].id;
      });
    }, 1000); // Rotate every 1 second

    return () => clearInterval(interval);
  }, [autoRotate, activeModel, allModels]);

  // Handle manual model selection
  const handleModelClick = (modelId: string, link: string) => {
    // Stop auto-rotation when user manually selects a model
    setAutoRotate(false);
    setActiveModel(modelId === activeModel ? null : modelId);
    window.open(link, '_blank', 'noopener,noreferrer');
  };
  
  const renderModelGrid = (models: Model[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {models.map((model) => (
        <a
          key={model.id}
          href={model.breville_link}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative overflow-hidden rounded-xl p-4 transition-all duration-300 ${
            activeModel === model.id
              ? "bg-gradient-to-br from-amber-500/30 to-red-500/30 border-amber-500/50"
              : "bg-white/5 hover:bg-white/10 border-white/10"
          } border backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer`}
          onClick={(e) => {
            e.preventDefault();
            handleModelClick(model.id, model.breville_link);
          }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="w-full h-36 sm:h-48 p-2 mb-3 rounded-lg flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={`/models/${model.id.replace('bes', '')}.png`}
                  alt={model.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-center font-medium text-white/90 mb-2">
              {model.name}
            </p>
            <div className="flex flex-col items-center space-y-1 mt-1">
              <p className="text-xs text-center text-amber-300">
                <span className="font-medium">Service:</span> {model.service_price}
              </p>
              <p className="text-xs text-center text-amber-300">
                <span className="font-medium">Repair:</span> {model.repair_price}
              </p>
            </div>
          </div>
          
          {activeModel === model.id && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-red-500"></div>
          )}
        </a>
      ))}
    </div>
  );
  
  return (
    <div className="w-full space-y-10">
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500 text-center">
          800 Series
        </h3>
        <p className="text-sm text-gray-400 mb-6 text-center max-w-lg mx-auto">
          Single-boiler machines - perfect for everyday home use
        </p>
        {renderModelGrid(models800Series)}
      </div>
      
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500 text-center">
          900 Series
        </h3>
        <p className="text-sm text-gray-400 mb-6 text-center max-w-lg mx-auto">
          Dual-boiler machines - professional-grade for serious coffee enthusiasts
        </p>
        {renderModelGrid(models900Series)}
      </div>
    </div>
  );
}
