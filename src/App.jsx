const App = () => {
  return (
    <>
      <div className="grid bg-gray-100 lg:grid-cols-2 2xl:grid-cols-5">
        <div className="mx-auto max-w-md px-8 py-12 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img src="/img/logo.svg" alt="Workcation" className="h-10" />
            <img
              src="/img/beach-work.jpg"
              alt="Woman workcationing on the beach"
              className="mt-6 rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
            />
            <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-indigo-500"> Take advantage of it. </span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you&apos;re
              not on vacation.
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a className="btn btn-primary" href="#">
                Book your escape
              </a>
              <a className="btn btn-secondary" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block 2xl:col-span-3">
          <img
            src="/img/beach-work.jpg"
            alt="Woman workcationing on the beach"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default App;
