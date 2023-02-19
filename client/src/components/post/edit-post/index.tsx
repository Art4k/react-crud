import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,
} from "@mui/material";
import React from "react";
import ApiService from "services/api-service";

const formatPostData = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const title = formData.get("title");
  const text = formData.get("text");

  if (title === null || title instanceof File || title.length < 2) throw new Error("incorrect title");
  if (text === null || text instanceof File || text.length < 2) throw new Error("incorrect text");

  return {
    title,
    text,
  };
};

type EditPostProps = {
  id: number,
  title: string,
  text: string,
  setToggleEdit: any,
  updatedPost: any
};

const EditPost:React.FC<EditPostProps> = ({
  id, title, text, setToggleEdit, updatedPost,
}) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setToggleEdit(false);
  };
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatPostData(formRef.current);
      await ApiService.updatePost(id, values.text, values.title);
      updatedPost(await ApiService.getAllPosts());
    } catch (error) {
      throw (error instanceof Error ? error.message : error);
    }
    setOpen(false);
    setToggleEdit(false);
  };
  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Turinio redagavimas</DialogTitle>
        <Box
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
          noValidate
          autoComplete="off"
        >
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Pavadinimas"
              name="title"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={title}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="text"
              label="Aprašymas"
              name="text"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={text}
              multiline
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Atšaukti</Button>
            <Button type="submit">Redaguoti</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default EditPost;
