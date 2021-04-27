import React from "react";
import { Icon, Menu } from "semantic-ui-react";

function ProfileMenuTabs({
  activeItem,
  handleItemClick,
  followersLength,
  followingLength,
  ownAccount,
  loggedUserFollowStats,
}) {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Menu compact>
        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={() => handleItemClick("profile")}
        >
          <Icon name="home" />
          Trang cá nhân
        </Menu.Item>
        <Menu.Item
          active={activeItem === "followers"}
          onClick={() => handleItemClick("followers")}
        >
          <Icon name="users" />
          {followersLength} Người theo dõi
        </Menu.Item>
        {ownAccount ? (
          <>
            <Menu.Item
              active={activeItem === "following"}
              onClick={() => handleItemClick("following")}
            >
              <Icon name="user plus" />
              {loggedUserFollowStats.following.length > 0
                ? loggedUserFollowStats.following.length
                : 0}{" "}
              Đang theo dõi
            </Menu.Item>
            <Menu.Item
              name="updateProfile"
              active={activeItem === "updateProfile"}
              onClick={() => handleItemClick("updateProfile")}
            >
              <Icon name="edit" />
              Chỉnh sửa chi tiết
            </Menu.Item>
            <Menu.Item
              name="settings"
              active={activeItem === "settings"}
              onClick={() => handleItemClick("settings")}
            >
              <Icon name="setting" />
              Cài đặt
            </Menu.Item>
          </>
        ) : (
          <Menu.Item
            name={`${followingLength} following`}
            active={activeItem === "following"}
            onClick={() => handleItemClick("following")}
          >
            <Icon name="user plus" />
            {followingLength} Đang theo dõi
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
}

export default ProfileMenuTabs;
