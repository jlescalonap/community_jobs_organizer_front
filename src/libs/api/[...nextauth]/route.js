// Modules
import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from "next-auth/providers/github";

// aqui falta aun bastante

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

export { handler as GET, handler as POST };