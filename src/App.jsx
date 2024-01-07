import { useState } from "react";
import FormSection from "./components/FormSection";
const App = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [number, setNumber] = useState(0);
  const [checkCardHolderName, setCheckCardHolderName] = useState("");
  const [checkCardNumber, setCheckCardNumber] = useState("");
  const [checkCardMonthAndYear, setCheckCardMonthAndYear] = useState("");
  //const [checkCardYear, setCheckCardYear] = useState("");
  const [checkCardCvc, setCheckCardCvc] = useState("");

  const checkFormat = {
    cardHolderName: checkCardHolderName,
    cardNumber: checkCardNumber,
    cardMonthAndYear: checkCardMonthAndYear,
    //cardYear: checkCardYear,
    cardCvc: checkCardCvc,
  };

  const setCheckFormat = {
    cardHolderName: setCheckCardHolderName,
    cardNumber: setCheckCardNumber,
    cardMonthAndYear: setCheckCardMonthAndYear,
    //cardYear: setCheckCardYear,
    cardCvc: setCheckCardCvc,
  };
  function handleSubmit(e) {
    e.preventDefault();
    const checkCardHolder = cardHolderName && cardHolderName.length <= 30;
    const checkCardNumber =
      cardNumber.match(/^[0-9\s]*$/) && cardNumber.length === 19;
    const checkMonth = cardMonth && cardMonth.length === 2;
    const checkYear = cardYear && cardYear.length === 2;
    const checkCvc = cardCvc && cardCvc.length === 3;
    //
    {
      !cardHolderName
        ? setCheckFormat.cardHolderName("Can't be blank")
        : setCheckFormat.cardHolderName("");
    }
    {
      !cardNumber
        ? setCheckFormat.cardNumber("Can't be blank")
        : checkCardNumber
        ? setCheckFormat.cardNumber("")
        : setCheckFormat.cardNumber("Wrong format, numbers only.");
    }
    {
      !cardMonth || !cardYear
        ? setCheckFormat.cardMonthAndYear("Can't be blank")
        : cardMonth.length === 2 && cardYear.length === 2
        ? setCheckFormat.cardMonthAndYear("")
        : setCheckFormat.cardMonthAndYear("Wrong format");
    }

    {
      !cardCvc
        ? setCheckFormat.cardCvc("Can't be blank")
        : cardCvc.length !== 3
        ? setCheckFormat.cardCvc("Wrong format")
        : setCheckFormat.cardCvc("");
    }
    console.log(`cardHolder: ${checkCardHolder}`);
    console.log(`cardNumber: ${checkCardNumber}`);
    console.log(`cardMonth: ${checkMonth}`);
    console.log(`cardYear: ${checkYear}`);
    console.log(`checkCvc: ${checkCvc}`);
    console.log(cardMonth.length);

    checkCardHolder &&
      checkCardNumber &&
      checkMonth &&
      checkYear &&
      checkCvc &&
      setIsComplete(true);
  }

  function handleComplete() {
    setIsComplete(false);
    setCardHolderName("");
    setCardNumber("");
    setCardMonth("");
    setCardYear("");
    setCardCvc("");
  }
  // Handle Card Info.
  function handleCardHolderName(e) {
    console.log(e.target.value);
    let inputValue = e.target.value.toUpperCase(); // Remove digit characters
    setCardHolderName(inputValue);
  }
  function handleCardNumber(e) {
    let inputValue = e.target.value.replace(/\s/g, ""); //
    let formattedValue = inputValue.replace(/(\S{4})/g, "$1 "); //
    formattedValue = formattedValue.trim(); //
    setCardNumber(formattedValue);
  }

  function handleCardMonth(e) {
    console.log(typeof cardMonth);
    let inputValue = e.target.value.replace(/\D/g, "");
    setCardMonth(inputValue >= 12 ? "12" : inputValue);
  }
  function handleCardYear(e) {
    console.log(e.target.value);
    let inputValue = e.target.value.replace(/\D/g, "");
    setCardYear(inputValue);
  }
  function handleCardCvc(e) {
    let inputValue = e.target.value.replace(/\D/g, "");
    setCardCvc(inputValue);
  }

  return (
    <>
      <FormSection
        isComplete={isComplete}
        //
        cardHolderName={cardHolderName}
        onCardHolderName={handleCardHolderName}
        //
        cardNumber={cardNumber}
        onCardNumber={handleCardNumber}
        //
        cardMonth={cardMonth}
        onCardMonth={handleCardMonth}
        //
        cardYear={cardYear}
        onCardYear={handleCardYear}
        //
        cardCvc={cardCvc}
        onCardCvc={handleCardCvc}
        onComplete={handleComplete}
        onSubmit={handleSubmit}
        //
        checkFormat={checkFormat}
      />
    </>
  );
};

export default App;
