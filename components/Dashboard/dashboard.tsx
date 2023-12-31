import ICOTokenBarchart from "../Barchart/Barchat";
import BuyYuchain from "../BuyYuchain/BuyYuchain";
import ICOPieChart from "../PieChart/PieChart";



const Dashboard: React.FC = () => {
    return (
      <>
        <div className="relative top-32">
          <div className="lg:flex lg:justify-between justify-center gap-52">
            <div className="lg:flex lg:flex-col text-[#555764] w-50">
              <span className="mb-8 lg:ml-10">ICO TOKEN (SUPPLY & DEMAND)</span>
              <ICOTokenBarchart />
            </div>
  
            <div className="lg:flex lg:flex-col w-60 lg:grid-cols-4 lg:justify-self-end">
              <span className="mb-8">TOKEN DISTRIBUTION</span>
              <ICOPieChart />
            </div>
          </div>

            <div className="mt-5">
                <BuyYuchain />
            </div>
        </div>
      </>
    );
  };
  
  export default Dashboard;
  