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
  tel?: string;
  sex?: string;
  birthday?: Date;
  name?: string;
  corpId?: string;
  userImgId?: string;
  createdAt: Date;
  updatedAt: Date;
};
