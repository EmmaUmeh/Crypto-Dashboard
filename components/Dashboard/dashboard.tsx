import ICOTokenBarchart from "../Barchart/Barchat";
import BuyYuchain from "../BuyYuchain";
import ICOPieChart from "../PieChart/PieChart";
import YuchainBalance from "../YuchainTokenBalance/YuchainBalance";



const Dashboard: React.FC = () => {
    return (
      <>
        <div className="lg:pl-28 lg:pr-5 relative top-32">
          <div className="lg:flex lg:justify-between justify-center gap-52">
            <div className="lg:flex lg:flex-col text-[#555764] w-20">
              <span className="mb-8 lg:ml-10 text-nowrap">YUCHAIN TOKEN (SUPPLY & DEMAND)</span>
              <ICOTokenBarchart />
            </div>
  
            <div className="lg:flex lg:flex-col w-50 lg:grid-cols-4 lg:justify-self-end">
              <span className="mb-8">TOKEN DISTRIBUTION</span>
              <ICOPieChart />

              <div className="mt-7">
                <ul className="lg:flex items-center text-nowrap gap-8 text-sm text-[#555764]">
                    <div>
                    <li className="flex gap-5 justify-between">
                    Crowd Sales
                    <span>14%</span>
                    </li>
                    <li className="flex gap-5 justify-between">
                      Team
                    <span>14%</span>
                    </li >
                    <li className="flex gap-5 justify-between">
                      Advisors
                      <span>14%</span>
                    </li>
                    </div>

                    <div>
                    <li className="flex justify-between gap-5">
                    Crowd Sales
                    <span>14%</span>
                    </li>
                    <li className="flex gap-5 justify-between">
                      Team
                    <span>14%</span>
                    </li >
                    <li className="flex gap-5 justify-between">
                      Advisors
                      <span>14%</span>
                    </li>
                    </div>
                </ul>
              </div>
            </div>
          </div>

            <div className="mt-5">
                <BuyYuchain />
            </div>


            <div className="mt-10">
               <span className="text-sm"> YUCHAIN TOKEN BALANCE</span>
               <div className="mt-5"><YuchainBalance /></div>
            </div>
        </div>
      </>
    );
  };
  
  export default Dashboard;
  