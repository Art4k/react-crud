import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography,
} from "@mui/material";
import React from "react";
import ApiService from "services/api-service";

type DeletePostProps = {
  setToggleDelete: any
  updatedPost: any,
  id: number,
  title: string
};

const DeletePost: React.FC<DeletePostProps> = ({
  updatedPost, id, title, setToggleDelete,
}) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setToggleDelete(false);
  };
  const handleSubmit = async () => {
    try {
      await ApiService.deletePost(id);
      updatedPost(await ApiService.getAllPosts());
    } catch (error) {
      throw (error instanceof Error ? error.message : error);
    }
    setOpen(false);
    setToggleDelete(false);
  };
  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ar tikrai norite ištrinti šitą įrašą ?</DialogTitle>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <DialogContent>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Atšaukti</Button>
            <Button onClick={handleSubmit}>Ištrinti</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default DeletePost;
