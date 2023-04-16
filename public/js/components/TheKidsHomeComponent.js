export default {
    name: 'TheKidsHomeComponent',

    props: ['user'],

    template: `
    <h1>The Kids Home Component</h1>
    <p>something cool</p>
    `,

    created() {
        // fetch the appropriate video from the IMDBs API
        // and load it into your view -> check video on FOL
    }
}