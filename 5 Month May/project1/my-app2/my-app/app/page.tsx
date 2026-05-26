import Home from "../component1/Home";
import Homeb from "../component1/Homeb";
import Homec from "../component1/Homec";

export default function Page() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Next.js Hooks Examples</h1>
      <Home />
      <Homeb />
      <Homec />
    </main>
  );
}
