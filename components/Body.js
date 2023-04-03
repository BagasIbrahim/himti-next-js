import body from "../public/images/logo_himti.jpg";
import Image from "next/image";

export default function Body() {
  return (
    <section className="bg-primary py-20">
      <div className="container justify-center">
        <div className="text-white mb-10">
          <h1 className="text-4xl font-bold text-center">Knowing Leaders</h1>
        </div>
        <div className="flex pt-5">
          <div class="max-w-xs rounded-xl shadow-md bg-white mt-6 mx-5 mb-3">
            <div class="p-4 text-center">
              <div>
                <img
                  class="object-cover w-full h-48"
                  src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
                  alt="image"
                />
                <h2 class="text-base font-bold text-gray-800 pt-2">Si yasha</h2>
                <p class="text-gray-600">Ristek bagian Front End</p>
              </div>
            </div>
          </div>
          <div class="max-w-xs rounded-xl shadow-md bg-white my-3 mr-3">
            <div class="p-4 text-center">
              <div>
                <img
                  class="object-cover w-full h-48"
                  src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
                  alt="image"
                />
                <h2 class="text-base font-bold text-gray-800 pt-2">Si yasha</h2>
                <p class="text-gray-600">Ristek bagian Front End</p>
              </div>
            </div>
          </div>
          <div class="max-w-xs rounded-xl shadow-md bg-white my-3 ml-3">
            <div class="p-4 text-center">
              <div>
                <img
                  class="object-cover w-full h-48"
                  src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
                  alt="image"
                />
                <h2 class="text-base font-bold text-gray-800 pt-2">Si yasha</h2>
                <p class="text-gray-600">Ristek bagian Front End</p>
              </div>
            </div>
          </div>
          <div class="max-w-xs rounded-xl shadow-md bg-white mt-6 mx-5 mb-3">
            <div class="p-4 text-center">
              <div>
                <img
                  class="object-cover w-full h-48"
                  src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
                  alt="image"
                />
                <h2 class="text-base font-bold text-gray-800 pt-2">Si yasha</h2>
                <p class="text-gray-600">Ristek bagian Front End</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white pt-10">
          <p className="text-xl font-bold text-center tracking-wide">
            - Together we Make sure all collage student -
          </p>
          <p className="text-xl font-bold text-center tracking-wide">
            Informatics Engineering get all they aspiring and also sharing
            usefull information or view for each other
          </p>
          <Image className= "mt-20 mx-auto" src={body} alt="" />
        </div>
        <div className="bg-gradient-to-r from-violet to-fuchsia my-10 rounded-3xl">
          <h1 className="text-3xl font-bold text-center text-white">
            Our Working Divison
          </h1>
          <p className="text-center text-white pt-6 pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          
        </div>
      </div>
    </section>
  );
}
