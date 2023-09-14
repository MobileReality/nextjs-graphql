# NextJS + GraphQL Boilerplate ⚡

🚀 **Next.js with App Router and Page Router Support**
You already have Next.js as a dependency, which provides routing support.

🔍 **Type Checking with TypeScript**
TypeScript is included as a dependency for type checking.

🛡️ **Strict Mode for TypeScript and React 18**
You have React 18, which supports concurrent mode for improved performance.

🔒 **Authentication with NextAuth**
You have "next-auth" as a dependency for authentication.

📝 **Form Handling with React Hook Form**
You have "react-hook-form" as a dependency for form handling.

✅ **Validation Library with Yup**
Yup is included as a dependency for data validation.

🌐 **State Management with Zustand**
You have Zustand as a dependency for global state management.

🔗 **GraphQL Integration**
You have "graphql" as a dependency, which can be used for GraphQL API integration.

🚀 **URQL for GraphQL**
You have several URQL-related dependencies for GraphQL client-side operations.

🌍 **Internationalization (i18n) with Next-i18next and i18next**
You have "next-i18next" and "i18next" for handling internationalization.

📈 **SEO Optimization with Next SEO**
You have "next-seo" for managing SEO metadata.

🗺️ **Sitemap Generation with Next Sitemap**
You have "next-sitemap" for generating sitemaps.

📣 **React Toast Notifications with react-hot-toast**
You have "react-hot-toast" for displaying toast notifications.

💅 **Styled Components for Styling**
You have "styled-components" for styling your components.

🧹 **Linting with ESLint**
You have ESLint as a devDependency for linting purposes.

📜 **Eslint Configuration with Mobile Reality**
You have "@mobile-reality/eslint-config" for ESLint configuration.

🧼 **Code Formatting with Prettier**
Prettier is included as a devDependency for code formatting.

🧪 **Testing with Jest and Styled Components**
You have Jest and "jest-styled-components" for testing styled components.

🌐 **Accessibility Testing with Axe**
You have "@axe-core/react" for accessibility testing.

🛠️ **Webpack Configuration with SVGR**
You have "@svgr/webpack" for optimizing SVGs.

🆔 **UUID Handling with @types/uuid**
You have "@types/uuid" for UUID handling.

✏️ **Inline SVGs with babel-plugin-inline-react-svg**
You have "babel-plugin-inline-react-svg" for inlining SVGs.

> Please note that you may need to configure and integrate these
> dependencies according to your project's specific requirements and use
> cases.


## How to start with boilerplate? 🚀

#### 1 ) Add following environment variables

- NEXT_PUBLIC_SENTRY_DSN  ( from sentry.io )
- NEXT_PUBLIC_APP_URL
- NEXT_PUBLIC_ENV(*)
- NEXTAUTH_SECRET(*)
- NEXTAUTH_URL(*)

> (*) - Preferred to be added as infra container environment


#### 2 ) Authorization  with next-auth

1) Make sure your you have added your environment variables
2) Go to `src/api/graphql/mutations` and implement your login mutation
3)  Go to `src/view/index` and add credentials to verify authorization

#### 3 ) SEO

1) Go to `/public/assets/favicons`, upload your favicons and update site.webmanifest and browserconfig.xml
2) Go to `/public/locales/meta` and update 'main' translations
3) In `/next.config.js` update www to non-www redirect domains

#### 4 ) Search for FIXME

In boilerplate there is some FIXME comments near code fragments that need to be updated
