import React, { useState } from "react";
import {
  Card,
  Icon,
  Image,
  Divider,
  Segment,
  Button,
  Popup,
  Header,
  Modal,
  Grid,
} from "semantic-ui-react";
import PostComments from "./PostComments";
import CommentInputField from "./CommentInputField";
import calculateTime from "../../utils/calculateTime";
import Link from "next/link";
import { deletePost, likePost } from "../../utils/postActions";
import LikesList from "./LikesList";
import ImageModal from "./ImageModal";
import NoImageModal from "./NoImageModal";
import { FacebookShareButton } from "react-share";

function CardPost({ post, user, setPosts, setShowToastr, socket }) {
  const [likes, setLikes] = useState(post.likes);

  const isLiked =
    likes.length > 0 &&
    likes.filter((like) => like.user === user._id).length > 0;

  const [comments, setComments] = useState(post.comments);

  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const addPropsToModal = () => ({
    post,
    user,
    setLikes,
    likes,
    isLiked,
    comments,
    setComments,
  });

  return (
    <>
      {showModal && (
        <Modal
          open={showModal}
          closeIcon
          closeOnDimmerClick
          onClose={() => setShowModal(false)}
        >
          <Modal.Content>
            {post.picUrl ? (
              <ImageModal {...addPropsToModal()} />
            ) : (
              <NoImageModal {...addPropsToModal()} />
            )}
          </Modal.Content>
        </Modal>
      )}

      <>
        <Card color="teal" fluid>
          <Card.Content>
            <Image
              floated="left"
              src={post.user.profilePicUrl}
              avatar
              circular
            />

            {(user.role === "root" || post.user._id === user._id) && (
              <Grid.Column floated="right" width="2">
                <Popup
                  on="click"
                  position="top right"
                  trigger={
                    <Icon
                      name="ellipsis horizontal"
                      size="small"
                      style={{ cursor: "pointer" }}
                    />
                  }
                >
                  <Header as="h4" content="Bạn có muốn xóa bài viết ?" />
                  <div style={{ textAlign: "center" }}>
                    <Button
                      color="red"
                      icon="trash"
                      content="Delete"
                      onClick={() =>
                        deletePost(post._id, setPosts, setShowToastr)
                      }
                    />
                  </div>
                </Popup>
              </Grid.Column>
            )}

            <Card.Header>
              <Link href={`/${post.user.username}`}>
                <a>{post.user.name}</a>
              </Link>
            </Card.Header>

            <Card.Meta>{calculateTime(post.createdAt)}</Card.Meta>

            {post.location && <Card.Meta content={post.location} />}
          </Card.Content>
          {post.picUrl && (
            <Image
              src={post.picUrl}
              style={{ cursor: "pointer" }}
              floated="left"
              wrapped
              ui={false}
              alt="PostImage"
              onClick={() => setShowModal(true)}
            />
          )}
          <Card.Content>
            <Card.Description
              style={{
                fontSize: "17px",
                letterSpacing: "0.1px",
                wordSpacing: "0.35px",
              }}
            >
              <p>
                <span style={{ color: "black", paddingRight: "5px" }}>
                  {" "}
                  <Link href={`/${post.user.username}`}>
                    <a>{post.user.name}</a>
                  </Link>
                </span>
                <span>{post.text}</span>
              </p>
            </Card.Description>
          </Card.Content>

          <Card.Content extra>
            <Icon
              name={isLiked ? "heart" : "heart outline"}
              size="large"
              color="red"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (socket.current) {
                  socket.current.emit("likePost", {
                    postId: post._id,
                    userId: user._id,
                    like: isLiked ? false : true,
                  });

                  socket.current.on("postLiked", () => {
                    if (isLiked) {
                      setLikes((prev) =>
                        prev.filter((like) => like.user !== user._id)
                      );
                    }
                    //
                    else {
                      setLikes((prev) => [...prev, { user: user._id }]);
                    }
                  });
                } else {
                  likePost(
                    post._id,
                    user._id,
                    setLikes,
                    isLiked ? false : true
                  );
                }
              }}
            />

            <LikesList
              postId={post._id}
              trigger={
                likes.length > 0 && (
                  <span className="spanLikesList" style={{ color: "black" }}>
                    {`${likes.length} ${likes.length === 1 ? "like" : "likes"}`}
                  </span>
                )
              }
            />

            <Icon
              name="comment outline"
              size="large"
              style={{ marginLeft: "7px" }}
              color="blue"
            />
            <FacebookShareButton
              url={"https://social-network-98.herokuapp.com/"}
              quote={post?.text}
              // hashtag="#social_network"
            >
              <Icon name="send" size="large" style={{ marginLeft: "7px" }} />
            </FacebookShareButton>
            {comments.length > 0 &&
              comments.map(
                (comment, i) =>
                  i < 3 && (
                    <PostComments
                      key={comment._id}
                      comment={comment}
                      postId={post._id}
                      user={user}
                      setComments={setComments}
                    />
                  )
              )}

            {comments.length > 3 && (
              <Button
                content="View More"
                color="teal"
                basic
                circular
                onClick={() => setShowModal(true)}
              />
            )}

            <Divider hidden />

            <CommentInputField
              user={user}
              postId={post._id}
              setComments={setComments}
            />
          </Card.Content>
        </Card>
      </>
      <Divider hidden />
    </>
  );
}

export default CardPost;
