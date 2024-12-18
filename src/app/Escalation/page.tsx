import React from "react";

const page = () => {
  return (
    <div className="px-3">
      <h1 className="text-blue-500 text-center text-3xl md:text-4xl my-4 font-semibold underline ">
        Grievance Redressal / Escalation Matrix
      </h1>

      <p className="py-5 font-semibold text-lg md:text-xl  max-w-7xl mx-auto pl-5">
        If you have a grievance, you can reach out to our Support Team for
        assistance.
      </p>

      <div className="overflow-x-auto">
        <table className="table-auto text-center  mt-10 max-w-7xl mx-auto  md:text-xl bg-blue-50">
          <thead className="">
            <tr>
              <th>Details of designation</th>
              <th>Contact Person Name</th>
              <th>Address where the physical address location</th>
              <th>Contact No.</th>

              <th>Email-ID</th>
              <th>Working hours when complainant can call</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Customer Care</td>
              <td>Himanshu Vyas</td>
              <td>
                6th Floor,Unit no. 611, Princess Business skypark, opposite
                Orbit Mall,A.B Road, Indore, Madhya Pradesh,452001
              </td>
              <td>+91 9993985722</td>
              <td>84himanshuvyas@gmail.com</td>

              <td>Mon-Sat 09AM – 05 PM</td>
            </tr>
            <tr>
              <td>Head of Customer Care</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Compliance Officer</td>
              <td>Himanshu Vyas</td>
              <td>
                6th Floor,Unit no. 611, Princess Business skypark, opposite
                Orbit Mall,A.B Road, Indore, Madhya Pradesh,452001
              </td>
              <td>+91 9993985722</td>
              <td>84himanshuvyas@gmail.com</td>
              <td>Mon-Sat 09AM – 05 PM</td>
            </tr>
            <tr>
              <td>CEO</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Principal Officer</td>
              <td>Himanshu Vyas</td>
              <td>
                6th Floor,Unit no. 611, Princess Business skypark, opposite
                Orbit Mall,A.B Road, Indore, Madhya Pradesh,452001
              </td>
              <td>+91 9993985722</td>
              <td>84himanshuvyas@gmail.com</td>
              <td>Mon-Sat 09AM – 05 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xl max-w-7xl mx-auto pt-10  ">
        The abovementioned details would facilitate the complainants to approach
        the concerned RA before filing complaint to SEBI.For more details go to:
        -
      </p>
      {/* <p className="text-xl ">
        <a
          href="https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20241209-41
"
          className="text-blue-500 underline "
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20241209-41
        </a>
      </p> */}

      <p className="text-xl max-w-7xl mx-auto py-5  ">
        We aim to resolve all grievances within 21 working days from the date of
        receipt.
      </p>
      <p className="text-xl max-w-7xl mx-auto   ">
        If your grievance is not resolved within this timeframe, you can
        escalate it to SEBI’s SCORES Platform (SEBI Complaints Redress System).
      </p>
      <p className="text-xl max-w-7xl mx-auto py-5   ">
       <span className="font-semibold"> SCORES Portal </span>: scores.sebi.gov.in.
      </p>
      <p className="text-xl max-w-7xl mx-auto   ">
        In case you are unsatisfied with the resolution provided through our
        support or the SCORES platform, you can access the Online Dispute
        Resolution (ODR) Portal.
      </p>
      <p className="text-xl max-w-7xl mx-auto py-5   ">
     <span  className="font-semibold"> ODR Portal </span>: smartodr.in. 

      </p>
    </div>
  );
};

export default page;
