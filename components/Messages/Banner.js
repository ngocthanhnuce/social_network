// @ts-nocheck
import React from "react";
import { Segment, Grid, Image, Icon } from "semantic-ui-react";

function Banner({ bannerData, connectedUsers }) {
  const { name, profilePicUrl } = bannerData;
  const isOnline =
    connectedUsers.length > 0 &&
    connectedUsers.filter((user) => user.userId === chat.messagesWith).length >
      0;

  return (
    <Segment color="teal" attached="top">
      <Grid>
        <Grid.Column floated="left" width={13}>
          <h4>
            <Image avatar src={profilePicUrl} />
            {name}
          </h4>
        </Grid.Column>
        <Grid.Column floated="right" width={3}>
          <Grid.Row style={{ marginLeft: "25px" }}>
            <Icon name="call" color="blue" style={{ marginRight: "20px" }} />
            <Icon name="video" color="blue" />{" "}
            {isOnline && <Icon name="circle" size="small" color="green" />}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default Banner;
