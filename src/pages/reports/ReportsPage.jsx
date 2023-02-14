import React from 'react';
import Overview from "../../components/reports/Overview";
import {BestSellingProd} from "../../components/reports/BestSellingProd";
import {BestSellingCat} from "../../components/reports/BestSellingCat";
import ProfitAndRevenue  from "../../components/reports/ProfitAndRevenue";

const ReportsPage = () => {
  return (
   <section>
    <Overview/>
    <BestSellingCat/>
    <ProfitAndRevenue/>
    <BestSellingProd/>
   </section>
  )
}

export default ReportsPage;