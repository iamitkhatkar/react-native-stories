module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true

    },
    "extends": ["airbnb"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "no-use-before-define": 0,
        "no-alert" : 0,
        "react/prop-types": 0,
        "react/jsx-filename-extension": 0,
        "import/no-unresolved": 0,
        "object-curly-newline" : 0,
        "react/destructuring-assignment" : 0,
        "react/require-default-props" : 0,
        "react/forbid-prop-types" : 0,
        "react/no-string-refs" : 0,
    },
};