import { type NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import prisma from '../../../../prisma/prisma';

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

const options = {
    providers: [
        GitHubProvider({
            clientId: githubId ?? '',
            clientSecret: githubSecret ?? '',
        }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
