import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google"; 
import GitHubProvider from "next-auth/providers/github";
const handler = NextAuth({
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            httpOptions: { timeout: 20000 },
          }),
        GitHubProvider({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
            httpOptions: { timeout: 20000 },
        })
    ],

    secret: process.env.AUTH_SECRET
    // faltan por configurar callbacks validaciones etc
})
export { handler as GET, handler as POST }