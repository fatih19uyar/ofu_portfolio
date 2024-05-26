import React from "react";
import CustomInput from "@/components/custom-input";
import { InputTypes } from "@/components/custom-input/type";
import { KeyIcon, User } from "lucide-react";
import { Resolver, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { CustomButton } from "@/components/custom-button";
import { ButtonTypes } from "@/components/custom-button/type";

interface User {
  username: string;
  password: string;
}
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string()
});

const LoginForm: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("dddd",JSON.stringify(data, null, 2))
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CustomInput
          type={InputTypes.Custom}
          customIcon={<User />}
          placeholder="Kullanıcı Adı"
          name="username"
          form={form}
        />
        <CustomInput
          type={InputTypes.Password}
          placeholder="Şifre"
          name="password"
          form={form}
          className="mt-4 mb-4"
        />
        <CustomButton 
        typeStyle={ButtonTypes.Normal}
        type="submit"
        text="Giriş Yap"
        />
      </form>
    </Form>
  );
};

export default LoginForm;
