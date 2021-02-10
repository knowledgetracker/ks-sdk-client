# ks-sdk-client


#### Step 1: Create Project 

```
npm init -y
npm i typescript -D
npx tsc --init
```

#### Step 2: Update Typescript configuration 

##### Step 2.1. ESM ( tsconfig.json)
```js
{
  "compilerOptions": {
    "target": "ES2015",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "ES2020",     
    "declaration": true,                /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */   
    "strict": true,                           /* Enable all strict type-checking options. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */    
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true,  /* Disallow inconsistently-cased references to the same file. */
    "outDir": "./dist/esm",    

  },
  "include": ["./src"]
}
```

##### Step 2.2: CommonJS [ tsconfig-cjs.json]

```js
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "module": "CommonJS",
      "outDir": "./dist/cjs"
    },
  }
```

##### Step 3: Add NPM Tasks (package.json)

```js
"scripts": {
    "tsc": "tsc -p tsconfig.json && tsc -p tsconfig-cjs.json",
    "prepublish": "npm run tsc",
    ...
    }
```
