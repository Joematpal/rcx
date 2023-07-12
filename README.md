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