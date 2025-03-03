const Footer = () => {
  return (
    <footer className=" bottom-4 md:bottom-8 text-gray-200/70 text-xs mt-16 text-center">
      © {new Date().getFullYear()} Powered by{" "}
      <a
        href="https://github.com/halas77"
        target="_blank"
        rel="noreferrer"
        className="text-blue-300 hover:underline"
      >
        {" "}
        halas77 🇪🇹
      </a>
      .
    </footer>
  );
};

export default Footer;
