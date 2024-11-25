import React from "react";

type AlertProps = {
  setAlert: (value: boolean) => void; 
};

const Alert: React.FC<AlertProps> = ({ setAlert }) => {
  const handleAgree = () => {
    setAlert(false); 
  };

  const handleDisagree = () => {
    setAlert(true); 
  };

  return (
    <>
      <div className="w-screen h-screen fixed z-[4000] bg-black   opa flex items-center justify-center">

        <div className="max-w-[1240px] w-full bg-gray-200 rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]">
          <h1 className="text-red-500 text-center md:my-10 my-5 text-4xl font-semibold">
            ALERT
          </h1>

          
          <p className="max-w-7xl mx-auto  text-sm font-semibold mt-7">
            1. Please do not share your Demat Account details with our employees
            or any executive.
          </p>
          <p className="max-w-7xl mx-auto   text-sm font-semibold mt-3">
            2. Please do not trade tips & recommendations other than through
            our SMS portal. Please strictly follow entry and exit guidance
            provided by the company in every recommendation. If you do not, the
            company cannot take responsibility, and the responsibility for any
            loss will be your own.
          </p>
          <p className="max-w-7xl mx-auto  text-sm font-semibold mt-3">
            3. Minors and senior citizens above 60 years old should not pay any
            amount to our company or anyone associated with it.
          </p>
          <p className="max-w-7xl mx-auto   text-sm font-semibold mt-3">
            4. Only make payments to the company account listed on our official
            website. The company will not take responsibility for any payments
            made otherwise.
          </p>
          <p className="max-w-7xl mx-auto   text-sm font-semibold mt-3">
            5. Please ensure you review the information on our website before
            making any payments.
          </p>

         
          <p className="max-w-7xl mx-auto  text-sm font-semibold mt-5">
            1. कृपया अपना डीमेट खाता हमारे कर्मचारियों या किसी कार्यकारी के साथ
            साझा न करें।
          </p>
          <p className="max-w-7xl mx-auto   text-sm font-semibold mt-3">
            2. कृपया हमारे एसएमएस पोर्टल के अलावा टिप्स और सिफारिशों का व्यापार
            न करें और कंपनी द्वारा आपको दिए गए स्टॉप लॉस और लक्ष्यों का सख्ती से
            पालन करें। अगर आप ऐसा नहीं कर सकते तो कंपनी कोई जिम्मेदारी नहीं ले
            सकती. नुकसान की जिम्मेदारी आपकी स्वयं की होगी।
          </p>
          <p className="max-w-7xl mx-auto   text-sm font-semibold mt-3">
            3. नाबालिग हमारी कंपनी या हमारी कंपनी के किसी भी व्यक्ति को कोई राशि
            का भुगतान नहीं करते हैं। 60 वर्ष से अधिक उम्र के वरिष्ठ नागरिक भी
            हमारी कंपनी को कोई राशि नहीं देते हैं।
          </p>
          <p className="max-w-7xl mx-auto   text-sm font-semibold mt-3">
            4. कृपया किसी भी राशि का भुगतान न करें बल्कि कंपनी खाते का भुगतान
            करें जिसका उल्लेख हमारी कंपनी की वेबसाइट पर किया गया है। अगर आप ऐसा
            करते हैं तो कंपनी कोई ज़िम्मेदारी नहीं लेगी.
          </p>
          <p className="max-w-7xl mx-auto   text-sm font-semibold mt-3">
            5. कृपया हमारी वेबसाइट पर जाने के बाद भुगतान करें।
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 max-w-7xl mx-auto mt-5">
            <button
              className="p-3 border text-white bg-blue-600 md:text-2xl hover:bg-blue-500 font-semibold rounded-2xl"
              onClick={handleAgree}
            >
              Agree
            </button>
            <button
              className="p-3 border text-white bg-red-700 md:text-2xl hover:bg-red-600 font-semibold rounded-2xl"
              onClick={handleDisagree}
            >
              Disagree
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
