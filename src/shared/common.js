// 이메일 형식
export const usernameCheck = (username) => {
    let _reg =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
    return _reg.test(username);
  };

// 닉네임 형식 [최소 6자 이상, 알파벳 소문자(a~z), 숫자(0~9)를 포함]
export const nicknameCheck = (nickname) => {
    let _reg = /^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){6,}$/;
    return _reg.test(nickname);
  };


// 패스워드(Password) 형식 [최소 10자 이상, 영문/숫자/특수문자(공백 제외)만 허용, 3개 이상의 조합]
export const pwdCheck = pw => {
	const _reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,}$/;
	return _reg.test(pw) && pw.search(/\s/) == -1 ? true : false;
};
