# markdown-it-mermaid-fence

## Install

```
npm install --save markdown-it-mermaid-fence
```

## Usage

```js
  const md = require('markdown-it')()
    .use(require('markdown-it-mermaid-fence'), opts)
```

The `opts` object can contain:

Name              | Description                                                    | Default
------------------|----------------------------------------------------------------|-----------------------------------
`marker` | marker of mermaid block | ```
`theme` | mermaid theme | 'default'
`ganttAxisFormat` | mermaid gannt Axis Format | '%Y-%m-%d'

## Runkit Example
* (not yet)
