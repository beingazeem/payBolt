import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from '@shared/utils';
import { z } from 'zod';

export interface ContactForm {
  username: string;
  email: string;
  phoneNumber: string;
}

export const ContactFormInitialValues = {
  username: '',
  email: '',
  phoneNumber: '',
};

export const ContactFormSchema = z
  .object({
    username: z.string().min(1, {
      message: 'Name is Required',
    }),
    email: z.string().min(8, {
      message: 'Email must be in valid format',
    }),
    phoneNumber: z.string().min(10, {
      message: 'Phone number should be at least 10 digits long.',
    }),
  })
  .refine(
    data => {
      if (
        isNaN(Number(data.username)) &&
        !EMAIL_REGEX.test(data.email) &&
        isNaN(Number(data.phoneNumber))
      )
        return false;

      return true;
    },
    {
      message: 'Invalid email address',
      path: ['email'],
    },
  )
  .refine(
    data => {
      if (
        !isNaN(Number(data.username)) &&
        !PHONE_NUMBER_REGEX.test(data.email) &&
        !isNaN(Number(data.phoneNumber))
      ) {
        return false;
      }

      return true;
    },
    {
      message: 'Invalid phone number',
      path: ['email'],
    },
  );
