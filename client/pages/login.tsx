import { Button, Divider, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useState } from "react";
import { useAllPassed } from "../hooks/use-all-passed";
import { useEmailValidation } from "../hooks/use-email-validation";
import Layout from "./components/layout";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isCorrectEmail = useEmailValidation(email);
  const submittable = useAllPassed(isCorrectEmail, email, password);
  const submit = async () => {};
  return (
    <Layout title="로그인">
      <Paper sx={{ p: 2 }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <Stack spacing={2}>
            <h1 style={{ margin: "auto" }}>로그인</h1>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password-input"
              label="비밀번호"
              variant="outlined"
              type={"password"}
            />
            <Button disabled={!submittable} variant="contained" sx={{ color: "white" }}>
              LOGIN
            </Button>
            <Divider />
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <Typography>아직 회원이 아니신가요?</Typography>
              <NextLink passHref={true} href="/join">
                <Link>회원가입</Link>
              </NextLink>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Layout>
  );
};

export default Login;
