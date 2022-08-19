import SBLinkButton from '@/components/SBLinkButton.vue';

export default {
    title: 'SBLinkButton',
    component: SBLinkButton
}

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { SBLinkButton },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() { return { args }},
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<SBLinkButton v-bind="args"/>',
});

export const First = Template.bind({});
First.args = {
    buttonData: {
        text: 'Follow link',
        link: 'http://google.com',
        targetBlank: true
    }
};

