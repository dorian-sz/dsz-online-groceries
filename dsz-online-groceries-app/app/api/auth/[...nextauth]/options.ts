import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvder from "next-auth/providers/credentials";
import axios from "axios";
import { User } from "@/data/types";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvder({
      name: "Credentials",
      credentials: {
        emailaddress: { label: "Email address", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const user = await axios.get<User>(
          `http://localhost:3000/api/users/${credentials?.emailaddress}`
        );

        if (user.data) {
          return user.data;
        }
        return null;
      },
    }),
  ],
};
