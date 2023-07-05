import { FunctionComponent } from "react";

const Homepage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[3861px] overflow-hidden text-left text-4xl text-hotpink font-nunito-sans">
      <div className="absolute top-[-223px] left-[-356px] rounded-[50%] bg-orangered [filter:blur(500px)] w-[500px] h-[500px] opacity-[0.5]" />
      <div className="absolute top-[847px] left-[1351px] rounded-[50%] bg-goldenrod-100 [filter:blur(500px)] w-[500px] h-[500px] opacity-[0.5]" />
      <div className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1440px] flex flex-row py-8 px-[165px] box-border items-center justify-between text-sm text-black">
        <div className="flex flex-row items-center justify-start gap-[16px] text-5xl">
          <img className="relative w-10 h-10" alt="" src="/vector.svg" />
          <div className="relative leading-[40px] font-black">Travlog</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[64px] text-gray-300">
          <b className="relative leading-[120%] text-gray-100">Home</b>
          <b className="relative leading-[120%]">Discover</b>
          <b className="relative leading-[120%]">Special Deals</b>
          <b className="relative leading-[120%]">Contact</b>
        </div>
        <div className="flex flex-row items-start justify-start text-gray-100">
          <button className="rounded-81xl bg-white flex flex-row py-4 px-8 items-start justify-start">
            <b className="relative leading-[120%]">Log In</b>
          </button>
          <button className="rounded-81xl bg-slateblue flex flex-row py-4 px-8 items-start justify-start hover:opacity-80 text-whitesmoke">
            <b className="relative leading-[120%]">Sign Up</b>
          </button>
        </div>
      </div>
      <div className="absolute top-[177px] left-[calc(50%_-_555px)] flex flex-row items-center justify-start text-sm">
        <div className="w-[427px] flex flex-col items-start justify-start gap-[43px]">
          <div className="rounded-81xl bg-white shadow-[0px_856px_240px_rgba(0,_0,_0,_0),_0px_548px_219px_rgba(0,_0,_0,_0.01),_0px_308px_185px_rgba(0,_0,_0,_0.04),_0px_137px_137px_rgba(0,_0,_0,_0.06),_0px_34px_75px_rgba(0,_0,_0,_0.07),_0px_0px_0px_rgba(0,_0,_0,_0.07)] flex flex-row py-4 px-8 items-center justify-start gap-[16px]">
            <b className="relative leading-[120%]">Explore the world!</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/work-1.svg"
            />
          </div>
          <b className="relative text-[69px] leading-[120%] inline-block w-[597px]">
            <p className="m-0">
              <span className="text-black">{`Travel `}</span>
              <span>top destination</span>
              <span className="text-black">{` `}</span>
            </p>
            <p className="m-0 text-black">of the world</p>
          </b>
          <div className="relative text-lg leading-[160%] font-inter text-gray-300">
            <p className="m-0">
              We always make our customer happy by providing
            </p>
            <p className="m-0">{`as many choices as possible `}</p>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-whitesmoke">
            <div className="rounded-81xl bg-slateblue shadow-[0px_126px_35px_rgba(0,_0,_0,_0),_0px_81px_32px_rgba(0,_0,_0,_0.01),_0px_45px_27px_rgba(0,_0,_0,_0.05),_0px_20px_20px_rgba(0,_0,_0,_0.09),_0px_5px_11px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] flex flex-row py-4 px-8 items-start justify-start">
              <b className="relative leading-[120%]">Get Started</b>
            </div>
            <div className="rounded-81xl bg-white flex flex-row py-4 px-8 items-center justify-start gap-[8px] text-gray-100 border-[1px] border-solid border-whitesmoke">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/playcircle5-1.svg"
              />
              <b className="relative leading-[120%]">Watch Demo</b>
            </div>
          </div>
        </div>
        <div className="relative w-[772px] h-[713px] text-darkslategray">
          <img
            className="absolute top-[0px] left-[0px] w-[772px] h-[287.38px] overflow-hidden"
            alt=""
            src="/layer.svg"
          />
          <div className="absolute top-[75px] left-[91px] flex flex-row items-center justify-start gap-[31px]">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <img
                className="relative rounded-13xl w-[272px] h-[300px] object-cover"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <img
                className="relative rounded-13xl w-[272px] h-[300px] object-cover"
                alt=""
                src="/rectangle-2@2x.png"
              />
            </div>
            <img
              className="relative rounded-13xl w-[272px] h-[400px] object-cover"
              alt=""
              src="/rectangle-3@2x.png"
            />
          </div>
          <div className="absolute top-[341px] left-[56px] rounded-81xl bg-hotpink shadow-[0px_120px_34px_rgba(0,_0,_0,_0),_0px_77px_31px_rgba(0,_0,_0,_0.01),_0px_43px_26px_rgba(0,_0,_0,_0.05),_0px_19px_19px_rgba(0,_0,_0,_0.09)] overflow-hidden flex flex-row p-4 items-start justify-start">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/send-1.svg"
            />
          </div>
          <div className="absolute top-[649px] left-[474px] rounded-81xl bg-orangered shadow-[0px_120px_34px_rgba(0,_0,_0,_0),_0px_77px_31px_rgba(0,_0,_0,_0.01),_0px_43px_26px_rgba(0,_0,_0,_0.05),_0px_19px_19px_rgba(0,_0,_0,_0.09)] overflow-hidden flex flex-row p-4 items-start justify-start">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/adduser-1.svg"
            />
          </div>
          <div className="absolute top-[488px] left-[592px] rounded-81xl bg-white shadow-[0px_120px_34px_rgba(0,_0,_0,_0),_0px_77px_31px_rgba(0,_0,_0,_0.01),_0px_43px_26px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-4 px-8 items-center justify-start gap-[8px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/location-1.svg"
            />
            <b className="relative leading-[120%]">Top Places</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[954px] left-[calc(50%_-_720px)] w-[1440px] flex flex-row py-16 px-[165px] box-border items-start justify-between">
        <img className="relative w-[211.83px] h-8" alt="" src="/group.svg" />
        <img className="relative w-[113.06px] h-8" alt="" src="/group-2.svg" />
        <img className="relative w-[188.6px] h-8" alt="" src="/group1.svg" />
        <img
          className="relative w-[102.53px] h-8"
          alt=""
          src="/group-9235.svg"
        />
        <img className="relative w-[173.57px] h-8" alt="" src="/group-3.svg" />
      </div>
      <div className="absolute top-[1178px] left-[166px] flex flex-row items-center justify-start">
        <div className="w-[444px] flex flex-col items-start justify-start gap-[16px]">
          <b className="relative tracking-[0.2em] leading-[120%] uppercase">
            Services
          </b>
          <b className="self-stretch relative text-25xl leading-[120%] text-black">
            Our top value categories for you
          </b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[21px] text-center text-9xl text-black">
          <div className="self-stretch rounded-13xl bg-white w-[350px] flex flex-col p-16 box-border items-center justify-start gap-[64px]">
            <img
              className="relative w-16 h-16 object-cover"
              alt=""
              src="/destination-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
              <b className="self-stretch relative leading-[120%]">
                Best Tour Guide
              </b>
              <div className="self-stretch relative text-lg leading-[160%] font-inter text-gray-300">
                What looked like a small patch of purple grass, above five feet.
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-13xl bg-white shadow-[0px_41px_89px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] w-[350px] flex flex-col p-16 box-border items-center justify-start gap-[64px]">
            <img
              className="relative w-16 h-16 object-cover"
              alt=""
              src="/booking-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
              <b className="self-stretch relative leading-[120%]">
                Easy Booking
              </b>
              <div className="self-stretch relative text-lg leading-[160%] font-inter text-gray-300">
                Square, was moving across the sand in their direction.
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-13xl bg-white w-[350px] flex flex-col p-16 box-border items-center justify-start gap-[64px]">
            <img
              className="relative w-16 h-16 object-cover"
              alt=""
              src="/cloudy-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
              <b className="self-stretch relative leading-[120%]">
                Weather Forecast
              </b>
              <div className="self-stretch relative text-lg leading-[160%] font-inter text-gray-300">
                What looked like a small patch of purple grass, above five feet.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1730px] left-[0px] flex flex-row items-center justify-start gap-[42px]">
        <img
          className="relative w-[789.68px] h-[696.68px]"
          alt=""
          src="/group-9238.svg"
        />
        <div className="w-[445px] flex flex-col items-start justify-start gap-[64px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative tracking-[0.2em] leading-[120%] uppercase">
                Travel Point
              </b>
              <b className="self-stretch relative text-25xl leading-[120%] text-black">
                We helping you find your dream location
              </b>
            </div>
            <div className="self-stretch relative text-lg leading-[160%] font-inter text-gray-300">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-16xl text-orangered">
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
              <div className="flex-1 rounded-13xl bg-white flex flex-col p-8 items-center justify-start gap-[16px] border-[1px] border-solid border-gray-200">
                <b className="relative leading-[120%]">500+</b>
                <div className="relative text-lg leading-[160%] font-inter text-black">
                  Holiday Package
                </div>
              </div>
              <div className="flex-1 rounded-13xl bg-white flex flex-col p-8 items-center justify-start gap-[16px] border-[1px] border-solid border-gray-200">
                <b className="relative leading-[120%]">100</b>
                <div className="relative text-lg leading-[160%] font-inter text-black">
                  Luxury Hotel
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
              <div className="flex-1 rounded-13xl bg-white flex flex-col p-8 items-center justify-start gap-[16px] border-[1px] border-solid border-gray-200">
                <b className="relative leading-[120%]">7</b>
                <div className="relative text-lg leading-[160%] font-inter text-black">
                  Premium Airlines
                </div>
              </div>
              <div className="flex-1 rounded-13xl bg-white flex flex-col p-8 items-center justify-start gap-[16px] border-[1px] border-solid border-gray-200">
                <b className="relative leading-[120%]">2k+</b>
                <div className="relative text-lg leading-[160%] font-inter text-black">
                  Happy Customer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1861px] left-[486px] rounded-81xl bg-white shadow-[0px_385px_108px_rgba(0,_0,_0,_0),_0px_246px_99px_rgba(0,_0,_0,_0),_0px_139px_83px_rgba(0,_0,_0,_0.01),_0px_62px_62px_rgba(0,_0,_0,_0.02),_0px_15px_34px_rgba(0,_0,_0,_0.03),_0px_0px_0px_rgba(0,_0,_0,_0.03)] flex flex-row py-4 px-8 items-center justify-start gap-[16px] text-black">
        <img
          className="relative w-10 h-10 overflow-hidden shrink-0"
          alt=""
          src="/discount-1.svg"
        />
        <b className="relative leading-[120%]">Discounted Price</b>
      </div>
      <div className="absolute top-[2023px] left-[1246px] rounded-81xl bg-goldenrod-100 shadow-[0px_385px_108px_rgba(0,_0,_0,_0),_0px_246px_99px_rgba(0,_0,_0,_0),_0px_139px_83px_rgba(0,_0,_0,_0.01),_0px_62px_62px_rgba(0,_0,_0,_0.02),_0px_15px_34px_rgba(0,_0,_0,_0.03),_0px_0px_0px_rgba(0,_0,_0,_0.03)] flex flex-row p-8 items-center justify-start">
        <img
          className="relative w-12 h-12 overflow-hidden shrink-0"
          alt=""
          src="/ticketstar-1.svg"
        />
      </div>
      <div className="absolute top-[2595px] left-[168px] rounded-13xl bg-goldenrod-200 w-[1110px] flex flex-col py-32 px-16 box-border items-center justify-start gap-[64px] text-center">
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <b className="relative tracking-[0.2em] leading-[120%] uppercase inline-block w-[982px]">
            subscribe to our newsletter
          </b>
          <b className="relative text-[55px] leading-[120%] inline-block text-black w-[982px]">{`Prepare yourself & let’s explore the beauty of the world`}</b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[64px] text-gray-400">
          <div className="self-stretch flex-1 rounded-13xl bg-white flex flex-row p-8 items-center justify-start gap-[16px]">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/message-1.svg"
            />
            <b className="relative leading-[120%]">Your Email</b>
          </div>
          <div className="self-stretch rounded-13xl bg-slateblue flex flex-row py-8 px-16 items-center justify-start text-white">
            <b className="relative leading-[120%]">Subscribe</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[3371px] left-[3px] w-[1440px] flex flex-row py-0 px-[165px] box-border items-start justify-start gap-[153px] text-5xl text-black">
        <div className="flex-1 flex flex-col items-start justify-start gap-[64px]">
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img className="relative w-10 h-10" alt="" src="/vector1.svg" />
              <div className="relative leading-[40px] font-black">Travlog</div>
            </div>
            <div className="relative text-4xl leading-[160%] font-black text-gray-300 inline-block w-[278px]">
              <p className="m-0">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots
              </p>
              <p className="m-0">
                in a piece of classical Latin literature from 45 BC.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[32px]">
            <img className="relative w-8 h-8" alt="" src="/group2.svg" />
            <img className="relative w-8 h-8" alt="" src="/group3.svg" />
            <img className="relative w-8 h-8" alt="" src="/group-8.svg" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[121px] text-lg text-gray-400 font-inter">
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <b className="relative text-4xl leading-[120%] font-nunito-sans text-black">
              Company
            </b>
            <div className="relative leading-[160%]">About</div>
            <div className="relative leading-[160%]">Career</div>
            <div className="relative leading-[160%]">Mobile</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <b className="relative text-4xl leading-[120%] font-nunito-sans text-black">
              Contact
            </b>
            <div className="relative leading-[160%]">Why Travlog?</div>
            <div className="relative leading-[160%]">Partner with us</div>
            <div className="relative leading-[160%]">FAQ’s</div>
            <div className="relative leading-[160%]">Blog</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <b className="relative text-4xl leading-[120%] font-nunito-sans text-black">
              Meet Us
            </b>
            <div className="relative leading-[160%]">+00 92 1234 56789</div>
            <div className="relative leading-[160%]">info@travlog.com</div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative leading-[160%]">
                205. R Street, New York
              </div>
              <div className="relative leading-[160%]">BD23200</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[898.75px] left-[38px] w-[65px] h-[169.95px] overflow-hidden"
        alt=""
        src="/objects.svg"
      />
      <img
        className="absolute top-[2536px] left-[125px] w-[183.86px] h-[176.35px] overflow-hidden"
        alt=""
        src="/graphic-elements.svg"
      />
      <img
        className="absolute top-[3028.46px] left-[1329px] w-[332px] h-[351.95px] overflow-hidden"
        alt=""
        src="/objects1.svg"
      />
    </div>
  );
};

export default Homepage;
