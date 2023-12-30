import ICOTokenBarchart from "../Barchart/Barchat";
import ICOPieChart from "../PieChart/PieChart";



const Dashboard: React.FC = () => {
    return (
      <>
        <div className="">
          <div className="lg:flex lg:justify-between justify-center items-center gap-5">
            <div className="lg:flex lg:flex-col text-[#555764] w-50">
              <span className="mb-8">ICO TOKEN (SUPPLY & DEMAND)</span>
              <ICOTokenBarchart />
            </div>
  
            <div className="lg:flex lg:flex-col w-60 lg:grid-cols-4 lg:justify-self-end">
              <span className="mb-8">TOKEN DISTRIBUTION</span>
              <ICOPieChart />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Dashboard;
  