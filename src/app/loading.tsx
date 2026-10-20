const LoadingPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <span className="loading loading-spinner loading-lg text-red-600"></span>

      <h2 className="mt-4 text-2xl font-bold text-red-600">
        Loading...
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Please wait while we prepare your page.
      </p>
    </div>
  );
};

export default LoadingPage;