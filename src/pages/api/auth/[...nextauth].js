import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23li8wjuc3u5SQPRwq",
      clientSecret: "e8c4676dba114d2b4547cb7dbcf3f93f46e199d5",
    }),
  ],
};

export default NextAuth(authOptions);
