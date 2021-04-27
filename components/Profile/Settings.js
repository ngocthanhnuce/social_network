import React, { useState, useEffect, useRef } from "react";
import {
  List,
  Divider,
  Message,
  Checkbox,
  Form,
  Button,
} from "semantic-ui-react";
import { passwordUpdate, toggleMessagePopup } from "../../utils/profileActions";

function Settings({ newMessagePopup }) {
  const [passwordFields, showPasswordFields] = useState(false);

  const [newMessageSettings, showNewMessageSettings] = useState(false);

  const isFirstRun = useRef(true);
  const [popupSetting, setPopupSetting] = useState(newMessagePopup);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    success && setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
  }, [popupSetting]);

  return (
    <>
      {success && (
        <>
          <Message success icon="check circle" header="Updated Successfully" />
          <Divider hidden />
        </>
      )}

      <List size="large" animated>
        <List.Item>
          <List.Icon name="user secret" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header
              onClick={() => showPasswordFields(!passwordFields)}
              as="a"
              content="Đổi mật khẩu"
            />
          </List.Content>

          {passwordFields && (
            <UpdatePassword
              setSuccess={setSuccess}
              showPasswordFields={showPasswordFields}
            />
          )}
        </List.Item>
        <Divider />

        <List.Item>
          <List.Icon
            name="paper plane outline"
            size="large"
            verticalAlign="middle"
          />

          <List.Content>
            <List.Header
              onClick={() => showNewMessageSettings(!newMessageSettings)}
              as="a"
              content="Cài đặt thông báo tin nhắn mới?"
            />
          </List.Content>

          <div style={{ marginTop: "10px" }}>
            Cài đặt cưa sổ có bật lên khi có tin nhắn mới hay không.
            <br />
            <br />
            <Checkbox
              checked={popupSetting}
              toggle
              onChange={() =>
                toggleMessagePopup(popupSetting, setPopupSetting, setSuccess)
              }
            />
          </div>
        </List.Item>

        <Divider />
      </List>
    </>
  );
}

const UpdatePassword = ({ setSuccess, showPasswordFields }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState(null);

  const [userPasswords, setUserPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [confirmPass, setConfirmPassword] = useState({ confirmPassword: "" });
  const [typed, showTyped] = useState({
    field1: false,
    field2: false,
  });

  const { field1, field2 } = typed;

  const { currentPassword, newPassword } = userPasswords;
  const { confirmPassword } = confirmPass;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserPasswords((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangeConfirm = (e) => {
    const { name, value } = e.target;
    setConfirmPassword((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    errorMsg && setTimeout(() => setError(null), 5000);
  }, [errorMsg]);

  return (
    <>
      <Form
        error={errorMsg !== null}
        loading={loading}
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);

          await passwordUpdate(setSuccess, userPasswords);
          setLoading(false);

          showPasswordFields(false);
        }}
      >
        <List.List>
          <List.Item>
            <Form.Input
              fluid
              icon={{
                name: "eye",
                circular: true,
                link: true,
                onClick: () =>
                  showTyped((prev) => ({ ...prev, field1: !field1 })),
              }}
              type={field1 ? "text" : "password"}
              iconPosition="left"
              label="Mật khẩu hiện tại"
              placeholder="Current password"
              name="currentPassword"
              onChange={handleChange}
              value={currentPassword}
            />
            <Form.Input
              fluid
              icon={{
                name: "eye",
                circular: true,
                link: true,
                onClick: () =>
                  showTyped((prev) => ({ ...prev, field2: !field2 })),
              }}
              type={field2 ? "text" : "password"}
              iconPosition="left"
              label="Mật khẩu mới"
              placeholder="New password"
              name="newPassword"
              onChange={handleChange}
              value={newPassword}
            />
            <Form.Input
              fluid
              icon={{
                name: "eye",
                circular: true,
                link: true,
                onClick: () =>
                  showTyped((prev) => ({ ...prev, field2: !field2 })),
              }}
              type={field2 ? "text" : "password"}
              iconPosition="left"
              label="Nhập lại mật khẩu"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={handleChangeConfirm}
              value={confirmPassword}
              error={confirmPassword === newPassword ? false : { content: "Mật khẩu không trùng nhau" }}
            />
            <Button
              disabled={loading || currentPassword === "" || newPassword === ""}
              compact
              icon="configure"
              type="submit"
              color="teal"
              content="Lưu thay đổi"
            />
            <Button
              disabled={loading}
              compact
              icon="cancel"
              type="button"
              content="Hủy"
              onClick={() => showPasswordFields(false)}
            />
            <Message icon="meh" error header="Oops!" content={errorMsg} />
          </List.Item>
        </List.List>
      </Form>
      <Divider hidden />
    </>
  );
};

export default Settings;
