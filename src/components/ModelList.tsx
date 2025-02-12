const ModelList = () => {
  const models = [
    "BES810 Duo-Temp Pro",
    "BES870 Barista Express",
    "BES876 Barista Express Impress",
    "BES878 Barista Pro",
    "BES880 Barista Touch",
    "BES900 Dual Boiler",
    "BES920 Dual Boiler",
    "BES980 Oracle",
    "BES985 Oracle Jet",
    "BES990 Oracle Touch",
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-12 md:justify-center">
        {models.map((model) => (
          <a
            href={`https://wa.me/61468385315?text=${encodeURIComponent(
              "Hi, I need help with my " + model
            )}. My location is...`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              key={model}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors"
            >
              {model}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ModelList;
