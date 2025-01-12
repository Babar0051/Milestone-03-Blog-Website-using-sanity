import Image from 'next/image';
const Footer = () => {
  return (
    <div>
      <footer className="bg-zinc-800 text-white font-sans">
        <div className="container px-5 py-8 mx-auto flex items-center flex-wrap sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center justify-center sm:justify-start text-white mb-4 sm:mb-0">
            <div className="w-10 h-10 bg-white rounded-full">
              <Image
                src="/images/techlogo.png"
                alt="Tech Logo"
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
            </div>
            <span className="ml-3 text-xl">FutureTech Blog</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 - created by Babar Ahmed
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* Social Icons */}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
