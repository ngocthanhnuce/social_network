import React, { useState } from "react";
import { Comment, Icon, Grid } from "semantic-ui-react";
import calculateTime from "../../utils/calculateTime";
import { deleteComment } from "../../utils/postActions";

function PostComments({ comment, user, setComments, postId }) {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={comment.user.profilePicUrl} />
          <Comment.Content>
            <Comment.Author as="a" href={`/${comment.user.username}`}>
              {comment.user.name}
            </Comment.Author>
            <Comment.Metadata>{calculateTime(comment.date)}</Comment.Metadata>
            <Grid>
              <Grid.Row>
                <Grid.Column width={13}>
                  <Comment.Text>{comment.text}</Comment.Text>
                </Grid.Column>
                <Grid.Column>
                  <Comment.Actions>
                    <Comment.Action style={{ marginTop: "6px" }}>
                      {(user.role === "root" ||
                        comment.user._id === user._id) && (
                        <Icon
                          disabled={disabled}
                          color="red"
                          name="trash"
                          onClick={async () => {
                            setDisabled(true);
                            await deleteComment(
                              postId,
                              comment._id,
                              setComments
                            );
                            setDisabled(false);
                          }}
                        />
                      )}
                    </Comment.Action>
                  </Comment.Actions>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div style={{ display: "flex" }}></div>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </>
  );
}

export default PostComments;
