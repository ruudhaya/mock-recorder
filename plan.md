# Mock Recorder

Mock can be used to record the HTTP requests and responses. This is useful for testing and debugging. The recorder can be started by running the following command:

## References
HAR is the format for storing the HTTP requests and response. there are existing chrome extensions to record HARs.

### Autohar
Simple dev tool extension for Chrome to record HAR files
https://github.com/Aloisius/autohar

### Chrome-HAR-Capturer
More advanced dev tool extension for Chrome to record HAR files, with remote interface
https://github.com/cyrus-and/chrome-har-capturer

## TODO
- [ ] Create simple chrome extension
- [ ] Create simple chrome extension with UI interactions
- [ ] Examine the existing chrome extensions for recording HAR
- [ ] Create a simple chrome extension with record action
- [ ] Support for Chrome
- [ ] Triggered recording of HAR, like an automation recorder
- [ ] Creating a mock server from HAR
- [ ] Provide way to replace the contents of the mock server on demand
- [ ] Provide cloud mock server to be available for immediate use