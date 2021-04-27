import React from "react";
import { Form, Button, Message, TextArea, Divider } from "semantic-ui-react";

const CommonInputs = (props) => {
  const {
    user: {
      bio,
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

export default CommonInputs;
