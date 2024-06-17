import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from '@shared/utils';
import { z } from 'zod';

export interface LoginForm {
  emailOrPhone: string;
  password: string;
  otp?: string;
  hasOtp: boolean;
}

export const loginFormInitialValues = {
  emailOrPhone: '',
  password: '',
  otp: '',
  hasOtp: false,
};

export const loginFormSchema = z
  .object({
    emailOrPhone: z.string().min(1, {
      message: 'Email or phone number is required',
    }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters',
    }),
    otp: z.string().optional(),
    hasOtp: z.boolean(),
  })
  .refine(
    data => {
      if (
        isNaN(Number(data.emailOrPhone)) &&
        !EMAIL_REGEX.test(data.emailOrPhone)
      )
        return false;

      return true;
    },
    {
      message: 'Invalid email address',
      path: ['emailOrPhone'],
    },
  )
  .refine(
    data => {
      if (
        !isNaN(Number(data.emailOrPhone)) &&
        !PHONE_NUMBER_REGEX.test(data.emailOrPhone)
      ) {
        return false;
      }

      return true;
    },
    {
      message: 'Invalid phone number',
      path: ['emailOrPhone'],
    },
  )
  .refine(
    data => {
      if (data.hasOtp && Number(data.otp?.length) < 6) return false;
      return true;
    },
    {
      message: 'OTP is required',
      path: ['otp'],
    },
  );
