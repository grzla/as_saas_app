// beware that authmiddleware, as instructed in the video, is deprecated.

// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware({});

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};