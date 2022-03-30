// 이메일 형식
export const usernameCheck = (username) => {
  let _reg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  return _reg.test(username);
};

// 숫자, 영어, 한국어와 언더스코어를 허용하며 2~8 (공백 허용 X)
export const nicknameCheck = (nickname) => {
  let _reg = /^[가-힣ㄱ-ㅎa-zA-Z0-9._-]{2,8}$/;
  return _reg.test(nickname);
};

// 패스워드(Password) 형식 [최소 10자 이상, 영문/숫자/특수문자(공백 제외)만 허용, 3개 이상의 조합]
export const pwdCheck = (pw) => {
  const _reg = /^(?=.*\d)(?=.*[~`!@#$%/^&*()-+=])(?=.*[a-zA-Z]).{10,20}$/;
  return _reg.test(pw) && pw.search(/\s/) == -1 ? true : false;
};
