import { Icon, Message, Divider } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";
  return (
    <Message
      color="teal"
      attached
      header={signupRoute ? "Get Started" : "Welcome Back"}
      icon={signupRoute ? "settings" : "privacy"}
      content={
        signupRoute ? "Create New Account" : "Login with Email and Password"
      }
    />
  );
};

export const FooterMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <>
      {signupRoute ? (
        <>
          <Message attached="bottom" warning>
            <Icon name="help" />
            Bạn đã có tài khoản? <Link href="/login">Đăng nhập ở đây</Link>
          </Message>
          <Divider hidden />
        </>
      ) : (
        <>
          <Message attached="bottom" info>
            <Icon name="lock" />
            <Link href="/reset">Quên mật khẩu?</Link>
          </Message>

          <Message attached="bottom" warning>
            <Icon name="help" />
            Tạo tài khoản? <Link href="/signup">Đăng ký</Link>{" "}
          </Message>
        </>
      )}
    </>
  );
};
