# Next.js 15 Nested Route Client Navigation Issue

This repository demonstrates an unexpected behavior in Next.js 15 involving client-side navigation in nested routes. Links within nested pages fail to function correctly after client-side transitions.

## Bug Description

The issue occurs when navigating between nested routes using client-side navigation (i.e., by clicking links). After the initial client-side transition, subsequent clicks on links within the nested pages might not work as expected. This behavior is inconsistent and unexpected in Next.js 15.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the nested routes and click links. Observe the inconsistent navigation behavior.

## Solution

The solution involves using a combination of techniques such as explicit route handling and ensuring proper use of client-side and server-side transitions in the Next.js application.

## Additional Details

Next.js 15 introduces significant changes in the routing and navigation layer. Client-side transitions often rely on optimized routing behaviors. The exact root cause of this bug is under investigation. The provided solution may be incomplete or require adjustment depending on the specific application structure.
