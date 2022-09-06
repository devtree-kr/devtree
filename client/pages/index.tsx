import { User } from "@entities";
import type { GetServerSideProps, NextPage } from "next";
import { withAuth } from "../ssr/auth";
import Layout from "../components/layout";
import { TrendingsPost } from "../components/main/trendigs";

const Home: NextPage<{ auth: User }> = ({ auth }) => {
  return (
    <Layout title="홈" auth={auth}>
      <TrendingsPost />
    </Layout>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = withAuth;
