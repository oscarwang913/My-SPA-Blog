import React, { useState, useEffect } from "react";
import { getSinglePost, deletePost } from "../../WebAPI";
import { useParams, useHistory } from "react-router-dom";
import { timeConverter } from "../../utils";
import {
  PostPageContainer,
  PostTitle,
  PostTime,
  PostContent,
  Button,
} from "./Post.style";

export default function PostPage() {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState(null);
  const history = useHistory();
  useEffect(() => {
    getSinglePost(id).then((data) => setSinglePost(data[0]));
  }, [id, singlePost]);

  useEffect(() => {
    return () => setSinglePost(null);
  }, []);

  const handleDeletePost = () => {
    deletePost(id).then(() => history.push("/"));
  };

  const handleEditPost = () => {
    history.push(`/editPost/${id}`);
  };

  return (
    <PostPageContainer>
      {singlePost && <PostTitle>{singlePost.title}</PostTitle>}
      {singlePost && <PostTime>{timeConverter(singlePost.createdAt)}</PostTime>}
      {singlePost && <PostContent>{singlePost.body}</PostContent>}
      {singlePost && <Button onClick={handleEditPost}>Edit</Button>}
      {singlePost && (
        <Button delete onClick={handleDeletePost}>
          Delete
        </Button>
      )}
    </PostPageContainer>
  );
}
