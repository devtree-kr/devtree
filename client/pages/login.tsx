import { Button, Divider, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import NextLink from "next/link";
import Layout from "./components/layout";

const Login: NextPage = () => {
  return (
    <Layout title="로그인">
      <Paper sx={{ p: 2 }}>
        <form>
          <Stack spacing={2}>
            <h1 style={{ margin: "auto" }}>로그인</h1>
            <TextField id="email-input" label="이메일 주소" variant="outlined" type={"email"} />
            <TextField id="password-input" label="비밀번호" variant="outlined" type={"password"} />
            <Button variant="contained" sx={{ color: "white" }}>
              LOGIN
            </Button>
            <Divider />
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <Typography>아직 회원이 아니신가요?</Typography>
              <NextLink passHref={true} href="/">
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
