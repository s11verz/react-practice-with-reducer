import useSampleInput from "../hooks/use-sample-input";
import "../index.css";

const BasicForm = (props) => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurhandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useSampleInput((value) => value.trim() !== "");

  const {
    value: secondNameValue,
    isValid: secondNameIsValid,
    hasError: secondNameHasError,
    inputChangeHandler: secondNameChangeHandler,
    inputBlurhandler: secondNameBlurHandler,
    reset: secondNameReset,
  } = useSampleInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurhandler: emailBlurHandler,
    reset: emailReset,
  } = useSampleInput((value) => value.trim() !== "" && regex.test(value));

  let formIsValid = false;
  if (firstNameIsValid && secondNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(firstNameValue);
    console.log(secondNameValue);
    console.log(emailValue);

    firstNameReset();
    secondNameReset();
    emailReset();
  };

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const secondNameInputClasses = secondNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First Name must be not empty.</p>
          )}
        </div>
        <div className={secondNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={secondNameValue}
            onChange={secondNameChangeHandler}
            onBlur={secondNameBlurHandler}
          />
          {secondNameHasError && (
            <p className="error-text">Last Name must be not empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Email must be not empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
