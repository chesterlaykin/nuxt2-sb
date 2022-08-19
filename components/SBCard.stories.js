import SBCard from '@/components/SBCard.vue';

export default {
  title: 'SBCard',
  component: SBCard
}

const Template = (args) => ({
    components: { SBCard },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() { return { args }},
    // And then the `args` are bound to your component with `v-bind="args"` 
    template: '<SBCard  v-bind="args"/>',
})

export const SBCard1 = Template.bind({});
SBCard1.args = {}