<div align="center">
  <h1>jest-runner-sass-true</h1>
  <p>SASS True Runner for Jest</p>
  <p>🚧 Work in Progress 🚧</p>
</div>

# Usage

## Install

Install `jest`, and `jest-runner-sass-true`, `sass-true`

```bash
yarn add --dev jest jest-runner-sass-true sass-true
# or with NPM
npm install --save-dev jest jest-runner-sass-true sass-true
```

### Add it to your Jest config

In your `package.json`

```json
{
  "jest": {
    "projects": [
      {
        "runner": "jest-runner-sass-true",
        "displayName": "SASS",
        "moduleFileExtensions": ["scss"],
        "testMatch": [
          "<rootDir>/src/**/__tests__/*.scss"
        ],
        "testPathIgnorePatterns": [
          "/node_modules/"
        ],
        "globals": {
          "//": "Change to `true` to see the trace log",
          "trace": false
        }
      }
    ]
  }
}
```

Or in `jest.config.json`

```js
module.exports = {
  "projects": [
    {
      "runner": "jest-runner-sass-true",
      "displayName": "SASS",
      "moduleFileExtensions": ["scss"],
      "testMatch": [
        "<rootDir>/src/**/__tests__/*.scss"
      ],
      "testPathIgnorePatterns": [
        "/node_modules/"
      ],
      "globals": {
        "//": "Change to `true` to see the trace log",
        "trace": false
      }
    }
  ]
}
```

### Run Jest

```bash
yarn jest
# or with config file
jest --config ./jest.config.json
```
