import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Image height={50} width={50} alt="logo" src="/logo.svg" />
    </div>
  );
};
