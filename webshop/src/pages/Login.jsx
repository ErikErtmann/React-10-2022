import { useTranslation } from "react-i18next";
import { useContext, useRef, useState } from "react";
import AuthContext from "../store/AuthContext";

function Login() {
  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNiVmxS-uZJB5iUHlDTvEHqXYC6ADgzlI";
  const [message, setMessage] = useState("")
  const { t } = useTranslation();

  const login = () => {
    const newUser = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value,
      "returnSecureToken": true
    }
    fetch (url,{
      "method": "POST",
      "body":JSON.stringify(newUser),
      "headers": {
        "Content-Type": "application/json",
      }
  }).then(res => res.json())
  .then(json => {
  if (json.idToken !== undefined) {
    authCtx.login(json.idToken);
  } else if (json.error !== undefined) {
    setMessage((json.error.message));
  }
 });
 }

  return ( 
    <div>
      <div>{t(message)}</div>
      <label>E-mail</label><br />
      <input ref={emailRef} type="text" /> <br />
      <label>Parool</label><br />
      <input ref={passwordRef} type="text" /> <br />
      <button onClick={login}>Logi sisse</button>
    </div>
   );
}

export default Login;