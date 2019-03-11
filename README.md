[![npm](https://img.shields.io/npm/l/@y7k/component-grouped-list.svg)](https://www.npmjs.com/package/@y7k/component-grouped-list) [![npm](https://img.shields.io/npm/v/@y7k/component-grouped-list.svg)](https://www.npmjs.com/package/@y7k/component-grouped-list)

# Y7K Component: Grouped List

This component groups its children DOM elements based on a given key. It detects, when new DOM elements are inserted into the tree and rearranges them aswell. This makes it very handy to use it together with [Filterable List](https://showroom.y7k.tools/showroom/pages/components/lists/filterable-list/index-filterable-list).

It is based on [Vue 2](https://vuejs.org), [MaintainableCSS](https://maintainablecss.com/) and the [Y7K Style Plate](https://github.com/y7k/style). Detailed information in the [Y7K Showroom](https://showroom.y7k.tools/showroom/pages/components/lists/grouped-list/index-grouped-list).


![Component](img-component.png)


## Installation

##### Install npm package
```bash
npm install @y7k/component-grouped-list --save
```

##### Include in your project
```js
import grouped-list from '@y7k/component-grouped-list';
```

##### Variant 1: Register components globally:
```js
import grouped-list from '@y7k/component-grouped-list';
groupedList.registerGlobally();
```
 
##### Variant 2: Use components directly:
```js
import { GroupedList } from '@y7k/component-grouped-list';

// Vue component example
export default {

    components: {
        GroupedList,
    },
}
```

##### Include styles
In your main.scss file
```scss
@import '@y7k/grouped-list/src/scss/grouped-list';

// If you don't set "node_modules" as a webpack include path:
@import '../[path]/../node_modules/@y7k/component-grouped-list/src/scss/groupedList';
```


## Documentation
Please have a look at the usage documentation in the [Y7K Showroom](https://showroom.y7k.tools/showroom/pages/components/lists/grouped-list/index-grouped-list).
