import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="p-8 flex items-center justify-between h-screen">
      <div className="flex items-center justify-center flex-col gap-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to
        </h1>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-blue-700">
          Pragya RO System
        </h1>
      </div>
      <div className="flex items-center justify-center flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sign In !!</CardTitle>
            <CardDescription>
              Sign in to get access of admin portal.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
            </form>
          </CardContent>
          <CardFooter>
            <Button>Log In</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
