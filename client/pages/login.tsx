import { Button, Divider, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import NextLink from "next/link";
import { useState } from "react";
import { clientAxios } from "../axios";
import { useAllPassed } from "../hooks/use-all-passed";
import { useEmailValidation } from "../hooks/use-email-validation";
import Layout from "../components/layout";
import crypto from "crypto";
import { setCookie } from "nookies";
import { useRouter } from "next/router";
import { checkAuthSSR, requireAuth } from "../ssr/auth";

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
            <Typography style={{ margin: "auto" }} variant="h1" fontSize="2rem">
              로그인
            </Typography>
            <TextField
              id="email-input"
              label={<Typography variant="inherit">이메일 주소</Typography>}
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
              label={<Typography variant="inherit">비밀번호</Typography>}
              variant="outlined"
              type={"password"}
            />
            <Button disabled={!submittable} variant="contained" sx={{ color: "white" }} type="submit">
              LOGIN
            </Button>
            <Divider />
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <Typography variant="subtitle1">아직 회원이 아니신가요?</Typography>
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
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const auth = await checkAuthSSR(req);
  if (auth) {
    return { redirect: { destination: "/", permanent: true } };
  } else {
    return { props: {} };
  }
};
