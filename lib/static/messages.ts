export const error = {
    INTERNAL: "Don't worry, it's not your fault.",
    INTERNAL_EXTRA:
        'This should (or should not) work and this message should not (or should) appear. In short, this error must NEVER appear and if it does then the developers have not done their job properly. Please report this error to their GitHub repository.',
    API_TIMEOUT_EXTRA:
        'The server is not responding and we can\'t hold the door open any longer, which is why you are seeing this message. Your connection to the server "may" not be stable, or the server "may" be busy or down at the moment.',
    API_INVALID_RESPONSE:
        'We are unable to process your request right now. Try again later.',
    API_INVALID_RESPONSE_EXTRA:
        'We HAVE received a response from the server, but it is not what we expected. It is "possible" that the server has triggered protection against your IP being temporarily blocked.',
    PACKAGE_MISSING: "The usage of \"undici\" is required for JSPaste, but it is not installed. Install \"undici\" or upgrade to >=Node18.0.0."
};