'use client';

// React Imports
import { FC, Fragment } from 'react';

// React Query Imports
import { UserLoginMutationHook } from '@/services/react-query-client/auth/user-login';
import Button from '@/components/buttons/button';

// Custom Component Imports

interface ISignInViewProps {}

const SignInView: FC<ISignInViewProps> = () => {
  const { mutateAsync } = UserLoginMutationHook();

  /**
   * @description Handles the login process for the user
   *
   * @returns {void}
   */
  const handleLogin = async (): Promise<void> => {
    mutateAsync({
      email: 'aliraza@zenkoders.com',
      password: '123123',
    });
  };
  return (
    <Fragment>
      <Button
        onClick={handleLogin}
        text='Login'
      />
    </Fragment>
  );
};

export default SignInView;
