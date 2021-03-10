import React, { useState, useEffect } from "react";
import Proptypes from "prop-types";
import { getPosts, getLimitPost } from "../../WebAPI";
import Pagination from "../../components/Pagination";
import { timeConverter } from "../../utils";
import {
  HomePageContainer,
  PostsContainer,
  PostContainer,
  PostTitle,
  PostDate,
} from "./Home.style";

function Post({ post }) {
  return (
    <PostContainer to={`/posts/${post.id}`}>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{timeConverter(post.createdAt)}</PostDate>
    </PostContainer>
  );
}

Post.propTypes = {
  post: Proptypes.object,
};

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [totoalPageCount, setTotoalPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    getPosts().then((res) => setTotoalPageCount(res.length));
  });

  useEffect(() => {
    getLimitPost(currentPage, postsPerPage).then((data) => setPosts(data));
  }, [currentPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <HomePageContainer>
      <PostsContainer>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </PostsContainer>
      <Pagination
        postsPerPage={postsPerPage}
        totoalPageCount={totoalPageCount}
        handlePageClick={handlePageClick}
      />
    </HomePageContainer>
  );
}
