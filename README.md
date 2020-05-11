# Projs

> Language preprocessor for JavaScript

Implement custom syntax and produce desire source code.

# Usage

Projs compiler will pick files that have .p extension as default and generate .js files according to defined config.

## Config

/rules dir contains default config of language processing

## Provided 

Sample app: 

```
  @time -> new Date()

  >> (time().toTimeString())
```

Will generate current time value.
