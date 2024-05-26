import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import { CustomButton } from "@/components/custom-button";
import { ButtonTypes } from "@/components/custom-button/type";
import { useAtom } from 'jotai';
import LoginForm from "./forms/LoginForm";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const fade = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100%)' }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl">
        <div className="flex justify-around mb-6">
          <button onClick={() => setIsLogin(true)} className={`font-bold ${isLogin ? 'text-blue-500' : 'text-gray-500'}`}>Giriş Yap</button>
          <button onClick={() => setIsLogin(false)} className={`font-bold ${!isLogin ? 'text-blue-500' : 'text-gray-500'}`}>Kayıt Ol</button>
        </div>
     
          {isLogin ? (
            <LoginForm/>
          ) : (
            <>
              {/* <CustomInput
                value={username}
                onChange={(e) => setUsername(e)}
                type={InputTypes.Custom}
                placeholder="Kullanıcı Adı"
                customIcon={<User2Icon/>}
              />
              <CustomInput
                value={password}
                onChange={(e) => setPassword(e)}
                type={InputTypes.Password}
                placeholder="Şifre"
              />
              <CustomInput
                value={password}
                type={InputTypes.Custom}
                placeholder="Ad"
                onChange={(e) => setPassword(e)}
                customIcon={<Users/>}
              />
              <CustomInput
               value={password}
                type={InputTypes.Custom}
                placeholder="Soyad"
                onChange={(e) => setPassword(e)}
                customIcon={<BookUser/>}
              /> */}
            </>
          )}
      </div>
    </div>
  );
};

export default Login;