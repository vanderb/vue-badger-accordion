<template>
    <div class="badger-accordion-item">

        <dt class="badger-accordion__header">
            <div class="js-badger-accordion-header">
                <div class="badger-accordion-toggle">
                    <slot name="header">Collapse-Title</slot>
                </div>
                <span class="badger-toggle-indicator" v-html="icon"></span>
            </div>
        </dt>

        <dd class="badger-accordion__panel js-badger-accordion-panel">
            <div class="js-badger-accordion-panel-inner">
                <slot name="content"></slot>
            </div>
        </dd>

    </div>
</template>

<script>
export default {
    name: 'BadgerAccordionItem',
    mounted() {
        // If item rendered emit readyness to parent
        this.$parent.$emit('item:ready');
    },
    data() {
        return {
            opened: false
        }
    },
    methods: {
        changeState(state) {
            this.opened = state;
        }
    },
    computed: {
        iconOpened() {
            return this.$parent.icons ? this.$parent.icons.opened : '';
        },
        iconClosed() {
            return this.$parent.icons ? this.$parent.icons.closed : '';
        },
        icon() {
            return this.opened ? this.iconOpened : this.iconClosed;
        }
    }
}
</script>

<style lang="scss">

	.badger-accordion__panel {
        max-height: 75vh;
        overflow: hidden;

        // scss-lint:disable ImportantRule
        &.-ba-is-hidden {
            max-height: 0 !important;
        }
    }

    // transition is added via `badger-accordion--initialized` to stop animation on initalition
    .badger-accordion--initialized {

        .badger-accordion__panel {
            transition: max-height ease-in-out 0.2s;
        }
    }

    .badger-accordion__header {

        .js-badger-accordion-header {
            display: flex;
            align-items: center;

            .badger-accordion-toggle {
                flex: 0 0 90%;
                cursor: pointer;
            }

            .badger-toggle-indicator {
                flex: 0 0 10%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                cursor: pointer;
            }

        }

    }
</style>
