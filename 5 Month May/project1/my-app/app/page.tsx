import Example1 from "../components/Example1";
import Example2 from "../components/Example2";
import Example3 from "../components/Example3";

export default function Page() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Next.js Hooks Examples</h1>
      <Example1 />
      <Example2 />
      <Example3 />
    </main>
  );
}
