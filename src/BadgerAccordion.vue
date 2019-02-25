<template>
    <div class="component-badger-accordion" ref="badger"><slot></slot></div>
</template>

<script>
import BadgerAccordion from 'badger-accordion'

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
            this.accordion = new BadgerAccordion(this.$refs.badger, (this.options || {}))
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
