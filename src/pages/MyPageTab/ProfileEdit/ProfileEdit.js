import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../../../redux/modules/user";
import { actionCreators as reviewAction } from "../../../redux/modules/review";

//css
import {
  ProfileWrap,
  SubWrap,
  Header,
  EnterP,
  BlackBackButton,
  HrWrap,
  ContentWrap,
  ProfileImage,
  PlusButton,
  LabelWrap,
  ProfileEditButton,
  NicknameP,
  EmailP,
  BoldHr,
  Content,
  ContentP,
  ProfileHr,
} from "./style";

Modal.setAppElement("#root");

const Profile = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_info = useSelector((state) => state.user.userInfo);
  const preview = useSelector((state) => state.review.preview);
  const [fileName, setFileName] = React.useState(null);
  const fileInput = React.useRef();
  console.log(preview);
  React.useEffect(() => {
    dispatch(userAction.getUserInfoDB());
  }, []);

  const selectFiles = (e) => {
    const reader = new FileReader();
    const currentFile = fileInput.current.files[0];
    setFileName(currentFile.name);
    reader.readAsDataURL(currentFile);
    reader.onloadend = () => {
      dispatch(reviewAction.setPreview(reader.result));
    };
  };

  const [nickname, setNickname] = React.useState(user_info.nickname);

  const changeNickname = (e) => {
    setNickname(e.target.value);
  };

  const editProfile = () => {
    dispatch(userAction.editProfileDB(nickname, fileInput.current.files[0]));
  };

  return (
    <ProfileWrap>
      <SubWrap>
        <Header>
          <BlackBackButton onClick={() => navigate(-1)} />
          <h3>프로필 수정하기</h3>
          <EnterP onClick={editProfile}>완료</EnterP>
        </Header>
        <HrWrap />
        <ContentWrap>
          <ProfileImage src={preview ? preview : user_info.profileImg} />
          <PlusButton>
            <LabelWrap>
              <input
                type="file"
                multiple
                ref={fileInput}
                onChange={selectFiles}
                accept=".jpg,.jpeg,.png"
              />
              <ProfileEditButton />
            </LabelWrap>
          </PlusButton>
          <NicknameP>{user_info.nickname}</NicknameP>
          <EmailP>{user_info.email}</EmailP>
          <BoldHr />
        </ContentWrap>
        <Content>
          <ContentP>이메일</ContentP>
          <p>{user_info.email}</p>
        </Content>
        <ProfileHr />
        <Content>
          <ContentP>닉네임</ContentP>
          <input onChange={changeNickname} defaultValue={nickname} />
        </Content>
        <ProfileHr />
      </SubWrap>
    </ProfileWrap>
  );
};

export default Profile;
