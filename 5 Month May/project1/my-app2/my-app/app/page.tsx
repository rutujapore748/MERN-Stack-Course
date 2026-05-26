import Home1 from "../component1/Home1";
import Home2 from "../component1/Home2";
import Home3 from "../component1/Home3";

export default function Page() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Next.js Hooks Examples</h1>
      <Home1 />
      <Home2 />
      <Home3 />
    </main>
  );
}
