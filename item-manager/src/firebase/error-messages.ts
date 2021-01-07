export type AuthError = {
  code: string;
  message: string;
};

export type StatusMessages = { [status: string]: string };

const authErrorMessages = {
  'auth/email-already-exists':
    'メールアドレスはすでに既存のユーザーによって使用されています',
  'auth/invalid-password':
    'password ユーザー プロパティに指定された値は無効です。6文字以上の文字列を指定する必要があります',
  'auth/user-not-found': 'Emailに該当するユーザーは存在しません',
};

const errorMessages: StatusMessages = { ...authErrorMessages };

export default errorMessages;
