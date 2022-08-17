import { User } from "@entities";
import type { GetServerSideProps, NextPage } from "next";
import { withAuth } from "../ssr/auth";
import Layout from "../components/layout";
import { Part1, PartCustom } from "../components/part1";

const Home: NextPage<{ auth: User }> = ({ auth }) => {
    return (
        <Layout title="홈" auth={auth}>
            <Part1 />
            <PartCustom title="첫번째 시도" theadName="1" />
            <PartCustom title="두번째 시도" theadName="2" />
            <PartCustom title="세번째 시도" theadName="3" />
            TEST!
            ㅂㅏ보ㅇㅇ
            웅앙앙ㅇ
        </Layout>
    );
};

export default Home;
export const getServerSideProps: GetServerSideProps = withAuth;
