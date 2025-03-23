"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <>
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="h-screen flex items-center justify-center bg-[url('/login-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <SignIn.Root>
          <SignIn.Step
            name="start"
            className="bg-white relative z-10 py-12 px-14 rounded-md shadow-2xl flex flex-col gap-2"
          >
            <h1 className="text-xl font-bold flex flex-col items-center gap-2">
              <Image
                src="/logo21.png"
                className="rounded-full mb-8"
                alt="logo"
                width={120}
                height={120}
              />
              Orosimo School Management
            </h1>
            <h2 className="text-gray-400 text-center mb-5">
              Sign In to your account
            </h2>
            <Clerk.GlobalError className="text-sm text-red-400" />
            <Clerk.Field name="identifier" className="flex flex-col gap-2">
              <Clerk.Label className="text-xs text-gray-500">
                Username
              </Clerk.Label>
              <Clerk.Input
                type="text"
                className="p-2 rounded-md ring-gray-300"
                required
              />
              <Clerk.FieldError className="text-xs text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="flex flex-col gap-2">
              <Clerk.Label className="text-xs text-gray-500">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                className="p-2 rounded-md ring-gray-300"
                required
              />
              <Clerk.FieldError className="text-xs text-red-400" />
            </Clerk.Field>
            <SignIn.Action
              className="bg-blue-500 text-white mt-6 rounded-md text-sm p-[10px]"
              submit
            >
              Sign In
            </SignIn.Action>
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </>
  );
};

export default LoginPage;
