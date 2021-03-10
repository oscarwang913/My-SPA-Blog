import React, { useState } from "react";
import { postArticle } from "../../WebAPI";
import { useHistory } from "react-router-dom";
import {
  PostFormContainer,
  PostForm,
  TitleInput,
  ContentInput,
} from "../../components/PostForm";

import { SubmitBtn, ErrorMsg } from "../../components/AccountForm";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const history = useHistory();

  const handlePostSubmit = (e) => {
    e.preventDefault();
    postArticle(title, content).then((res) => {
      if (res.ok === 0) {
        return setErrorMessage(res.message);
      }
      history.push("/");
    });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <PostFormContainer>
      {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}
      <PostForm onSubmit={handlePostSubmit}>
        <TitleInput
          type="text"
          onChange={handleTitleChange}
          value={title}
          placeholder="New post title here..."
        />
        <ContentInput
          onChange={handleContentChange}
          value={content}
          placeholder="write your post content here..."
          rows="10"
        />
        <SubmitBtn>Submit</SubmitBtn>
      </PostForm>
    </PostFormContainer>
  );
}
