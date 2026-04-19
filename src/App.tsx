import { useState } from "react";
import { Button } from "./components/ui/Button";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl">Buttons</h2>
        <div>
          <p>Button with Loading state</p>
          <Button onClick={() => setLoading((prev) => !prev)} loading={loading}>
            Submit
          </Button>
        </div>
        <div>
          <p>Button without Loading state</p>
          <Button variant="secondary">Submit</Button>
        </div>
        <button
          className="cursor-pointer rounded-md border bg-gray-200 p-2"
          type="button"
          onClick={() => setLoading((prev) => !prev)}
        >
          Toggle Loading
        </button>
      </div>
    </main>
  );
}

export default App;
