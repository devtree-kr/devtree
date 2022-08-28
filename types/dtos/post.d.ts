import { Post, Tag } from "../entities";
export type NewPostInput = {
  title: string;
  content: string;
  tagIds: number[];
};

export type SinglePostView = {
  tags: Tag[];
} & Post;
