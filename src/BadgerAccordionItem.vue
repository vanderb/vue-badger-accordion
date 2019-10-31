<template>
    <div class="badger-accordion-item">

        <dt class="badger-accordion__header">
            <div class="js-badger-accordion-header">
                <button class="badger-accordion-toggle">
                  <span class="badger-accordion-title">
                    <slot name="header">Collapse-Title</slot>
                  </span>
                  <component
                    v-if="icon !== '' && iconComponent"
                    :is="iconComponent"
                    :opened="opened"
                    class="badger-toggle-indicator" />
                </button>
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
            },
            getIcon() {
                return this.icon;
            }
        },
        computed: {
            iconComponent() {
              if (this.$parent.iconComponent) {
                return this.$parent.iconComponent;
              }

              return this.iconLoaded;
            },
            iconOpened() {
                return this.$parent.icons ? this.$parent.icons.opened : '';
            },
            iconClosed() {
                return this.$parent.icons ? this.$parent.icons.closed : '';
            },
            icon() {
                return this.opened ? this.iconOpened : this.iconClosed;
            },
            iconLoaded() {
                return {
                    template: '<span>' + this.icon + '</span>',
                };
            }
        },
        watch: {
            opened(newValue) {
                this.$emit(newValue ? 'open' : 'close')
            }
        }
    }
</script>

<style lang="scss">

    .component-badger-accordion {
        .badger-accordion__panel {
            max-height: 0;
        }

    }

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
            .badger-accordion-toggle {
              width: 100%;
              background: transparent;
              border: 0;
              box-shadow: none;
              display: flex;
              align-items: center;

              .badger-accordion-title {
                flex: 0 0 90%;
                cursor: pointer;
                text-align: left;
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

    }
</style>
