import { NextPage } from "next";
import Header from "../components/Header";

const About: NextPage = ({}) => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center align-center pt-40 px-20  bg-white">
      {" "}
      <Header />
      <h1 className="text-6xl">About</h1>{" "}
    </div>
  );
};

export default About;
