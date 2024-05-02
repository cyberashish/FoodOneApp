import connectDB from "@/lib/connectDB";
import usermodel from "@/model/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

interface credentialstype {
  email:String,
  password:String,
}

const authOptions =  NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID || '',
          clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        CredentialsProvider({
          name: "Credentials",
          /* @ts-expect-error Async Server Component */
          async authorize(credentials:credentialstype,req){
             await connectDB();
            const result = await usermodel.findOne({email:credentials?.email});
            if(!result){
              throw new Error("No User found with this email")
            }
            if(result.password!==credentials?.password||result.email!==credentials?.email){
              throw new Error("Username or password doesn't match")
            }
             return result
          }
        })

      ],
      callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          console.log(user);
          await connectDB();
          if (account?.provider === "google"){
            const existinguser = await usermodel.findOne({googleId:user.id})
            if (existinguser) {
              console.log("same user");
              return existinguser
            }
             else {
              
            const bodydata = {name:user.name,email:user.email,googleId:user.id};
            const doc = await usermodel.create(bodydata);
            console.log(doc);
            return doc
            }
          }else{
            return true
          }

        }
      },
      pages:{
        signIn:'/auth/login',
        signOut: '/',
      }
})

export {authOptions as GET, authOptions as POST}