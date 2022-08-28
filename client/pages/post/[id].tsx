import { User } from "@entities";
import { GetServerSideProps, NextPage } from "next";
import { ssrAxios } from "../../axios";
import Layout from "../../components/layout";
import { withAuth } from "../../ssr/auth";
import { SinglePostView } from "@dtos";

const SinglePost: NextPage<{ auth: User; postView: SinglePostView }> = ({ auth, postView }) => {
  return (
    <Layout title={postView.title} auth={auth}>
      HI!
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
