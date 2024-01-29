import React, { useEffect } from "react";
import Container from "../../../components/basic/Container";
import { useParams } from "react-router-dom";
import axios from "axios";

function ActivateAccount() {
  const { uid, token } = useParams();
  useEffect(() => {
    const activationAccount = async () => {
      const { data } = await axios.post("auth/users/activation/", {
        uid,
        token,
      });
      console.log(data);
    };
    activationAccount();
  }, []);
  return <Container></Container>;
}

export default ActivateAccount;
