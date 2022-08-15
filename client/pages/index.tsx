import { User } from "@entities";
import type { GetServerSideProps, NextPage } from "next";
import { withAuth } from "../ssr/auth";
import Layout from "./components/layout";

const Home: NextPage<{ auth: User }> = ({ auth }) => {
  return (
    <Layout title="홈" auth={auth}>
      게시물 데스네
    </Layout>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = withAuth;
