# Structuring the pillars Of React native Project
 We will define a structure for our project to grow efficiently and make its maintenance easier.

```js
├── src
│   ├── assets
│   │  ├── fonts
│   │  ├── images
│   ├── components
│   │  ├── atoms
│   │  ├── molecules
│   │  ├── organisms
│   ├── navigations
│   ├── scenes
│   ├── services
│   ├── styles
│   ├── utils
│   ├── index.js
```

# Atomic Components
For a better understanding of atomic system/components I indicate the reading, [Atomic Design with React](https://cheesecakelabs.com/blog/atomic-design-react/)
```
– Atoms: The smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts.

– Molecules: They are the composition of one or more components of atoms.

– Organisms: The combination of molecules that work together or even with atoms that compose more elaborate interfaces.
```

## Based in [CSS preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor) we use some default files in our style structure:

```
.
├── src
│   ├── styles
│   │  ├── index.js        // Export all
│   │  ├── colors.js       // Colors pallet
│   │  ├── mixins.js       // Mixins to use CSSinJS
│   │  ├── spacing.js      // Paddings, margins and scale
│   │  ├── typography.js   // Fonts types and sizes
```
# Reusable Services
Not everything can be considered a component in React Native, a well-known approach used to create separate modules and in some cases containing business rules are the use of services.

```
Directory for creating services:

src/services

They can be shared with multiple screens and components in your project.

Commonly used to create services that make contact with external APIs and use the axios library that we mentioned at the beginning of the post.
```
# to change package id on IOS/ANDROID folders
using [react native rename](https://www.npmjs.com/package/react-native-rename)
example:
react-native-rename "App name" -b com.domain.app