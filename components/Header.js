import Image from "next/image";
import header1 from "../public/images/header.svg";


export default function Header() {
  return (
    <header className="bg-primary py-20">
      <div className="container justify-center items-center grid md:grid-cols-2 gap-20">
        <div className="text-white mt-4 mb-10">
          <h3 className="text-darkviolet font-bold">HIMTI</h3>
          <h1 className="text-4xl font-bold">
            Ungu yang megah
          </h1>
          <h1 className="text-4xl font-bold">
            Ungu Informatika!
          </h1>
          <p className="mt-4 mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            perferendis illo, eum soluta odio dolore quasi, molestiae delectus
            nemo vitae totam est libero beatae nisi alias nostrum qui eligendi?
          </p>
          <a
            href="#"
            className="bg-gradient-to-r from-violet to-fuchsia inline-block py-4 px-8 rounded-full"
          >
            Get more details
          </a>
        </div>

        <div className="order-first md:order-last py-10">
          <Image src={header1} alt="" />
        </div>
      </div>
    </header>
  );
}
