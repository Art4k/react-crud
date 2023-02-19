import { AccountCircle } from "@mui/icons-material";
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,
} from "@mui/material";
import React from "react";
import ApiService from "services/api-service";

const dialogTextField = [{
  id: "title",
  label: "Pavadinimas",
}, {
  id: "text",
  label: "Aprašymas",
}, {
  id: "src",
  label: "Nuotrauka",
}];

const inputBasicText = "Apie ką galvojate?";

const formatPostData = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const title = formData.get("title");
  const text = formData.get("text");
  const src = formData.get("src");

  if (title === null || title instanceof File || title.length < 2) throw new Error("incorrect title");
  if (text === null || text instanceof File || text.length < 2) throw new Error("incorrect text");
  if (src === null || src instanceof File || src.length < 2) throw new Error(`incorrect image`);

  return {
    title,
    text,
    src: [src],
  };
};

const CreatePost:React.FC<any> = ({ updatedPost }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const id = Math.floor(Math.random() * 1000000000); // laikinas sprendimas
      const authorId = 1; // po to iš localStorage bus traukiamas
      const isDeleted = false;
      const likes = 0;
      const createdAt = new Date().getTime();
      const values = formatPostData(formRef.current);
      const newPost = {
        id, ...values, authorId, likes, isDeleted, createdAt,
      };
      await ApiService.createPost(newPost);
      updatedPost(await ApiService.getAllPosts());
    } catch (error) {
      throw (error instanceof Error ? error.message : error);
    }
    setOpen(false);
  };
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", pb: 5 }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          onClick={handleClickOpen}
          fullWidth
          id="create-post"
          label={inputBasicText}
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{inputBasicText}</DialogTitle>
        <Box
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
          noValidate
          autoComplete="off"
        >
          <DialogContent>
            {dialogTextField.map(({ id, label }) => (
              <TextField
                key={id}
                autoFocus
                margin="dense"
                id={id}
                label={label}
                name={id}
                type="text"
                fullWidth
                variant="standard"
                required
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Atšaukti</Button>
            <Button type="submit">Paskelbti</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default CreatePost;
