import { Button } from '@shared/ui/button';
import { useHandleForm } from '@shared/formHandler';
import { InputField } from '@/components/InputField';
import {
  signUpFormInitialValues,
  signUpFormSchema,
  SignUpForm,
} from './signUpSchema';
import { Form } from '@shared/ui/form';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const { control, handleSubmit, errors, form } = useHandleForm({
    initialValues: signUpFormInitialValues,
    schema: signUpFormSchema,
  });

  const onSubmit = (values: SignUpForm) => {
    console.log(values);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center w-full ">
      <div className="flex flex-col items-center justify-center p-4 h-dvh pt-20">
        <div className="w-full lg:w-[80%] mx-auto py-10 bg-foreground/10 rounded-lg">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-gray-500 dark:text-gray-400">Join us today!</p>
          </div>
          <div className="self-center  mx-auto">
            <Form {...form}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" items-center space-y-4 w-[70%] mx-auto"
              >
                <InputField
                  name="username"
                  label="Username"
                  placeholder="Username"
                  formControl={control}
                  error={errors.username?.message}
                />

                <InputField
                  name="email"
                  label="Email"
                  placeholder="Email"
                  inputType="email"
                  formControl={control}
                  error={errors.email?.message}
                />

                <InputField
                  name="password"
                  label="Password"
                  placeholder="Password"
                  inputType="password"
                  formControl={control}
                  error={errors.password?.message}
                />
                <InputField
                  name="businessName"
                  label="Business Name"
                  placeholder="Business Name"
                  inputType="password"
                  formControl={control}
                  error={errors.businessName?.message}
                />
                <InputField
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="Phone Number"
                  inputType="phoneNumber"
                  formControl={control}
                  error={errors.phoneNumber?.message}
                />
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>

                <Button variant="outline" className="w-full">
                  Sign up with Google
                </Button>
              </form>
            </Form>
          </div>

          <div className="text-center mt-5">
            <p className="text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-primary font-bold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="h-full hidden lg:block">
        <img
          src="/assets/images/Onboarding.jpg"
          alt="Signup-img"
          className="h-dvh inline-block object-cover"
        />
      </div>
    </section>
  );
};
