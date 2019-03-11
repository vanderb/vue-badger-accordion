<template>
    <dl class="component-badger-accordion" ref="badger"><slot></slot></dl>
</template>

<script>
import BadgerAccordion from 'badger-accordion'

// Helper-function to unwrap child-component-wrapper
function unwrap(wrapper) {
    // place childNodes in document fragment
    var docFrag = document.createDocumentFragment();
    while (wrapper.firstChild) {
        var child = wrapper.removeChild(wrapper.firstChild);
        docFrag.appendChild(child);
    }

    // replace wrapper with document fragment
    wrapper.parentNode.replaceChild(docFrag, wrapper);
}

export default {
    name: 'BadgerAccordion',
    props: {
        options: {
            type: Object,
            default() {return {}}
        },
        icons: {
            default() {return {opened: '-', closed: '+'} }
        }
    },
    data() {
        return {
            accordion: null,
            itemsReady: false
        }
    },
    watch: {
      "accordion.states": {
          handler(states) {
              this.calculateAllPanelsHeight();
              this.$children.forEach((child, n) => {
                  if(typeof states[n] == 'object') {
                      child.changeState(states[n].state == 'open');
                  }
              });
          },
          deep:true
      }
    },
    created() {
        // On child-item rendered initiate badger-accordion
        this.$on('item:ready', () => {
            // Unwrap child-wrapper due issues with badger-accordion
            unwrap(this.$refs.badger.querySelector('.badger-accordion-item'));
            // Init badger-accordion if child-component is loaded
            this.accordion = new BadgerAccordion(this.$refs.badger, (this.options || {}))
            this.$forceUpdate();
        });
    },

    methods: {
        init() { this.accordion.init() },
        getState(headerIds = []) { return this.accordion.getState(headerIds) },
        open(headerIndex) { this.accordion.open(headerIndex) },
        close(headerIndex) { this.accordion.close(headerIndex) },
        togglePanel(animationAction, headerIndex) { this.accordion.togglePanel(animationAction, headerIndex) },
        openAll() { this.accordion.openAll() },
        closeAll() { this.accordion.closeAll() },
        calculateAllPanelsHeight() { this.accordion.calculateAllPanelsHeight() },
        calculatePanelHeight(panel) { this.accordion.calculatePanelHeight(panel) }
    }
};
</script>
