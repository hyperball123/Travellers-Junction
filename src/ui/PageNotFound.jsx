import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white border border-gray-300 rounded-lg p-12 max-w-3xl w-full text-center">
        <h1 className="mb-8">
          The page you are looking for could not be found 😢
        </h1>
        <button
          onClick={moveBack}
          className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
