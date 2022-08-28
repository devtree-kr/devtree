type MetaData = {
  /**작성일 */
  createdAt: Date;
  /**갱신일 */
  updatedAt: Date;
};
/**이용자 */
export type User = {
  /**식별자 */
  id: number;
  /**이메일 */
  email: string;
  /**암호 */
  password?: string;
  /**닉네임 */
  nickName: string;
  /**주소 */
  address?: string;
  /**우편번호 */
  zipcode?: string;
  tel?: string;
  sex?: string;
  birthday?: Date;
  name?: string;
  corpId?: string;
  userImgId?: string;
} & MetaData;

export type Post = {
  id: number;
  userId: number;
  title: string;
  content: string;
  views: number;
} & MetaData;

export type Tag = {
  id: number;
  tagNmKr: string;
  tagNmEn: string;
};

export type PostTagMap = {
  postId: number;
  tagId: number;
};
