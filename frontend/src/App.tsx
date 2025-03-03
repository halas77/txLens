import { useState, useEffect } from "react";
import UnsupportedSite from "./pages/UnsupportedSite";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import { checkCurrentSite } from "./utils/lib";

const App = () => {
  const [isSupportedSite, setIsSupportedSite] = useState<boolean | null>(null);

  const checkSiteSupport = async () => {
    const res = await checkCurrentSite();
    setIsSupportedSite(res);
  };

  useEffect(() => {
    checkSiteSupport();
  }, []);

  if (isSupportedSite === null) {
    return (
      <div className="w-[400px] min-h-[200px] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!isSupportedSite) {
    return <UnsupportedSite />;
  }

  return isSupportedSite && <Home />;
};

export default App;
