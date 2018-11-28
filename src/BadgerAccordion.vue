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
    created() {
        // On child-item rendered initiate badger-accordion
        this.$on('item:ready', () => {
            this.accordion = new BadgerAccordion(this.$refs.badger, (this.options || {}))
        });
    },

    methods: {
        init() { this.accordion.init() },
        getState() { return this.accordion.getState() },
        open() { this.accordion.open() },
        close() { this.accordion.close() },
        togglePanel() { this.accordion.togglePanel() },
        openAll() { this.accordion.openAll() },
        closeAll() { this.accordion.closeAll() },
        calculateAllPanelsHeight() { this.accordion.calculateAllPanelsHeight() },
        calculatePanelHeight() { this.accordion.calculatePanelHeight() }
    },
    computed: {
        opened() {
            if(this.accordion) {
                return typeof this.accordion.states.find(item => item.state == 'open') == 'object';
            }
            return false;
        }
    }
};
</script>
