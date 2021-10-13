# Requirements

We want decoupled packages (ie. teams can work independently on them)
that expose components that can be imported by another package (still in this repo)

Each package can have its own development webpack setup (this can be seen in
the components folder, here we spin up a mock storybook to show the commponents ...  also we export the components)

By convention the output of compiled files should go into the `lib` folder. Please note that during webpack development files only get generated in memory

This is possible with (Project References)[https://www.typescriptlang.org/docs/handbook/project-references.html]


# Setup

This branch shows how to create workspace'd packages *that export
TypeScript* files.

This works with a new feature called references (which describes to TypeScript which packages exist and how they interrelate)

Key settings here are

* In components package.json we expose the main index.ts file
* In the root tsconfig.json we define the packages as references
* In the app-shell tsconfig.json file we reference the components lib so the compiler can build a dependency graph
* In the app-shell webpack.config.js we set projectReferences to true for the ts-loader

# Pros

* Packages can build their own dev and build tooling as they please
* You don't need to compile the packages in order to use them in another package

# Cons

* You are really compiling the full typescript graph, ie app-shell + the components
