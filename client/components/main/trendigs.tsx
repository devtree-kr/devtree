import { Avatar, Box, Button, Chip, Divider, Link, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForumIcon from "@mui/icons-material/Forum";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const PostBlock = () => {
  const size = 20;
  return (
    <Stack sx={{ flex: 1 }} justifyContent="center">
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" sx={{ maxHeight: 40 }} spacing={1} alignItems="center">
          <Avatar sx={{ height: size, width: size }} />
          <Link href="#" color="#919191" underline="hover">
            <Typography fontSize={"1.4rem"} color="#919191">
              @laptise
            </Typography>
          </Link>
          <Typography fontSize={"1.4rem"} color="#919191">
            {" - "}
          </Typography>
          <Link href="#" color="#919191" underline="hover">
            <Typography fontSize={"1.4rem"} color="#919191">
              Kakao Corp.
            </Typography>
          </Link>
        </Stack>
        <Stack direction="row" sx={{ maxHeight: 40 }} spacing={1} alignItems="center">
          <FavoriteIcon sx={{ color: "#919191" }} />
          <Typography fontSize={"1.2rem"}>11</Typography>
          <ForumIcon sx={{ color: "#919191" }} />
          <Typography fontSize={"1.2rem"}>7</Typography>
          <BookmarkIcon sx={{ color: "#919191" }} />
          <Typography fontSize={"1.2rem"}>65</Typography>
        </Stack>
      </Stack>
      <Link href="#" color="#919191" underline="hover" sx={{ height: 100, display: "flex", alignItems: "center" }}>
        <Typography variant="h2" fontWeight="bold" fontSize="2.4rem" lineHeight={1.5}>
          Docker로 Next.js + Nest.js <br />+ MySql 구축하기
        </Typography>
      </Link>
      <Stack direction="row" spacing={1}>
        <Chip label={<Typography fontSize="1.2rem">Nest.js</Typography>} size="small" style={{ fontSize: "1rem" }} />
        <Chip label={<Typography fontSize="1.2rem">Next.js</Typography>} size="small" style={{ fontSize: "1rem" }} />
        <Chip label={<Typography fontSize="1.2rem">Docker</Typography>} size="small" style={{ fontSize: "1rem" }} />
      </Stack>
    </Stack>
  );
};

export const TrendingsPost = () => {
  const minWidth = 50;
  return (
    <Paper sx={{ p: 3, minWidth: 900 }}>
      <Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h1" color="primary" fontWeight={"bold"}>
            트렌드
          </Typography>
          <Stack direction="row">
            <Tabs variant="fullWidth" sx={{ width: 260 }}>
              <Tab label="오늘" sx={{ fontSize: "1.6rem", minWidth, p: 0 }} />
              <Tab label="이번 주" sx={{ fontSize: "1.6rem", minWidth, p: 0 }} />
              <Tab label="이번 달" sx={{ fontSize: "1.6rem", minWidth, p: 0 }} />
              <Tab label="올해" sx={{ fontSize: "1.6rem", minWidth, p: 0 }} />
            </Tabs>
          </Stack>
        </Stack>
        <Divider sx={{ mt: 1, mb: 1 }} />
        <Stack direction="row" spacing={2} sx={{ p: 2 }}>
          <PostBlock />
          <Divider orientation="vertical" flexItem />
          <PostBlock />
        </Stack>
      </Stack>
    </Paper>
  );
};
