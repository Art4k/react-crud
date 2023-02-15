type PostModel = {
  id: number;
  title: string;
  text: string;
  authorId: number;
  likes: number;
  isDeleted: boolean;
  createdAt: number;
  src: Array<string>;
};
