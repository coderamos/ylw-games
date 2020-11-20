import Auth from 'templates/Auth';
import FormSignUp from 'components/FormSignUp';

export default function SignUpPage() {
  return (
    <Auth title="sign up">
      <FormSignUp />
    </Auth>
  );
}
