export default {
    cloneState: (state) => {
        return JSON.parse(JSON.stringify(state));
    }
};