import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-8 h-8 rounded-full mr-3 relative">
      <Image
        src="/logo.jpg"
        alt="Logo"
        fill
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default Logo;
