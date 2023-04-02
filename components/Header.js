import Image from "next/image";
import header from "../public/images/header.svg";

export default function Header() {
  return (
    <header className="bg-primary py-20">
      <div className="container justify-center items-center grid md:grid-cols-2 gap-20">
        <div className="text-white mt-4 mb-10">
          <h3 className="text-violet">HIMTI</h3>
          <h1 className="text-4xl font-bold">
            Yang Paling Ungu Ungu Informatika!
          </h1>
          <p className="mt-4 mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            perferendis illo, eum soluta odio dolore quasi, molestiae delectus
            nemo vitae totam est libero beatae nisi alias nostrum qui eligendi?
          </p>
          <a
            href="#"
            className="bg-violet inline-block py-4 px-8 font-semibold hover:bg-transparent border-transparent hover:border-white border-2 transition-all delay-75 rounded-3xl"
          >
            Get more details
          </a>
        </div>

        <div className="order-first md:order-last py-10">
          <Image src={header} alt="" />
        </div>
      </div>
    </header>
  );
}
