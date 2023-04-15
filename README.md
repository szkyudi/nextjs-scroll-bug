# nextjs-scroll-bug

## Next.js 13 App Router

A bug occurs where the scroll position does not return when there is content with `position: fixed` on the destination page.

## NG 1

https://github.com/szkyudi/nextjs-scroll-bug/blob/233d4da41be6258df949739c1670d6433f5da2bc/app-router/app/layout.tsx#L12-L14
https://github.com/szkyudi/nextjs-scroll-bug/blob/233d4da41be6258df949739c1670d6433f5da2bc/app-router/app/about/page.tsx#L10-L24

## OK 1

https://github.com/szkyudi/nextjs-scroll-bug/blob/cc18bbb448d2076329f74a8675fccb690c7234ba/app-router/app/layout.tsx#L12-L14
https://github.com/szkyudi/nextjs-scroll-bug/blob/cc18bbb448d2076329f74a8675fccb690c7234ba/app-router/app/about/page.tsx#L10-L24

## NG 2

https://github.com/szkyudi/nextjs-scroll-bug/blob/78611466458177e1d0cb20bba28535a8508ce467/app-router/app/layout.tsx#L12-L18
https://github.com/szkyudi/nextjs-scroll-bug/blob/78611466458177e1d0cb20bba28535a8508ce467/app-router/app/about/page.tsx#L10-L24

## OK 2

https://github.com/szkyudi/nextjs-scroll-bug/blob/5e424f44f218bd8eb3f0e8a73f0e0e0d5d500a21/app-router/app/layout.tsx#L12-L14
https://github.com/szkyudi/nextjs-scroll-bug/blob/5e424f44f218bd8eb3f0e8a73f0e0e0d5d500a21/app-router/app/about/page.tsx#L10-L22

## Next.js 13 (stable)

The above bug does not occur.
