import { Avatar, Box, Button, Chip, Divider, IconButton, Link, Paper, Tab, Tabs, Typography } from "@mui/material";
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
            <Typography variant="caption" color="#919191">
              @laptise
            </Typography>
          </Link>
          <Typography color="#919191">{" - "}</Typography>
          <Link href="#" color="#919191" underline="hover">
            <Typography color="#919191" variant="caption">
              Kakao Corp.
            </Typography>
          </Link>
        </Stack>
        <Stack direction="row" sx={{ maxHeight: 40, fontSize: 14 }} spacing={1} alignItems="center">
          <FavoriteIcon sx={{ color: "#919191" }} fontSize="inherit" />
          <Typography variant="caption">11</Typography>
          <ForumIcon sx={{ color: "#919191" }} fontSize="inherit" />
          <Typography variant="caption">7</Typography>
          <BookmarkIcon sx={{ color: "#919191" }} fontSize="inherit" />
          <Typography variant="caption">65</Typography>
        </Stack>
      </Stack>
      <Link href="#" color="#919191" underline="hover" sx={{ height: 100, display: "flex", alignItems: "center" }}>
        <Typography variant="h3" fontWeight="bold" fontSize={24} lineHeight={1.4}>
          Docker로 Next.js + Nest.js <br />+ MySql 구축하기
        </Typography>
      </Link>
      <Stack direction="row" spacing={1}>
        <Chip label={<Typography variant="caption">Nest.js</Typography>} size="small" />
        <Chip label={<Typography variant="caption">Next.js</Typography>} size="small" />
        <Chip label={<Typography variant="caption">Docker</Typography>} size="small" />
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
          <Typography variant="h1" color="primary" fontWeight={"bold"} fontSize={30}>
            트렌드
          </Typography>
          <Stack direction="row">
            <Tabs variant="fullWidth" sx={{ width: 260 }}>
              <Tab label="오늘" sx={{ minWidth, p: 0 }} />
              <Tab label="이번 주" sx={{ minWidth, p: 0 }} />
              <Tab label="이번 달" sx={{ minWidth, p: 0 }} />
              <Tab label="올해" sx={{ minWidth, p: 0 }} />
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
