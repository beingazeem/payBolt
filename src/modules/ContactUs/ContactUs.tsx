import { Button } from '@shared/ui/button';
import { useHandleForm } from '@shared/formHandler';
import { InputField } from '@/components/InputField';

import {
  ContactForm,
  ContactFormInitialValues,
  ContactFormSchema,
} from './ContactFormSchema';

import { Form } from '@shared/ui/form';

export const ContactUs = () => {
  const { control, handleSubmit, errors, form, setValue } = useHandleForm({
    initialValues: ContactFormInitialValues,
    schema: ContactFormSchema,
  });

  const onSubmit = (values: ContactForm) => {
    console.log(values);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center w-full ">
      <div className="flex flex-col items-center justify-center p-4 h-dvh pt-20">
        <div className="w-full lg:w-[80%] mx-auto py-10 bg-foreground/10 rounded-lg">
          <div className="space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Please login to your account.
            </p>
          </div>
          <div className="self-center w-[80%] mx-auto">
            <Form {...form}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" items-center space-y-4 w-[70%] mx-auto"
              >
                <InputField
                  name="username"
                  label="Name"
                  placeholder="Enter your name "
                  inputType="text"
                  formControl={control}
                  error={errors.name?.message}
                />
                <InputField
                  name="email"
                  label="Email"
                  placeholder="Enter your Email"
                  inputType="text"
                  formControl={control}
                  error={errors.email?.message}
                />

                <InputField
                  name="phone"
                  label="Password"
                  placeholder="Enter your password"
                  inputType="password"
                  formControl={control}
                  error={errors.phone?.message}
                />

                <Button variant="outline" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
