"use strict";
var application = require('application');
var applicationSettingModule = require("application-settings");
var setString = applicationSettingModule.setString;
application.on(application.uncaughtErrorEvent, function (args) {
    if (args.ios) {
        console.log("NativeScriptError: " + args.ios);
        console.log("Stacktrace: " + args.ios.stack);
        setString("crash", args.ios + args.ios.stack);
    }
    else if (args.android) {
        console.log("NativeScriptError: " + args.android);
        console.log("NativeScriptError: " + args.android.nativeException);
        console.log("NativeScriptError: " + args.android.nativeException.getMessage());
        setString("crash", args.android +
            args.android.nativeException +
            args.android.nativeException.getMessage());
    }
});
application.start({ moduleName: 'main-page' });
//# sourceMappingURL=app.js.map