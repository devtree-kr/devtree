import { Button, Dialog, Divider, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import crypto from "crypto";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { clientAxios } from "../axios";
import { validateEmail } from "../utils";
import Layout from "./components/layout";

function SuccessDialog(props: { open: boolean; onClose: () => void }) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Stack sx={{ p: 2 }}>
        <Typography>회원등록에 성공했습니다.</Typography>
        <Typography>로그인해주세요.</Typography>
        <NextLink passHref={true} href="/login">
          <Button variant="contained">로그인</Button>
        </NextLink>
      </Stack>
    </Dialog>
  );
}

function FailedDialog(props: { open: boolean; onClose: () => void }) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Stack sx={{ p: 2 }}>
        <Typography>회원등록에 실패했습니다.</Typography>
        <Typography>재시도해주세요.</Typography>
      </Stack>
    </Dialog>
  );
}

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isSubmittable, setIsSubmittable] = useState(false);
  const [isCorrectEmail, setIsCorrectEmail] = useState(false);
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);
  const [succeed, setSucceed] = useState(false);
  const [failed, setFailed] = useState(false);
  const submit = async () => {
    try {
      const hashPassword = crypto.createHash("sha256").update(password, "utf8").digest("hex");
      await clientAxios.post("user/join/", { email, password: hashPassword, nickName });
      setSucceed(true);
    } catch {
      setFailed(true);
    }
  };
  useEffect(() => setIsPasswordConfirmed(passwordValidate(password, passwordConfirm)), [password, passwordConfirm]);
  useEffect(() => setIsCorrectEmail(emailValidate(email)), [email]);
  useEffect(() => {
    const isSafe = () => {
      if (!email || !password || !passwordConfirm || !isCorrectEmail || !nickName || !isPasswordConfirmed) return false;
      else return true;
    };
    setIsSubmittable(isSafe());
  }, [email, isCorrectEmail, isPasswordConfirmed, nickName, password, passwordConfirm]);

  return (
    <Layout title="회원가입">
      <SuccessDialog open={succeed} onClose={() => setSucceed(false)} />
      <FailedDialog open={failed} onClose={() => setFailed(false)} />
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
            <TextField
              id="nickname-input"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              label="닉네임"
              variant="outlined"
              type={"text"}
              error={!isPasswordConfirmed}
            />
            <Button disabled={!isSubmittable} variant="contained" sx={{ color: "white" }} type="submit">
              회원가입
            </Button>
            <Divider />
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <Typography>이미 회원이신가요?</Typography>
              <NextLink passHref={true} href="/login">
                <Link>로그인</Link>
              </NextLink>
            </Stack>
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
