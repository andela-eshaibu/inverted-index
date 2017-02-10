module.exports ={
    "root": true,
    "extends": "airbnb-base",
    "env": {
        "node": true,
        "es6": true,
        "jasmine": true
    },
    "rules": {
        "indent": [1,4],
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "new-cap": 0,
        "consistent-return": 0,
        "no-param-reassign": 0,
        "comma-dangle": 0,
        "curly": [1, "multi-line"],
        "arrow-body-style": 0,
        "no-shadow": [1, { "allow": ["req", "res", "err"] }],
        "no-undef": 0,
        "valid-jsdoc": [1, {
            "requireReturn": true,
            "requireReturnType": true,
            "requireParamDescription": false,
            "requireReturnDescription": true
        }],
        "require-jsdoc": [1, {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true
            }
        }],
        // windows linebreaks when not in production environment
        // "linebreak-style": [2, process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
        "linebreak-style": [2, "windows"],
        "import/no-unresolved": 0
    }
};
