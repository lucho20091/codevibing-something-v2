const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-600">
            About
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600">
            Contact
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600">
            Terms
          </a>
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ShopMini. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 