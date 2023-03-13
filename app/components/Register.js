"use client";
import { useState, useEffect, useRef } from "react";
import { BsInfoCircle, BsCheckCircle } from "react-icons/bs";
import { FaRegTimesCircle } from "react-icons/fa";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,24}$/;

const Register = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState();
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState();
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(pwd);
    console.log(result);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    setSuccess(true);
  };

  return (
    <div className="m-5">
      {success ? (
        <section className=" w-[450px] mx-auto p-10 shadow-2xl rounded-md">
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section className=" w-[450px] mx-auto p-10 shadow-2xl rounded-md">
          <p
            ref={errRef}
            aria-live="assertive"
            className={errMsg ? "block" : "hidden"}
          >
            {errMsg}
          </p>
          <h2 className="text-center p-2 text-orange-700">Register</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-1 ">
              <label htmlFor="username" className="flex items-center gap-5">
                Username
                <span className={validName ? "text-green-500" : "hidden"}>
                  <BsCheckCircle size={20} />
                </span>
                <span
                  className={validName || !user ? "hidden" : "text-red-500"}
                >
                  <FaRegTimesCircle size={20} />
                </span>
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                className="outline-none px-2 py-1 border-b border-green-600"
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName
                    ? "text-xs text-green-500 flex items-center gap-2 w-lg"
                    : "hidden"
                }
              >
                <BsInfoCircle size={20} />4 to 24 characters. Must begin with a
                letter. letters, numbers allowed.
              </p>
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="email" className="flex items-center gap-5">
                email
                <span className={validEmail ? "text-green-500" : "hidden"}>
                  <BsCheckCircle size={20} />
                </span>
                <span
                  className={validEmail || !email ? "hidden" : "text-red-500"}
                >
                  <FaRegTimesCircle size={20} />
                </span>
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                className="outline-none px-2 py-1 border-b border-green-600"
              />
              <p
                id="emailnote"
                className={
                  emailFocus && email && !validEmail
                    ? "text-xs text-green-500 flex items-center gap-2 w-lg"
                    : "hidden"
                }
              >
                <BsInfoCircle size={20} />
                Enter valid email address
              </p>
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="password" className="flex items-center gap-5">
                Password
                <span className={validPwd ? "text-green-500" : "hidden"}>
                  <BsCheckCircle size={20} />
                </span>
                <span className={validPwd || !pwd ? "hidden" : "text-red-500"}>
                  <FaRegTimesCircle size={20} />
                </span>
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className="outline-none px-2 py-1 border-b border-green-600"
              />
              <p
                id="pwdnote"
                className={
                  pwdFocus && !validPwd
                    ? "text-xs text-green-500 flex items-center gap-2 w-lg"
                    : "hidden"
                }
              >
                <BsInfoCircle size={20} />6 to 24 characters. Must include
                uppercase, lowercase letters and a number.
              </p>
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="confirm_pwd" className="flex items-center gap-5">
                Confirm Password
                <span
                  className={
                    validMatch && matchPwd ? "text-green-500" : "hidden"
                  }
                >
                  <BsCheckCircle size={20} />
                </span>
                <span
                  className={
                    validMatch || !matchPwd ? "hidden" : "text-red-500"
                  }
                >
                  <FaRegTimesCircle size={20} />
                </span>
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                className="outline-none px-2 py-1 border-b border-green-600"
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch
                    ? "text-xs text-green-500 flex items-center gap-2 w-lg"
                    : "hidden"
                }
              >
                <BsInfoCircle size={20} />
                Must match password.
              </p>
            </div>
            <br />
            <button
              disabled={
                !validName || !validEmail || !validPwd || !validMatch
                  ? true
                  : false
              }
            >
              Register
            </button>
          </form>
          <p className="flex justify-around items-center">
            <h4>Already registered?</h4>
            <span className="">
              <a href="/signin">Sign In</a>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Register;
