<template>
    <div class="badger-accordion-item">
        
        <div class="badger-accordion__header">
            <div class="js-badger-accordion-header">
                <div class="badger-accordion-toggle">
                    <slot name="header">Collapse-Title</slot>
                </div>
                <span class="badger-toggle-indicator"></span>
            </div>
        </div> 

        <div class="badger-accordion__panel js-badger-accordion-panel">
            <div class="js-badger-accordion-panel-inner">
                <slot name="content"></slot>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'BadgerAccordionItem'
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
    
    // transition is added via `badger-accordion--initalised` to stop animation on initalition    
    .badger-accordion--initalised {

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
                justify-content: center;
                cursor: pointer;

                &:before {
                    content: '+';
                    display: flex;
                    height: 22px;
                    width: 22px;
                    align-items: center;
                    justify-content: center;
                }
            }

            &.-ba-is-active .badger-toggle-indicator:before {
                content: '-'
            }

        }

    }

</style>
