import { useState } from "react";
import { Button } from "./components/ui/Button";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl">Buttons</h2>

        <div className="flex items-center justify-center gap-8">
          <p>Buttons with Loading state</p>
          <Button
            size="small"
            onClick={() => setLoading((prev) => !prev)}
            loading={loading}
          >
            Small
          </Button>

          <Button
            size="default"
            onClick={() => setLoading((prev) => !prev)}
            loading={loading}
          >
            Default
          </Button>

          <Button
            size="large"
            onClick={() => setLoading((prev) => !prev)}
            loading={loading}
          >
            Large
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
