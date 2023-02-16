import profile from "../assets/profile.png";
import Button from "./Button";
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import Paragraph from "./Paragraph";
import Footer from "./Footer";
export default function Card() {
  return (
    <div className="bg-[#1A1B21] w-96 text-white rounded-md">
      <img
        src={profile}
        className="w-full block"
        width={400}
        height={400}
        alt="profile"
      />
      <div className="flex flex-col mt-5 items-center px-9  pb-6">
        <h1 className="font-bold text-3xl leading-[1.21]">Laura Smith</h1>
        <h2 className="text-sm  mt-1.5  text-[#F3BF99]">Frontend Developer</h2>
        <span className="text-xs mt-2.5">laurasmith.website</span>
        <div className="flex justify-between w-full mt-4">
          <Button icon={email} iconStyle={"w-6 h-5"}>
            Email
          </Button>
          <Button icon={linkedin} secondary iconStyle={"w-6 h-5"}>
            LinkedIn
          </Button>
        </div>
        <div className="mt-8 flex flex-col gap-7">
          <Paragraph title={"About"}>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </Paragraph>
          <Paragraph title={"Interests"}>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </Paragraph>
        </div>
      </div>
      <Footer />
    </div>
  );
}
