
<script>

    import groupBy from 'lodash/groupBy';

    /**
     *
     */
    export default {

        props: {
            groupContainerElement: {
                type: String,
                default: 'div',
            },
            headingElement: {
                type: String,
                default: 'div',
            },
            itemsContainerElement: {
                type: String,
                default: 'div',
            },
            groupContainerClass: {
                type: String,
                default: '',
            },
            headingClass: {
                type: String,
                default: '',
            },
            itemsContainerClass: {
                type: String,
                default: '',
            },
            reverseGroupOrder: {
                type: Boolean,
                default: false,
            },

        },


        data() {
            return {

            };
        },


        computed: {

        },


        watch: {
            itemsContainerClass() {
                this.groupItems();
            },
        },


        mounted() {
            this.$options.domObserver = new MutationObserver(this.groupItems);
            this.groupItems();
        },


        methods: {
            groupItems() {
                this.$options.domObserver.disconnect();
                const items = this.$el.querySelectorAll('[data-filter-group]');

                const groups = groupBy(Array.from(items).map((item) => {
                    return item.cloneNode(true);
                }), (item) => {
                    return item.getAttribute('data-filter-group');
                });

                let hasNoMoreMarker = this.$el.querySelector('meta[name="hasNoMore"]');
                if (hasNoMoreMarker) hasNoMoreMarker = hasNoMoreMarker.cloneNode(true);

                this.$el.innerHTML = '';
                if (hasNoMoreMarker) this.$el.appendChild(hasNoMoreMarker);
                const groupKeys = this.reverseGroupOrder ? Object.keys(groups).reverse() : Object.keys(groups);

                groupKeys.forEach((groupKey) => {
                    const groupContainer = document.createElement(this.groupContainerElement);
                    const heading = document.createElement(this.headingElement);
                    const itemsContainer = document.createElement(this.itemsContainerElement);

                    this.headingClass.split(' ').forEach((c) => {
                        heading.classList.add(c);
                    });
                    this.groupContainerClass.split(' ').forEach((c) => {
                        groupContainer.classList.add(c);
                    });
                    this.itemsContainerClass.split(' ').forEach((c) => {
                        itemsContainer.classList.add(c);
                    });
                    heading.innerHTML = groupKey;
                    groups[groupKey].forEach((item) => {
                        itemsContainer.appendChild(item);
                    });
                    groupContainer.appendChild(heading);
                    groupContainer.appendChild(itemsContainer);
                    this.$el.appendChild(groupContainer);
                });

                this.$options.domObserver.observe(this.$el, { childList: true });
            },
        },
    };

</script>

<template>
    <div class="groupedList">
        <slot></slot>
    </div>
</template>
