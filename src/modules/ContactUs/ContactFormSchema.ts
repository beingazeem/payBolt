import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from '@shared/utils';
import { z } from 'zod';

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
}

export const ContactFormInitialValues = {
  name: '',
  email: '',
  phone: '',
};

export const ContactFormSchema = z
  .object({
    name: z.string().min(1, {
      message: 'Email or phone number is required',
    }),
    email: z.string().min(8, {
      message: 'Password must be at least 8 characters',
    }),
    phone: z.string().optional(),
  })
  .refine(
    data => {
      if (
        isNaN(Number(data.name)) &&
        !EMAIL_REGEX.test(data.email) &&
        isNaN(Number(data.phone))
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
        !isNaN(Number(data.name)) &&
        !PHONE_NUMBER_REGEX.test(data.email) &&
        !isNaN(Number(data.phone))
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
