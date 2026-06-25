# Health Assured - Frontend Tech Task for Junior and Middleweight Developer Role
Single Page App, built in React that groups resources by category on first load, with:
- Sorting catergories alphabetically
- Filter by title/tags
- View more information in a modal when clicking on a card

# Tech stack used and why
- Vite + React + Typescript - React and Typescript was a requirement from HA. Vite works well with both. It is a popular and widley used build tool that works well with React and Typescript and provides a good developer experience
- Vitest - Already using vite, so makes sense to use vitest. It is a very popular tool for unit testing and again provides a good developer experience

## Running the application. 
Once the application is cloned

Run `npm install`

Then run `npm run dev`

The application should run on http://localhost:5173

## Codebase structure
Each feature and components are contained within their own folders. This allows for resuablilty should the need for the components to be used elsewhere rather than duplicating code.
For example a card component will have the following structure

```
app
├─ components
             ├─card
                    ├─ Card.component.tsx
                       Card.css
                       Card.spec.tsx
```

## What I would do with more time
- Responsiveness for various screen size including mobile and tablet
- Acessbility - including screen reader support and keyboard navigation
- Not hard coding strings and making use of language packs(easier for translations)
- Having specific resuable components like headers, buttons, inputs etc.
- Have a dedicated utils area/files for resuability
- In the event there was a slow API, have skeleton loaders