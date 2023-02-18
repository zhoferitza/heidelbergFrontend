import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        // The 'url' is pointing to a Rails API endpoint which returns a JWT Token
        const res = await fetch(`http://localhost:1337/api/users/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(credentials),
        });

        const user = await res.json();

        if (user) {
          console.log(user);
        } else {
          return null;
        }
      },
    }),
  ],
  secret: 'Super Secret',
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/auth/login',
  },

  callbacks: {
    async jwt(prevToken, token) {
      // Initial Call
      if (token) {
        return {
          accessToken: token,
        };
      }

      //Subsequent calls
      return prevToken;
    },

    // That token store in session
    async session({ session, token }) {
      // this token return above jwt()
      session.accessToken = token.accessToken;
      //if you want to add user details info
      session.user = { name: 'name', email: 'email' }; //this user info get via API call or decode token. Anything you want you can add
      return session;
    },
  },
});
