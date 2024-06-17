import { z } from 'zod';

export interface SignUpForm {
  username: string;
  email: string;
  password: string;
  businessName: string;
  phoneNumber: string;
}

export const signUpFormInitialValues = {
  email: '',
  username: '',
  password: '',
  businessName: '',
  phoneNumber: '',
};

export const signUpFormSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: 'Username must be at least 3 characters',
    })
    .max(50, {
      message: 'Username must be less than 50 characters',
    }),
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters',
  }),
  businessName: z
    .string()
    .min(5, {
      message: 'Business name must be at least 5 characters',
    })
    .max(20, {
      message: 'Business name must be less than 20 characters',
    }),
  phoneNumber: z.string().min(10, {
    message: 'Phone number must be at least 10 characters',
  }),
});
