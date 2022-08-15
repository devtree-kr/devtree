import { User } from "@entities";
import type { GetServerSideProps, NextPage } from "next";
import { withAuth } from "../../ssr/auth";
import Layout from "../../components/layout";
import { Box, Button, FormControlLabel, Paper, Stack, TextField } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import { isBrowser } from "../../axios";
import SaveIcon from "@mui/icons-material/Save";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Switch from "@mui/material/Switch";

const Home: NextPage<{ auth: User }> = ({ auth }) => {
  const [content, setContent] = useState("");
  const [viewPreview, setViewPreview] = useState(true);
  return (
    <Layout title="게시물 작성" auth={auth}>
      <Paper sx={{ p: 2, width: "100%" }}>
        <Stack spacing={2}>
          <h1>게시물 작성</h1>
          <FormControlLabel control={<Switch checked={viewPreview} onChange={(e) => setViewPreview(e.target.checked)} />} label="미리보기 표시" />
          <TextField variant="standard" label="제목" size="medium" fullWidth />
          <Stack direction="row" spacing={2}>
            <TextField
              style={{ flex: 1 }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              fullWidth
              multiline
              minRows={10}
              placeholder="내용을 입력해주세요..."
            />
            {viewPreview && (
              <Box className="markdown-content" style={{ flex: 1 }}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match && isBrowser() ? (
                        <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {content || "내용을 입력하면 미리보기가 표시됩니다"}
                </ReactMarkdown>
              </Box>
            )}
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" style={{ flex: 1 }}>
              <SaveIcon />
              저장
            </Button>
            <Button variant="contained" style={{ flex: 1 }}>
              <PostAddIcon />
              등록
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Layout>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = withAuth;
