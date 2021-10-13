# Requirements

We want decoupled packages (ie. teams can work independently on them)
that expose components that can be imported by another package (still in this repo)

Each package can have its own development webpack setup (this can be seen in
the components folder, here we spin up a mock storybook to show the commponents ...  also we export the components)

By convention the output of compiled files should go into the `lib` folder. Please note that during webpack development files only get generated in memory

This is possible with (Project References)[https://www.typescriptlang.org/docs/handbook/project-references.html]


# Yarn workspaces

Developers should always install packages to "their" package with `yarn workspace <package> install <package>` and *not* by going into packages/<package> and running yarn install there


# Setup

This branch shows how we can compile the components package into the lib folder
(while preserving the typings) and importing them in the app-shell package

Key settings here are

* In components package.json we expose the compiled lib/index.js file
* In the components package.json we expose the compiled typings
* In the root tsconfig.json we define the packages as references
* In the app-shell tsconfig.json file we reference the components lib so the compiler can build a dependency graph
* We add the components package to the app-shell package.json dependencies

# Usage

On initial start (or after running `yarn run clean`) you need to run `yarn run compile`.
This causes TS to traverse into the references and build app-shell and components.

After that you can run `yarn run dev` which will cause the app-shell to load (port 3000). 
Alternatively you can use `yarn run storybook` to run the storybook that is in
components (port 4000).

## Bugs

For now `yarn run compile` does not copy css assets to lib. So to make this
work, you need to copy Header.module.css from packages/components/src to
packages/components/lib

I created a silly copy script that does that ... but it's weird that the
packages use webpack and the parent level compile does not.

# Pros

* After the initial compile, TS will also see that references have been changed
and recompile. Ie. if I change something in the components then `yarn run dev`
will recompile. The change detection seems to be a bit slow though
* Faster compilation because it can use the compiled dependency

# Cons
* Need to find out how to use with webpack (css etc). Because changes on a components
css file will not be detected
* Weird usage with the compiling first

