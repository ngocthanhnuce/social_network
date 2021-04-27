import React, { useState } from "react";
import {
  Segment,
  Image,
  Grid,
  Divider,
  Header,
  Button,
  List,
} from "semantic-ui-react";
import { followUser, unfollowUser } from "../../utils/profileActions";

function ProfileHeader({
  profile,
  ownAccount,
  loggedUserFollowStats,
  setUserFollowStats,
}) {
  const [loading, setLoading] = useState(false);
  const isFollowing =
    loggedUserFollowStats.following.length > 0 &&
    loggedUserFollowStats.following.filter(
      (following) => following.user === profile.user._id
    ).length > 0;

  return (
    <div style={{ backgroundColor: "#E6E6E6" }}>
      <Segment>
        <Grid stackable>
          {/* <Grid.Row>
            <Grid.Column width={16} style={{ textAlign: "center" }}>
              <Image size="small" avatar src={profile.user.profilePicUrl} />
            </Grid.Column>
          </Grid.Row> */}
          <Grid.Column width={11}>
            <Grid.Row>
              <Header
                as="h2"
                content={profile.user.name}
                style={{ marginBottom: "5px" }}
              />
            </Grid.Row>

            <Grid.Row stretched>
              {profile.bio}
              <Divider hidden />
            </Grid.Row>

            <Grid.Row>
              <h3>Giới thiệu</h3>
              {profile.work && (
                <List.Item style={{ display: "flex" }}>
                  <List.Icon name="briefcase" />
                  <List.Content
                    style={{ paddingLeft: "5px" }}
                    content={profile.work}
                  />
                </List.Item>
              )}
              {profile.address && (
                <List.Item style={{ display: "flex" }}>
                  <List.Icon name="point" color="blue" />
                  <List.Content
                    style={{ paddingLeft: "5px" }}
                    content={profile.address}
                  />
                </List.Item>
              )}
              {profile.relationship && (
                <List.Item style={{ display: "flex" }}>
                  <List.Icon name="heart" color="red" />
                  <List.Content
                    style={{ paddingLeft: "5px" }}
                    content={profile.relationship}
                  />
                </List.Item>
              )}
              {profile.education && (
                <List.Item style={{ display: "flex" }}>
                  <List.Icon name="student" />
                  <List.Content
                    style={{ paddingLeft: "5px" }}
                    content={profile.education}
                  />
                </List.Item>
              )}
              {profile.birthday && (
                <List.Item style={{ display: "flex" }}>
                  <List.Icon name="birthday cake" color="red" />
                  <List.Content
                    style={{ paddingLeft: "5px" }}
                    content={profile.birthday}
                  />
                </List.Item>
              )}
              {profile.social ? (
                <List>
                  <List.Item>
                    <List.Icon name="mail" />
                    <List.Content content={profile.user.email} />
                  </List.Item>

                  {profile.social.facebook && (
                    <div
                      onClick={() => window.open(`${profile.social.facebook}`)}
                    >
                      <List.Item style={{ cursor: "pointer", display: "flex" }}>
                        <List.Icon name="facebook" color="blue" />
                        <List.Content
                          style={{ color: "blue", paddingLeft: "5px" }}
                          content={profile.social.facebook}
                        />
                      </List.Item>
                    </div>
                  )}

                  {profile.social.instagram && (
                    <div
                      onClick={() => window.open(`${profile.social.instagram}`)}
                    >
                      <List.Item style={{ cursor: "pointer", display: "flex" }}>
                        <List.Icon name="instagram" color="red" />
                        <List.Content
                          style={{ color: "blue", paddingLeft: "5px" }}
                          content={profile.social.instagram}
                        />
                      </List.Item>
                    </div>
                  )}

                  {profile.social.youtube && (
                    <div
                      onClick={() => window.open(`${profile.social.youtube}`)}
                    >
                      <List.Item style={{ cursor: "pointer", display: "flex" }}>
                        <List.Icon name="youtube" color="red" />
                        <List.Content
                          style={{ color: "blue", paddingLeft: "5px" }}
                          content={profile.social.youtube}
                        />
                      </List.Item>
                    </div>
                  )}

                  {profile.social.twitter && (
                    <div
                      onClick={() => window.open(`${profile.social.twitter}`)}
                    >
                      <List.Item style={{ cursor: "pointer" }}>
                        <List.Icon name="twitter" color="blue" />
                        <List.Content
                          style={{ color: "blue", paddingLeft: "5px" }}
                          content={profile.social.twitter}
                        />
                      </List.Item>
                    </div>
                  )}
                </List>
              ) : (
                <>No Social Media Links </>
              )}
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={5} stretched style={{ textAlign: "center" }}>
            <Grid.Row>
              <Image size="small" avatar src={profile.user.profilePicUrl} />
            </Grid.Row>
            <br />

            {!ownAccount && (
              <Button
                compact
                loading={loading}
                disabled={loading}
                content={isFollowing ? "Following" : "Follow"}
                icon={isFollowing ? "check circle" : "add user"}
                color={isFollowing ? "instagram" : "twitter"}
                onClick={async () => {
                  setLoading(true);
                  isFollowing
                    ? await unfollowUser(profile.user._id, setUserFollowStats)
                    : await followUser(profile.user._id, setUserFollowStats);
                  setLoading(false);
                }}
              />
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default ProfileHeader;
