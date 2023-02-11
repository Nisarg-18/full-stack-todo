const TodoDisplay = (todoData) => {
  return (
    <div>
      {todoData && (
        <div className="lg:flex lg:items-center lg:justify-between mb-5">
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-xl leading-7 text-gray-900 sm:truncate sm:tracking-tight">
              {todoData.title} h1
            </h3>
          </div>
          <div className="mt-2 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View
              </button>
            </span>

            <span className="ml-3 hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Edit
              </button>
            </span>

            <span className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Delete
              </button>
            </span>

            <div className="relative ml-3 sm:hidden">
              <div
                className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="mobile-menu-button"
                tabIndex="-1"
              >
                <div
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="mobile-menu-item-0"
                >
                  Edit
                </div>
                <div
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="mobile-menu-item-1"
                >
                  View
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoDisplay;
