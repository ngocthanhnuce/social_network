import React, { useState, useRef } from "react";
import { Form, Button, Message, Divider } from "semantic-ui-react";
import ImageDropDiv from "../Common/ImageDropDiv";
import uploadPic from "../../utils/uploadPicToCloudinary";
import { profileUpdate } from "../../utils/profileActions";
import CommonInputUpdate from "../Common/CommonInputUpdate";

function UpdateProfile({ Profile }) {
  const [profile, setProfile] = useState({
    profilePicUrl: Profile.user.profilePicUrl,
    bio: Profile.bio || "",
    work: Profile.work || "",
    relationship: Profile.relationship || "",
    address: Profile.address || "",
    education: Profile.education || "",
    birthday: Profile.birthday || "",
    facebook: (Profile.social && Profile.social.facebook) || "",
    youtube: (Profile.social && Profile.social.youtube) || "",
    instagram: (Profile.social && Profile.social.instagram) || "",
    twitter: (Profile.social && Profile.social.twitter) || "",
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const [loading, setLoading] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const [highlighted, setHighlighted] = useState(false);
  const inputRef = useRef();
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{paddingBottom: "25px"}}>
      <Form
        error={errorMsg !== null}
        loading={loading}
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);

          let profilePicUrl;

          if (media !== null) {
            profilePicUrl = await uploadPic(media);
          }

          if (media !== null && !profilePicUrl) {
            setLoading(false);
            return setErrorMsg("Error Uploading Image");
          }

          await profileUpdate(profile, setLoading, setErrorMsg, profilePicUrl);
        }}
      >
        <Message
          onDismiss={() => setErrorMsg(false)}
          error
          content={errorMsg}
          attached
          header="Oops!"
        />

        <ImageDropDiv
          inputRef={inputRef}
          highlighted={highlighted}
          setHighlighted={setHighlighted}
          handleChange={handleChange}
          mediaPreview={mediaPreview}
          setMediaPreview={setMediaPreview}
          setMedia={setMedia}
          profilePicUrl={profile.profilePicUrl}
        />

        <CommonInputUpdate
          user={profile}
          handleChange={handleChange}
          showSocialLinks={showSocialLinks}
          setShowSocialLinks={setShowSocialLinks}
        />

        <Divider hidden />

        <Button
          color="blue"
          icon="pencil alternate"
          disabled={profile.bio === "" || loading}
          content="Submit"
          type="submit"
        />
      </Form>
    </div>
  );
}

export default UpdateProfile;
