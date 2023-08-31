import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <Image
      alt="logo"
      className="cursor-pointer"
      height={height}
      width={width}
      src="/images/logo.png"
    />
  );
};

export default Logo;
