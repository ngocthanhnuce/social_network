import React from "react";
import { Form, Button, Message, TextArea, Divider, Checkbox } from "semantic-ui-react";

const CommonInputUpdate = (props) => {
  const {
    user: {
      bio,
      work,
      relationship,
      address,
      education,
      birthday,
      facebook,
      instagram,
      youtube,
      twitter,
    },
    handleChange,
    showSocialLinks,
    setShowSocialLinks,
  } = props;
  return (
    <>
      <Form.Field
        required
        label="Bio"
        control={TextArea}
        name="bio"
        value={bio}
        onChange={handleChange}
        placeholder="bio"
      />
      <Form.Input
        name="work"
        label="Work"
        value={work}
        onChange={handleChange}
        placeholder="work"
        icon="briefcase"
      />
      <Form.Input
        name="address"
        label="Address"
        value={address}
        onChange={handleChange}
        placeholder="address"
        icon="heart"
      />
      <Form.Input
        name="relationship"
        label="Relationship"
        value={relationship}
        onChange={handleChange}
        placeholder="relationship"
        icon="point"
      />
      <Form.Input
        name="education"
        label="Education"
        value={education}
        onChange={handleChange}
        placeholder="education"
        icon="student"
      />
       <Form.Input
        name="birthday"
        label="Birthday"
        value={birthday}
        onChange={handleChange}
        placeholder="birthday"
        icon="birthday cake"
      />
      <Button
        content="Add Social Links"
        color="red"
        icon="rss"
        type="button"
        onClick={() => setShowSocialLinks(!showSocialLinks)}
      />
      {showSocialLinks && (
        <>
          <Divider />
          <Form.Input
            icon="facebook f"
            iconPosition="left"
            name="facebook"
            value={facebook}
            onChange={handleChange}
          />
          <Form.Input
            icon="twitter"
            iconPosition="left"
            name="twitter"
            value={twitter}
            onChange={handleChange}
          />
          <Form.Input
            icon="instagram"
            iconPosition="left"
            name="instagram"
            value={instagram}
            onChange={handleChange}
          />
          <Form.Input
            icon="youtube"
            iconPosition="left"
            name="youtube"
            value={youtube}
            onChange={handleChange}
          />
          <Message
            icon="attention"
            info
            size="small"
            header="Gato social media link option"
          />
        </>
      )}
    </>
  );
};

export default CommonInputUpdate;
