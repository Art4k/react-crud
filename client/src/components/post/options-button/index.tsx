import {
  Box, IconButton, Menu, MenuItem,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditPost from "../edit-post";
import DeletePost from "../delete-post";

const ITEM_HEIGHT = 48;

type PostOptionProps = {
  id: number,
  title: string,
  text: string,
  updateList: any
};

const PostOptions: React.FC<PostOptionProps> = ({
  id, title, text, updateList,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [toggleEdit, setToggleEdit] = React.useState(false);
  const [toggleDelete, setToggleDelete] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const updatedPost = (newPosts: PostModel[]) => {
    updateList(newPosts);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        <IconButton
          sx={{ display: toggleEdit || toggleDelete ? "none" : "block" }}
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "10ch",
            },
          }}
        >
          <MenuItem onClick={() => { setToggleEdit(!toggleEdit); handleClose(); }}>
            Edit
          </MenuItem>
          <MenuItem onClick={() => { setToggleDelete(!toggleDelete); handleClose(); }}>
            Delete
          </MenuItem>
        </Menu>
      </Box>
      {toggleEdit && (
        <EditPost
          updatedPost={updatedPost}
          setToggleEdit={() => setToggleEdit(!toggleEdit)}
          id={id}
          title={title}
          text={text}
        />
      )}
      {toggleDelete && (
        <DeletePost
          updatedPost={updatedPost}
          setToggleDelete={() => setToggleDelete(!toggleDelete)}
          id={id}
          title={title}
        />
      )}
    </>
  );
};

export default PostOptions;
