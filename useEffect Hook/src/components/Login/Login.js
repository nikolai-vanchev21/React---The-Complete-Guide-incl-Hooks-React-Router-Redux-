import React, { useContext, useEffect, useReducer, useRef, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

// const emailReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.includes("@") };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.includes("@") };
//   }
//   return { value: "", isValid: false };
// };

// const passwordReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.trim().length > 6 };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.trim().length > 6 };
//   }
//   return { value: "", isValid: false };
// };

const formReducer = (state, action) => {
  if (action.type === "USER_INPUT_EMAIL") {
    return {
      emailValue: action.val,
      emailIsValid: action.val.includes("@"),
      passwordValue: state.passwordValue,
      passwordIsValid: state.passwordIsValid,
    };
  }

  if (action.type === "EMAIL_INPUT_BLUR") {
    return {
      emailValue: state.emailValue,
      emailIsValid: state.emailValue.includes("@"),
      passwordValue: state.passwordValue,
      passwordIsValid: state.passwordIsValid,
    };
  }

  if (action.type === "USER_INPUT_PASSWORD") {
    return {
      emailValue: state.emailValue,
      emailIsValid: state.emailIsValid,
      passwordValue: action.val,
      passwordIsValid: action.val.trim().length > 6,
    };
  }

  if (action.type === "PASSWORD_INPUT_BLUR") {
    return {
      emailValue: state.emailValue,
      emailIsValid: state.emailIsValid,
      passwordValue: state.passwordValue,
      passwordIsValid: state.passwordValue.trim().length > 6,
    };
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [formState, dispatchForm] = useReducer(formReducer, {
    emailValue: "",
    passwordValue: "",
    passwordIsValid: null,
    emailIsValid: null,
  });

  const AuthCtx = useContext(AuthContext);

  const emailInputRef=useRef();

  const passwordInputRef=useRef();

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  const { emailIsValid: emailIsValid } = formState;

  const { passwordIsValid: passwordIsValid } = formState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checkin for validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEAN UP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchForm({ type: "USER_INPUT_EMAIL", val: event.target.value });

    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({ type: "USER_INPUT_PASSWORD", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchForm({ type: "EMAIL_INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchForm({ type: "PASSWORD_INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid)
    {
      AuthCtx.onLogIn(formState.emailValue, formState.passwordValue);
    }else if(!emailIsValid){
      emailInputRef.current.activate()
    }else{
      passwordInputRef.current.activate()
    }
   
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
        ref={emailInputRef}
          label="E-mail"
          type="email"
          id="email"
          isValid={emailIsValid}
          value={formState.emailValue}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
        ref={passwordInputRef}
          label="Password"
          type="password"
          id="password"
          isValid={passwordIsValid}
          value={formState.passwordValue}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
