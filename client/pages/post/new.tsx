import { Tag, User } from "@entities";
import type { GetServerSideProps, NextPage } from "next";
import { requireAuth, withAuth } from "../../ssr/auth";
import Layout from "../../components/layout";
import { Autocomplete, Box, Button, FormControlLabel, ListItem, Paper, Stack, TextField } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import { clientAxios, isBrowser } from "../../axios";
import SaveIcon from "@mui/icons-material/Save";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Switch from "@mui/material/Switch";
import { NewPostInput } from "@dtos";
const Home: NextPage<{ auth: User }> = ({ auth }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [viewPreview, setViewPreview] = useState(true);
  const [options, setOptions] = useState<Tag[]>([]);
  const [pickedTags, setPickedTags] = useState<Tag[]>([]);
  const searchTags = async (value: string) => {
    const res = await clientAxios.get(`tag/?keyword=${value}`).then((x) => x.data);
    console.log(res);
    setOptions(res);
  };
  const postSubmit = async () => {
    await clientAxios.post<any, any, NewPostInput>("post/new", { content, title, tagIds: pickedTags?.map((x) => x.id) });
  };
  useEffect(() => {
    clientAxios.get(`tag/`).then((x) => setOptions(x.data));
  }, []);
  return (
    <Layout title="게시물 작성" auth={auth}>
      <Paper sx={{ p: 2, width: "100%" }}>
        <Stack spacing={2}>
          <h1>게시물 작성</h1>
          <Autocomplete<Tag, true>
            id="combo-box-demo"
            multiple
            value={pickedTags}
            onChange={(event, newValue) => setPickedTags(newValue)} // filterSelectedOptions={true}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionLabel={(option) => option.tagNmEn}
            defaultValue={pickedTags}
            options={[...options]}
            renderInput={(params) => <TextField variant="standard" {...params} onChange={(e) => searchTags(e.target.value)} label="카테고리" />}
          />
          <FormControlLabel control={<Switch checked={viewPreview} onChange={(e) => setViewPreview(e.target.checked)} />} label="미리보기 표시" />
          <TextField variant="standard" label="제목" size="medium" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
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
            <Button variant="contained" style={{ flex: 1 }} onClick={postSubmit}>
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
export const getServerSideProps: GetServerSideProps = requireAuth;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
