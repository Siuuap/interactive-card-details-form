import Form from "./Form";
import bgCardBack from "../images/bg-card-back.png";
import bgCardFront from "../images/bg-card-front.png";
import cardLogo from "../images/card-logo.svg";
const FormSection = ({
  isComplete,
  cardHolderName,
  cardNumber,
  cardMonth,
  cardYear,
  cardCvc,
  onCardHolderName,
  onCardNumber,
  onCardMonth,
  onCardYear,
  onCardCvc,
  onComplete,
  onSubmit,
  checkFormat,
}) => {
  return (
    <>
      <section className="max-w-[1440px] flex flex-col min-[1440px]:flex-row min-[1440px]:h-[100vh] min-[1440px]:items-center mx-auto min-[1440px]:justify-start min-[1440px]:max-w-full">
        <section className=" bg-cover bg-[url('./images/bg-main-mobile.png')] relative bg-top w-full h-[200px] min-[1440px]:bg-[url('./images/bg-main-desktop.png')] min-[1440px]:h-[100vh] mb-24 min-[1440px]:mb-0 min-[1440px]:w-[35%]  min-[1440px]:mr-[400px]">
          {/* card */}
          <section className="card max-w-[375px] bg-cover bg-top relative mx-auto min-[1440px]:h-[100%] min-[1440px]:max-w-[500px] min-[1440px]:mr-0">
            {/* card-back */}
            <div className="card-back absolute right-5 top-6 w-[280px] min-[1440px]:w-[400px] min-[1440px]:top-[53%] min-[1440px]:right-[-200px]">
              <img className="w-full" src={bgCardBack} alt="bg-card-back" />
              <p className="absolute top-[45%] right-[13%] text-[hsl(0,0%,100%)] text-[10px] ">
                {!cardCvc ? "000" : cardCvc}
              </p>
            </div>
            {/* Card-front */}
            <div className="card-front absolute right-[75px] top-28 w-[280px] min-[1440px]:w-[400px] min-[1440px]:top-[18%] min-[1440px]:right-[-100px]">
              <img className="w-fit" src={bgCardFront} alt="bg-card-front" />
              <img
                className="absolute z-50 top-4 left-4 h-6 "
                src={cardLogo}
                alt=""
              />
              <p className="absolute top-[50%] left-4 text-[hsl(0,0%,100%)] tracking-widest text-[18px] min-[1440px]:text-[24px]">
                {!cardNumber ? "0000 0000 0000 0000" : cardNumber}
              </p>
              <div className="absolute flex justify-between w-full top-[75%] px-4">
                <p className="top-15 text-[hsl(0,0%,100%)] tracking-widest text-[10px] ">
                  {!cardHolderName ? "FELICIA LEIRE" : cardHolderName}
                </p>
                <p className="top-20 text-[hsl(0,0%,100%)] tracking-widest text-[10px] ">
                  {!cardMonth ? "00" : cardMonth}/{!cardYear ? "00" : cardYear}
                </p>
              </div>
            </div>
          </section>
        </section>
        <Form
          isComplete={isComplete}
          cardHolderName={cardHolderName}
          cardNumber={cardNumber}
          cardMonth={cardMonth}
          cardYear={cardYear}
          cardCvc={cardCvc}
          onCardHolderName={onCardHolderName}
          onCardNumber={onCardNumber}
          onCardMonth={onCardMonth}
          onCardYear={onCardYear}
          onCardCvc={onCardCvc}
          onComplete={onComplete}
          onSubmit={onSubmit}
          checkFormat={checkFormat}
        />
      </section>
    </>
  );
};
export default FormSection;
