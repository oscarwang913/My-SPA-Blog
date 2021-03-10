import React, { useState, useContext } from "react";
import { updatePost } from "../../WebAPI";
import { useHistory, useParams } from "react-router-dom";
import { postContext } from "../../contexts";

import {
  PostFormContainer,
  PostForm,
  TitleInput,
  ContentInput,
} from "../../components/PostForm";

import { SubmitBtn, ErrorMsg } from "../../components/AccountForm";

export default function EditPage() {
  const { id } = useParams();
  const { posts } = useContext(postContext);
  const defaultTitle = posts.filter((post) => post.id === Number(id))[0].title;
  const defaultContent = posts.filter((post) => post.id === Number(id))[0].body;
  const [newTitle, setNewTitle] = useState(defaultTitle);
  const [newContent, setNewContent] = useState(defaultContent);
  const [errorMessage, setErrorMessage] = useState();

  const history = useHistory();

  const handlePostSubmit = (e) => {
    e.preventDefault();
    updatePost({ newTitle, newContent, id }).then((res) => {
      if (res.ok === 0) {
        return setErrorMessage(res.message);
      }
      history.push("/");
    });
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setNewContent(e.target.value);
  };

  return (
    <PostFormContainer>
      {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}
      <PostForm onSubmit={handlePostSubmit}>
        <TitleInput type="text" onChange={handleTitleChange} value={newTitle} />
        <ContentInput
          onChange={handleContentChange}
          value={newContent}
          rows="10"
        />
        <SubmitBtn>Submit</SubmitBtn>
      </PostForm>
    </PostFormContainer>
  );
}
