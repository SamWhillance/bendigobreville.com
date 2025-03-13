"use client";

import { useState } from "react";
import Image from "next/image";

interface Model {
  id: string;
  name: string;
  breville_link: string;
}

export default function ModelList() {
  const [activeModel, setActiveModel] = useState<string | null>(null);
  
  const models: Model[] = [
    { id: "bes810", name: "BES810 Duo-Temp Pro", breville_link: "https://www.breville.com/en-au/product/bes810" },
    { id: "bes870", name: "BES870 Barista Express", breville_link: "https://www.breville.com/en-au/product/bes870" },
    { id: "bes876", name: "BES876 Barista Express Impress", breville_link: "https://www.breville.com/en-au/product/bes876" },
    { id: "bes878", name: "BES878 Barista Pro", breville_link: "https://www.breville.com/en-au/product/bes878" },
    { id: "bes880", name: "BES880 Barista Touch", breville_link: "https://www.breville.com/en-au/product/bes880" },
    { id: "bes900", name: "BES900 Dual Boiler", breville_link: "https://www.breville.com/en-au/product/bes920" },
    { id: "bes920", name: "BES920 Dual Boiler", breville_link: "https://www.breville.com/en-au/product/bes920" },
    { id: "bes980", name: "BES980 Oracle", breville_link: "https://www.breville.com/en-au/product/bes980" },
    { id: "bes985", name: "BES985 Oracle Jet", breville_link: "https://www.breville.com/en-au/product/bes985" },
    { id: "bes990", name: "BES990 Oracle Touch", breville_link: "https://www.breville.com/en-au/product/bes990" },
  ];
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
              setActiveModel(model.id === activeModel ? null : model.id);
              if (model.id !== activeModel) {
                window.open(model.breville_link, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <div className="flex flex-col items-center justify-center h-full w-full">
              <div className="w-48 h-48 p-2 mb-3 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="relative w-48 h-48">
                  <Image
                    src={`/models/${model.id.replace('bes', '')}.png`}
                    alt={model.name}
                    fill
                    sizes="160px"
                    className={`object-contain`}
                  />
                </div>
              </div>
              <p className="text-sm text-center font-medium text-white/90">
                {model.name}
              </p>
            </div>
            
            {activeModel === model.id && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-red-500"></div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
