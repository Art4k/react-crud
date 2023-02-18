import { Avatar, Box } from "@mui/material";
import React from "react";
import ApiService from "services/api-service";

type UserInfoProps = {
  authorId: number | string,
  created: string
};

const UserInfo: React.FC<UserInfoProps> = ({
  authorId,
  created,
}) => {
  const [user, setUser] = React.useState<UserModel | undefined>(undefined);

  React.useEffect(() => {
    if (authorId !== undefined) {
      (async () => {
        const fetchedUser = await ApiService.getSingleUser(authorId);
        setUser(fetchedUser);
      })();
    }
  }, [authorId]);
  return (
    <Box sx={{ display: "flex" }}>
      <Avatar alt="User Avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-256.png" />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ textDecoration: user?.isDeleted ? "line-through" : "" }}>{user?.username}</Box>
        <Box sx={{ typography: "body2", fontWeight: "light" }}>{created}</Box>
      </Box>
    </Box>
  );
};

export default UserInfo;
