// @ts-nocheck
import React, { useState, useRef } from "react";
import {
  Form,
  Button,
  Image,
  Divider,
  Message,
  Icon,
  Grid,
  Segment,
} from "semantic-ui-react";
import uploadPic from "../../utils/uploadPicToCloudinary";
import { submitNewPost } from "../../utils/postActions";

function CreatePost({ user, setPosts }) {
  const [newPost, setNewPost] = useState({ text: "", location: "" });
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const [error, setError] = useState(null);
  const [highlighted, setHighlighted] = useState(false);

  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL?.createObjectURL(files[0]));
    }

    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const addStyles = () => ({
    textAlign: "center",
    height: "90px",
    width: "100px",
    border: "dotted",
    paddingTop: media === null && "5px",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black",
    // marginTop: "10px",
    // marginLeft: "30px",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let picUrl;

    if (media !== null) {
      picUrl = await uploadPic(media);
      if (!picUrl) {
        setLoading(false);
        return setError("Error Uploading Image");
      }
    }

    await submitNewPost(
      newPost.text,
      newPost.location,
      picUrl,
      setPosts,
      setNewPost,
      setError
    );

    setMedia(null);
    setMediaPreview(null);
    setLoading(false);
  };

  return (
    <Segment>
      <Form error={error !== null} onSubmit={handleSubmit}>
        <Message
          error
          onDismiss={() => setError(null)}
          content={error}
          header="Oops!"
        />
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image src={user.profilePicUrl} circular avatar inline />
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.TextArea
                placeholder="Bạn đang nghĩ gì?"
                name="text"
                value={newPost.text}
                onChange={handleChange}
                rows={4}
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <div
                onClick={() => inputRef.current.click()}
                style={addStyles()}
                onDrag={(e) => {
                  e.preventDefault();
                  setHighlighted(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  setHighlighted(false);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  setHighlighted(true);

                  const droppedFile = Array.from(e.dataTransfer.files);

                  setMedia(droppedFile[0]);
                  setMediaPreview(URL?.createObjectURL(droppedFile[0]));
                }}
              >
                {media === null ? (
                  <Icon name="image" size="large" />
                ) : (
                  <>
                    <Image
                      style={{ height: "84px", width: "100px" }}
                      src={mediaPreview}
                      alt="PostImage"
                      centered
                      size="medium"
                    />
                  </>
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row>
            <Grid.Column width={7}>
              <Form.Group>
                <Form.Input
                  value={newPost.location}
                  name="location"
                  onChange={handleChange}
                  label="Thêm vị trí"
                  icon="map marker alternate"
                  placeholder="Check in?"
                  style={{ width: "80%" }}
                />

                <input
                  ref={inputRef}
                  onChange={handleChange}
                  name="media"
                  style={{ display: "none", marginLeft: "20px" }}
                  type="file"
                  accept="image/*"
                />
              </Form.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Button
          circular
          disabled={newPost.text === "" || loading}
          content={<strong>Đăng</strong>}
          style={{ backgroundColor: "#1DA1F2", color: "white" }}
          icon="send"
          loading={loading}
        />
      </Form>
      <Divider />
    </Segment>
  );
}

export default CreatePost;
