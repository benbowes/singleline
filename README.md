# Oneline

![Build status](https://api.travis-ci.org/benbowes/oneline.svg?branch=master)

Convert a multiline string to a single line string
---

## Getting started

Install the dependency

`npm install oneline --save-dev`

## React classNames example

```js
import oneline from 'oneline';

...
<div
  className={oneline(`
    rrs__select-container
    rrs__select-container--multiselect
    ${(disabled === true) ? 'rrs__select-container--disabled' : ''}
    ${(isTouchDevice === true) ? 'rrs__is-touch' : 'rrs__is-desktop'}
    ${(isOptionsPanelOpen === true) ? 'rrs__options-container--visible' : ''}
    ${altered ? 'rrs__has-changed': ''}
  `)}
>
Some output
</div>
```

## Example 2

```js
import oneline from 'oneline';
const classNames = oneline(`
  rrs__select-container
  rrs__select-container--multiselect

  rrs__is-desktop rrs__options-container--visible
`);

console.log("|"+classNames+"|");

// |rrs__select-container rrs__select-container--multiselect rrs__is-desktop rrs__options-container--visible|
```
