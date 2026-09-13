import Logo from '../../../public/DevStack-resource/assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto w-[90%] max-w-7xl py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
                <img src={Logo} alt="Dev Stack Logo" className="h-8 w-auto" />
            </div>

            <p className="mt-3 max-w-sm text-xs leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software. </p>

            {/* Social Links */}
            <div className="mt-4 flex gap-5 text-xs font-medium text-gray-700">
              <a href="#" className="transition-colors hover:text-pink-500">GitHub</a>
              <a href="#" className="transition-colors hover:text-pink-500">Twitter</a>
              <a href="#" className="transition-colors hover:text-pink-500">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <ul className="mt-4 space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li> <a href="#" className="hover:text-gray-900"> Technologies </a> </li>
              <li> <a href="#" className="hover:text-gray-900">Projects </a> </li>
            </ul>
          </div>

          {/* Company + Legal */}
          <div className="grid grid-cols-2 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
                Company
              </h3>

              <ul className="mt-4 space-y-2 text-xs text-gray-500">
                <li> <a href="#" className="hover:text-gray-900">  About </a>  </li>
                <li> <a href="#" className="hover:text-gray-900"> Contact </a> </li>
                <li> <a href="#" className="hover:text-gray-900"> Careers  </a> </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
                Legal
              </h3>

              <ul className="mt-4 space-y-2 text-xs text-gray-500">
                <li> <a href="#" className="hover:text-gray-900">  Privacy Policy</a> </li>
                <li> <a href="#" className="hover:text-gray-900"> Terms of Service </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-100 pt-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DevStack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-700"> Privacy </a>
            <a href="#" className="hover:text-gray-700">Terms </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;