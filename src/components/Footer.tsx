function Footer() {
  return (
    <footer className="bg-white rounded-lg m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a className="hover:underline">Dev Lords™</a>. All Rights
          Reserved.
        </span>
        <span className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Developed by Sven, Tilen and Vili
        </span>
      </div>
    </footer>
  );
}

export default Footer;
