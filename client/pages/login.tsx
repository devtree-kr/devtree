import { Button, Divider, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useState } from "react";
import { clientAxios } from "../axios";
import { useAllPassed } from "../hooks/use-all-passed";
import { useEmailValidation } from "../hooks/use-email-validation";
import Layout from "../components/layout";
import crypto from "crypto";
import { setCookie } from "nookies";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isCorrectEmail = useEmailValidation(email);
  const submittable = useAllPassed(isCorrectEmail, email, password);
  const { push, reload } = useRouter();
  const submit = async () => {
    const hashPassword = crypto.createHash("sha256").update(password, "utf8").digest("hex");
    const res = await clientAxios.post("auth/login", { email, password: hashPassword });
    const token = res.data["access_token"];
    setCookie(null, "access_token", token);
    sessionStorage.setItem("access_token", token);
    reload();
  };
  return (
    <Layout title="로그인" auth={null}>
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
            <Button disabled={!submittable} variant="contained" sx={{ color: "white" }} type="submit">
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
