# rcx


### TODO:
```json
// package.json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "npx eslint",
      "npx format"
    ]
  },
```

https://articles.wesionary.team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff