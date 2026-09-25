# aglaya-tokens-version

This npm name is a **placeholder**. It holds the name so nobody else can take
it; it does not check anything.

The real checker ships inside `@aglaya/design-tokens`, which is installed from
a git tag of
[aglaya-design-system](https://github.com/ibaifernandez/aglaya-design-system),
not from npm:

```bash
# newest tag:
git ls-remote --tags https://github.com/ibaifernandez/aglaya-design-system.git

npm install "git+https://github.com/ibaifernandez/aglaya-design-system.git#<tag>"
npm exec --no -- aglaya-tokens-version
```

`--no` runs the binary that package installed and refuses to fetch anything.
Plain `npx` would download whatever is published under this name — which is the
reason this placeholder exists.

## Rule for anyone editing this

**Write nothing here that ages**: no version number, no tag, no counts, no
dates. This package is published once and then forgotten, so anything that has
to be remembered will end up being a lie.
