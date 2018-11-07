# markdown-it-mermaid-fence-new

> markdown-it plugin for fenced mermaid
> This is a revive of the now dissapeared markdown-it-mermaid-fence project, originally developed by [Koki Oyatsu](https://github.com/kaishuu0123)

## Install

```
npm install --save markdown-it-mermaid-fence-new
```

## Usage

```js
  const md = require('markdown-it')()
    .use(require('markdown-it-mermaid-fence-new'), opts)
```

The `opts` object can contain:

Name              | Description                                                    | Default
------------------|----------------------------------------------------------------|-----------------------------------
`marker` | marker of mermaid block | ```
`theme` | mermaid theme | 'default'
`ganttAxisFormat` | mermaid gannt Axis Format | '%Y-%m-%d'
