import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useAuth } from "../../context/auth-context";

export const Home = () => {
  const { token } = useAuth();
  return (
    <>
      <section className="realtive px-4 py-8 text-black dark:text-white ">
        <div className="mx-10">
          <video
            loop="true"
            autoplay="autoplay"
            muted
            className="relative h-[80vh] w-full z-10 brightness-95"
          >
            <source
              src="https://d1iyh67kzf6t3o.cloudfront.net/images/2020/RA4.mp4"
              type="video/mp4"
            ></source>
          </video>

          <div className="absolute z-20 top-[30%] left-[10%] md:left-[40%] py-16 pb-32 flex flex-col ">
            <h1 className="font-semibold  font-primary  text-xl lg:text-4xl leading-relaxed ">
              Find your Calm
              <br />
              With Insight Stream
            </h1>
            <p className="pt-6 text-md  leading-loose">
              Enjoy a relaxing break now with the soothing music and guided
              meditation videos. <br />
              <span className="hidden md:visible">
                Priortize yourself and take first step towards a mentally
                stronger you.
              </span>
            </p>
            <Link
              to={`${token ? "explore" : "login"}`}
              className="inline-block bg-white mt-2 md:mt-5 md:px-8 px-4 py-2 text-sky-500 font-bold font-primary uppercase rounded-full tracking-wide self-baseline hover:bg-sky-500 hover:text-white"
            >
              Start Now
            </Link>
          </div>

          <div className="flex flex-col mt-10">
            <h1 className="font-primary font-bold text-xl lg:text-2xl mb-2">
              Recommended Videos
            </h1>
            <div className="flex gap-12 m-2">
              <ReactPlayer
                style={{
                  aspectRatio: 1.7,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                width="50%"
                height="100%"
                controls="true"
                url="https://www.youtube.com/watch?v=1ZYbU82GVz4&t=4s"
              />
              <ReactPlayer
                style={{
                  aspectRatio: 1.7,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                width="50%"
                height="100%"
                controls="true"
                url="https://www.youtube.com/watch?v=T8yEdNx4dB0&t=34s"
              />
              <ReactPlayer
                style={{
                  aspectRatio: 1.7,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                width="50%"
                height="100%"
                controls="true"
                url="https://www.youtube.com/watch?v=aIIEI33EUqI"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
