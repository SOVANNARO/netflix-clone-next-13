import Image from "next/image";
import logoImage from "../../../public/images/logo.png";

const Auth = () => {
  return (
      <div className="relative h-full w-full bg-[url('../../public/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black h-full w-full lg:bg-opacity-50">
          <nav className="px-20 py-5">
            <Image src={logoImage} width={200} height={200} alt="test"/>
          </nav>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-4xl font-semibold text-white">Sign In</h2>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Auth;