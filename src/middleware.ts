import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(() => {
    return NextResponse.next();
});

export const config = {
    matcher: ['/dashboard'],
};
