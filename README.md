# Multi Replace

On a single call, perform multiple replace operations on a Javascript/Typescript string.

## Open source notice

This project is open to updates by its users, I ensure that PRs are relevant to the community.
In other words, if you find a bug or want a new feature, please help us by becoming one of the
[contributors](#contributors-) ✌️ ! See the [contributing section](#contributing).

## Like this module? ❤

Please consider:

- [Buying me a coffee](https://www.buymeacoffee.com/jeanlescure) ☕
- Supporting me on [Patreon](https://www.patreon.com/jeanlescure) 🏆
- Starring this repo on [Github](https://github.com/simplyhexagonal/multi-replace) 🌟

## Usage

Import `multiReplace`:

```tsx
// Node
const { multiReplace } = require('@simplyhexagonal/multi-replace');

// ES6/Typescript
import { multiReplace } from '@simplyhexagonal/multi-replace';

// Browser
<script src="https://cdn.jsdelivr.net/npm/@simplyhexagonal/multi-replace@latest/dist/multi-replace.min.js"></script>
<script>
  const { multiReplace } = MultiReplace;
</script>
```

Define one or more replace patterns:

```ts
const firstReplacePattern = ['Greetings', async () => 'hello'];
const secondReplacePattern = [/stranger/g, 'friend'];

// A replace pattern is an array where the first item is the "matcher"
// and the second item is the "replacement".

// A matcher can be either a string or a regular expression.
// A replacement can be either a string or a function.
```

Use `multiReplace` to perform the replacements over your content:

```ts
const content = 'Greetings stranger, I am also a stranger';

const result = await multiReplace(
  content,
  [
    firstReplacePattern,
    secondReplacePattern,
  ],
);

console.log(result);
// Hello friend, I am also a friend
```

## Synchronous usage

If you need to perform replacements synchronously simply use `multiReplaceSync`:

```tsx
// Node
const { multiReplaceSync } = require('@simplyhexagonal/multi-replace');

// ES6/Typescript
import { multiReplaceSync } from '@simplyhexagonal/multi-replace';

// Browser
<script src="https://cdn.jsdelivr.net/npm/@simplyhexagonal/multi-replace@latest/dist/multi-replace.min.js"></script>
<script>
  const { multiReplaceSync } = MultiReplace;
</script>
```

## Contributing

Yes, thank you! This plugin is community-driven, most of its features are from different authors.
Please update the tests and don't forget to add your name to the `package.json` file.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jeanlescure.cr"><img src="https://shortunique.id/assets/contributors/jeanlescure.svg" /></a><table><tbody><tr><td width="150" align="center"><a href="#maintenance-jeanlescure" title="Maintenance">🚧</a> <a href="https://github.com/simplyhexagonal/multi-replace/commits?author=jeanlescure" title="Code">💻</a> <a href="https://github.com/simplyhexagonal/multi-replace/commits?author=jeanlescure" title="Documentation">📖</a> <a href="https://github.com/simplyhexagonal/multi-replace/commits?author=jeanlescure" title="Tests">⚠️</a></td></tr></tbody></table></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

Copyright (c) 2021-Present [MultiReplace Contributors](https://github.com/simplyhexagonal/multi-replace/#contributors-).<br/>
Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
