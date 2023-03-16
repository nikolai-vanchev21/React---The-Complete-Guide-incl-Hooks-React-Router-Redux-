import UseInput from "./useInput";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = UseInput(!isEmpty);

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: cityReset,
  } = UseInput(!isEmpty);

  const {
    value: postalValue,
    isValid: postalIsValid,
    hasError: postalHasError,
    valueChangeHandler: postalInputChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetPostal,
  } = UseInput(isFiveChars);

  const {
    value: streetName,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetInputChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = UseInput(!isEmpty);

  let formIsValid = false;

  if (nameIsValid && streetIsValid && cityIsValid && postalIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: nameValue,
      street: streetName,
      city: cityValue,
      postalCode: postalValue,
    });
    resetPostal();
    resetStreet();
    nameReset();
    cityReset();
  };

  const nameControlClasses = `${classes.control} ${
    nameHasError ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    streetHasError ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    postalHasError ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    cityHasError ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
        {nameHasError && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetInputChangeHandler}
          onBlur={streetBlurHandler}
          value={streetName}
        />
        {streetHasError && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalInputChangeHandler}
          onBlur={postalBlurHandler}
          value={postalValue}
        />
        {postalHasError && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityInputChangeHandler}
          onBlur={cityInputBlurHandler}
          value={cityValue}
        />
        {cityHasError && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
