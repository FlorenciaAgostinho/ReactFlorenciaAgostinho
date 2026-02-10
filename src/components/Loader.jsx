function Loader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      <div className="skeleton h-48 w-full"></div>
      <div className="skeleton h-48 w-full"></div>
      <div className="skeleton h-48 w-full"></div>
    </div>
  );
}

export default Loader;