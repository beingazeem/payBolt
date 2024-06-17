const Pricing = () => {
  return (
    <main className="max-w-6xl mx-auto pb-36 px-8 mt-32 w-full">
      <div className="max-w-md mx-auto mb-14">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
          <span className="text-indigo-600">Flexible</span> Pricing Plans For Businesses Of All Sizes
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Choose a plan that scales with your business.
        </p>
      </div>

      <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
        <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300 text-gray-500">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
              alt=""
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold ">Basic</span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $&thinsp;
                </span>
                <span className="text-3xl font-bold">15 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Basic UPI <span className="text-black">QR Collections</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Real-time <span className="text-black">Analytics</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                <span className="text-black">Email</span> Support
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                <span className="text-black">Secure</span> Transactions
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-primary rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Choose Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
            />
          </a>
        </div>

        <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
              alt=""
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-3xl font-semibold text-white">
                Standard Plan
              </span>
              <span>
                <span className="font-medium text-xl align-top">$&thinsp;</span>
                <span className="text-3xl font-bold text-white">24 </span>
              </span>
              <span className="font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-10 font-medium text-xl">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">
                All Basic Plan <span className="text-white">Features</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">
                Dynamic QR <span className="text-white">Collections</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">
                <span className="text-white">Money </span>Transfer
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">
                <span className="text-white">Priority Email </span>Support
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-primary rounded-xl py-6 px-4 text-center text-white text-2xl"
          >
            Choose Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
            />
          </a>
        </div>

        <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300 text-gray-500">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
              alt=""
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold text-red">
                Premium Plan
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $&thinsp;
                </span>
                <span className="text-3xl font-bold">35 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                All Standard Plan <span className="text-black">Features</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Payout <span className="text-black">Service</span>
              </span>
            </li>
            <li className="flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                <span className="text-black">POS</span> Devices
              </span>
            </li>
            <li className="flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                <span className="text-black">24/7 </span>Support
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-primary rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Choose Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
            />
          </a>
        </div>
      </div>
    </main>
  );
};
export default Pricing;
