import React from "react";
import "./GoogleLogin.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { Button } from "@chakra-ui/react";

function GoogleLogin() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth()
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
  };

  return (
    <div className="googleLogin">
     <div className="googleLogin__container">
       <img src="/images/snowflake.svg" alt="Cool Chat Logo"/>
       <h1>Sign in to Cool Chat App</h1>
       <p>Developed by <a id="portfolioLink" href="https://luqmanrumaiz.github.io/portfolio/" target="_blank">Luqman Rumaiz</a></p>
       <Button onClick={() => signIn()} className="googleLogin__button">Sign in with Google</Button>
     </div>
    </div>
  );
}

export default GoogleLogin;
