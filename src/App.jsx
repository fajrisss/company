/* eslint-disable no-unused-vars */
import { BiBook } from "react-icons/bi";
import {
  BsPencilFill,
  BsEyeglasses,
  BsGoogle,
  BsDiscord,
  BsReddit,
} from "react-icons/bs";
import { AiFillSound } from "react-icons/ai";
import { FaAirbnb } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";

  return (
    <div className="">
      {/* -----------------HEADER SECTION-------------- */}
      <header
        className="
          bg-purple-950 
          flex
          justify-between
          items-center 
          p-3 
          sticky 
          top-0
          z-50
        "
      >
        {/* -----------HEADER CONTENT----------- */}
        <div className="flex gap-2 p-3 ">
          <button
            className="
              w-3 h-3 
              bg-yellow-400 
              rounded-xl
            "
          ></button>

          <button
            className="
              w-3 h-3 
              bg-green-500 
              rounded-xl
            "
          ></button>

          <button
            className="
              w-3 h-3 
              bg-red-600 
              rounded-xl
            "
          ></button>
        </div>

        <div className="flex justify-center gap-2 text-white font-medium p-3">
          <span>OFF</span>

          <input type="checkbox" id="toggleSwitch" className="hidden" />

          <label htmlFor="toggleSwitch">
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? null : toggleClass)
                }
              ></div>
            </div>
          </label>

          <span>ON</span>
        </div>
      </header>

      {/* ------------------HOME SECTION------------------ */}
      <div
        className="
          min-h-screen 
          bg-purple-800 
          flex 
          flex-col 
          md:flex-row 
          justify-center 
          items-center 
          gap-16 
          md:gap-8 
          px-8 
          py-12
        "
      >
        {/* ----------HOME CONTENT----------- */}
        <div
          className="
            text-white 
            flex 
            flex-col 
            gap-5 
            md:w-1/2 
            w-full 
            text-center 
            md:text-left
          "
        >
          {/* ---------HOME JUDUL---------- */}
          <h1 className="font-bold text-3xl">
            A Trought - Provoking
            <br />
            <span
              className="
                text-transparent 
                bg-gradient-to-r 
                from-yellow-300  
                to-red-400 
                bg-clip-text 
                font-black 
                text-5xl
              "
            >
              HEADLINE
            </span>
          </h1>

          {/* ------------HOME DESCRIPTION--------- */}
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            rerum placeat, praesentium ullam officia quidem reprehenderit
          </p>
          <div className="flex flex-col md:flex-row gap-7">
            <form
              action="email"
              className="
                border-b 
                border-b-yellow-400 "
            >
              <input
                type="email"
                id="email"
                placeholder="insert your email"
                className="
                bg-transparent 
                focus:outline-none 
                placeholder:text-yellow-600 
                text-yellow-400
                ml-2
                invalid:text-yellow-600
                text-center
                sm:text-left
              "
              />
            </form>
            <button
              type="button"
              className="
                bg-gradient-to-r 
                from-pink-500 
                to-yellow-500 
                hover:underline  
                transition-all t
                ext-black 
                py-1.5 
                px-2.5 
                rounded
              "
            >
              sign up
            </button>
          </div>
        </div>

        {/* -------HOME IMAGE-------- */}
        <div
          className="
            text-center 
            bg-purple-400  
            h-80 md:h-96 
            w-80 md:w-96 
            flex 
            flex-col 
            justify-center 
            items-center 
            rounded-full 
            border-4 
            bg-blend-multiply
            hover:border-yellow-400
            hover:scale-110
            animate-pulse
            transition-all
          "
          style={{
            backgroundImage:
              "url(" + "https://source.unsplash.com/384x384?company" + ")",
          }}
        ></div>
      </div>

      {/* -----------------SKILL SECTION------------------ */}

      {/* ---------------------SERVICE SECTION------------------------- */}
      <div
        className="
          h-max 
          bg-yellow-400 
          flex 
          flex-col 
          gap-10 
          justify-center 
          items-center 
          py-12
        "
      >
        <div
          className=" 
            flex 
            flex-col 
            items-center 
            gap-2
          "
        >
          <p className="text-xl font-medium italic">services</p>

          <h1
            className="
              font-sans 
              text-5xl 
              font-bold 
              text-transparent 
              bg-gradient-to-r 
              from-red-400 
              to-purple-500 
              bg-clip-text
            "
          >
            What We Over
          </h1>
        </div>

        {/* ---------------- SERVICE CARD SECTION---------------- */}
        <div
          className="
            flex 
            flex-col 
            md:flex-row 
            gap-7 md:gap-3 
            w-11/12 
            pb-5
          "
        >
          <div
            className=" 
              flex 
              flex-col 
              justify-center 
              items-center 
              text-center 
              p-5 
              border 
              border-purple-700 
              shadow-lg 
              rounded-md 
              shadow-purple-800 
              bg-red-200
            "
          >
            <BiBook className="mb-2 text-5xl text-purple-700" />
            <h1 className="mb-1 text-xl font-medium">Learning Tech</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>

          <div
            className=" 
              flex 
              flex-col 
              justify-center 
              items-center 
              text-center 
              p-5 
              border 
              border-purple-700 
              shadow-lg 
              rounded-md 
              shadow-purple-800 
              bg-red-200
            "
          >
            <BsPencilFill className="mb-2 text-5xl text-purple-700" />
            <h1 className="mb-1 text-xl font-medium">Write Method</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>

          <div
            className=" 
              flex 
              flex-col 
              justify-center 
              items-center 
              text-center 
              p-5 
              border 
              border-purple-700 
              shadow-lg 
              rounded-md 
              shadow-purple-800 
              bg-red-200
            "
          >
            <BsEyeglasses className="mb-2 text-5xl text-purple-700" />
            <h1 className="mb-1 text-xl font-medium">observe</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div
            className=" 
              flex 
              flex-col 
              justify-center 
              items-center 
              text-center 
              p-5 
              border 
              border-purple-700 
              shadow-lg 
              rounded-md 
              shadow-purple-800 
              bg-red-200
            "
          >
            <AiFillSound className="mb-2 text-5xl text-purple-700" />
            <h1 className="mb-1 text-xl font-medium">Whoop it Up</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>

      {/* ----------------CUSTOMERS SECTION---------------- */}
      <div
        className="h-max bg-red-100 py-8 px-3 bg-fixed "
        style={{
          backgroundImage:
            "url(" + "https://source.unsplash.com/1500x1000?white" + ")",
        }}
      >
        <div className="flex flex-col gap-2 justify-center items-center">
          <p
            className="
              text-2xl 
              font-bold 
              italic 
              text-transparent 
              bg-gradient-to-tr 
              from-purple-900 
              to-yellow-700 
              bg-clip-text 
            "
          >
            Our Customers
          </p>
        </div>

        <div
          className="
            flex 
            flex-wrap 
            justify-around 
            items-center  
            text-zinc-700 
            mt-11 mb-5
          "
        >
          <BsGoogle className="text-5xl animate-bounce" />
          <SiShopee className="text-5xl animate-bounce" />
          <BsDiscord className="text-5xl animate-bounce" />
          <BsReddit className="text-5xl animate-bounce" />
          <FaAirbnb className="text-5xl animate-bounce" />
        </div>
      </div>

      {/* ----------------PORTFOLOO SECTION--------------------- */}

      <div className="py-12 bg-purple-800">
        <h1
          className="
              font-sans 
              text-5xl 
              font-bold 
              text-transparent 
              bg-gradient-to-r 
              from-yellow-400 
              to-red-500 
              bg-clip-text
              text-center
              mt-20
            "
        >
          OUR PORTFOLIO
        </h1>

        <p className="text-center mb-16 mt-5 italic font-semibold">
          click the imge for detail
        </p>

        <div 
          className="
            mt-20 
            p-2 sm:p-4
            grid 
            grid-cols-2 
            gap-2 sm:grid-cols-4 
          ">

          <h2 
            className="
              h-15 
              text-xl 
              font-semibold 
              text-yellow-400 
              m-auto 
              sm:col-start-2 
              sm:row-start-3
            ">
              Wellcome to Our PlayGround
          </h2>

          <div 
            className="
              h-15 
              text-lg 
              font-bold 
              text-black 
              text-right 
              sm:col-start-4
            ">
              Galery
          </div>

          <div 
            className="
              h-15  
              aspect-[4/3] 
              sm:aspect-[3/4] 
              lg:aspect-[4/3] 
              rounded-lg 
              relative 
              transition 
              duration-700 
              ease-in-out 
              overflow-hidden 
              group
            ">
              
            <img
              src="https://source.unsplash.com/400x300?mount"
              alt="mount"
              className="object-cover h-full"
            />
            <div 
              className="
                bg-slate-200 
                w-full 
                h-1/2 
                translate-y-full 
                absolute 
                top-0 
                hidden 
                group-hover:block 
                transition 
                duration-700 
                ease-in-out 
                bg-opacity-50
              ">

              <div className="m-2 flex">
                <p className="self-end">
                  <span className="text-lg font-bold">
                    Project Name <br />
                  </span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="
              h-15  
              aspect-[4/3] 
              sm:aspect-[3/4] 
              lg:aspect-[4/3] 
              rounded-lg 
              sm:col-start-3 
              relative 
              transition 
              duration-700 
              ease-in-out 
              overflow-hidden 
              group
            ">
            
            <img
              src="https://source.unsplash.com/400x300?sea"
              alt="sea"
              className="object-cover h-full"
            />
            
            <div 
              className="
                bg-slate-200 
                w-full h-1/2 
                translate-y-full 
                absolute 
                top-0 
                hidden 
                group-hover:block 
                transition 
                duration-700 
                ease-in-out 
                bg-opacity-50
              ">
              
              <div className="m-2 flex">
                <p className="self-end">
                  <span className="text-lg font-bold">
                    Project Name <br />
                  </span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="
              h-15  
              aspect-[4/3] 
              sm:aspect-[3/4] 
              lg:aspect-[4/3] 
              rounded-lg 
              relative 
              transition 
              duration-700 
              ease-in-out 
              overflow-hidden 
              group
            ">

            <img
              src="https://source.unsplash.com/400x300?lake"
              alt="lake"
              className="object-cover h-full"
            />

            <div 
              className="
                bg-slate-200 
                w-full 
                h-1/2 
                translate-y-full 
                absolute 
                top-0 
                hidden 
                group-hover:block 
                transition 
                duration-700 
                ease-in-out 
                bg-opacity-50
              ">

              <div className="m-2 flex">
                <p className="self-end">
                  <span className="text-lg font-bold">
                    Project Name <br />
                  </span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="
              h-15  
              aspect-[4/3] 
              sm:aspect-[3/4] 
              lg:aspect-[4/3] 
              rounded-lg 
              relative 
              transition 
              duration-700 
              ease-in-out 
              overflow-hidden 
              group
            ">

            <img
              src="https://source.unsplash.com/400x300?road"
              alt="road"
              className="object-cover h-full"
            />

            <div 
              className="
                bg-slate-200 
                w-full h-1/2 
                translate-y-full 
                absolute 
                top-0 
                hidden 
                group-hover:block 
                transition 
                duration-700 
                ease-in-out 
                bg-opacity-50
              ">
                
              <div className="m-2 flex">
                <p className="self-end">
                  <span className="text-lg font-bold">
                    Project Name <br />
                  </span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="
              h-15  
              aspect-[4/3] 
              sm:aspect-[3/4] 
              lg:aspect-[4/3] 
              rounded-lg 
              relative 
              transition 
              duration-700 
              ease-in-out 
              overflow-hidden 
              group
            ">
            <img
              src="https://source.unsplash.com/400x300?house"
              alt="house"
              className="object-cover h-full"
            />
            
            <div 
              className="
                bg-slate-200 
                w-full 
                h-1/2 
                translate-y-full 
                absolute 
                top-0 
                hidden 
                group-hover:block 
                transition 
                duration-700 
                ease-in-out 
                bg-opacity-50
              ">

              <div className="m-2 flex">
                <p className="self-end">
                  <span className="text-lg font-bold">
                    Project Name <br />
                  </span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="
              h-15  
              aspect-[4/3] 
              sm:aspect-[3/4] 
              lg:aspect-[4/3] 
              rounded-lg 
              relative 
              transition 
              sm:col-start-2  
              duration-700 
              ease-in-out 
              overflow-hidden 
              group
            ">

            <img
              src="https://source.unsplash.com/400x300?forest"
              alt="forest"
              className="object-cover h-full"
            />

            <div 
              className="
                bg-slate-200 
                w-full h-1/2 
                translate-y-full 
                absolute 
                top-0 
                hidden 
                group-hover:block 
                transition 
                duration-700 
                ease-in-out 
                bg-opacity-50
              ">

              <div className="m-2 flex">
                <p className="self-end">
                  <span className="text-lg font-bold">
                    Project Name <br />
                  </span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="
              h-15  
              aspect-[4/3] 
              sm:aspect-[3/4] 
              lg:aspect-[4/3] 
              rounded-lg 
              relative 
              transition 
              sm:col-start-4 
              duration-700 
              ease-in-out 
              overflow-hidden 
              group
            ">

            <img
              src="https://source.unsplash.com/400x300?office"
              alt="office"
              className="object-cover h-full"
            />

            <div 
              className="
                bg-slate-200 
                w-full 
                h-1/2 
                translate-y-full 
                absolute 
                top-0
                hidden 
                group-hover:block 
                transition 
                duration-700 
                ease-in-out 
                bg-opacity-50
              ">
                
              <div className="m-2 flex">
                <p className="self-end">
                  <span className="text-lg font-bold">
                    Project Name <br />
                  </span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="
              h-15  
              aspect-[4/3] 
              sm:aspect-[3/4] 
              lg:aspect-[4/3] 
              rounded-lg 
              relative 
              transition 
              duration-700 
              ease-in-out 
              overflow-hidden 
              group
            ">

            <img
              src="https://source.unsplash.com/400x300?school"
              alt="school"
              className="object-cover h-full"
            />

            <div 
              className="
                bg-slate-200 
                w-full h-1/2 
                translate-y-full 
                absolute 
                top-0 
                hidden
                group-hover:block 
                transition 
                duration-700 
                ease-in-out 
                bg-opacity-50
              ">

              <div className="m-2 flex">
                <p className="self-end">
                  <span className="text-lg font-bold">
                    Project Name <br />
                  </span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="
              h-15  
              aspect-[4/3] 
              sm:aspect-[3/4] 
              lg:aspect-[4/3] 
              rounded-lg 
              relative 
              transition 
              duration-700 
              ease-in-out 
              overflow-hidden 
              group
            ">

            <img
              src="https://source.unsplash.com/400x300?car"
              alt="car"
              className="object-cover h-full"
            />

            <div 
              className="
                bg-slate-200 
                w-full 
                h-1/2 
                translate-y-full 
                absolute 
                top-0 
                hidden 
                group-hover:block 
                transition 
                duration-700 
                ease-in-out 
                bg-opacity-50
              ">
                
              <div className="m-2 flex">
                <p className="self-end">
                  <span className="text-lg font-bold">
                    Project Name <br />
                  </span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="
              h-15  
              aspect-[4/3] 
              sm:aspect-[3/4] 
              lg:aspect-[4/3] 
              rounded-lg 
              relative 
              transition 
              duration-700 
              ease-in-out 
              overflow-hidden 
              group
            ">

            <img
              src="https://source.unsplash.com/400x300?class"
              alt="class"
              className="object-cover h-full"
            />

            <div 
              className="
                bg-slate-200 
                w-full 
                h-1/2 
                translate-y-full 
                absolute 
                top-0 
                hidden 
                group-hover:block 
                transition 
                duration-700 
                ease-in-out 
                bg-opacity-50
              ">
                
              <div className="m-2 flex">
                <p className="self-end">
                  <span className="text-lg font-bold">
                    Project Name <br />
                  </span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------FOOTER SECTION--------------- */}
      <div className="bg-yellow-400">
        <p className="text-center text-sm p-1">company name, copyright 2023</p>
      </div>
    </div>
  );
}

export default App;
