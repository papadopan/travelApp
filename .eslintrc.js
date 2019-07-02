module.exports = {
    "extends": ["airbnb", "plugin:prettier/recommended"],
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules":{
        "comma-dangle": ["error", "never"],
        "jsx-a11y/img-has-alt": [0],
        "no-confusing-arrow": [0],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-no-bind": [0],
        "react/prop-types": [1],
        "react/require-default-props": [0]
    }
};