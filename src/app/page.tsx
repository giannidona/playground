import { CodeBox } from "./componentes/CodeBox";
import { PreviewBox } from "./componentes/PreviewBox";

export default function Home() {
  return (
    <main className="flex w-full justify-between">
      <section className="w-[100%]">
        <CodeBox />
      </section>
      <section className="w-[100%]">
        <PreviewBox />
      </section>
    </main>
  );
}
