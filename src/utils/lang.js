export const flattenMessages = (nestedMessages, prefix = "") =>
    Object.keys(nestedMessages).reduce((messages, key) => {
        // eslint-disable-next-line security/detect-object-injection
        const value = nestedMessages[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === "string") {
            // eslint-disable-next-line security/detect-object-injection
            messages[prefixedKey] = value;
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }

        return messages;
    }, {});
