import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'art-of-minimalist-coding',
    title: 'The Art of Minimalist Coding',
    excerpt: 'Why less code is often more maintainable, readable, and performant in the long run.',
    date: 'Oct 24, 2023',
    content: `In a world dominated by complex frameworks and endless dependencies, the art of minimalist coding is often lost. We tend to reach for a library to solve a simple problem, adding weight to our bundles and cognitive load to our future selves.

Minimalist coding isn't about code golf or making things as short as possible at the expense of readability. It is about Intent. It is about writing exactly what is needed to solve the problem, and nothing more.

## The Cost of Abstraction

Every abstraction layer we add is a potential point of failure. It is also something a new developer needs to learn. When we stick to standard web APIs and simple logic, we make our code accessible. 

> "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry

## Practical Steps

1. **YAGNI (You Aren't Gonna Need It):** Don't build features for "what if" scenarios. Build for now.
2. **Dependency Diet:** Before \`npm install\`, ask if you can write it yourself in 20 lines.
3. **Pure Functions:** Keep side effects to the edges of your application.

By embracing minimalism, we create software that is robust, fast, and a joy to maintain.`
  },
  {
    id: '2',
    slug: 'understanding-react-server-components',
    title: 'Understanding React Server Components',
    excerpt: 'A deep dive into how RSCs change the paradigm of web development and data fetching.',
    date: 'Nov 02, 2023',
    content: `React Server Components (RSC) represent one of the biggest shifts in the React ecosystem since Hooks. But what exactly are they, and why should you care?

Traditionally, React components run on the client (or are hydration-heavy during SSR). RSCs allow components to render exclusively on the server. The code for these components is never sent to the client, reducing bundle size significantly.

## The Data Fetching Paradigm

With RSCs, you can fetch data directly inside your component. No more \`useEffect\`, no more loading states flickering as data waterfall-loads.

\`\`\`jsx
// Server Component
export default async function Page() {
  const data = await db.query('SELECT * FROM posts');
  return <PostList posts={data} />;
}
\`\`\`

## When to use what?

*   **Server Components:** Fetching data, accessing backend resources, keeping sensitive info (API keys) on the server, keeping large dependencies server-side.
*   **Client Components:** Interactivity, event listeners (onClick), browser APIs (localStorage), using hooks (useState, useEffect).

The future of React is hybrid, blending the best of the server and the client seamlessly.`
  },
  {
    id: '3',
    slug: 'tailwind-css-utility-first',
    title: 'Tailwind CSS: Utility First',
    excerpt: 'Exploring the controversy and the undeniable productivity boost of utility classes.',
    date: 'Nov 15, 2023',
    content: `CSS has always been a point of contention in web development. Semantic class names vs. utility classes. Separation of concerns vs. locating styles with structure. Tailwind CSS took a bold stance: Utility First.

At first glance, it looks messy. \`class="flex items-center justify-center p-4 bg-blue-500 text-white"\`. It reminds people of inline styles. But it is fundamentally different.

## The Constraints

Inline styles are unbounded values. Tailwind provides a design system. You aren't picking *any* color, you are picking from your palette. You aren't picking *any* padding, you are using the spacing scale.

## Speed and Consistency

Once you memorize the utility names, your development speed skyrockets. You don't have to context switch between a CSS file and your JSX. You change the structure and the style simultaneously.

Furthermore, it solves the "append-only stylesheet" problem. With traditional CSS, people are afraid to delete classes because they don't know what might break. With Tailwind, if you delete the HTML element, the styles are gone. Dead code elimination is built-in.`
  },
  {
    id: '4',
    slug: 'future-of-ai-in-web-dev',
    title: 'The Future of AI in Web Dev',
    excerpt: 'How Large Language Models are shifting the way we write, debug, and deploy code.',
    date: 'Dec 01, 2023',
    content: `We are standing at the precipice of a new era in software engineering. Large Language Models (LLMs) like GPT-4 and Gemini are not just tools; they are collaborators.

## Coding with Copilots

The auto-complete of the past suggested variable names. The auto-complete of today suggests entire algorithms. This shifts the developer's role from "syntax writer" to "architect and reviewer."

## Debugging

Rubber duck debugging has gone digital. You can now paste a stack trace into an AI chat and get a breakdown of exactly what went wrong and how to fix it. This lowers the barrier to entry for new developers and saves hours of frustration for veterans.

## The Risk

The risk, however, is complacency. If we stop understanding the code we ship, we create a brittle ecosystem. We must treat AI generated code with the same scrutiny we apply to a junior developer's pull request. Review it, understand it, test it.

The future isn't AI replacing developers. It's developers using AI to build better things, faster.`
  }
];