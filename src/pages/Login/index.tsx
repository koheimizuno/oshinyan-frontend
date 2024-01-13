import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../slices/auth";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";

function Login() {
  const dispatch = useDispatch();
  const [submitData, setSubmitData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitData({ ...submitData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(LoginAction(submitData));
  };

  return (
    <MainLayout>
      <Container>
        <div className="h-[50vh] flex justify-center items-center">
          <form onSubmit={handleSubmit} className="">
            <label htmlFor="username" className="block mb-5">
              Username:
              <input
                type={"text" || "email"}
                name="username"
                id="username"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="" className="block mb-5">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
              />
            </label>
            <input type="submit" value="Login" />
          </form>
        </div>
      </Container>
    </MainLayout>
  );
}

export default Login;
