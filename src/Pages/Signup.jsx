import { useEffect, useState } from "react";
import RegForm from "./RegForm";

const SignUp = (e) => {
  return (
    <>
      <p className="announcement">
        Pls Note : It May take up to 2-3 minutes to spinup the server on Render
        in order get response.
      </p>
      <RegForm />
    </>
  );
};

export default SignUp;
