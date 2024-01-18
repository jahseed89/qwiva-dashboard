"use client";

import Image from "next/image";
import "./page.scss";
import InputElement from "@/components/input/InputElement";
import { useState } from "react";
import Button from "@/components/button/Button";

export default function Auth() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPasword] = useState<string>("");
  const [isSubmitting, setIssubmitting] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const [showSignup, setShowSingup] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPasword(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIssubmitting(true);

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email");
    }
    if (password.length < 5) {
      setPasswordError("Password must be more than 5 car");
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Password must match");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmail("");
    setPassword("");
    setConfirmPasword("");

    setIssubmitting(false);
  };

  return (
    <main className="h-[100%]">
      <div className="container mx-auto flex h-screen">
        <div className="bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 hidden lg:block lg:w-[40%] xl:w-[50%] py-10 px-20 mx-auto">
          <div>
            <div className="flex items-center">
              <span>
                <Image src="/auth-logo.png" width={50} height={40} alt="logo" />
              </span>
              <h2 className="pl-5 font-bold text-3xl text-white-100">Stryke</h2>
            </div>
            <div className="w-[90%] text-white-100 my-10 pt-8">
              <h2 className="font-bold text-2xl">
                Let’s build something amazing today.
              </h2>
              <p className="text-sm py-7">
                Maybe some text here will help me see it better. Oh God. Oke,
                let’s do it then.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-between ">
            <span className="absolute bottom-0">
              <Image
                src="/msg-logo.png"
                alt="messages"
                width={80}
                height={80}
              />
            </span>
            <span className="absolute bottom-0 round-img-positioning">
              <Image
                src="/Ellipse 242.png"
                alt="messages"
                width={100}
                height={100}
              />
            </span>
          </div>
        </div>
        {showSignup ? (
          <form
            onSubmit={handleSubmit}
            className="bg-lightgrey-200  py-5 px-10 w-[100%] md:w-[100%] lg:w-[70%] xl:w-[70%] mx-auto relative"
          >
            <div className="w-[100%] md:w-[90%] lg:w-[60%] xl:w-[50%] mx-auto">
              <div>
                <div className="flex items-center mb-5 mt-5 pb-5 lg:hidden">
                  <span>
                    <Image
                      src="/dashboard-logo.png"
                      width={30}
                      height={20}
                      alt="logo"
                    />
                  </span>
                  <h2 className="pl-5 font-bold text-3xl">Stryke</h2>
                </div>
                <div className="my-6">
                  <Image src="/hey.png" width={30} height={30} alt="hi" />
                </div>
                <h1 className="text-2xl font-bold py-4">Sign Up</h1>
                <p>Let’s build something great</p>
              </div>
              <div className="mt-10">
                <div className="form-input">
                  <label className="text-gray-100 text-sm">
                    E-mail or phone number
                  </label>
                  <InputElement
                    type="email"
                    placeholder="Type your e-mail or phone number"
                    value={email}
                    handleChange={handleEmailChange}
                    required
                  />
                  {emailError && (
                    <span className="text-red-200 text-sm">{emailError}</span>
                  )}
                </div>
                <div className="form-input">
                  <label className="text-gray-100 text-sm">Password</label>
                  <InputElement
                    type="password"
                    placeholder="********"
                    value={password}
                    handleChange={handlePasswordChange}
                    required
                  />
                  {passwordError && (
                    <span className="text-red-200 text-sm">
                      {passwordError}
                    </span>
                  )}
                </div>
                <div className="form-input">
                  <label className="text-gray-100 text-sm">
                    Confirm password
                  </label>
                  <InputElement
                    type="password"
                    placeholder="********"
                    value={confirmPassword}
                    handleChange={handlePasswordConfirmation}
                    required
                  />
                  {confirmPasswordError && (
                    <span className="text-red-200 text-sm">
                      {confirmPasswordError}
                    </span>
                  )}
                </div>
                <div className="form-input pt-2">
                  <Button
                    btnText="Sign Up"
                    disable={isSubmitting}
                    onClick={(e) => console.log("Form submited", e)}
                  />
                </div>
                <div>
                  <p className="text-xs my-7 text-right">
                    <span>or do it with via other account</span>
                  </p>
                  <div className="flex justify-between items-center media">
                    <span className="rounded bg-white-100 flex justify-center items-center">
                      <Image
                        src="/google.svg"
                        width={20}
                        height={20}
                        alt="google"
                      />
                    </span>
                    <span className="rounded bg-white-100 flex justify-center items-center">
                      <Image
                        src="/apple-logo.svg"
                        alt="apple"
                        width={20}
                        height={20}
                      />{" "}
                    </span>
                    <span className="rounded bg-white-100 flex justify-center items-center">
                      <Image
                        src="/facebook.svg"
                        width={20}
                        height={10}
                        alt="facebood"
                      />
                    </span>
                  </div>
                  <p className="text-right text-sm pt-20">
                    Already have an account{" "}
                    <span
                      className="text-blue-100 cursor-auto"
                      onClick={() => setShowSingup((prev) => !prev)}
                    >
                      Login
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-lightgrey-200  py-5 px-10 w-[100%] md:w-[100%] lg:w-[70%] xl:w-[70%] mx-auto relative"
          >
            <div className="w-[100%] md:w-[90%] lg:w-[60%] xl:w-[50%] mx-auto">
              <div>
                <div className="flex items-center mb-5 mt-5 pb-5 lg:hidden">
                  <span>
                    <Image
                      src="/dashboard-logo.png"
                      width={30}
                      height={20}
                      alt="logo"
                    />
                  </span>
                  <h2 className="pl-5 font-bold text-3xl">Stryke</h2>
                </div>
                <div className="my-6">
                  <Image src="/hey.png" width={30} height={30} alt="hi" />
                </div>
                <h1 className="text-2xl font-bold py-4">Welcome back!</h1>
                <p>Let’s build something great</p>
              </div>
              <div className="mt-10">
                <div className="form-input">
                  <label className="text-gray-100 text-sm">
                    E-mail or phone number
                  </label>
                  <InputElement
                    type="email"
                    placeholder="Type your e-mail or phone number"
                    value={email}
                    handleChange={handleEmailChange}
                    required
                  />
                  {emailError && (
                    <span className="text-red-200 text-sm">{emailError}</span>
                  )}
                </div>
                <div className="form-input">
                  <label className="text-gray-100 text-sm">Password</label>
                  <InputElement
                    type="password"
                    placeholder="********"
                    value={password}
                    handleChange={handlePasswordChange}
                    required
                  />
                  {passwordError && (
                    <span className="text-red-200 text-sm">
                      {passwordError}
                    </span>
                  )}
                </div>
                <div className="form-input pt-2">
                  <Button
                    btnText="Sign In"
                    disable={isSubmitting}
                    onClick={(e) => console.log("Form submited", e)}
                  />
                </div>
                <div>
                  <p className="text-xs my-7 text-right">
                    <span>or do it with via other account</span>
                  </p>
                  <div className="flex justify-between items-center media">
                    <span className="rounded bg-white-100 flex justify-center items-center">
                      <Image
                        src="/google.svg"
                        width={20}
                        height={20}
                        alt="google"
                      />
                    </span>
                    <span className="rounded bg-white-100 flex justify-center items-center">
                      <Image
                        src="/apple-logo.svg"
                        alt="apple"
                        width={20}
                        height={20}
                      />{" "}
                    </span>
                    <span className="rounded bg-white-100 flex justify-center items-center">
                      <Image
                        src="/facebook.svg"
                        width={20}
                        height={10}
                        alt="facebood"
                      />
                    </span>
                  </div>
                  <p className="text-right text-sm pt-20">
                    Don’t have an account?{" "}
                    <span
                      className="text-blue-100 cursor-auto"
                      onClick={() => setShowSingup((prev) => !prev)}
                    >
                      Get started
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
