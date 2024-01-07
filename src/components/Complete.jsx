import Button from "./Button";
import iconComplete from "../images/icon-complete.svg";
const Complete = ({ onComplete }) => {
  return (
    <section className="max-w-[375px] mx-auto min-[1440px]:m-0 p-5 flex flex-col gap-10 items-center ">
      <img className="w-[80px]" src={iconComplete} alt="icon-complete" />
      <div className="flex flex-col items-center gap-3 mb-[15px]">
        <p className="text-[hsl(278,68%,11%)] text-[28px] tracking-widest">
          THANK YOU!
        </p>
        <p className="text-[hsl(279,6%,55%)] tracking-wider">
          We&apos;ve added your card details
        </p>
      </div>
      <Button buttonName="Continue" onClick={onComplete} />
    </section>
  );
};

export default Complete;
