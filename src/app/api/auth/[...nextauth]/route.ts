import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET, 
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "abc@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          console.log(credentials)
          // Kiểm tra nếu credentials không hợp lệ
          if (!credentials?.username || !credentials?.password) {
            throw new Error("Missing credentials");
          }

          // Gọi API backend để xác thực người dùng
          const response = await fetch("http://localhost:3001/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.username,
              password: credentials.password,
            }),
          })
          // .then((e)=>{
          //   console.log(e)
          // }).catch((e)=>{
          //   console.log(e)
          // })
          if (!response.ok) {
            throw new Error("Invalid credentials");
          }

          // Lấy thông tin người dùng từ API
          const user = await response.json();
          // Kiểm tra xem API trả về thông tin hợp lệ hay không
          if (user ) {
            return user.data; // Trả về đối tượng người dùng cho NextAuth
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error(error.message || "Authorization failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger }) {
      // Add user information and tokens to the JWT when the user logs in for the first time
      if (user && trigger==="signIn") {
        token.access_token = user.tokens.access_token;
        token.refresh_token = user.tokens.refresh_token;
        token.user = {
          id: user.user_info.id,
          email: user.user_info.email,
          phone: user.user_info.phone,
          username: user.user_info.username,
        };
      }
      else if(user && trigger==="signUp"){

      }
      console.log(token)

      return token;
    },
    async session({ session, token }) {
      // Add token and user information to the session object
      if(token){

        session.access_token = token.access_token;
        session.refresh_token = token.refresh_token;
        session.user = {
          id: token.user.id,
          email: token.user.email,
          phone: token.user.phone,
          username: token.user.username,
        };

      }
 
      return session;
    },
  },
  
  pages: {
    signIn: "/signin", // Đường dẫn đến trang đăng nhập

  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
