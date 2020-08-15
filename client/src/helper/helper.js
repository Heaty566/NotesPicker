export const formatString = (value = "", max) => {
        if (value.length > max) return value.slice(0, max) + "...";
        return value;
};
