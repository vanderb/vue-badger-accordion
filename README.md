# vue-badger-accordion
Badger-Accordion Component for Vue 2.0

This package is a wrapper for the badger-accordion made by [Stuart Nelson](https://github.com/stuartjnelson)

Badger-Accordion-Repository:

https://github.com/stuartjnelson/badger-accordion

---

## Installation

### Install package

```bash
npm install vue-badger-accordion --save
```

## Setup

```javascript
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
```

#### Implement globally

```javascript
Vue.component('BadgerAccordion', BadgerAccordion)
Vue.component('BadgerAccordionItem', BadgerAccordionItem)
```


#### Implement locally

```javascript
export default {
    components: {
        BadgerAccordion,
        BadgerAccordionItem
    }
}
```

## Example

```html
<badger-accordion>
    <badger-accordion-item>
        <template slot="header">First Accordion Header</template>    
        <template slot="content">First Accordion Content</template>  
    </badger-accordion-item>

    <badger-accordion-item>
        <template slot="header">Second Accordion Header</template>    
        <template slot="content">Second Accordion Content</template>  
    </badger-accordion-item>
</badger-accordion>
```

Note: You can replace <template> with all regular html-tags, just remember to add the slot-parameter.

## Options

Options can be implemented by component property "option".

```html
<badger-accordion :options="{...}">
    ...
</badger-accordion>
```
A list of available options could be found in the badger-accordion repository

https://github.com/stuartjnelson/badger-accordion#options

## Methods

All Methods of badger-accordion are also available. Just add a ref to you accordion and you can access them.

```html
<badger-accordion ref="myAccordion">
```

```javascript
this.$refs.myAccordion.open(0);
```

A list of available methods could be found in the badger-accordion repository

https://github.com/stuartjnelson/badger-accordion#methods
