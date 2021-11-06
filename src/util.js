module.exports = {
    JSPasteError: (text, code) => {
        throw new Error(`[JSPaste Error] (${code}) ${text}`);
    }
}