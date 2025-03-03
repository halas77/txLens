import Summary from "../components/Summary";
import Loading from "../components/Loading";
import Header from "../components/Header";
// import Banner from "../components/Banner";
import Footer from "../components/Footer";
// import { mockData } from "../utils/constants";
import { useEffect, useState } from "react";
import { fetchSummary, getUrlFromChrome } from "../utils/lib";

const Home = () => {
  const [txData, setTxData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = await getUrlFromChrome();
      if (url) {
        const data = await fetchSummary(url);
        setTxData(data);
        setIsLoading(false);
      } else {
        setTxData({ data: "No data available." });
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[400px] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 min-h-screen flex flex-col">
      <Header setIsLoading={setIsLoading} />

      {isLoading ? (
        <div className="flex-grow flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <>
          {/* {mockData.riskLevel !== "low" && <Banner />} */}
          <Summary summary={txData?.data?.summary} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Home;
