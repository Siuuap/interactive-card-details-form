import Button from "./Button";
import Complete from "./Complete";
const Form = ({
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
      {!isComplete ? (
        <section>
          <form
            className="max-w-[375px] mx-auto p-5 flex flex-col gap-4 "
            onSubmit={onSubmit}
          >
            <div className="flex flex-col gap-1">
              <label
                className="tracking-wider text-[14px]"
                htmlFor="card-holder-name"
              >
                CARDHOLDER NAME
              </label>
              <input
                className="border p-2 rounded-lg"
                type="text"
                id="card-holder-name"
                placeholder="e.g. Jane Appleseed"
                onChange={onCardHolderName}
                value={cardHolderName}
                minLength={1}
                maxLength={30}
              />
              <p className="text-[hsl(0,100%,66%)]">
                {checkFormat.cardHolderName}
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-lg ">
              <label
                className="tracking-wider text-[14px]"
                htmlFor="card-number"
              >
                CARD NUMBER
              </label>
              <input
                className="border p-2 rounded-lg"
                type="text"
                id="card-number"
                placeholder="e.g. 1234 5678 9123 0000"
                onChange={onCardNumber}
                value={cardNumber}
                maxLength={19}
              />
              <p className="text-[hsl(0,100%,66%)]">{checkFormat.cardNumber}</p>
            </div>
            <div className="flex gap-1">
              <div className="w-1/4">
                <label
                  className="tracking-wider text-[14px]"
                  htmlFor="cardHolderName"
                >
                  EXP. DATE
                </label>
                <input
                  className="border p-2 w-full rounded-lg"
                  type="text"
                  id="cardHolderName"
                  placeholder="MM"
                  onChange={onCardMonth}
                  value={cardMonth}
                  minLength={2}
                  maxLength={2}
                />
                <p className="text-[hsl(0,100%,66%)]">
                  {checkFormat.cardMonthAndYear}
                </p>
              </div>
              <div className="w-1/4">
                <label
                  className="tracking-wider text-[14px]"
                  htmlFor="cardHolderName"
                >
                  (MM/YY)
                </label>
                <input
                  className="border p-2 w-full rounded-lg"
                  type="text"
                  id="cardHolderName"
                  placeholder="YY"
                  onChange={onCardYear}
                  value={cardYear}
                  minLength={2}
                  maxLength={2}
                />
              </div>
              <div className="w-2/4">
                <label className="tracking-wider text-[14px]" htmlFor="cvc">
                  CVC
                </label>
                <input
                  className="border p-2 w-full rounded-lg"
                  type="text"
                  id="cvc"
                  placeholder="e.g. 123"
                  onChange={onCardCvc}
                  value={cardCvc}
                  minLength={3}
                  maxLength={3}
                />
                <p className="text-[hsl(0,100%,66%)]">{checkFormat.cardCvc}</p>
              </div>
            </div>
            <div className="w-full">
              <Button buttonName="Confirm" />
            </div>
          </form>
        </section>
      ) : (
        <Complete onComplete={onComplete} />
      )}
    </>
  );
};

export default Form;
