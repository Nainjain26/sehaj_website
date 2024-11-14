import React from "react";

const page = () => {
  return (
    <div className="my-10">
      <h1 className="text-blue-500 text-center text-3xl md:text-4xl font-semibold underline">
        Compaint-data
      </h1>
      <p className="pt-10 font-semibold text-lg md:text-3xl  max-w-7xl mx-auto pl-5">
      ⦁ Data for the month ending – August 2024
      </p>
      <div className="overflow-x-auto">
      <table className="table-auto text-center  mt-10 max-w-7xl mx-auto  md:text-2xl bg-blue-50">
        <thead className="">
          <tr>
            <th>S.NO.</th>
            <th>Received from</th>
            <th>Pending at the end of last month</th>
            <th>Received</th>
            <th>Resolved</th>
            <th>Total Pending</th>
            <th>Pending complaints &gt; 3months</th>
            <th>Average Resolution time (in days)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Directly from Investors</td>
            <td>0</td>
            <td>0</td>
            <td>0</td> <td>0</td>
            <td>0</td>
            <td>N.A</td>
          </tr>
          <tr>
            <td>2</td>
            <td>SEBI (SCORES)</td>
            <td>0</td>
            <td>0</td>
            <td>0</td> <td>0</td>
            <td>0</td>
            <td>N.A</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Other Sources (If any)</td>
            <td>0</td>
            <td>0</td>
            <td>0</td> <td>0</td>
            <td>0</td>
            <td>N.A</td>
          </tr>
          <tr>
            <td></td>
            <td>Grand Total</td>
            <td>0</td>
            <td>0</td>
            <td>0</td> <td>0</td>
            <td>0</td>
            <td>N.A</td>
          </tr>
        </tbody>
      </table>
      </div>

      <p className="pt-10 font-semibold text-lg md:text-3xl pl-5 max-w-7xl mx-auto">
      ⦁ Trend of monthly disposal of complaints
      </p>
      <div className="overflow-x-auto">
      <table className="table-auto text-center  mt-10 max-w-7xl mx-auto  md:text-2xl bg-blue-50">
        <thead className="">
          <tr>
            <th>S.NO.</th>
            <th>Month</th>
            <th>Carried forward from previous month</th>
            <th>Received</th>
            <th>Resolved</th>
            <th>Pending</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> ⦁ </td>
            <td>Feb 2024</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td> ⦁ </td>
            <td> March 2024</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td> ⦁ </td>
            <td>April 2024</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td> ⦁ </td>
            <td>May 2024</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td> ⦁ </td>
            <td>June 2024</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td> ⦁ </td>
            <td>July 2024</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td> ⦁ </td>
            <td>August 2024</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td> ⦁ </td>
            <td>September 2024</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td> ⦁ </td>
            <td>October 2024</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td> </td>
            <td>Grand Total</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      </div>
     
      <p className="pt-10 font-semibold text-lg md:text-3xl pl-5 max-w-7xl mx-auto">
      ⦁ Trend of annual disposal of complaints
      </p>
      <div className="overflow-x-auto">
      <table className="table-auto text-center  mt-10 max-w-7xl mx-auto text-sm md:text-2xl bg-blue-50">
      <thead className="">
          <tr >
            <th>S.NO.</th>
            <th>Month</th>
            <th>Carried forward from previous month</th>
            <th>Received</th>
            <th>Resolved</th>
            <th>Pending</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td> ⦁ </td>
            <td>2024-25</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        <tr>
            <td> </td>
            <td>Grand Total</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      </div>
     
    </div>
  );
};

export default page;
