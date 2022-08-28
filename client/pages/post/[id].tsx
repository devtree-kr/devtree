import { User } from "@entities";
import { GetServerSideProps, NextPage } from "next";
import { ssrAxios, isBrowser } from "../../axios";
import Layout from "../../components/layout";
import { withAuth } from "../../ssr/auth";
import { SinglePostView } from "@dtos";
import { Box, Chip, Divider, Stack, Tooltip } from "@mui/material";
import ReactMarkdown from "react-markdown";
//@ts-ignore
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
const SinglePost: NextPage<{ auth: User; postView: SinglePostView }> = ({ auth, postView }) => {
  return (
    <Layout title={postView.title} auth={auth}>
      <Box className="markdown-content" style={{ flex: 1, backgroundColor: "white", padding: 40, minWidth: "80%" }}>
        <Stack spacing={2}>
          <Typography variant="h1" sx={{ fontSize: "3rem" }}>
            {postView.title}
          </Typography>
          <Stack direction="row" spacing={1}>
            {postView.tags.map((tag) => (
              <Tooltip key={tag.id} placement="top" title={tag.tagNmKr}>
                <Chip icon={<FaceIcon />} label={tag.tagNmEn} variant="outlined" />
              </Tooltip>
            ))}
          </Stack>
          <Divider />
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
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
            {postView.content}
          </ReactMarkdown>
        </Stack>
      </Box>
    </Layout>
  );
};
export default SinglePost;
export const getServerSideProps: GetServerSideProps = (ctx) =>
  withAuth(ctx, async () => {
    const postId = ctx.params?.id;
    const postView = await ssrAxios.get(`post/${postId}`).then((x) => JSON.parse(JSON.stringify(x.data)));
    return { props: { postView } };
  });
