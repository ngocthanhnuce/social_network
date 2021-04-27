// @ts-nocheck
import React from "react";
import { List, Icon } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { logoutUser } from "../../utils/authUser";

function SideMenu({
  user: { unreadNotification, email, unreadMessage, username, isAdmin },
}) {
  const router = useRouter();

  const isActive = (route) => router.pathname === route;

  return (
    <>
      <List
        style={{ paddingTop: "1rem" }}
        size="big"
        verticalAlign="middle"
        selection
      >
        <Link href="/">
          <List.Item active={isActive("/")}>
            <Icon name="home" size="large" color={isActive("/") && "teal"} />
            <List.Content>
              <List.Header content="Trang chủ" />
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href="/messages">
          <List.Item active={isActive("/messages")}>
            <Icon
              name={unreadMessage ? "hand point right" : "mail outline"}
              size="large"
              color={
                (isActive("/messages") && "teal") || (unreadMessage && "orange")
              }
            />
            <List.Content>
              <List.Header content="Tin nhắn" />
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href="/notifications">
          <List.Item active={isActive("/notifications")}>
            <Icon
              name={unreadNotification ? "bell" : "bell outline"}
              size="large"
              color={
                (isActive("/notifications") && "teal") ||
                (unreadNotification && "red")
              }
            />
            <List.Content>
              <List.Header content="Thông báo" />
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href={`/${username}`}>
          <List.Item active={router.query.username === username}>
            <Icon
              name="user"
              size="large"
              color={router.query.username === username && "teal"}
            />
            <List.Content>
              <List.Header content="Trang cá nhân" />
            </List.Content>
          </List.Item>
        </Link>
        <br />
        {isAdmin ? (
          <Link href={"/admin"}>
            <List.Item>
              <Icon name="adn" size="large" />
              <List.Content>
                <List.Header content="Admin" />
              </List.Content>
            </List.Item>
          </Link>
        ) : null}
        <br />
        <List.Item onClick={() => logoutUser(email)}>
          <Icon name="log out" size="large" />
          <List.Content>
            <List.Header content="Đăng xuất" />
          </List.Content>
        </List.Item>
      </List>
    </>
  );
}

export default SideMenu;
