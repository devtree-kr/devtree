import { Button, Divider, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { clientAxios } from "../axios";
import { validateEmail } from "../utils";
import Layout from "./components/layout";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isSubmittable, setIsSubmittable] = useState(false);
  const [isCorrectEmail, setIsCorrectEmail] = useState(false);
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);
  const submit = async () => {
    clientAxios.post("user/join/", { hey: "d" });
  };
  useEffect(() => setIsPasswordConfirmed(passwordValidate(password, passwordConfirm)), [password, passwordConfirm]);
  useEffect(() => setIsCorrectEmail(emailValidate(email)), [email]);
  useEffect(() => {
    const isSafe = () => {
      if (!email || !password || !passwordConfirm || !isCorrectEmail || !isPasswordConfirmed) return false;
      else return true;
    };
    setIsSubmittable(isSafe());
  }, [email, isCorrectEmail, isPasswordConfirmed, password, passwordConfirm]);

  return (
    <Layout title="회원가입">
      <Paper sx={{ p: 2 }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <Stack spacing={2}>
            <h1 style={{ margin: "auto" }}>회원가입</h1>
            <TextField
              id="email-input"
              label="이메일 주소"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              type={"email"}
              error={!isCorrectEmail}
            />
            <TextField
              id="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="비밀번호"
              variant="outlined"
              type={"password"}
            />
            <TextField
              id="password-input"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              label="비밀번호확인"
              variant="outlined"
              type={"password"}
              error={!isPasswordConfirmed}
            />
            <Button disabled={!isSubmittable} variant="contained" sx={{ color: "white" }} type="submit">
              회원가입
            </Button>
          </Stack>
        </form>
      </Paper>
    </Layout>
  );
};

function passwordValidate(pw: string, pwc: string) {
  if (pw && pwc !== pw) {
    return false;
  } else {
    return true;
  }
}

function emailValidate(email: string) {
  return !email || validateEmail(email);
}

export default Login;
