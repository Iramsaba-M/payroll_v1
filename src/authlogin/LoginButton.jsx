import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="bg-blue-500 m-10 text-white p-2" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;