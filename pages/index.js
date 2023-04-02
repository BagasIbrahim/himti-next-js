import Header from "@/components/Header";
import Body from "@/components/Body";
import { Layouts } from "@/components/Layouts";

export default function Home() {
  return (
    <>
      <Layouts title="HIMTI | Home">
        <Header />
        <Body />
      </Layouts>

      {/* <h1 className="text-xs font-bold underline">Hello world!</h1> */}
    </>
  );
}
