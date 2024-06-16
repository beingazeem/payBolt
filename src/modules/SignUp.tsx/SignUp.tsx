import { Button } from "@shared/ui/button"
import { Input } from "@shared/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

interface SignupFormFieldProps {
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  formControl: Control<z.infer<typeof formSchema>, any>;
  error?: string;
};

const formSchema = z.object({
  businessName: z.string().min(5).max(20),
  email: z.string().email(),
  username: z.string().min(3).max(50),
  password: z.string().min(8),
  phoneNumber: z.string().min(10),
});
 
 export const SignUp = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      businessName:"",
      phoneNumber:""
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

   return (
  <div className="flex w-full top-0">
  <div className="flex flex-col items-center justify-center w-1/2 p-4">
    <div className="space-y-2 text-center mt-20">
      <h1 className="text-3xl font-bold">Create an Account</h1>
      <p className="text-gray-500 dark:text-gray-400">Join us today!</p>
    </div>
    <div className="self-center w-[80%]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" items-center space-y-4 w-[70%]">
        <SignupFormField
            name="username"
            label="Username"
            placeholder="Username"
            // description="At least 3 characters."
            formControl={form.control}
          />

          <SignupFormField
            name="email"
            label="Email"
            placeholder="Email"
            inputType="email"
            formControl={form.control}
          />
          
          <SignupFormField
            name="password"
            label="Password"
            placeholder="Password"
            // description="At least 8 characters."
            inputType="password"
            formControl={form.control}
          />
          <SignupFormField
            name="businessName"
            label="Business Name"
            placeholder="Business Name"
            // description="At least 5 characters."
            inputType="password"
            formControl={form.control}
          />
          <SignupFormField
            name="phoneNumber"
            label="Phone Number"
            placeholder="Phone Number"
            // description="At least 10 characters."
            inputType="phoneNumber"
            formControl={form.control}
          />
          <Button type="submit" className="w-full">Sign Up</Button>

          <Button variant="outline" className="w-full">
          Sign up with Google
          </Button>
        </form>
      </Form>
    </div>
  </div>
  <div className="w-1/2 h-screen">
    <img src="/assets/images/Onboarding.jpg" alt="Signup Image" className="w-full h-full object-cover" />
  </div>
</div>

   )
 };

 const SignupFormField: React.FC<SignupFormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-sans ">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
              className={`px-2 `}
              />
          </FormControl>
          {description && <FormDescription className="text-red">{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};