1. Run `npm i`
1. Running `npm run start` will throw
   ```sh
   Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './helper incorrect.mjs' is not defined by "exports" in [...]/package.json   imported from [...]/dist/incorrect.js
   ```
1. Try to uncomment the lines in `src/incorrect.ts`. VSCode will suggested an incorrect import only for the first line.
1. Run `npm run build`
