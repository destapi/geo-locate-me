/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@firebase/app/dist/index.cjs.js":
/*!*******************************************************!*\
  !*** ../node_modules/@firebase/app/dist/index.cjs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var component = __webpack_require__(/*! @firebase/component */ "../node_modules/@firebase/component/dist/index.cjs.js");
var tslib = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var logger$1 = __webpack_require__(/*! @firebase/logger */ "../node_modules/@firebase/logger/dist/index.cjs.js");
var util = __webpack_require__(/*! @firebase/util */ "../node_modules/@firebase/util/dist/index.cjs.js");
var idb = __webpack_require__(/*! idb */ "../node_modules/idb/build/index.js");

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerServiceImpl = /** @class */ (function () {
    function PlatformLoggerServiceImpl(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerServiceImpl.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return "".concat(service.library, "/").concat(service.version);
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerServiceImpl;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */;
}

var name$o = "@firebase/app";
var version$1 = "0.10.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');

var name$n = "@firebase/app-compat";

var name$m = "@firebase/analytics-compat";

var name$l = "@firebase/analytics";

var name$k = "@firebase/app-check-compat";

var name$j = "@firebase/app-check";

var name$i = "@firebase/auth";

var name$h = "@firebase/auth-compat";

var name$g = "@firebase/database";

var name$f = "@firebase/database-compat";

var name$e = "@firebase/functions";

var name$d = "@firebase/functions-compat";

var name$c = "@firebase/installations";

var name$b = "@firebase/installations-compat";

var name$a = "@firebase/messaging";

var name$9 = "@firebase/messaging-compat";

var name$8 = "@firebase/performance";

var name$7 = "@firebase/performance-compat";

var name$6 = "@firebase/remote-config";

var name$5 = "@firebase/remote-config-compat";

var name$4 = "@firebase/storage";

var name$3 = "@firebase/storage-compat";

var name$2 = "@firebase/firestore";

var name$1 = "@firebase/firestore-compat";

var name = "firebase";
var version = "10.10.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
/**
 * The default app name
 *
 * @internal
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name$o] = 'fire-core',
    _a$1[name$n] = 'fire-core-compat',
    _a$1[name$l] = 'fire-analytics',
    _a$1[name$m] = 'fire-analytics-compat',
    _a$1[name$j] = 'fire-app-check',
    _a$1[name$k] = 'fire-app-check-compat',
    _a$1[name$i] = 'fire-auth',
    _a$1[name$h] = 'fire-auth-compat',
    _a$1[name$g] = 'fire-rtdb',
    _a$1[name$f] = 'fire-rtdb-compat',
    _a$1[name$e] = 'fire-fn',
    _a$1[name$d] = 'fire-fn-compat',
    _a$1[name$c] = 'fire-iid',
    _a$1[name$b] = 'fire-iid-compat',
    _a$1[name$a] = 'fire-fcm',
    _a$1[name$9] = 'fire-fcm-compat',
    _a$1[name$8] = 'fire-perf',
    _a$1[name$7] = 'fire-perf-compat',
    _a$1[name$6] = 'fire-rc',
    _a$1[name$5] = 'fire-rc-compat',
    _a$1[name$4] = 'fire-gcs',
    _a$1[name$3] = 'fire-gcs-compat',
    _a$1[name$2] = 'fire-fst',
    _a$1[name$1] = 'fire-fst-compat',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
var _apps = new Map();
/**
 * @internal
 */
var _serverApps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug("Component ".concat(component.name, " failed to register with FirebaseApp ").concat(app.name), e);
    }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    var e_1, _a, e_2, _b;
    var componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug("There were multiple attempts to register component ".concat(componentName, "."));
        return false;
    }
    _components.set(componentName, component);
    try {
        // add the component to existing app instances
        for (var _c = tslib.__values(_apps.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var app = _d.value;
            _addComponent(app, component);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var _e = tslib.__values(_serverApps.values()), _f = _e.next(); !_f.done; _f = _e.next()) {
            var serverApp = _f.value;
            _addComponent(serverApp, component);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    var heartbeatController = app.container
        .getProvider('heartbeat')
        .getImmediate({ optional: true });
    if (heartbeatController) {
        void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name, instanceIdentifier) {
    if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 *
 * @param obj - an object of type FirebaseApp or FirebaseOptions.
 *
 * @returns true if the provide object is of type FirebaseApp.
 *
 * @internal
 */
function _isFirebaseApp(obj) {
    return obj.options !== undefined;
}
/**
 *
 * @param obj - an object of type FirebaseApp.
 *
 * @returns true if the provided object is of type FirebaseServerAppImpl.
 *
 * @internal
 */
function _isFirebaseServerApp(obj) {
    return obj.settings !== undefined;
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
    _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* AppError.NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call initializeApp() first',
    _a["bad-app-name" /* AppError.BAD_APP_NAME */] = "Illegal App name: '{$appName}'",
    _a["duplicate-app" /* AppError.DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists with different options or config",
    _a["app-deleted" /* AppError.APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["server-app-deleted" /* AppError.SERVER_APP_DELETED */] = 'Firebase Server App has been deleted',
    _a["no-options" /* AppError.NO_OPTIONS */] = 'Need to provide options, when not being deployed to hosting via source.',
    _a["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a["idb-open" /* AppError.IDB_OPEN */] = 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    _a["idb-get" /* AppError.IDB_GET */] = 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    _a["idb-set" /* AppError.IDB_WRITE */] = 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    _a["idb-delete" /* AppError.IDB_DELETE */] = 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    _a["finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */] = 'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    _a["invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */] = 'FirebaseServerApp is not for use in browser environments.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, container) {
        var _this = this;
        this._isDeleted = false;
        this._options = tslib.__assign({}, options);
        this._config = tslib.__assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new component.Component('app', function () { return _this; }, "PUBLIC" /* ComponentType.PUBLIC */));
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed();
            return this._automaticDataCollectionEnabled;
        },
        set: function (val) {
            this.checkDestroyed();
            this._automaticDataCollectionEnabled = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed();
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed();
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "config", {
        get: function () {
            this.checkDestroyed();
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "container", {
        get: function () {
            return this._container;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "isDeleted", {
        get: function () {
            return this._isDeleted;
        },
        set: function (val) {
            this._isDeleted = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed = function () {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */, { appName: this._name });
        }
    };
    return FirebaseAppImpl;
}());

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseServerAppImpl = /** @class */ (function (_super) {
    tslib.__extends(FirebaseServerAppImpl, _super);
    function FirebaseServerAppImpl(options, serverConfig, name, container) {
        var _this = this;
        // Build configuration parameters for the FirebaseAppImpl base class.
        var automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== undefined
            ? serverConfig.automaticDataCollectionEnabled
            : false;
        // Create the FirebaseAppSettings object for the FirebaseAppImp constructor.
        var config = {
            name: name,
            automaticDataCollectionEnabled: automaticDataCollectionEnabled
        };
        if (options.apiKey !== undefined) {
            // Construct the parent FirebaseAppImp object.
            _this = _super.call(this, options, config, container) || this;
        }
        else {
            var appImpl = options;
            _this = _super.call(this, appImpl.options, config, container) || this;
        }
        // Now construct the data for the FirebaseServerAppImpl.
        _this._serverConfig = tslib.__assign({ automaticDataCollectionEnabled: automaticDataCollectionEnabled }, serverConfig);
        _this._finalizationRegistry = new FinalizationRegistry(function () {
            _this.automaticCleanup();
        });
        _this._refCount = 0;
        _this.incRefCount(_this._serverConfig.releaseOnDeref);
        // Do not retain a hard reference to the dref object, otherwise the FinalizationRegisry
        // will never trigger.
        _this._serverConfig.releaseOnDeref = undefined;
        serverConfig.releaseOnDeref = undefined;
        registerVersion(name$o, version$1, 'serverapp');
        return _this;
    }
    Object.defineProperty(FirebaseServerAppImpl.prototype, "refCount", {
        get: function () {
            return this._refCount;
        },
        enumerable: false,
        configurable: true
    });
    // Increment the reference count of this server app. If an object is provided, register it
    // with the finalization registry.
    FirebaseServerAppImpl.prototype.incRefCount = function (obj) {
        if (this.isDeleted) {
            return;
        }
        this._refCount++;
        if (obj !== undefined) {
            this._finalizationRegistry.register(obj, this);
        }
    };
    // Decrement the reference count.
    FirebaseServerAppImpl.prototype.decRefCount = function () {
        if (this.isDeleted) {
            return 0;
        }
        return --this._refCount;
    };
    // Invoked by the FinalizationRegistry callback to note that this app should go through its
    // reference counts and delete itself if no reference count remain. The coordinating logic that
    // handles this is in deleteApp(...).
    FirebaseServerAppImpl.prototype.automaticCleanup = function () {
        void deleteApp(this);
    };
    Object.defineProperty(FirebaseServerAppImpl.prototype, "settings", {
        get: function () {
            this.checkDestroyed();
            return this._serverConfig;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseServerAppImpl.prototype.checkDestroyed = function () {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("server-app-deleted" /* AppError.SERVER_APP_DELETED */);
        }
    };
    return FirebaseServerAppImpl;
}(FirebaseAppImpl));

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
var SDK_VERSION = version;
function initializeApp(_options, rawConfig) {
    var e_1, _a;
    if (rawConfig === void 0) { rawConfig = {}; }
    var options = _options;
    if (typeof rawConfig !== 'object') {
        var name_1 = rawConfig;
        rawConfig = { name: name_1 };
    }
    var config = tslib.__assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
    var name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    options || (options = util.getDefaultAppConfig());
    if (!options) {
        throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
    }
    var existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if (util.deepEqual(options, existingApp.options) &&
            util.deepEqual(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */, { appName: name });
        }
    }
    var container = new component.ComponentContainer(name);
    try {
        for (var _b = tslib.__values(_components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component$1 = _c.value;
            container.addComponent(component$1);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
function initializeServerApp(_options, _serverAppConfig) {
    var e_2, _a;
    if (util.isBrowser()) {
        // FirebaseServerApp isn't designed to be run in browsers.
        throw ERROR_FACTORY.create("invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */);
    }
    if (_serverAppConfig.automaticDataCollectionEnabled === undefined) {
        _serverAppConfig.automaticDataCollectionEnabled = false;
    }
    var appOptions;
    if (_isFirebaseApp(_options)) {
        appOptions = _options.options;
    }
    else {
        appOptions = _options;
    }
    // Build an app name based on a hash of the configuration options.
    var nameObj = tslib.__assign(tslib.__assign({}, _serverAppConfig), appOptions);
    // However, Do not mangle the name based on releaseOnDeref, since it will vary between the
    // construction of FirebaseServerApp instances. For example, if the object is the request headers.
    if (nameObj.releaseOnDeref !== undefined) {
        delete nameObj.releaseOnDeref;
    }
    var hashCode = function (s) {
        return tslib.__spreadArray([], tslib.__read(s), false).reduce(function (hash, c) { return (Math.imul(31, hash) + c.charCodeAt(0)) | 0; }, 0);
    };
    if (_serverAppConfig.releaseOnDeref !== undefined) {
        if (typeof FinalizationRegistry === 'undefined') {
            throw ERROR_FACTORY.create("finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */, {});
        }
    }
    var nameString = '' + hashCode(JSON.stringify(nameObj));
    var existingApp = _serverApps.get(nameString);
    if (existingApp) {
        existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
        return existingApp;
    }
    var container = new component.ComponentContainer(nameString);
    try {
        for (var _b = tslib.__values(_components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component$1 = _c.value;
            container.addComponent(component$1);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
    _serverApps.set(nameString, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name) {
    if (name === void 0) { name = DEFAULT_ENTRY_NAME; }
    var app = _apps.get(name);
    if (!app && name === DEFAULT_ENTRY_NAME && util.getDefaultAppConfig()) {
        return initializeApp();
    }
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, { appName: name });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
function deleteApp(app) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var cleanupProviders, name, firebaseServerApp;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cleanupProviders = false;
                    name = app.name;
                    if (_apps.has(name)) {
                        cleanupProviders = true;
                        _apps.delete(name);
                    }
                    else if (_serverApps.has(name)) {
                        firebaseServerApp = app;
                        if (firebaseServerApp.decRefCount() <= 0) {
                            _serverApps.delete(name);
                            cleanupProviders = true;
                        }
                    }
                    if (!cleanupProviders) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.all(app.container
                            .getProviders()
                            .map(function (provider) { return provider.delete(); }))];
                case 1:
                    _a.sent();
                    app.isDeleted = true;
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += "-".concat(variant);
    }
    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        var warning = [
            "Unable to register library \"".concat(library, "\" with version \"").concat(version, "\":")
        ];
        if (libraryMismatch) {
            warning.push("library name \"".concat(library, "\" contains illegal characters (whitespace or \"/\")"));
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push("version name \"".concat(version, "\" contains illegal characters (whitespace or \"/\")"));
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new component.Component("".concat(library, "-version"), function () { return ({ library: library, version: version }); }, "VERSION" /* ComponentType.VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */);
    }
    logger$1.setUserLogHandler(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
    logger$1.setLogLevel(logLevel);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DB_NAME = 'firebase-heartbeat-database';
var DB_VERSION = 1;
var STORE_NAME = 'firebase-heartbeat-store';
var dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = idb.openDB(DB_NAME, DB_VERSION, {
            upgrade: function (db, oldVersion) {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        try {
                            db.createObjectStore(STORE_NAME);
                        }
                        catch (e) {
                            // Safari/iOS browsers throw occasional exceptions on
                            // db.createObjectStore() that may be a bug. Avoid blocking
                            // the rest of the app functionality.
                            console.warn(e);
                        }
                }
            }
        }).catch(function (e) {
            throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */, {
                originalErrorMessage: e.message
            });
        });
    }
    return dbPromise;
}
function readHeartbeatsFromIndexedDB(app) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var db, tx, result, e_1, idbGetError;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(STORE_NAME);
                    return [4 /*yield*/, tx.objectStore(STORE_NAME).get(computeKey(app))];
                case 2:
                    result = _a.sent();
                    // We already have the value but tx.done can throw,
                    // so we need to await it here to catch errors
                    return [4 /*yield*/, tx.done];
                case 3:
                    // We already have the value but tx.done can throw,
                    // so we need to await it here to catch errors
                    _a.sent();
                    return [2 /*return*/, result];
                case 4:
                    e_1 = _a.sent();
                    if (e_1 instanceof util.FirebaseError) {
                        logger.warn(e_1.message);
                    }
                    else {
                        idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */, {
                            originalErrorMessage: e_1 === null || e_1 === void 0 ? void 0 : e_1.message
                        });
                        logger.warn(idbGetError.message);
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var db, tx, objectStore, e_2, idbGetError;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(STORE_NAME, 'readwrite');
                    objectStore = tx.objectStore(STORE_NAME);
                    return [4 /*yield*/, objectStore.put(heartbeatObject, computeKey(app))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.done];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_2 = _a.sent();
                    if (e_2 instanceof util.FirebaseError) {
                        logger.warn(e_2.message);
                    }
                    else {
                        idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */, {
                            originalErrorMessage: e_2 === null || e_2 === void 0 ? void 0 : e_2.message
                        });
                        logger.warn(idbGetError.message);
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function computeKey(app) {
    return "".concat(app.name, "!").concat(app.options.appId);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MAX_HEADER_BYTES = 1024;
// 30 days
var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
var HeartbeatServiceImpl = /** @class */ (function () {
    function HeartbeatServiceImpl(container) {
        var _this = this;
        this.container = container;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */
        this._heartbeatsCache = null;
        var app = this.container.getProvider('app').getImmediate();
        this._storage = new HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then(function (result) {
            _this._heartbeatsCache = result;
            return result;
        });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    HeartbeatServiceImpl.prototype.triggerHeartbeat = function () {
        var _a, _b;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var platformLogger, agent, date, _c;
            return tslib.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        platformLogger = this.container
                            .getProvider('platform-logger')
                            .getImmediate();
                        agent = platformLogger.getPlatformInfoString();
                        date = getUTCDateString();
                        if (!(((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null)) return [3 /*break*/, 2];
                        _c = this;
                        return [4 /*yield*/, this._heartbeatsCachePromise];
                    case 1:
                        _c._heartbeatsCache = _d.sent();
                        // If we failed to construct a heartbeats cache, then return immediately.
                        if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
                            return [2 /*return*/];
                        }
                        _d.label = 2;
                    case 2:
                        // Do not store a heartbeat if one is already stored for this day
                        // or if a header has already been sent today.
                        if (this._heartbeatsCache.lastSentHeartbeatDate === date ||
                            this._heartbeatsCache.heartbeats.some(function (singleDateHeartbeat) { return singleDateHeartbeat.date === date; })) {
                            return [2 /*return*/];
                        }
                        else {
                            // There is no entry for this date. Create one.
                            this._heartbeatsCache.heartbeats.push({ date: date, agent: agent });
                        }
                        // Remove entries older than 30 days.
                        this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(function (singleDateHeartbeat) {
                            var hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
                            var now = Date.now();
                            return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
                        });
                        return [2 /*return*/, this._storage.overwrite(this._heartbeatsCache)];
                }
            });
        });
    };
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    HeartbeatServiceImpl.prototype.getHeartbeatsHeader = function () {
        var _a;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var date, _b, heartbeatsToSend, unsentEntries, headerString;
            return tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this._heartbeatsCache === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._heartbeatsCachePromise];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        // If it's still null or the array is empty, there is no data to send.
                        if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null ||
                            this._heartbeatsCache.heartbeats.length === 0) {
                            return [2 /*return*/, ''];
                        }
                        date = getUTCDateString();
                        _b = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats), heartbeatsToSend = _b.heartbeatsToSend, unsentEntries = _b.unsentEntries;
                        headerString = util.base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
                        // Store last sent date to prevent another being logged/sent for the same day.
                        this._heartbeatsCache.lastSentHeartbeatDate = date;
                        if (!(unsentEntries.length > 0)) return [3 /*break*/, 4];
                        // Store any unsent entries if they exist.
                        this._heartbeatsCache.heartbeats = unsentEntries;
                        // This seems more likely than emptying the array (below) to lead to some odd state
                        // since the cache isn't empty and this will be called again on the next request,
                        // and is probably safest if we await it.
                        return [4 /*yield*/, this._storage.overwrite(this._heartbeatsCache)];
                    case 3:
                        // This seems more likely than emptying the array (below) to lead to some odd state
                        // since the cache isn't empty and this will be called again on the next request,
                        // and is probably safest if we await it.
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this._heartbeatsCache.heartbeats = [];
                        // Do not wait for this, to reduce latency.
                        void this._storage.overwrite(this._heartbeatsCache);
                        _c.label = 5;
                    case 5: return [2 /*return*/, headerString];
                }
            });
        });
    };
    return HeartbeatServiceImpl;
}());
function getUTCDateString() {
    var today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize) {
    var e_1, _a;
    if (maxSize === void 0) { maxSize = MAX_HEADER_BYTES; }
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    var heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    var unsentEntries = heartbeatsCache.slice();
    var _loop_1 = function (singleDateHeartbeat) {
        // Look for an existing entry with the same user agent.
        var heartbeatEntry = heartbeatsToSend.find(function (hb) { return hb.agent === singleDateHeartbeat.agent; });
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [singleDateHeartbeat.date]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                return "break";
            }
        }
        else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                return "break";
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    };
    try {
        for (var heartbeatsCache_1 = tslib.__values(heartbeatsCache), heartbeatsCache_1_1 = heartbeatsCache_1.next(); !heartbeatsCache_1_1.done; heartbeatsCache_1_1 = heartbeatsCache_1.next()) {
            var singleDateHeartbeat = heartbeatsCache_1_1.value;
            var state_1 = _loop_1(singleDateHeartbeat);
            if (state_1 === "break")
                break;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (heartbeatsCache_1_1 && !heartbeatsCache_1_1.done && (_a = heartbeatsCache_1.return)) _a.call(heartbeatsCache_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        heartbeatsToSend: heartbeatsToSend,
        unsentEntries: unsentEntries
    };
}
var HeartbeatStorageImpl = /** @class */ (function () {
    function HeartbeatStorageImpl(app) {
        this.app = app;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    HeartbeatStorageImpl.prototype.runIndexedDBEnvironmentCheck = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                if (!util.isIndexedDBAvailable()) {
                    return [2 /*return*/, false];
                }
                else {
                    return [2 /*return*/, util.validateIndexedDBOpenable()
                            .then(function () { return true; })
                            .catch(function () { return false; })];
                }
            });
        });
    };
    /**
     * Read all heartbeats.
     */
    HeartbeatStorageImpl.prototype.read = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var canUseIndexedDB, idbHeartbeatObject;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._canUseIndexedDBPromise];
                    case 1:
                        canUseIndexedDB = _a.sent();
                        if (!!canUseIndexedDB) return [3 /*break*/, 2];
                        return [2 /*return*/, { heartbeats: [] }];
                    case 2: return [4 /*yield*/, readHeartbeatsFromIndexedDB(this.app)];
                    case 3:
                        idbHeartbeatObject = _a.sent();
                        if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
                            return [2 /*return*/, idbHeartbeatObject];
                        }
                        else {
                            return [2 /*return*/, { heartbeats: [] }];
                        }
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // overwrite the storage with the provided heartbeats
    HeartbeatStorageImpl.prototype.overwrite = function (heartbeatsObject) {
        var _a;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var canUseIndexedDB, existingHeartbeatsObject;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._canUseIndexedDBPromise];
                    case 1:
                        canUseIndexedDB = _b.sent();
                        if (!!canUseIndexedDB) return [3 /*break*/, 2];
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.read()];
                    case 3:
                        existingHeartbeatsObject = _b.sent();
                        return [2 /*return*/, writeHeartbeatsToIndexedDB(this.app, {
                                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                                heartbeats: heartbeatsObject.heartbeats
                            })];
                }
            });
        });
    };
    // add heartbeats
    HeartbeatStorageImpl.prototype.add = function (heartbeatsObject) {
        var _a;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var canUseIndexedDB, existingHeartbeatsObject;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._canUseIndexedDBPromise];
                    case 1:
                        canUseIndexedDB = _b.sent();
                        if (!!canUseIndexedDB) return [3 /*break*/, 2];
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.read()];
                    case 3:
                        existingHeartbeatsObject = _b.sent();
                        return [2 /*return*/, writeHeartbeatsToIndexedDB(this.app, {
                                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                                heartbeats: tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(existingHeartbeatsObject.heartbeats), false), tslib.__read(heartbeatsObject.heartbeats), false)
                            })];
                }
            });
        });
    };
    return HeartbeatStorageImpl;
}());
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */
function countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return util.base64urlEncodeWithoutPadding(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new component.Component('platform-logger', function (container) { return new PlatformLoggerServiceImpl(container); }, "PRIVATE" /* ComponentType.PRIVATE */));
    _registerComponent(new component.Component('heartbeat', function (container) { return new HeartbeatServiceImpl(container); }, "PRIVATE" /* ComponentType.PRIVATE */));
    // Register `app` package.
    registerVersion(name$o, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$o, version$1, 'cjs5');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('node');

Object.defineProperty(exports, "FirebaseError", ({
  enumerable: true,
  get: function () { return util.FirebaseError; }
}));
exports.SDK_VERSION = SDK_VERSION;
exports._DEFAULT_ENTRY_NAME = DEFAULT_ENTRY_NAME;
exports._addComponent = _addComponent;
exports._addOrOverwriteComponent = _addOrOverwriteComponent;
exports._apps = _apps;
exports._clearComponents = _clearComponents;
exports._components = _components;
exports._getProvider = _getProvider;
exports._isFirebaseApp = _isFirebaseApp;
exports._isFirebaseServerApp = _isFirebaseServerApp;
exports._registerComponent = _registerComponent;
exports._removeServiceInstance = _removeServiceInstance;
exports._serverApps = _serverApps;
exports.deleteApp = deleteApp;
exports.getApp = getApp;
exports.getApps = getApps;
exports.initializeApp = initializeApp;
exports.initializeServerApp = initializeServerApp;
exports.onLog = onLog;
exports.registerVersion = registerVersion;
exports.setLogLevel = setLogLevel;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "../node_modules/@firebase/component/dist/index.cjs.js":
/*!*************************************************************!*\
  !*** ../node_modules/@firebase/component/dist/index.cjs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var tslib = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var util = __webpack_require__(/*! @firebase/util */ "../node_modules/@firebase/util/dist/index.cjs.js");

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */;
        this.onInstanceCreated = null;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    Component.prototype.setInstanceCreatedCallback = function (callback) {
        this.onInstanceCreated = callback;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error("Service ".concat(this.name, " is not available"));
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component ".concat(component.name, " for Provider ").concat(this.name, "."));
        }
        if (this.component) {
            throw Error("Component for ".concat(this.name, " has already been provided"));
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var services;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(services
                                .filter(function (service) { return 'INTERNAL' in service; }) // legacy services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); })), false), tslib.__read(services
                                .filter(function (service) { return '_delete' in service; }) // modularized services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service._delete(); })), false))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.isInitialized = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        return this.instances.has(identifier);
    };
    Provider.prototype.getOptions = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        return this.instancesOptions.get(identifier) || {};
    };
    Provider.prototype.initialize = function (opts) {
        var e_2, _a;
        if (opts === void 0) { opts = {}; }
        var _b = opts.options, options = _b === void 0 ? {} : _b;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error("".concat(this.name, "(").concat(normalizedIdentifier, ") has already been initialized"));
        }
        if (!this.isComponentSet()) {
            throw Error("Component ".concat(this.name, " has not been registered yet"));
        }
        var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options: options
        });
        try {
            // resolve any pending promise waiting for the service instance
            for (var _c = tslib.__values(this.instancesDeferred.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = tslib.__read(_d.value, 2), instanceIdentifier = _e[0], instanceDeferred = _e[1];
                var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                if (normalizedIdentifier === normalizedDeferredIdentifier) {
                    instanceDeferred.resolve(instance);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return instance;
    };
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    Provider.prototype.onInit = function (callback, identifier) {
        var _a;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        var existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return function () {
            existingCallbacks.delete(callback);
        };
    };
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    Provider.prototype.invokeOnInitCallbacks = function (instance, identifier) {
        var e_3, _a;
        var callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        try {
            for (var callbacks_1 = tslib.__values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                var callback = callbacks_1_1.value;
                try {
                    callback(instance, identifier);
                }
                catch (_b) {
                    // ignore errors in the onInit callback
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    Provider.prototype.getOrInitializeService = function (_a) {
        var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? {} : _b;
        var instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options: options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_c) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    Provider.prototype.shouldAutoInitialize = function () {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */);
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component ".concat(component.name, " has already been registered with ").concat(this.name));
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());

exports.Component = Component;
exports.ComponentContainer = ComponentContainer;
exports.Provider = Provider;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "../node_modules/@firebase/installations/dist/index.cjs.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@firebase/installations/dist/index.cjs.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var app = __webpack_require__(/*! @firebase/app */ "../node_modules/@firebase/app/dist/index.cjs.js");
var component = __webpack_require__(/*! @firebase/component */ "../node_modules/@firebase/component/dist/index.cjs.js");
var tslib = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var util = __webpack_require__(/*! @firebase/util */ "../node_modules/@firebase/util/dist/index.cjs.js");
var idb = __webpack_require__(/*! idb */ "../node_modules/idb/build/index.js");

var name = "@firebase/installations";
var version = "0.6.6";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PENDING_TIMEOUT_MS = 10000;
var PACKAGE_VERSION = "w:".concat(version);
var INTERNAL_AUTH_VERSION = 'FIS_v2';
var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
var SERVICE = 'installations';
var SERVICE_NAME = 'Installations';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERROR_DESCRIPTION_MAP = (_a = {},
    _a["missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */] = 'Missing App configuration value: "{$valueName}"',
    _a["not-registered" /* ErrorCode.NOT_REGISTERED */] = 'Firebase Installation is not registered.',
    _a["installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */] = 'Firebase Installation not found.',
    _a["request-failed" /* ErrorCode.REQUEST_FAILED */] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    _a["app-offline" /* ErrorCode.APP_OFFLINE */] = 'Could not process request. Application offline.',
    _a["delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */] = "Can't delete installation while there is a pending registration request.",
    _a);
var ERROR_FACTORY = new util.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */
function isServerError(error) {
    return (error instanceof util.FirebaseError &&
        error.code.includes("request-failed" /* ErrorCode.REQUEST_FAILED */));
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint(_a) {
    var projectId = _a.projectId;
    return "".concat(INSTALLATIONS_API_URL, "/projects/").concat(projectId, "/installations");
}
function extractAuthTokenInfoFromResponse(response) {
    return {
        token: response.token,
        requestStatus: 2 /* RequestStatus.COMPLETED */,
        expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
        creationTime: Date.now()
    };
}
function getErrorFromResponse(requestName, response) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var responseJson, errorData;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, response.json()];
                case 1:
                    responseJson = _a.sent();
                    errorData = responseJson.error;
                    return [2 /*return*/, ERROR_FACTORY.create("request-failed" /* ErrorCode.REQUEST_FAILED */, {
                            requestName: requestName,
                            serverCode: errorData.code,
                            serverMessage: errorData.message,
                            serverStatus: errorData.status
                        })];
            }
        });
    });
}
function getHeaders(_a) {
    var apiKey = _a.apiKey;
    return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
function getHeadersWithAuth(appConfig, _a) {
    var refreshToken = _a.refreshToken;
    var headers = getHeaders(appConfig);
    headers.append('Authorization', getAuthorizationHeader(refreshToken));
    return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */
function retryIfServerError(fn) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var result;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fn()];
                case 1:
                    result = _a.sent();
                    if (result.status >= 500 && result.status < 600) {
                        // Internal Server Error. Retry request.
                        return [2 /*return*/, fn()];
                    }
                    return [2 /*return*/, result];
            }
        });
    });
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    // This works because the server will never respond with fractions of a second.
    return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
    return "".concat(INTERNAL_AUTH_VERSION, " ").concat(refreshToken);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createInstallationRequest(_a, _b) {
    var appConfig = _a.appConfig, heartbeatServiceProvider = _a.heartbeatServiceProvider;
    var fid = _b.fid;
    return tslib.__awaiter(this, void 0, void 0, function () {
        var endpoint, headers, heartbeatService, heartbeatsHeader, body, request, response, responseValue, registeredInstallationEntry;
        return tslib.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    endpoint = getInstallationsEndpoint(appConfig);
                    headers = getHeaders(appConfig);
                    heartbeatService = heartbeatServiceProvider.getImmediate({
                        optional: true
                    });
                    if (!heartbeatService) return [3 /*break*/, 2];
                    return [4 /*yield*/, heartbeatService.getHeartbeatsHeader()];
                case 1:
                    heartbeatsHeader = _c.sent();
                    if (heartbeatsHeader) {
                        headers.append('x-firebase-client', heartbeatsHeader);
                    }
                    _c.label = 2;
                case 2:
                    body = {
                        fid: fid,
                        authVersion: INTERNAL_AUTH_VERSION,
                        appId: appConfig.appId,
                        sdkVersion: PACKAGE_VERSION
                    };
                    request = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 3:
                    response = _c.sent();
                    if (!response.ok) return [3 /*break*/, 5];
                    return [4 /*yield*/, response.json()];
                case 4:
                    responseValue = _c.sent();
                    registeredInstallationEntry = {
                        fid: responseValue.fid || fid,
                        registrationStatus: 2 /* RequestStatus.COMPLETED */,
                        refreshToken: responseValue.refreshToken,
                        authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
                    };
                    return [2 /*return*/, registeredInstallationEntry];
                case 5: return [4 /*yield*/, getErrorFromResponse('Create Installation', response)];
                case 6: throw _c.sent();
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
    var b64 = btoa(String.fromCharCode.apply(String, tslib.__spreadArray([], tslib.__read(array), false)));
    return b64.replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */
function generateFid() {
    try {
        // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
        // bytes. our implementation generates a 17 byte array instead.
        var fidByteArray = new Uint8Array(17);
        var crypto_1 = self.crypto || self.msCrypto;
        crypto_1.getRandomValues(fidByteArray);
        // Replace the first 4 random bits with the constant FID header of 0b0111.
        fidByteArray[0] = 112 + (fidByteArray[0] % 16);
        var fid = encode(fidByteArray);
        return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    }
    catch (_a) {
        // FID generation errored
        return INVALID_FID;
    }
}
/** Converts a FID Uint8Array to a base64 string representation. */
function encode(fidByteArray) {
    var b64String = bufferToBase64UrlSafe(fidByteArray);
    // Remove the 23rd character that was added because of the extra 4 bits at the
    // end of our 17 byte array, and the '=' padding.
    return b64String.substr(0, 22);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a string key that can be used to identify the app. */
function getKey(appConfig) {
    return "".concat(appConfig.appName, "!").concat(appConfig.appId);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */
function fidChanged(appConfig, fid) {
    var key = getKey(appConfig);
    callFidChangeCallbacks(key, fid);
    broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
    // Open the broadcast channel if it's not already open,
    // to be able to listen to change events from other tabs.
    getBroadcastChannel();
    var key = getKey(appConfig);
    var callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        callbackSet = new Set();
        fidChangeCallbacks.set(key, callbackSet);
    }
    callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
    var key = getKey(appConfig);
    var callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        return;
    }
    callbackSet.delete(callback);
    if (callbackSet.size === 0) {
        fidChangeCallbacks.delete(key);
    }
    // Close broadcast channel if there are no more callbacks.
    closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
    var e_1, _a;
    var callbacks = fidChangeCallbacks.get(key);
    if (!callbacks) {
        return;
    }
    try {
        for (var callbacks_1 = tslib.__values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
            var callback = callbacks_1_1.value;
            callback(fid);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function broadcastFidChange(key, fid) {
    var channel = getBroadcastChannel();
    if (channel) {
        channel.postMessage({ key: key, fid: fid });
    }
    closeBroadcastChannel();
}
var broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */
function getBroadcastChannel() {
    if (!broadcastChannel && 'BroadcastChannel' in self) {
        broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
        broadcastChannel.onmessage = function (e) {
            callFidChangeCallbacks(e.data.key, e.data.fid);
        };
    }
    return broadcastChannel;
}
function closeBroadcastChannel() {
    if (fidChangeCallbacks.size === 0 && broadcastChannel) {
        broadcastChannel.close();
        broadcastChannel = null;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DATABASE_NAME = 'firebase-installations-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-installations-store';
var dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = idb.openDB(DATABASE_NAME, DATABASE_VERSION, {
            upgrade: function (db, oldVersion) {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        db.createObjectStore(OBJECT_STORE_NAME);
                }
            }
        });
    }
    return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */
function set(appConfig, value) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var key, db, tx, objectStore, oldValue;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    objectStore = tx.objectStore(OBJECT_STORE_NAME);
                    return [4 /*yield*/, objectStore.get(key)];
                case 2:
                    oldValue = (_a.sent());
                    return [4 /*yield*/, objectStore.put(value, key)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, tx.done];
                case 4:
                    _a.sent();
                    if (!oldValue || oldValue.fid !== value.fid) {
                        fidChanged(appConfig, value.fid);
                    }
                    return [2 /*return*/, value];
            }
        });
    });
}
/** Removes record(s) from the objectStore that match the given key. */
function remove(appConfig) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var key, db, tx;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME).delete(key)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.done];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */
function update(appConfig, updateFn) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var key, db, tx, store, oldValue, newValue;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    store = tx.objectStore(OBJECT_STORE_NAME);
                    return [4 /*yield*/, store.get(key)];
                case 2:
                    oldValue = (_a.sent());
                    newValue = updateFn(oldValue);
                    if (!(newValue === undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, store.delete(key)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, store.put(newValue, key)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, tx.done];
                case 7:
                    _a.sent();
                    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
                        fidChanged(appConfig, newValue.fid);
                    }
                    return [2 /*return*/, newValue];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */
function getInstallationEntry(installations) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var registrationPromise, installationEntry;
        var _a;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, update(installations.appConfig, function (oldEntry) {
                        var installationEntry = updateOrCreateInstallationEntry(oldEntry);
                        var entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry);
                        registrationPromise = entryWithPromise.registrationPromise;
                        return entryWithPromise.installationEntry;
                    })];
                case 1:
                    installationEntry = _b.sent();
                    if (!(installationEntry.fid === INVALID_FID)) return [3 /*break*/, 3];
                    _a = {};
                    return [4 /*yield*/, registrationPromise];
                case 2: 
                // FID generation failed. Waiting for the FID from the server.
                return [2 /*return*/, (_a.installationEntry = _b.sent(), _a)];
                case 3: return [2 /*return*/, {
                        installationEntry: installationEntry,
                        registrationPromise: registrationPromise
                    }];
            }
        });
    });
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */
function updateOrCreateInstallationEntry(oldEntry) {
    var entry = oldEntry || {
        fid: generateFid(),
        registrationStatus: 0 /* RequestStatus.NOT_STARTED */
    };
    return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */
function triggerRegistrationIfNecessary(installations, installationEntry) {
    if (installationEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
        if (!navigator.onLine) {
            // Registration required but app is offline.
            var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */));
            return {
                installationEntry: installationEntry,
                registrationPromise: registrationPromiseWithError
            };
        }
        // Try registering. Change status to IN_PROGRESS.
        var inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* RequestStatus.IN_PROGRESS */,
            registrationTime: Date.now()
        };
        var registrationPromise = registerInstallation(installations, inProgressEntry);
        return { installationEntry: inProgressEntry, registrationPromise: registrationPromise };
    }
    else if (installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
        return {
            installationEntry: installationEntry,
            registrationPromise: waitUntilFidRegistration(installations)
        };
    }
    else {
        return { installationEntry: installationEntry };
    }
}
/** This will be executed only once for each new Firebase Installation. */
function registerInstallation(installations, installationEntry) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var registeredInstallationEntry, e_1;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 7]);
                    return [4 /*yield*/, createInstallationRequest(installations, installationEntry)];
                case 1:
                    registeredInstallationEntry = _a.sent();
                    return [2 /*return*/, set(installations.appConfig, registeredInstallationEntry)];
                case 2:
                    e_1 = _a.sent();
                    if (!(isServerError(e_1) && e_1.customData.serverCode === 409)) return [3 /*break*/, 4];
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(installations.appConfig)];
                case 3:
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: 
                // Registration failed. Set FID as not registered.
                return [4 /*yield*/, set(installations.appConfig, {
                        fid: installationEntry.fid,
                        registrationStatus: 0 /* RequestStatus.NOT_STARTED */
                    })];
                case 5:
                    // Registration failed. Set FID as not registered.
                    _a.sent();
                    _a.label = 6;
                case 6: throw e_1;
                case 7: return [2 /*return*/];
            }
        });
    });
}
/** Call if FID registration is pending in another request. */
function waitUntilFidRegistration(installations) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var entry, _a, installationEntry, registrationPromise;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, updateInstallationRequest(installations.appConfig)];
                case 1:
                    entry = _b.sent();
                    _b.label = 2;
                case 2:
                    if (!(entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */)) return [3 /*break*/, 5];
                    // createInstallation request still in progress.
                    return [4 /*yield*/, sleep(100)];
                case 3:
                    // createInstallation request still in progress.
                    _b.sent();
                    return [4 /*yield*/, updateInstallationRequest(installations.appConfig)];
                case 4:
                    entry = _b.sent();
                    return [3 /*break*/, 2];
                case 5:
                    if (!(entry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */)) return [3 /*break*/, 7];
                    return [4 /*yield*/, getInstallationEntry(installations)];
                case 6:
                    _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                    if (registrationPromise) {
                        return [2 /*return*/, registrationPromise];
                    }
                    else {
                        // if there is no registrationPromise, entry is registered.
                        return [2 /*return*/, installationEntry];
                    }
                case 7: return [2 /*return*/, entry];
            }
        });
    });
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */
function updateInstallationRequest(appConfig) {
    return update(appConfig, function (oldEntry) {
        if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */);
        }
        return clearTimedOutRequest(oldEntry);
    });
}
function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
        return {
            fid: entry.fid,
            registrationStatus: 0 /* RequestStatus.NOT_STARTED */
        };
    }
    return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
    return (installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */ &&
        installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function generateAuthTokenRequest(_a, installationEntry) {
    var appConfig = _a.appConfig, heartbeatServiceProvider = _a.heartbeatServiceProvider;
    return tslib.__awaiter(this, void 0, void 0, function () {
        var endpoint, headers, heartbeatService, heartbeatsHeader, body, request, response, responseValue, completedAuthToken;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    heartbeatService = heartbeatServiceProvider.getImmediate({
                        optional: true
                    });
                    if (!heartbeatService) return [3 /*break*/, 2];
                    return [4 /*yield*/, heartbeatService.getHeartbeatsHeader()];
                case 1:
                    heartbeatsHeader = _b.sent();
                    if (heartbeatsHeader) {
                        headers.append('x-firebase-client', heartbeatsHeader);
                    }
                    _b.label = 2;
                case 2:
                    body = {
                        installation: {
                            sdkVersion: PACKAGE_VERSION,
                            appId: appConfig.appId
                        }
                    };
                    request = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 3:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 5];
                    return [4 /*yield*/, response.json()];
                case 4:
                    responseValue = _b.sent();
                    completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
                    return [2 /*return*/, completedAuthToken];
                case 5: return [4 /*yield*/, getErrorFromResponse('Generate Auth Token', response)];
                case 6: throw _b.sent();
            }
        });
    });
}
function getGenerateAuthTokenEndpoint(appConfig, _a) {
    var fid = _a.fid;
    return "".concat(getInstallationsEndpoint(appConfig), "/").concat(fid, "/authTokens:generate");
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */
function refreshAuthToken(installations, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return tslib.__awaiter(this, void 0, void 0, function () {
        var tokenPromise, entry, authToken, _a;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, update(installations.appConfig, function (oldEntry) {
                        if (!isEntryRegistered(oldEntry)) {
                            throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
                        }
                        var oldAuthToken = oldEntry.authToken;
                        if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                            // There is a valid token in the DB.
                            return oldEntry;
                        }
                        else if (oldAuthToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */) {
                            // There already is a token request in progress.
                            tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
                            return oldEntry;
                        }
                        else {
                            // No token or token expired.
                            if (!navigator.onLine) {
                                throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
                            }
                            var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                            tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
                            return inProgressEntry;
                        }
                    })];
                case 1:
                    entry = _b.sent();
                    if (!tokenPromise) return [3 /*break*/, 3];
                    return [4 /*yield*/, tokenPromise];
                case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _a = entry.authToken;
                    _b.label = 4;
                case 4:
                    authToken = _a;
                    return [2 /*return*/, authToken];
            }
        });
    });
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */
function waitUntilAuthTokenRequest(installations, forceRefresh) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var entry, authToken;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateAuthTokenRequest(installations.appConfig)];
                case 1:
                    entry = _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(entry.authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */)) return [3 /*break*/, 5];
                    // generateAuthToken still in progress.
                    return [4 /*yield*/, sleep(100)];
                case 3:
                    // generateAuthToken still in progress.
                    _a.sent();
                    return [4 /*yield*/, updateAuthTokenRequest(installations.appConfig)];
                case 4:
                    entry = _a.sent();
                    return [3 /*break*/, 2];
                case 5:
                    authToken = entry.authToken;
                    if (authToken.requestStatus === 0 /* RequestStatus.NOT_STARTED */) {
                        // The request timed out or failed in a different call. Try again.
                        return [2 /*return*/, refreshAuthToken(installations, forceRefresh)];
                    }
                    else {
                        return [2 /*return*/, authToken];
                    }
            }
        });
    });
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */
function updateAuthTokenRequest(appConfig) {
    return update(appConfig, function (oldEntry) {
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
        }
        var oldAuthToken = oldEntry.authToken;
        if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return tslib.__assign(tslib.__assign({}, oldEntry), { authToken: { requestStatus: 0 /* RequestStatus.NOT_STARTED */ } });
        }
        return oldEntry;
    });
}
function fetchAuthTokenFromServer(installations, installationEntry) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 8]);
                    return [4 /*yield*/, generateAuthTokenRequest(installations, installationEntry)];
                case 1:
                    authToken = _a.sent();
                    updatedInstallationEntry = tslib.__assign(tslib.__assign({}, installationEntry), { authToken: authToken });
                    return [4 /*yield*/, set(installations.appConfig, updatedInstallationEntry)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, authToken];
                case 3:
                    e_1 = _a.sent();
                    if (!(isServerError(e_1) &&
                        (e_1.customData.serverCode === 401 || e_1.customData.serverCode === 404))) return [3 /*break*/, 5];
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(installations.appConfig)];
                case 4:
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5:
                    updatedInstallationEntry = tslib.__assign(tslib.__assign({}, installationEntry), { authToken: { requestStatus: 0 /* RequestStatus.NOT_STARTED */ } });
                    return [4 /*yield*/, set(installations.appConfig, updatedInstallationEntry)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: throw e_1;
                case 8: return [2 /*return*/];
            }
        });
    });
}
function isEntryRegistered(installationEntry) {
    return (installationEntry !== undefined &&
        installationEntry.registrationStatus === 2 /* RequestStatus.COMPLETED */);
}
function isAuthTokenValid(authToken) {
    return (authToken.requestStatus === 2 /* RequestStatus.COMPLETED */ &&
        !isAuthTokenExpired(authToken));
}
function isAuthTokenExpired(authToken) {
    var now = Date.now();
    return (now < authToken.creationTime ||
        authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER);
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */
function makeAuthTokenRequestInProgressEntry(oldEntry) {
    var inProgressAuthToken = {
        requestStatus: 1 /* RequestStatus.IN_PROGRESS */,
        requestTime: Date.now()
    };
    return tslib.__assign(tslib.__assign({}, oldEntry), { authToken: inProgressAuthToken });
}
function hasAuthTokenRequestTimedOut(authToken) {
    return (authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */ &&
        authToken.requestTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
function getId(installations) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var installationsImpl, _a, installationEntry, registrationPromise;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    installationsImpl = installations;
                    return [4 /*yield*/, getInstallationEntry(installationsImpl)];
                case 1:
                    _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                    if (registrationPromise) {
                        registrationPromise.catch(console.error);
                    }
                    else {
                        // If the installation is already registered, update the authentication
                        // token if needed.
                        refreshAuthToken(installationsImpl).catch(console.error);
                    }
                    return [2 /*return*/, installationEntry.fid];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */
function getToken(installations, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return tslib.__awaiter(this, void 0, void 0, function () {
        var installationsImpl, authToken;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    installationsImpl = installations;
                    return [4 /*yield*/, completeInstallationRegistration(installationsImpl)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, refreshAuthToken(installationsImpl, forceRefresh)];
                case 2:
                    authToken = _a.sent();
                    return [2 /*return*/, authToken.token];
            }
        });
    });
}
function completeInstallationRegistration(installations) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var registrationPromise;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInstallationEntry(installations)];
                case 1:
                    registrationPromise = (_a.sent()).registrationPromise;
                    if (!registrationPromise) return [3 /*break*/, 3];
                    // A createInstallation request is in progress. Wait until it finishes.
                    return [4 /*yield*/, registrationPromise];
                case 2:
                    // A createInstallation request is in progress. Wait until it finishes.
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallationRequest(appConfig, installationEntry) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var endpoint, headers, request, response;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = getDeleteEndpoint(appConfig, installationEntry);
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    request = {
                        method: 'DELETE',
                        headers: headers
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, getErrorFromResponse('Delete Installation', response)];
                case 2: throw _a.sent();
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getDeleteEndpoint(appConfig, _a) {
    var fid = _a.fid;
    return "".concat(getInstallationsEndpoint(appConfig), "/").concat(fid);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Deletes the Firebase Installation and all associated data.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
function deleteInstallations(installations) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var appConfig, entry;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appConfig = installations.appConfig;
                    return [4 /*yield*/, update(appConfig, function (oldEntry) {
                            if (oldEntry && oldEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
                                // Delete the unregistered entry without sending a deleteInstallation request.
                                return undefined;
                            }
                            return oldEntry;
                        })];
                case 1:
                    entry = _a.sent();
                    if (!entry) return [3 /*break*/, 6];
                    if (!(entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */)) return [3 /*break*/, 2];
                    // Can't delete while trying to register.
                    throw ERROR_FACTORY.create("delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */);
                case 2:
                    if (!(entry.registrationStatus === 2 /* RequestStatus.COMPLETED */)) return [3 /*break*/, 6];
                    if (!!navigator.onLine) return [3 /*break*/, 3];
                    throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
                case 3: return [4 /*yield*/, deleteInstallationRequest(appConfig, entry)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, remove(appConfig)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 * @param installations - The `Installations` instance.
 * @param callback - The callback function that is invoked when FID changes.
 * @returns A function that can be called to unsubscribe.
 *
 * @public
 */
function onIdChange(installations, callback) {
    var appConfig = installations.appConfig;
    addCallback(appConfig, callback);
    return function () {
        removeCallback(appConfig, callback);
    };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an instance of {@link Installations} associated with the given
 * {@link @firebase/app#FirebaseApp} instance.
 * @param app - The {@link @firebase/app#FirebaseApp} instance.
 *
 * @public
 */
function getInstallations(app$1) {
    if (app$1 === void 0) { app$1 = app.getApp(); }
    var installationsImpl = app._getProvider(app$1, 'installations').getImmediate();
    return installationsImpl;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
    var e_1, _a;
    if (!app || !app.options) {
        throw getMissingValueError('App Configuration');
    }
    if (!app.name) {
        throw getMissingValueError('App Name');
    }
    // Required app config keys
    var configKeys = [
        'projectId',
        'apiKey',
        'appId'
    ];
    try {
        for (var configKeys_1 = tslib.__values(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
            var keyName = configKeys_1_1.value;
            if (!app.options[keyName]) {
                throw getMissingValueError(keyName);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        appName: app.name,
        projectId: app.options.projectId,
        apiKey: app.options.apiKey,
        appId: app.options.appId
    };
}
function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */, {
        valueName: valueName
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var INSTALLATIONS_NAME = 'installations';
var INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
var publicFactory = function (container) {
    var app$1 = container.getProvider('app').getImmediate();
    // Throws if app isn't configured properly.
    var appConfig = extractAppConfig(app$1);
    var heartbeatServiceProvider = app._getProvider(app$1, 'heartbeat');
    var installationsImpl = {
        app: app$1,
        appConfig: appConfig,
        heartbeatServiceProvider: heartbeatServiceProvider,
        _delete: function () { return Promise.resolve(); }
    };
    return installationsImpl;
};
var internalFactory = function (container) {
    var app$1 = container.getProvider('app').getImmediate();
    // Internal FIS instance relies on public FIS instance.
    var installations = app._getProvider(app$1, INSTALLATIONS_NAME).getImmediate();
    var installationsInternal = {
        getId: function () { return getId(installations); },
        getToken: function (forceRefresh) { return getToken(installations, forceRefresh); }
    };
    return installationsInternal;
};
function registerInstallations() {
    app._registerComponent(new component.Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC" /* ComponentType.PUBLIC */));
    app._registerComponent(new component.Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE" /* ComponentType.PRIVATE */));
}

/**
 * The Firebase Installations Web SDK.
 * This SDK does not work in a Node.js environment.
 *
 * @packageDocumentation
 */
registerInstallations();
app.registerVersion(name, version);
// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
app.registerVersion(name, version, 'cjs5');

exports.deleteInstallations = deleteInstallations;
exports.getId = getId;
exports.getInstallations = getInstallations;
exports.getToken = getToken;
exports.onIdChange = onIdChange;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "../node_modules/@firebase/logger/dist/index.cjs.js":
/*!**********************************************************!*\
  !*** ../node_modules/@firebase/logger/dist/index.cjs.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var tslib = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
exports.LogLevel = void 0;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(exports.LogLevel || (exports.LogLevel = {}));
var levelStringToEnum = {
    'debug': exports.LogLevel.DEBUG,
    'verbose': exports.LogLevel.VERBOSE,
    'info': exports.LogLevel.INFO,
    'warn': exports.LogLevel.WARN,
    'error': exports.LogLevel.ERROR,
    'silent': exports.LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = exports.LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[exports.LogLevel.DEBUG] = 'log',
    _a[exports.LogLevel.VERBOSE] = 'log',
    _a[exports.LogLevel.INFO] = 'info',
    _a[exports.LogLevel.WARN] = 'warn',
    _a[exports.LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, tslib.__spreadArray(["[".concat(now, "]  ").concat(instance.name, ":")], args, false));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: ".concat(logType, ")"));
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in exports.LogLevel)) {
                throw new TypeError("Invalid value \"".concat(val, "\" assigned to `logLevel`"));
            }
            this._logLevel = val;
        },
        enumerable: false,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.DEBUG], args, false));
        this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.DEBUG], args, false));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.VERBOSE], args, false));
        this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.VERBOSE], args, false));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.INFO], args, false));
        this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.INFO], args, false));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.WARN], args, false));
        this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.WARN], args, false));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.ERROR], args, false));
        this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.ERROR], args, false));
    };
    return Logger;
}());
function setLogLevel(level) {
    instances.forEach(function (inst) {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: exports.LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}

exports.Logger = Logger;
exports.setLogLevel = setLogLevel;
exports.setUserLogHandler = setUserLogHandler;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "../node_modules/@firebase/messaging/dist/index.cjs.js":
/*!*************************************************************!*\
  !*** ../node_modules/@firebase/messaging/dist/index.cjs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

__webpack_require__(/*! @firebase/installations */ "../node_modules/@firebase/installations/dist/index.cjs.js");
var component = __webpack_require__(/*! @firebase/component */ "../node_modules/@firebase/component/dist/index.cjs.js");
var tslib = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.mjs");
var idb = __webpack_require__(/*! idb */ "../node_modules/idb/build/index.js");
var util = __webpack_require__(/*! @firebase/util */ "../node_modules/@firebase/util/dist/index.cjs.js");
var app = __webpack_require__(/*! @firebase/app */ "../node_modules/@firebase/app/dist/index.cjs.js");

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
var DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';
var DEFAULT_VAPID_KEY = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
var ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
var CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
var CONSOLE_CAMPAIGN_NAME = 'google.c.a.c_l';
var CONSOLE_CAMPAIGN_TIME = 'google.c.a.ts';
/** Set to '1' if Analytics is enabled for the campaign */
var CONSOLE_CAMPAIGN_ANALYTICS_ENABLED = 'google.c.a.e';
var MessageType$1;
(function (MessageType) {
    MessageType[MessageType["DATA_MESSAGE"] = 1] = "DATA_MESSAGE";
    MessageType[MessageType["DISPLAY_NOTIFICATION"] = 3] = "DISPLAY_NOTIFICATION";
})(MessageType$1 || (MessageType$1 = {}));

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
var MessageType;
(function (MessageType) {
    MessageType["PUSH_RECEIVED"] = "push-received";
    MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
})(MessageType || (MessageType = {}));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function arrayToBase64(array) {
    var uint8Array = new Uint8Array(array);
    var base64String = btoa(String.fromCharCode.apply(String, tslib.__spreadArray([], tslib.__read(uint8Array), false)));
    return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function base64ToArray(base64String) {
    var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    var rawData = atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OLD_DB_NAME = 'fcm_token_details_db';
/**
 * The last DB version of 'fcm_token_details_db' was 4. This is one higher, so that the upgrade
 * callback is called for all versions of the old DB.
 */
var OLD_DB_VERSION = 5;
var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';
function migrateOldDatabase(senderId) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var databases, dbNames, tokenDetails, db;
        var _this = this;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!('databases' in indexedDB)) return [3 /*break*/, 2];
                    return [4 /*yield*/, indexedDB.databases()];
                case 1:
                    databases = _a.sent();
                    dbNames = databases.map(function (db) { return db.name; });
                    if (!dbNames.includes(OLD_DB_NAME)) {
                        // old DB didn't exist, no need to open.
                        return [2 /*return*/, null];
                    }
                    _a.label = 2;
                case 2:
                    tokenDetails = null;
                    return [4 /*yield*/, idb.openDB(OLD_DB_NAME, OLD_DB_VERSION, {
                            upgrade: function (db, oldVersion, newVersion, upgradeTransaction) { return tslib.__awaiter(_this, void 0, void 0, function () {
                                var objectStore, value, oldDetails, oldDetails, oldDetails;
                                var _a;
                                return tslib.__generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (oldVersion < 2) {
                                                // Database too old, skip migration.
                                                return [2 /*return*/];
                                            }
                                            if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
                                                // Database did not exist. Nothing to do.
                                                return [2 /*return*/];
                                            }
                                            objectStore = upgradeTransaction.objectStore(OLD_OBJECT_STORE_NAME);
                                            return [4 /*yield*/, objectStore.index('fcmSenderId').get(senderId)];
                                        case 1:
                                            value = _b.sent();
                                            return [4 /*yield*/, objectStore.clear()];
                                        case 2:
                                            _b.sent();
                                            if (!value) {
                                                // No entry in the database, nothing to migrate.
                                                return [2 /*return*/];
                                            }
                                            if (oldVersion === 2) {
                                                oldDetails = value;
                                                if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
                                                    return [2 /*return*/];
                                                }
                                                tokenDetails = {
                                                    token: oldDetails.fcmToken,
                                                    createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
                                                    subscriptionOptions: {
                                                        auth: oldDetails.auth,
                                                        p256dh: oldDetails.p256dh,
                                                        endpoint: oldDetails.endpoint,
                                                        swScope: oldDetails.swScope,
                                                        vapidKey: typeof oldDetails.vapidKey === 'string'
                                                            ? oldDetails.vapidKey
                                                            : arrayToBase64(oldDetails.vapidKey)
                                                    }
                                                };
                                            }
                                            else if (oldVersion === 3) {
                                                oldDetails = value;
                                                tokenDetails = {
                                                    token: oldDetails.fcmToken,
                                                    createTime: oldDetails.createTime,
                                                    subscriptionOptions: {
                                                        auth: arrayToBase64(oldDetails.auth),
                                                        p256dh: arrayToBase64(oldDetails.p256dh),
                                                        endpoint: oldDetails.endpoint,
                                                        swScope: oldDetails.swScope,
                                                        vapidKey: arrayToBase64(oldDetails.vapidKey)
                                                    }
                                                };
                                            }
                                            else if (oldVersion === 4) {
                                                oldDetails = value;
                                                tokenDetails = {
                                                    token: oldDetails.fcmToken,
                                                    createTime: oldDetails.createTime,
                                                    subscriptionOptions: {
                                                        auth: arrayToBase64(oldDetails.auth),
                                                        p256dh: arrayToBase64(oldDetails.p256dh),
                                                        endpoint: oldDetails.endpoint,
                                                        swScope: oldDetails.swScope,
                                                        vapidKey: arrayToBase64(oldDetails.vapidKey)
                                                    }
                                                };
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        })];
                case 3:
                    db = _a.sent();
                    db.close();
                    // Delete all old databases.
                    return [4 /*yield*/, idb.deleteDB(OLD_DB_NAME)];
                case 4:
                    // Delete all old databases.
                    _a.sent();
                    return [4 /*yield*/, idb.deleteDB('fcm_vapid_details_db')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, idb.deleteDB('undefined')];
                case 6:
                    _a.sent();
                    return [2 /*return*/, checkTokenDetails(tokenDetails) ? tokenDetails : null];
            }
        });
    });
}
function checkTokenDetails(tokenDetails) {
    if (!tokenDetails || !tokenDetails.subscriptionOptions) {
        return false;
    }
    var subscriptionOptions = tokenDetails.subscriptionOptions;
    return (typeof tokenDetails.createTime === 'number' &&
        tokenDetails.createTime > 0 &&
        typeof tokenDetails.token === 'string' &&
        tokenDetails.token.length > 0 &&
        typeof subscriptionOptions.auth === 'string' &&
        subscriptionOptions.auth.length > 0 &&
        typeof subscriptionOptions.p256dh === 'string' &&
        subscriptionOptions.p256dh.length > 0 &&
        typeof subscriptionOptions.endpoint === 'string' &&
        subscriptionOptions.endpoint.length > 0 &&
        typeof subscriptionOptions.swScope === 'string' &&
        subscriptionOptions.swScope.length > 0 &&
        typeof subscriptionOptions.vapidKey === 'string' &&
        subscriptionOptions.vapidKey.length > 0);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Exported for tests.
var DATABASE_NAME = 'firebase-messaging-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-messaging-store';
var dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = idb.openDB(DATABASE_NAME, DATABASE_VERSION, {
            upgrade: function (upgradeDb, oldVersion) {
                // We don't use 'break' in this switch statement, the fall-through behavior is what we want,
                // because if there are multiple versions between the old version and the current version, we
                // want ALL the migrations that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        upgradeDb.createObjectStore(OBJECT_STORE_NAME);
                }
            }
        });
    }
    return dbPromise;
}
/** Gets record(s) from the objectStore that match the given key. */
function dbGet(firebaseDependencies) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var key, db, tokenDetails, oldTokenDetails;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(firebaseDependencies);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db
                            .transaction(OBJECT_STORE_NAME)
                            .objectStore(OBJECT_STORE_NAME)
                            .get(key)];
                case 2:
                    tokenDetails = (_a.sent());
                    if (!tokenDetails) return [3 /*break*/, 3];
                    return [2 /*return*/, tokenDetails];
                case 3: return [4 /*yield*/, migrateOldDatabase(firebaseDependencies.appConfig.senderId)];
                case 4:
                    oldTokenDetails = _a.sent();
                    if (!oldTokenDetails) return [3 /*break*/, 6];
                    return [4 /*yield*/, dbSet(firebaseDependencies, oldTokenDetails)];
                case 5:
                    _a.sent();
                    return [2 /*return*/, oldTokenDetails];
                case 6: return [2 /*return*/];
            }
        });
    });
}
/** Assigns or overwrites the record for the given key with the given value. */
function dbSet(firebaseDependencies, tokenDetails) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var key, db, tx;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(firebaseDependencies);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.done];
                case 3:
                    _a.sent();
                    return [2 /*return*/, tokenDetails];
            }
        });
    });
}
/** Removes record(s) from the objectStore that match the given key. */
function dbRemove(firebaseDependencies) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var key, db, tx;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(firebaseDependencies);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME).delete(key)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.done];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getKey(_a) {
    var appConfig = _a.appConfig;
    return appConfig.appId;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERROR_MAP = (_a = {},
    _a["missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */] = 'Missing App configuration value: "{$valueName}"',
    _a["only-available-in-window" /* ErrorCode.AVAILABLE_IN_WINDOW */] = 'This method is available in a Window context.',
    _a["only-available-in-sw" /* ErrorCode.AVAILABLE_IN_SW */] = 'This method is available in a service worker context.',
    _a["permission-default" /* ErrorCode.PERMISSION_DEFAULT */] = 'The notification permission was not granted and dismissed instead.',
    _a["permission-blocked" /* ErrorCode.PERMISSION_BLOCKED */] = 'The notification permission was not granted and blocked instead.',
    _a["unsupported-browser" /* ErrorCode.UNSUPPORTED_BROWSER */] = "This browser doesn't support the API's required to use the Firebase SDK.",
    _a["indexed-db-unsupported" /* ErrorCode.INDEXED_DB_UNSUPPORTED */] = "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
    _a["failed-service-worker-registration" /* ErrorCode.FAILED_DEFAULT_REGISTRATION */] = 'We are unable to register the default service worker. {$browserErrorMessage}',
    _a["token-subscribe-failed" /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */] = 'A problem occurred while subscribing the user to FCM: {$errorInfo}',
    _a["token-subscribe-no-token" /* ErrorCode.TOKEN_SUBSCRIBE_NO_TOKEN */] = 'FCM returned no token when subscribing the user to push.',
    _a["token-unsubscribe-failed" /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */] = 'A problem occurred while unsubscribing the ' +
        'user from FCM: {$errorInfo}',
    _a["token-update-failed" /* ErrorCode.TOKEN_UPDATE_FAILED */] = 'A problem occurred while updating the user from FCM: {$errorInfo}',
    _a["token-update-no-token" /* ErrorCode.TOKEN_UPDATE_NO_TOKEN */] = 'FCM returned no token when updating the user to push.',
    _a["use-sw-after-get-token" /* ErrorCode.USE_SW_AFTER_GET_TOKEN */] = 'The useServiceWorker() method may only be called once and must be ' +
        'called before calling getToken() to ensure your service worker is used.',
    _a["invalid-sw-registration" /* ErrorCode.INVALID_SW_REGISTRATION */] = 'The input to useServiceWorker() must be a ServiceWorkerRegistration.',
    _a["invalid-bg-handler" /* ErrorCode.INVALID_BG_HANDLER */] = 'The input to setBackgroundMessageHandler() must be a function.',
    _a["invalid-vapid-key" /* ErrorCode.INVALID_VAPID_KEY */] = 'The public VAPID key must be a string.',
    _a["use-vapid-key-after-get-token" /* ErrorCode.USE_VAPID_KEY_AFTER_GET_TOKEN */] = 'The usePublicVapidKey() method may only be called once and must be ' +
        'called before calling getToken() to ensure your VAPID key is used.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('messaging', 'Messaging', ERROR_MAP);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function requestGetToken(firebaseDependencies, subscriptionOptions) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var headers, body, subscribeOptions, responseData, response, err_1, message;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getHeaders(firebaseDependencies)];
                case 1:
                    headers = _a.sent();
                    body = getBody(subscriptionOptions);
                    subscribeOptions = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions)];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    responseData = _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    throw ERROR_FACTORY.create("token-subscribe-failed" /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */, {
                        errorInfo: err_1 === null || err_1 === void 0 ? void 0 : err_1.toString()
                    });
                case 6:
                    if (responseData.error) {
                        message = responseData.error.message;
                        throw ERROR_FACTORY.create("token-subscribe-failed" /* ErrorCode.TOKEN_SUBSCRIBE_FAILED */, {
                            errorInfo: message
                        });
                    }
                    if (!responseData.token) {
                        throw ERROR_FACTORY.create("token-subscribe-no-token" /* ErrorCode.TOKEN_SUBSCRIBE_NO_TOKEN */);
                    }
                    return [2 /*return*/, responseData.token];
            }
        });
    });
}
function requestUpdateToken(firebaseDependencies, tokenDetails) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var headers, body, updateOptions, responseData, response, err_2, message;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getHeaders(firebaseDependencies)];
                case 1:
                    headers = _a.sent();
                    body = getBody(tokenDetails.subscriptionOptions);
                    updateOptions = {
                        method: 'PATCH',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch("".concat(getEndpoint(firebaseDependencies.appConfig), "/").concat(tokenDetails.token), updateOptions)];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    responseData = _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_2 = _a.sent();
                    throw ERROR_FACTORY.create("token-update-failed" /* ErrorCode.TOKEN_UPDATE_FAILED */, {
                        errorInfo: err_2 === null || err_2 === void 0 ? void 0 : err_2.toString()
                    });
                case 6:
                    if (responseData.error) {
                        message = responseData.error.message;
                        throw ERROR_FACTORY.create("token-update-failed" /* ErrorCode.TOKEN_UPDATE_FAILED */, {
                            errorInfo: message
                        });
                    }
                    if (!responseData.token) {
                        throw ERROR_FACTORY.create("token-update-no-token" /* ErrorCode.TOKEN_UPDATE_NO_TOKEN */);
                    }
                    return [2 /*return*/, responseData.token];
            }
        });
    });
}
function requestDeleteToken(firebaseDependencies, token) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var headers, unsubscribeOptions, response, responseData, message, err_3;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getHeaders(firebaseDependencies)];
                case 1:
                    headers = _a.sent();
                    unsubscribeOptions = {
                        method: 'DELETE',
                        headers: headers
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch("".concat(getEndpoint(firebaseDependencies.appConfig), "/").concat(token), unsubscribeOptions)];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    responseData = _a.sent();
                    if (responseData.error) {
                        message = responseData.error.message;
                        throw ERROR_FACTORY.create("token-unsubscribe-failed" /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */, {
                            errorInfo: message
                        });
                    }
                    return [3 /*break*/, 6];
                case 5:
                    err_3 = _a.sent();
                    throw ERROR_FACTORY.create("token-unsubscribe-failed" /* ErrorCode.TOKEN_UNSUBSCRIBE_FAILED */, {
                        errorInfo: err_3 === null || err_3 === void 0 ? void 0 : err_3.toString()
                    });
                case 6: return [2 /*return*/];
            }
        });
    });
}
function getEndpoint(_a) {
    var projectId = _a.projectId;
    return "".concat(ENDPOINT, "/projects/").concat(projectId, "/registrations");
}
function getHeaders(_a) {
    var appConfig = _a.appConfig, installations = _a.installations;
    return tslib.__awaiter(this, void 0, void 0, function () {
        var authToken;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, installations.getToken()];
                case 1:
                    authToken = _b.sent();
                    return [2 /*return*/, new Headers({
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            'x-goog-api-key': appConfig.apiKey,
                            'x-goog-firebase-installations-auth': "FIS ".concat(authToken)
                        })];
            }
        });
    });
}
function getBody(_a) {
    var p256dh = _a.p256dh, auth = _a.auth, endpoint = _a.endpoint, vapidKey = _a.vapidKey;
    var body = {
        web: {
            endpoint: endpoint,
            auth: auth,
            p256dh: p256dh
        }
    };
    if (vapidKey !== DEFAULT_VAPID_KEY) {
        body.web.applicationPubKey = vapidKey;
    }
    return body;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// UpdateRegistration will be called once every week.
var TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
function getTokenInternal(messaging) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var pushSubscription, subscriptionOptions, tokenDetails, e_1;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getPushSubscription(messaging.swRegistration, messaging.vapidKey)];
                case 1:
                    pushSubscription = _a.sent();
                    subscriptionOptions = {
                        vapidKey: messaging.vapidKey,
                        swScope: messaging.swRegistration.scope,
                        endpoint: pushSubscription.endpoint,
                        auth: arrayToBase64(pushSubscription.getKey('auth')),
                        p256dh: arrayToBase64(pushSubscription.getKey('p256dh'))
                    };
                    return [4 /*yield*/, dbGet(messaging.firebaseDependencies)];
                case 2:
                    tokenDetails = _a.sent();
                    if (!!tokenDetails) return [3 /*break*/, 3];
                    // No token, get a new one.
                    return [2 /*return*/, getNewToken(messaging.firebaseDependencies, subscriptionOptions)];
                case 3:
                    if (!!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) return [3 /*break*/, 8];
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    e_1 = _a.sent();
                    // Suppress errors because of #2364
                    console.warn(e_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, getNewToken(messaging.firebaseDependencies, subscriptionOptions)];
                case 8:
                    if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
                        // Weekly token refresh
                        return [2 /*return*/, updateToken(messaging, {
                                token: tokenDetails.token,
                                createTime: Date.now(),
                                subscriptionOptions: subscriptionOptions
                            })];
                    }
                    else {
                        // Valid token, nothing to do.
                        return [2 /*return*/, tokenDetails.token];
                    }
                case 9: return [2 /*return*/];
            }
        });
    });
}
/**
 * This method deletes the token from the database, unsubscribes the token from FCM, and unregisters
 * the push subscription if it exists.
 */
function deleteTokenInternal(messaging) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var tokenDetails, pushSubscription;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbGet(messaging.firebaseDependencies)];
                case 1:
                    tokenDetails = _a.sent();
                    if (!tokenDetails) return [3 /*break*/, 4];
                    return [4 /*yield*/, requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, dbRemove(messaging.firebaseDependencies)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [4 /*yield*/, messaging.swRegistration.pushManager.getSubscription()];
                case 5:
                    pushSubscription = _a.sent();
                    if (pushSubscription) {
                        return [2 /*return*/, pushSubscription.unsubscribe()];
                    }
                    // If there's no SW, consider it a success.
                    return [2 /*return*/, true];
            }
        });
    });
}
function updateToken(messaging, tokenDetails) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var updatedToken, updatedTokenDetails, e_2;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 5]);
                    return [4 /*yield*/, requestUpdateToken(messaging.firebaseDependencies, tokenDetails)];
                case 1:
                    updatedToken = _a.sent();
                    updatedTokenDetails = tslib.__assign(tslib.__assign({}, tokenDetails), { token: updatedToken, createTime: Date.now() });
                    return [4 /*yield*/, dbSet(messaging.firebaseDependencies, updatedTokenDetails)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, updatedToken];
                case 3:
                    e_2 = _a.sent();
                    return [4 /*yield*/, deleteTokenInternal(messaging)];
                case 4:
                    _a.sent();
                    throw e_2;
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getNewToken(firebaseDependencies, subscriptionOptions) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var token, tokenDetails;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, requestGetToken(firebaseDependencies, subscriptionOptions)];
                case 1:
                    token = _a.sent();
                    tokenDetails = {
                        token: token,
                        createTime: Date.now(),
                        subscriptionOptions: subscriptionOptions
                    };
                    return [4 /*yield*/, dbSet(firebaseDependencies, tokenDetails)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, tokenDetails.token];
            }
        });
    });
}
/**
 * Gets a PushSubscription for the current user.
 */
function getPushSubscription(swRegistration, vapidKey) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var subscription;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, swRegistration.pushManager.getSubscription()];
                case 1:
                    subscription = _a.sent();
                    if (subscription) {
                        return [2 /*return*/, subscription];
                    }
                    return [2 /*return*/, swRegistration.pushManager.subscribe({
                            userVisibleOnly: true,
                            // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
                            // submitted to pushManager#subscribe must be of type Uint8Array.
                            applicationServerKey: base64ToArray(vapidKey)
                        })];
            }
        });
    });
}
/**
 * Checks if the saved tokenDetails object matches the configuration provided.
 */
function isTokenValid(dbOptions, currentOptions) {
    var isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
    var isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
    var isAuthEqual = currentOptions.auth === dbOptions.auth;
    var isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
    return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function externalizePayload(internalPayload) {
    var payload = {
        from: internalPayload.from,
        // eslint-disable-next-line camelcase
        collapseKey: internalPayload.collapse_key,
        // eslint-disable-next-line camelcase
        messageId: internalPayload.fcmMessageId
    };
    propagateNotificationPayload(payload, internalPayload);
    propagateDataPayload(payload, internalPayload);
    propagateFcmOptions(payload, internalPayload);
    return payload;
}
function propagateNotificationPayload(payload, messagePayloadInternal) {
    if (!messagePayloadInternal.notification) {
        return;
    }
    payload.notification = {};
    var title = messagePayloadInternal.notification.title;
    if (!!title) {
        payload.notification.title = title;
    }
    var body = messagePayloadInternal.notification.body;
    if (!!body) {
        payload.notification.body = body;
    }
    var image = messagePayloadInternal.notification.image;
    if (!!image) {
        payload.notification.image = image;
    }
    var icon = messagePayloadInternal.notification.icon;
    if (!!icon) {
        payload.notification.icon = icon;
    }
}
function propagateDataPayload(payload, messagePayloadInternal) {
    if (!messagePayloadInternal.data) {
        return;
    }
    payload.data = messagePayloadInternal.data;
}
function propagateFcmOptions(payload, messagePayloadInternal) {
    var _a, _b, _c, _d, _e;
    // fcmOptions.link value is written into notification.click_action. see more in b/232072111
    if (!messagePayloadInternal.fcmOptions &&
        !((_a = messagePayloadInternal.notification) === null || _a === void 0 ? void 0 : _a.click_action)) {
        return;
    }
    payload.fcmOptions = {};
    var link = (_c = (_b = messagePayloadInternal.fcmOptions) === null || _b === void 0 ? void 0 : _b.link) !== null && _c !== void 0 ? _c : (_d = messagePayloadInternal.notification) === null || _d === void 0 ? void 0 : _d.click_action;
    if (!!link) {
        payload.fcmOptions.link = link;
    }
    // eslint-disable-next-line camelcase
    var analyticsLabel = (_e = messagePayloadInternal.fcmOptions) === null || _e === void 0 ? void 0 : _e.analytics_label;
    if (!!analyticsLabel) {
        payload.fcmOptions.analyticsLabel = analyticsLabel;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isConsoleMessage(data) {
    // This message has a campaign ID, meaning it was sent using the Firebase Console.
    return typeof data === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_mergeStrings('hts/frbslgigp.ogepscmv/ieo/eaylg', 'tp:/ieaeogn-agolai.o/1frlglgc/o');
_mergeStrings('AzSCbw63g1R0nCw85jG8', 'Iaya3yLKwmgvh7cF0q4');
function _mergeStrings(s1, s2) {
    var resultArray = [];
    for (var i = 0; i < s1.length; i++) {
        resultArray.push(s1.charAt(i));
        if (i < s2.length) {
            resultArray.push(s2.charAt(i));
        }
    }
    return resultArray.join('');
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
    var e_1, _a;
    if (!app || !app.options) {
        throw getMissingValueError('App Configuration Object');
    }
    if (!app.name) {
        throw getMissingValueError('App Name');
    }
    // Required app config keys
    var configKeys = [
        'projectId',
        'apiKey',
        'appId',
        'messagingSenderId'
    ];
    var options = app.options;
    try {
        for (var configKeys_1 = tslib.__values(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
            var keyName = configKeys_1_1.value;
            if (!options[keyName]) {
                throw getMissingValueError(keyName);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        appName: app.name,
        projectId: options.projectId,
        apiKey: options.apiKey,
        appId: options.appId,
        senderId: options.messagingSenderId
    };
}
function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */, {
        valueName: valueName
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MessagingService = /** @class */ (function () {
    function MessagingService(app, installations, analyticsProvider) {
        // logging is only done with end user consent. Default to false.
        this.deliveryMetricsExportedToBigQueryEnabled = false;
        this.onBackgroundMessageHandler = null;
        this.onMessageHandler = null;
        this.logEvents = [];
        this.isLogServiceStarted = false;
        var appConfig = extractAppConfig(app);
        this.firebaseDependencies = {
            app: app,
            appConfig: appConfig,
            installations: installations,
            analyticsProvider: analyticsProvider
        };
    }
    MessagingService.prototype._delete = function () {
        return Promise.resolve();
    };
    return MessagingService;
}());

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerDefaultSw(messaging) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var _a, e_1;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = messaging;
                    return [4 /*yield*/, navigator.serviceWorker.register(DEFAULT_SW_PATH, {
                            scope: DEFAULT_SW_SCOPE
                        })];
                case 1:
                    _a.swRegistration = _b.sent();
                    // The timing when browser updates sw when sw has an update is unreliable from experiment. It
                    // leads to version conflict when the SDK upgrades to a newer version in the main page, but sw
                    // is stuck with the old version. For example,
                    // https://github.com/firebase/firebase-js-sdk/issues/2590 The following line reliably updates
                    // sw if there was an update.
                    messaging.swRegistration.update().catch(function () {
                        /* it is non blocking and we don't care if it failed */
                    });
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _b.sent();
                    throw ERROR_FACTORY.create("failed-service-worker-registration" /* ErrorCode.FAILED_DEFAULT_REGISTRATION */, {
                        browserErrorMessage: e_1 === null || e_1 === void 0 ? void 0 : e_1.message
                    });
                case 3: return [2 /*return*/];
            }
        });
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function updateSwReg(messaging, swRegistration) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!swRegistration && !messaging.swRegistration)) return [3 /*break*/, 2];
                    return [4 /*yield*/, registerDefaultSw(messaging)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!swRegistration && !!messaging.swRegistration) {
                        return [2 /*return*/];
                    }
                    if (!(swRegistration instanceof ServiceWorkerRegistration)) {
                        throw ERROR_FACTORY.create("invalid-sw-registration" /* ErrorCode.INVALID_SW_REGISTRATION */);
                    }
                    messaging.swRegistration = swRegistration;
                    return [2 /*return*/];
            }
        });
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function updateVapidKey(messaging, vapidKey) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        return tslib.__generator(this, function (_a) {
            if (!!vapidKey) {
                messaging.vapidKey = vapidKey;
            }
            else if (!messaging.vapidKey) {
                messaging.vapidKey = DEFAULT_VAPID_KEY;
            }
            return [2 /*return*/];
        });
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getToken$1(messaging, options) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!navigator) {
                        throw ERROR_FACTORY.create("only-available-in-window" /* ErrorCode.AVAILABLE_IN_WINDOW */);
                    }
                    if (!(Notification.permission === 'default')) return [3 /*break*/, 2];
                    return [4 /*yield*/, Notification.requestPermission()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (Notification.permission !== 'granted') {
                        throw ERROR_FACTORY.create("permission-blocked" /* ErrorCode.PERMISSION_BLOCKED */);
                    }
                    return [4 /*yield*/, updateVapidKey(messaging, options === null || options === void 0 ? void 0 : options.vapidKey)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, updateSwReg(messaging, options === null || options === void 0 ? void 0 : options.serviceWorkerRegistration)];
                case 4:
                    _a.sent();
                    return [2 /*return*/, getTokenInternal(messaging)];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function logToScion(messaging, messageType, data) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var eventType, analytics;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    eventType = getEventType(messageType);
                    return [4 /*yield*/, messaging.firebaseDependencies.analyticsProvider.get()];
                case 1:
                    analytics = _a.sent();
                    analytics.logEvent(eventType, {
                        /* eslint-disable camelcase */
                        message_id: data[CONSOLE_CAMPAIGN_ID],
                        message_name: data[CONSOLE_CAMPAIGN_NAME],
                        message_time: data[CONSOLE_CAMPAIGN_TIME],
                        message_device_time: Math.floor(Date.now() / 1000)
                        /* eslint-enable camelcase */
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function getEventType(messageType) {
    switch (messageType) {
        case MessageType.NOTIFICATION_CLICKED:
            return 'notification_open';
        case MessageType.PUSH_RECEIVED:
            return 'notification_foreground';
        default:
            throw new Error();
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function messageEventListener(messaging, event) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var internalPayload, dataPayload;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    internalPayload = event.data;
                    if (!internalPayload.isFirebaseMessaging) {
                        return [2 /*return*/];
                    }
                    if (messaging.onMessageHandler &&
                        internalPayload.messageType === MessageType.PUSH_RECEIVED) {
                        if (typeof messaging.onMessageHandler === 'function') {
                            messaging.onMessageHandler(externalizePayload(internalPayload));
                        }
                        else {
                            messaging.onMessageHandler.next(externalizePayload(internalPayload));
                        }
                    }
                    dataPayload = internalPayload.data;
                    if (!(isConsoleMessage(dataPayload) &&
                        dataPayload[CONSOLE_CAMPAIGN_ANALYTICS_ENABLED] === '1')) return [3 /*break*/, 2];
                    return [4 /*yield*/, logToScion(messaging, internalPayload.messageType, dataPayload)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}

var name = "@firebase/messaging";
var version = "0.12.7";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WindowMessagingFactory = function (container) {
    var messaging = new MessagingService(container.getProvider('app').getImmediate(), container.getProvider('installations-internal').getImmediate(), container.getProvider('analytics-internal'));
    navigator.serviceWorker.addEventListener('message', function (e) {
        return messageEventListener(messaging, e);
    });
    return messaging;
};
var WindowMessagingInternalFactory = function (container) {
    var messaging = container
        .getProvider('messaging')
        .getImmediate();
    var messagingInternal = {
        getToken: function (options) { return getToken$1(messaging, options); }
    };
    return messagingInternal;
};
function registerMessagingInWindow() {
    app._registerComponent(new component.Component('messaging', WindowMessagingFactory, "PUBLIC" /* ComponentType.PUBLIC */));
    app._registerComponent(new component.Component('messaging-internal', WindowMessagingInternalFactory, "PRIVATE" /* ComponentType.PRIVATE */));
    app.registerVersion(name, version);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    app.registerVersion(name, version, 'cjs5');
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Checks if all required APIs exist in the browser.
 * @returns a Promise that resolves to a boolean.
 *
 * @public
 */
function isWindowSupported() {
    return tslib.__awaiter(this, void 0, void 0, function () {
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    // This throws if open() is unsupported, so adding it to the conditional
                    // statement below can cause an uncaught error.
                    return [4 /*yield*/, util.validateIndexedDBOpenable()];
                case 1:
                    // This throws if open() is unsupported, so adding it to the conditional
                    // statement below can cause an uncaught error.
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a.sent();
                    return [2 /*return*/, false];
                case 3: 
                // firebase-js-sdk/issues/2393 reveals that idb#open in Safari iframe and Firefox private browsing
                // might be prohibited to run. In these contexts, an error would be thrown during the messaging
                // instantiating phase, informing the developers to import/call isSupported for special handling.
                return [2 /*return*/, (typeof window !== 'undefined' &&
                        util.isIndexedDBAvailable() &&
                        util.areCookiesEnabled() &&
                        'serviceWorker' in navigator &&
                        'PushManager' in window &&
                        'Notification' in window &&
                        'fetch' in window &&
                        ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
                        PushSubscription.prototype.hasOwnProperty('getKey'))];
            }
        });
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteToken$1(messaging) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!navigator) {
                        throw ERROR_FACTORY.create("only-available-in-window" /* ErrorCode.AVAILABLE_IN_WINDOW */);
                    }
                    if (!!messaging.swRegistration) return [3 /*break*/, 2];
                    return [4 /*yield*/, registerDefaultSw(messaging)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/, deleteTokenInternal(messaging)];
            }
        });
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function onMessage$1(messaging, nextOrObserver) {
    if (!navigator) {
        throw ERROR_FACTORY.create("only-available-in-window" /* ErrorCode.AVAILABLE_IN_WINDOW */);
    }
    messaging.onMessageHandler = nextOrObserver;
    return function () {
        messaging.onMessageHandler = null;
    };
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Retrieves a Firebase Cloud Messaging instance.
 *
 * @returns The Firebase Cloud Messaging instance associated with the provided firebase app.
 *
 * @public
 */
function getMessagingInWindow(app$1) {
    if (app$1 === void 0) { app$1 = app.getApp(); }
    // Conscious decision to make this async check non-blocking during the messaging instance
    // initialization phase for performance consideration. An error would be thrown latter for
    // developer's information. Developers can then choose to import and call `isSupported` for
    // special handling.
    isWindowSupported().then(function (isSupported) {
        // If `isWindowSupported()` resolved, but returned false.
        if (!isSupported) {
            throw ERROR_FACTORY.create("unsupported-browser" /* ErrorCode.UNSUPPORTED_BROWSER */);
        }
    }, function (_) {
        // If `isWindowSupported()` rejected.
        throw ERROR_FACTORY.create("indexed-db-unsupported" /* ErrorCode.INDEXED_DB_UNSUPPORTED */);
    });
    return app._getProvider(util.getModularInstance(app$1), 'messaging').getImmediate();
}
/**
 * Subscribes the {@link Messaging} instance to push notifications. Returns a Firebase Cloud
 * Messaging registration token that can be used to send push messages to that {@link Messaging}
 * instance.
 *
 * If notification permission isn't already granted, this method asks the user for permission. The
 * returned promise rejects if the user does not allow the app to show notifications.
 *
 * @param messaging - The {@link Messaging} instance.
 * @param options - Provides an optional vapid key and an optional service worker registration.
 *
 * @returns The promise resolves with an FCM registration token.
 *
 * @public
 */
function getToken(messaging, options) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        return tslib.__generator(this, function (_a) {
            messaging = util.getModularInstance(messaging);
            return [2 /*return*/, getToken$1(messaging, options)];
        });
    });
}
/**
 * Deletes the registration token associated with this {@link Messaging} instance and unsubscribes
 * the {@link Messaging} instance from the push subscription.
 *
 * @param messaging - The {@link Messaging} instance.
 *
 * @returns The promise resolves when the token has been successfully deleted.
 *
 * @public
 */
function deleteToken(messaging) {
    messaging = util.getModularInstance(messaging);
    return deleteToken$1(messaging);
}
/**
 * When a push message is received and the user is currently on a page for your origin, the
 * message is passed to the page and an `onMessage()` event is dispatched with the payload of
 * the push message.
 *
 *
 * @param messaging - The {@link Messaging} instance.
 * @param nextOrObserver - This function, or observer object with `next` defined,
 *     is called when a message is received and the user is currently viewing your page.
 * @returns To stop listening for messages execute this returned function.
 *
 * @public
 */
function onMessage(messaging, nextOrObserver) {
    messaging = util.getModularInstance(messaging);
    return onMessage$1(messaging, nextOrObserver);
}

/**
 * The Firebase Cloud Messaging Web SDK.
 * This SDK does not work in a Node.js environment.
 *
 * @packageDocumentation
 */
registerMessagingInWindow();

exports.deleteToken = deleteToken;
exports.getMessaging = getMessagingInWindow;
exports.getToken = getToken;
exports.isSupported = isWindowSupported;
exports.onMessage = onMessage;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "../node_modules/@firebase/util/dist/index.cjs.js":
/*!********************************************************!*\
  !*** ../node_modules/@firebase/util/dist/index.cjs.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
const assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
const assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function (str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
const byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
const base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        const byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        const output = [];
        for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            let outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
        this.init_();
        const charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        const output = [];
        for (let i = 0; i < input.length;) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw new DecodeBase64StringError();
            }
            const outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * An error encountered while decoding base64 string.
 */
class DecodeBase64StringError extends Error {
    constructor() {
        super(...arguments);
        this.name = 'DecodeBase64StringError';
    }
}
/**
 * URL-safe base64 encoding
 */
const base64Encode = function (str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
const base64urlEncodeWithoutPadding = function (str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
const base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (const prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
/**
 * Attempt to read defaults from a JSON string provided to
 * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
 * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
 * The dots are in parens because certain compilers (Vite?) cannot
 * handle seeing that variable in comments.
 * See https://github.com/firebase/firebase-js-sdk/issues/6838
 */
const getDefaultsFromEnvVariable = () => {
    if (typeof process === 'undefined' || typeof process.env === 'undefined') {
        return;
    }
    const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
    if (defaultsJsonString) {
        return JSON.parse(defaultsJsonString);
    }
};
const getDefaultsFromCookie = () => {
    if (typeof document === 'undefined') {
        return;
    }
    let match;
    try {
        match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    }
    catch (e) {
        // Some environments such as Angular Universal SSR have a
        // `document` object but error on accessing `document.cookie`.
        return;
    }
    const decoded = match && base64Decode(match[1]);
    return decoded && JSON.parse(decoded);
};
/**
 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
 * (1) if such an object exists as a property of `globalThis`
 * (2) if such an object was provided on a shell environment variable
 * (3) if such an object exists in a cookie
 * @public
 */
const getDefaults = () => {
    try {
        return (getDefaultsFromGlobal() ||
            getDefaultsFromEnvVariable() ||
            getDefaultsFromCookie());
    }
    catch (e) {
        /**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
        return;
    }
};
/**
 * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
 * @public
 */
const getDefaultEmulatorHost = (productName) => { var _a, _b; return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName]; };
/**
 * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a pair of hostname and port like `["::1", 4000]` if available
 * @public
 */
const getDefaultEmulatorHostnameAndPort = (productName) => {
    const host = getDefaultEmulatorHost(productName);
    if (!host) {
        return undefined;
    }
    const separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.
    if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
        throw new Error(`Invalid host ${host} with no separate hostname and port!`);
    }
    // eslint-disable-next-line no-restricted-globals
    const port = parseInt(host.substring(separatorIndex + 1), 10);
    if (host[0] === '[') {
        // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
        return [host.substring(1, separatorIndex - 1), port];
    }
    else {
        return [host.substring(0, separatorIndex), port];
    }
};
/**
 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
 * @public
 */
const getDefaultAppConfig = () => { var _a; return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config; };
/**
 * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
 * prefixed by "_")
 * @public
 */
const getExperimentalSetting = (name) => { var _a; return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name}`]; };

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
    constructor() {
        this.reject = () => { };
        this.resolve = () => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
        return (error, value) => {
            if (error) {
                this.reject(error);
            }
            else {
                this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(() => { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = Object.assign({ 
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`, aud: project, iat, exp: iat + 3600, auth_time: iat, sub, user_id: sub, firebase: {
            sign_in_provider: 'custom',
            identities: {}
        } }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected or specified.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    var _a;
    const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
    if (forceEnvironment === 'node') {
        return true;
    }
    else if (forceEnvironment === 'browser') {
        return false;
    }
    try {
        return (Object.prototype.toString.call(__webpack_require__.g.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        !!navigator.userAgent &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    try {
        return typeof indexedDB === 'object';
    }
    catch (e) {
        return false;
    }
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = () => {
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                }
                resolve(true);
            };
            request.onupgradeneeded = () => {
                preExist = false;
            };
            request.onerror = () => {
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */
const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(
    /** The error code for this error. */
    code, message, 
    /** Custom data for this error. */
    customData) {
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */
        this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const decode = function (token) {
    let header = {}, claims = {}, data = {}, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidTimestamp = function (token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const issuedAtTime = function (token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidFormat = function (token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isAdmin = function (token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys) {
        if (!bKeys.includes(k)) {
            return false;
        }
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        }
        else if (aProp !== bProp) {
            return false;
        }
    }
    for (const k of bKeys) {
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
 * @internal
 */
function promiseWithTimeout(promise, timeInMS = 2000) {
    const deferredPromise = new Deferred();
    setTimeout(() => deferredPromise.reject('timeout!'), timeInMS);
    promise.then(deferredPromise.resolve, deferredPromise.reject);
    return deferredPromise.promise;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
        if (Array.isArray(value)) {
            value.forEach(arrayVal => {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    const obj = {};
    const tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(token => {
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
class Sha1 {
    constructor() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (let i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    reset() {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    compress_(buf, offset) {
        if (!offset) {
            offset = 0;
        }
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (let i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (let i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (let i = 16; i < 80; i++) {
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (let i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            const t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */
    digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (let i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    }
}

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    constructor(executor, onNoObservers) {
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(() => {
            executor(this);
        })
            .catch(e => {
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer) => {
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer) => {
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer) => {
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error,
                complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
                try {
                    if (this.finalError) {
                        observer.error(this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    }
    forEachObserver(fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            if (this.observers !== undefined && this.observers[i] !== undefined) {
                try {
                    fn(this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    }
    close(err) {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return (...args) => {
        Promise.resolve(true)
            .then(() => {
            fn(...args);
        })
            .catch((error) => {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (const method of methods) {
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
const validateArgCount = function (fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        const error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, 
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
const stringToByteArray = function (str) {
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            const high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
const stringLength = function (str) {
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Copied from https://stackoverflow.com/a/2117523
 * Generates a new uuid.
 * @public
 */
const uuidv4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
    if (!Number.isFinite(i)) {
        return `${i}`;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    const dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}

exports.CONSTANTS = CONSTANTS;
exports.DecodeBase64StringError = DecodeBase64StringError;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.MAX_VALUE_MILLIS = MAX_VALUE_MILLIS;
exports.RANDOM_FACTOR = RANDOM_FACTOR;
exports.Sha1 = Sha1;
exports.areCookiesEnabled = areCookiesEnabled;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.base64urlEncodeWithoutPadding = base64urlEncodeWithoutPadding;
exports.calculateBackoffMillis = calculateBackoffMillis;
exports.contains = contains;
exports.createMockUserToken = createMockUserToken;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepEqual = deepEqual;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.extractQuerystring = extractQuerystring;
exports.getDefaultAppConfig = getDefaultAppConfig;
exports.getDefaultEmulatorHost = getDefaultEmulatorHost;
exports.getDefaultEmulatorHostnameAndPort = getDefaultEmulatorHostnameAndPort;
exports.getDefaults = getDefaults;
exports.getExperimentalSetting = getExperimentalSetting;
exports.getGlobal = getGlobal;
exports.getModularInstance = getModularInstance;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isIndexedDBAvailable = isIndexedDBAvailable;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isSafari = isSafari;
exports.isUWP = isUWP;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.ordinal = ordinal;
exports.promiseWithTimeout = promiseWithTimeout;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray;
exports.stringify = stringify;
exports.uuidv4 = uuidv4;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateIndexedDBOpenable = validateIndexedDBOpenable;
exports.validateNamespace = validateNamespace;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./src/fb-messaging.js":
/*!*****************************!*\
  !*** ./src/fb-messaging.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  initializeApp
} = __webpack_require__(/*! firebase/app */ "../node_modules/firebase/app/dist/index.cjs.js");
const {
  getMessaging,
  getToken
} = __webpack_require__(/*! firebase/messaging */ "../node_modules/firebase/messaging/dist/index.cjs.js");
const REACT_APP_WEB_PUSH_KEY_PAIR = "BI2quxxgwH0_wgGJt2GHt9phY_DhkldsJJHCq4TMzz60KiNTCMqux-7fuQqRGBRINTCmGKhqZ6rVusxF7oYJGPc";
const REACT_APP_FIREBASE_API_KEY = "AIzaSyBpYFNTFvknzY-5qJs2RfppQIq62vWz80A";
const REACT_APP_FIREBASE_AUTH_DOMAIN = "geo-locate-me-sns.firebaseapp.com";
const REACT_APP_FIREBASE_PROJECT_ID = "geo-locate-me-sns";
const REACT_APP_FIREBASE_STORAGE_BUCKET = "geo-locate-me-sns.appspot.com";
const REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "1082270282780";
const REACT_APP_FIREBASE_APP_ID = "1:1082270282780:web:7d07179df3c5ed45025bd9";
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID
};
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
getToken(messaging, {
  vapidKey: REACT_APP_WEB_PUSH_KEY_PAIR
});
module.exports = {
  firebaseApp,
  messaging
};

/***/ }),

/***/ "../node_modules/firebase/app/dist/index.cjs.js":
/*!******************************************************!*\
  !*** ../node_modules/firebase/app/dist/index.cjs.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var app = __webpack_require__(/*! @firebase/app */ "../node_modules/@firebase/app/dist/index.cjs.js");

var name = "firebase";
var version = "10.10.0";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
app.registerVersion(name, version, 'app');

Object.keys(app).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return app[k]; }
  });
});
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "../node_modules/firebase/messaging/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ../node_modules/firebase/messaging/dist/index.cjs.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var messaging = __webpack_require__(/*! @firebase/messaging */ "../node_modules/@firebase/messaging/dist/index.cjs.js");



Object.keys(messaging).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return messaging[k]; }
	});
});
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "../node_modules/idb/build/index.js":
/*!******************************************!*\
  !*** ../node_modules/idb/build/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteDB: () => (/* binding */ deleteDB),
/* harmony export */   openDB: () => (/* binding */ openDB),
/* harmony export */   unwrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   wrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ "../node_modules/idb/build/wrap-idb-value.js");



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    }
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
        }
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event));
    }
    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ "../node_modules/idb/build/wrap-idb-value.js":
/*!***************************************************!*\
  !*** ../node_modules/idb/build/wrap-idb-value.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ reverseTransformCache),
/* harmony export */   i: () => (/* binding */ instanceOfAny),
/* harmony export */   r: () => (/* binding */ replaceTraps),
/* harmony export */   u: () => (/* binding */ unwrap),
/* harmony export */   w: () => (/* binding */ wrap)
/* harmony export */ });
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);




/***/ }),

/***/ "../node_modules/tslib/tslib.es6.mjs":
/*!*******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/fb-messaging.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELGdCQUFnQixtQkFBTyxDQUFDLGtGQUFxQjtBQUM3QyxZQUFZLG1CQUFPLENBQUMsa0RBQU87QUFDM0IsZUFBZSxtQkFBTyxDQUFDLDRFQUFrQjtBQUN6QyxXQUFXLG1CQUFPLENBQUMsd0VBQWdCO0FBQ25DLFVBQVUsbUJBQU8sQ0FBQywrQ0FBSzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwyQ0FBMkMsbUJBQW1CO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxVQUFVO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLDRFQUE0RSxVQUFVO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw0REFBNEQsU0FBUztBQUNyRTtBQUNBLDBFQUEwRSxTQUFTO0FBQ25GLDZFQUE2RSxTQUFTO0FBQ3RGLHlFQUF5RSxTQUFTO0FBQ2xGO0FBQ0E7QUFDQSxnRkFBZ0YsU0FBUztBQUN6RjtBQUNBO0FBQ0Esb0dBQW9HLHNCQUFzQjtBQUMxSCx1R0FBdUcsc0JBQXNCO0FBQzdILHVHQUF1RyxzQkFBc0I7QUFDN0gsOEdBQThHLHNCQUFzQjtBQUNwSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRixlQUFlO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYscUJBQXFCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxnRUFBZ0U7QUFDL0c7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0Esa0NBQWtDLGlFQUFpRTtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RixlQUFlO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLFVBQVU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYscURBQXFEO0FBQ2hKO0FBQ0E7QUFDQTtBQUNBLG1JQUFtSTtBQUNuSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxVQUFVO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlDQUFpQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGVBQWU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDJCQUEyQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RkFBNkYsVUFBVSxvQ0FBb0MsSUFBSTtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRywyQ0FBMkM7QUFDOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsMEJBQTBCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRiwwQ0FBMEM7QUFDckk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsZ0RBQWdEO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0hBQXNILDJCQUEyQjtBQUNqSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlELGlEQUFpRCxlQUFlO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsZ0JBQWdCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5Q0FBeUM7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixrREFBa0Q7QUFDM0ksbUZBQW1GLDZDQUE2QztBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBZ0Q7QUFDaEQ7QUFDQSxxQkFBcUI7QUFDckIsQ0FBQyxFQUFDO0FBQ0YsbUJBQW1CO0FBQ25CLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckIsZ0NBQWdDO0FBQ2hDLGFBQWE7QUFDYix3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQiwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkI7Ozs7Ozs7Ozs7OztBQ2gxQ2E7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxZQUFZLG1CQUFPLENBQUMsa0RBQU87QUFDM0IsV0FBVyxtQkFBTyxDQUFDLHdFQUFnQjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3Q0FBd0M7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGLFVBQVU7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCwrQkFBK0I7QUFDNUY7QUFDQSwwREFBMEQsbUNBQW1DO0FBQzdGLDZEQUE2RCw4QkFBOEI7QUFDM0Y7QUFDQSwwREFBMEQsMkJBQTJCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQiw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDRGQUE0RixVQUFVO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLHFCQUFxQjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxzR0FBc0c7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRHQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlCQUFpQjtBQUNqQiwwQkFBMEI7QUFDMUIsZ0JBQWdCO0FBQ2hCOzs7Ozs7Ozs7Ozs7QUNqZGE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxVQUFVLG1CQUFPLENBQUMsc0VBQWU7QUFDakMsZ0JBQWdCLG1CQUFPLENBQUMsa0ZBQXFCO0FBQzdDLFlBQVksbUJBQU8sQ0FBQyxrREFBTztBQUMzQixXQUFXLG1CQUFPLENBQUMsd0VBQWdCO0FBQ25DLFVBQVUsbUJBQU8sQ0FBQywrQ0FBSzs7QUFFdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxvSEFBb0gsV0FBVztBQUMvSDtBQUNBO0FBQ0EsNERBQTRELGNBQWMsNEJBQTRCLGNBQWMsY0FBYyxHQUFHLGVBQWU7QUFDcEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLGtDQUFrQztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEdBQUc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLHFCQUFxQjtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0JBQW9CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsa0NBQWtDO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGVBQWUsYUFBYSxvREFBb0Q7QUFDbkk7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHdCQUF3QixzQkFBc0I7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSx3QkFBd0IsYUFBYSxvREFBb0Q7QUFDeEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZUFBZSxnQ0FBZ0M7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxrQ0FBa0M7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRCxJQUFJLGlDQUFpQztBQUNyQyxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxzQkFBc0I7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4QkFBOEI7QUFDM0QsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEI7Ozs7Ozs7Ozs7OztBQ3Y1Q2E7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxZQUFZLG1CQUFPLENBQUMsa0RBQU87O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHVCQUF1QixnQkFBZ0IsS0FBSztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVCQUF1QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsNkNBQTZDLGFBQWE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMseUJBQXlCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCOzs7Ozs7Ozs7Ozs7QUMvUWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxtQkFBTyxDQUFDLDBGQUF5QjtBQUNqQyxnQkFBZ0IsbUJBQU8sQ0FBQyxrRkFBcUI7QUFDN0MsWUFBWSxtQkFBTyxDQUFDLGtEQUFPO0FBQzNCLFVBQVUsbUJBQU8sQ0FBQywrQ0FBSztBQUN2QixXQUFXLG1CQUFPLENBQUMsd0VBQWdCO0FBQ25DLFVBQVUsbUJBQU8sQ0FBQyxzRUFBZTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsaUJBQWlCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpR0FBaUc7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsb0hBQW9ILFdBQVc7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUpBQW1KLHFCQUFxQjtBQUN4SyxrSUFBa0ksV0FBVztBQUM3STtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEMsMkhBQTJILFdBQVc7QUFDdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsbUJBQW1CLDZDQUE2QztBQUMxSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csc0JBQXNCO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0RBQXdELGlCQUFpQjtBQUN6RSxRQUFRLGlCQUFpQjtBQUN6QjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCOzs7Ozs7Ozs7Ozs7QUNyZ0RhOztBQUViLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4QkFBOEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBTTtBQUNyQixlQUFlLHFCQUFNO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFlBQVk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUSx3RUFBd0UsS0FBSzs7QUFFaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxxQkFBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE1BQU07QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxpQkFBaUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWEsR0FBRyxLQUFLO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUIsSUFBSSxTQUFTLEdBQUcsU0FBUztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxJQUFJO0FBQ3ZELEtBQUs7QUFDTDtBQUNBLG1CQUFtQixNQUFNLElBQUk7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksR0FBRztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYSxXQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlCQUF5QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQiw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVEsVUFBVSxTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEVBQUU7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakIsK0JBQStCO0FBQy9CLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckIsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixjQUFjO0FBQ2Qsc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYixjQUFjO0FBQ2Qsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixxQ0FBcUM7QUFDckMsOEJBQThCO0FBQzlCLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0IsdUJBQXVCO0FBQ3ZCLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQiw4QkFBOEI7QUFDOUIseUNBQXlDO0FBQ3pDLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLDBCQUEwQjtBQUMxQixhQUFhO0FBQ2IsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQiwwQkFBMEI7QUFDMUIsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixZQUFZO0FBQ1osNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEIsb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCLGVBQWU7QUFDZixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Qsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLHlCQUF5QjtBQUN6Qjs7Ozs7Ozs7Ozs7QUNyb0VBLE1BQU07RUFBRUE7QUFBYyxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0VBQWMsQ0FBQztBQUNqRCxNQUFNO0VBQUVDLFlBQVk7RUFBRUM7QUFBUyxDQUFDLEdBQUdGLG1CQUFPLENBQUMsZ0ZBQW9CLENBQUM7QUFFaEUsTUFBTUcsMkJBQTJCLEdBQUcseUZBQXlGO0FBQzdILE1BQU1DLDBCQUEwQixHQUFHLHlDQUF5QztBQUM1RSxNQUFNQyw4QkFBOEIsR0FBRyxtQ0FBbUM7QUFDMUUsTUFBTUMsNkJBQTZCLEdBQUcsbUJBQW1CO0FBQ3pELE1BQU1DLGlDQUFpQyxHQUFHLCtCQUErQjtBQUN6RSxNQUFNQyxzQ0FBc0MsR0FBRyxlQUFlO0FBQzlELE1BQU1DLHlCQUF5QixHQUFHLDRDQUE0QztBQUU5RSxNQUFNQyxjQUFjLEdBQUc7RUFDbkJDLE1BQU0sRUFBRVAsMEJBQTBCO0VBQ2xDUSxVQUFVLEVBQUVQLDhCQUE4QjtFQUMxQ1EsU0FBUyxFQUFFUCw2QkFBNkI7RUFDeENRLGFBQWEsRUFBRVAsaUNBQWlDO0VBQ2hEUSxpQkFBaUIsRUFBRVAsc0NBQXNDO0VBQ3pEUSxLQUFLLEVBQUVQO0FBQ1gsQ0FBQztBQUVELE1BQU1RLFdBQVcsR0FBR2xCLGFBQWEsQ0FBQ1csY0FBYyxDQUFDO0FBQ2pELE1BQU1RLFNBQVMsR0FBR2pCLFlBQVksQ0FBQ2dCLFdBQVcsQ0FBQztBQUMzQ2YsUUFBUSxDQUFDZ0IsU0FBUyxFQUFFO0VBQUVDLFFBQVEsRUFBRWhCO0FBQTRCLENBQUMsQ0FBQztBQUU5RGlCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2JKLFdBQVc7RUFDWEM7QUFDSixDQUFDOzs7Ozs7Ozs7OztBQzNCWTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELFVBQVUsbUJBQU8sQ0FBQyxzRUFBZTs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixHQUFHO0FBQ0gsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxnQkFBZ0IsbUJBQU8sQ0FBQyxrRkFBcUI7Ozs7QUFJN0M7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLEVBQUU7QUFDRixDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZG1FO0FBQ047O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHlDQUF5QyxJQUFJO0FBQzlFO0FBQ0Esd0JBQXdCLHFEQUFJO0FBQzVCO0FBQ0E7QUFDQSxvQkFBb0IscURBQUksc0RBQXNELHFEQUFJO0FBQ2xGLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVSxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQUk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeExyRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ2pGLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRU87QUFDUDtBQUNBLCtDQUErQyxPQUFPO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsY0FBYztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7O0FBRU87QUFDUCxrQ0FBa0M7QUFDbEM7O0FBRU87QUFDUCx1QkFBdUIsdUZBQXVGO0FBQzlHO0FBQ0E7QUFDQSx5R0FBeUc7QUFDekc7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBLGdFQUFnRTtBQUNoRTtBQUNBLDhDQUE4Qyx5RkFBeUY7QUFDdkksOERBQThELDJDQUEyQztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSw0Q0FBNEMseUVBQXlFO0FBQ3JIOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLDBCQUEwQiwrREFBK0QsaUJBQWlCO0FBQzFHO0FBQ0Esa0NBQWtDLE1BQU0sK0JBQStCLFlBQVk7QUFDbkYsaUNBQWlDLE1BQU0sbUNBQW1DLFlBQVk7QUFDdEYsOEJBQThCO0FBQzlCO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1AsWUFBWSw2QkFBNkIsMEJBQTBCLGNBQWMscUJBQXFCO0FBQ3RHLGVBQWUsb0RBQW9ELHFFQUFxRSxjQUFjO0FBQ3RKLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGlDQUFpQyxTQUFTO0FBQzFDLGlDQUFpQyxXQUFXLFVBQVU7QUFDdEQsd0NBQXdDLGNBQWM7QUFDdEQ7QUFDQSw0R0FBNEcsT0FBTztBQUNuSCwrRUFBK0UsaUJBQWlCO0FBQ2hHLHVEQUF1RCxnQkFBZ0IsUUFBUTtBQUMvRSw2Q0FBNkMsZ0JBQWdCLGdCQUFnQjtBQUM3RTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsUUFBUSxZQUFZLGFBQWEsU0FBUyxVQUFVO0FBQ3BELGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUCxnREFBZ0QsUUFBUTtBQUN4RCx1Q0FBdUMsUUFBUTtBQUMvQyx1REFBdUQsUUFBUTtBQUMvRDtBQUNBO0FBQ0E7O0FBRU87QUFDUCwyRUFBMkUsT0FBTztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsZUFBZSx1RkFBdUYsY0FBYztBQUNwSCxxQkFBcUIsZ0NBQWdDLHFDQUFxQywyQ0FBMkM7QUFDckksMEJBQTBCLE1BQU0saUJBQWlCLFlBQVk7QUFDN0QscUJBQXFCO0FBQ3JCLDRCQUE0QjtBQUM1QiwyQkFBMkI7QUFDM0IsMEJBQTBCO0FBQzFCOztBQUVPO0FBQ1A7QUFDQSxlQUFlLDZDQUE2QyxVQUFVLHNEQUFzRCxjQUFjO0FBQzFJLHdCQUF3Qiw2QkFBNkIsb0JBQW9CLHVDQUF1QyxrQkFBa0I7QUFDbEk7O0FBRU87QUFDUDtBQUNBO0FBQ0EseUdBQXlHLHVGQUF1RixjQUFjO0FBQzlNLHFCQUFxQiw4QkFBOEIsZ0RBQWdELHdEQUF3RDtBQUMzSiwyQ0FBMkMsc0NBQXNDLFVBQVUsbUJBQW1CLElBQUk7QUFDbEg7O0FBRU87QUFDUCwrQkFBK0IsdUNBQXVDLFlBQVksS0FBSyxPQUFPO0FBQzlGO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsNEJBQTRCO0FBQ3BFLENBQUM7QUFDRDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsMkNBQTJDO0FBQzNDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhDQUE4QztBQUNuRTtBQUNBO0FBQ0EscUJBQXFCLGFBQWE7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLFNBQVMsZ0JBQWdCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7OztVQ2pYRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlby1sb2NhdGUtbWUtY2xpZW50Ly4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL2Rpc3QvaW5kZXguY2pzLmpzIiwid2VicGFjazovL2dlby1sb2NhdGUtbWUtY2xpZW50Ly4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvY29tcG9uZW50L2Rpc3QvaW5kZXguY2pzLmpzIiwid2VicGFjazovL2dlby1sb2NhdGUtbWUtY2xpZW50Ly4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9kaXN0L2luZGV4LmNqcy5qcyIsIndlYnBhY2s6Ly9nZW8tbG9jYXRlLW1lLWNsaWVudC8uLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2xvZ2dlci9kaXN0L2luZGV4LmNqcy5qcyIsIndlYnBhY2s6Ly9nZW8tbG9jYXRlLW1lLWNsaWVudC8uLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL21lc3NhZ2luZy9kaXN0L2luZGV4LmNqcy5qcyIsIndlYnBhY2s6Ly9nZW8tbG9jYXRlLW1lLWNsaWVudC8uLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvZGlzdC9pbmRleC5janMuanMiLCJ3ZWJwYWNrOi8vZ2VvLWxvY2F0ZS1tZS1jbGllbnQvLi9zcmMvZmItbWVzc2FnaW5nLmpzIiwid2VicGFjazovL2dlby1sb2NhdGUtbWUtY2xpZW50Ly4uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9hcHAvZGlzdC9pbmRleC5janMuanMiLCJ3ZWJwYWNrOi8vZ2VvLWxvY2F0ZS1tZS1jbGllbnQvLi4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL21lc3NhZ2luZy9kaXN0L2luZGV4LmNqcy5qcyIsIndlYnBhY2s6Ly9nZW8tbG9jYXRlLW1lLWNsaWVudC8uLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2dlby1sb2NhdGUtbWUtY2xpZW50Ly4uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvd3JhcC1pZGItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vZ2VvLWxvY2F0ZS1tZS1jbGllbnQvLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCJ3ZWJwYWNrOi8vZ2VvLWxvY2F0ZS1tZS1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2VvLWxvY2F0ZS1tZS1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dlby1sb2NhdGUtbWUtY2xpZW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2VvLWxvY2F0ZS1tZS1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nZW8tbG9jYXRlLW1lLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dlby1sb2NhdGUtbWUtY2xpZW50L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ2VvLWxvY2F0ZS1tZS1jbGllbnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2dlby1sb2NhdGUtbWUtY2xpZW50L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb21wb25lbnQgPSByZXF1aXJlKCdAZmlyZWJhc2UvY29tcG9uZW50Jyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIGxvZ2dlciQxID0gcmVxdWlyZSgnQGZpcmViYXNlL2xvZ2dlcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCdAZmlyZWJhc2UvdXRpbCcpO1xudmFyIGlkYiA9IHJlcXVpcmUoJ2lkYicpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBsYXRmb3JtTG9nZ2VyU2VydmljZUltcGwoY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB9XHJcbiAgICAvLyBJbiBpbml0aWFsIGltcGxlbWVudGF0aW9uLCB0aGlzIHdpbGwgYmUgY2FsbGVkIGJ5IGluc3RhbGxhdGlvbnMgb25cclxuICAgIC8vIGF1dGggdG9rZW4gcmVmcmVzaCwgYW5kIGluc3RhbGxhdGlvbnMgd2lsbCBzZW5kIHRoaXMgc3RyaW5nLlxyXG4gICAgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbC5wcm90b3R5cGUuZ2V0UGxhdGZvcm1JbmZvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwcm92aWRlcnMgPSB0aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcnMoKTtcclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggcHJvdmlkZXJzIGFuZCBnZXQgbGlicmFyeS92ZXJzaW9uIHBhaXJzIGZyb20gYW55IHRoYXQgYXJlXHJcbiAgICAgICAgLy8gdmVyc2lvbiBjb21wb25lbnRzLlxyXG4gICAgICAgIHJldHVybiBwcm92aWRlcnNcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgaWYgKGlzVmVyc2lvblNlcnZpY2VQcm92aWRlcihwcm92aWRlcikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlID0gcHJvdmlkZXIuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoc2VydmljZS5saWJyYXJ5LCBcIi9cIikuY29uY2F0KHNlcnZpY2UudmVyc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGxvZ1N0cmluZykgeyByZXR1cm4gbG9nU3RyaW5nOyB9KVxyXG4gICAgICAgICAgICAuam9pbignICcpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsO1xyXG59KCkpO1xyXG4vKipcclxuICpcclxuICogQHBhcmFtIHByb3ZpZGVyIGNoZWNrIGlmIHRoaXMgcHJvdmlkZXIgcHJvdmlkZXMgYSBWZXJzaW9uU2VydmljZVxyXG4gKlxyXG4gKiBOT1RFOiBVc2luZyBQcm92aWRlcjwnYXBwLXZlcnNpb24nPiBpcyBhIGhhY2sgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcHJvdmlkZXJcclxuICogcHJvdmlkZXMgVmVyc2lvblNlcnZpY2UuIFRoZSBwcm92aWRlciBpcyBub3QgbmVjZXNzYXJpbHkgYSAnYXBwLXZlcnNpb24nXHJcbiAqIHByb3ZpZGVyLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNWZXJzaW9uU2VydmljZVByb3ZpZGVyKHByb3ZpZGVyKSB7XHJcbiAgICB2YXIgY29tcG9uZW50ID0gcHJvdmlkZXIuZ2V0Q29tcG9uZW50KCk7XHJcbiAgICByZXR1cm4gKGNvbXBvbmVudCA9PT0gbnVsbCB8fCBjb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBvbmVudC50eXBlKSA9PT0gXCJWRVJTSU9OXCIgLyogQ29tcG9uZW50VHlwZS5WRVJTSU9OICovO1xyXG59XG5cbnZhciBuYW1lJG8gPSBcIkBmaXJlYmFzZS9hcHBcIjtcbnZhciB2ZXJzaW9uJDEgPSBcIjAuMTAuMFwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgbG9nZ2VyID0gbmV3IGxvZ2dlciQxLkxvZ2dlcignQGZpcmViYXNlL2FwcCcpO1xuXG52YXIgbmFtZSRuID0gXCJAZmlyZWJhc2UvYXBwLWNvbXBhdFwiO1xuXG52YXIgbmFtZSRtID0gXCJAZmlyZWJhc2UvYW5hbHl0aWNzLWNvbXBhdFwiO1xuXG52YXIgbmFtZSRsID0gXCJAZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG5cbnZhciBuYW1lJGsgPSBcIkBmaXJlYmFzZS9hcHAtY2hlY2stY29tcGF0XCI7XG5cbnZhciBuYW1lJGogPSBcIkBmaXJlYmFzZS9hcHAtY2hlY2tcIjtcblxudmFyIG5hbWUkaSA9IFwiQGZpcmViYXNlL2F1dGhcIjtcblxudmFyIG5hbWUkaCA9IFwiQGZpcmViYXNlL2F1dGgtY29tcGF0XCI7XG5cbnZhciBuYW1lJGcgPSBcIkBmaXJlYmFzZS9kYXRhYmFzZVwiO1xuXG52YXIgbmFtZSRmID0gXCJAZmlyZWJhc2UvZGF0YWJhc2UtY29tcGF0XCI7XG5cbnZhciBuYW1lJGUgPSBcIkBmaXJlYmFzZS9mdW5jdGlvbnNcIjtcblxudmFyIG5hbWUkZCA9IFwiQGZpcmViYXNlL2Z1bmN0aW9ucy1jb21wYXRcIjtcblxudmFyIG5hbWUkYyA9IFwiQGZpcmViYXNlL2luc3RhbGxhdGlvbnNcIjtcblxudmFyIG5hbWUkYiA9IFwiQGZpcmViYXNlL2luc3RhbGxhdGlvbnMtY29tcGF0XCI7XG5cbnZhciBuYW1lJGEgPSBcIkBmaXJlYmFzZS9tZXNzYWdpbmdcIjtcblxudmFyIG5hbWUkOSA9IFwiQGZpcmViYXNlL21lc3NhZ2luZy1jb21wYXRcIjtcblxudmFyIG5hbWUkOCA9IFwiQGZpcmViYXNlL3BlcmZvcm1hbmNlXCI7XG5cbnZhciBuYW1lJDcgPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZS1jb21wYXRcIjtcblxudmFyIG5hbWUkNiA9IFwiQGZpcmViYXNlL3JlbW90ZS1jb25maWdcIjtcblxudmFyIG5hbWUkNSA9IFwiQGZpcmViYXNlL3JlbW90ZS1jb25maWctY29tcGF0XCI7XG5cbnZhciBuYW1lJDQgPSBcIkBmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbnZhciBuYW1lJDMgPSBcIkBmaXJlYmFzZS9zdG9yYWdlLWNvbXBhdFwiO1xuXG52YXIgbmFtZSQyID0gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbnZhciBuYW1lJDEgPSBcIkBmaXJlYmFzZS9maXJlc3RvcmUtY29tcGF0XCI7XG5cbnZhciBuYW1lID0gXCJmaXJlYmFzZVwiO1xudmFyIHZlcnNpb24gPSBcIjEwLjEwLjBcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIF9hJDE7XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBhcHAgbmFtZVxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbnZhciBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcclxudmFyIFBMQVRGT1JNX0xPR19TVFJJTkcgPSAoX2EkMSA9IHt9LFxyXG4gICAgX2EkMVtuYW1lJG9dID0gJ2ZpcmUtY29yZScsXHJcbiAgICBfYSQxW25hbWUkbl0gPSAnZmlyZS1jb3JlLWNvbXBhdCcsXHJcbiAgICBfYSQxW25hbWUkbF0gPSAnZmlyZS1hbmFseXRpY3MnLFxyXG4gICAgX2EkMVtuYW1lJG1dID0gJ2ZpcmUtYW5hbHl0aWNzLWNvbXBhdCcsXHJcbiAgICBfYSQxW25hbWUkal0gPSAnZmlyZS1hcHAtY2hlY2snLFxyXG4gICAgX2EkMVtuYW1lJGtdID0gJ2ZpcmUtYXBwLWNoZWNrLWNvbXBhdCcsXHJcbiAgICBfYSQxW25hbWUkaV0gPSAnZmlyZS1hdXRoJyxcclxuICAgIF9hJDFbbmFtZSRoXSA9ICdmaXJlLWF1dGgtY29tcGF0JyxcclxuICAgIF9hJDFbbmFtZSRnXSA9ICdmaXJlLXJ0ZGInLFxyXG4gICAgX2EkMVtuYW1lJGZdID0gJ2ZpcmUtcnRkYi1jb21wYXQnLFxyXG4gICAgX2EkMVtuYW1lJGVdID0gJ2ZpcmUtZm4nLFxyXG4gICAgX2EkMVtuYW1lJGRdID0gJ2ZpcmUtZm4tY29tcGF0JyxcclxuICAgIF9hJDFbbmFtZSRjXSA9ICdmaXJlLWlpZCcsXHJcbiAgICBfYSQxW25hbWUkYl0gPSAnZmlyZS1paWQtY29tcGF0JyxcclxuICAgIF9hJDFbbmFtZSRhXSA9ICdmaXJlLWZjbScsXHJcbiAgICBfYSQxW25hbWUkOV0gPSAnZmlyZS1mY20tY29tcGF0JyxcclxuICAgIF9hJDFbbmFtZSQ4XSA9ICdmaXJlLXBlcmYnLFxyXG4gICAgX2EkMVtuYW1lJDddID0gJ2ZpcmUtcGVyZi1jb21wYXQnLFxyXG4gICAgX2EkMVtuYW1lJDZdID0gJ2ZpcmUtcmMnLFxyXG4gICAgX2EkMVtuYW1lJDVdID0gJ2ZpcmUtcmMtY29tcGF0JyxcclxuICAgIF9hJDFbbmFtZSQ0XSA9ICdmaXJlLWdjcycsXHJcbiAgICBfYSQxW25hbWUkM10gPSAnZmlyZS1nY3MtY29tcGF0JyxcclxuICAgIF9hJDFbbmFtZSQyXSA9ICdmaXJlLWZzdCcsXHJcbiAgICBfYSQxW25hbWUkMV0gPSAnZmlyZS1mc3QtY29tcGF0JyxcclxuICAgIF9hJDFbJ2ZpcmUtanMnXSA9ICdmaXJlLWpzJyxcclxuICAgIF9hJDFbbmFtZV0gPSAnZmlyZS1qcy1hbGwnLFxyXG4gICAgX2EkMSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbnZhciBfYXBwcyA9IG5ldyBNYXAoKTtcclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxudmFyIF9zZXJ2ZXJBcHBzID0gbmV3IE1hcCgpO1xyXG4vKipcclxuICogUmVnaXN0ZXJlZCBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbnZhciBfY29tcG9uZW50cyA9IG5ldyBNYXAoKTtcclxuLyoqXHJcbiAqIEBwYXJhbSBjb21wb25lbnQgLSB0aGUgY29tcG9uZW50IGJlaW5nIGFkZGVkIHRvIHRoaXMgYXBwJ3MgY29udGFpbmVyXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2FkZENvbXBvbmVudChhcHAsIGNvbXBvbmVudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhcHAuY29udGFpbmVyLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2dnZXIuZGVidWcoXCJDb21wb25lbnQgXCIuY29uY2F0KGNvbXBvbmVudC5uYW1lLCBcIiBmYWlsZWQgdG8gcmVnaXN0ZXIgd2l0aCBGaXJlYmFzZUFwcCBcIikuY29uY2F0KGFwcC5uYW1lKSwgZSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50KGFwcCwgY29tcG9uZW50KSB7XHJcbiAgICBhcHAuY29udGFpbmVyLmFkZE9yT3ZlcndyaXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBjb21wb25lbnQgLSB0aGUgY29tcG9uZW50IHRvIHJlZ2lzdGVyXHJcbiAqIEByZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaXMgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHlcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBfcmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICB2YXIgZV8xLCBfYSwgZV8yLCBfYjtcclxuICAgIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50Lm5hbWU7XHJcbiAgICBpZiAoX2NvbXBvbmVudHMuaGFzKGNvbXBvbmVudE5hbWUpKSB7XHJcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiVGhlcmUgd2VyZSBtdWx0aXBsZSBhdHRlbXB0cyB0byByZWdpc3RlciBjb21wb25lbnQgXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiLlwiKSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgX2NvbXBvbmVudHMuc2V0KGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGFkZCB0aGUgY29tcG9uZW50IHRvIGV4aXN0aW5nIGFwcCBpbnN0YW5jZXNcclxuICAgICAgICBmb3IgKHZhciBfYyA9IHRzbGliLl9fdmFsdWVzKF9hcHBzLnZhbHVlcygpKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgYXBwID0gX2QudmFsdWU7XHJcbiAgICAgICAgICAgIF9hZGRDb21wb25lbnQoYXBwLCBjb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9hID0gX2MucmV0dXJuKSkgX2EuY2FsbChfYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2UgPSB0c2xpYi5fX3ZhbHVlcyhfc2VydmVyQXBwcy52YWx1ZXMoKSksIF9mID0gX2UubmV4dCgpOyAhX2YuZG9uZTsgX2YgPSBfZS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgdmFyIHNlcnZlckFwcCA9IF9mLnZhbHVlO1xyXG4gICAgICAgICAgICBfYWRkQ29tcG9uZW50KHNlcnZlckFwcCwgY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKF9mICYmICFfZi5kb25lICYmIChfYiA9IF9lLnJldHVybikpIF9iLmNhbGwoX2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlQXBwIGluc3RhbmNlXHJcbiAqIEBwYXJhbSBuYW1lIC0gc2VydmljZSBuYW1lXHJcbiAqXHJcbiAqIEByZXR1cm5zIHRoZSBwcm92aWRlciBmb3IgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZVxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9nZXRQcm92aWRlcihhcHAsIG5hbWUpIHtcclxuICAgIHZhciBoZWFydGJlYXRDb250cm9sbGVyID0gYXBwLmNvbnRhaW5lclxyXG4gICAgICAgIC5nZXRQcm92aWRlcignaGVhcnRiZWF0JylcclxuICAgICAgICAuZ2V0SW1tZWRpYXRlKHsgb3B0aW9uYWw6IHRydWUgfSk7XHJcbiAgICBpZiAoaGVhcnRiZWF0Q29udHJvbGxlcikge1xyXG4gICAgICAgIHZvaWQgaGVhcnRiZWF0Q29udHJvbGxlci50cmlnZ2VySGVhcnRiZWF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwLmNvbnRhaW5lci5nZXRQcm92aWRlcihuYW1lKTtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlQXBwIGluc3RhbmNlXHJcbiAqIEBwYXJhbSBuYW1lIC0gc2VydmljZSBuYW1lXHJcbiAqIEBwYXJhbSBpbnN0YW5jZUlkZW50aWZpZXIgLSBzZXJ2aWNlIGluc3RhbmNlIGlkZW50aWZpZXIgaW4gY2FzZSB0aGUgc2VydmljZSBzdXBwb3J0cyBtdWx0aXBsZSBpbnN0YW5jZXNcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBfcmVtb3ZlU2VydmljZUluc3RhbmNlKGFwcCwgbmFtZSwgaW5zdGFuY2VJZGVudGlmaWVyKSB7XHJcbiAgICBpZiAoaW5zdGFuY2VJZGVudGlmaWVyID09PSB2b2lkIDApIHsgaW5zdGFuY2VJZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FOyB9XHJcbiAgICBfZ2V0UHJvdmlkZXIoYXBwLCBuYW1lKS5jbGVhckluc3RhbmNlKGluc3RhbmNlSWRlbnRpZmllcik7XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBvYmogLSBhbiBvYmplY3Qgb2YgdHlwZSBGaXJlYmFzZUFwcCBvciBGaXJlYmFzZU9wdGlvbnMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGUgb2JqZWN0IGlzIG9mIHR5cGUgRmlyZWJhc2VBcHAuXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2lzRmlyZWJhc2VBcHAob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqLm9wdGlvbnMgIT09IHVuZGVmaW5lZDtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIG9iaiAtIGFuIG9iamVjdCBvZiB0eXBlIEZpcmViYXNlQXBwLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgb2YgdHlwZSBGaXJlYmFzZVNlcnZlckFwcEltcGwuXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2lzRmlyZWJhc2VTZXJ2ZXJBcHAob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqLnNldHRpbmdzICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuLyoqXHJcbiAqIFRlc3Qgb25seVxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9jbGVhckNvbXBvbmVudHMoKSB7XHJcbiAgICBfY29tcG9uZW50cy5jbGVhcigpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBfYTtcclxudmFyIEVSUk9SUyA9IChfYSA9IHt9LFxyXG4gICAgX2FbXCJuby1hcHBcIiAvKiBBcHBFcnJvci5OT19BUFAgKi9dID0gXCJObyBGaXJlYmFzZSBBcHAgJ3skYXBwTmFtZX0nIGhhcyBiZWVuIGNyZWF0ZWQgLSBcIiArXHJcbiAgICAgICAgJ2NhbGwgaW5pdGlhbGl6ZUFwcCgpIGZpcnN0JyxcclxuICAgIF9hW1wiYmFkLWFwcC1uYW1lXCIgLyogQXBwRXJyb3IuQkFEX0FQUF9OQU1FICovXSA9IFwiSWxsZWdhbCBBcHAgbmFtZTogJ3skYXBwTmFtZX0nXCIsXHJcbiAgICBfYVtcImR1cGxpY2F0ZS1hcHBcIiAvKiBBcHBFcnJvci5EVVBMSUNBVEVfQVBQICovXSA9IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGV4aXN0cyB3aXRoIGRpZmZlcmVudCBvcHRpb25zIG9yIGNvbmZpZ1wiLFxyXG4gICAgX2FbXCJhcHAtZGVsZXRlZFwiIC8qIEFwcEVycm9yLkFQUF9ERUxFVEVEICovXSA9IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGRlbGV0ZWRcIixcclxuICAgIF9hW1wic2VydmVyLWFwcC1kZWxldGVkXCIgLyogQXBwRXJyb3IuU0VSVkVSX0FQUF9ERUxFVEVEICovXSA9ICdGaXJlYmFzZSBTZXJ2ZXIgQXBwIGhhcyBiZWVuIGRlbGV0ZWQnLFxyXG4gICAgX2FbXCJuby1vcHRpb25zXCIgLyogQXBwRXJyb3IuTk9fT1BUSU9OUyAqL10gPSAnTmVlZCB0byBwcm92aWRlIG9wdGlvbnMsIHdoZW4gbm90IGJlaW5nIGRlcGxveWVkIHRvIGhvc3RpbmcgdmlhIHNvdXJjZS4nLFxyXG4gICAgX2FbXCJpbnZhbGlkLWFwcC1hcmd1bWVudFwiIC8qIEFwcEVycm9yLklOVkFMSURfQVBQX0FSR1VNRU5UICovXSA9ICdmaXJlYmFzZS57JGFwcE5hbWV9KCkgdGFrZXMgZWl0aGVyIG5vIGFyZ3VtZW50IG9yIGEgJyArXHJcbiAgICAgICAgJ0ZpcmViYXNlIEFwcCBpbnN0YW5jZS4nLFxyXG4gICAgX2FbXCJpbnZhbGlkLWxvZy1hcmd1bWVudFwiIC8qIEFwcEVycm9yLklOVkFMSURfTE9HX0FSR1VNRU5UICovXSA9ICdGaXJzdCBhcmd1bWVudCB0byBgb25Mb2dgIG11c3QgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLicsXHJcbiAgICBfYVtcImlkYi1vcGVuXCIgLyogQXBwRXJyb3IuSURCX09QRU4gKi9dID0gJ0Vycm9yIHRocm93biB3aGVuIG9wZW5pbmcgSW5kZXhlZERCLiBPcmlnaW5hbCBlcnJvcjogeyRvcmlnaW5hbEVycm9yTWVzc2FnZX0uJyxcclxuICAgIF9hW1wiaWRiLWdldFwiIC8qIEFwcEVycm9yLklEQl9HRVQgKi9dID0gJ0Vycm9yIHRocm93biB3aGVuIHJlYWRpbmcgZnJvbSBJbmRleGVkREIuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nLFxyXG4gICAgX2FbXCJpZGItc2V0XCIgLyogQXBwRXJyb3IuSURCX1dSSVRFICovXSA9ICdFcnJvciB0aHJvd24gd2hlbiB3cml0aW5nIHRvIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXHJcbiAgICBfYVtcImlkYi1kZWxldGVcIiAvKiBBcHBFcnJvci5JREJfREVMRVRFICovXSA9ICdFcnJvciB0aHJvd24gd2hlbiBkZWxldGluZyBmcm9tIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXHJcbiAgICBfYVtcImZpbmFsaXphdGlvbi1yZWdpc3RyeS1ub3Qtc3VwcG9ydGVkXCIgLyogQXBwRXJyb3IuRklOQUxJWkFUSU9OX1JFR0lTVFJZX05PVF9TVVBQT1JURUQgKi9dID0gJ0ZpcmViYXNlU2VydmVyQXBwIGRlbGV0ZU9uRGVyZWYgZmllbGQgZGVmaW5lZCBidXQgdGhlIEpTIHJ1bnRpbWUgZG9lcyBub3Qgc3VwcG9ydCBGaW5hbGl6YXRpb25SZWdpc3RyeS4nLFxyXG4gICAgX2FbXCJpbnZhbGlkLXNlcnZlci1hcHAtZW52aXJvbm1lbnRcIiAvKiBBcHBFcnJvci5JTlZBTElEX1NFUlZFUl9BUFBfRU5WSVJPTk1FTlQgKi9dID0gJ0ZpcmViYXNlU2VydmVyQXBwIGlzIG5vdCBmb3IgdXNlIGluIGJyb3dzZXIgZW52aXJvbm1lbnRzLicsXHJcbiAgICBfYSk7XHJcbnZhciBFUlJPUl9GQUNUT1JZID0gbmV3IHV0aWwuRXJyb3JGYWN0b3J5KCdhcHAnLCAnRmlyZWJhc2UnLCBFUlJPUlMpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgRmlyZWJhc2VBcHBJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRmlyZWJhc2VBcHBJbXBsKG9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9pc0RlbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gdHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHRzbGliLl9fYXNzaWduKHt9LCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcclxuICAgICAgICB0aGlzLl9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgPVxyXG4gICAgICAgICAgICBjb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb21wb25lbnQobmV3IGNvbXBvbmVudC5Db21wb25lbnQoJ2FwcCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzOyB9LCBcIlBVQkxJQ1wiIC8qIENvbXBvbmVudFR5cGUuUFVCTElDICovKSk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZSwgXCJhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUsIFwibmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUsIFwib3B0aW9uc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUsIFwiY29uZmlnXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLCBcImNvbnRhaW5lclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUsIFwiaXNEZWxldGVkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVsZXRlZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0RlbGV0ZWQgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gRXJyb3IgaWYgdGhlIEFwcCBoYXMgYWxyZWFkeSBiZWVuIGRlbGV0ZWQgLVxyXG4gICAgICogdXNlIGJlZm9yZSBwZXJmb3JtaW5nIEFQSSBhY3Rpb25zIG9uIHRoZSBBcHAuXHJcbiAgICAgKi9cclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuY2hlY2tEZXN0cm95ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYXBwLWRlbGV0ZWRcIiAvKiBBcHBFcnJvci5BUFBfREVMRVRFRCAqLywgeyBhcHBOYW1lOiB0aGlzLl9uYW1lIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gRmlyZWJhc2VBcHBJbXBsO1xyXG59KCkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgRmlyZWJhc2VTZXJ2ZXJBcHBJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgdHNsaWIuX19leHRlbmRzKEZpcmViYXNlU2VydmVyQXBwSW1wbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZpcmViYXNlU2VydmVyQXBwSW1wbChvcHRpb25zLCBzZXJ2ZXJDb25maWcsIG5hbWUsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gQnVpbGQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIGZvciB0aGUgRmlyZWJhc2VBcHBJbXBsIGJhc2UgY2xhc3MuXHJcbiAgICAgICAgdmFyIGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9IHNlcnZlckNvbmZpZy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHNlcnZlckNvbmZpZy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWRcclxuICAgICAgICAgICAgOiBmYWxzZTtcclxuICAgICAgICAvLyBDcmVhdGUgdGhlIEZpcmViYXNlQXBwU2V0dGluZ3Mgb2JqZWN0IGZvciB0aGUgRmlyZWJhc2VBcHBJbXAgY29uc3RydWN0b3IuXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkOiBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcHRpb25zLmFwaUtleSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIENvbnN0cnVjdCB0aGUgcGFyZW50IEZpcmViYXNlQXBwSW1wIG9iamVjdC5cclxuICAgICAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBjb25maWcsIGNvbnRhaW5lcikgfHwgdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBhcHBJbXBsID0gb3B0aW9ucztcclxuICAgICAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBhcHBJbXBsLm9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKSB8fCB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBOb3cgY29uc3RydWN0IHRoZSBkYXRhIGZvciB0aGUgRmlyZWJhc2VTZXJ2ZXJBcHBJbXBsLlxyXG4gICAgICAgIF90aGlzLl9zZXJ2ZXJDb25maWcgPSB0c2xpYi5fX2Fzc2lnbih7IGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDogYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIH0sIHNlcnZlckNvbmZpZyk7XHJcbiAgICAgICAgX3RoaXMuX2ZpbmFsaXphdGlvblJlZ2lzdHJ5ID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuYXV0b21hdGljQ2xlYW51cCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF90aGlzLl9yZWZDb3VudCA9IDA7XHJcbiAgICAgICAgX3RoaXMuaW5jUmVmQ291bnQoX3RoaXMuX3NlcnZlckNvbmZpZy5yZWxlYXNlT25EZXJlZik7XHJcbiAgICAgICAgLy8gRG8gbm90IHJldGFpbiBhIGhhcmQgcmVmZXJlbmNlIHRvIHRoZSBkcmVmIG9iamVjdCwgb3RoZXJ3aXNlIHRoZSBGaW5hbGl6YXRpb25SZWdpc3J5XHJcbiAgICAgICAgLy8gd2lsbCBuZXZlciB0cmlnZ2VyLlxyXG4gICAgICAgIF90aGlzLl9zZXJ2ZXJDb25maWcucmVsZWFzZU9uRGVyZWYgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgc2VydmVyQ29uZmlnLnJlbGVhc2VPbkRlcmVmID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJlZ2lzdGVyVmVyc2lvbihuYW1lJG8sIHZlcnNpb24kMSwgJ3NlcnZlcmFwcCcpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaXJlYmFzZVNlcnZlckFwcEltcGwucHJvdG90eXBlLCBcInJlZkNvdW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vIEluY3JlbWVudCB0aGUgcmVmZXJlbmNlIGNvdW50IG9mIHRoaXMgc2VydmVyIGFwcC4gSWYgYW4gb2JqZWN0IGlzIHByb3ZpZGVkLCByZWdpc3RlciBpdFxyXG4gICAgLy8gd2l0aCB0aGUgZmluYWxpemF0aW9uIHJlZ2lzdHJ5LlxyXG4gICAgRmlyZWJhc2VTZXJ2ZXJBcHBJbXBsLnByb3RvdHlwZS5pbmNSZWZDb3VudCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZWZDb3VudCsrO1xyXG4gICAgICAgIGlmIChvYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9maW5hbGl6YXRpb25SZWdpc3RyeS5yZWdpc3RlcihvYmosIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBEZWNyZW1lbnQgdGhlIHJlZmVyZW5jZSBjb3VudC5cclxuICAgIEZpcmViYXNlU2VydmVyQXBwSW1wbC5wcm90b3R5cGUuZGVjUmVmQ291bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLS10aGlzLl9yZWZDb3VudDtcclxuICAgIH07XHJcbiAgICAvLyBJbnZva2VkIGJ5IHRoZSBGaW5hbGl6YXRpb25SZWdpc3RyeSBjYWxsYmFjayB0byBub3RlIHRoYXQgdGhpcyBhcHAgc2hvdWxkIGdvIHRocm91Z2ggaXRzXHJcbiAgICAvLyByZWZlcmVuY2UgY291bnRzIGFuZCBkZWxldGUgaXRzZWxmIGlmIG5vIHJlZmVyZW5jZSBjb3VudCByZW1haW4uIFRoZSBjb29yZGluYXRpbmcgbG9naWMgdGhhdFxyXG4gICAgLy8gaGFuZGxlcyB0aGlzIGlzIGluIGRlbGV0ZUFwcCguLi4pLlxyXG4gICAgRmlyZWJhc2VTZXJ2ZXJBcHBJbXBsLnByb3RvdHlwZS5hdXRvbWF0aWNDbGVhbnVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZvaWQgZGVsZXRlQXBwKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaXJlYmFzZVNlcnZlckFwcEltcGwucHJvdG90eXBlLCBcInNldHRpbmdzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VydmVyQ29uZmlnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIHRocm93IGFuIEVycm9yIGlmIHRoZSBBcHAgaGFzIGFscmVhZHkgYmVlbiBkZWxldGVkIC1cclxuICAgICAqIHVzZSBiZWZvcmUgcGVyZm9ybWluZyBBUEkgYWN0aW9ucyBvbiB0aGUgQXBwLlxyXG4gICAgICovXHJcbiAgICBGaXJlYmFzZVNlcnZlckFwcEltcGwucHJvdG90eXBlLmNoZWNrRGVzdHJveWVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInNlcnZlci1hcHAtZGVsZXRlZFwiIC8qIEFwcEVycm9yLlNFUlZFUl9BUFBfREVMRVRFRCAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBGaXJlYmFzZVNlcnZlckFwcEltcGw7XHJcbn0oRmlyZWJhc2VBcHBJbXBsKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaGUgY3VycmVudCBTREsgdmVyc2lvbi5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxudmFyIFNES19WRVJTSU9OID0gdmVyc2lvbjtcclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChfb3B0aW9ucywgcmF3Q29uZmlnKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIGlmIChyYXdDb25maWcgPT09IHZvaWQgMCkgeyByYXdDb25maWcgPSB7fTsgfVxyXG4gICAgdmFyIG9wdGlvbnMgPSBfb3B0aW9ucztcclxuICAgIGlmICh0eXBlb2YgcmF3Q29uZmlnICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHZhciBuYW1lXzEgPSByYXdDb25maWc7XHJcbiAgICAgICAgcmF3Q29uZmlnID0geyBuYW1lOiBuYW1lXzEgfTtcclxuICAgIH1cclxuICAgIHZhciBjb25maWcgPSB0c2xpYi5fX2Fzc2lnbih7IG5hbWU6IERFRkFVTFRfRU5UUllfTkFNRSwgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkOiBmYWxzZSB9LCByYXdDb25maWcpO1xyXG4gICAgdmFyIG5hbWUgPSBjb25maWcubmFtZTtcclxuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgfHwgIW5hbWUpIHtcclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImJhZC1hcHAtbmFtZVwiIC8qIEFwcEVycm9yLkJBRF9BUFBfTkFNRSAqLywge1xyXG4gICAgICAgICAgICBhcHBOYW1lOiBTdHJpbmcobmFtZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB1dGlsLmdldERlZmF1bHRBcHBDb25maWcoKSk7XHJcbiAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vLW9wdGlvbnNcIiAvKiBBcHBFcnJvci5OT19PUFRJT05TICovKTtcclxuICAgIH1cclxuICAgIHZhciBleGlzdGluZ0FwcCA9IF9hcHBzLmdldChuYW1lKTtcclxuICAgIGlmIChleGlzdGluZ0FwcCkge1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgZXhpc3RpbmcgYXBwIGlmIG9wdGlvbnMgYW5kIGNvbmZpZyBkZWVwIGVxdWFsIHRoZSBvbmVzIGluIHRoZSBleGlzdGluZyBhcHAuXHJcbiAgICAgICAgaWYgKHV0aWwuZGVlcEVxdWFsKG9wdGlvbnMsIGV4aXN0aW5nQXBwLm9wdGlvbnMpICYmXHJcbiAgICAgICAgICAgIHV0aWwuZGVlcEVxdWFsKGNvbmZpZywgZXhpc3RpbmdBcHAuY29uZmlnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdBcHA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImR1cGxpY2F0ZS1hcHBcIiAvKiBBcHBFcnJvci5EVVBMSUNBVEVfQVBQICovLCB7IGFwcE5hbWU6IG5hbWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGNvbnRhaW5lciA9IG5ldyBjb21wb25lbnQuQ29tcG9uZW50Q29udGFpbmVyKG5hbWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBmb3IgKHZhciBfYiA9IHRzbGliLl9fdmFsdWVzKF9jb21wb25lbnRzLnZhbHVlcygpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50JDEgPSBfYy52YWx1ZTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZENvbXBvbmVudChjb21wb25lbnQkMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgdmFyIG5ld0FwcCA9IG5ldyBGaXJlYmFzZUFwcEltcGwob3B0aW9ucywgY29uZmlnLCBjb250YWluZXIpO1xyXG4gICAgX2FwcHMuc2V0KG5hbWUsIG5ld0FwcCk7XHJcbiAgICByZXR1cm4gbmV3QXBwO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVTZXJ2ZXJBcHAoX29wdGlvbnMsIF9zZXJ2ZXJBcHBDb25maWcpIHtcclxuICAgIHZhciBlXzIsIF9hO1xyXG4gICAgaWYgKHV0aWwuaXNCcm93c2VyKCkpIHtcclxuICAgICAgICAvLyBGaXJlYmFzZVNlcnZlckFwcCBpc24ndCBkZXNpZ25lZCB0byBiZSBydW4gaW4gYnJvd3NlcnMuXHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnZhbGlkLXNlcnZlci1hcHAtZW52aXJvbm1lbnRcIiAvKiBBcHBFcnJvci5JTlZBTElEX1NFUlZFUl9BUFBfRU5WSVJPTk1FTlQgKi8pO1xyXG4gICAgfVxyXG4gICAgaWYgKF9zZXJ2ZXJBcHBDb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBfc2VydmVyQXBwQ29uZmlnLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIGFwcE9wdGlvbnM7XHJcbiAgICBpZiAoX2lzRmlyZWJhc2VBcHAoX29wdGlvbnMpKSB7XHJcbiAgICAgICAgYXBwT3B0aW9ucyA9IF9vcHRpb25zLm9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhcHBPcHRpb25zID0gX29wdGlvbnM7XHJcbiAgICB9XHJcbiAgICAvLyBCdWlsZCBhbiBhcHAgbmFtZSBiYXNlZCBvbiBhIGhhc2ggb2YgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cclxuICAgIHZhciBuYW1lT2JqID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIF9zZXJ2ZXJBcHBDb25maWcpLCBhcHBPcHRpb25zKTtcclxuICAgIC8vIEhvd2V2ZXIsIERvIG5vdCBtYW5nbGUgdGhlIG5hbWUgYmFzZWQgb24gcmVsZWFzZU9uRGVyZWYsIHNpbmNlIGl0IHdpbGwgdmFyeSBiZXR3ZWVuIHRoZVxyXG4gICAgLy8gY29uc3RydWN0aW9uIG9mIEZpcmViYXNlU2VydmVyQXBwIGluc3RhbmNlcy4gRm9yIGV4YW1wbGUsIGlmIHRoZSBvYmplY3QgaXMgdGhlIHJlcXVlc3QgaGVhZGVycy5cclxuICAgIGlmIChuYW1lT2JqLnJlbGVhc2VPbkRlcmVmICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBkZWxldGUgbmFtZU9iai5yZWxlYXNlT25EZXJlZjtcclxuICAgIH1cclxuICAgIHZhciBoYXNoQ29kZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fc3ByZWFkQXJyYXkoW10sIHRzbGliLl9fcmVhZChzKSwgZmFsc2UpLnJlZHVjZShmdW5jdGlvbiAoaGFzaCwgYykgeyByZXR1cm4gKE1hdGguaW11bCgzMSwgaGFzaCkgKyBjLmNoYXJDb2RlQXQoMCkpIHwgMDsgfSwgMCk7XHJcbiAgICB9O1xyXG4gICAgaWYgKF9zZXJ2ZXJBcHBDb25maWcucmVsZWFzZU9uRGVyZWYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiZmluYWxpemF0aW9uLXJlZ2lzdHJ5LW5vdC1zdXBwb3J0ZWRcIiAvKiBBcHBFcnJvci5GSU5BTElaQVRJT05fUkVHSVNUUllfTk9UX1NVUFBPUlRFRCAqLywge30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBuYW1lU3RyaW5nID0gJycgKyBoYXNoQ29kZShKU09OLnN0cmluZ2lmeShuYW1lT2JqKSk7XHJcbiAgICB2YXIgZXhpc3RpbmdBcHAgPSBfc2VydmVyQXBwcy5nZXQobmFtZVN0cmluZyk7XHJcbiAgICBpZiAoZXhpc3RpbmdBcHApIHtcclxuICAgICAgICBleGlzdGluZ0FwcC5pbmNSZWZDb3VudChfc2VydmVyQXBwQ29uZmlnLnJlbGVhc2VPbkRlcmVmKTtcclxuICAgICAgICByZXR1cm4gZXhpc3RpbmdBcHA7XHJcbiAgICB9XHJcbiAgICB2YXIgY29udGFpbmVyID0gbmV3IGNvbXBvbmVudC5Db21wb25lbnRDb250YWluZXIobmFtZVN0cmluZyk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIF9iID0gdHNsaWIuX192YWx1ZXMoX2NvbXBvbmVudHMudmFsdWVzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBjb21wb25lbnQkMSA9IF9jLnZhbHVlO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudCQxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICB2YXIgbmV3QXBwID0gbmV3IEZpcmViYXNlU2VydmVyQXBwSW1wbChhcHBPcHRpb25zLCBfc2VydmVyQXBwQ29uZmlnLCBuYW1lU3RyaW5nLCBjb250YWluZXIpO1xyXG4gICAgX3NlcnZlckFwcHMuc2V0KG5hbWVTdHJpbmcsIG5ld0FwcCk7XHJcbiAgICByZXR1cm4gbmV3QXBwO1xyXG59XHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgYSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXHJcbiAqXHJcbiAqIFdoZW4gY2FsbGVkIHdpdGggbm8gYXJndW1lbnRzLCB0aGUgZGVmYXVsdCBhcHAgaXMgcmV0dXJuZWQuIFdoZW4gYW4gYXBwIG5hbWVcclxuICogaXMgcHJvdmlkZWQsIHRoZSBhcHAgY29ycmVzcG9uZGluZyB0byB0aGF0IG5hbWUgaXMgcmV0dXJuZWQuXHJcbiAqXHJcbiAqIEFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gaWYgdGhlIGFwcCBiZWluZyByZXRyaWV2ZWQgaGFzIG5vdCB5ZXQgYmVlblxyXG4gKiBpbml0aWFsaXplZC5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiAvLyBSZXR1cm4gdGhlIGRlZmF1bHQgYXBwXHJcbiAqIGNvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG4gKiBgYGBcclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiAvLyBSZXR1cm4gYSBuYW1lZCBhcHBcclxuICogY29uc3Qgb3RoZXJBcHAgPSBnZXRBcHAoXCJvdGhlckFwcFwiKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSBuYW1lIC0gT3B0aW9uYWwgbmFtZSBvZiB0aGUgYXBwIHRvIHJldHVybi4gSWYgbm8gbmFtZSBpc1xyXG4gKiAgIHByb3ZpZGVkLCB0aGUgZGVmYXVsdCBpcyBgXCJbREVGQVVMVF1cImAuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBhcHAgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvdmlkZWQgYXBwIG5hbWUuXHJcbiAqICAgSWYgbm8gYXBwIG5hbWUgaXMgcHJvdmlkZWQsIHRoZSBkZWZhdWx0IGFwcCBpcyByZXR1cm5lZC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QXBwKG5hbWUpIHtcclxuICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgdmFyIGFwcCA9IF9hcHBzLmdldChuYW1lKTtcclxuICAgIGlmICghYXBwICYmIG5hbWUgPT09IERFRkFVTFRfRU5UUllfTkFNRSAmJiB1dGlsLmdldERlZmF1bHRBcHBDb25maWcoKSkge1xyXG4gICAgICAgIHJldHVybiBpbml0aWFsaXplQXBwKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFwcCkge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm8tYXBwXCIgLyogQXBwRXJyb3IuTk9fQVBQICovLCB7IGFwcE5hbWU6IG5hbWUgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwO1xyXG59XHJcbi8qKlxyXG4gKiBBIChyZWFkLW9ubHkpIGFycmF5IG9mIGFsbCBpbml0aWFsaXplZCBhcHBzLlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRBcHBzKCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oX2FwcHMudmFsdWVzKCkpO1xyXG59XHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoaXMgYXBwIHVudXNhYmxlIGFuZCBmcmVlcyB0aGUgcmVzb3VyY2VzIG9mIGFsbCBhc3NvY2lhdGVkXHJcbiAqIHNlcnZpY2VzLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIGRlbGV0ZUFwcChhcHApXHJcbiAqICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAqICAgICBjb25zb2xlLmxvZyhcIkFwcCBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICogICB9KVxyXG4gKiAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gKiAgICAgY29uc29sZS5sb2coXCJFcnJvciBkZWxldGluZyBhcHA6XCIsIGVycm9yKTtcclxuICogICB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGRlbGV0ZUFwcChhcHApIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY2xlYW51cFByb3ZpZGVycywgbmFtZSwgZmlyZWJhc2VTZXJ2ZXJBcHA7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cFByb3ZpZGVycyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBhcHAubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2FwcHMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXBQcm92aWRlcnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYXBwcy5kZWxldGUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF9zZXJ2ZXJBcHBzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZVNlcnZlckFwcCA9IGFwcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcmViYXNlU2VydmVyQXBwLmRlY1JlZkNvdW50KCkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlcnZlckFwcHMuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cFByb3ZpZGVycyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjbGVhbnVwUHJvdmlkZXJzKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChhcHAuY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UHJvdmlkZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHByb3ZpZGVyKSB7IHJldHVybiBwcm92aWRlci5kZWxldGUoKTsgfSkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLmlzRGVsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgYSBsaWJyYXJ5J3MgbmFtZSBhbmQgdmVyc2lvbiBmb3IgcGxhdGZvcm0gbG9nZ2luZyBwdXJwb3Nlcy5cclxuICogQHBhcmFtIGxpYnJhcnkgLSBOYW1lIG9mIDFwIG9yIDNwIGxpYnJhcnkgKGUuZy4gZmlyZXN0b3JlLCBhbmd1bGFyZmlyZSlcclxuICogQHBhcmFtIHZlcnNpb24gLSBDdXJyZW50IHZlcnNpb24gb2YgdGhhdCBsaWJyYXJ5LlxyXG4gKiBAcGFyYW0gdmFyaWFudCAtIEJ1bmRsZSB2YXJpYW50LCBlLmcuLCBub2RlLCBybiwgZXRjLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlclZlcnNpb24obGlicmFyeUtleU9yTmFtZSwgdmVyc2lvbiwgdmFyaWFudCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgLy8gVE9ETzogV2UgY2FuIHVzZSB0aGlzIGNoZWNrIHRvIHdoaXRlbGlzdCBzdHJpbmdzIHdoZW4vaWYgd2Ugc2V0IHVwXHJcbiAgICAvLyBhIGdvb2Qgd2hpdGVsaXN0IHN5c3RlbS5cclxuICAgIHZhciBsaWJyYXJ5ID0gKF9hID0gUExBVEZPUk1fTE9HX1NUUklOR1tsaWJyYXJ5S2V5T3JOYW1lXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbGlicmFyeUtleU9yTmFtZTtcclxuICAgIGlmICh2YXJpYW50KSB7XHJcbiAgICAgICAgbGlicmFyeSArPSBcIi1cIi5jb25jYXQodmFyaWFudCk7XHJcbiAgICB9XHJcbiAgICB2YXIgbGlicmFyeU1pc21hdGNoID0gbGlicmFyeS5tYXRjaCgvXFxzfFxcLy8pO1xyXG4gICAgdmFyIHZlcnNpb25NaXNtYXRjaCA9IHZlcnNpb24ubWF0Y2goL1xcc3xcXC8vKTtcclxuICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2ggfHwgdmVyc2lvbk1pc21hdGNoKSB7XHJcbiAgICAgICAgdmFyIHdhcm5pbmcgPSBbXHJcbiAgICAgICAgICAgIFwiVW5hYmxlIHRvIHJlZ2lzdGVyIGxpYnJhcnkgXFxcIlwiLmNvbmNhdChsaWJyYXJ5LCBcIlxcXCIgd2l0aCB2ZXJzaW9uIFxcXCJcIikuY29uY2F0KHZlcnNpb24sIFwiXFxcIjpcIilcclxuICAgICAgICBdO1xyXG4gICAgICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgd2FybmluZy5wdXNoKFwibGlicmFyeSBuYW1lIFxcXCJcIi5jb25jYXQobGlicmFyeSwgXCJcXFwiIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycyAod2hpdGVzcGFjZSBvciBcXFwiL1xcXCIpXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxpYnJhcnlNaXNtYXRjaCAmJiB2ZXJzaW9uTWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgd2FybmluZy5wdXNoKCdhbmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZlcnNpb25NaXNtYXRjaCkge1xyXG4gICAgICAgICAgICB3YXJuaW5nLnB1c2goXCJ2ZXJzaW9uIG5hbWUgXFxcIlwiLmNvbmNhdCh2ZXJzaW9uLCBcIlxcXCIgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzICh3aGl0ZXNwYWNlIG9yIFxcXCIvXFxcIilcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIud2Fybih3YXJuaW5nLmpvaW4oJyAnKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBjb21wb25lbnQuQ29tcG9uZW50KFwiXCIuY29uY2F0KGxpYnJhcnksIFwiLXZlcnNpb25cIiksIGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGxpYnJhcnk6IGxpYnJhcnksIHZlcnNpb246IHZlcnNpb24gfSk7IH0sIFwiVkVSU0lPTlwiIC8qIENvbXBvbmVudFR5cGUuVkVSU0lPTiAqLykpO1xyXG59XHJcbi8qKlxyXG4gKiBTZXRzIGxvZyBoYW5kbGVyIGZvciBhbGwgRmlyZWJhc2UgU0RLcy5cclxuICogQHBhcmFtIGxvZ0NhbGxiYWNrIC0gQW4gb3B0aW9uYWwgY3VzdG9tIGxvZyBoYW5kbGVyIHRoYXQgZXhlY3V0ZXMgdXNlciBjb2RlIHdoZW5ldmVyXHJcbiAqIHRoZSBGaXJlYmFzZSBTREsgbWFrZXMgYSBsb2dnaW5nIGNhbGwuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIG9uTG9nKGxvZ0NhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICBpZiAobG9nQ2FsbGJhY2sgIT09IG51bGwgJiYgdHlwZW9mIGxvZ0NhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnZhbGlkLWxvZy1hcmd1bWVudFwiIC8qIEFwcEVycm9yLklOVkFMSURfTE9HX0FSR1VNRU5UICovKTtcclxuICAgIH1cclxuICAgIGxvZ2dlciQxLnNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKTtcclxufVxyXG4vKipcclxuICogU2V0cyBsb2cgbGV2ZWwgZm9yIGFsbCBGaXJlYmFzZSBTREtzLlxyXG4gKlxyXG4gKiBBbGwgb2YgdGhlIGxvZyB0eXBlcyBhYm92ZSB0aGUgY3VycmVudCBsb2cgbGV2ZWwgYXJlIGNhcHR1cmVkIChpLmUuIGlmXHJcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgaW5mb2AsIGVycm9ycyBhcmUgbG9nZ2VkLCBidXQgYGRlYnVnYCBhbmRcclxuICogYHZlcmJvc2VgIGxvZ3MgYXJlIG5vdCkuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxvZ0xldmVsKSB7XHJcbiAgICBsb2dnZXIkMS5zZXRMb2dMZXZlbChsb2dMZXZlbCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIERCX05BTUUgPSAnZmlyZWJhc2UtaGVhcnRiZWF0LWRhdGFiYXNlJztcclxudmFyIERCX1ZFUlNJT04gPSAxO1xyXG52YXIgU1RPUkVfTkFNRSA9ICdmaXJlYmFzZS1oZWFydGJlYXQtc3RvcmUnO1xyXG52YXIgZGJQcm9taXNlID0gbnVsbDtcclxuZnVuY3Rpb24gZ2V0RGJQcm9taXNlKCkge1xyXG4gICAgaWYgKCFkYlByb21pc2UpIHtcclxuICAgICAgICBkYlByb21pc2UgPSBpZGIub3BlbkRCKERCX05BTUUsIERCX1ZFUlNJT04sIHtcclxuICAgICAgICAgICAgdXBncmFkZTogZnVuY3Rpb24gKGRiLCBvbGRWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB1c2UgJ2JyZWFrJyBpbiB0aGlzIHN3aXRjaCBzdGF0ZW1lbnQsIHRoZSBmYWxsLXRocm91Z2hcclxuICAgICAgICAgICAgICAgIC8vIGJlaGF2aW9yIGlzIHdoYXQgd2Ugd2FudCwgYmVjYXVzZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgdmVyc2lvbnMgYmV0d2VlblxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIG9sZCB2ZXJzaW9uIGFuZCB0aGUgY3VycmVudCB2ZXJzaW9uLCB3ZSB3YW50IEFMTCB0aGUgbWlncmF0aW9uc1xyXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBjb3JyZXNwb25kIHRvIHRob3NlIHZlcnNpb25zIHRvIHJ1biwgbm90IG9ubHkgdGhlIGxhc3Qgb25lLlxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvbGRWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkVfTkFNRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaS9pT1MgYnJvd3NlcnMgdGhyb3cgb2NjYXNpb25hbCBleGNlcHRpb25zIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkYi5jcmVhdGVPYmplY3RTdG9yZSgpIHRoYXQgbWF5IGJlIGEgYnVnLiBBdm9pZCBibG9ja2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHJlc3Qgb2YgdGhlIGFwcCBmdW5jdGlvbmFsaXR5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImlkYi1vcGVuXCIgLyogQXBwRXJyb3IuSURCX09QRU4gKi8sIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXJyb3JNZXNzYWdlOiBlLm1lc3NhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGJQcm9taXNlO1xyXG59XHJcbmZ1bmN0aW9uIHJlYWRIZWFydGJlYXRzRnJvbUluZGV4ZWREQihhcHApIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGIsIHR4LCByZXN1bHQsIGVfMSwgaWRiR2V0RXJyb3I7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCA0LCAsIDVdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXREYlByb21pc2UoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZGIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHggPSBkYi50cmFuc2FjdGlvbihTVE9SRV9OQU1FKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0eC5vYmplY3RTdG9yZShTVE9SRV9OQU1FKS5nZXQoY29tcHV0ZUtleShhcHApKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGFscmVhZHkgaGF2ZSB0aGUgdmFsdWUgYnV0IHR4LmRvbmUgY2FuIHRocm93LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gYXdhaXQgaXQgaGVyZSB0byBjYXRjaCBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0eC5kb25lXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBhbHJlYWR5IGhhdmUgdGhlIHZhbHVlIGJ1dCB0eC5kb25lIGNhbiB0aHJvdyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGF3YWl0IGl0IGhlcmUgdG8gY2F0Y2ggZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZV8xIGluc3RhbmNlb2YgdXRpbC5GaXJlYmFzZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKGVfMS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkYkdldEVycm9yID0gRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpZGItZ2V0XCIgLyogQXBwRXJyb3IuSURCX0dFVCAqLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvck1lc3NhZ2U6IGVfMSA9PT0gbnVsbCB8fCBlXzEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVfMS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihpZGJHZXRFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gd3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIoYXBwLCBoZWFydGJlYXRPYmplY3QpIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGIsIHR4LCBvYmplY3RTdG9yZSwgZV8yLCBpZGJHZXRFcnJvcjtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDQsICwgNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldERiUHJvbWlzZSgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBkYiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0eCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RTdG9yZSA9IHR4Lm9iamVjdFN0b3JlKFNUT1JFX05BTUUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG9iamVjdFN0b3JlLnB1dChoZWFydGJlYXRPYmplY3QsIGNvbXB1dGVLZXkoYXBwKSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0eC5kb25lXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlXzIgaW5zdGFuY2VvZiB1dGlsLkZpcmViYXNlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oZV8yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRiR2V0RXJyb3IgPSBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImlkYi1zZXRcIiAvKiBBcHBFcnJvci5JREJfV1JJVEUgKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXJyb3JNZXNzYWdlOiBlXzIgPT09IG51bGwgfHwgZV8yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlXzIubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oaWRiR2V0RXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXB1dGVLZXkoYXBwKSB7XHJcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoYXBwLm5hbWUsIFwiIVwiKS5jb25jYXQoYXBwLm9wdGlvbnMuYXBwSWQpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBNQVhfSEVBREVSX0JZVEVTID0gMTAyNDtcclxuLy8gMzAgZGF5c1xyXG52YXIgU1RPUkVEX0hFQVJUQkVBVF9SRVRFTlRJT05fTUFYX01JTExJUyA9IDMwICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxudmFyIEhlYXJ0YmVhdFNlcnZpY2VJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSGVhcnRiZWF0U2VydmljZUltcGwoY29udGFpbmVyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbi1tZW1vcnkgY2FjaGUgZm9yIGhlYXJ0YmVhdHMsIHVzZWQgYnkgZ2V0SGVhcnRiZWF0c0hlYWRlcigpIHRvIGdlbmVyYXRlXHJcbiAgICAgICAgICogdGhlIGhlYWRlciBzdHJpbmcuXHJcbiAgICAgICAgICogU3RvcmVzIG9uZSByZWNvcmQgcGVyIGRhdGUuIFRoaXMgd2lsbCBiZSBjb25zb2xpZGF0ZWQgaW50byB0aGUgc3RhbmRhcmRcclxuICAgICAgICAgKiBmb3JtYXQgb2Ygb25lIHJlY29yZCBwZXIgdXNlciBhZ2VudCBzdHJpbmcgYmVmb3JlIGJlaW5nIHNlbnQgYXMgYSBoZWFkZXIuXHJcbiAgICAgICAgICogUG9wdWxhdGVkIGZyb20gaW5kZXhlZERCIHdoZW4gdGhlIGNvbnRyb2xsZXIgaXMgaW5zdGFudGlhdGVkIGFuZCBzaG91bGRcclxuICAgICAgICAgKiBiZSBrZXB0IGluIHN5bmMgd2l0aCBpbmRleGVkREIuXHJcbiAgICAgICAgICogTGVhdmUgcHVibGljIGZvciBlYXNpZXIgdGVzdGluZy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUgPSBudWxsO1xyXG4gICAgICAgIHZhciBhcHAgPSB0aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcmFnZSA9IG5ldyBIZWFydGJlYXRTdG9yYWdlSW1wbChhcHApO1xyXG4gICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZVByb21pc2UgPSB0aGlzLl9zdG9yYWdlLnJlYWQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHRvIHJlcG9ydCBhIGhlYXJ0YmVhdC4gVGhlIGZ1bmN0aW9uIHdpbGwgZ2VuZXJhdGVcclxuICAgICAqIGEgSGVhcnRiZWF0c0J5VXNlckFnZW50IG9iamVjdCwgdXBkYXRlIGhlYXJ0YmVhdHNDYWNoZSwgYW5kIHBlcnNpc3QgaXRcclxuICAgICAqIHRvIEluZGV4ZWREQi5cclxuICAgICAqIE5vdGUgdGhhdCB3ZSBvbmx5IHN0b3JlIG9uZSBoZWFydGJlYXQgcGVyIGRheS4gU28gaWYgYSBoZWFydGJlYXQgZm9yIHRvZGF5IGlzXHJcbiAgICAgKiBhbHJlYWR5IGxvZ2dlZCwgc3Vic2VxdWVudCBjYWxscyB0byB0aGlzIGZ1bmN0aW9uIGluIHRoZSBzYW1lIGRheSB3aWxsIGJlIGlnbm9yZWQuXHJcbiAgICAgKi9cclxuICAgIEhlYXJ0YmVhdFNlcnZpY2VJbXBsLnByb3RvdHlwZS50cmlnZ2VySGVhcnRiZWF0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcGxhdGZvcm1Mb2dnZXIsIGFnZW50LCBkYXRlLCBfYztcclxuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm1Mb2dnZXIgPSB0aGlzLmNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFByb3ZpZGVyKCdwbGF0Zm9ybS1sb2dnZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2VudCA9IHBsYXRmb3JtTG9nZ2VyLmdldFBsYXRmb3JtSW5mb1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0gZ2V0VVRDRGF0ZVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgoKF9hID0gdGhpcy5faGVhcnRiZWF0c0NhY2hlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaGVhcnRiZWF0cykgPT0gbnVsbCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZVByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2MuX2hlYXJ0YmVhdHNDYWNoZSA9IF9kLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZmFpbGVkIHRvIGNvbnN0cnVjdCBhIGhlYXJ0YmVhdHMgY2FjaGUsIHRoZW4gcmV0dXJuIGltbWVkaWF0ZWx5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChfYiA9IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmhlYXJ0YmVhdHMpID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3Qgc3RvcmUgYSBoZWFydGJlYXQgaWYgb25lIGlzIGFscmVhZHkgc3RvcmVkIGZvciB0aGlzIGRheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvciBpZiBhIGhlYWRlciBoYXMgYWxyZWFkeSBiZWVuIHNlbnQgdG9kYXkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oZWFydGJlYXRzQ2FjaGUubGFzdFNlbnRIZWFydGJlYXREYXRlID09PSBkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5zb21lKGZ1bmN0aW9uIChzaW5nbGVEYXRlSGVhcnRiZWF0KSB7IHJldHVybiBzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGUgPT09IGRhdGU7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGVyZSBpcyBubyBlbnRyeSBmb3IgdGhpcyBkYXRlLiBDcmVhdGUgb25lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMucHVzaCh7IGRhdGU6IGRhdGUsIGFnZW50OiBhZ2VudCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZW50cmllcyBvbGRlciB0aGFuIDMwIGRheXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzID0gdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMuZmlsdGVyKGZ1bmN0aW9uIChzaW5nbGVEYXRlSGVhcnRiZWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGJUaW1lc3RhbXAgPSBuZXcgRGF0ZShzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGUpLnZhbHVlT2YoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vdyAtIGhiVGltZXN0YW1wIDw9IFNUT1JFRF9IRUFSVEJFQVRfUkVURU5USU9OX01BWF9NSUxMSVM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5fc3RvcmFnZS5vdmVyd3JpdGUodGhpcy5faGVhcnRiZWF0c0NhY2hlKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyB3aGljaCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIGhlYXJ0YmVhdC1zcGVjaWZpYyBoZWFkZXIgZGlyZWN0bHkuXHJcbiAgICAgKiBJdCBhbHNvIGNsZWFycyBhbGwgaGVhcnRiZWF0cyBmcm9tIG1lbW9yeSBhcyB3ZWxsIGFzIGluIEluZGV4ZWREQi5cclxuICAgICAqXHJcbiAgICAgKiBOT1RFOiBDb25zdW1pbmcgcHJvZHVjdCBTREtzIHNob3VsZCBub3Qgc2VuZCB0aGUgaGVhZGVyIGlmIHRoaXMgbWV0aG9kXHJcbiAgICAgKiByZXR1cm5zIGFuIGVtcHR5IHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgSGVhcnRiZWF0U2VydmljZUltcGwucHJvdG90eXBlLmdldEhlYXJ0YmVhdHNIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUsIF9iLCBoZWFydGJlYXRzVG9TZW5kLCB1bnNlbnRFbnRyaWVzLCBoZWFkZXJTdHJpbmc7XHJcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9PT0gbnVsbCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBzdGlsbCBudWxsIG9yIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlcmUgaXMgbm8gZGF0YSB0byBzZW5kLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChfYSA9IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhlYXJ0YmVhdHMpID09IG51bGwgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sICcnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0gZ2V0VVRDRGF0ZVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IGV4dHJhY3RIZWFydGJlYXRzRm9ySGVhZGVyKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzKSwgaGVhcnRiZWF0c1RvU2VuZCA9IF9iLmhlYXJ0YmVhdHNUb1NlbmQsIHVuc2VudEVudHJpZXMgPSBfYi51bnNlbnRFbnRyaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJTdHJpbmcgPSB1dGlsLmJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KHsgdmVyc2lvbjogMiwgaGVhcnRiZWF0czogaGVhcnRiZWF0c1RvU2VuZCB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIGxhc3Qgc2VudCBkYXRlIHRvIHByZXZlbnQgYW5vdGhlciBiZWluZyBsb2dnZWQvc2VudCBmb3IgdGhlIHNhbWUgZGF5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUubGFzdFNlbnRIZWFydGJlYXREYXRlID0gZGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodW5zZW50RW50cmllcy5sZW5ndGggPiAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIGFueSB1bnNlbnQgZW50cmllcyBpZiB0aGV5IGV4aXN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cyA9IHVuc2VudEVudHJpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgc2VlbXMgbW9yZSBsaWtlbHkgdGhhbiBlbXB0eWluZyB0aGUgYXJyYXkgKGJlbG93KSB0byBsZWFkIHRvIHNvbWUgb2RkIHN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIHRoZSBjYWNoZSBpc24ndCBlbXB0eSBhbmQgdGhpcyB3aWxsIGJlIGNhbGxlZCBhZ2FpbiBvbiB0aGUgbmV4dCByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgaXMgcHJvYmFibHkgc2FmZXN0IGlmIHdlIGF3YWl0IGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgc2VlbXMgbW9yZSBsaWtlbHkgdGhhbiBlbXB0eWluZyB0aGUgYXJyYXkgKGJlbG93KSB0byBsZWFkIHRvIHNvbWUgb2RkIHN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIHRoZSBjYWNoZSBpc24ndCBlbXB0eSBhbmQgdGhpcyB3aWxsIGJlIGNhbGxlZCBhZ2FpbiBvbiB0aGUgbmV4dCByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgaXMgcHJvYmFibHkgc2FmZXN0IGlmIHdlIGF3YWl0IGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IHdhaXQgZm9yIHRoaXMsIHRvIHJlZHVjZSBsYXRlbmN5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIHRoaXMuX3N0b3JhZ2Uub3ZlcndyaXRlKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gNTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovLCBoZWFkZXJTdHJpbmddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSGVhcnRiZWF0U2VydmljZUltcGw7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGdldFVUQ0RhdGVTdHJpbmcoKSB7XHJcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8gUmV0dXJucyBkYXRlIGZvcm1hdCAnWVlZWS1NTS1ERCdcclxuICAgIHJldHVybiB0b2RheS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCk7XHJcbn1cclxuZnVuY3Rpb24gZXh0cmFjdEhlYXJ0YmVhdHNGb3JIZWFkZXIoaGVhcnRiZWF0c0NhY2hlLCBtYXhTaXplKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIGlmIChtYXhTaXplID09PSB2b2lkIDApIHsgbWF4U2l6ZSA9IE1BWF9IRUFERVJfQllURVM7IH1cclxuICAgIC8vIEhlYXJ0YmVhdHMgZ3JvdXBlZCBieSB1c2VyIGFnZW50IGluIHRoZSBzdGFuZGFyZCBmb3JtYXQgdG8gYmUgc2VudCBpblxyXG4gICAgLy8gdGhlIGhlYWRlci5cclxuICAgIHZhciBoZWFydGJlYXRzVG9TZW5kID0gW107XHJcbiAgICAvLyBTaW5nbGUgZGF0ZSBmb3JtYXQgaGVhcnRiZWF0cyB0aGF0IGFyZSBub3Qgc2VudC5cclxuICAgIHZhciB1bnNlbnRFbnRyaWVzID0gaGVhcnRiZWF0c0NhY2hlLnNsaWNlKCk7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChzaW5nbGVEYXRlSGVhcnRiZWF0KSB7XHJcbiAgICAgICAgLy8gTG9vayBmb3IgYW4gZXhpc3RpbmcgZW50cnkgd2l0aCB0aGUgc2FtZSB1c2VyIGFnZW50LlxyXG4gICAgICAgIHZhciBoZWFydGJlYXRFbnRyeSA9IGhlYXJ0YmVhdHNUb1NlbmQuZmluZChmdW5jdGlvbiAoaGIpIHsgcmV0dXJuIGhiLmFnZW50ID09PSBzaW5nbGVEYXRlSGVhcnRiZWF0LmFnZW50OyB9KTtcclxuICAgICAgICBpZiAoIWhlYXJ0YmVhdEVudHJ5KSB7XHJcbiAgICAgICAgICAgIC8vIElmIG5vIGVudHJ5IGZvciB0aGlzIHVzZXIgYWdlbnQgZXhpc3RzLCBjcmVhdGUgb25lLlxyXG4gICAgICAgICAgICBoZWFydGJlYXRzVG9TZW5kLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYWdlbnQ6IHNpbmdsZURhdGVIZWFydGJlYXQuYWdlbnQsXHJcbiAgICAgICAgICAgICAgICBkYXRlczogW3NpbmdsZURhdGVIZWFydGJlYXQuZGF0ZV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudEJ5dGVzKGhlYXJ0YmVhdHNUb1NlbmQpID4gbWF4U2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGhlYWRlciB3b3VsZCBleGNlZWQgbWF4IHNpemUsIHJlbW92ZSB0aGUgYWRkZWQgaGVhcnRiZWF0XHJcbiAgICAgICAgICAgICAgICAvLyBlbnRyeSBhbmQgc3RvcCBhZGRpbmcgdG8gdGhlIGhlYWRlci5cclxuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdHNUb1NlbmQucG9wKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFydGJlYXRFbnRyeS5kYXRlcy5wdXNoKHNpbmdsZURhdGVIZWFydGJlYXQuZGF0ZSk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBoZWFkZXIgd291bGQgZXhjZWVkIG1heCBzaXplLCByZW1vdmUgdGhlIGFkZGVkIGRhdGVcclxuICAgICAgICAgICAgLy8gYW5kIHN0b3AgYWRkaW5nIHRvIHRoZSBoZWFkZXIuXHJcbiAgICAgICAgICAgIGlmIChjb3VudEJ5dGVzKGhlYXJ0YmVhdHNUb1NlbmQpID4gbWF4U2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgaGVhcnRiZWF0RW50cnkuZGF0ZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFBvcCB1bnNlbnQgZW50cnkgZnJvbSBxdWV1ZS4gKFNraXBwZWQgaWYgYWRkaW5nIHRoZSBlbnRyeSBleGNlZWRlZFxyXG4gICAgICAgIC8vIHF1b3RhIGFuZCB0aGUgbG9vcCBicmVha3MgZWFybHkuKVxyXG4gICAgICAgIHVuc2VudEVudHJpZXMgPSB1bnNlbnRFbnRyaWVzLnNsaWNlKDEpO1xyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgaGVhcnRiZWF0c0NhY2hlXzEgPSB0c2xpYi5fX3ZhbHVlcyhoZWFydGJlYXRzQ2FjaGUpLCBoZWFydGJlYXRzQ2FjaGVfMV8xID0gaGVhcnRiZWF0c0NhY2hlXzEubmV4dCgpOyAhaGVhcnRiZWF0c0NhY2hlXzFfMS5kb25lOyBoZWFydGJlYXRzQ2FjaGVfMV8xID0gaGVhcnRiZWF0c0NhY2hlXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBzaW5nbGVEYXRlSGVhcnRiZWF0ID0gaGVhcnRiZWF0c0NhY2hlXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKHNpbmdsZURhdGVIZWFydGJlYXQpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVfMSA9PT0gXCJicmVha1wiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChoZWFydGJlYXRzQ2FjaGVfMV8xICYmICFoZWFydGJlYXRzQ2FjaGVfMV8xLmRvbmUgJiYgKF9hID0gaGVhcnRiZWF0c0NhY2hlXzEucmV0dXJuKSkgX2EuY2FsbChoZWFydGJlYXRzQ2FjaGVfMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhcnRiZWF0c1RvU2VuZDogaGVhcnRiZWF0c1RvU2VuZCxcclxuICAgICAgICB1bnNlbnRFbnRyaWVzOiB1bnNlbnRFbnRyaWVzXHJcbiAgICB9O1xyXG59XHJcbnZhciBIZWFydGJlYXRTdG9yYWdlSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEhlYXJ0YmVhdFN0b3JhZ2VJbXBsKGFwcCkge1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIHRoaXMuX2NhblVzZUluZGV4ZWREQlByb21pc2UgPSB0aGlzLnJ1bkluZGV4ZWREQkVudmlyb25tZW50Q2hlY2soKTtcclxuICAgIH1cclxuICAgIEhlYXJ0YmVhdFN0b3JhZ2VJbXBsLnByb3RvdHlwZS5ydW5JbmRleGVkREJFbnZpcm9ubWVudENoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsLmlzSW5kZXhlZERCQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHV0aWwudmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9KV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVhZCBhbGwgaGVhcnRiZWF0cy5cclxuICAgICAqL1xyXG4gICAgSGVhcnRiZWF0U3RvcmFnZUltcGwucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2FuVXNlSW5kZXhlZERCLCBpZGJIZWFydGJlYXRPYmplY3Q7XHJcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX2NhblVzZUluZGV4ZWREQlByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuVXNlSW5kZXhlZERCID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFjYW5Vc2VJbmRleGVkREIpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBoZWFydGJlYXRzOiBbXSB9XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIHJlYWRIZWFydGJlYXRzRnJvbUluZGV4ZWREQih0aGlzLmFwcCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRiSGVhcnRiZWF0T2JqZWN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWRiSGVhcnRiZWF0T2JqZWN0ID09PSBudWxsIHx8IGlkYkhlYXJ0YmVhdE9iamVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaWRiSGVhcnRiZWF0T2JqZWN0LmhlYXJ0YmVhdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBpZGJIZWFydGJlYXRPYmplY3RdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHsgaGVhcnRiZWF0czogW10gfV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy8gb3ZlcndyaXRlIHRoZSBzdG9yYWdlIHdpdGggdGhlIHByb3ZpZGVkIGhlYXJ0YmVhdHNcclxuICAgIEhlYXJ0YmVhdFN0b3JhZ2VJbXBsLnByb3RvdHlwZS5vdmVyd3JpdGUgPSBmdW5jdGlvbiAoaGVhcnRiZWF0c09iamVjdCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjYW5Vc2VJbmRleGVkREIsIGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdDtcclxuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5Vc2VJbmRleGVkREIgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWNhblVzZUluZGV4ZWREQikgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVhZCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHdyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCKHRoaXMuYXBwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNlbnRIZWFydGJlYXREYXRlOiAoX2EgPSBoZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFydGJlYXRzOiBoZWFydGJlYXRzT2JqZWN0LmhlYXJ0YmVhdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy8gYWRkIGhlYXJ0YmVhdHNcclxuICAgIEhlYXJ0YmVhdFN0b3JhZ2VJbXBsLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoaGVhcnRiZWF0c09iamVjdCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjYW5Vc2VJbmRleGVkREIsIGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdDtcclxuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5Vc2VJbmRleGVkREIgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWNhblVzZUluZGV4ZWREQikgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVhZCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHdyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCKHRoaXMuYXBwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNlbnRIZWFydGJlYXREYXRlOiAoX2EgPSBoZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFydGJlYXRzOiB0c2xpYi5fX3NwcmVhZEFycmF5KHRzbGliLl9fc3ByZWFkQXJyYXkoW10sIHRzbGliLl9fcmVhZChleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QuaGVhcnRiZWF0cyksIGZhbHNlKSwgdHNsaWIuX19yZWFkKGhlYXJ0YmVhdHNPYmplY3QuaGVhcnRiZWF0cyksIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSGVhcnRiZWF0U3RvcmFnZUltcGw7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgYnl0ZXMgb2YgYSBIZWFydGJlYXRzQnlVc2VyQWdlbnQgYXJyYXkgYWZ0ZXIgYmVpbmcgd3JhcHBlZFxyXG4gKiBpbiBhIHBsYXRmb3JtIGxvZ2dpbmcgaGVhZGVyIEpTT04gb2JqZWN0LCBzdHJpbmdpZmllZCwgYW5kIGNvbnZlcnRlZFxyXG4gKiB0byBiYXNlIDY0LlxyXG4gKi9cclxuZnVuY3Rpb24gY291bnRCeXRlcyhoZWFydGJlYXRzQ2FjaGUpIHtcclxuICAgIC8vIGJhc2U2NCBoYXMgYSByZXN0cmljdGVkIHNldCBvZiBjaGFyYWN0ZXJzLCBhbGwgb2Ygd2hpY2ggc2hvdWxkIGJlIDEgYnl0ZS5cclxuICAgIHJldHVybiB1dGlsLmJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKFxyXG4gICAgLy8gaGVhcnRiZWF0c0NhY2hlIHdyYXBwZXIgcHJvcGVydGllc1xyXG4gICAgSlNPTi5zdHJpbmdpZnkoeyB2ZXJzaW9uOiAyLCBoZWFydGJlYXRzOiBoZWFydGJlYXRzQ2FjaGUgfSkpLmxlbmd0aDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlckNvcmVDb21wb25lbnRzKHZhcmlhbnQpIHtcclxuICAgIF9yZWdpc3RlckNvbXBvbmVudChuZXcgY29tcG9uZW50LkNvbXBvbmVudCgncGxhdGZvcm0tbG9nZ2VyJywgZnVuY3Rpb24gKGNvbnRhaW5lcikgeyByZXR1cm4gbmV3IFBsYXRmb3JtTG9nZ2VyU2VydmljZUltcGwoY29udGFpbmVyKTsgfSwgXCJQUklWQVRFXCIgLyogQ29tcG9uZW50VHlwZS5QUklWQVRFICovKSk7XHJcbiAgICBfcmVnaXN0ZXJDb21wb25lbnQobmV3IGNvbXBvbmVudC5Db21wb25lbnQoJ2hlYXJ0YmVhdCcsIGZ1bmN0aW9uIChjb250YWluZXIpIHsgcmV0dXJuIG5ldyBIZWFydGJlYXRTZXJ2aWNlSW1wbChjb250YWluZXIpOyB9LCBcIlBSSVZBVEVcIiAvKiBDb21wb25lbnRUeXBlLlBSSVZBVEUgKi8pKTtcclxuICAgIC8vIFJlZ2lzdGVyIGBhcHBgIHBhY2thZ2UuXHJcbiAgICByZWdpc3RlclZlcnNpb24obmFtZSRvLCB2ZXJzaW9uJDEsIHZhcmlhbnQpO1xyXG4gICAgLy8gQlVJTERfVEFSR0VUIHdpbGwgYmUgcmVwbGFjZWQgYnkgdmFsdWVzIGxpa2UgZXNtNSwgZXNtMjAxNywgY2pzNSwgZXRjIGR1cmluZyB0aGUgY29tcGlsYXRpb25cclxuICAgIHJlZ2lzdGVyVmVyc2lvbihuYW1lJG8sIHZlcnNpb24kMSwgJ2NqczUnKTtcclxuICAgIC8vIFJlZ2lzdGVyIHBsYXRmb3JtIFNESyBpZGVudGlmaWVyIChubyB2ZXJzaW9uKS5cclxuICAgIHJlZ2lzdGVyVmVyc2lvbignZmlyZS1qcycsICcnKTtcclxufVxuXG4vKipcclxuICogRmlyZWJhc2UgQXBwXHJcbiAqXHJcbiAqIEByZW1hcmtzIFRoaXMgcGFja2FnZSBjb29yZGluYXRlcyB0aGUgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoZSBkaWZmZXJlbnQgRmlyZWJhc2UgY29tcG9uZW50c1xyXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cclxuICovXHJcbnJlZ2lzdGVyQ29yZUNvbXBvbmVudHMoJ25vZGUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGaXJlYmFzZUVycm9yJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWwuRmlyZWJhc2VFcnJvcjsgfVxufSk7XG5leHBvcnRzLlNES19WRVJTSU9OID0gU0RLX1ZFUlNJT047XG5leHBvcnRzLl9ERUZBVUxUX0VOVFJZX05BTUUgPSBERUZBVUxUX0VOVFJZX05BTUU7XG5leHBvcnRzLl9hZGRDb21wb25lbnQgPSBfYWRkQ29tcG9uZW50O1xuZXhwb3J0cy5fYWRkT3JPdmVyd3JpdGVDb21wb25lbnQgPSBfYWRkT3JPdmVyd3JpdGVDb21wb25lbnQ7XG5leHBvcnRzLl9hcHBzID0gX2FwcHM7XG5leHBvcnRzLl9jbGVhckNvbXBvbmVudHMgPSBfY2xlYXJDb21wb25lbnRzO1xuZXhwb3J0cy5fY29tcG9uZW50cyA9IF9jb21wb25lbnRzO1xuZXhwb3J0cy5fZ2V0UHJvdmlkZXIgPSBfZ2V0UHJvdmlkZXI7XG5leHBvcnRzLl9pc0ZpcmViYXNlQXBwID0gX2lzRmlyZWJhc2VBcHA7XG5leHBvcnRzLl9pc0ZpcmViYXNlU2VydmVyQXBwID0gX2lzRmlyZWJhc2VTZXJ2ZXJBcHA7XG5leHBvcnRzLl9yZWdpc3RlckNvbXBvbmVudCA9IF9yZWdpc3RlckNvbXBvbmVudDtcbmV4cG9ydHMuX3JlbW92ZVNlcnZpY2VJbnN0YW5jZSA9IF9yZW1vdmVTZXJ2aWNlSW5zdGFuY2U7XG5leHBvcnRzLl9zZXJ2ZXJBcHBzID0gX3NlcnZlckFwcHM7XG5leHBvcnRzLmRlbGV0ZUFwcCA9IGRlbGV0ZUFwcDtcbmV4cG9ydHMuZ2V0QXBwID0gZ2V0QXBwO1xuZXhwb3J0cy5nZXRBcHBzID0gZ2V0QXBwcztcbmV4cG9ydHMuaW5pdGlhbGl6ZUFwcCA9IGluaXRpYWxpemVBcHA7XG5leHBvcnRzLmluaXRpYWxpemVTZXJ2ZXJBcHAgPSBpbml0aWFsaXplU2VydmVyQXBwO1xuZXhwb3J0cy5vbkxvZyA9IG9uTG9nO1xuZXhwb3J0cy5yZWdpc3RlclZlcnNpb24gPSByZWdpc3RlclZlcnNpb247XG5leHBvcnRzLnNldExvZ0xldmVsID0gc2V0TG9nTGV2ZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5janMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ0BmaXJlYmFzZS91dGlsJyk7XG5cbi8qKlxyXG4gKiBDb21wb25lbnQgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuIGBhdXRoYCwgYGF1dGgtaW50ZXJuYWxgXHJcbiAqL1xyXG52YXIgQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIHB1YmxpYyBzZXJ2aWNlIG5hbWUsIGUuZy4gYXBwLCBhdXRoLCBmaXJlc3RvcmUsIGRhdGFiYXNlXHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VGYWN0b3J5IFNlcnZpY2UgZmFjdG9yeSByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIHB1YmxpYyBpbnRlcmZhY2VcclxuICAgICAqIEBwYXJhbSB0eXBlIHdoZXRoZXIgdGhlIHNlcnZpY2UgcHJvdmlkZWQgYnkgdGhlIGNvbXBvbmVudCBpcyBwdWJsaWMgb3IgcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBDb21wb25lbnQobmFtZSwgaW5zdGFuY2VGYWN0b3J5LCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlRmFjdG9yeSA9IGluc3RhbmNlRmFjdG9yeTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVJbnN0YW5jZXMgPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcm9wZXJ0aWVzIHRvIGJlIGFkZGVkIHRvIHRoZSBzZXJ2aWNlIG5hbWVzcGFjZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuc2VydmljZVByb3BzID0ge307XHJcbiAgICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTW9kZSA9IFwiTEFaWVwiIC8qIEluc3RhbnRpYXRpb25Nb2RlLkxBWlkgKi87XHJcbiAgICAgICAgdGhpcy5vbkluc3RhbmNlQ3JlYXRlZCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldEluc3RhbnRpYXRpb25Nb2RlID0gZnVuY3Rpb24gKG1vZGUpIHtcclxuICAgICAgICB0aGlzLmluc3RhbnRpYXRpb25Nb2RlID0gbW9kZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldE11bHRpcGxlSW5zdGFuY2VzID0gZnVuY3Rpb24gKG11bHRpcGxlSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXBsZUluc3RhbmNlcyA9IG11bHRpcGxlSW5zdGFuY2VzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuc2V0U2VydmljZVByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlUHJvcHMgPSBwcm9wcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbkluc3RhbmNlQ3JlYXRlZCA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21wb25lbnQ7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFByb3ZpZGVyIGZvciBpbnN0YW5jZSBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gJ2F1dGgnLCAnYXV0aC1pbnRlcm5hbCdcclxuICogTmFtZVNlcnZpY2VNYXBwaW5nW1RdIGlzIGFuIGFsaWFzIGZvciB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2VcclxuICovXHJcbnZhciBQcm92aWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFByb3ZpZGVyKG5hbWUsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMub25Jbml0Q2FsbGJhY2tzID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBBIHByb3ZpZGVyIGNhbiBwcm92aWRlIG11bGl0cGxlIGluc3RhbmNlcyBvZiBhIHNlcnZpY2VcclxuICAgICAqIGlmIHRoaXMuY29tcG9uZW50Lm11bHRpcGxlSW5zdGFuY2VzIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIC8vIGlmIG11bHRpcGxlSW5zdGFuY2VzIGlzIG5vdCBzdXBwb3J0ZWQsIHVzZSB0aGUgZGVmYXVsdCBuYW1lXHJcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlc0RlZmVycmVkLmhhcyhub3JtYWxpemVkSWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gbmV3IHV0aWwuRGVmZXJyZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5zZXQobm9ybWFsaXplZElkZW50aWZpZXIsIGRlZmVycmVkKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZChub3JtYWxpemVkSWRlbnRpZmllcikgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkQXV0b0luaXRpYWxpemUoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgc2VydmljZSBpZiBpdCBjYW4gYmUgYXV0by1pbml0aWFsaXplZFxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSB0aHJvd3MgYW4gZXhjZXB0aW9uIGR1cmluZyBnZXQoKSwgaXQgc2hvdWxkIG5vdCBjYXVzZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgZmF0YWwgZXJyb3IuIFdlIGp1c3QgcmV0dXJuIHRoZSB1bnJlc29sdmVkIHByb21pc2UgaW4gdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmdldChub3JtYWxpemVkSWRlbnRpZmllcikucHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuZ2V0SW1tZWRpYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgLy8gaWYgbXVsdGlwbGVJbnN0YW5jZXMgaXMgbm90IHN1cHBvcnRlZCwgdXNlIHRoZSBkZWZhdWx0IG5hbWVcclxuICAgICAgICB2YXIgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaWRlbnRpZmllcik7XHJcbiAgICAgICAgdmFyIG9wdGlvbmFsID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wdGlvbmFsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEluIGNhc2UgYSBjb21wb25lbnQgaXMgbm90IGluaXRpYWxpemVkIGFuZCBzaG91bGQvY2FuIG5vdCBiZSBhdXRvLWluaXRpYWxpemVkIGF0IHRoZSBtb21lbnQsIHJldHVybiBudWxsIGlmIHRoZSBvcHRpb25hbCBmbGFnIGlzIHNldCwgb3IgdGhyb3dcclxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiU2VydmljZSBcIi5jb25jYXQodGhpcy5uYW1lLCBcIiBpcyBub3QgYXZhaWxhYmxlXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuc2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHZhciBlXzEsIF9hO1xyXG4gICAgICAgIGlmIChjb21wb25lbnQubmFtZSAhPT0gdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzbWF0Y2hpbmcgQ29tcG9uZW50IFwiLmNvbmNhdChjb21wb25lbnQubmFtZSwgXCIgZm9yIFByb3ZpZGVyIFwiKS5jb25jYXQodGhpcy5uYW1lLCBcIi5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJDb21wb25lbnQgZm9yIFwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiIGhhcyBhbHJlYWR5IGJlZW4gcHJvdmlkZWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICAvLyByZXR1cm4gZWFybHkgd2l0aG91dCBhdHRlbXB0aW5nIHRvIGluaXRpYWxpemUgdGhlIGNvbXBvbmVudCBpZiB0aGUgY29tcG9uZW50IHJlcXVpcmVzIGV4cGxpY2l0IGluaXRpYWxpemF0aW9uIChjYWxsaW5nIGBQcm92aWRlci5pbml0aWFsaXplKClgKVxyXG4gICAgICAgIGlmICghdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgdGhlIHNlcnZpY2UgaXMgZWFnZXIsIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgaW5zdGFuY2VcclxuICAgICAgICBpZiAoaXNDb21wb25lbnRFYWdlcihjb21wb25lbnQpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoeyBpbnN0YW5jZUlkZW50aWZpZXI6IERFRkFVTFRfRU5UUllfTkFNRSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSBmb3IgYW4gZWFnZXIgQ29tcG9uZW50IHRocm93cyBhbiBleGNlcHRpb24gZHVyaW5nIHRoZSBlYWdlclxyXG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGl6YXRpb24sIGl0IHNob3VsZCBub3QgY2F1c2UgYSBmYXRhbCBlcnJvci5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEludmVzdGlnYXRlIGlmIHdlIG5lZWQgdG8gbWFrZSBpdCBjb25maWd1cmFibGUsIGJlY2F1c2Ugc29tZSBjb21wb25lbnQgbWF5IHdhbnQgdG8gY2F1c2VcclxuICAgICAgICAgICAgICAgIC8vIGEgZmF0YWwgZXJyb3IgaW4gdGhpcyBjYXNlP1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzZXJ2aWNlIGluc3RhbmNlcyBmb3IgdGhlIHBlbmRpbmcgcHJvbWlzZXMgYW5kIHJlc29sdmUgdGhlbVxyXG4gICAgICAgICAgICAvLyBOT1RFOiBpZiB0aGlzLm11bHRpcGxlSW5zdGFuY2VzIGlzIGZhbHNlLCBvbmx5IHRoZSBkZWZhdWx0IGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZFxyXG4gICAgICAgICAgICAvLyBhbmQgYWxsIHByb21pc2VzIHdpdGggcmVzb2x2ZSB3aXRoIGl0IHJlZ2FyZGxlc3Mgb2YgdGhlIGlkZW50aWZpZXIuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gdHNsaWIuX192YWx1ZXModGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5lbnRyaWVzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2QgPSB0c2xpYi5fX3JlYWQoX2MudmFsdWUsIDIpLCBpbnN0YW5jZUlkZW50aWZpZXIgPSBfZFswXSwgaW5zdGFuY2VEZWZlcnJlZCA9IF9kWzFdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYGdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoKWAgc2hvdWxkIGFsd2F5cyByZXR1cm4gYSB2YWxpZCBpbnN0YW5jZSBzaW5jZSBhIGNvbXBvbmVudCBpcyBndWFyYW50ZWVkLiB1c2UgISB0byBtYWtlIHR5cGVzY3JpcHQgaGFwcHkuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgZmF0YWwgZXJyb3IuIFdlIGp1c3QgbGVhdmUgdGhlIHByb21pc2UgdW5yZXNvbHZlZC5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmNsZWFySW5zdGFuY2UgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGlmIChpZGVudGlmaWVyID09PSB2b2lkIDApIHsgaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZGVsZXRlKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzT3B0aW9ucy5kZWxldGUoaWRlbnRpZmllcik7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMuZGVsZXRlKGlkZW50aWZpZXIpO1xyXG4gICAgfTtcclxuICAgIC8vIGFwcC5kZWxldGUoKSB3aWxsIGNhbGwgdGhpcyBtZXRob2Qgb24gZXZlcnkgcHJvdmlkZXIgdG8gZGVsZXRlIHRoZSBzZXJ2aWNlc1xyXG4gICAgLy8gVE9ETzogc2hvdWxkIHdlIG1hcmsgdGhlIHByb3ZpZGVyIGFzIGRlbGV0ZWQ/XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNlcnZpY2VzO1xyXG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlcyA9IEFycmF5LmZyb20odGhpcy5pbnN0YW5jZXMudmFsdWVzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbCh0c2xpYi5fX3NwcmVhZEFycmF5KHRzbGliLl9fc3ByZWFkQXJyYXkoW10sIHRzbGliLl9fcmVhZChzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNlcnZpY2UpIHsgcmV0dXJuICdJTlRFUk5BTCcgaW4gc2VydmljZTsgfSkgLy8gbGVnYWN5IHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzZXJ2aWNlKSB7IHJldHVybiBzZXJ2aWNlLklOVEVSTkFMLmRlbGV0ZSgpOyB9KSksIGZhbHNlKSwgdHNsaWIuX19yZWFkKHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2VydmljZSkgeyByZXR1cm4gJ19kZWxldGUnIGluIHNlcnZpY2U7IH0pIC8vIG1vZHVsYXJpemVkIHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzZXJ2aWNlKSB7IHJldHVybiBzZXJ2aWNlLl9kZWxldGUoKTsgfSkpLCBmYWxzZSkpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuaXNDb21wb25lbnRTZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50ICE9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmlzSW5pdGlhbGl6ZWQgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGlmIChpZGVudGlmaWVyID09PSB2b2lkIDApIHsgaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5oYXMoaWRlbnRpZmllcik7XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldE9wdGlvbnMgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGlmIChpZGVudGlmaWVyID09PSB2b2lkIDApIHsgaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc09wdGlvbnMuZ2V0KGlkZW50aWZpZXIpIHx8IHt9O1xyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgICAgICB2YXIgZV8yLCBfYTtcclxuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxyXG4gICAgICAgIHZhciBfYiA9IG9wdHMub3B0aW9ucywgb3B0aW9ucyA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iO1xyXG4gICAgICAgIHZhciBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKG9wdHMuaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiKFwiKS5jb25jYXQobm9ybWFsaXplZElkZW50aWZpZXIsIFwiKSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29tcG9uZW50U2V0KCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJDb21wb25lbnQgXCIuY29uY2F0KHRoaXMubmFtZSwgXCIgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgeWV0XCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllcixcclxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHJlc29sdmUgYW55IHBlbmRpbmcgcHJvbWlzZSB3YWl0aW5nIGZvciB0aGUgc2VydmljZSBpbnN0YW5jZVxyXG4gICAgICAgICAgICBmb3IgKHZhciBfYyA9IHRzbGliLl9fdmFsdWVzKHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZW50cmllcygpKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9lID0gdHNsaWIuX19yZWFkKF9kLnZhbHVlLCAyKSwgaW5zdGFuY2VJZGVudGlmaWVyID0gX2VbMF0sIGluc3RhbmNlRGVmZXJyZWQgPSBfZVsxXTtcclxuICAgICAgICAgICAgICAgIHZhciBub3JtYWxpemVkRGVmZXJyZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkSWRlbnRpZmllciA9PT0gbm9ybWFsaXplZERlZmVycmVkSWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2EgPSBfYy5yZXR1cm4pKSBfYS5jYWxsKF9jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkICBhZnRlciB0aGUgcHJvdmlkZXIgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYnkgY2FsbGluZyBwcm92aWRlci5pbml0aWFsaXplKCkuXHJcbiAgICAgKiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBTWU5DSFJPTk9VU0xZLCBzbyBpdCBzaG91bGQgbm90IGV4ZWN1dGUgYW55IGxvbmdydW5uaW5nIHRhc2tzIGluIG9yZGVyIHRvIG5vdCBibG9jayB0aGUgcHJvZ3JhbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBBbiBvcHRpb25hbCBpbnN0YW5jZSBpZGVudGlmaWVyXHJcbiAgICAgKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVucmVnaXN0ZXIgdGhlIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5vbkluaXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGlkZW50aWZpZXIpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nQ2FsbGJhY2tzID0gKF9hID0gdGhpcy5vbkluaXRDYWxsYmFja3MuZ2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbmV3IFNldCgpO1xyXG4gICAgICAgIGV4aXN0aW5nQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5vbkluaXRDYWxsYmFja3Muc2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyLCBleGlzdGluZ0NhbGxiYWNrcyk7XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlcy5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGV4aXN0aW5nSW5zdGFuY2UsIG5vcm1hbGl6ZWRJZGVudGlmaWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlIG9uSW5pdCBjYWxsYmFja3Mgc3luY2hyb25vdXNseVxyXG4gICAgICogQHBhcmFtIGluc3RhbmNlIHRoZSBzZXJ2aWNlIGluc3RhbmNlYFxyXG4gICAgICovXHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuaW52b2tlT25Jbml0Q2FsbGJhY2tzID0gZnVuY3Rpb24gKGluc3RhbmNlLCBpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgdmFyIGVfMywgX2E7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMub25Jbml0Q2FsbGJhY2tzLmdldChpZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGNhbGxiYWNrc18xID0gdHNsaWIuX192YWx1ZXMoY2FsbGJhY2tzKSwgY2FsbGJhY2tzXzFfMSA9IGNhbGxiYWNrc18xLm5leHQoKTsgIWNhbGxiYWNrc18xXzEuZG9uZTsgY2FsbGJhY2tzXzFfMSA9IGNhbGxiYWNrc18xLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soaW5zdGFuY2UsIGlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIGVycm9ycyBpbiB0aGUgb25Jbml0IGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3NfMV8xICYmICFjYWxsYmFja3NfMV8xLmRvbmUgJiYgKF9hID0gY2FsbGJhY2tzXzEucmV0dXJuKSkgX2EuY2FsbChjYWxsYmFja3NfMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuZ2V0T3JJbml0aWFsaXplU2VydmljZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZUlkZW50aWZpZXIgPSBfYS5pbnN0YW5jZUlkZW50aWZpZXIsIF9iID0gX2Eub3B0aW9ucywgb3B0aW9ucyA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iO1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzLmdldChpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UgJiYgdGhpcy5jb21wb25lbnQpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZUZhY3RvcnkodGhpcy5jb250YWluZXIsIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplSWRlbnRpZmllckZvckZhY3RvcnkoaW5zdGFuY2VJZGVudGlmaWVyKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzLnNldChpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zLnNldChpbnN0YW5jZUlkZW50aWZpZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSW52b2tlIG9uSW5pdCBsaXN0ZW5lcnMuXHJcbiAgICAgICAgICAgICAqIE5vdGUgdGhpcy5jb21wb25lbnQub25JbnN0YW5jZUNyZWF0ZWQgaXMgZGlmZmVyZW50LCB3aGljaCBpcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgY3JlYXRvcixcclxuICAgICAgICAgICAgICogd2hpbGUgb25Jbml0IGxpc3RlbmVycyBhcmUgcmVnaXN0ZXJlZCBieSBjb25zdW1lcnMgb2YgdGhlIHByb3ZpZGVyLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5pbnZva2VPbkluaXRDYWxsYmFja3MoaW5zdGFuY2UsIGluc3RhbmNlSWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBPcmRlciBpcyBpbXBvcnRhbnRcclxuICAgICAgICAgICAgICogb25JbnN0YW5jZUNyZWF0ZWQoKSBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIHRoaXMuaW5zdGFuY2VzLnNldChpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlKTsgd2hpY2hcclxuICAgICAgICAgICAgICogbWFrZXMgYGlzSW5pdGlhbGl6ZWQoKWAgcmV0dXJuIHRydWUuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnQub25JbnN0YW5jZUNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQub25JbnN0YW5jZUNyZWF0ZWQodGhpcy5jb250YWluZXIsIGluc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIGVycm9ycyBpbiB0aGUgb25JbnN0YW5jZUNyZWF0ZWRDYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZSB8fCBudWxsO1xyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGlmIChpZGVudGlmaWVyID09PSB2b2lkIDApIHsgaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQubXVsdGlwbGVJbnN0YW5jZXMgPyBpZGVudGlmaWVyIDogREVGQVVMVF9FTlRSWV9OQU1FO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXI7IC8vIGFzc3VtZSBtdWx0aXBsZSBpbnN0YW5jZXMgYXJlIHN1cHBvcnRlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBwcm92aWRlZC5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLnNob3VsZEF1dG9Jbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoISF0aGlzLmNvbXBvbmVudCAmJlxyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5pbnN0YW50aWF0aW9uTW9kZSAhPT0gXCJFWFBMSUNJVFwiIC8qIEluc3RhbnRpYXRpb25Nb2RlLkVYUExJQ0lUICovKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUHJvdmlkZXI7XHJcbn0oKSk7XHJcbi8vIHVuZGVmaW5lZCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBzZXJ2aWNlIGZhY3RvcnkgZm9yIHRoZSBkZWZhdWx0IGluc3RhbmNlXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUlkZW50aWZpZXJGb3JGYWN0b3J5KGlkZW50aWZpZXIpIHtcclxuICAgIHJldHVybiBpZGVudGlmaWVyID09PSBERUZBVUxUX0VOVFJZX05BTUUgPyB1bmRlZmluZWQgOiBpZGVudGlmaWVyO1xyXG59XHJcbmZ1bmN0aW9uIGlzQ29tcG9uZW50RWFnZXIoY29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gY29tcG9uZW50Lmluc3RhbnRpYXRpb25Nb2RlID09PSBcIkVBR0VSXCIgLyogSW5zdGFudGlhdGlvbk1vZGUuRUFHRVIgKi87XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIENvbXBvbmVudENvbnRhaW5lciB0aGF0IHByb3ZpZGVzIFByb3ZpZGVycyBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gYGF1dGhgLCBgYXV0aC1pbnRlcm5hbGBcclxuICovXHJcbnZhciBDb21wb25lbnRDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb21wb25lbnRDb250YWluZXIobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wcm92aWRlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBiZWluZyBhZGRlZFxyXG4gICAgICogQHBhcmFtIG92ZXJ3cml0ZSBXaGVuIGEgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgbmFtZSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQsXHJcbiAgICAgKiBpZiBvdmVyd3JpdGUgaXMgdHJ1ZTogb3ZlcndyaXRlIHRoZSBleGlzdGluZyBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGNvbXBvbmVudCBhbmQgY3JlYXRlIGEgbmV3XHJcbiAgICAgKiBwcm92aWRlciB3aXRoIHRoZSBuZXcgY29tcG9uZW50LiBJdCBjYW4gYmUgdXNlZnVsIGluIHRlc3RzIHdoZXJlIHlvdSB3YW50IHRvIHVzZSBkaWZmZXJlbnQgbW9ja3NcclxuICAgICAqIGZvciBkaWZmZXJlbnQgdGVzdHMuXHJcbiAgICAgKiBpZiBvdmVyd3JpdGUgaXMgZmFsc2U6IHRocm93IGFuIGV4Y2VwdGlvblxyXG4gICAgICovXHJcbiAgICBDb21wb25lbnRDb250YWluZXIucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICBpZiAocHJvdmlkZXIuaXNDb21wb25lbnRTZXQoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb21wb25lbnQgXCIuY29uY2F0KGNvbXBvbmVudC5uYW1lLCBcIiBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQgd2l0aCBcIikuY29uY2F0KHRoaXMubmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm92aWRlci5zZXRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnRDb250YWluZXIucHJvdG90eXBlLmFkZE9yT3ZlcndyaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHZhciBwcm92aWRlciA9IHRoaXMuZ2V0UHJvdmlkZXIoY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgICAgIGlmIChwcm92aWRlci5pc0NvbXBvbmVudFNldCgpKSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgZXhpc3RpbmcgcHJvdmlkZXIgZnJvbSB0aGUgY29udGFpbmVyLCBzbyB3ZSBjYW4gcmVnaXN0ZXIgdGhlIG5ldyBjb21wb25lbnRcclxuICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMuZGVsZXRlKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGdldFByb3ZpZGVyIHByb3ZpZGVzIGEgdHlwZSBzYWZlIGludGVyZmFjZSB3aGVyZSBpdCBjYW4gb25seSBiZSBjYWxsZWQgd2l0aCBhIGZpZWxkIG5hbWVcclxuICAgICAqIHByZXNlbnQgaW4gTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZS5cclxuICAgICAqXHJcbiAgICAgKiBGaXJlYmFzZSBTREtzIHByb3ZpZGluZyBzZXJ2aWNlcyBzaG91bGQgZXh0ZW5kIE5hbWVTZXJ2aWNlTWFwcGluZyBpbnRlcmZhY2UgdG8gcmVnaXN0ZXJcclxuICAgICAqIHRoZW1zZWx2ZXMuXHJcbiAgICAgKi9cclxuICAgIENvbXBvbmVudENvbnRhaW5lci5wcm90b3R5cGUuZ2V0UHJvdmlkZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVycy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzLmdldChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgUHJvdmlkZXIgZm9yIGEgc2VydmljZSB0aGF0IGhhc24ndCByZWdpc3RlcmVkIHdpdGggRmlyZWJhc2VcclxuICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgUHJvdmlkZXIobmFtZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wcm92aWRlcnMuc2V0KG5hbWUsIHByb3ZpZGVyKTtcclxuICAgICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50Q29udGFpbmVyLnByb3RvdHlwZS5nZXRQcm92aWRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wcm92aWRlcnMudmFsdWVzKCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21wb25lbnRDb250YWluZXI7XHJcbn0oKSk7XG5cbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5Db21wb25lbnRDb250YWluZXIgPSBDb21wb25lbnRDb250YWluZXI7XG5leHBvcnRzLlByb3ZpZGVyID0gUHJvdmlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5janMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBhcHAgPSByZXF1aXJlKCdAZmlyZWJhc2UvYXBwJyk7XG52YXIgY29tcG9uZW50ID0gcmVxdWlyZSgnQGZpcmViYXNlL2NvbXBvbmVudCcpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnQGZpcmViYXNlL3V0aWwnKTtcbnZhciBpZGIgPSByZXF1aXJlKCdpZGInKTtcblxudmFyIG5hbWUgPSBcIkBmaXJlYmFzZS9pbnN0YWxsYXRpb25zXCI7XG52YXIgdmVyc2lvbiA9IFwiMC42LjZcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIFBFTkRJTkdfVElNRU9VVF9NUyA9IDEwMDAwO1xyXG52YXIgUEFDS0FHRV9WRVJTSU9OID0gXCJ3OlwiLmNvbmNhdCh2ZXJzaW9uKTtcclxudmFyIElOVEVSTkFMX0FVVEhfVkVSU0lPTiA9ICdGSVNfdjInO1xyXG52YXIgSU5TVEFMTEFUSU9OU19BUElfVVJMID0gJ2h0dHBzOi8vZmlyZWJhc2VpbnN0YWxsYXRpb25zLmdvb2dsZWFwaXMuY29tL3YxJztcclxudmFyIFRPS0VOX0VYUElSQVRJT05fQlVGRkVSID0gNjAgKiA2MCAqIDEwMDA7IC8vIE9uZSBob3VyXHJcbnZhciBTRVJWSUNFID0gJ2luc3RhbGxhdGlvbnMnO1xyXG52YXIgU0VSVklDRV9OQU1FID0gJ0luc3RhbGxhdGlvbnMnO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgX2E7XHJcbnZhciBFUlJPUl9ERVNDUklQVElPTl9NQVAgPSAoX2EgPSB7fSxcclxuICAgIF9hW1wibWlzc2luZy1hcHAtY29uZmlnLXZhbHVlc1wiIC8qIEVycm9yQ29kZS5NSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTICovXSA9ICdNaXNzaW5nIEFwcCBjb25maWd1cmF0aW9uIHZhbHVlOiBcInskdmFsdWVOYW1lfVwiJyxcclxuICAgIF9hW1wibm90LXJlZ2lzdGVyZWRcIiAvKiBFcnJvckNvZGUuTk9UX1JFR0lTVEVSRUQgKi9dID0gJ0ZpcmViYXNlIEluc3RhbGxhdGlvbiBpcyBub3QgcmVnaXN0ZXJlZC4nLFxyXG4gICAgX2FbXCJpbnN0YWxsYXRpb24tbm90LWZvdW5kXCIgLyogRXJyb3JDb2RlLklOU1RBTExBVElPTl9OT1RfRk9VTkQgKi9dID0gJ0ZpcmViYXNlIEluc3RhbGxhdGlvbiBub3QgZm91bmQuJyxcclxuICAgIF9hW1wicmVxdWVzdC1mYWlsZWRcIiAvKiBFcnJvckNvZGUuUkVRVUVTVF9GQUlMRUQgKi9dID0gJ3skcmVxdWVzdE5hbWV9IHJlcXVlc3QgZmFpbGVkIHdpdGggZXJyb3IgXCJ7JHNlcnZlckNvZGV9IHskc2VydmVyU3RhdHVzfTogeyRzZXJ2ZXJNZXNzYWdlfVwiJyxcclxuICAgIF9hW1wiYXBwLW9mZmxpbmVcIiAvKiBFcnJvckNvZGUuQVBQX09GRkxJTkUgKi9dID0gJ0NvdWxkIG5vdCBwcm9jZXNzIHJlcXVlc3QuIEFwcGxpY2F0aW9uIG9mZmxpbmUuJyxcclxuICAgIF9hW1wiZGVsZXRlLXBlbmRpbmctcmVnaXN0cmF0aW9uXCIgLyogRXJyb3JDb2RlLkRFTEVURV9QRU5ESU5HX1JFR0lTVFJBVElPTiAqL10gPSBcIkNhbid0IGRlbGV0ZSBpbnN0YWxsYXRpb24gd2hpbGUgdGhlcmUgaXMgYSBwZW5kaW5nIHJlZ2lzdHJhdGlvbiByZXF1ZXN0LlwiLFxyXG4gICAgX2EpO1xyXG52YXIgRVJST1JfRkFDVE9SWSA9IG5ldyB1dGlsLkVycm9yRmFjdG9yeShTRVJWSUNFLCBTRVJWSUNFX05BTUUsIEVSUk9SX0RFU0NSSVBUSU9OX01BUCk7XHJcbi8qKiBSZXR1cm5zIHRydWUgaWYgZXJyb3IgaXMgYSBGaXJlYmFzZUVycm9yIHRoYXQgaXMgYmFzZWQgb24gYW4gZXJyb3IgZnJvbSB0aGUgc2VydmVyLiAqL1xyXG5mdW5jdGlvbiBpc1NlcnZlckVycm9yKGVycm9yKSB7XHJcbiAgICByZXR1cm4gKGVycm9yIGluc3RhbmNlb2YgdXRpbC5GaXJlYmFzZUVycm9yICYmXHJcbiAgICAgICAgZXJyb3IuY29kZS5pbmNsdWRlcyhcInJlcXVlc3QtZmFpbGVkXCIgLyogRXJyb3JDb2RlLlJFUVVFU1RfRkFJTEVEICovKSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KF9hKSB7XHJcbiAgICB2YXIgcHJvamVjdElkID0gX2EucHJvamVjdElkO1xyXG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KElOU1RBTExBVElPTlNfQVBJX1VSTCwgXCIvcHJvamVjdHMvXCIpLmNvbmNhdChwcm9qZWN0SWQsIFwiL2luc3RhbGxhdGlvbnNcIik7XHJcbn1cclxuZnVuY3Rpb24gZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9rZW46IHJlc3BvbnNlLnRva2VuLFxyXG4gICAgICAgIHJlcXVlc3RTdGF0dXM6IDIgLyogUmVxdWVzdFN0YXR1cy5DT01QTEVURUQgKi8sXHJcbiAgICAgICAgZXhwaXJlc0luOiBnZXRFeHBpcmVzSW5Gcm9tUmVzcG9uc2VFeHBpcmVzSW4ocmVzcG9uc2UuZXhwaXJlc0luKSxcclxuICAgICAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KClcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gZ2V0RXJyb3JGcm9tUmVzcG9uc2UocmVxdWVzdE5hbWUsIHJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlc3BvbnNlSnNvbiwgZXJyb3JEYXRhO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS5qc29uKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSnNvbiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckRhdGEgPSByZXNwb25zZUpzb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwicmVxdWVzdC1mYWlsZWRcIiAvKiBFcnJvckNvZGUuUkVRVUVTVF9GQUlMRUQgKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3ROYW1lOiByZXF1ZXN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlckNvZGU6IGVycm9yRGF0YS5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyTWVzc2FnZTogZXJyb3JEYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJTdGF0dXM6IGVycm9yRGF0YS5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRIZWFkZXJzKF9hKSB7XHJcbiAgICB2YXIgYXBpS2V5ID0gX2EuYXBpS2V5O1xyXG4gICAgcmV0dXJuIG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICd4LWdvb2ctYXBpLWtleSc6IGFwaUtleVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SGVhZGVyc1dpdGhBdXRoKGFwcENvbmZpZywgX2EpIHtcclxuICAgIHZhciByZWZyZXNoVG9rZW4gPSBfYS5yZWZyZXNoVG9rZW47XHJcbiAgICB2YXIgaGVhZGVycyA9IGdldEhlYWRlcnMoYXBwQ29uZmlnKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgZ2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZWZyZXNoVG9rZW4pKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxscyB0aGUgcGFzc2VkIGluIGZldGNoIHdyYXBwZXIgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlLlxyXG4gKiBJZiB0aGUgcmV0dXJuZWQgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIG9mIDV4eCwgcmUtcnVucyB0aGUgZnVuY3Rpb24gb25jZSBhbmRcclxuICogcmV0dXJucyB0aGUgcmVzcG9uc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiByZXRyeUlmU2VydmVyRXJyb3IoZm4pIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPj0gNTAwICYmIHJlc3VsdC5zdGF0dXMgPCA2MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuYWwgU2VydmVyIEVycm9yLiBSZXRyeSByZXF1ZXN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZm4oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRFeHBpcmVzSW5Gcm9tUmVzcG9uc2VFeHBpcmVzSW4ocmVzcG9uc2VFeHBpcmVzSW4pIHtcclxuICAgIC8vIFRoaXMgd29ya3MgYmVjYXVzZSB0aGUgc2VydmVyIHdpbGwgbmV2ZXIgcmVzcG9uZCB3aXRoIGZyYWN0aW9ucyBvZiBhIHNlY29uZC5cclxuICAgIHJldHVybiBOdW1iZXIocmVzcG9uc2VFeHBpcmVzSW4ucmVwbGFjZSgncycsICcwMDAnKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZWZyZXNoVG9rZW4pIHtcclxuICAgIHJldHVybiBcIlwiLmNvbmNhdChJTlRFUk5BTF9BVVRIX1ZFUlNJT04sIFwiIFwiKS5jb25jYXQocmVmcmVzaFRva2VuKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KF9hLCBfYikge1xyXG4gICAgdmFyIGFwcENvbmZpZyA9IF9hLmFwcENvbmZpZywgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyID0gX2EuaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyO1xyXG4gICAgdmFyIGZpZCA9IF9iLmZpZDtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZW5kcG9pbnQsIGhlYWRlcnMsIGhlYXJ0YmVhdFNlcnZpY2UsIGhlYXJ0YmVhdHNIZWFkZXIsIGJvZHksIHJlcXVlc3QsIHJlc3BvbnNlLCByZXNwb25zZVZhbHVlLCByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnk7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQgPSBnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoYXBwQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzID0gZ2V0SGVhZGVycyhhcHBDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYXJ0YmVhdFNlcnZpY2UgPSBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIuZ2V0SW1tZWRpYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhlYXJ0YmVhdFNlcnZpY2UpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGhlYXJ0YmVhdFNlcnZpY2UuZ2V0SGVhcnRiZWF0c0hlYWRlcigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBoZWFydGJlYXRzSGVhZGVyID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFydGJlYXRzSGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCd4LWZpcmViYXNlLWNsaWVudCcsIGhlYXJ0YmVhdHNIZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlkOiBmaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhWZXJzaW9uOiBJTlRFUk5BTF9BVVRIX1ZFUlNJT04sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiBhcHBDb25maWcuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNka1ZlcnNpb246IFBBQ0tBR0VfVkVSU0lPTlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXRyeUlmU2VydmVyRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpOyB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlkOiByZXNwb25zZVZhbHVlLmZpZCB8fCBmaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMiAvKiBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCAqLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiByZXNwb25zZVZhbHVlLnJlZnJlc2hUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aFRva2VuOiBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZShyZXNwb25zZVZhbHVlLmF1dGhUb2tlbilcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRFcnJvckZyb21SZXNwb25zZSgnQ3JlYXRlIEluc3RhbGxhdGlvbicsIHJlc3BvbnNlKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHRocm93IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgZ2l2ZW4gdGltZSBwYXNzZXMuICovXHJcbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcclxuICAgIH0pO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGJ1ZmZlclRvQmFzZTY0VXJsU2FmZShhcnJheSkge1xyXG4gICAgdmFyIGI2NCA9IGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRzbGliLl9fc3ByZWFkQXJyYXkoW10sIHRzbGliLl9fcmVhZChhcnJheSksIGZhbHNlKSkpO1xyXG4gICAgcmV0dXJuIGI2NC5yZXBsYWNlKC9cXCsvZywgJy0nKS5yZXBsYWNlKC9cXC8vZywgJ18nKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgVkFMSURfRklEX1BBVFRFUk4gPSAvXltjZGVmXVtcXHctXXsyMX0kLztcclxudmFyIElOVkFMSURfRklEID0gJyc7XHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBuZXcgRklEIHVzaW5nIHJhbmRvbSB2YWx1ZXMgZnJvbSBXZWIgQ3J5cHRvIEFQSS5cclxuICogUmV0dXJucyBhbiBlbXB0eSBzdHJpbmcgaWYgRklEIGdlbmVyYXRpb24gZmFpbHMgZm9yIGFueSByZWFzb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUZpZCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQSB2YWxpZCBGSUQgaGFzIGV4YWN0bHkgMjIgYmFzZTY0IGNoYXJhY3RlcnMsIHdoaWNoIGlzIDEzMiBiaXRzLCBvciAxNi41XHJcbiAgICAgICAgLy8gYnl0ZXMuIG91ciBpbXBsZW1lbnRhdGlvbiBnZW5lcmF0ZXMgYSAxNyBieXRlIGFycmF5IGluc3RlYWQuXHJcbiAgICAgICAgdmFyIGZpZEJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KDE3KTtcclxuICAgICAgICB2YXIgY3J5cHRvXzEgPSBzZWxmLmNyeXB0byB8fCBzZWxmLm1zQ3J5cHRvO1xyXG4gICAgICAgIGNyeXB0b18xLmdldFJhbmRvbVZhbHVlcyhmaWRCeXRlQXJyYXkpO1xyXG4gICAgICAgIC8vIFJlcGxhY2UgdGhlIGZpcnN0IDQgcmFuZG9tIGJpdHMgd2l0aCB0aGUgY29uc3RhbnQgRklEIGhlYWRlciBvZiAwYjAxMTEuXHJcbiAgICAgICAgZmlkQnl0ZUFycmF5WzBdID0gMTEyICsgKGZpZEJ5dGVBcnJheVswXSAlIDE2KTtcclxuICAgICAgICB2YXIgZmlkID0gZW5jb2RlKGZpZEJ5dGVBcnJheSk7XHJcbiAgICAgICAgcmV0dXJuIFZBTElEX0ZJRF9QQVRURVJOLnRlc3QoZmlkKSA/IGZpZCA6IElOVkFMSURfRklEO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgLy8gRklEIGdlbmVyYXRpb24gZXJyb3JlZFxyXG4gICAgICAgIHJldHVybiBJTlZBTElEX0ZJRDtcclxuICAgIH1cclxufVxyXG4vKiogQ29udmVydHMgYSBGSUQgVWludDhBcnJheSB0byBhIGJhc2U2NCBzdHJpbmcgcmVwcmVzZW50YXRpb24uICovXHJcbmZ1bmN0aW9uIGVuY29kZShmaWRCeXRlQXJyYXkpIHtcclxuICAgIHZhciBiNjRTdHJpbmcgPSBidWZmZXJUb0Jhc2U2NFVybFNhZmUoZmlkQnl0ZUFycmF5KTtcclxuICAgIC8vIFJlbW92ZSB0aGUgMjNyZCBjaGFyYWN0ZXIgdGhhdCB3YXMgYWRkZWQgYmVjYXVzZSBvZiB0aGUgZXh0cmEgNCBiaXRzIGF0IHRoZVxyXG4gICAgLy8gZW5kIG9mIG91ciAxNyBieXRlIGFycmF5LCBhbmQgdGhlICc9JyBwYWRkaW5nLlxyXG4gICAgcmV0dXJuIGI2NFN0cmluZy5zdWJzdHIoMCwgMjIpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKiBSZXR1cm5zIGEgc3RyaW5nIGtleSB0aGF0IGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBhcHAuICovXHJcbmZ1bmN0aW9uIGdldEtleShhcHBDb25maWcpIHtcclxuICAgIHJldHVybiBcIlwiLmNvbmNhdChhcHBDb25maWcuYXBwTmFtZSwgXCIhXCIpLmNvbmNhdChhcHBDb25maWcuYXBwSWQpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBmaWRDaGFuZ2VDYWxsYmFja3MgPSBuZXcgTWFwKCk7XHJcbi8qKlxyXG4gKiBDYWxscyB0aGUgb25JZENoYW5nZSBjYWxsYmFja3Mgd2l0aCB0aGUgbmV3IEZJRCB2YWx1ZSwgYW5kIGJyb2FkY2FzdHMgdGhlXHJcbiAqIGNoYW5nZSB0byBvdGhlciB0YWJzLlxyXG4gKi9cclxuZnVuY3Rpb24gZmlkQ2hhbmdlZChhcHBDb25maWcsIGZpZCkge1xyXG4gICAgdmFyIGtleSA9IGdldEtleShhcHBDb25maWcpO1xyXG4gICAgY2FsbEZpZENoYW5nZUNhbGxiYWNrcyhrZXksIGZpZCk7XHJcbiAgICBicm9hZGNhc3RGaWRDaGFuZ2Uoa2V5LCBmaWQpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZENhbGxiYWNrKGFwcENvbmZpZywgY2FsbGJhY2spIHtcclxuICAgIC8vIE9wZW4gdGhlIGJyb2FkY2FzdCBjaGFubmVsIGlmIGl0J3Mgbm90IGFscmVhZHkgb3BlbixcclxuICAgIC8vIHRvIGJlIGFibGUgdG8gbGlzdGVuIHRvIGNoYW5nZSBldmVudHMgZnJvbSBvdGhlciB0YWJzLlxyXG4gICAgZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpO1xyXG4gICAgdmFyIGtleSA9IGdldEtleShhcHBDb25maWcpO1xyXG4gICAgdmFyIGNhbGxiYWNrU2V0ID0gZmlkQ2hhbmdlQ2FsbGJhY2tzLmdldChrZXkpO1xyXG4gICAgaWYgKCFjYWxsYmFja1NldCkge1xyXG4gICAgICAgIGNhbGxiYWNrU2V0ID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGZpZENoYW5nZUNhbGxiYWNrcy5zZXQoa2V5LCBjYWxsYmFja1NldCk7XHJcbiAgICB9XHJcbiAgICBjYWxsYmFja1NldC5hZGQoY2FsbGJhY2spO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUNhbGxiYWNrKGFwcENvbmZpZywgY2FsbGJhY2spIHtcclxuICAgIHZhciBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIHZhciBjYWxsYmFja1NldCA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcclxuICAgIGlmICghY2FsbGJhY2tTZXQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjYWxsYmFja1NldC5kZWxldGUoY2FsbGJhY2spO1xyXG4gICAgaWYgKGNhbGxiYWNrU2V0LnNpemUgPT09IDApIHtcclxuICAgICAgICBmaWRDaGFuZ2VDYWxsYmFja3MuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcbiAgICAvLyBDbG9zZSBicm9hZGNhc3QgY2hhbm5lbCBpZiB0aGVyZSBhcmUgbm8gbW9yZSBjYWxsYmFja3MuXHJcbiAgICBjbG9zZUJyb2FkY2FzdENoYW5uZWwoKTtcclxufVxyXG5mdW5jdGlvbiBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGtleSwgZmlkKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIHZhciBjYWxsYmFja3MgPSBmaWRDaGFuZ2VDYWxsYmFja3MuZ2V0KGtleSk7XHJcbiAgICBpZiAoIWNhbGxiYWNrcykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgY2FsbGJhY2tzXzEgPSB0c2xpYi5fX3ZhbHVlcyhjYWxsYmFja3MpLCBjYWxsYmFja3NfMV8xID0gY2FsbGJhY2tzXzEubmV4dCgpOyAhY2FsbGJhY2tzXzFfMS5kb25lOyBjYWxsYmFja3NfMV8xID0gY2FsbGJhY2tzXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc18xXzEudmFsdWU7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGZpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3NfMV8xICYmICFjYWxsYmFja3NfMV8xLmRvbmUgJiYgKF9hID0gY2FsbGJhY2tzXzEucmV0dXJuKSkgX2EuY2FsbChjYWxsYmFja3NfMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBicm9hZGNhc3RGaWRDaGFuZ2Uoa2V5LCBmaWQpIHtcclxuICAgIHZhciBjaGFubmVsID0gZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpO1xyXG4gICAgaWYgKGNoYW5uZWwpIHtcclxuICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHsga2V5OiBrZXksIGZpZDogZmlkIH0pO1xyXG4gICAgfVxyXG4gICAgY2xvc2VCcm9hZGNhc3RDaGFubmVsKCk7XHJcbn1cclxudmFyIGJyb2FkY2FzdENoYW5uZWwgPSBudWxsO1xyXG4vKiogT3BlbnMgYW5kIHJldHVybnMgYSBCcm9hZGNhc3RDaGFubmVsIGlmIGl0IGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci4gKi9cclxuZnVuY3Rpb24gZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpIHtcclxuICAgIGlmICghYnJvYWRjYXN0Q2hhbm5lbCAmJiAnQnJvYWRjYXN0Q2hhbm5lbCcgaW4gc2VsZikge1xyXG4gICAgICAgIGJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnW0ZpcmViYXNlXSBGSUQgQ2hhbmdlJyk7XHJcbiAgICAgICAgYnJvYWRjYXN0Q2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGUuZGF0YS5rZXksIGUuZGF0YS5maWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnJvYWRjYXN0Q2hhbm5lbDtcclxufVxyXG5mdW5jdGlvbiBjbG9zZUJyb2FkY2FzdENoYW5uZWwoKSB7XHJcbiAgICBpZiAoZmlkQ2hhbmdlQ2FsbGJhY2tzLnNpemUgPT09IDAgJiYgYnJvYWRjYXN0Q2hhbm5lbCkge1xyXG4gICAgICAgIGJyb2FkY2FzdENoYW5uZWwuY2xvc2UoKTtcclxuICAgICAgICBicm9hZGNhc3RDaGFubmVsID0gbnVsbDtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgREFUQUJBU0VfTkFNRSA9ICdmaXJlYmFzZS1pbnN0YWxsYXRpb25zLWRhdGFiYXNlJztcclxudmFyIERBVEFCQVNFX1ZFUlNJT04gPSAxO1xyXG52YXIgT0JKRUNUX1NUT1JFX05BTUUgPSAnZmlyZWJhc2UtaW5zdGFsbGF0aW9ucy1zdG9yZSc7XHJcbnZhciBkYlByb21pc2UgPSBudWxsO1xyXG5mdW5jdGlvbiBnZXREYlByb21pc2UoKSB7XHJcbiAgICBpZiAoIWRiUHJvbWlzZSkge1xyXG4gICAgICAgIGRiUHJvbWlzZSA9IGlkYi5vcGVuREIoREFUQUJBU0VfTkFNRSwgREFUQUJBU0VfVkVSU0lPTiwge1xyXG4gICAgICAgICAgICB1cGdyYWRlOiBmdW5jdGlvbiAoZGIsIG9sZFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaFxyXG4gICAgICAgICAgICAgICAgLy8gYmVoYXZpb3IgaXMgd2hhdCB3ZSB3YW50LCBiZWNhdXNlIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSB2ZXJzaW9ucyBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgb2xkIHZlcnNpb24gYW5kIHRoZSBjdXJyZW50IHZlcnNpb24sIHdlIHdhbnQgQUxMIHRoZSBtaWdyYXRpb25zXHJcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9sZFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRiUHJvbWlzZTtcclxufVxyXG4vKiogQXNzaWducyBvciBvdmVyd3JpdGVzIHRoZSByZWNvcmQgZm9yIHRoZSBnaXZlbiBrZXkgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUuICovXHJcbmZ1bmN0aW9uIHNldChhcHBDb25maWcsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGtleSwgZGIsIHR4LCBvYmplY3RTdG9yZSwgb2xkVmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0RGJQcm9taXNlKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGRiID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR4ID0gZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RTdG9yZSA9IHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBvYmplY3RTdG9yZS5nZXQoa2V5KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgPSAoX2Euc2VudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBvYmplY3RTdG9yZS5wdXQodmFsdWUsIGtleSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0eC5kb25lXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvbGRWYWx1ZSB8fCBvbGRWYWx1ZS5maWQgIT09IHZhbHVlLmZpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWRDaGFuZ2VkKGFwcENvbmZpZywgdmFsdWUuZmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHZhbHVlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqIFJlbW92ZXMgcmVjb3JkKHMpIGZyb20gdGhlIG9iamVjdFN0b3JlIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIGtleS4gKi9cclxuZnVuY3Rpb24gcmVtb3ZlKGFwcENvbmZpZykge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBrZXksIGRiLCB0eDtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXREYlByb21pc2UoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZGIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKS5kZWxldGUoa2V5KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHR4LmRvbmVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBBdG9taWNhbGx5IHVwZGF0ZXMgYSByZWNvcmQgd2l0aCB0aGUgcmVzdWx0IG9mIHVwZGF0ZUZuLCB3aGljaCBnZXRzXHJcbiAqIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlLiBJZiBuZXdWYWx1ZSBpcyB1bmRlZmluZWQsIHRoZSByZWNvcmQgaXNcclxuICogZGVsZXRlZCBpbnN0ZWFkLlxyXG4gKiBAcmV0dXJuIFVwZGF0ZWQgdmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZShhcHBDb25maWcsIHVwZGF0ZUZuKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGtleSwgZGIsIHR4LCBzdG9yZSwgb2xkVmFsdWUsIG5ld1ZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGdldEtleShhcHBDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldERiUHJvbWlzZSgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBkYiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc3RvcmUuZ2V0KGtleSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlID0gKF9hLnNlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB1cGRhdGVGbihvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHN0b3JlLmRlbGV0ZShrZXkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbNCAvKnlpZWxkKi8sIHN0b3JlLnB1dChuZXdWYWx1ZSwga2V5KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNjtcclxuICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFs0IC8qeWllbGQqLywgdHguZG9uZV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiAoIW9sZFZhbHVlIHx8IG9sZFZhbHVlLmZpZCAhPT0gbmV3VmFsdWUuZmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWRDaGFuZ2VkKGFwcENvbmZpZywgbmV3VmFsdWUuZmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ld1ZhbHVlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFVwZGF0ZXMgYW5kIHJldHVybnMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGZyb20gdGhlIGRhdGFiYXNlLlxyXG4gKiBBbHNvIHRyaWdnZXJzIGEgcmVnaXN0cmF0aW9uIHJlcXVlc3QgaWYgaXQgaXMgbmVjZXNzYXJ5IGFuZCBwb3NzaWJsZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnMpIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVnaXN0cmF0aW9uUHJvbWlzZSwgaW5zdGFsbGF0aW9uRW50cnk7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGRhdGUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIGZ1bmN0aW9uIChvbGRFbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdGFsbGF0aW9uRW50cnkgPSB1cGRhdGVPckNyZWF0ZUluc3RhbGxhdGlvbkVudHJ5KG9sZEVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5V2l0aFByb21pc2UgPSB0cmlnZ2VyUmVnaXN0cmF0aW9uSWZOZWNlc3NhcnkoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlID0gZW50cnlXaXRoUHJvbWlzZS5yZWdpc3RyYXRpb25Qcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50cnlXaXRoUHJvbWlzZS5pbnN0YWxsYXRpb25FbnRyeTtcclxuICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGF0aW9uRW50cnkgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaW5zdGFsbGF0aW9uRW50cnkuZmlkID09PSBJTlZBTElEX0ZJRCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVnaXN0cmF0aW9uUHJvbWlzZV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6IFxyXG4gICAgICAgICAgICAgICAgLy8gRklEIGdlbmVyYXRpb24gZmFpbGVkLiBXYWl0aW5nIGZvciB0aGUgRklEIGZyb20gdGhlIHNlcnZlci5cclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCAoX2EuaW5zdGFsbGF0aW9uRW50cnkgPSBfYi5zZW50KCksIF9hKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxhdGlvbkVudHJ5OiBpbnN0YWxsYXRpb25FbnRyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZTogcmVnaXN0cmF0aW9uUHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBJbnN0YWxsYXRpb24gRW50cnkgaWYgb25lIGRvZXMgbm90IGV4aXN0LlxyXG4gKiBBbHNvIGNsZWFycyB0aW1lZCBvdXQgcGVuZGluZyByZXF1ZXN0cy5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZU9yQ3JlYXRlSW5zdGFsbGF0aW9uRW50cnkob2xkRW50cnkpIHtcclxuICAgIHZhciBlbnRyeSA9IG9sZEVudHJ5IHx8IHtcclxuICAgICAgICBmaWQ6IGdlbmVyYXRlRmlkKCksXHJcbiAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi9cclxuICAgIH07XHJcbiAgICByZXR1cm4gY2xlYXJUaW1lZE91dFJlcXVlc3QoZW50cnkpO1xyXG59XHJcbi8qKlxyXG4gKiBJZiB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlzIG5vdCByZWdpc3RlcmVkIHlldCwgdGhpcyB3aWxsIHRyaWdnZXIgdGhlXHJcbiAqIHJlZ2lzdHJhdGlvbiBhbmQgcmV0dXJuIGFuIEluUHJvZ3Jlc3NJbnN0YWxsYXRpb25FbnRyeS5cclxuICpcclxuICogSWYgcmVnaXN0cmF0aW9uUHJvbWlzZSBkb2VzIG5vdCBleGlzdCwgdGhlIGluc3RhbGxhdGlvbkVudHJ5IGlzIGd1YXJhbnRlZWRcclxuICogdG8gYmUgcmVnaXN0ZXJlZC5cclxuICovXHJcbmZ1bmN0aW9uIHRyaWdnZXJSZWdpc3RyYXRpb25JZk5lY2Vzc2FyeShpbnN0YWxsYXRpb25zLCBpbnN0YWxsYXRpb25FbnRyeSkge1xyXG4gICAgaWYgKGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovKSB7XHJcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiByZXF1aXJlZCBidXQgYXBwIGlzIG9mZmxpbmUuXHJcbiAgICAgICAgICAgIHZhciByZWdpc3RyYXRpb25Qcm9taXNlV2l0aEVycm9yID0gUHJvbWlzZS5yZWplY3QoRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtb2ZmbGluZVwiIC8qIEVycm9yQ29kZS5BUFBfT0ZGTElORSAqLykpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFsbGF0aW9uRW50cnk6IGluc3RhbGxhdGlvbkVudHJ5LFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZTogcmVnaXN0cmF0aW9uUHJvbWlzZVdpdGhFcnJvclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUcnkgcmVnaXN0ZXJpbmcuIENoYW5nZSBzdGF0dXMgdG8gSU5fUFJPR1JFU1MuXHJcbiAgICAgICAgdmFyIGluUHJvZ3Jlc3NFbnRyeSA9IHtcclxuICAgICAgICAgICAgZmlkOiBpbnN0YWxsYXRpb25FbnRyeS5maWQsXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovLFxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb25UaW1lOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IHJlZ2lzdGVySW5zdGFsbGF0aW9uKGluc3RhbGxhdGlvbnMsIGluUHJvZ3Jlc3NFbnRyeSk7XHJcbiAgICAgICAgcmV0dXJuIHsgaW5zdGFsbGF0aW9uRW50cnk6IGluUHJvZ3Jlc3NFbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZTogcmVnaXN0cmF0aW9uUHJvbWlzZSB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnN0YWxsYXRpb25FbnRyeTogaW5zdGFsbGF0aW9uRW50cnksXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblByb21pc2U6IHdhaXRVbnRpbEZpZFJlZ2lzdHJhdGlvbihpbnN0YWxsYXRpb25zKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyBpbnN0YWxsYXRpb25FbnRyeTogaW5zdGFsbGF0aW9uRW50cnkgfTtcclxuICAgIH1cclxufVxyXG4vKiogVGhpcyB3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgb25jZSBmb3IgZWFjaCBuZXcgRmlyZWJhc2UgSW5zdGFsbGF0aW9uLiAqL1xyXG5mdW5jdGlvbiByZWdpc3Rlckluc3RhbGxhdGlvbihpbnN0YWxsYXRpb25zLCBpbnN0YWxsYXRpb25FbnRyeSkge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnksIGVfMTtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgN10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNyZWF0ZUluc3RhbGxhdGlvblJlcXVlc3QoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGlzU2VydmVyRXJyb3IoZV8xKSAmJiBlXzEuY3VzdG9tRGF0YS5zZXJ2ZXJDb2RlID09PSA0MDkpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJuZWQgYSBcIkZJRCBjYW4gbm90IGJlIHVzZWRcIiBlcnJvci5cclxuICAgICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBJRCBuZXh0IHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVtb3ZlKGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VydmVyIHJldHVybmVkIGEgXCJGSUQgY2FuIG5vdCBiZSB1c2VkXCIgZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXHJcbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RyYXRpb24gZmFpbGVkLiBTZXQgRklEIGFzIG5vdCByZWdpc3RlcmVkLlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2V0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZDogaW5zdGFsbGF0aW9uRW50cnkuZmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM6IDAgLyogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZWdpc3RyYXRpb24gZmFpbGVkLiBTZXQgRklEIGFzIG5vdCByZWdpc3RlcmVkLlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHRocm93IGVfMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4vKiogQ2FsbCBpZiBGSUQgcmVnaXN0cmF0aW9uIGlzIHBlbmRpbmcgaW4gYW5vdGhlciByZXF1ZXN0LiAqL1xyXG5mdW5jdGlvbiB3YWl0VW50aWxGaWRSZWdpc3RyYXRpb24oaW5zdGFsbGF0aW9ucykge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbnRyeSwgX2EsIGluc3RhbGxhdGlvbkVudHJ5LCByZWdpc3RyYXRpb25Qcm9taXNlO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3Qgc3RpbGwgaW4gcHJvZ3Jlc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2xlZXAoMTAwKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3Qgc3RpbGwgaW4gcHJvZ3Jlc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHVwZGF0ZUluc3RhbGxhdGlvblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShlbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDAgLyogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCAqLykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnMpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKSwgaW5zdGFsbGF0aW9uRW50cnkgPSBfYS5pbnN0YWxsYXRpb25FbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IF9hLnJlZ2lzdHJhdGlvblByb21pc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ2lzdHJhdGlvblByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlZ2lzdHJhdGlvblByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gcmVnaXN0cmF0aW9uUHJvbWlzZSwgZW50cnkgaXMgcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGluc3RhbGxhdGlvbkVudHJ5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMiAvKnJldHVybiovLCBlbnRyeV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxsZWQgb25seSBpZiB0aGVyZSBpcyBhIENyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IGluIHByb2dyZXNzLlxyXG4gKlxyXG4gKiBVcGRhdGVzIHRoZSBJbnN0YWxsYXRpb25FbnRyeSBpbiB0aGUgREIgYmFzZWQgb24gdGhlIHN0YXR1cyBvZiB0aGVcclxuICogQ3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QuXHJcbiAqXHJcbiAqIFJldHVybnMgdGhlIHVwZGF0ZWQgSW5zdGFsbGF0aW9uRW50cnkuXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZShhcHBDb25maWcsIGZ1bmN0aW9uIChvbGRFbnRyeSkge1xyXG4gICAgICAgIGlmICghb2xkRW50cnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnN0YWxsYXRpb24tbm90LWZvdW5kXCIgLyogRXJyb3JDb2RlLklOU1RBTExBVElPTl9OT1RfRk9VTkQgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xlYXJUaW1lZE91dFJlcXVlc3Qob2xkRW50cnkpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJUaW1lZE91dFJlcXVlc3QoZW50cnkpIHtcclxuICAgIGlmIChoYXNJbnN0YWxsYXRpb25SZXF1ZXN0VGltZWRPdXQoZW50cnkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlkOiBlbnRyeS5maWQsXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyeTtcclxufVxyXG5mdW5jdGlvbiBoYXNJbnN0YWxsYXRpb25SZXF1ZXN0VGltZWRPdXQoaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHJldHVybiAoaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8gJiZcclxuICAgICAgICBpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25UaW1lICsgUEVORElOR19USU1FT1VUX01TIDwgRGF0ZS5ub3coKSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVBdXRoVG9rZW5SZXF1ZXN0KF9hLCBpbnN0YWxsYXRpb25FbnRyeSkge1xyXG4gICAgdmFyIGFwcENvbmZpZyA9IF9hLmFwcENvbmZpZywgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyID0gX2EuaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyO1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbmRwb2ludCwgaGVhZGVycywgaGVhcnRiZWF0U2VydmljZSwgaGVhcnRiZWF0c0hlYWRlciwgYm9keSwgcmVxdWVzdCwgcmVzcG9uc2UsIHJlc3BvbnNlVmFsdWUsIGNvbXBsZXRlZEF1dGhUb2tlbjtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBlbmRwb2ludCA9IGdldEdlbmVyYXRlQXV0aFRva2VuRW5kcG9pbnQoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IGdldEhlYWRlcnNXaXRoQXV0aChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFydGJlYXRTZXJ2aWNlID0gaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyLmdldEltbWVkaWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoZWFydGJlYXRTZXJ2aWNlKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoZWFydGJlYXRTZXJ2aWNlLmdldEhlYXJ0YmVhdHNIZWFkZXIoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhcnRiZWF0c0hlYWRlciA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGVhcnRiZWF0c0hlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgneC1maXJlYmFzZS1jbGllbnQnLCBoZWFydGJlYXRzSGVhZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2RrVmVyc2lvbjogUEFDS0FHRV9WRVJTSU9OLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IGFwcENvbmZpZy5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJldHJ5SWZTZXJ2ZXJFcnJvcihmdW5jdGlvbiAoKSB7IHJldHVybiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCk7IH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS5qc29uKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVmFsdWUgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkQXV0aFRva2VuID0gZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UocmVzcG9uc2VWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGNvbXBsZXRlZEF1dGhUb2tlbl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbNCAvKnlpZWxkKi8sIGdldEVycm9yRnJvbVJlc3BvbnNlKCdHZW5lcmF0ZSBBdXRoIFRva2VuJywgcmVzcG9uc2UpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNjogdGhyb3cgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRHZW5lcmF0ZUF1dGhUb2tlbkVuZHBvaW50KGFwcENvbmZpZywgX2EpIHtcclxuICAgIHZhciBmaWQgPSBfYS5maWQ7XHJcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZyksIFwiL1wiKS5jb25jYXQoZmlkLCBcIi9hdXRoVG9rZW5zOmdlbmVyYXRlXCIpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgdmFsaWQgYXV0aGVudGljYXRpb24gdG9rZW4gZm9yIHRoZSBpbnN0YWxsYXRpb24uIEdlbmVyYXRlcyBhIG5ld1xyXG4gKiB0b2tlbiBpZiBvbmUgZG9lc24ndCBleGlzdCwgaXMgZXhwaXJlZCBvciBhYm91dCB0byBleHBpcmUuXHJcbiAqXHJcbiAqIFNob3VsZCBvbmx5IGJlIGNhbGxlZCBpZiB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlzIHJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCkge1xyXG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuUHJvbWlzZSwgZW50cnksIGF1dGhUb2tlbiwgX2E7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHVwZGF0ZShpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgZnVuY3Rpb24gKG9sZEVudHJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNFbnRyeVJlZ2lzdGVyZWQob2xkRW50cnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vdC1yZWdpc3RlcmVkXCIgLyogRXJyb3JDb2RlLk5PVF9SRUdJU1RFUkVEICovKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkQXV0aFRva2VuID0gb2xkRW50cnkuYXV0aFRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvcmNlUmVmcmVzaCAmJiBpc0F1dGhUb2tlblZhbGlkKG9sZEF1dGhUb2tlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIGEgdmFsaWQgdG9rZW4gaW4gdGhlIERCLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9sZEVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9sZEF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXJlIGFscmVhZHkgaXMgYSB0b2tlbiByZXF1ZXN0IGluIHByb2dyZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5Qcm9taXNlID0gd2FpdFVudGlsQXV0aFRva2VuUmVxdWVzdChpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9sZEVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gdG9rZW4gb3IgdG9rZW4gZXhwaXJlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYXBwLW9mZmxpbmVcIiAvKiBFcnJvckNvZGUuQVBQX09GRkxJTkUgKi8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluUHJvZ3Jlc3NFbnRyeSA9IG1ha2VBdXRoVG9rZW5SZXF1ZXN0SW5Qcm9ncmVzc0VudHJ5KG9sZEVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuUHJvbWlzZSA9IGZldGNoQXV0aFRva2VuRnJvbVNlcnZlcihpbnN0YWxsYXRpb25zLCBpblByb2dyZXNzRW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluUHJvZ3Jlc3NFbnRyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRva2VuUHJvbWlzZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdG9rZW5Qcm9taXNlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IGVudHJ5LmF1dGhUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFRva2VuID0gX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGF1dGhUb2tlbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxsIG9ubHkgaWYgRklEIGlzIHJlZ2lzdGVyZWQgYW5kIEF1dGggVG9rZW4gcmVxdWVzdCBpcyBpbiBwcm9ncmVzcy5cclxuICpcclxuICogV2FpdHMgdW50aWwgdGhlIGN1cnJlbnQgcGVuZGluZyByZXF1ZXN0IGZpbmlzaGVzLiBJZiB0aGUgcmVxdWVzdCB0aW1lcyBvdXQsXHJcbiAqIHRyaWVzIG9uY2UgaW4gdGhpcyB0aHJlYWQgYXMgd2VsbC5cclxuICovXHJcbmZ1bmN0aW9uIHdhaXRVbnRpbEF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5LCBhdXRoVG9rZW47XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZW50cnkuYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGdlbmVyYXRlQXV0aFRva2VuIHN0aWxsIGluIHByb2dyZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNsZWVwKDEwMCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGdlbmVyYXRlQXV0aFRva2VuIHN0aWxsIGluIHByb2dyZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGRhdGVBdXRoVG9rZW5SZXF1ZXN0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFRva2VuID0gZW50cnkuYXV0aFRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHRpbWVkIG91dCBvciBmYWlsZWQgaW4gYSBkaWZmZXJlbnQgY2FsbC4gVHJ5IGFnYWluLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVmcmVzaEF1dGhUb2tlbihpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBhdXRoVG9rZW5dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAqIENhbGxlZCBvbmx5IGlmIHRoZXJlIGlzIGEgR2VuZXJhdGVBdXRoVG9rZW4gcmVxdWVzdCBpbiBwcm9ncmVzcy5cclxuICpcclxuICogVXBkYXRlcyB0aGUgSW5zdGFsbGF0aW9uRW50cnkgaW4gdGhlIERCIGJhc2VkIG9uIHRoZSBzdGF0dXMgb2YgdGhlXHJcbiAqIEdlbmVyYXRlQXV0aFRva2VuIHJlcXVlc3QuXHJcbiAqXHJcbiAqIFJldHVybnMgdGhlIHVwZGF0ZWQgSW5zdGFsbGF0aW9uRW50cnkuXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVBdXRoVG9rZW5SZXF1ZXN0KGFwcENvbmZpZykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZShhcHBDb25maWcsIGZ1bmN0aW9uIChvbGRFbnRyeSkge1xyXG4gICAgICAgIGlmICghaXNFbnRyeVJlZ2lzdGVyZWQob2xkRW50cnkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm90LXJlZ2lzdGVyZWRcIiAvKiBFcnJvckNvZGUuTk9UX1JFR0lTVEVSRUQgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2xkQXV0aFRva2VuID0gb2xkRW50cnkuYXV0aFRva2VuO1xyXG4gICAgICAgIGlmIChoYXNBdXRoVG9rZW5SZXF1ZXN0VGltZWRPdXQob2xkQXV0aFRva2VuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9sZEVudHJ5KSwgeyBhdXRoVG9rZW46IHsgcmVxdWVzdFN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovIH0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvbGRFbnRyeTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZldGNoQXV0aFRva2VuRnJvbVNlcnZlcihpbnN0YWxsYXRpb25zLCBpbnN0YWxsYXRpb25FbnRyeSkge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhdXRoVG9rZW4sIHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSwgZV8xLCB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnk7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAzLCAsIDhdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZW5lcmF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBhdXRoVG9rZW4gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGluc3RhbGxhdGlvbkVudHJ5KSwgeyBhdXRoVG9rZW46IGF1dGhUb2tlbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYXV0aFRva2VuXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaXNTZXJ2ZXJFcnJvcihlXzEpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlXzEuY3VzdG9tRGF0YS5zZXJ2ZXJDb2RlID09PSA0MDEgfHwgZV8xLmN1c3RvbURhdGEuc2VydmVyQ29kZSA9PT0gNDA0KSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlcnZlciByZXR1cm5lZCBhIFwiRklEIG5vdCBmb3VuZFwiIG9yIGEgXCJJbnZhbGlkIGF1dGhlbnRpY2F0aW9uXCIgZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlbW92ZShpbnN0YWxsYXRpb25zLmFwcENvbmZpZyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlcnZlciByZXR1cm5lZCBhIFwiRklEIG5vdCBmb3VuZFwiIG9yIGEgXCJJbnZhbGlkIGF1dGhlbnRpY2F0aW9uXCIgZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnkgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgaW5zdGFsbGF0aW9uRW50cnkpLCB7IGF1dGhUb2tlbjogeyByZXF1ZXN0U3RhdHVzOiAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi8gfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDc7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IHRocm93IGVfMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBpc0VudHJ5UmVnaXN0ZXJlZChpbnN0YWxsYXRpb25FbnRyeSkge1xyXG4gICAgcmV0dXJuIChpbnN0YWxsYXRpb25FbnRyeSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAyIC8qIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEICovKTtcclxufVxyXG5mdW5jdGlvbiBpc0F1dGhUb2tlblZhbGlkKGF1dGhUb2tlbikge1xyXG4gICAgcmV0dXJuIChhdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMiAvKiBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCAqLyAmJlxyXG4gICAgICAgICFpc0F1dGhUb2tlbkV4cGlyZWQoYXV0aFRva2VuKSk7XHJcbn1cclxuZnVuY3Rpb24gaXNBdXRoVG9rZW5FeHBpcmVkKGF1dGhUb2tlbikge1xyXG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XHJcbiAgICByZXR1cm4gKG5vdyA8IGF1dGhUb2tlbi5jcmVhdGlvblRpbWUgfHxcclxuICAgICAgICBhdXRoVG9rZW4uY3JlYXRpb25UaW1lICsgYXV0aFRva2VuLmV4cGlyZXNJbiA8IG5vdyArIFRPS0VOX0VYUElSQVRJT05fQlVGRkVSKTtcclxufVxyXG4vKiogUmV0dXJucyBhbiB1cGRhdGVkIEluc3RhbGxhdGlvbkVudHJ5IHdpdGggYW4gSW5Qcm9ncmVzc0F1dGhUb2tlbi4gKi9cclxuZnVuY3Rpb24gbWFrZUF1dGhUb2tlblJlcXVlc3RJblByb2dyZXNzRW50cnkob2xkRW50cnkpIHtcclxuICAgIHZhciBpblByb2dyZXNzQXV0aFRva2VuID0ge1xyXG4gICAgICAgIHJlcXVlc3RTdGF0dXM6IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLyxcclxuICAgICAgICByZXF1ZXN0VGltZTogRGF0ZS5ub3coKVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb2xkRW50cnkpLCB7IGF1dGhUb2tlbjogaW5Qcm9ncmVzc0F1dGhUb2tlbiB9KTtcclxufVxyXG5mdW5jdGlvbiBoYXNBdXRoVG9rZW5SZXF1ZXN0VGltZWRPdXQoYXV0aFRva2VuKSB7XHJcbiAgICByZXR1cm4gKGF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8gJiZcclxuICAgICAgICBhdXRoVG9rZW4ucmVxdWVzdFRpbWUgKyBQRU5ESU5HX1RJTUVPVVRfTVMgPCBEYXRlLm5vdygpKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlcyBhIEZpcmViYXNlIEluc3RhbGxhdGlvbiBpZiB0aGVyZSBpc24ndCBvbmUgZm9yIHRoZSBhcHAgYW5kXHJcbiAqIHJldHVybnMgdGhlIEluc3RhbGxhdGlvbiBJRC5cclxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJZChpbnN0YWxsYXRpb25zKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbGxhdGlvbnNJbXBsLCBfYSwgaW5zdGFsbGF0aW9uRW50cnksIHJlZ2lzdHJhdGlvblByb21pc2U7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGF0aW9uc0ltcGwgPSBpbnN0YWxsYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnNJbXBsKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCksIGluc3RhbGxhdGlvbkVudHJ5ID0gX2EuaW5zdGFsbGF0aW9uRW50cnksIHJlZ2lzdHJhdGlvblByb21pc2UgPSBfYS5yZWdpc3RyYXRpb25Qcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdpc3RyYXRpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvblByb21pc2UuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgaW5zdGFsbGF0aW9uIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCwgdXBkYXRlIHRoZSBhdXRoZW50aWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbiBpZiBuZWVkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBdXRoVG9rZW4oaW5zdGFsbGF0aW9uc0ltcGwpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgaW5zdGFsbGF0aW9uRW50cnkuZmlkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgYSBGaXJlYmFzZSBJbnN0YWxsYXRpb25zIGF1dGggdG9rZW4sIGlkZW50aWZ5aW5nIHRoZSBjdXJyZW50XHJcbiAqIEZpcmViYXNlIEluc3RhbGxhdGlvbi5cclxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0gZm9yY2VSZWZyZXNoIC0gRm9yY2UgcmVmcmVzaCByZWdhcmRsZXNzIG9mIHRva2VuIGV4cGlyYXRpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGdldFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCkge1xyXG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbGxhdGlvbnNJbXBsLCBhdXRoVG9rZW47XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGF0aW9uc0ltcGwgPSBpbnN0YWxsYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNvbXBsZXRlSW5zdGFsbGF0aW9uUmVnaXN0cmF0aW9uKGluc3RhbGxhdGlvbnNJbXBsKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlZnJlc2hBdXRoVG9rZW4oaW5zdGFsbGF0aW9uc0ltcGwsIGZvcmNlUmVmcmVzaCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhUb2tlbiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYXV0aFRva2VuLnRva2VuXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY29tcGxldGVJbnN0YWxsYXRpb25SZWdpc3RyYXRpb24oaW5zdGFsbGF0aW9ucykge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWdpc3RyYXRpb25Qcm9taXNlO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRJbnN0YWxsYXRpb25FbnRyeShpbnN0YWxsYXRpb25zKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IChfYS5zZW50KCkpLnJlZ2lzdHJhdGlvblByb21pc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWdpc3RyYXRpb25Qcm9taXNlKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBIGNyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IGlzIGluIHByb2dyZXNzLiBXYWl0IHVudGlsIGl0IGZpbmlzaGVzLlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlZ2lzdHJhdGlvblByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEEgY3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MuIFdhaXQgdW50aWwgaXQgZmluaXNoZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWxldGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZW5kcG9pbnQsIGhlYWRlcnMsIHJlcXVlc3QsIHJlc3BvbnNlO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50ID0gZ2V0RGVsZXRlRW5kcG9pbnQoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IGdldEhlYWRlcnNXaXRoQXV0aChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXRyeUlmU2VydmVyRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpOyB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhcmVzcG9uc2Uub2spIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldEVycm9yRnJvbVJlc3BvbnNlKCdEZWxldGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldERlbGV0ZUVuZHBvaW50KGFwcENvbmZpZywgX2EpIHtcclxuICAgIHZhciBmaWQgPSBfYS5maWQ7XHJcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZyksIFwiL1wiKS5jb25jYXQoZmlkKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRGVsZXRlcyB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGFuZCBhbGwgYXNzb2NpYXRlZCBkYXRhLlxyXG4gKiBAcGFyYW0gaW5zdGFsbGF0aW9ucyAtIFRoZSBgSW5zdGFsbGF0aW9uc2AgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGRlbGV0ZUluc3RhbGxhdGlvbnMoaW5zdGFsbGF0aW9ucykge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcHBDb25maWcsIGVudHJ5O1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGFwcENvbmZpZyA9IGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHVwZGF0ZShhcHBDb25maWcsIGZ1bmN0aW9uIChvbGRFbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZEVudHJ5ICYmIG9sZEVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSB1bnJlZ2lzdGVyZWQgZW50cnkgd2l0aG91dCBzZW5kaW5nIGEgZGVsZXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvbGRFbnRyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZW50cnkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuJ3QgZGVsZXRlIHdoaWxlIHRyeWluZyB0byByZWdpc3Rlci5cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImRlbGV0ZS1wZW5kaW5nLXJlZ2lzdHJhdGlvblwiIC8qIEVycm9yQ29kZS5ERUxFVEVfUEVORElOR19SRUdJU1RSQVRJT04gKi8pO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMiAvKiBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCAqLykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIW5hdmlnYXRvci5vbkxpbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYXBwLW9mZmxpbmVcIiAvKiBFcnJvckNvZGUuQVBQX09GRkxJTkUgKi8pO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCBkZWxldGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZywgZW50cnkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVtb3ZlKGFwcENvbmZpZyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFNldHMgYSBuZXcgY2FsbGJhY2sgdGhhdCB3aWxsIGdldCBjYWxsZWQgd2hlbiBJbnN0YWxsYXRpb24gSUQgY2hhbmdlcy5cclxuICogUmV0dXJucyBhbiB1bnN1YnNjcmliZSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVtb3ZlIHRoZSBjYWxsYmFjayB3aGVuIGNhbGxlZC5cclxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHdoZW4gRklEIGNoYW5nZXMuXHJcbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgY2FsbGVkIHRvIHVuc3Vic2NyaWJlLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBvbklkQ2hhbmdlKGluc3RhbGxhdGlvbnMsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgYXBwQ29uZmlnID0gaW5zdGFsbGF0aW9ucy5hcHBDb25maWc7XHJcbiAgICBhZGRDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2FsbGJhY2soYXBwQ29uZmlnLCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHtAbGluayBJbnN0YWxsYXRpb25zfSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuXHJcbiAqIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cclxuICogQHBhcmFtIGFwcCAtIFRoZSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbnMoYXBwJDEpIHtcclxuICAgIGlmIChhcHAkMSA9PT0gdm9pZCAwKSB7IGFwcCQxID0gYXBwLmdldEFwcCgpOyB9XHJcbiAgICB2YXIgaW5zdGFsbGF0aW9uc0ltcGwgPSBhcHAuX2dldFByb3ZpZGVyKGFwcCQxLCAnaW5zdGFsbGF0aW9ucycpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgcmV0dXJuIGluc3RhbGxhdGlvbnNJbXBsO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGV4dHJhY3RBcHBDb25maWcoYXBwKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIGlmICghYXBwIHx8ICFhcHAub3B0aW9ucykge1xyXG4gICAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKCdBcHAgQ29uZmlndXJhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFhcHAubmFtZSkge1xyXG4gICAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKCdBcHAgTmFtZScpO1xyXG4gICAgfVxyXG4gICAgLy8gUmVxdWlyZWQgYXBwIGNvbmZpZyBrZXlzXHJcbiAgICB2YXIgY29uZmlnS2V5cyA9IFtcclxuICAgICAgICAncHJvamVjdElkJyxcclxuICAgICAgICAnYXBpS2V5JyxcclxuICAgICAgICAnYXBwSWQnXHJcbiAgICBdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBmb3IgKHZhciBjb25maWdLZXlzXzEgPSB0c2xpYi5fX3ZhbHVlcyhjb25maWdLZXlzKSwgY29uZmlnS2V5c18xXzEgPSBjb25maWdLZXlzXzEubmV4dCgpOyAhY29uZmlnS2V5c18xXzEuZG9uZTsgY29uZmlnS2V5c18xXzEgPSBjb25maWdLZXlzXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXlOYW1lID0gY29uZmlnS2V5c18xXzEudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICghYXBwLm9wdGlvbnNba2V5TmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKGtleU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWdLZXlzXzFfMSAmJiAhY29uZmlnS2V5c18xXzEuZG9uZSAmJiAoX2EgPSBjb25maWdLZXlzXzEucmV0dXJuKSkgX2EuY2FsbChjb25maWdLZXlzXzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFwcE5hbWU6IGFwcC5uYW1lLFxyXG4gICAgICAgIHByb2plY3RJZDogYXBwLm9wdGlvbnMucHJvamVjdElkLFxyXG4gICAgICAgIGFwaUtleTogYXBwLm9wdGlvbnMuYXBpS2V5LFxyXG4gICAgICAgIGFwcElkOiBhcHAub3B0aW9ucy5hcHBJZFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXRNaXNzaW5nVmFsdWVFcnJvcih2YWx1ZU5hbWUpIHtcclxuICAgIHJldHVybiBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm1pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXNcIiAvKiBFcnJvckNvZGUuTUlTU0lOR19BUFBfQ09ORklHX1ZBTFVFUyAqLywge1xyXG4gICAgICAgIHZhbHVlTmFtZTogdmFsdWVOYW1lXHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgSU5TVEFMTEFUSU9OU19OQU1FID0gJ2luc3RhbGxhdGlvbnMnO1xyXG52YXIgSU5TVEFMTEFUSU9OU19OQU1FX0lOVEVSTkFMID0gJ2luc3RhbGxhdGlvbnMtaW50ZXJuYWwnO1xyXG52YXIgcHVibGljRmFjdG9yeSA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuICAgIHZhciBhcHAkMSA9IGNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAvLyBUaHJvd3MgaWYgYXBwIGlzbid0IGNvbmZpZ3VyZWQgcHJvcGVybHkuXHJcbiAgICB2YXIgYXBwQ29uZmlnID0gZXh0cmFjdEFwcENvbmZpZyhhcHAkMSk7XHJcbiAgICB2YXIgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyID0gYXBwLl9nZXRQcm92aWRlcihhcHAkMSwgJ2hlYXJ0YmVhdCcpO1xyXG4gICAgdmFyIGluc3RhbGxhdGlvbnNJbXBsID0ge1xyXG4gICAgICAgIGFwcDogYXBwJDEsXHJcbiAgICAgICAgYXBwQ29uZmlnOiBhcHBDb25maWcsXHJcbiAgICAgICAgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyOiBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIsXHJcbiAgICAgICAgX2RlbGV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gaW5zdGFsbGF0aW9uc0ltcGw7XHJcbn07XHJcbnZhciBpbnRlcm5hbEZhY3RvcnkgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XHJcbiAgICB2YXIgYXBwJDEgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgLy8gSW50ZXJuYWwgRklTIGluc3RhbmNlIHJlbGllcyBvbiBwdWJsaWMgRklTIGluc3RhbmNlLlxyXG4gICAgdmFyIGluc3RhbGxhdGlvbnMgPSBhcHAuX2dldFByb3ZpZGVyKGFwcCQxLCBJTlNUQUxMQVRJT05TX05BTUUpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgdmFyIGluc3RhbGxhdGlvbnNJbnRlcm5hbCA9IHtcclxuICAgICAgICBnZXRJZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0SWQoaW5zdGFsbGF0aW9ucyk7IH0sXHJcbiAgICAgICAgZ2V0VG9rZW46IGZ1bmN0aW9uIChmb3JjZVJlZnJlc2gpIHsgcmV0dXJuIGdldFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCk7IH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gaW5zdGFsbGF0aW9uc0ludGVybmFsO1xyXG59O1xyXG5mdW5jdGlvbiByZWdpc3Rlckluc3RhbGxhdGlvbnMoKSB7XHJcbiAgICBhcHAuX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBjb21wb25lbnQuQ29tcG9uZW50KElOU1RBTExBVElPTlNfTkFNRSwgcHVibGljRmFjdG9yeSwgXCJQVUJMSUNcIiAvKiBDb21wb25lbnRUeXBlLlBVQkxJQyAqLykpO1xyXG4gICAgYXBwLl9yZWdpc3RlckNvbXBvbmVudChuZXcgY29tcG9uZW50LkNvbXBvbmVudChJTlNUQUxMQVRJT05TX05BTUVfSU5URVJOQUwsIGludGVybmFsRmFjdG9yeSwgXCJQUklWQVRFXCIgLyogQ29tcG9uZW50VHlwZS5QUklWQVRFICovKSk7XHJcbn1cblxuLyoqXHJcbiAqIFRoZSBGaXJlYmFzZSBJbnN0YWxsYXRpb25zIFdlYiBTREsuXHJcbiAqIFRoaXMgU0RLIGRvZXMgbm90IHdvcmsgaW4gYSBOb2RlLmpzIGVudmlyb25tZW50LlxyXG4gKlxyXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cclxuICovXHJcbnJlZ2lzdGVySW5zdGFsbGF0aW9ucygpO1xyXG5hcHAucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24pO1xyXG4vLyBCVUlMRF9UQVJHRVQgd2lsbCBiZSByZXBsYWNlZCBieSB2YWx1ZXMgbGlrZSBlc201LCBlc20yMDE3LCBjanM1LCBldGMgZHVyaW5nIHRoZSBjb21waWxhdGlvblxyXG5hcHAucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sICdjanM1Jyk7XG5cbmV4cG9ydHMuZGVsZXRlSW5zdGFsbGF0aW9ucyA9IGRlbGV0ZUluc3RhbGxhdGlvbnM7XG5leHBvcnRzLmdldElkID0gZ2V0SWQ7XG5leHBvcnRzLmdldEluc3RhbGxhdGlvbnMgPSBnZXRJbnN0YWxsYXRpb25zO1xuZXhwb3J0cy5nZXRUb2tlbiA9IGdldFRva2VuO1xuZXhwb3J0cy5vbklkQ2hhbmdlID0gb25JZENoYW5nZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNqcy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIF9hO1xyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgTG9nZ2VyIGluc3RhbmNlc1xyXG4gKi9cclxudmFyIGluc3RhbmNlcyA9IFtdO1xyXG4vKipcclxuICogVGhlIEpTIFNESyBzdXBwb3J0cyA1IGxvZyBsZXZlbHMgYW5kIGFsc28gYWxsb3dzIGEgdXNlciB0aGUgYWJpbGl0eSB0b1xyXG4gKiBzaWxlbmNlIHRoZSBsb2dzIGFsdG9nZXRoZXIuXHJcbiAqXHJcbiAqIFRoZSBvcmRlciBpcyBhIGZvbGxvd3M6XHJcbiAqIERFQlVHIDwgVkVSQk9TRSA8IElORk8gPCBXQVJOIDwgRVJST1JcclxuICpcclxuICogQWxsIG9mIHRoZSBsb2cgdHlwZXMgYWJvdmUgdGhlIGN1cnJlbnQgbG9nIGxldmVsIHdpbGwgYmUgY2FwdHVyZWQgKGkuZS4gaWZcclxuICogeW91IHNldCB0aGUgbG9nIGxldmVsIHRvIGBJTkZPYCwgZXJyb3JzIHdpbGwgc3RpbGwgYmUgbG9nZ2VkLCBidXQgYERFQlVHYCBhbmRcclxuICogYFZFUkJPU0VgIGxvZ3Mgd2lsbCBub3QpXHJcbiAqL1xyXG5leHBvcnRzLkxvZ0xldmVsID0gdm9pZCAwO1xyXG4oZnVuY3Rpb24gKExvZ0xldmVsKSB7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkRFQlVHXCJdID0gMF0gPSBcIkRFQlVHXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlZFUkJPU0VcIl0gPSAxXSA9IFwiVkVSQk9TRVwiO1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJJTkZPXCJdID0gMl0gPSBcIklORk9cIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiV0FSTlwiXSA9IDNdID0gXCJXQVJOXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkVSUk9SXCJdID0gNF0gPSBcIkVSUk9SXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlNJTEVOVFwiXSA9IDVdID0gXCJTSUxFTlRcIjtcclxufSkoZXhwb3J0cy5Mb2dMZXZlbCB8fCAoZXhwb3J0cy5Mb2dMZXZlbCA9IHt9KSk7XHJcbnZhciBsZXZlbFN0cmluZ1RvRW51bSA9IHtcclxuICAgICdkZWJ1Zyc6IGV4cG9ydHMuTG9nTGV2ZWwuREVCVUcsXHJcbiAgICAndmVyYm9zZSc6IGV4cG9ydHMuTG9nTGV2ZWwuVkVSQk9TRSxcclxuICAgICdpbmZvJzogZXhwb3J0cy5Mb2dMZXZlbC5JTkZPLFxyXG4gICAgJ3dhcm4nOiBleHBvcnRzLkxvZ0xldmVsLldBUk4sXHJcbiAgICAnZXJyb3InOiBleHBvcnRzLkxvZ0xldmVsLkVSUk9SLFxyXG4gICAgJ3NpbGVudCc6IGV4cG9ydHMuTG9nTGV2ZWwuU0lMRU5UXHJcbn07XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsb2cgbGV2ZWxcclxuICovXHJcbnZhciBkZWZhdWx0TG9nTGV2ZWwgPSBleHBvcnRzLkxvZ0xldmVsLklORk87XHJcbi8qKlxyXG4gKiBCeSBkZWZhdWx0LCBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGRpc3BsYXllZCBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgKGluXHJcbiAqIGNocm9tZSkuIFRvIGF2b2lkIGZvcmNpbmcgdXNlcnMgdG8gaGF2ZSB0byBvcHQtaW4gdG8gdGhlc2UgbG9ncyB0d2ljZVxyXG4gKiAoaS5lLiBvbmNlIGZvciBmaXJlYmFzZSwgYW5kIG9uY2UgaW4gdGhlIGNvbnNvbGUpLCB3ZSBhcmUgc2VuZGluZyBgREVCVUdgXHJcbiAqIGxvZ3MgdG8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24uXHJcbiAqL1xyXG52YXIgQ29uc29sZU1ldGhvZCA9IChfYSA9IHt9LFxyXG4gICAgX2FbZXhwb3J0cy5Mb2dMZXZlbC5ERUJVR10gPSAnbG9nJyxcclxuICAgIF9hW2V4cG9ydHMuTG9nTGV2ZWwuVkVSQk9TRV0gPSAnbG9nJyxcclxuICAgIF9hW2V4cG9ydHMuTG9nTGV2ZWwuSU5GT10gPSAnaW5mbycsXHJcbiAgICBfYVtleHBvcnRzLkxvZ0xldmVsLldBUk5dID0gJ3dhcm4nLFxyXG4gICAgX2FbZXhwb3J0cy5Mb2dMZXZlbC5FUlJPUl0gPSAnZXJyb3InLFxyXG4gICAgX2EpO1xyXG4vKipcclxuICogVGhlIGRlZmF1bHQgbG9nIGhhbmRsZXIgd2lsbCBmb3J3YXJkIERFQlVHLCBWRVJCT1NFLCBJTkZPLCBXQVJOLCBhbmQgRVJST1JcclxuICogbWVzc2FnZXMgb24gdG8gdGhlaXIgY29ycmVzcG9uZGluZyBjb25zb2xlIGNvdW50ZXJwYXJ0cyAoaWYgdGhlIGxvZyBtZXRob2RcclxuICogaXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IGxvZyBsZXZlbClcclxuICovXHJcbnZhciBkZWZhdWx0TG9nSGFuZGxlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgbG9nVHlwZSkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGlmIChsb2dUeXBlIDwgaW5zdGFuY2UubG9nTGV2ZWwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xyXG4gICAgdmFyIG1ldGhvZCA9IENvbnNvbGVNZXRob2RbbG9nVHlwZV07XHJcbiAgICBpZiAobWV0aG9kKSB7XHJcbiAgICAgICAgY29uc29sZVttZXRob2RdLmFwcGx5KGNvbnNvbGUsIHRzbGliLl9fc3ByZWFkQXJyYXkoW1wiW1wiLmNvbmNhdChub3csIFwiXSAgXCIpLmNvbmNhdChpbnN0YW5jZS5uYW1lLCBcIjpcIildLCBhcmdzLCBmYWxzZSkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdGVkIHRvIGxvZyBhIG1lc3NhZ2Ugd2l0aCBhbiBpbnZhbGlkIGxvZ1R5cGUgKHZhbHVlOiBcIi5jb25jYXQobG9nVHlwZSwgXCIpXCIpKTtcclxuICAgIH1cclxufTtcclxudmFyIExvZ2dlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZXMgeW91IGFuIGluc3RhbmNlIG9mIGEgTG9nZ2VyIHRvIGNhcHR1cmUgbWVzc2FnZXMgYWNjb3JkaW5nIHRvXHJcbiAgICAgKiBGaXJlYmFzZSdzIGxvZ2dpbmcgc2NoZW1lLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIHRoYXQgdGhlIGxvZ3Mgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGhcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gTG9nZ2VyKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBsb2cgbGV2ZWwgb2YgdGhlIGdpdmVuIExvZ2dlciBpbnN0YW5jZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9sb2dMZXZlbCA9IGRlZmF1bHRMb2dMZXZlbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWFpbiAoaW50ZXJuYWwpIGxvZyBoYW5kbGVyIGZvciB0aGUgTG9nZ2VyIGluc3RhbmNlLlxyXG4gICAgICAgICAqIENhbiBiZSBzZXQgdG8gYSBuZXcgZnVuY3Rpb24gaW4gaW50ZXJuYWwgcGFja2FnZSBjb2RlIGJ1dCBub3QgYnkgdXNlci5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyID0gZGVmYXVsdExvZ0hhbmRsZXI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG9wdGlvbmFsLCBhZGRpdGlvbmFsLCB1c2VyLWRlZmluZWQgbG9nIGhhbmRsZXIgZm9yIHRoZSBMb2dnZXIgaW5zdGFuY2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhcHR1cmUgdGhlIGN1cnJlbnQgaW5zdGFuY2UgZm9yIGxhdGVyIHVzZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGluc3RhbmNlcy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExvZ2dlci5wcm90b3R5cGUsIFwibG9nTGV2ZWxcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9nTGV2ZWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgaWYgKCEodmFsIGluIGV4cG9ydHMuTG9nTGV2ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCB2YWx1ZSBcXFwiXCIuY29uY2F0KHZhbCwgXCJcXFwiIGFzc2lnbmVkIHRvIGBsb2dMZXZlbGBcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8vIFdvcmthcm91bmQgZm9yIHNldHRlci9nZXR0ZXIgaGF2aW5nIHRvIGJlIHRoZSBzYW1lIHR5cGUuXHJcbiAgICBMb2dnZXIucHJvdG90eXBlLnNldExvZ0xldmVsID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgIHRoaXMuX2xvZ0xldmVsID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyBsZXZlbFN0cmluZ1RvRW51bVt2YWxdIDogdmFsO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMb2dnZXIucHJvdG90eXBlLCBcImxvZ0hhbmRsZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9nSGFuZGxlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgYXNzaWduZWQgdG8gYGxvZ0hhbmRsZXJgIG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExvZ2dlci5wcm90b3R5cGUsIFwidXNlckxvZ0hhbmRsZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlckxvZ0hhbmRsZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZnVuY3Rpb25zIGJlbG93IGFyZSBhbGwgYmFzZWQgb24gdGhlIGBjb25zb2xlYCBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIuYXBwbHkodGhpcywgdHNsaWIuX19zcHJlYWRBcnJheShbdGhpcywgZXhwb3J0cy5Mb2dMZXZlbC5ERUJVR10sIGFyZ3MsIGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlci5hcHBseSh0aGlzLCB0c2xpYi5fX3NwcmVhZEFycmF5KFt0aGlzLCBleHBvcnRzLkxvZ0xldmVsLkRFQlVHXSwgYXJncywgZmFsc2UpKTtcclxuICAgIH07XHJcbiAgICBMb2dnZXIucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIuYXBwbHkodGhpcywgdHNsaWIuX19zcHJlYWRBcnJheShbdGhpcywgZXhwb3J0cy5Mb2dMZXZlbC5WRVJCT1NFXSwgYXJncywgZmFsc2UpKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyLmFwcGx5KHRoaXMsIHRzbGliLl9fc3ByZWFkQXJyYXkoW3RoaXMsIGV4cG9ydHMuTG9nTGV2ZWwuVkVSQk9TRV0sIGFyZ3MsIGZhbHNlKSk7XHJcbiAgICB9O1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJiB0aGlzLl91c2VyTG9nSGFuZGxlci5hcHBseSh0aGlzLCB0c2xpYi5fX3NwcmVhZEFycmF5KFt0aGlzLCBleHBvcnRzLkxvZ0xldmVsLklORk9dLCBhcmdzLCBmYWxzZSkpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIuYXBwbHkodGhpcywgdHNsaWIuX19zcHJlYWRBcnJheShbdGhpcywgZXhwb3J0cy5Mb2dMZXZlbC5JTkZPXSwgYXJncywgZmFsc2UpKTtcclxuICAgIH07XHJcbiAgICBMb2dnZXIucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyLmFwcGx5KHRoaXMsIHRzbGliLl9fc3ByZWFkQXJyYXkoW3RoaXMsIGV4cG9ydHMuTG9nTGV2ZWwuV0FSTl0sIGFyZ3MsIGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlci5hcHBseSh0aGlzLCB0c2xpYi5fX3NwcmVhZEFycmF5KFt0aGlzLCBleHBvcnRzLkxvZ0xldmVsLldBUk5dLCBhcmdzLCBmYWxzZSkpO1xyXG4gICAgfTtcclxuICAgIExvZ2dlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyLmFwcGx5KHRoaXMsIHRzbGliLl9fc3ByZWFkQXJyYXkoW3RoaXMsIGV4cG9ydHMuTG9nTGV2ZWwuRVJST1JdLCBhcmdzLCBmYWxzZSkpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIuYXBwbHkodGhpcywgdHNsaWIuX19zcHJlYWRBcnJheShbdGhpcywgZXhwb3J0cy5Mb2dMZXZlbC5FUlJPUl0sIGFyZ3MsIGZhbHNlKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExvZ2dlcjtcclxufSgpKTtcclxuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWwpIHtcclxuICAgIGluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0KSB7XHJcbiAgICAgICAgaW5zdC5zZXRMb2dMZXZlbChsZXZlbCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBzZXRVc2VyTG9nSGFuZGxlcihsb2dDYWxsYmFjaywgb3B0aW9ucykge1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgY3VzdG9tTG9nTGV2ZWwgPSBudWxsO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGV2ZWwpIHtcclxuICAgICAgICAgICAgY3VzdG9tTG9nTGV2ZWwgPSBsZXZlbFN0cmluZ1RvRW51bVtvcHRpb25zLmxldmVsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ0NhbGxiYWNrID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnVzZXJMb2dIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnVzZXJMb2dIYW5kbGVyID0gZnVuY3Rpb24gKGluc3RhbmNlLCBsZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gYXJnc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGFyZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJnIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZy5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChpZ25vcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBhcmc7IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJyAnKTtcclxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA+PSAoY3VzdG9tTG9nTGV2ZWwgIT09IG51bGwgJiYgY3VzdG9tTG9nTGV2ZWwgIT09IHZvaWQgMCA/IGN1c3RvbUxvZ0xldmVsIDogaW5zdGFuY2UubG9nTGV2ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nQ2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogZXhwb3J0cy5Mb2dMZXZlbFtsZXZlbF0udG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaW5zdGFuY2UubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGluc3RhbmNlc18xID0gaW5zdGFuY2VzOyBfaSA8IGluc3RhbmNlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGluc3RhbmNlc18xW19pXTtcclxuICAgICAgICBfbG9vcF8xKGluc3RhbmNlKTtcclxuICAgIH1cclxufVxuXG5leHBvcnRzLkxvZ2dlciA9IExvZ2dlcjtcbmV4cG9ydHMuc2V0TG9nTGV2ZWwgPSBzZXRMb2dMZXZlbDtcbmV4cG9ydHMuc2V0VXNlckxvZ0hhbmRsZXIgPSBzZXRVc2VyTG9nSGFuZGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNqcy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxucmVxdWlyZSgnQGZpcmViYXNlL2luc3RhbGxhdGlvbnMnKTtcbnZhciBjb21wb25lbnQgPSByZXF1aXJlKCdAZmlyZWJhc2UvY29tcG9uZW50Jyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIGlkYiA9IHJlcXVpcmUoJ2lkYicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCdAZmlyZWJhc2UvdXRpbCcpO1xudmFyIGFwcCA9IHJlcXVpcmUoJ0BmaXJlYmFzZS9hcHAnKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIERFRkFVTFRfU1dfUEFUSCA9ICcvZmlyZWJhc2UtbWVzc2FnaW5nLXN3LmpzJztcclxudmFyIERFRkFVTFRfU1dfU0NPUEUgPSAnL2ZpcmViYXNlLWNsb3VkLW1lc3NhZ2luZy1wdXNoLXNjb3BlJztcclxudmFyIERFRkFVTFRfVkFQSURfS0VZID0gJ0JET1U5OS1oNjdIY0E2SmVGWEhiU05NdTdlMnlOTnUzUnpvTWo4VE00Vzg4aklUZnE3Wm1QdklNMUl2LTRfbDJMeFFjWXdocWJ5MnhHcFd3empmQW5HNCc7XHJcbnZhciBFTkRQT0lOVCA9ICdodHRwczovL2ZjbXJlZ2lzdHJhdGlvbnMuZ29vZ2xlYXBpcy5jb20vdjEnO1xyXG52YXIgQ09OU09MRV9DQU1QQUlHTl9JRCA9ICdnb29nbGUuYy5hLmNfaWQnO1xyXG52YXIgQ09OU09MRV9DQU1QQUlHTl9OQU1FID0gJ2dvb2dsZS5jLmEuY19sJztcclxudmFyIENPTlNPTEVfQ0FNUEFJR05fVElNRSA9ICdnb29nbGUuYy5hLnRzJztcclxuLyoqIFNldCB0byAnMScgaWYgQW5hbHl0aWNzIGlzIGVuYWJsZWQgZm9yIHRoZSBjYW1wYWlnbiAqL1xyXG52YXIgQ09OU09MRV9DQU1QQUlHTl9BTkFMWVRJQ1NfRU5BQkxFRCA9ICdnb29nbGUuYy5hLmUnO1xyXG52YXIgTWVzc2FnZVR5cGUkMTtcclxuKGZ1bmN0aW9uIChNZXNzYWdlVHlwZSkge1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJEQVRBX01FU1NBR0VcIl0gPSAxXSA9IFwiREFUQV9NRVNTQUdFXCI7XHJcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcIkRJU1BMQVlfTk9USUZJQ0FUSU9OXCJdID0gM10gPSBcIkRJU1BMQVlfTk9USUZJQ0FUSU9OXCI7XHJcbn0pKE1lc3NhZ2VUeXBlJDEgfHwgKE1lc3NhZ2VUeXBlJDEgPSB7fSkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxyXG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZVxyXG4gKiBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzc1xyXG4gKiBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyXHJcbiAqIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIE1lc3NhZ2VUeXBlO1xyXG4oZnVuY3Rpb24gKE1lc3NhZ2VUeXBlKSB7XHJcbiAgICBNZXNzYWdlVHlwZVtcIlBVU0hfUkVDRUlWRURcIl0gPSBcInB1c2gtcmVjZWl2ZWRcIjtcclxuICAgIE1lc3NhZ2VUeXBlW1wiTk9USUZJQ0FUSU9OX0NMSUNLRURcIl0gPSBcIm5vdGlmaWNhdGlvbi1jbGlja2VkXCI7XHJcbn0pKE1lc3NhZ2VUeXBlIHx8IChNZXNzYWdlVHlwZSA9IHt9KSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGFycmF5VG9CYXNlNjQoYXJyYXkpIHtcclxuICAgIHZhciB1aW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpO1xyXG4gICAgdmFyIGJhc2U2NFN0cmluZyA9IGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRzbGliLl9fc3ByZWFkQXJyYXkoW10sIHRzbGliLl9fcmVhZCh1aW50OEFycmF5KSwgZmFsc2UpKSk7XHJcbiAgICByZXR1cm4gYmFzZTY0U3RyaW5nLnJlcGxhY2UoLz0vZywgJycpLnJlcGxhY2UoL1xcKy9nLCAnLScpLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xyXG59XHJcbmZ1bmN0aW9uIGJhc2U2NFRvQXJyYXkoYmFzZTY0U3RyaW5nKSB7XHJcbiAgICB2YXIgcGFkZGluZyA9ICc9Jy5yZXBlYXQoKDQgLSAoYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpKSAlIDQpO1xyXG4gICAgdmFyIGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXC0vZywgJysnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgICB2YXIgcmF3RGF0YSA9IGF0b2IoYmFzZTY0KTtcclxuICAgIHZhciBvdXRwdXRBcnJheSA9IG5ldyBVaW50OEFycmF5KHJhd0RhdGEubGVuZ3RoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dEFycmF5O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBPTERfREJfTkFNRSA9ICdmY21fdG9rZW5fZGV0YWlsc19kYic7XHJcbi8qKlxyXG4gKiBUaGUgbGFzdCBEQiB2ZXJzaW9uIG9mICdmY21fdG9rZW5fZGV0YWlsc19kYicgd2FzIDQuIFRoaXMgaXMgb25lIGhpZ2hlciwgc28gdGhhdCB0aGUgdXBncmFkZVxyXG4gKiBjYWxsYmFjayBpcyBjYWxsZWQgZm9yIGFsbCB2ZXJzaW9ucyBvZiB0aGUgb2xkIERCLlxyXG4gKi9cclxudmFyIE9MRF9EQl9WRVJTSU9OID0gNTtcclxudmFyIE9MRF9PQkpFQ1RfU1RPUkVfTkFNRSA9ICdmY21fdG9rZW5fb2JqZWN0X1N0b3JlJztcclxuZnVuY3Rpb24gbWlncmF0ZU9sZERhdGFiYXNlKHNlbmRlcklkKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRhdGFiYXNlcywgZGJOYW1lcywgdG9rZW5EZXRhaWxzLCBkYjtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKCdkYXRhYmFzZXMnIGluIGluZGV4ZWREQikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluZGV4ZWREQi5kYXRhYmFzZXMoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2VzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRiTmFtZXMgPSBkYXRhYmFzZXMubWFwKGZ1bmN0aW9uIChkYikgeyByZXR1cm4gZGIubmFtZTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYk5hbWVzLmluY2x1ZGVzKE9MRF9EQl9OQU1FKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbGQgREIgZGlkbid0IGV4aXN0LCBubyBuZWVkIHRvIG9wZW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuRGV0YWlscyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaWRiLm9wZW5EQihPTERfREJfTkFNRSwgT0xEX0RCX1ZFUlNJT04sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZ3JhZGU6IGZ1bmN0aW9uIChkYiwgb2xkVmVyc2lvbiwgbmV3VmVyc2lvbiwgdXBncmFkZVRyYW5zYWN0aW9uKSB7IHJldHVybiB0c2xpYi5fX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iamVjdFN0b3JlLCB2YWx1ZSwgb2xkRGV0YWlscywgb2xkRGV0YWlscywgb2xkRGV0YWlscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZlcnNpb24gPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdGFiYXNlIHRvbyBvbGQsIHNraXAgbWlncmF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhPTERfT0JKRUNUX1NUT1JFX05BTUUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdGFiYXNlIGRpZCBub3QgZXhpc3QuIE5vdGhpbmcgdG8gZG8uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUgPSB1cGdyYWRlVHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoT0xEX09CSkVDVF9TVE9SRV9OQU1FKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBvYmplY3RTdG9yZS5pbmRleCgnZmNtU2VuZGVySWQnKS5nZXQoc2VuZGVySWQpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBvYmplY3RTdG9yZS5jbGVhcigpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBlbnRyeSBpbiB0aGUgZGF0YWJhc2UsIG5vdGhpbmcgdG8gbWlncmF0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmVyc2lvbiA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZXRhaWxzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2xkRGV0YWlscy5hdXRoIHx8ICFvbGREZXRhaWxzLnAyNTZkaCB8fCAhb2xkRGV0YWlscy5lbmRwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuRGV0YWlscyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiBvbGREZXRhaWxzLmZjbVRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZTogKF9hID0gb2xkRGV0YWlscy5jcmVhdGVUaW1lKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IG9sZERldGFpbHMuYXV0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwMjU2ZGg6IG9sZERldGFpbHMucDI1NmRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiBvbGREZXRhaWxzLmVuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3U2NvcGU6IG9sZERldGFpbHMuc3dTY29wZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXBpZEtleTogdHlwZW9mIG9sZERldGFpbHMudmFwaWRLZXkgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb2xkRGV0YWlscy52YXBpZEtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFycmF5VG9CYXNlNjQob2xkRGV0YWlscy52YXBpZEtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob2xkVmVyc2lvbiA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZXRhaWxzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuRGV0YWlscyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiBvbGREZXRhaWxzLmZjbVRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZTogb2xkRGV0YWlscy5jcmVhdGVUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IGFycmF5VG9CYXNlNjQob2xkRGV0YWlscy5hdXRoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwMjU2ZGg6IGFycmF5VG9CYXNlNjQob2xkRGV0YWlscy5wMjU2ZGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiBvbGREZXRhaWxzLmVuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3U2NvcGU6IG9sZERldGFpbHMuc3dTY29wZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXBpZEtleTogYXJyYXlUb0Jhc2U2NChvbGREZXRhaWxzLnZhcGlkS2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvbGRWZXJzaW9uID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERldGFpbHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5EZXRhaWxzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IG9sZERldGFpbHMuZmNtVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiBvbGREZXRhaWxzLmNyZWF0ZVRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25PcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJyYXlUb0Jhc2U2NChvbGREZXRhaWxzLmF1dGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAyNTZkaDogYXJyYXlUb0Jhc2U2NChvbGREZXRhaWxzLnAyNTZkaCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IG9sZERldGFpbHMuZW5kcG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dTY29wZTogb2xkRGV0YWlscy5zd1Njb3BlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcGlkS2V5OiBhcnJheVRvQmFzZTY0KG9sZERldGFpbHMudmFwaWRLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGRiID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIGFsbCBvbGQgZGF0YWJhc2VzLlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGlkYi5kZWxldGVEQihPTERfREJfTkFNRSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBhbGwgb2xkIGRhdGFiYXNlcy5cclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaWRiLmRlbGV0ZURCKCdmY21fdmFwaWRfZGV0YWlsc19kYicpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaWRiLmRlbGV0ZURCKCd1bmRlZmluZWQnKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBjaGVja1Rva2VuRGV0YWlscyh0b2tlbkRldGFpbHMpID8gdG9rZW5EZXRhaWxzIDogbnVsbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoZWNrVG9rZW5EZXRhaWxzKHRva2VuRGV0YWlscykge1xyXG4gICAgaWYgKCF0b2tlbkRldGFpbHMgfHwgIXRva2VuRGV0YWlscy5zdWJzY3JpcHRpb25PcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIHN1YnNjcmlwdGlvbk9wdGlvbnMgPSB0b2tlbkRldGFpbHMuc3Vic2NyaXB0aW9uT3B0aW9ucztcclxuICAgIHJldHVybiAodHlwZW9mIHRva2VuRGV0YWlscy5jcmVhdGVUaW1lID09PSAnbnVtYmVyJyAmJlxyXG4gICAgICAgIHRva2VuRGV0YWlscy5jcmVhdGVUaW1lID4gMCAmJlxyXG4gICAgICAgIHR5cGVvZiB0b2tlbkRldGFpbHMudG9rZW4gPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgdG9rZW5EZXRhaWxzLnRva2VuLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICB0eXBlb2Ygc3Vic2NyaXB0aW9uT3B0aW9ucy5hdXRoID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgIHN1YnNjcmlwdGlvbk9wdGlvbnMuYXV0aC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgdHlwZW9mIHN1YnNjcmlwdGlvbk9wdGlvbnMucDI1NmRoID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgIHN1YnNjcmlwdGlvbk9wdGlvbnMucDI1NmRoLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICB0eXBlb2Ygc3Vic2NyaXB0aW9uT3B0aW9ucy5lbmRwb2ludCA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICBzdWJzY3JpcHRpb25PcHRpb25zLmVuZHBvaW50Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgICB0eXBlb2Ygc3Vic2NyaXB0aW9uT3B0aW9ucy5zd1Njb3BlID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgIHN1YnNjcmlwdGlvbk9wdGlvbnMuc3dTY29wZS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgdHlwZW9mIHN1YnNjcmlwdGlvbk9wdGlvbnMudmFwaWRLZXkgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgc3Vic2NyaXB0aW9uT3B0aW9ucy52YXBpZEtleS5sZW5ndGggPiAwKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vLyBFeHBvcnRlZCBmb3IgdGVzdHMuXHJcbnZhciBEQVRBQkFTRV9OQU1FID0gJ2ZpcmViYXNlLW1lc3NhZ2luZy1kYXRhYmFzZSc7XHJcbnZhciBEQVRBQkFTRV9WRVJTSU9OID0gMTtcclxudmFyIE9CSkVDVF9TVE9SRV9OQU1FID0gJ2ZpcmViYXNlLW1lc3NhZ2luZy1zdG9yZSc7XHJcbnZhciBkYlByb21pc2UgPSBudWxsO1xyXG5mdW5jdGlvbiBnZXREYlByb21pc2UoKSB7XHJcbiAgICBpZiAoIWRiUHJvbWlzZSkge1xyXG4gICAgICAgIGRiUHJvbWlzZSA9IGlkYi5vcGVuREIoREFUQUJBU0VfTkFNRSwgREFUQUJBU0VfVkVSU0lPTiwge1xyXG4gICAgICAgICAgICB1cGdyYWRlOiBmdW5jdGlvbiAodXBncmFkZURiLCBvbGRWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB1c2UgJ2JyZWFrJyBpbiB0aGlzIHN3aXRjaCBzdGF0ZW1lbnQsIHRoZSBmYWxsLXRocm91Z2ggYmVoYXZpb3IgaXMgd2hhdCB3ZSB3YW50LFxyXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgdmVyc2lvbnMgYmV0d2VlbiB0aGUgb2xkIHZlcnNpb24gYW5kIHRoZSBjdXJyZW50IHZlcnNpb24sIHdlXHJcbiAgICAgICAgICAgICAgICAvLyB3YW50IEFMTCB0aGUgbWlncmF0aW9ucyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9sZFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVEYi5jcmVhdGVPYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYlByb21pc2U7XHJcbn1cclxuLyoqIEdldHMgcmVjb3JkKHMpIGZyb20gdGhlIG9iamVjdFN0b3JlIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIGtleS4gKi9cclxuZnVuY3Rpb24gZGJHZXQoZmlyZWJhc2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIga2V5LCBkYiwgdG9rZW5EZXRhaWxzLCBvbGRUb2tlbkRldGFpbHM7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gZ2V0S2V5KGZpcmViYXNlRGVwZW5kZW5jaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXREYlByb21pc2UoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZGIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZGJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoa2V5KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5EZXRhaWxzID0gKF9hLnNlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0b2tlbkRldGFpbHMpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0b2tlbkRldGFpbHNdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCBtaWdyYXRlT2xkRGF0YWJhc2UoZmlyZWJhc2VEZXBlbmRlbmNpZXMuYXBwQ29uZmlnLnNlbmRlcklkKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVG9rZW5EZXRhaWxzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb2xkVG9rZW5EZXRhaWxzKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkYlNldChmaXJlYmFzZURlcGVuZGVuY2llcywgb2xkVG9rZW5EZXRhaWxzKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBvbGRUb2tlbkRldGFpbHNdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKiBBc3NpZ25zIG9yIG92ZXJ3cml0ZXMgdGhlIHJlY29yZCBmb3IgdGhlIGdpdmVuIGtleSB3aXRoIHRoZSBnaXZlbiB2YWx1ZS4gKi9cclxuZnVuY3Rpb24gZGJTZXQoZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHRva2VuRGV0YWlscykge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBrZXksIGRiLCB0eDtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBnZXRLZXkoZmlyZWJhc2VEZXBlbmRlbmNpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldERiUHJvbWlzZSgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBkYiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpLnB1dCh0b2tlbkRldGFpbHMsIGtleSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0eC5kb25lXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRva2VuRGV0YWlsc107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKiBSZW1vdmVzIHJlY29yZChzKSBmcm9tIHRoZSBvYmplY3RTdG9yZSB0aGF0IG1hdGNoIHRoZSBnaXZlbiBrZXkuICovXHJcbmZ1bmN0aW9uIGRiUmVtb3ZlKGZpcmViYXNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGtleSwgZGIsIHR4O1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGdldEtleShmaXJlYmFzZURlcGVuZGVuY2llcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0RGJQcm9taXNlKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGRiID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR4ID0gZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSkuZGVsZXRlKGtleSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0eC5kb25lXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRLZXkoX2EpIHtcclxuICAgIHZhciBhcHBDb25maWcgPSBfYS5hcHBDb25maWc7XHJcbiAgICByZXR1cm4gYXBwQ29uZmlnLmFwcElkO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBfYTtcclxudmFyIEVSUk9SX01BUCA9IChfYSA9IHt9LFxyXG4gICAgX2FbXCJtaXNzaW5nLWFwcC1jb25maWctdmFsdWVzXCIgLyogRXJyb3JDb2RlLk1JU1NJTkdfQVBQX0NPTkZJR19WQUxVRVMgKi9dID0gJ01pc3NpbmcgQXBwIGNvbmZpZ3VyYXRpb24gdmFsdWU6IFwieyR2YWx1ZU5hbWV9XCInLFxyXG4gICAgX2FbXCJvbmx5LWF2YWlsYWJsZS1pbi13aW5kb3dcIiAvKiBFcnJvckNvZGUuQVZBSUxBQkxFX0lOX1dJTkRPVyAqL10gPSAnVGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIGluIGEgV2luZG93IGNvbnRleHQuJyxcclxuICAgIF9hW1wib25seS1hdmFpbGFibGUtaW4tc3dcIiAvKiBFcnJvckNvZGUuQVZBSUxBQkxFX0lOX1NXICovXSA9ICdUaGlzIG1ldGhvZCBpcyBhdmFpbGFibGUgaW4gYSBzZXJ2aWNlIHdvcmtlciBjb250ZXh0LicsXHJcbiAgICBfYVtcInBlcm1pc3Npb24tZGVmYXVsdFwiIC8qIEVycm9yQ29kZS5QRVJNSVNTSU9OX0RFRkFVTFQgKi9dID0gJ1RoZSBub3RpZmljYXRpb24gcGVybWlzc2lvbiB3YXMgbm90IGdyYW50ZWQgYW5kIGRpc21pc3NlZCBpbnN0ZWFkLicsXHJcbiAgICBfYVtcInBlcm1pc3Npb24tYmxvY2tlZFwiIC8qIEVycm9yQ29kZS5QRVJNSVNTSU9OX0JMT0NLRUQgKi9dID0gJ1RoZSBub3RpZmljYXRpb24gcGVybWlzc2lvbiB3YXMgbm90IGdyYW50ZWQgYW5kIGJsb2NrZWQgaW5zdGVhZC4nLFxyXG4gICAgX2FbXCJ1bnN1cHBvcnRlZC1icm93c2VyXCIgLyogRXJyb3JDb2RlLlVOU1VQUE9SVEVEX0JST1dTRVIgKi9dID0gXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRoZSBBUEkncyByZXF1aXJlZCB0byB1c2UgdGhlIEZpcmViYXNlIFNESy5cIixcclxuICAgIF9hW1wiaW5kZXhlZC1kYi11bnN1cHBvcnRlZFwiIC8qIEVycm9yQ29kZS5JTkRFWEVEX0RCX1VOU1VQUE9SVEVEICovXSA9IFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBpbmRleGVkRGIub3BlbigpIChleC4gU2FmYXJpIGlGcmFtZSwgRmlyZWZveCBQcml2YXRlIEJyb3dzaW5nLCBldGMpXCIsXHJcbiAgICBfYVtcImZhaWxlZC1zZXJ2aWNlLXdvcmtlci1yZWdpc3RyYXRpb25cIiAvKiBFcnJvckNvZGUuRkFJTEVEX0RFRkFVTFRfUkVHSVNUUkFUSU9OICovXSA9ICdXZSBhcmUgdW5hYmxlIHRvIHJlZ2lzdGVyIHRoZSBkZWZhdWx0IHNlcnZpY2Ugd29ya2VyLiB7JGJyb3dzZXJFcnJvck1lc3NhZ2V9JyxcclxuICAgIF9hW1widG9rZW4tc3Vic2NyaWJlLWZhaWxlZFwiIC8qIEVycm9yQ29kZS5UT0tFTl9TVUJTQ1JJQkVfRkFJTEVEICovXSA9ICdBIHByb2JsZW0gb2NjdXJyZWQgd2hpbGUgc3Vic2NyaWJpbmcgdGhlIHVzZXIgdG8gRkNNOiB7JGVycm9ySW5mb30nLFxyXG4gICAgX2FbXCJ0b2tlbi1zdWJzY3JpYmUtbm8tdG9rZW5cIiAvKiBFcnJvckNvZGUuVE9LRU5fU1VCU0NSSUJFX05PX1RPS0VOICovXSA9ICdGQ00gcmV0dXJuZWQgbm8gdG9rZW4gd2hlbiBzdWJzY3JpYmluZyB0aGUgdXNlciB0byBwdXNoLicsXHJcbiAgICBfYVtcInRva2VuLXVuc3Vic2NyaWJlLWZhaWxlZFwiIC8qIEVycm9yQ29kZS5UT0tFTl9VTlNVQlNDUklCRV9GQUlMRUQgKi9dID0gJ0EgcHJvYmxlbSBvY2N1cnJlZCB3aGlsZSB1bnN1YnNjcmliaW5nIHRoZSAnICtcclxuICAgICAgICAndXNlciBmcm9tIEZDTTogeyRlcnJvckluZm99JyxcclxuICAgIF9hW1widG9rZW4tdXBkYXRlLWZhaWxlZFwiIC8qIEVycm9yQ29kZS5UT0tFTl9VUERBVEVfRkFJTEVEICovXSA9ICdBIHByb2JsZW0gb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdGhlIHVzZXIgZnJvbSBGQ006IHskZXJyb3JJbmZvfScsXHJcbiAgICBfYVtcInRva2VuLXVwZGF0ZS1uby10b2tlblwiIC8qIEVycm9yQ29kZS5UT0tFTl9VUERBVEVfTk9fVE9LRU4gKi9dID0gJ0ZDTSByZXR1cm5lZCBubyB0b2tlbiB3aGVuIHVwZGF0aW5nIHRoZSB1c2VyIHRvIHB1c2guJyxcclxuICAgIF9hW1widXNlLXN3LWFmdGVyLWdldC10b2tlblwiIC8qIEVycm9yQ29kZS5VU0VfU1dfQUZURVJfR0VUX1RPS0VOICovXSA9ICdUaGUgdXNlU2VydmljZVdvcmtlcigpIG1ldGhvZCBtYXkgb25seSBiZSBjYWxsZWQgb25jZSBhbmQgbXVzdCBiZSAnICtcclxuICAgICAgICAnY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGdldFRva2VuKCkgdG8gZW5zdXJlIHlvdXIgc2VydmljZSB3b3JrZXIgaXMgdXNlZC4nLFxyXG4gICAgX2FbXCJpbnZhbGlkLXN3LXJlZ2lzdHJhdGlvblwiIC8qIEVycm9yQ29kZS5JTlZBTElEX1NXX1JFR0lTVFJBVElPTiAqL10gPSAnVGhlIGlucHV0IHRvIHVzZVNlcnZpY2VXb3JrZXIoKSBtdXN0IGJlIGEgU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi4nLFxyXG4gICAgX2FbXCJpbnZhbGlkLWJnLWhhbmRsZXJcIiAvKiBFcnJvckNvZGUuSU5WQUxJRF9CR19IQU5ETEVSICovXSA9ICdUaGUgaW5wdXQgdG8gc2V0QmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyKCkgbXVzdCBiZSBhIGZ1bmN0aW9uLicsXHJcbiAgICBfYVtcImludmFsaWQtdmFwaWQta2V5XCIgLyogRXJyb3JDb2RlLklOVkFMSURfVkFQSURfS0VZICovXSA9ICdUaGUgcHVibGljIFZBUElEIGtleSBtdXN0IGJlIGEgc3RyaW5nLicsXHJcbiAgICBfYVtcInVzZS12YXBpZC1rZXktYWZ0ZXItZ2V0LXRva2VuXCIgLyogRXJyb3JDb2RlLlVTRV9WQVBJRF9LRVlfQUZURVJfR0VUX1RPS0VOICovXSA9ICdUaGUgdXNlUHVibGljVmFwaWRLZXkoKSBtZXRob2QgbWF5IG9ubHkgYmUgY2FsbGVkIG9uY2UgYW5kIG11c3QgYmUgJyArXHJcbiAgICAgICAgJ2NhbGxlZCBiZWZvcmUgY2FsbGluZyBnZXRUb2tlbigpIHRvIGVuc3VyZSB5b3VyIFZBUElEIGtleSBpcyB1c2VkLicsXHJcbiAgICBfYSk7XHJcbnZhciBFUlJPUl9GQUNUT1JZID0gbmV3IHV0aWwuRXJyb3JGYWN0b3J5KCdtZXNzYWdpbmcnLCAnTWVzc2FnaW5nJywgRVJST1JfTUFQKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gcmVxdWVzdEdldFRva2VuKGZpcmViYXNlRGVwZW5kZW5jaWVzLCBzdWJzY3JpcHRpb25PcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMsIGJvZHksIHN1YnNjcmliZU9wdGlvbnMsIHJlc3BvbnNlRGF0YSwgcmVzcG9uc2UsIGVycl8xLCBtZXNzYWdlO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRIZWFkZXJzKGZpcmViYXNlRGVwZW5kZW5jaWVzKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gZ2V0Qm9keShzdWJzY3JpcHRpb25PcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDUsICwgNl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKGdldEVuZHBvaW50KGZpcmViYXNlRGVwZW5kZW5jaWVzLmFwcENvbmZpZyksIHN1YnNjcmliZU9wdGlvbnMpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS5qc29uKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInRva2VuLXN1YnNjcmliZS1mYWlsZWRcIiAvKiBFcnJvckNvZGUuVE9LRU5fU1VCU0NSSUJFX0ZBSUxFRCAqLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckluZm86IGVycl8xID09PSBudWxsIHx8IGVycl8xID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJfMS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gcmVzcG9uc2VEYXRhLmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidG9rZW4tc3Vic2NyaWJlLWZhaWxlZFwiIC8qIEVycm9yQ29kZS5UT0tFTl9TVUJTQ1JJQkVfRkFJTEVEICovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckluZm86IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2VEYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidG9rZW4tc3Vic2NyaWJlLW5vLXRva2VuXCIgLyogRXJyb3JDb2RlLlRPS0VOX1NVQlNDUklCRV9OT19UT0tFTiAqLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZURhdGEudG9rZW5dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiByZXF1ZXN0VXBkYXRlVG9rZW4oZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHRva2VuRGV0YWlscykge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBoZWFkZXJzLCBib2R5LCB1cGRhdGVPcHRpb25zLCByZXNwb25zZURhdGEsIHJlc3BvbnNlLCBlcnJfMiwgbWVzc2FnZTtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0SGVhZGVycyhmaXJlYmFzZURlcGVuZGVuY2llcyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IGdldEJvZHkodG9rZW5EZXRhaWxzLnN1YnNjcmlwdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDUsICwgNl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiXCIuY29uY2F0KGdldEVuZHBvaW50KGZpcmViYXNlRGVwZW5kZW5jaWVzLmFwcENvbmZpZyksIFwiL1wiKS5jb25jYXQodG9rZW5EZXRhaWxzLnRva2VuKSwgdXBkYXRlT3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlc3BvbnNlLmpzb24oKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIGVycl8yID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidG9rZW4tdXBkYXRlLWZhaWxlZFwiIC8qIEVycm9yQ29kZS5UT0tFTl9VUERBVEVfRkFJTEVEICovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ySW5mbzogZXJyXzIgPT09IG51bGwgfHwgZXJyXzIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycl8yLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VEYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSByZXNwb25zZURhdGEuZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ0b2tlbi11cGRhdGUtZmFpbGVkXCIgLyogRXJyb3JDb2RlLlRPS0VOX1VQREFURV9GQUlMRUQgKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ySW5mbzogbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZURhdGEudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ0b2tlbi11cGRhdGUtbm8tdG9rZW5cIiAvKiBFcnJvckNvZGUuVE9LRU5fVVBEQVRFX05PX1RPS0VOICovKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlRGF0YS50b2tlbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlcXVlc3REZWxldGVUb2tlbihmaXJlYmFzZURlcGVuZGVuY2llcywgdG9rZW4pIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaGVhZGVycywgdW5zdWJzY3JpYmVPcHRpb25zLCByZXNwb25zZSwgcmVzcG9uc2VEYXRhLCBtZXNzYWdlLCBlcnJfMztcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0SGVhZGVycyhmaXJlYmFzZURlcGVuZGVuY2llcyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA1LCAsIDZdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChcIlwiLmNvbmNhdChnZXRFbmRwb2ludChmaXJlYmFzZURlcGVuZGVuY2llcy5hcHBDb25maWcpLCBcIi9cIikuY29uY2F0KHRva2VuKSwgdW5zdWJzY3JpYmVPcHRpb25zKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gcmVzcG9uc2VEYXRhLmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidG9rZW4tdW5zdWJzY3JpYmUtZmFpbGVkXCIgLyogRXJyb3JDb2RlLlRPS0VOX1VOU1VCU0NSSUJFX0ZBSUxFRCAqLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JJbmZvOiBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBlcnJfMyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInRva2VuLXVuc3Vic2NyaWJlLWZhaWxlZFwiIC8qIEVycm9yQ29kZS5UT0tFTl9VTlNVQlNDUklCRV9GQUlMRUQgKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JJbmZvOiBlcnJfMyA9PT0gbnVsbCB8fCBlcnJfMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyXzMudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldEVuZHBvaW50KF9hKSB7XHJcbiAgICB2YXIgcHJvamVjdElkID0gX2EucHJvamVjdElkO1xyXG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KEVORFBPSU5ULCBcIi9wcm9qZWN0cy9cIikuY29uY2F0KHByb2plY3RJZCwgXCIvcmVnaXN0cmF0aW9uc1wiKTtcclxufVxyXG5mdW5jdGlvbiBnZXRIZWFkZXJzKF9hKSB7XHJcbiAgICB2YXIgYXBwQ29uZmlnID0gX2EuYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25zID0gX2EuaW5zdGFsbGF0aW9ucztcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXV0aFRva2VuO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBpbnN0YWxsYXRpb25zLmdldFRva2VuKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhUb2tlbiA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3gtZ29vZy1hcGkta2V5JzogYXBwQ29uZmlnLmFwaUtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4LWdvb2ctZmlyZWJhc2UtaW5zdGFsbGF0aW9ucy1hdXRoJzogXCJGSVMgXCIuY29uY2F0KGF1dGhUb2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRCb2R5KF9hKSB7XHJcbiAgICB2YXIgcDI1NmRoID0gX2EucDI1NmRoLCBhdXRoID0gX2EuYXV0aCwgZW5kcG9pbnQgPSBfYS5lbmRwb2ludCwgdmFwaWRLZXkgPSBfYS52YXBpZEtleTtcclxuICAgIHZhciBib2R5ID0ge1xyXG4gICAgICAgIHdlYjoge1xyXG4gICAgICAgICAgICBlbmRwb2ludDogZW5kcG9pbnQsXHJcbiAgICAgICAgICAgIGF1dGg6IGF1dGgsXHJcbiAgICAgICAgICAgIHAyNTZkaDogcDI1NmRoXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlmICh2YXBpZEtleSAhPT0gREVGQVVMVF9WQVBJRF9LRVkpIHtcclxuICAgICAgICBib2R5LndlYi5hcHBsaWNhdGlvblB1YktleSA9IHZhcGlkS2V5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJvZHk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLy8gVXBkYXRlUmVnaXN0cmF0aW9uIHdpbGwgYmUgY2FsbGVkIG9uY2UgZXZlcnkgd2Vlay5cclxudmFyIFRPS0VOX0VYUElSQVRJT05fTVMgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDsgLy8gNyBkYXlzXHJcbmZ1bmN0aW9uIGdldFRva2VuSW50ZXJuYWwobWVzc2FnaW5nKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHB1c2hTdWJzY3JpcHRpb24sIHN1YnNjcmlwdGlvbk9wdGlvbnMsIHRva2VuRGV0YWlscywgZV8xO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRQdXNoU3Vic2NyaXB0aW9uKG1lc3NhZ2luZy5zd1JlZ2lzdHJhdGlvbiwgbWVzc2FnaW5nLnZhcGlkS2V5KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcHVzaFN1YnNjcmlwdGlvbiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25PcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXBpZEtleTogbWVzc2FnaW5nLnZhcGlkS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd1Njb3BlOiBtZXNzYWdpbmcuc3dSZWdpc3RyYXRpb24uc2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiBwdXNoU3Vic2NyaXB0aW9uLmVuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcnJheVRvQmFzZTY0KHB1c2hTdWJzY3JpcHRpb24uZ2V0S2V5KCdhdXRoJykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwMjU2ZGg6IGFycmF5VG9CYXNlNjQocHVzaFN1YnNjcmlwdGlvbi5nZXRLZXkoJ3AyNTZkaCcpKVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZGJHZXQobWVzc2FnaW5nLmZpcmViYXNlRGVwZW5kZW5jaWVzKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5EZXRhaWxzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIXRva2VuRGV0YWlscykgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gdG9rZW4sIGdldCBhIG5ldyBvbmUuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdldE5ld1Rva2VuKG1lc3NhZ2luZy5maXJlYmFzZURlcGVuZGVuY2llcywgc3Vic2NyaXB0aW9uT3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIWlzVG9rZW5WYWxpZCh0b2tlbkRldGFpbHMuc3Vic2NyaXB0aW9uT3B0aW9ucywgc3Vic2NyaXB0aW9uT3B0aW9ucykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzQsIDYsICwgN10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3REZWxldGVUb2tlbihtZXNzYWdpbmcuZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHRva2VuRGV0YWlscy50b2tlbildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcHJlc3MgZXJyb3JzIGJlY2F1c2Ugb2YgIzIzNjRcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZV8xKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdldE5ld1Rva2VuKG1lc3NhZ2luZy5maXJlYmFzZURlcGVuZGVuY2llcywgc3Vic2NyaXB0aW9uT3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpID49IHRva2VuRGV0YWlscy5jcmVhdGVUaW1lICsgVE9LRU5fRVhQSVJBVElPTl9NUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZWVrbHkgdG9rZW4gcmVmcmVzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdXBkYXRlVG9rZW4obWVzc2FnaW5nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRva2VuRGV0YWlscy50b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbk9wdGlvbnM6IHN1YnNjcmlwdGlvbk9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkIHRva2VuLCBub3RoaW5nIHRvIGRvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdG9rZW5EZXRhaWxzLnRva2VuXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDk6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGRlbGV0ZXMgdGhlIHRva2VuIGZyb20gdGhlIGRhdGFiYXNlLCB1bnN1YnNjcmliZXMgdGhlIHRva2VuIGZyb20gRkNNLCBhbmQgdW5yZWdpc3RlcnNcclxuICogdGhlIHB1c2ggc3Vic2NyaXB0aW9uIGlmIGl0IGV4aXN0cy5cclxuICovXHJcbmZ1bmN0aW9uIGRlbGV0ZVRva2VuSW50ZXJuYWwobWVzc2FnaW5nKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuRGV0YWlscywgcHVzaFN1YnNjcmlwdGlvbjtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZGJHZXQobWVzc2FnaW5nLmZpcmViYXNlRGVwZW5kZW5jaWVzKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5EZXRhaWxzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdG9rZW5EZXRhaWxzKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0RGVsZXRlVG9rZW4obWVzc2FnaW5nLmZpcmViYXNlRGVwZW5kZW5jaWVzLCB0b2tlbkRldGFpbHMudG9rZW4pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZGJSZW1vdmUobWVzc2FnaW5nLmZpcmViYXNlRGVwZW5kZW5jaWVzKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFs0IC8qeWllbGQqLywgbWVzc2FnaW5nLnN3UmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBwdXNoU3Vic2NyaXB0aW9uID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwdXNoU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBwdXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIFNXLCBjb25zaWRlciBpdCBhIHN1Y2Nlc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRydWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVUb2tlbihtZXNzYWdpbmcsIHRva2VuRGV0YWlscykge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB1cGRhdGVkVG9rZW4sIHVwZGF0ZWRUb2tlbkRldGFpbHMsIGVfMjtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDMsICwgNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcXVlc3RVcGRhdGVUb2tlbihtZXNzYWdpbmcuZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHRva2VuRGV0YWlscyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRUb2tlbiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkVG9rZW5EZXRhaWxzID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRva2VuRGV0YWlscyksIHsgdG9rZW46IHVwZGF0ZWRUb2tlbiwgY3JlYXRlVGltZTogRGF0ZS5ub3coKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkYlNldChtZXNzYWdpbmcuZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHVwZGF0ZWRUb2tlbkRldGFpbHMpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHVwZGF0ZWRUb2tlbl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGRlbGV0ZVRva2VuSW50ZXJuYWwobWVzc2FnaW5nKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVfMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXROZXdUb2tlbihmaXJlYmFzZURlcGVuZGVuY2llcywgc3Vic2NyaXB0aW9uT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0b2tlbiwgdG9rZW5EZXRhaWxzO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCByZXF1ZXN0R2V0VG9rZW4oZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHN1YnNjcmlwdGlvbk9wdGlvbnMpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbkRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uT3B0aW9uczogc3Vic2NyaXB0aW9uT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZGJTZXQoZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHRva2VuRGV0YWlscyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdG9rZW5EZXRhaWxzLnRva2VuXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAqIEdldHMgYSBQdXNoU3Vic2NyaXB0aW9uIGZvciB0aGUgY3VycmVudCB1c2VyLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UHVzaFN1YnNjcmlwdGlvbihzd1JlZ2lzdHJhdGlvbiwgdmFwaWRLZXkpIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uO1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBzd1JlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHN1YnNjcmlwdGlvbl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBzd1JlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hyb21lIDw9IDc1IGRvZXNuJ3Qgc3VwcG9ydCBiYXNlNjQtZW5jb2RlZCBWQVBJRCBrZXkuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBWQVBJRCBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1Ym1pdHRlZCB0byBwdXNoTWFuYWdlciNzdWJzY3JpYmUgbXVzdCBiZSBvZiB0eXBlIFVpbnQ4QXJyYXkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleTogYmFzZTY0VG9BcnJheSh2YXBpZEtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4vKipcclxuICogQ2hlY2tzIGlmIHRoZSBzYXZlZCB0b2tlbkRldGFpbHMgb2JqZWN0IG1hdGNoZXMgdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1Rva2VuVmFsaWQoZGJPcHRpb25zLCBjdXJyZW50T3B0aW9ucykge1xyXG4gICAgdmFyIGlzVmFwaWRLZXlFcXVhbCA9IGN1cnJlbnRPcHRpb25zLnZhcGlkS2V5ID09PSBkYk9wdGlvbnMudmFwaWRLZXk7XHJcbiAgICB2YXIgaXNFbmRwb2ludEVxdWFsID0gY3VycmVudE9wdGlvbnMuZW5kcG9pbnQgPT09IGRiT3B0aW9ucy5lbmRwb2ludDtcclxuICAgIHZhciBpc0F1dGhFcXVhbCA9IGN1cnJlbnRPcHRpb25zLmF1dGggPT09IGRiT3B0aW9ucy5hdXRoO1xyXG4gICAgdmFyIGlzUDI1NmRoRXF1YWwgPSBjdXJyZW50T3B0aW9ucy5wMjU2ZGggPT09IGRiT3B0aW9ucy5wMjU2ZGg7XHJcbiAgICByZXR1cm4gaXNWYXBpZEtleUVxdWFsICYmIGlzRW5kcG9pbnRFcXVhbCAmJiBpc0F1dGhFcXVhbCAmJiBpc1AyNTZkaEVxdWFsO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGV4dGVybmFsaXplUGF5bG9hZChpbnRlcm5hbFBheWxvYWQpIHtcclxuICAgIHZhciBwYXlsb2FkID0ge1xyXG4gICAgICAgIGZyb206IGludGVybmFsUGF5bG9hZC5mcm9tLFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcclxuICAgICAgICBjb2xsYXBzZUtleTogaW50ZXJuYWxQYXlsb2FkLmNvbGxhcHNlX2tleSxcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXHJcbiAgICAgICAgbWVzc2FnZUlkOiBpbnRlcm5hbFBheWxvYWQuZmNtTWVzc2FnZUlkXHJcbiAgICB9O1xyXG4gICAgcHJvcGFnYXRlTm90aWZpY2F0aW9uUGF5bG9hZChwYXlsb2FkLCBpbnRlcm5hbFBheWxvYWQpO1xyXG4gICAgcHJvcGFnYXRlRGF0YVBheWxvYWQocGF5bG9hZCwgaW50ZXJuYWxQYXlsb2FkKTtcclxuICAgIHByb3BhZ2F0ZUZjbU9wdGlvbnMocGF5bG9hZCwgaW50ZXJuYWxQYXlsb2FkKTtcclxuICAgIHJldHVybiBwYXlsb2FkO1xyXG59XHJcbmZ1bmN0aW9uIHByb3BhZ2F0ZU5vdGlmaWNhdGlvblBheWxvYWQocGF5bG9hZCwgbWVzc2FnZVBheWxvYWRJbnRlcm5hbCkge1xyXG4gICAgaWYgKCFtZXNzYWdlUGF5bG9hZEludGVybmFsLm5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBheWxvYWQubm90aWZpY2F0aW9uID0ge307XHJcbiAgICB2YXIgdGl0bGUgPSBtZXNzYWdlUGF5bG9hZEludGVybmFsLm5vdGlmaWNhdGlvbi50aXRsZTtcclxuICAgIGlmICghIXRpdGxlKSB7XHJcbiAgICAgICAgcGF5bG9hZC5ub3RpZmljYXRpb24udGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuICAgIHZhciBib2R5ID0gbWVzc2FnZVBheWxvYWRJbnRlcm5hbC5ub3RpZmljYXRpb24uYm9keTtcclxuICAgIGlmICghIWJvZHkpIHtcclxuICAgICAgICBwYXlsb2FkLm5vdGlmaWNhdGlvbi5ib2R5ID0gYm9keTtcclxuICAgIH1cclxuICAgIHZhciBpbWFnZSA9IG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwubm90aWZpY2F0aW9uLmltYWdlO1xyXG4gICAgaWYgKCEhaW1hZ2UpIHtcclxuICAgICAgICBwYXlsb2FkLm5vdGlmaWNhdGlvbi5pbWFnZSA9IGltYWdlO1xyXG4gICAgfVxyXG4gICAgdmFyIGljb24gPSBtZXNzYWdlUGF5bG9hZEludGVybmFsLm5vdGlmaWNhdGlvbi5pY29uO1xyXG4gICAgaWYgKCEhaWNvbikge1xyXG4gICAgICAgIHBheWxvYWQubm90aWZpY2F0aW9uLmljb24gPSBpY29uO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHByb3BhZ2F0ZURhdGFQYXlsb2FkKHBheWxvYWQsIG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwpIHtcclxuICAgIGlmICghbWVzc2FnZVBheWxvYWRJbnRlcm5hbC5kYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcGF5bG9hZC5kYXRhID0gbWVzc2FnZVBheWxvYWRJbnRlcm5hbC5kYXRhO1xyXG59XHJcbmZ1bmN0aW9uIHByb3BhZ2F0ZUZjbU9wdGlvbnMocGF5bG9hZCwgbWVzc2FnZVBheWxvYWRJbnRlcm5hbCkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcclxuICAgIC8vIGZjbU9wdGlvbnMubGluayB2YWx1ZSBpcyB3cml0dGVuIGludG8gbm90aWZpY2F0aW9uLmNsaWNrX2FjdGlvbi4gc2VlIG1vcmUgaW4gYi8yMzIwNzIxMTFcclxuICAgIGlmICghbWVzc2FnZVBheWxvYWRJbnRlcm5hbC5mY21PcHRpb25zICYmXHJcbiAgICAgICAgISgoX2EgPSBtZXNzYWdlUGF5bG9hZEludGVybmFsLm5vdGlmaWNhdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsaWNrX2FjdGlvbikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwYXlsb2FkLmZjbU9wdGlvbnMgPSB7fTtcclxuICAgIHZhciBsaW5rID0gKF9jID0gKF9iID0gbWVzc2FnZVBheWxvYWRJbnRlcm5hbC5mY21PcHRpb25zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubGluaykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogKF9kID0gbWVzc2FnZVBheWxvYWRJbnRlcm5hbC5ub3RpZmljYXRpb24pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jbGlja19hY3Rpb247XHJcbiAgICBpZiAoISFsaW5rKSB7XHJcbiAgICAgICAgcGF5bG9hZC5mY21PcHRpb25zLmxpbmsgPSBsaW5rO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxyXG4gICAgdmFyIGFuYWx5dGljc0xhYmVsID0gKF9lID0gbWVzc2FnZVBheWxvYWRJbnRlcm5hbC5mY21PcHRpb25zKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuYW5hbHl0aWNzX2xhYmVsO1xyXG4gICAgaWYgKCEhYW5hbHl0aWNzTGFiZWwpIHtcclxuICAgICAgICBwYXlsb2FkLmZjbU9wdGlvbnMuYW5hbHl0aWNzTGFiZWwgPSBhbmFseXRpY3NMYWJlbDtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0NvbnNvbGVNZXNzYWdlKGRhdGEpIHtcclxuICAgIC8vIFRoaXMgbWVzc2FnZSBoYXMgYSBjYW1wYWlnbiBJRCwgbWVhbmluZyBpdCB3YXMgc2VudCB1c2luZyB0aGUgRmlyZWJhc2UgQ29uc29sZS5cclxuICAgIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgISFkYXRhICYmIENPTlNPTEVfQ0FNUEFJR05fSUQgaW4gZGF0YTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5fbWVyZ2VTdHJpbmdzKCdodHMvZnJic2xnaWdwLm9nZXBzY212L2llby9lYXlsZycsICd0cDovaWVhZW9nbi1hZ29sYWkuby8xZnJsZ2xnYy9vJyk7XHJcbl9tZXJnZVN0cmluZ3MoJ0F6U0NidzYzZzFSMG5Ddzg1akc4JywgJ0lheWEzeUxLd21ndmg3Y0YwcTQnKTtcclxuZnVuY3Rpb24gX21lcmdlU3RyaW5ncyhzMSwgczIpIHtcclxuICAgIHZhciByZXN1bHRBcnJheSA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlc3VsdEFycmF5LnB1c2goczEuY2hhckF0KGkpKTtcclxuICAgICAgICBpZiAoaSA8IHMyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHRBcnJheS5wdXNoKHMyLmNoYXJBdChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdEFycmF5LmpvaW4oJycpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGV4dHJhY3RBcHBDb25maWcoYXBwKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIGlmICghYXBwIHx8ICFhcHAub3B0aW9ucykge1xyXG4gICAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKCdBcHAgQ29uZmlndXJhdGlvbiBPYmplY3QnKTtcclxuICAgIH1cclxuICAgIGlmICghYXBwLm5hbWUpIHtcclxuICAgICAgICB0aHJvdyBnZXRNaXNzaW5nVmFsdWVFcnJvcignQXBwIE5hbWUnKTtcclxuICAgIH1cclxuICAgIC8vIFJlcXVpcmVkIGFwcCBjb25maWcga2V5c1xyXG4gICAgdmFyIGNvbmZpZ0tleXMgPSBbXHJcbiAgICAgICAgJ3Byb2plY3RJZCcsXHJcbiAgICAgICAgJ2FwaUtleScsXHJcbiAgICAgICAgJ2FwcElkJyxcclxuICAgICAgICAnbWVzc2FnaW5nU2VuZGVySWQnXHJcbiAgICBdO1xyXG4gICAgdmFyIG9wdGlvbnMgPSBhcHAub3B0aW9ucztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgY29uZmlnS2V5c18xID0gdHNsaWIuX192YWx1ZXMoY29uZmlnS2V5cyksIGNvbmZpZ0tleXNfMV8xID0gY29uZmlnS2V5c18xLm5leHQoKTsgIWNvbmZpZ0tleXNfMV8xLmRvbmU7IGNvbmZpZ0tleXNfMV8xID0gY29uZmlnS2V5c18xLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIga2V5TmFtZSA9IGNvbmZpZ0tleXNfMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnNba2V5TmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKGtleU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWdLZXlzXzFfMSAmJiAhY29uZmlnS2V5c18xXzEuZG9uZSAmJiAoX2EgPSBjb25maWdLZXlzXzEucmV0dXJuKSkgX2EuY2FsbChjb25maWdLZXlzXzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFwcE5hbWU6IGFwcC5uYW1lLFxyXG4gICAgICAgIHByb2plY3RJZDogb3B0aW9ucy5wcm9qZWN0SWQsXHJcbiAgICAgICAgYXBpS2V5OiBvcHRpb25zLmFwaUtleSxcclxuICAgICAgICBhcHBJZDogb3B0aW9ucy5hcHBJZCxcclxuICAgICAgICBzZW5kZXJJZDogb3B0aW9ucy5tZXNzYWdpbmdTZW5kZXJJZFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXRNaXNzaW5nVmFsdWVFcnJvcih2YWx1ZU5hbWUpIHtcclxuICAgIHJldHVybiBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm1pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXNcIiAvKiBFcnJvckNvZGUuTUlTU0lOR19BUFBfQ09ORklHX1ZBTFVFUyAqLywge1xyXG4gICAgICAgIHZhbHVlTmFtZTogdmFsdWVOYW1lXHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgTWVzc2FnaW5nU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1lc3NhZ2luZ1NlcnZpY2UoYXBwLCBpbnN0YWxsYXRpb25zLCBhbmFseXRpY3NQcm92aWRlcikge1xyXG4gICAgICAgIC8vIGxvZ2dpbmcgaXMgb25seSBkb25lIHdpdGggZW5kIHVzZXIgY29uc2VudC4gRGVmYXVsdCB0byBmYWxzZS5cclxuICAgICAgICB0aGlzLmRlbGl2ZXJ5TWV0cmljc0V4cG9ydGVkVG9CaWdRdWVyeUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uQmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uTWVzc2FnZUhhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubG9nRXZlbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5pc0xvZ1NlcnZpY2VTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGFwcENvbmZpZyA9IGV4dHJhY3RBcHBDb25maWcoYXBwKTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlRGVwZW5kZW5jaWVzID0ge1xyXG4gICAgICAgICAgICBhcHA6IGFwcCxcclxuICAgICAgICAgICAgYXBwQ29uZmlnOiBhcHBDb25maWcsXHJcbiAgICAgICAgICAgIGluc3RhbGxhdGlvbnM6IGluc3RhbGxhdGlvbnMsXHJcbiAgICAgICAgICAgIGFuYWx5dGljc1Byb3ZpZGVyOiBhbmFseXRpY3NQcm92aWRlclxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBNZXNzYWdpbmdTZXJ2aWNlLnByb3RvdHlwZS5fZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWVzc2FnaW5nU2VydmljZTtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0U3cobWVzc2FnaW5nKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBlXzE7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IG1lc3NhZ2luZztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihERUZBVUxUX1NXX1BBVEgsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBERUZBVUxUX1NXX1NDT1BFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zd1JlZ2lzdHJhdGlvbiA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdGltaW5nIHdoZW4gYnJvd3NlciB1cGRhdGVzIHN3IHdoZW4gc3cgaGFzIGFuIHVwZGF0ZSBpcyB1bnJlbGlhYmxlIGZyb20gZXhwZXJpbWVudC4gSXRcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZWFkcyB0byB2ZXJzaW9uIGNvbmZsaWN0IHdoZW4gdGhlIFNESyB1cGdyYWRlcyB0byBhIG5ld2VyIHZlcnNpb24gaW4gdGhlIG1haW4gcGFnZSwgYnV0IHN3XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXMgc3R1Y2sgd2l0aCB0aGUgb2xkIHZlcnNpb24uIEZvciBleGFtcGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9maXJlYmFzZS9maXJlYmFzZS1qcy1zZGsvaXNzdWVzLzI1OTAgVGhlIGZvbGxvd2luZyBsaW5lIHJlbGlhYmx5IHVwZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdyBpZiB0aGVyZSB3YXMgYW4gdXBkYXRlLlxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2luZy5zd1JlZ2lzdHJhdGlvbi51cGRhdGUoKS5jYXRjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGl0IGlzIG5vbiBibG9ja2luZyBhbmQgd2UgZG9uJ3QgY2FyZSBpZiBpdCBmYWlsZWQgKi9cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJmYWlsZWQtc2VydmljZS13b3JrZXItcmVnaXN0cmF0aW9uXCIgLyogRXJyb3JDb2RlLkZBSUxFRF9ERUZBVUxUX1JFR0lTVFJBVElPTiAqLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicm93c2VyRXJyb3JNZXNzYWdlOiBlXzEgPT09IG51bGwgfHwgZV8xID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlXzEubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZVN3UmVnKG1lc3NhZ2luZywgc3dSZWdpc3RyYXRpb24pIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISghc3dSZWdpc3RyYXRpb24gJiYgIW1lc3NhZ2luZy5zd1JlZ2lzdHJhdGlvbikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlZ2lzdGVyRGVmYXVsdFN3KG1lc3NhZ2luZyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzd1JlZ2lzdHJhdGlvbiAmJiAhIW1lc3NhZ2luZy5zd1JlZ2lzdHJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHN3UmVnaXN0cmF0aW9uIGluc3RhbmNlb2YgU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnZhbGlkLXN3LXJlZ2lzdHJhdGlvblwiIC8qIEVycm9yQ29kZS5JTlZBTElEX1NXX1JFR0lTVFJBVElPTiAqLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2luZy5zd1JlZ2lzdHJhdGlvbiA9IHN3UmVnaXN0cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlVmFwaWRLZXkobWVzc2FnaW5nLCB2YXBpZEtleSkge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgaWYgKCEhdmFwaWRLZXkpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2luZy52YXBpZEtleSA9IHZhcGlkS2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFtZXNzYWdpbmcudmFwaWRLZXkpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2luZy52YXBpZEtleSA9IERFRkFVTFRfVkFQSURfS0VZO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldFRva2VuJDEobWVzc2FnaW5nLCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuYXZpZ2F0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJvbmx5LWF2YWlsYWJsZS1pbi13aW5kb3dcIiAvKiBFcnJvckNvZGUuQVZBSUxBQkxFX0lOX1dJTkRPVyAqLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZGVmYXVsdCcpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdncmFudGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInBlcm1pc3Npb24tYmxvY2tlZFwiIC8qIEVycm9yQ29kZS5QRVJNSVNTSU9OX0JMT0NLRUQgKi8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGRhdGVWYXBpZEtleShtZXNzYWdpbmcsIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXBpZEtleSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGRhdGVTd1JlZyhtZXNzYWdpbmcsIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBnZXRUb2tlbkludGVybmFsKG1lc3NhZ2luZyldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBsb2dUb1NjaW9uKG1lc3NhZ2luZywgbWVzc2FnZVR5cGUsIGRhdGEpIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZXZlbnRUeXBlLCBhbmFseXRpY3M7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlID0gZ2V0RXZlbnRUeXBlKG1lc3NhZ2VUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBtZXNzYWdpbmcuZmlyZWJhc2VEZXBlbmRlbmNpZXMuYW5hbHl0aWNzUHJvdmlkZXIuZ2V0KCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGFuYWx5dGljcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmFseXRpY3MubG9nRXZlbnQoZXZlbnRUeXBlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX2lkOiBkYXRhW0NPTlNPTEVfQ0FNUEFJR05fSURdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX25hbWU6IGRhdGFbQ09OU09MRV9DQU1QQUlHTl9OQU1FXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV90aW1lOiBkYXRhW0NPTlNPTEVfQ0FNUEFJR05fVElNRV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfZGV2aWNlX3RpbWU6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRFdmVudFR5cGUobWVzc2FnZVR5cGUpIHtcclxuICAgIHN3aXRjaCAobWVzc2FnZVR5cGUpIHtcclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLk5PVElGSUNBVElPTl9DTElDS0VEOlxyXG4gICAgICAgICAgICByZXR1cm4gJ25vdGlmaWNhdGlvbl9vcGVuJztcclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLlBVU0hfUkVDRUlWRUQ6XHJcbiAgICAgICAgICAgIHJldHVybiAnbm90aWZpY2F0aW9uX2ZvcmVncm91bmQnO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIG1lc3NhZ2VFdmVudExpc3RlbmVyKG1lc3NhZ2luZywgZXZlbnQpIHtcclxuICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW50ZXJuYWxQYXlsb2FkLCBkYXRhUGF5bG9hZDtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbFBheWxvYWQgPSBldmVudC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW50ZXJuYWxQYXlsb2FkLmlzRmlyZWJhc2VNZXNzYWdpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnaW5nLm9uTWVzc2FnZUhhbmRsZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxQYXlsb2FkLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5QVVNIX1JFQ0VJVkVEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnaW5nLm9uTWVzc2FnZUhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2luZy5vbk1lc3NhZ2VIYW5kbGVyKGV4dGVybmFsaXplUGF5bG9hZChpbnRlcm5hbFBheWxvYWQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2luZy5vbk1lc3NhZ2VIYW5kbGVyLm5leHQoZXh0ZXJuYWxpemVQYXlsb2FkKGludGVybmFsUGF5bG9hZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQYXlsb2FkID0gaW50ZXJuYWxQYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaXNDb25zb2xlTWVzc2FnZShkYXRhUGF5bG9hZCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBheWxvYWRbQ09OU09MRV9DQU1QQUlHTl9BTkFMWVRJQ1NfRU5BQkxFRF0gPT09ICcxJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGxvZ1RvU2Npb24obWVzc2FnaW5nLCBpbnRlcm5hbFBheWxvYWQubWVzc2FnZVR5cGUsIGRhdGFQYXlsb2FkKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxuXG52YXIgbmFtZSA9IFwiQGZpcmViYXNlL21lc3NhZ2luZ1wiO1xudmFyIHZlcnNpb24gPSBcIjAuMTIuN1wiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgV2luZG93TWVzc2FnaW5nRmFjdG9yeSA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuICAgIHZhciBtZXNzYWdpbmcgPSBuZXcgTWVzc2FnaW5nU2VydmljZShjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpLCBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2luc3RhbGxhdGlvbnMtaW50ZXJuYWwnKS5nZXRJbW1lZGlhdGUoKSwgY29udGFpbmVyLmdldFByb3ZpZGVyKCdhbmFseXRpY3MtaW50ZXJuYWwnKSk7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZUV2ZW50TGlzdGVuZXIobWVzc2FnaW5nLCBlKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1lc3NhZ2luZztcclxufTtcclxudmFyIFdpbmRvd01lc3NhZ2luZ0ludGVybmFsRmFjdG9yeSA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuICAgIHZhciBtZXNzYWdpbmcgPSBjb250YWluZXJcclxuICAgICAgICAuZ2V0UHJvdmlkZXIoJ21lc3NhZ2luZycpXHJcbiAgICAgICAgLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgdmFyIG1lc3NhZ2luZ0ludGVybmFsID0ge1xyXG4gICAgICAgIGdldFRva2VuOiBmdW5jdGlvbiAob3B0aW9ucykgeyByZXR1cm4gZ2V0VG9rZW4kMShtZXNzYWdpbmcsIG9wdGlvbnMpOyB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG1lc3NhZ2luZ0ludGVybmFsO1xyXG59O1xyXG5mdW5jdGlvbiByZWdpc3Rlck1lc3NhZ2luZ0luV2luZG93KCkge1xyXG4gICAgYXBwLl9yZWdpc3RlckNvbXBvbmVudChuZXcgY29tcG9uZW50LkNvbXBvbmVudCgnbWVzc2FnaW5nJywgV2luZG93TWVzc2FnaW5nRmFjdG9yeSwgXCJQVUJMSUNcIiAvKiBDb21wb25lbnRUeXBlLlBVQkxJQyAqLykpO1xyXG4gICAgYXBwLl9yZWdpc3RlckNvbXBvbmVudChuZXcgY29tcG9uZW50LkNvbXBvbmVudCgnbWVzc2FnaW5nLWludGVybmFsJywgV2luZG93TWVzc2FnaW5nSW50ZXJuYWxGYWN0b3J5LCBcIlBSSVZBVEVcIiAvKiBDb21wb25lbnRUeXBlLlBSSVZBVEUgKi8pKTtcclxuICAgIGFwcC5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbik7XHJcbiAgICAvLyBCVUlMRF9UQVJHRVQgd2lsbCBiZSByZXBsYWNlZCBieSB2YWx1ZXMgbGlrZSBlc201LCBlc20yMDE3LCBjanM1LCBldGMgZHVyaW5nIHRoZSBjb21waWxhdGlvblxyXG4gICAgYXBwLnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnY2pzNScpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYWxsIHJlcXVpcmVkIEFQSXMgZXhpc3QgaW4gdGhlIGJyb3dzZXIuXHJcbiAqIEByZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgYm9vbGVhbi5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gaXNXaW5kb3dTdXBwb3J0ZWQoKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHRocm93cyBpZiBvcGVuKCkgaXMgdW5zdXBwb3J0ZWQsIHNvIGFkZGluZyBpdCB0byB0aGUgY29uZGl0aW9uYWxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZW1lbnQgYmVsb3cgY2FuIGNhdXNlIGFuIHVuY2F1Z2h0IGVycm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHV0aWwudmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHRocm93cyBpZiBvcGVuKCkgaXMgdW5zdXBwb3J0ZWQsIHNvIGFkZGluZyBpdCB0byB0aGUgY29uZGl0aW9uYWxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZW1lbnQgYmVsb3cgY2FuIGNhdXNlIGFuIHVuY2F1Z2h0IGVycm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogXHJcbiAgICAgICAgICAgICAgICAvLyBmaXJlYmFzZS1qcy1zZGsvaXNzdWVzLzIzOTMgcmV2ZWFscyB0aGF0IGlkYiNvcGVuIGluIFNhZmFyaSBpZnJhbWUgYW5kIEZpcmVmb3ggcHJpdmF0ZSBicm93c2luZ1xyXG4gICAgICAgICAgICAgICAgLy8gbWlnaHQgYmUgcHJvaGliaXRlZCB0byBydW4uIEluIHRoZXNlIGNvbnRleHRzLCBhbiBlcnJvciB3b3VsZCBiZSB0aHJvd24gZHVyaW5nIHRoZSBtZXNzYWdpbmdcclxuICAgICAgICAgICAgICAgIC8vIGluc3RhbnRpYXRpbmcgcGhhc2UsIGluZm9ybWluZyB0aGUgZGV2ZWxvcGVycyB0byBpbXBvcnQvY2FsbCBpc1N1cHBvcnRlZCBmb3Igc3BlY2lhbCBoYW5kbGluZy5cclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5pc0luZGV4ZWREQkF2YWlsYWJsZSgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuYXJlQ29va2llc0VuYWJsZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdQdXNoTWFuYWdlcicgaW4gd2luZG93ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOb3RpZmljYXRpb24nIGluIHdpbmRvdyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmV0Y2gnIGluIHdpbmRvdyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnc2hvd05vdGlmaWNhdGlvbicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFB1c2hTdWJzY3JpcHRpb24ucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdnZXRLZXknKSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWxldGVUb2tlbiQxKG1lc3NhZ2luZykge1xyXG4gICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwib25seS1hdmFpbGFibGUtaW4td2luZG93XCIgLyogRXJyb3JDb2RlLkFWQUlMQUJMRV9JTl9XSU5ET1cgKi8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoISFtZXNzYWdpbmcuc3dSZWdpc3RyYXRpb24pIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlZ2lzdGVyRGVmYXVsdFN3KG1lc3NhZ2luZyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBkZWxldGVUb2tlbkludGVybmFsKG1lc3NhZ2luZyldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBvbk1lc3NhZ2UkMShtZXNzYWdpbmcsIG5leHRPck9ic2VydmVyKSB7XHJcbiAgICBpZiAoIW5hdmlnYXRvcikge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwib25seS1hdmFpbGFibGUtaW4td2luZG93XCIgLyogRXJyb3JDb2RlLkFWQUlMQUJMRV9JTl9XSU5ET1cgKi8pO1xyXG4gICAgfVxyXG4gICAgbWVzc2FnaW5nLm9uTWVzc2FnZUhhbmRsZXIgPSBuZXh0T3JPYnNlcnZlcjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWVzc2FnaW5nLm9uTWVzc2FnZUhhbmRsZXIgPSBudWxsO1xyXG4gICAgfTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmV0cmlldmVzIGEgRmlyZWJhc2UgQ2xvdWQgTWVzc2FnaW5nIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgRmlyZWJhc2UgQ2xvdWQgTWVzc2FnaW5nIGluc3RhbmNlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvdmlkZWQgZmlyZWJhc2UgYXBwLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRNZXNzYWdpbmdJbldpbmRvdyhhcHAkMSkge1xyXG4gICAgaWYgKGFwcCQxID09PSB2b2lkIDApIHsgYXBwJDEgPSBhcHAuZ2V0QXBwKCk7IH1cclxuICAgIC8vIENvbnNjaW91cyBkZWNpc2lvbiB0byBtYWtlIHRoaXMgYXN5bmMgY2hlY2sgbm9uLWJsb2NraW5nIGR1cmluZyB0aGUgbWVzc2FnaW5nIGluc3RhbmNlXHJcbiAgICAvLyBpbml0aWFsaXphdGlvbiBwaGFzZSBmb3IgcGVyZm9ybWFuY2UgY29uc2lkZXJhdGlvbi4gQW4gZXJyb3Igd291bGQgYmUgdGhyb3duIGxhdHRlciBmb3JcclxuICAgIC8vIGRldmVsb3BlcidzIGluZm9ybWF0aW9uLiBEZXZlbG9wZXJzIGNhbiB0aGVuIGNob29zZSB0byBpbXBvcnQgYW5kIGNhbGwgYGlzU3VwcG9ydGVkYCBmb3JcclxuICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcuXHJcbiAgICBpc1dpbmRvd1N1cHBvcnRlZCgpLnRoZW4oZnVuY3Rpb24gKGlzU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgLy8gSWYgYGlzV2luZG93U3VwcG9ydGVkKClgIHJlc29sdmVkLCBidXQgcmV0dXJuZWQgZmFsc2UuXHJcbiAgICAgICAgaWYgKCFpc1N1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInVuc3VwcG9ydGVkLWJyb3dzZXJcIiAvKiBFcnJvckNvZGUuVU5TVVBQT1JURURfQlJPV1NFUiAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgZnVuY3Rpb24gKF8pIHtcclxuICAgICAgICAvLyBJZiBgaXNXaW5kb3dTdXBwb3J0ZWQoKWAgcmVqZWN0ZWQuXHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbmRleGVkLWRiLXVuc3VwcG9ydGVkXCIgLyogRXJyb3JDb2RlLklOREVYRURfREJfVU5TVVBQT1JURUQgKi8pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBwLl9nZXRQcm92aWRlcih1dGlsLmdldE1vZHVsYXJJbnN0YW5jZShhcHAkMSksICdtZXNzYWdpbmcnKS5nZXRJbW1lZGlhdGUoKTtcclxufVxyXG4vKipcclxuICogU3Vic2NyaWJlcyB0aGUge0BsaW5rIE1lc3NhZ2luZ30gaW5zdGFuY2UgdG8gcHVzaCBub3RpZmljYXRpb25zLiBSZXR1cm5zIGEgRmlyZWJhc2UgQ2xvdWRcclxuICogTWVzc2FnaW5nIHJlZ2lzdHJhdGlvbiB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHNlbmQgcHVzaCBtZXNzYWdlcyB0byB0aGF0IHtAbGluayBNZXNzYWdpbmd9XHJcbiAqIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBJZiBub3RpZmljYXRpb24gcGVybWlzc2lvbiBpc24ndCBhbHJlYWR5IGdyYW50ZWQsIHRoaXMgbWV0aG9kIGFza3MgdGhlIHVzZXIgZm9yIHBlcm1pc3Npb24uIFRoZVxyXG4gKiByZXR1cm5lZCBwcm9taXNlIHJlamVjdHMgaWYgdGhlIHVzZXIgZG9lcyBub3QgYWxsb3cgdGhlIGFwcCB0byBzaG93IG5vdGlmaWNhdGlvbnMuXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXNzYWdpbmcgLSBUaGUge0BsaW5rIE1lc3NhZ2luZ30gaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSBvcHRpb25zIC0gUHJvdmlkZXMgYW4gb3B0aW9uYWwgdmFwaWQga2V5IGFuZCBhbiBvcHRpb25hbCBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24uXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBwcm9taXNlIHJlc29sdmVzIHdpdGggYW4gRkNNIHJlZ2lzdHJhdGlvbiB0b2tlbi5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VG9rZW4obWVzc2FnaW5nLCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBtZXNzYWdpbmcgPSB1dGlsLmdldE1vZHVsYXJJbnN0YW5jZShtZXNzYWdpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZ2V0VG9rZW4kMShtZXNzYWdpbmcsIG9wdGlvbnMpXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBEZWxldGVzIHRoZSByZWdpc3RyYXRpb24gdG9rZW4gYXNzb2NpYXRlZCB3aXRoIHRoaXMge0BsaW5rIE1lc3NhZ2luZ30gaW5zdGFuY2UgYW5kIHVuc3Vic2NyaWJlc1xyXG4gKiB0aGUge0BsaW5rIE1lc3NhZ2luZ30gaW5zdGFuY2UgZnJvbSB0aGUgcHVzaCBzdWJzY3JpcHRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXNzYWdpbmcgLSBUaGUge0BsaW5rIE1lc3NhZ2luZ30gaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBwcm9taXNlIHJlc29sdmVzIHdoZW4gdGhlIHRva2VuIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBkZWxldGVkLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWxldGVUb2tlbihtZXNzYWdpbmcpIHtcclxuICAgIG1lc3NhZ2luZyA9IHV0aWwuZ2V0TW9kdWxhckluc3RhbmNlKG1lc3NhZ2luZyk7XHJcbiAgICByZXR1cm4gZGVsZXRlVG9rZW4kMShtZXNzYWdpbmcpO1xyXG59XHJcbi8qKlxyXG4gKiBXaGVuIGEgcHVzaCBtZXNzYWdlIGlzIHJlY2VpdmVkIGFuZCB0aGUgdXNlciBpcyBjdXJyZW50bHkgb24gYSBwYWdlIGZvciB5b3VyIG9yaWdpbiwgdGhlXHJcbiAqIG1lc3NhZ2UgaXMgcGFzc2VkIHRvIHRoZSBwYWdlIGFuZCBhbiBgb25NZXNzYWdlKClgIGV2ZW50IGlzIGRpc3BhdGNoZWQgd2l0aCB0aGUgcGF5bG9hZCBvZlxyXG4gKiB0aGUgcHVzaCBtZXNzYWdlLlxyXG4gKlxyXG4gKlxyXG4gKiBAcGFyYW0gbWVzc2FnaW5nIC0gVGhlIHtAbGluayBNZXNzYWdpbmd9IGluc3RhbmNlLlxyXG4gKiBAcGFyYW0gbmV4dE9yT2JzZXJ2ZXIgLSBUaGlzIGZ1bmN0aW9uLCBvciBvYnNlcnZlciBvYmplY3Qgd2l0aCBgbmV4dGAgZGVmaW5lZCxcclxuICogICAgIGlzIGNhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZCBhbmQgdGhlIHVzZXIgaXMgY3VycmVudGx5IHZpZXdpbmcgeW91ciBwYWdlLlxyXG4gKiBAcmV0dXJucyBUbyBzdG9wIGxpc3RlbmluZyBmb3IgbWVzc2FnZXMgZXhlY3V0ZSB0aGlzIHJldHVybmVkIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnaW5nLCBuZXh0T3JPYnNlcnZlcikge1xyXG4gICAgbWVzc2FnaW5nID0gdXRpbC5nZXRNb2R1bGFySW5zdGFuY2UobWVzc2FnaW5nKTtcclxuICAgIHJldHVybiBvbk1lc3NhZ2UkMShtZXNzYWdpbmcsIG5leHRPck9ic2VydmVyKTtcclxufVxuXG4vKipcclxuICogVGhlIEZpcmViYXNlIENsb3VkIE1lc3NhZ2luZyBXZWIgU0RLLlxyXG4gKiBUaGlzIFNESyBkb2VzIG5vdCB3b3JrIGluIGEgTm9kZS5qcyBlbnZpcm9ubWVudC5cclxuICpcclxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXHJcbiAqL1xyXG5yZWdpc3Rlck1lc3NhZ2luZ0luV2luZG93KCk7XG5cbmV4cG9ydHMuZGVsZXRlVG9rZW4gPSBkZWxldGVUb2tlbjtcbmV4cG9ydHMuZ2V0TWVzc2FnaW5nID0gZ2V0TWVzc2FnaW5nSW5XaW5kb3c7XG5leHBvcnRzLmdldFRva2VuID0gZ2V0VG9rZW47XG5leHBvcnRzLmlzU3VwcG9ydGVkID0gaXNXaW5kb3dTdXBwb3J0ZWQ7XG5leHBvcnRzLm9uTWVzc2FnZSA9IG9uTWVzc2FnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNqcy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgRmlyZWJhc2UgY29uc3RhbnRzLiAgU29tZSBvZiB0aGVzZSAoQGRlZmluZXMpIGNhbiBiZSBvdmVycmlkZGVuIGF0IGNvbXBpbGUtdGltZS5cclxuICovXHJcbmNvbnN0IENPTlNUQU5UUyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBjbGllbnQgTm9kZS5qcyBTREsuXHJcbiAgICAgKi9cclxuICAgIE5PREVfQ0xJRU5UOiBmYWxzZSxcclxuICAgIC8qKlxyXG4gICAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBBZG1pbiBOb2RlLmpzIFNESy5cclxuICAgICAqL1xyXG4gICAgTk9ERV9BRE1JTjogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZpcmViYXNlIFNESyBWZXJzaW9uXHJcbiAgICAgKi9cclxuICAgIFNES19WRVJTSU9OOiAnJHtKU0NPUkVfVkVSU0lPTn0nXHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHByb3ZpZGVkIGFzc2VydGlvbiBpcyBmYWxzeVxyXG4gKi9cclxuY29uc3QgYXNzZXJ0ID0gZnVuY3Rpb24gKGFzc2VydGlvbiwgbWVzc2FnZSkge1xyXG4gICAgaWYgKCFhc3NlcnRpb24pIHtcclxuICAgICAgICB0aHJvdyBhc3NlcnRpb25FcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRXJyb3Igb2JqZWN0IHN1aXRhYmxlIGZvciB0aHJvd2luZy5cclxuICovXHJcbmNvbnN0IGFzc2VydGlvbkVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ZpcmViYXNlIERhdGFiYXNlICgnICtcclxuICAgICAgICBDT05TVEFOVFMuU0RLX1ZFUlNJT04gK1xyXG4gICAgICAgICcpIElOVEVSTkFMIEFTU0VSVCBGQUlMRUQ6ICcgK1xyXG4gICAgICAgIG1lc3NhZ2UpO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBzdHJpbmdUb0J5dGVBcnJheSQxID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcclxuICAgIGNvbnN0IG91dCA9IFtdO1xyXG4gICAgbGV0IHAgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiA2KSB8IDE5MjtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKGMgJiAweGZjMDApID09PSAweGQ4MDAgJiZcclxuICAgICAgICAgICAgaSArIDEgPCBzdHIubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZjMDApID09PSAweGRjMDApIHtcclxuICAgICAgICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcclxuICAgICAgICAgICAgYyA9IDB4MTAwMDAgKyAoKGMgJiAweDAzZmYpIDw8IDEwKSArIChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHgwM2ZmKTtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxOCkgfCAyNDA7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDEyKSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDEyKSB8IDIyNDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuLyoqXHJcbiAqIFR1cm5zIGFuIGFycmF5IG9mIG51bWJlcnMgaW50byB0aGUgc3RyaW5nIGdpdmVuIGJ5IHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZVxyXG4gKiBjaGFyYWN0ZXJzIHRvIHdoaWNoIHRoZSBudW1iZXJzIGNvcnJlc3BvbmQuXHJcbiAqIEBwYXJhbSBieXRlcyBBcnJheSBvZiBudW1iZXJzIHJlcHJlc2VudGluZyBjaGFyYWN0ZXJzLlxyXG4gKiBAcmV0dXJuIFN0cmluZ2lmaWNhdGlvbiBvZiB0aGUgYXJyYXkuXHJcbiAqL1xyXG5jb25zdCBieXRlQXJyYXlUb1N0cmluZyA9IGZ1bmN0aW9uIChieXRlcykge1xyXG4gICAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcclxuICAgIGNvbnN0IG91dCA9IFtdO1xyXG4gICAgbGV0IHBvcyA9IDAsIGMgPSAwO1xyXG4gICAgd2hpbGUgKHBvcyA8IGJ5dGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGMxID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgIGlmIChjMSA8IDEyOCkge1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjMSA+IDE5MSAmJiBjMSA8IDIyNCkge1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYzEgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjMSA+IDIzOSAmJiBjMSA8IDM2NSkge1xyXG4gICAgICAgICAgICAvLyBTdXJyb2dhdGUgUGFpclxyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIGNvbnN0IGM0ID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICBjb25zdCB1ID0gKCgoYzEgJiA3KSA8PCAxOCkgfCAoKGMyICYgNjMpIDw8IDEyKSB8ICgoYzMgJiA2MykgPDwgNikgfCAoYzQgJiA2MykpIC1cclxuICAgICAgICAgICAgICAgIDB4MTAwMDA7XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAodSA+PiAxMCkpO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkYzAwICsgKHUgJiAxMDIzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMxICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQuam9pbignJyk7XHJcbn07XHJcbi8vIFdlIGRlZmluZSBpdCBhcyBhbiBvYmplY3QgbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY2xhc3MgYmVjYXVzZSBhIGNsYXNzIGNvbXBpbGVkIGRvd24gdG8gZXM1IGNhbid0XHJcbi8vIGJlIHRyZWVzaGFrZWQuIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNjkxXHJcbi8vIFN0YXRpYyBsb29rdXAgbWFwcywgbGF6aWx5IHBvcHVsYXRlZCBieSBpbml0XygpXHJcbmNvbnN0IGJhc2U2NCA9IHtcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBieXRlcyB0byBjaGFyYWN0ZXJzLlxyXG4gICAgICovXHJcbiAgICBieXRlVG9DaGFyTWFwXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBjaGFyYWN0ZXJzIHRvIGJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBjaGFyVG9CeXRlTWFwXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBieXRlcyB0byB3ZWJzYWZlIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBieXRlVG9DaGFyTWFwV2ViU2FmZV86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgd2Vic2FmZSBjaGFyYWN0ZXJzIHRvIGJ5dGVzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgY2hhclRvQnl0ZU1hcFdlYlNhZmVfOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldCwgc2hhcmVkIGJldHdlZW5cclxuICAgICAqIEVOQ09ERURfVkFMUyBhbmQgRU5DT0RFRF9WQUxTX1dFQlNBRkVcclxuICAgICAqL1xyXG4gICAgRU5DT0RFRF9WQUxTX0JBU0U6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicgKyAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonICsgJzAxMjM0NTY3ODknLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldC4gVmFsdWUgNjQgKD0pIGlzIHNwZWNpYWw7IGl0IG1lYW5zIFwibm90aGluZy5cIlxyXG4gICAgICovXHJcbiAgICBnZXQgRU5DT0RFRF9WQUxTKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJysvPSc7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgd2Vic2FmZSBhbHBoYWJldC5cclxuICAgICAqL1xyXG4gICAgZ2V0IEVOQ09ERURfVkFMU19XRUJTQUZFKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJy1fLic7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyB0aGUgYXRvYiBhbmQgYnRvYSBmdW5jdGlvbnMuIFRoaXMgZXh0ZW5zaW9uXHJcbiAgICAgKiBzdGFydGVkIGF0IE1vemlsbGEgYnV0IGlzIG5vdyBpbXBsZW1lbnRlZCBieSBtYW55IGJyb3dzZXJzLiBXZSB1c2UgdGhlXHJcbiAgICAgKiBBU1NVTUVfKiB2YXJpYWJsZXMgdG8gYXZvaWQgcHVsbGluZyBpbiB0aGUgZnVsbCB1c2VyYWdlbnQgZGV0ZWN0aW9uIGxpYnJhcnlcclxuICAgICAqIGJ1dCBzdGlsbCBhbGxvd2luZyB0aGUgc3RhbmRhcmQgcGVyLWJyb3dzZXIgY29tcGlsYXRpb25zLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgSEFTX05BVElWRV9TVVBQT1JUOiB0eXBlb2YgYXRvYiA9PT0gJ2Z1bmN0aW9uJyxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWVuY29kZSBhbiBhcnJheSBvZiBieXRlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgQW4gYXJyYXkgb2YgYnl0ZXMgKG51bWJlcnMgd2l0aFxyXG4gICAgICogICAgIHZhbHVlIGluIFswLCAyNTVdKSB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBCb29sZWFuIGluZGljYXRpbmcgd2Ugc2hvdWxkIHVzZSB0aGVcclxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgZW5jb2RlQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZW5jb2RlQnl0ZUFycmF5IHRha2VzIGFuIGFycmF5IGFzIGEgcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdF8oKTtcclxuICAgICAgICBjb25zdCBieXRlVG9DaGFyTWFwID0gd2ViU2FmZVxyXG4gICAgICAgICAgICA/IHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfXHJcbiAgICAgICAgICAgIDogdGhpcy5ieXRlVG9DaGFyTWFwXztcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGUxID0gaW5wdXRbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlMiA9IGkgKyAxIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMiA9IGhhdmVCeXRlMiA/IGlucHV0W2kgKyAxXSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlMyA9IGkgKyAyIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMyA9IGhhdmVCeXRlMyA/IGlucHV0W2kgKyAyXSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUxID0gYnl0ZTEgPj4gMjtcclxuICAgICAgICAgICAgY29uc3Qgb3V0Qnl0ZTIgPSAoKGJ5dGUxICYgMHgwMykgPDwgNCkgfCAoYnl0ZTIgPj4gNCk7XHJcbiAgICAgICAgICAgIGxldCBvdXRCeXRlMyA9ICgoYnl0ZTIgJiAweDBmKSA8PCAyKSB8IChieXRlMyA+PiA2KTtcclxuICAgICAgICAgICAgbGV0IG91dEJ5dGU0ID0gYnl0ZTMgJiAweDNmO1xyXG4gICAgICAgICAgICBpZiAoIWhhdmVCeXRlMykge1xyXG4gICAgICAgICAgICAgICAgb3V0Qnl0ZTQgPSA2NDtcclxuICAgICAgICAgICAgICAgIGlmICghaGF2ZUJ5dGUyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0Qnl0ZTMgPSA2NDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChieXRlVG9DaGFyTWFwW291dEJ5dGUxXSwgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMl0sIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTNdLCBieXRlVG9DaGFyTWFwW291dEJ5dGU0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQuam9pbignJyk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlNjQtZW5jb2RlIGEgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbnB1dCBBIHN0cmluZyB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBJZiB0cnVlLCB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBUaGUgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBlbmNvZGVTdHJpbmcoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgTW96aWxsYSBicm93c2VycyB0aGF0IGltcGxlbWVudFxyXG4gICAgICAgIC8vIGEgbmF0aXZlIGJhc2U2NCBlbmNvZGVyIGluIHRoZSBmb3JtIG9mIFwiYnRvYS9hdG9iXCJcclxuICAgICAgICBpZiAodGhpcy5IQVNfTkFUSVZFX1NVUFBPUlQgJiYgIXdlYlNhZmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJ0b2EoaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGVCeXRlQXJyYXkoc3RyaW5nVG9CeXRlQXJyYXkkMShpbnB1dCksIHdlYlNhZmUpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgdG8gZGVjb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgVHJ1ZSBpZiB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBkZWNvZGVTdHJpbmcoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgTW96aWxsYSBicm93c2VycyB0aGF0IGltcGxlbWVudFxyXG4gICAgICAgIC8vIGEgbmF0aXZlIGJhc2U2NCBlbmNvZGVyIGluIHRoZSBmb3JtIG9mIFwiYnRvYS9hdG9iXCJcclxuICAgICAgICBpZiAodGhpcy5IQVNfTkFUSVZFX1NVUFBPUlQgJiYgIXdlYlNhZmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0b2IoaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnl0ZUFycmF5VG9TdHJpbmcodGhpcy5kZWNvZGVTdHJpbmdUb0J5dGVBcnJheShpbnB1dCwgd2ViU2FmZSkpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBJbiBiYXNlLTY0IGRlY29kaW5nLCBncm91cHMgb2YgZm91ciBjaGFyYWN0ZXJzIGFyZSBjb252ZXJ0ZWQgaW50byB0aHJlZVxyXG4gICAgICogYnl0ZXMuICBJZiB0aGUgZW5jb2RlciBkaWQgbm90IGFwcGx5IHBhZGRpbmcsIHRoZSBpbnB1dCBsZW5ndGggbWF5IG5vdFxyXG4gICAgICogYmUgYSBtdWx0aXBsZSBvZiA0LlxyXG4gICAgICpcclxuICAgICAqIEluIHRoaXMgY2FzZSwgdGhlIGxhc3QgZ3JvdXAgd2lsbCBoYXZlIGZld2VyIHRoYW4gNCBjaGFyYWN0ZXJzLCBhbmRcclxuICAgICAqIHBhZGRpbmcgd2lsbCBiZSBpbmZlcnJlZC4gIElmIHRoZSBncm91cCBoYXMgb25lIG9yIHR3byBjaGFyYWN0ZXJzLCBpdCBkZWNvZGVzXHJcbiAgICAgKiB0byBvbmUgYnl0ZS4gIElmIHRoZSBncm91cCBoYXMgdGhyZWUgY2hhcmFjdGVycywgaXQgZGVjb2RlcyB0byB0d28gYnl0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0IHRvIGRlY29kZS5cclxuICAgICAqIEBwYXJhbSB3ZWJTYWZlIFRydWUgaWYgd2Ugc2hvdWxkIHVzZSB0aGUgd2ViLXNhZmUgYWxwaGFiZXQuXHJcbiAgICAgKiBAcmV0dXJuIGJ5dGVzIHJlcHJlc2VudGluZyB0aGUgZGVjb2RlZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgZGVjb2RlU3RyaW5nVG9CeXRlQXJyYXkoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICB0aGlzLmluaXRfKCk7XHJcbiAgICAgICAgY29uc3QgY2hhclRvQnl0ZU1hcCA9IHdlYlNhZmVcclxuICAgICAgICAgICAgPyB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1xyXG4gICAgICAgICAgICA6IHRoaXMuY2hhclRvQnl0ZU1hcF87XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGUxID0gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSsrKV07XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlMiA9IGkgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGUyID0gaGF2ZUJ5dGUyID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogMDtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTMgPSBpIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMyA9IGhhdmVCeXRlMyA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlNCA9IGkgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGU0ID0gaGF2ZUJ5dGU0ID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogNjQ7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgaWYgKGJ5dGUxID09IG51bGwgfHwgYnl0ZTIgPT0gbnVsbCB8fCBieXRlMyA9PSBudWxsIHx8IGJ5dGU0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBEZWNvZGVCYXNlNjRTdHJpbmdFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUxID0gKGJ5dGUxIDw8IDIpIHwgKGJ5dGUyID4+IDQpO1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChvdXRCeXRlMSk7XHJcbiAgICAgICAgICAgIGlmIChieXRlMyAhPT0gNjQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUyID0gKChieXRlMiA8PCA0KSAmIDB4ZjApIHwgKGJ5dGUzID4+IDIpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ5dGU0ICE9PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUzID0gKChieXRlMyA8PCA2KSAmIDB4YzApIHwgYnl0ZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXp5IHN0YXRpYyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi4gQ2FsbGVkIGJlZm9yZVxyXG4gICAgICogYWNjZXNzaW5nIGFueSBvZiB0aGUgc3RhdGljIG1hcCB2YXJpYWJsZXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpbml0XygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYnl0ZVRvQ2hhck1hcF8pIHtcclxuICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwXyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgcXVpY2sgbWFwcGluZ3MgYmFjayBhbmQgZm9ydGgsIHNvIHdlIHByZWNvbXB1dGUgdHdvIG1hcHMuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTkNPREVEX1ZBTFMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcF9baV0gPSB0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfW3RoaXMuYnl0ZVRvQ2hhck1hcF9baV1dID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldID0gdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1tpXV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgLy8gQmUgZm9yZ2l2aW5nIHdoZW4gZGVjb2RpbmcgYW5kIGNvcnJlY3RseSBkZWNvZGUgYm90aCBlbmNvZGluZ3MuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSB0aGlzLkVOQ09ERURfVkFMU19CQVNFLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF9bdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIEFuIGVycm9yIGVuY291bnRlcmVkIHdoaWxlIGRlY29kaW5nIGJhc2U2NCBzdHJpbmcuXHJcbiAqL1xyXG5jbGFzcyBEZWNvZGVCYXNlNjRTdHJpbmdFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ0RlY29kZUJhc2U2NFN0cmluZ0Vycm9yJztcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nXHJcbiAqL1xyXG5jb25zdCBiYXNlNjRFbmNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICBjb25zdCB1dGY4Qnl0ZXMgPSBzdHJpbmdUb0J5dGVBcnJheSQxKHN0cik7XHJcbiAgICByZXR1cm4gYmFzZTY0LmVuY29kZUJ5dGVBcnJheSh1dGY4Qnl0ZXMsIHRydWUpO1xyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nICh3aXRob3V0IFwiLlwiIHBhZGRpbmcgaW4gdGhlIGVuZCkuXHJcbiAqIGUuZy4gVXNlZCBpbiBKU09OIFdlYiBUb2tlbiAoSldUKSBwYXJ0cy5cclxuICovXHJcbmNvbnN0IGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgLy8gVXNlIGJhc2U2NHVybCBlbmNvZGluZyBhbmQgcmVtb3ZlIHBhZGRpbmcgaW4gdGhlIGVuZCAoZG90IGNoYXJhY3RlcnMpLlxyXG4gICAgcmV0dXJuIGJhc2U2NEVuY29kZShzdHIpLnJlcGxhY2UoL1xcLi9nLCAnJyk7XHJcbn07XHJcbi8qKlxyXG4gKiBVUkwtc2FmZSBiYXNlNjQgZGVjb2RpbmdcclxuICpcclxuICogTk9URTogRE8gTk9UIHVzZSB0aGUgZ2xvYmFsIGF0b2IoKSBmdW5jdGlvbiAtIGl0IGRvZXMgTk9UIHN1cHBvcnQgdGhlXHJcbiAqIGJhc2U2NFVybCB2YXJpYW50IGVuY29kaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gc3RyIFRvIGJlIGRlY29kZWRcclxuICogQHJldHVybiBEZWNvZGVkIHJlc3VsdCwgaWYgcG9zc2libGVcclxuICovXHJcbmNvbnN0IGJhc2U2NERlY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGJhc2U2NC5kZWNvZGVTdHJpbmcoc3RyLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignYmFzZTY0RGVjb2RlIGZhaWxlZDogJywgZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIERvIGEgZGVlcC1jb3B5IG9mIGJhc2ljIEphdmFTY3JpcHQgT2JqZWN0cyBvciBBcnJheXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwQ29weSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGRlZXBFeHRlbmQodW5kZWZpbmVkLCB2YWx1ZSk7XHJcbn1cclxuLyoqXHJcbiAqIENvcHkgcHJvcGVydGllcyBmcm9tIHNvdXJjZSB0byB0YXJnZXQgKHJlY3Vyc2l2ZWx5IGFsbG93cyBleHRlbnNpb25cclxuICogb2YgT2JqZWN0cyBhbmQgQXJyYXlzKS4gIFNjYWxhciB2YWx1ZXMgaW4gdGhlIHRhcmdldCBhcmUgb3Zlci13cml0dGVuLlxyXG4gKiBJZiB0YXJnZXQgaXMgdW5kZWZpbmVkLCBhbiBvYmplY3Qgb2YgdGhlIGFwcHJvcHJpYXRlIHR5cGUgd2lsbCBiZSBjcmVhdGVkXHJcbiAqIChhbmQgcmV0dXJuZWQpLlxyXG4gKlxyXG4gKiBXZSByZWN1cnNpdmVseSBjb3B5IGFsbCBjaGlsZCBwcm9wZXJ0aWVzIG9mIHBsYWluIE9iamVjdHMgaW4gdGhlIHNvdXJjZS0gc29cclxuICogdGhhdCBuYW1lc3BhY2UtIGxpa2UgZGljdGlvbmFyaWVzIGFyZSBtZXJnZWQuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgdGFyZ2V0IGNhbiBiZSBhIGZ1bmN0aW9uLCBpbiB3aGljaCBjYXNlIHRoZSBwcm9wZXJ0aWVzIGluXHJcbiAqIHRoZSBzb3VyY2UgT2JqZWN0IGFyZSBjb3BpZWQgb250byBpdCBhcyBzdGF0aWMgcHJvcGVydGllcyBvZiB0aGUgRnVuY3Rpb24uXHJcbiAqXHJcbiAqIE5vdGU6IHdlIGRvbid0IG1lcmdlIF9fcHJvdG9fXyB0byBwcmV2ZW50IHByb3RvdHlwZSBwb2xsdXRpb25cclxuICovXHJcbmZ1bmN0aW9uIGRlZXBFeHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGlmICghKHNvdXJjZSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChzb3VyY2UuY29uc3RydWN0b3IpIHtcclxuICAgICAgICBjYXNlIERhdGU6XHJcbiAgICAgICAgICAgIC8vIFRyZWF0IERhdGVzIGxpa2Ugc2NhbGFyczsgaWYgdGhlIHRhcmdldCBkYXRlIG9iamVjdCBoYWQgYW55IGNoaWxkXHJcbiAgICAgICAgICAgIC8vIHByb3BlcnRpZXMgLSB0aGV5IHdpbGwgYmUgbG9zdCFcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVZhbHVlID0gc291cmNlO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVZhbHVlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgY2FzZSBPYmplY3Q6XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBcnJheTpcclxuICAgICAgICAgICAgLy8gQWx3YXlzIGNvcHkgdGhlIGFycmF5IHNvdXJjZSBhbmQgb3ZlcndyaXRlIHRoZSB0YXJnZXQuXHJcbiAgICAgICAgICAgIHRhcmdldCA9IFtdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBOb3QgYSBwbGFpbiBPYmplY3QgLSB0cmVhdCBpdCBhcyBhIHNjYWxhci5cclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBzb3VyY2UpIHtcclxuICAgICAgICAvLyB1c2UgaXNWYWxpZEtleSB0byBndWFyZCBhZ2FpbnN0IHByb3RvdHlwZSBwb2xsdXRpb24uIFNlZSBodHRwczovL3NueWsuaW8vdnVsbi9TTllLLUpTLUxPREFTSC00NTAyMDJcclxuICAgICAgICBpZiAoIXNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSB8fCAhaXNWYWxpZEtleShwcm9wKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcbmZ1bmN0aW9uIGlzVmFsaWRLZXkoa2V5KSB7XHJcbiAgICByZXR1cm4ga2V5ICE9PSAnX19wcm90b19fJztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUG9seWZpbGwgZm9yIGBnbG9iYWxUaGlzYCBvYmplY3QuXHJcbiAqIEByZXR1cm5zIHRoZSBgZ2xvYmFsVGhpc2Agb2JqZWN0IGZvciB0aGUgZ2l2ZW4gZW52aXJvbm1lbnQuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QuJyk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgZ2V0RGVmYXVsdHNGcm9tR2xvYmFsID0gKCkgPT4gZ2V0R2xvYmFsKCkuX19GSVJFQkFTRV9ERUZBVUxUU19fO1xyXG4vKipcclxuICogQXR0ZW1wdCB0byByZWFkIGRlZmF1bHRzIGZyb20gYSBKU09OIHN0cmluZyBwcm92aWRlZCB0b1xyXG4gKiBwcm9jZXNzKC4pZW52KC4pX19GSVJFQkFTRV9ERUZBVUxUU19fIG9yIGEgSlNPTiBmaWxlIHdob3NlIHBhdGggaXMgaW5cclxuICogcHJvY2VzcyguKWVudiguKV9fRklSRUJBU0VfREVGQVVMVFNfUEFUSF9fXHJcbiAqIFRoZSBkb3RzIGFyZSBpbiBwYXJlbnMgYmVjYXVzZSBjZXJ0YWluIGNvbXBpbGVycyAoVml0ZT8pIGNhbm5vdFxyXG4gKiBoYW5kbGUgc2VlaW5nIHRoYXQgdmFyaWFibGUgaW4gY29tbWVudHMuXHJcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmlyZWJhc2UvZmlyZWJhc2UtanMtc2RrL2lzc3Vlcy82ODM4XHJcbiAqL1xyXG5jb25zdCBnZXREZWZhdWx0c0Zyb21FbnZWYXJpYWJsZSA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHByb2Nlc3MuZW52ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRlZmF1bHRzSnNvblN0cmluZyA9IHByb2Nlc3MuZW52Ll9fRklSRUJBU0VfREVGQVVMVFNfXztcclxuICAgIGlmIChkZWZhdWx0c0pzb25TdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWZhdWx0c0pzb25TdHJpbmcpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBnZXREZWZhdWx0c0Zyb21Db29raWUgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBtYXRjaDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2goL19fRklSRUJBU0VfREVGQVVMVFNfXz0oW147XSspLyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIFNvbWUgZW52aXJvbm1lbnRzIHN1Y2ggYXMgQW5ndWxhciBVbml2ZXJzYWwgU1NSIGhhdmUgYVxyXG4gICAgICAgIC8vIGBkb2N1bWVudGAgb2JqZWN0IGJ1dCBlcnJvciBvbiBhY2Nlc3NpbmcgYGRvY3VtZW50LmNvb2tpZWAuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGVjb2RlZCA9IG1hdGNoICYmIGJhc2U2NERlY29kZShtYXRjaFsxXSk7XHJcbiAgICByZXR1cm4gZGVjb2RlZCAmJiBKU09OLnBhcnNlKGRlY29kZWQpO1xyXG59O1xyXG4vKipcclxuICogR2V0IHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0LiBJdCBjaGVja3MgaW4gb3JkZXI6XHJcbiAqICgxKSBpZiBzdWNoIGFuIG9iamVjdCBleGlzdHMgYXMgYSBwcm9wZXJ0eSBvZiBgZ2xvYmFsVGhpc2BcclxuICogKDIpIGlmIHN1Y2ggYW4gb2JqZWN0IHdhcyBwcm92aWRlZCBvbiBhIHNoZWxsIGVudmlyb25tZW50IHZhcmlhYmxlXHJcbiAqICgzKSBpZiBzdWNoIGFuIG9iamVjdCBleGlzdHMgaW4gYSBjb29raWVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgZ2V0RGVmYXVsdHMgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoZ2V0RGVmYXVsdHNGcm9tR2xvYmFsKCkgfHxcclxuICAgICAgICAgICAgZ2V0RGVmYXVsdHNGcm9tRW52VmFyaWFibGUoKSB8fFxyXG4gICAgICAgICAgICBnZXREZWZhdWx0c0Zyb21Db29raWUoKSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhdGNoLWFsbCBmb3IgYmVpbmcgdW5hYmxlIHRvIGdldCBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gZHVlXHJcbiAgICAgICAgICogdG8gYW55IGVudmlyb25tZW50IGNhc2Ugd2UgaGF2ZSBub3QgYWNjb3VudGVkIGZvci4gTG9nIHRvXHJcbiAgICAgICAgICogaW5mbyBpbnN0ZWFkIG9mIHN3YWxsb3dpbmcgc28gd2UgY2FuIGZpbmQgdGhlc2UgdW5rbm93biBjYXNlc1xyXG4gICAgICAgICAqIGFuZCBhZGQgcGF0aHMgZm9yIHRoZW0gaWYgbmVlZGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgVW5hYmxlIHRvIGdldCBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gZHVlIHRvOiAke2V9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogUmV0dXJucyBlbXVsYXRvciBob3N0IHN0b3JlZCBpbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdFxyXG4gKiBmb3IgdGhlIGdpdmVuIHByb2R1Y3QuXHJcbiAqIEByZXR1cm5zIGEgVVJMIGhvc3QgZm9ybWF0dGVkIGxpa2UgYDEyNy4wLjAuMTo5OTk5YCBvciBgWzo6MV06NDAwMGAgaWYgYXZhaWxhYmxlXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmNvbnN0IGdldERlZmF1bHRFbXVsYXRvckhvc3QgPSAocHJvZHVjdE5hbWUpID0+IHsgdmFyIF9hLCBfYjsgcmV0dXJuIChfYiA9IChfYSA9IGdldERlZmF1bHRzKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lbXVsYXRvckhvc3RzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbcHJvZHVjdE5hbWVdOyB9O1xyXG4vKipcclxuICogUmV0dXJucyBlbXVsYXRvciBob3N0bmFtZSBhbmQgcG9ydCBzdG9yZWQgaW4gdGhlIF9fRklSRUJBU0VfREVGQVVMVFNfXyBvYmplY3RcclxuICogZm9yIHRoZSBnaXZlbiBwcm9kdWN0LlxyXG4gKiBAcmV0dXJucyBhIHBhaXIgb2YgaG9zdG5hbWUgYW5kIHBvcnQgbGlrZSBgW1wiOjoxXCIsIDQwMDBdYCBpZiBhdmFpbGFibGVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdG5hbWVBbmRQb3J0ID0gKHByb2R1Y3ROYW1lKSA9PiB7XHJcbiAgICBjb25zdCBob3N0ID0gZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdChwcm9kdWN0TmFtZSk7XHJcbiAgICBpZiAoIWhvc3QpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VwYXJhdG9ySW5kZXggPSBob3N0Lmxhc3RJbmRleE9mKCc6Jyk7IC8vIEZpbmRpbmcgdGhlIGxhc3Qgc2luY2UgSVB2NiBhZGRyIGFsc28gaGFzIGNvbG9ucy5cclxuICAgIGlmIChzZXBhcmF0b3JJbmRleCA8PSAwIHx8IHNlcGFyYXRvckluZGV4ICsgMSA9PT0gaG9zdC5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaG9zdCAke2hvc3R9IHdpdGggbm8gc2VwYXJhdGUgaG9zdG5hbWUgYW5kIHBvcnQhYCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXHJcbiAgICBjb25zdCBwb3J0ID0gcGFyc2VJbnQoaG9zdC5zdWJzdHJpbmcoc2VwYXJhdG9ySW5kZXggKyAxKSwgMTApO1xyXG4gICAgaWYgKGhvc3RbMF0gPT09ICdbJykge1xyXG4gICAgICAgIC8vIEJyYWNrZXQtcXVvdGVkIGBbaXB2NmFkZHJdOnBvcnRgID0+IHJldHVybiBcImlwdjZhZGRyXCIgKHdpdGhvdXQgYnJhY2tldHMpLlxyXG4gICAgICAgIHJldHVybiBbaG9zdC5zdWJzdHJpbmcoMSwgc2VwYXJhdG9ySW5kZXggLSAxKSwgcG9ydF07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gW2hvc3Quc3Vic3RyaW5nKDAsIHNlcGFyYXRvckluZGV4KSwgcG9ydF07XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIEZpcmViYXNlIGFwcCBjb25maWcgc3RvcmVkIGluIHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0LlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5jb25zdCBnZXREZWZhdWx0QXBwQ29uZmlnID0gKCkgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBnZXREZWZhdWx0cygpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29uZmlnOyB9O1xyXG4vKipcclxuICogUmV0dXJucyBhbiBleHBlcmltZW50YWwgc2V0dGluZyBvbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdCAocHJvcGVydGllc1xyXG4gKiBwcmVmaXhlZCBieSBcIl9cIilcclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgZ2V0RXhwZXJpbWVudGFsU2V0dGluZyA9IChuYW1lKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGdldERlZmF1bHRzKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtgXyR7bmFtZX1gXTsgfTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY2xhc3MgRGVmZXJyZWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZWplY3QgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlID0gKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE91ciBBUEkgaW50ZXJuYWxzIGFyZSBub3QgcHJvbWlzZWlmaWVkIGFuZCBjYW5ub3QgYmVjYXVzZSBvdXIgY2FsbGJhY2sgQVBJcyBoYXZlIHN1YnRsZSBleHBlY3RhdGlvbnMgYXJvdW5kXHJcbiAgICAgKiBpbnZva2luZyBwcm9taXNlcyBpbmxpbmUsIHdoaWNoIFByb21pc2VzIGFyZSBmb3JiaWRkZW4gdG8gZG8uIFRoaXMgbWV0aG9kIGFjY2VwdHMgYW4gb3B0aW9uYWwgbm9kZS1zdHlsZSBjYWxsYmFja1xyXG4gICAgICogYW5kIHJldHVybnMgYSBub2RlLXN0eWxlIGNhbGxiYWNrIHdoaWNoIHdpbGwgcmVzb2x2ZSBvciByZWplY3QgdGhlIERlZmVycmVkJ3MgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgd3JhcENhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIChlcnJvciwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIC8vIEF0dGFjaGluZyBub29wIGhhbmRsZXIganVzdCBpbiBjYXNlIGRldmVsb3BlciB3YXNuJ3QgZXhwZWN0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9taXNlLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBTb21lIG9mIG91ciBjYWxsYmFja3MgZG9uJ3QgZXhwZWN0IGEgdmFsdWUgYW5kIG91ciBvd24gdGVzdHNcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCB0aGF0IHRoZSBwYXJhbWV0ZXIgbGVuZ3RoIGlzIDFcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVNb2NrVXNlclRva2VuKHRva2VuLCBwcm9qZWN0SWQpIHtcclxuICAgIGlmICh0b2tlbi51aWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcInVpZFwiIGZpZWxkIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYnkgbW9ja1VzZXJUb2tlbi4gUGxlYXNlIHVzZSBcInN1YlwiIGluc3RlYWQgZm9yIEZpcmViYXNlIEF1dGggVXNlciBJRC4nKTtcclxuICAgIH1cclxuICAgIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSBcIm5vbmVcIiBhcyB0aGUgYWxnb3JpdGhtLlxyXG4gICAgY29uc3QgaGVhZGVyID0ge1xyXG4gICAgICAgIGFsZzogJ25vbmUnLFxyXG4gICAgICAgIHR5cGU6ICdKV1QnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RJZCB8fCAnZGVtby1wcm9qZWN0JztcclxuICAgIGNvbnN0IGlhdCA9IHRva2VuLmlhdCB8fCAwO1xyXG4gICAgY29uc3Qgc3ViID0gdG9rZW4uc3ViIHx8IHRva2VuLnVzZXJfaWQ7XHJcbiAgICBpZiAoIXN1Yikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vY2tVc2VyVG9rZW4gbXVzdCBjb250YWluICdzdWInIG9yICd1c2VyX2lkJyBmaWVsZCFcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih7IFxyXG4gICAgICAgIC8vIFNldCBhbGwgcmVxdWlyZWQgZmllbGRzIHRvIGRlY2VudCBkZWZhdWx0c1xyXG4gICAgICAgIGlzczogYGh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS8ke3Byb2plY3R9YCwgYXVkOiBwcm9qZWN0LCBpYXQsIGV4cDogaWF0ICsgMzYwMCwgYXV0aF90aW1lOiBpYXQsIHN1YiwgdXNlcl9pZDogc3ViLCBmaXJlYmFzZToge1xyXG4gICAgICAgICAgICBzaWduX2luX3Byb3ZpZGVyOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgaWRlbnRpdGllczoge31cclxuICAgICAgICB9IH0sIHRva2VuKTtcclxuICAgIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSB0aGUgZW1wdHkgc3RyaW5nIGFzIGEgc2lnbmF0dXJlLlxyXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gJyc7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KGhlYWRlcikpLFxyXG4gICAgICAgIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKSxcclxuICAgICAgICBzaWduYXR1cmVcclxuICAgIF0uam9pbignLicpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIG5hdmlnYXRvci51c2VyQWdlbnQgc3RyaW5nIG9yICcnIGlmIGl0J3Mgbm90IGRlZmluZWQuXHJcbiAqIEByZXR1cm4gdXNlciBhZ2VudCBzdHJpbmdcclxuICovXHJcbmZ1bmN0aW9uIGdldFVBKCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgdHlwZW9mIG5hdmlnYXRvclsndXNlckFnZW50J10gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvclsndXNlckFnZW50J107XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBDb3Jkb3ZhIC8gUGhvbmVHYXAgLyBJb25pYyBmcmFtZXdvcmtzIG9uIGEgbW9iaWxlIGRldmljZS5cclxuICpcclxuICogRGVsaWJlcmF0ZWx5IGRvZXMgbm90IHJlbHkgb24gY2hlY2tpbmcgYGZpbGU6Ly9gIFVSTHMgKGFzIHRoaXMgZmFpbHMgUGhvbmVHYXBcclxuICogaW4gdGhlIFJpcHBsZSBlbXVsYXRvcikgbm9yIENvcmRvdmEgYG9uRGV2aWNlUmVhZHlgLCB3aGljaCB3b3VsZCBub3JtYWxseVxyXG4gKiB3YWl0IGZvciBhIGNhbGxiYWNrLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNNb2JpbGVDb3Jkb3ZhKCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgU2V0dGluZyB1cCBhbiBicm9hZGx5IGFwcGxpY2FibGUgaW5kZXggc2lnbmF0dXJlIGZvciBXaW5kb3dcclxuICAgICAgICAvLyBqdXN0IHRvIGRlYWwgd2l0aCB0aGlzIGNhc2Ugd291bGQgcHJvYmFibHkgYmUgYSBiYWQgaWRlYS5cclxuICAgICAgICAhISh3aW5kb3dbJ2NvcmRvdmEnXSB8fCB3aW5kb3dbJ3Bob25lZ2FwJ10gfHwgd2luZG93WydQaG9uZUdhcCddKSAmJlxyXG4gICAgICAgIC9pb3N8aXBob25lfGlwb2R8aXBhZHxhbmRyb2lkfGJsYWNrYmVycnl8aWVtb2JpbGUvaS50ZXN0KGdldFVBKCkpKTtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IE5vZGUuanMuXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBOb2RlLmpzIGVudmlyb25tZW50IGlzIGRldGVjdGVkIG9yIHNwZWNpZmllZC5cclxuICovXHJcbi8vIE5vZGUgZGV0ZWN0aW9uIGxvZ2ljIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9pbGlha2FuL2RldGVjdC1ub2RlL1xyXG5mdW5jdGlvbiBpc05vZGUoKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBjb25zdCBmb3JjZUVudmlyb25tZW50ID0gKF9hID0gZ2V0RGVmYXVsdHMoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvcmNlRW52aXJvbm1lbnQ7XHJcbiAgICBpZiAoZm9yY2VFbnZpcm9ubWVudCA9PT0gJ25vZGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmb3JjZUVudmlyb25tZW50ID09PSAnYnJvd3NlcicpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgQnJvd3NlciBFbnZpcm9ubWVudFxyXG4gKi9cclxuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGY7XHJcbn1cclxuZnVuY3Rpb24gaXNCcm93c2VyRXh0ZW5zaW9uKCkge1xyXG4gICAgY29uc3QgcnVudGltZSA9IHR5cGVvZiBjaHJvbWUgPT09ICdvYmplY3QnXHJcbiAgICAgICAgPyBjaHJvbWUucnVudGltZVxyXG4gICAgICAgIDogdHlwZW9mIGJyb3dzZXIgPT09ICdvYmplY3QnXHJcbiAgICAgICAgICAgID8gYnJvd3Nlci5ydW50aW1lXHJcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBydW50aW1lID09PSAnb2JqZWN0JyAmJiBydW50aW1lLmlkICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBSZWFjdCBOYXRpdmUuXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudCBpcyBkZXRlY3RlZC5cclxuICovXHJcbmZ1bmN0aW9uIGlzUmVhY3ROYXRpdmUoKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmIG5hdmlnYXRvclsncHJvZHVjdCddID09PSAnUmVhY3ROYXRpdmUnKTtcclxufVxyXG4vKiogRGV0ZWN0cyBFbGVjdHJvbiBhcHBzLiAqL1xyXG5mdW5jdGlvbiBpc0VsZWN0cm9uKCkge1xyXG4gICAgcmV0dXJuIGdldFVBKCkuaW5kZXhPZignRWxlY3Ryb24vJykgPj0gMDtcclxufVxyXG4vKiogRGV0ZWN0cyBJbnRlcm5ldCBFeHBsb3Jlci4gKi9cclxuZnVuY3Rpb24gaXNJRSgpIHtcclxuICAgIGNvbnN0IHVhID0gZ2V0VUEoKTtcclxuICAgIHJldHVybiB1YS5pbmRleE9mKCdNU0lFICcpID49IDAgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSA+PSAwO1xyXG59XHJcbi8qKiBEZXRlY3RzIFVuaXZlcnNhbCBXaW5kb3dzIFBsYXRmb3JtIGFwcHMuICovXHJcbmZ1bmN0aW9uIGlzVVdQKCkge1xyXG4gICAgcmV0dXJuIGdldFVBKCkuaW5kZXhPZignTVNBcHBIb3N0LycpID49IDA7XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCB3aGV0aGVyIHRoZSBjdXJyZW50IFNESyBidWlsZCBpcyB0aGUgTm9kZSB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHRydWUgaWYgaXQncyB0aGUgTm9kZSBTREsgYnVpbGQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc05vZGVTZGsoKSB7XHJcbiAgICByZXR1cm4gQ09OU1RBTlRTLk5PREVfQ0xJRU5UID09PSB0cnVlIHx8IENPTlNUQU5UUy5OT0RFX0FETUlOID09PSB0cnVlO1xyXG59XHJcbi8qKiBSZXR1cm5zIHRydWUgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gU2FmYXJpLiAqL1xyXG5mdW5jdGlvbiBpc1NhZmFyaSgpIHtcclxuICAgIHJldHVybiAoIWlzTm9kZSgpICYmXHJcbiAgICAgICAgISFuYXZpZ2F0b3IudXNlckFnZW50ICYmXHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnU2FmYXJpJykgJiZcclxuICAgICAgICAhbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnQ2hyb21lJykpO1xyXG59XHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjaGVja3MgaWYgaW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzZXIvc2VydmljZSB3b3JrZXIgY29udGV4dFxyXG4gKiBAcmV0dXJuIHRydWUgaWYgaW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzZXIvc2VydmljZSB3b3JrZXIgY29udGV4dFxyXG4gKi9cclxuZnVuY3Rpb24gaXNJbmRleGVkREJBdmFpbGFibGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgaW5kZXhlZERCID09PSAnb2JqZWN0JztcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCB2YWxpZGF0ZXMgYnJvd3Nlci9zdyBjb250ZXh0IGZvciBpbmRleGVkREIgYnkgb3BlbmluZyBhIGR1bW15IGluZGV4ZWREQiBkYXRhYmFzZSBhbmQgcmVqZWN0XHJcbiAqIGlmIGVycm9ycyBvY2N1ciBkdXJpbmcgdGhlIGRhdGFiYXNlIG9wZW4gb3BlcmF0aW9uLlxyXG4gKlxyXG4gKiBAdGhyb3dzIGV4Y2VwdGlvbiBpZiBjdXJyZW50IGJyb3dzZXIvc3cgY29udGV4dCBjYW4ndCBydW4gaWRiLm9wZW4gKGV4OiBTYWZhcmkgaWZyYW1lLCBGaXJlZm94XHJcbiAqIHByaXZhdGUgYnJvd3NpbmcpXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcHJlRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBEQl9DSEVDS19OQU1FID0gJ3ZhbGlkYXRlLWJyb3dzZXItY29udGV4dC1mb3ItaW5kZXhlZGRiLWFuYWx5dGljcy1tb2R1bGUnO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gc2VsZi5pbmRleGVkREIub3BlbihEQl9DSEVDS19OQU1FKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3VsdC5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGRhdGFiYXNlIG9ubHkgd2hlbiBpdCBkb2Vzbid0IHByZS1leGlzdFxyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmVFeGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKERCX0NIRUNLX05BTUUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcmVFeGlzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKChfYSA9IHJlcXVlc3QuZXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXNzYWdlKSB8fCAnJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBUaGlzIG1ldGhvZCBjaGVja3Mgd2hldGhlciBjb29raWUgaXMgZW5hYmxlZCB3aXRoaW4gY3VycmVudCBicm93c2VyXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBjb29raWUgaXMgZW5hYmxlZCB3aXRoaW4gY3VycmVudCBicm93c2VyXHJcbiAqL1xyXG5mdW5jdGlvbiBhcmVDb29raWVzRW5hYmxlZCgpIHtcclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCAhbmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBTdGFuZGFyZGl6ZWQgRmlyZWJhc2UgRXJyb3IuXHJcbiAqXHJcbiAqIFVzYWdlOlxyXG4gKlxyXG4gKiAgIC8vIFR5cGVzY3JpcHQgc3RyaW5nIGxpdGVyYWxzIGZvciB0eXBlLXNhZmUgY29kZXNcclxuICogICB0eXBlIEVyciA9XHJcbiAqICAgICAndW5rbm93bicgfFxyXG4gKiAgICAgJ29iamVjdC1ub3QtZm91bmQnXHJcbiAqICAgICA7XHJcbiAqXHJcbiAqICAgLy8gQ2xvc3VyZSBlbnVtIGZvciB0eXBlLXNhZmUgZXJyb3IgY29kZXNcclxuICogICAvLyBhdC1lbnVtIHtzdHJpbmd9XHJcbiAqICAgdmFyIEVyciA9IHtcclxuICogICAgIFVOS05PV046ICd1bmtub3duJyxcclxuICogICAgIE9CSkVDVF9OT1RfRk9VTkQ6ICdvYmplY3Qtbm90LWZvdW5kJyxcclxuICogICB9XHJcbiAqXHJcbiAqICAgbGV0IGVycm9yczogTWFwPEVyciwgc3RyaW5nPiA9IHtcclxuICogICAgICdnZW5lcmljLWVycm9yJzogXCJVbmtub3duIGVycm9yXCIsXHJcbiAqICAgICAnZmlsZS1ub3QtZm91bmQnOiBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IHskZmlsZX1cIixcclxuICogICB9O1xyXG4gKlxyXG4gKiAgIC8vIFR5cGUtc2FmZSBmdW5jdGlvbiAtIG11c3QgcGFzcyBhIHZhbGlkIGVycm9yIGNvZGUgYXMgcGFyYW0uXHJcbiAqICAgbGV0IGVycm9yID0gbmV3IEVycm9yRmFjdG9yeTxFcnI+KCdzZXJ2aWNlJywgJ1NlcnZpY2UnLCBlcnJvcnMpO1xyXG4gKlxyXG4gKiAgIC4uLlxyXG4gKiAgIHRocm93IGVycm9yLmNyZWF0ZShFcnIuR0VORVJJQyk7XHJcbiAqICAgLi4uXHJcbiAqICAgdGhyb3cgZXJyb3IuY3JlYXRlKEVyci5GSUxFX05PVF9GT1VORCwgeydmaWxlJzogZmlsZU5hbWV9KTtcclxuICogICAuLi5cclxuICogICAvLyBTZXJ2aWNlOiBDb3VsZCBub3QgZmlsZSBmaWxlOiBmb28udHh0IChzZXJ2aWNlL2ZpbGUtbm90LWZvdW5kKS5cclxuICpcclxuICogICBjYXRjaCAoZSkge1xyXG4gKiAgICAgYXNzZXJ0KGUubWVzc2FnZSA9PT0gXCJDb3VsZCBub3QgZmluZCBmaWxlOiBmb28udHh0LlwiKTtcclxuICogICAgIGlmICgoZSBhcyBGaXJlYmFzZUVycm9yKT8uY29kZSA9PT0gJ3NlcnZpY2UvZmlsZS1ub3QtZm91bmQnKSB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IHJlYWQgZmlsZTogXCIgKyBlWydmaWxlJ10pO1xyXG4gKiAgICAgfVxyXG4gKiAgIH1cclxuICovXHJcbmNvbnN0IEVSUk9SX05BTUUgPSAnRmlyZWJhc2VFcnJvcic7XHJcbi8vIEJhc2VkIG9uIGNvZGUgZnJvbTpcclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjQ3VzdG9tX0Vycm9yX1R5cGVzXHJcbmNsYXNzIEZpcmViYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBUaGUgZXJyb3IgY29kZSBmb3IgdGhpcyBlcnJvci4gKi9cclxuICAgIGNvZGUsIG1lc3NhZ2UsIFxyXG4gICAgLyoqIEN1c3RvbSBkYXRhIGZvciB0aGlzIGVycm9yLiAqL1xyXG4gICAgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5jdXN0b21EYXRhID0gY3VzdG9tRGF0YTtcclxuICAgICAgICAvKiogVGhlIGN1c3RvbSBuYW1lIGZvciBhbGwgRmlyZWJhc2VFcnJvcnMuICovXHJcbiAgICAgICAgdGhpcy5uYW1lID0gRVJST1JfTkFNRTtcclxuICAgICAgICAvLyBGaXggRm9yIEVTNVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEZpcmViYXNlRXJyb3IucHJvdG90eXBlKTtcclxuICAgICAgICAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIGZvciB3aGVyZSBvdXIgZXJyb3Igd2FzIHRocm93bi5cclxuICAgICAgICAvLyBPbmx5IGF2YWlsYWJsZSBvbiBWOC5cclxuICAgICAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcclxuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXJyb3JGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jbGFzcyBFcnJvckZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3Ioc2VydmljZSwgc2VydmljZU5hbWUsIGVycm9ycykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKGNvZGUsIC4uLmRhdGEpIHtcclxuICAgICAgICBjb25zdCBjdXN0b21EYXRhID0gZGF0YVswXSB8fCB7fTtcclxuICAgICAgICBjb25zdCBmdWxsQ29kZSA9IGAke3RoaXMuc2VydmljZX0vJHtjb2RlfWA7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmVycm9yc1tjb2RlXTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGVtcGxhdGUgPyByZXBsYWNlVGVtcGxhdGUodGVtcGxhdGUsIGN1c3RvbURhdGEpIDogJ0Vycm9yJztcclxuICAgICAgICAvLyBTZXJ2aWNlIE5hbWU6IEVycm9yIG1lc3NhZ2UgKHNlcnZpY2UvY29kZSkuXHJcbiAgICAgICAgY29uc3QgZnVsbE1lc3NhZ2UgPSBgJHt0aGlzLnNlcnZpY2VOYW1lfTogJHttZXNzYWdlfSAoJHtmdWxsQ29kZX0pLmA7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRmlyZWJhc2VFcnJvcihmdWxsQ29kZSwgZnVsbE1lc3NhZ2UsIGN1c3RvbURhdGEpO1xyXG4gICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZXBsYWNlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpIHtcclxuICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKFBBVFRFUk4sIChfLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XTtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IFN0cmluZyh2YWx1ZSkgOiBgPCR7a2V5fT8+YDtcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0IFBBVFRFUk4gPSAvXFx7XFwkKFtefV0rKX0vZztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEV2YWx1YXRlcyBhIEpTT04gc3RyaW5nIGludG8gYSBqYXZhc2NyaXB0IG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBBIHN0cmluZyBjb250YWluaW5nIEpTT04uXHJcbiAqIEByZXR1cm4geyp9IFRoZSBqYXZhc2NyaXB0IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHNwZWNpZmllZCBKU09OLlxyXG4gKi9cclxuZnVuY3Rpb24ganNvbkV2YWwoc3RyKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIEpTT04gcmVwcmVzZW50aW5nIGEgamF2YXNjcmlwdCBvYmplY3QuXHJcbiAqIEBwYXJhbSB7Kn0gZGF0YSBKYXZhc2NyaXB0IG9iamVjdCB0byBiZSBzdHJpbmdpZmllZC5cclxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgSlNPTiBjb250ZW50cyBvZiB0aGUgb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24gc3RyaW5naWZ5KGRhdGEpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGludG8gY29uc3RpdHVlbnQgcGFydHMuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gd2l0aCBpbnZhbGlkIC8gaW5jb21wbGV0ZSBjbGFpbXMgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG5jb25zdCBkZWNvZGUgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIGxldCBoZWFkZXIgPSB7fSwgY2xhaW1zID0ge30sIGRhdGEgPSB7fSwgc2lnbmF0dXJlID0gJyc7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gdG9rZW4uc3BsaXQoJy4nKTtcclxuICAgICAgICBoZWFkZXIgPSBqc29uRXZhbChiYXNlNjREZWNvZGUocGFydHNbMF0pIHx8ICcnKTtcclxuICAgICAgICBjbGFpbXMgPSBqc29uRXZhbChiYXNlNjREZWNvZGUocGFydHNbMV0pIHx8ICcnKTtcclxuICAgICAgICBzaWduYXR1cmUgPSBwYXJ0c1syXTtcclxuICAgICAgICBkYXRhID0gY2xhaW1zWydkJ10gfHwge307XHJcbiAgICAgICAgZGVsZXRlIGNsYWltc1snZCddO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHsgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgY2xhaW1zLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgc2lnbmF0dXJlXHJcbiAgICB9O1xyXG59O1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyB0aW1lLWJhc2VkIGNsYWltcy4gV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGVcclxuICogdG9rZW4gaXMgd2l0aGluIHRoZSB0aW1lIHdpbmRvdyBhdXRob3JpemVkIGJ5IHRoZSAnbmJmJyAobm90LWJlZm9yZSkgYW5kICdpYXQnIChpc3N1ZWQtYXQpIGNsYWltcy5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxuY29uc3QgaXNWYWxpZFRpbWVzdGFtcCA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgY29uc3QgY2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XHJcbiAgICBjb25zdCBub3cgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICBsZXQgdmFsaWRTaW5jZSA9IDAsIHZhbGlkVW50aWwgPSAwO1xyXG4gICAgaWYgKHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnbmJmJykpIHtcclxuICAgICAgICAgICAgdmFsaWRTaW5jZSA9IGNsYWltc1snbmJmJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0JykpIHtcclxuICAgICAgICAgICAgdmFsaWRTaW5jZSA9IGNsYWltc1snaWF0J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkVW50aWwgPSBjbGFpbXNbJ2V4cCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdG9rZW4gd2lsbCBleHBpcmUgYWZ0ZXIgMjRoIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgdmFsaWRVbnRpbCA9IHZhbGlkU2luY2UgKyA4NjQwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCEhbm93ICYmXHJcbiAgICAgICAgISF2YWxpZFNpbmNlICYmXHJcbiAgICAgICAgISF2YWxpZFVudGlsICYmXHJcbiAgICAgICAgbm93ID49IHZhbGlkU2luY2UgJiZcclxuICAgICAgICBub3cgPD0gdmFsaWRVbnRpbCk7XHJcbn07XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIHJldHVybnMgaXRzIGlzc3VlZCBhdCB0aW1lIGlmIHZhbGlkLCBudWxsIG90aGVyd2lzZS5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiBudWxsIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxuY29uc3QgaXNzdWVkQXRUaW1lID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICBjb25zdCBjbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcclxuICAgIGlmICh0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsYWltc1snaWF0J107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgZm9ybWF0LiBFeHBlY3RzIGEgdmFsaWQgaXNzdWVkLWF0IHRpbWUuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbmNvbnN0IGlzVmFsaWRGb3JtYXQgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGUodG9rZW4pLCBjbGFpbXMgPSBkZWNvZGVkLmNsYWltcztcclxuICAgIHJldHVybiAhIWNsYWltcyAmJiB0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpO1xyXG59O1xyXG4vKipcclxuICogQXR0ZW1wdHMgdG8gcGVlciBpbnRvIGFuIGF1dGggdG9rZW4gYW5kIGRldGVybWluZSBpZiBpdCdzIGFuIGFkbWluIGF1dGggdG9rZW4gYnkgbG9va2luZyBhdCB0aGUgY2xhaW1zIHBvcnRpb24uXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbmNvbnN0IGlzQWRtaW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIGNvbnN0IGNsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltc1snYWRtaW4nXSA9PT0gdHJ1ZTtcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gY29udGFpbnMob2JqLCBrZXkpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xyXG59XHJcbmZ1bmN0aW9uIHNhZmVHZXQob2JqLCBrZXkpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpc0VtcHR5KG9iaikge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIG1hcChvYmosIGZuLCBjb250ZXh0T2JqKSB7XHJcbiAgICBjb25zdCByZXMgPSB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIHJlc1trZXldID0gZm4uY2FsbChjb250ZXh0T2JqLCBvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuLyoqXHJcbiAqIERlZXAgZXF1YWwgdHdvIG9iamVjdHMuIFN1cHBvcnQgQXJyYXlzIGFuZCBPYmplY3RzLlxyXG4gKi9cclxuZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIpIHtcclxuICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xyXG4gICAgY29uc3QgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcclxuICAgIGZvciAoY29uc3QgayBvZiBhS2V5cykge1xyXG4gICAgICAgIGlmICghYktleXMuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhUHJvcCA9IGFba107XHJcbiAgICAgICAgY29uc3QgYlByb3AgPSBiW2tdO1xyXG4gICAgICAgIGlmIChpc09iamVjdChhUHJvcCkgJiYgaXNPYmplY3QoYlByb3ApKSB7XHJcbiAgICAgICAgICAgIGlmICghZGVlcEVxdWFsKGFQcm9wLCBiUHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhUHJvcCAhPT0gYlByb3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgayBvZiBiS2V5cykge1xyXG4gICAgICAgIGlmICghYUtleXMuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpbmcgIT09IG51bGwgJiYgdHlwZW9mIHRoaW5nID09PSAnb2JqZWN0JztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmVqZWN0cyBpZiB0aGUgZ2l2ZW4gcHJvbWlzZSBkb2Vzbid0IHJlc29sdmUgaW4gdGltZUluTVMgbWlsbGlzZWNvbmRzLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIHByb21pc2VXaXRoVGltZW91dChwcm9taXNlLCB0aW1lSW5NUyA9IDIwMDApIHtcclxuICAgIGNvbnN0IGRlZmVycmVkUHJvbWlzZSA9IG5ldyBEZWZlcnJlZCgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBkZWZlcnJlZFByb21pc2UucmVqZWN0KCd0aW1lb3V0IScpLCB0aW1lSW5NUyk7XHJcbiAgICBwcm9taXNlLnRoZW4oZGVmZXJyZWRQcm9taXNlLnJlc29sdmUsIGRlZmVycmVkUHJvbWlzZS5yZWplY3QpO1xyXG4gICAgcmV0dXJuIGRlZmVycmVkUHJvbWlzZS5wcm9taXNlO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgcXVlcnlzdHJpbmctZm9ybWF0dGVkIHN0cmluZyAoZS5nLiAmYXJnPXZhbCZhcmcyPXZhbDIpIGZyb20gYVxyXG4gKiBwYXJhbXMgb2JqZWN0IChlLmcuIHthcmc6ICd2YWwnLCBhcmcyOiAndmFsMid9KVxyXG4gKiBOb3RlOiBZb3UgbXVzdCBwcmVwZW5kIGl0IHdpdGggPyB3aGVuIGFkZGluZyBpdCB0byBhIFVSTC5cclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nKHF1ZXJ5c3RyaW5nUGFyYW1zKSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHF1ZXJ5c3RyaW5nUGFyYW1zKSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGFycmF5VmFsID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFycmF5VmFsKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGFyYW1zLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyYW1zLmxlbmd0aCA/ICcmJyArIHBhcmFtcy5qb2luKCcmJykgOiAnJztcclxufVxyXG4vKipcclxuICogRGVjb2RlcyBhIHF1ZXJ5c3RyaW5nIChlLmcuID9hcmc9dmFsJmFyZzI9dmFsMikgaW50byBhIHBhcmFtcyBvYmplY3RcclxuICogKGUuZy4ge2FyZzogJ3ZhbCcsIGFyZzI6ICd2YWwyJ30pXHJcbiAqL1xyXG5mdW5jdGlvbiBxdWVyeXN0cmluZ0RlY29kZShxdWVyeXN0cmluZykge1xyXG4gICAgY29uc3Qgb2JqID0ge307XHJcbiAgICBjb25zdCB0b2tlbnMgPSBxdWVyeXN0cmluZy5yZXBsYWNlKC9eXFw/LywgJycpLnNwbGl0KCcmJyk7XHJcbiAgICB0b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHRva2VuLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQoa2V5KV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG4vKipcclxuICogRXh0cmFjdCB0aGUgcXVlcnkgc3RyaW5nIHBhcnQgb2YgYSBVUkwsIGluY2x1ZGluZyB0aGUgbGVhZGluZyBxdWVzdGlvbiBtYXJrIChpZiBwcmVzZW50KS5cclxuICovXHJcbmZ1bmN0aW9uIGV4dHJhY3RRdWVyeXN0cmluZyh1cmwpIHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RhcnQgPSB1cmwuaW5kZXhPZignPycpO1xyXG4gICAgaWYgKCFxdWVyeVN0YXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZnJhZ21lbnRTdGFydCA9IHVybC5pbmRleE9mKCcjJywgcXVlcnlTdGFydCk7XHJcbiAgICByZXR1cm4gdXJsLnN1YnN0cmluZyhxdWVyeVN0YXJ0LCBmcmFnbWVudFN0YXJ0ID4gMCA/IGZyYWdtZW50U3RhcnQgOiB1bmRlZmluZWQpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IFNIQS0xIGNyeXB0b2dyYXBoaWMgaGFzaC5cclxuICogVmFyaWFibGUgbmFtZXMgZm9sbG93IHRoZSBub3RhdGlvbiBpbiBGSVBTIFBVQiAxODAtMzpcclxuICogaHR0cDovL2NzcmMubmlzdC5nb3YvcHVibGljYXRpb25zL2ZpcHMvZmlwczE4MC0zL2ZpcHMxODAtM19maW5hbC5wZGYuXHJcbiAqXHJcbiAqIFVzYWdlOlxyXG4gKiAgIHZhciBzaGExID0gbmV3IHNoYTEoKTtcclxuICogICBzaGExLnVwZGF0ZShieXRlcyk7XHJcbiAqICAgdmFyIGhhc2ggPSBzaGExLmRpZ2VzdCgpO1xyXG4gKlxyXG4gKiBQZXJmb3JtYW5jZTpcclxuICogICBDaHJvbWUgMjM6ICAgfjQwMCBNYml0L3NcclxuICogICBGaXJlZm94IDE2OiAgfjI1MCBNYml0L3NcclxuICpcclxuICovXHJcbi8qKlxyXG4gKiBTSEEtMSBjcnlwdG9ncmFwaGljIGhhc2ggY29uc3RydWN0b3IuXHJcbiAqXHJcbiAqIFRoZSBwcm9wZXJ0aWVzIGRlY2xhcmVkIGhlcmUgYXJlIGRpc2N1c3NlZCBpbiB0aGUgYWJvdmUgYWxnb3JpdGhtIGRvY3VtZW50LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGZpbmFsXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbmNsYXNzIFNoYTEge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSG9sZHMgdGhlIHByZXZpb3VzIHZhbHVlcyBvZiBhY2N1bXVsYXRlZCB2YXJpYWJsZXMgYS1lIGluIHRoZSBjb21wcmVzc19cclxuICAgICAgICAgKiBmdW5jdGlvbi5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY2hhaW5fID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBidWZmZXIgaG9sZGluZyB0aGUgcGFydGlhbGx5IGNvbXB1dGVkIGhhc2ggcmVzdWx0LlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5idWZfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gYXJyYXkgb2YgODAgYnl0ZXMsIGVhY2ggYSBwYXJ0IG9mIHRoZSBtZXNzYWdlIHRvIGJlIGhhc2hlZC4gIFJlZmVycmVkIHRvXHJcbiAgICAgICAgICogYXMgdGhlIG1lc3NhZ2Ugc2NoZWR1bGUgaW4gdGhlIGRvY3MuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLldfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29udGFpbnMgZGF0YSBuZWVkZWQgdG8gcGFkIG1lc3NhZ2VzIGxlc3MgdGhhbiA2NCBieXRlcy5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucGFkXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy50b3RhbF8gPSAwO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gNTEyIC8gODtcclxuICAgICAgICB0aGlzLnBhZF9bMF0gPSAxMjg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJsb2NrU2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFkX1tpXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzBdID0gMHg2NzQ1MjMwMTtcclxuICAgICAgICB0aGlzLmNoYWluX1sxXSA9IDB4ZWZjZGFiODk7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMl0gPSAweDk4YmFkY2ZlO1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzNdID0gMHgxMDMyNTQ3NjtcclxuICAgICAgICB0aGlzLmNoYWluX1s0XSA9IDB4YzNkMmUxZjA7XHJcbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxfID0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwgY29tcHJlc3MgaGVscGVyIGZ1bmN0aW9uLlxyXG4gICAgICogQHBhcmFtIGJ1ZiBCbG9jayB0byBjb21wcmVzcy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgT2Zmc2V0IG9mIHRoZSBibG9jayBpbiB0aGUgYnVmZmVyLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgY29tcHJlc3NfKGJ1Ziwgb2Zmc2V0KSB7XHJcbiAgICAgICAgaWYgKCFvZmZzZXQpIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgVyA9IHRoaXMuV187XHJcbiAgICAgICAgLy8gZ2V0IDE2IGJpZyBlbmRpYW4gd29yZHNcclxuICAgICAgICBpZiAodHlwZW9mIGJ1ZiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKHVzZXIpOiBbYnVnIDgxNDAxMjJdIFJlY2VudCB2ZXJzaW9ucyBvZiBTYWZhcmkgZm9yIE1hYyBPUyBhbmQgaU9TXHJcbiAgICAgICAgICAgICAgICAvLyBoYXZlIGEgYnVnIHRoYXQgdHVybnMgdGhlIHBvc3QtaW5jcmVtZW50ICsrIG9wZXJhdG9yIGludG8gcHJlLWluY3JlbWVudFxyXG4gICAgICAgICAgICAgICAgLy8gZHVyaW5nIEpJVCBjb21waWxhdGlvbi4gIFdlIGhhdmUgY29kZSB0aGF0IGRlcGVuZHMgaGVhdmlseSBvbiBTSEEtMSBmb3JcclxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3RuZXNzIGFuZCB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIGJ1Zywgc28gSSd2ZSByZW1vdmVkIGFsbCB1c2VzXHJcbiAgICAgICAgICAgICAgICAvLyBvZiBwb3N0LWluY3JlbWVudCArKyBpbiB3aGljaCB0aGUgcmVzdWx0IHZhbHVlIGlzIHVzZWQuICBXZSBjYW4gcmV2ZXJ0XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNoYW5nZSBvbmNlIHRoZSBTYWZhcmkgYnVnXHJcbiAgICAgICAgICAgICAgICAvLyAoaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEwOTAzNikgaGFzIGJlZW4gZml4ZWQgYW5kXHJcbiAgICAgICAgICAgICAgICAvLyBtb3N0IGNsaWVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgICAgICAgICAgICBXW2ldID1cclxuICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0KSA8PCAyNCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMSkgPDwgMTYpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDIpIDw8IDgpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMyk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBXW2ldID1cclxuICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldF0gPDwgMjQpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1ZltvZmZzZXQgKyAxXSA8PCAxNikgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldCArIDJdIDw8IDgpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmW29mZnNldCArIDNdO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXhwYW5kIHRvIDgwIHdvcmRzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE2OyBpIDwgODA7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gV1tpIC0gM10gXiBXW2kgLSA4XSBeIFdbaSAtIDE0XSBeIFdbaSAtIDE2XTtcclxuICAgICAgICAgICAgV1tpXSA9ICgodCA8PCAxKSB8ICh0ID4+PiAzMSkpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLmNoYWluX1swXTtcclxuICAgICAgICBsZXQgYiA9IHRoaXMuY2hhaW5fWzFdO1xyXG4gICAgICAgIGxldCBjID0gdGhpcy5jaGFpbl9bMl07XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmNoYWluX1szXTtcclxuICAgICAgICBsZXQgZSA9IHRoaXMuY2hhaW5fWzRdO1xyXG4gICAgICAgIGxldCBmLCBrO1xyXG4gICAgICAgIC8vIFRPRE8odXNlcik6IFRyeSB0byB1bnJvbGwgdGhpcyBsb29wIHRvIHNwZWVkIHVwIHRoZSBjb21wdXRhdGlvbi5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPCA0MCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGYgPSBkIF4gKGIgJiAoYyBeIGQpKTtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHg1YTgyNzk5OTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGYgPSBiIF4gYyBeIGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4NmVkOWViYTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IChiICYgYykgfCAoZCAmIChiIHwgYykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweDhmMWJiY2RjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGIgXiBjIF4gZDtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHhjYTYyYzFkNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0ID0gKCgoYSA8PCA1KSB8IChhID4+PiAyNykpICsgZiArIGUgKyBrICsgV1tpXSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgICAgICBlID0gZDtcclxuICAgICAgICAgICAgZCA9IGM7XHJcbiAgICAgICAgICAgIGMgPSAoKGIgPDwgMzApIHwgKGIgPj4+IDIpKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgICAgIGIgPSBhO1xyXG4gICAgICAgICAgICBhID0gdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMF0gPSAodGhpcy5jaGFpbl9bMF0gKyBhKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMV0gPSAodGhpcy5jaGFpbl9bMV0gKyBiKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMl0gPSAodGhpcy5jaGFpbl9bMl0gKyBjKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bM10gPSAodGhpcy5jaGFpbl9bM10gKyBkKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bNF0gPSAodGhpcy5jaGFpbl9bNF0gKyBlKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoYnl0ZXMsIGxlbmd0aCkge1xyXG4gICAgICAgIC8vIFRPRE8oam9obmxlbnopOiB0aWdodGVuIHRoZSBmdW5jdGlvbiBzaWduYXR1cmUgYW5kIHJlbW92ZSB0aGlzIGNoZWNrXHJcbiAgICAgICAgaWYgKGJ5dGVzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGVuZ3RoID0gYnl0ZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGhNaW51c0Jsb2NrID0gbGVuZ3RoIC0gdGhpcy5ibG9ja1NpemU7XHJcbiAgICAgICAgbGV0IG4gPSAwO1xyXG4gICAgICAgIC8vIFVzaW5nIGxvY2FsIGluc3RlYWQgb2YgbWVtYmVyIHZhcmlhYmxlcyBnaXZlcyB+NSUgc3BlZWR1cCBvbiBGaXJlZm94IDE2LlxyXG4gICAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuYnVmXztcclxuICAgICAgICBsZXQgaW5idWYgPSB0aGlzLmluYnVmXztcclxuICAgICAgICAvLyBUaGUgb3V0ZXIgd2hpbGUgbG9vcCBzaG91bGQgZXhlY3V0ZSBhdCBtb3N0IHR3aWNlLlxyXG4gICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgaGF2ZSBubyBkYXRhIGluIHRoZSBibG9jayB0byB0b3AgdXAsIHdlIGNhbiBkaXJlY3RseSBwcm9jZXNzIHRoZVxyXG4gICAgICAgICAgICAvLyBpbnB1dCBidWZmZXIgKGFzc3VtaW5nIGl0IGNvbnRhaW5zIHN1ZmZpY2llbnQgZGF0YSkuIFRoaXMgZ2l2ZXMgfjI1JVxyXG4gICAgICAgICAgICAvLyBzcGVlZHVwIG9uIENocm9tZSAyMyBhbmQgfjE1JSBzcGVlZHVwIG9uIEZpcmVmb3ggMTYsIGJ1dCByZXF1aXJlcyB0aGF0XHJcbiAgICAgICAgICAgIC8vIHRoZSBkYXRhIGlzIHByb3ZpZGVkIGluIGxhcmdlIGNodW5rcyAob3IgaW4gbXVsdGlwbGVzIG9mIDY0IGJ5dGVzKS5cclxuICAgICAgICAgICAgaWYgKGluYnVmID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8PSBsZW5ndGhNaW51c0Jsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wcmVzc18oYnl0ZXMsIG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIG4gKz0gdGhpcy5ibG9ja1NpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmW2luYnVmXSA9IGJ5dGVzLmNoYXJDb2RlQXQobik7XHJcbiAgICAgICAgICAgICAgICAgICAgKytpbmJ1ZjtcclxuICAgICAgICAgICAgICAgICAgICArK247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluYnVmID09PSB0aGlzLmJsb2NrU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhidWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmJ1ZiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEp1bXAgdG8gdGhlIG91dGVyIGxvb3Agc28gd2UgdXNlIHRoZSBmdWxsLWJsb2NrIG9wdGltaXphdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWZbaW5idWZdID0gYnl0ZXNbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgKytpbmJ1ZjtcclxuICAgICAgICAgICAgICAgICAgICArK247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluYnVmID09PSB0aGlzLmJsb2NrU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhidWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmJ1ZiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEp1bXAgdG8gdGhlIG91dGVyIGxvb3Agc28gd2UgdXNlIHRoZSBmdWxsLWJsb2NrIG9wdGltaXphdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5idWZfID0gaW5idWY7XHJcbiAgICAgICAgdGhpcy50b3RhbF8gKz0gbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqIEBvdmVycmlkZSAqL1xyXG4gICAgZGlnZXN0KCkge1xyXG4gICAgICAgIGNvbnN0IGRpZ2VzdCA9IFtdO1xyXG4gICAgICAgIGxldCB0b3RhbEJpdHMgPSB0aGlzLnRvdGFsXyAqIDg7XHJcbiAgICAgICAgLy8gQWRkIHBhZCAweDgwIDB4MDAqLlxyXG4gICAgICAgIGlmICh0aGlzLmluYnVmXyA8IDU2KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgNTYgLSB0aGlzLmluYnVmXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLnBhZF8sIHRoaXMuYmxvY2tTaXplIC0gKHRoaXMuaW5idWZfIC0gNTYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkICMgYml0cy5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ibG9ja1NpemUgLSAxOyBpID49IDU2OyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5idWZfW2ldID0gdG90YWxCaXRzICYgMjU1O1xyXG4gICAgICAgICAgICB0b3RhbEJpdHMgLz0gMjU2OyAvLyBEb24ndCB1c2UgYml0LXNoaWZ0aW5nIGhlcmUhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcHJlc3NfKHRoaXMuYnVmXyk7XHJcbiAgICAgICAgbGV0IG4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAyNDsgaiA+PSAwOyBqIC09IDgpIHtcclxuICAgICAgICAgICAgICAgIGRpZ2VzdFtuXSA9ICh0aGlzLmNoYWluX1tpXSA+PiBqKSAmIDI1NTtcclxuICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlnZXN0O1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBIZWxwZXIgdG8gbWFrZSBhIFN1YnNjcmliZSBmdW5jdGlvbiAoanVzdCBsaWtlIFByb21pc2UgaGVscHMgbWFrZSBhXHJcbiAqIFRoZW5hYmxlKS5cclxuICpcclxuICogQHBhcmFtIGV4ZWN1dG9yIEZ1bmN0aW9uIHdoaWNoIGNhbiBtYWtlIGNhbGxzIHRvIGEgc2luZ2xlIE9ic2VydmVyXHJcbiAqICAgICBhcyBhIHByb3h5LlxyXG4gKiBAcGFyYW0gb25Ob09ic2VydmVycyBDYWxsYmFjayB3aGVuIGNvdW50IG9mIE9ic2VydmVycyBnb2VzIHRvIHplcm8uXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdWJzY3JpYmUoZXhlY3V0b3IsIG9uTm9PYnNlcnZlcnMpIHtcclxuICAgIGNvbnN0IHByb3h5ID0gbmV3IE9ic2VydmVyUHJveHkoZXhlY3V0b3IsIG9uTm9PYnNlcnZlcnMpO1xyXG4gICAgcmV0dXJuIHByb3h5LnN1YnNjcmliZS5iaW5kKHByb3h5KTtcclxufVxyXG4vKipcclxuICogSW1wbGVtZW50IGZhbi1vdXQgZm9yIGFueSBudW1iZXIgb2YgT2JzZXJ2ZXJzIGF0dGFjaGVkIHZpYSBhIHN1YnNjcmliZVxyXG4gKiBmdW5jdGlvbi5cclxuICovXHJcbmNsYXNzIE9ic2VydmVyUHJveHkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcclxuICAgICAqICAgICBhcyBhIHByb3h5LlxyXG4gICAgICogQHBhcmFtIG9uTm9PYnNlcnZlcnMgQ2FsbGJhY2sgd2hlbiBjb3VudCBvZiBPYnNlcnZlcnMgZ29lcyB0byB6ZXJvLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihleGVjdXRvciwgb25Ob09ic2VydmVycykge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyQ291bnQgPSAwO1xyXG4gICAgICAgIC8vIE1pY3JvLXRhc2sgc2NoZWR1bGluZyBieSBjYWxsaW5nIHRhc2sudGhlbigpLlxyXG4gICAgICAgIHRoaXMudGFzayA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzID0gb25Ob09ic2VydmVycztcclxuICAgICAgICAvLyBDYWxsIHRoZSBleGVjdXRvciBhc3luY2hyb25vdXNseSBzbyBzdWJzY3JpYmVycyB0aGF0IGFyZSBjYWxsZWRcclxuICAgICAgICAvLyBzeW5jaHJvbm91c2x5IGFmdGVyIHRoZSBjcmVhdGlvbiBvZiB0aGUgc3Vic2NyaWJlIGZ1bmN0aW9uXHJcbiAgICAgICAgLy8gY2FuIHN0aWxsIHJlY2VpdmUgdGhlIHZlcnkgZmlyc3QgdmFsdWUgZ2VuZXJhdGVkIGluIHRoZSBleGVjdXRvci5cclxuICAgICAgICB0aGlzLnRhc2tcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBleGVjdXRvcih0aGlzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBuZXh0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoKG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZXJyb3IoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoKG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmUgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBhZGQgYW4gT2JzZXJ2ZXIgdG8gdGhlIGZhbi1vdXQgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiAtIFdlIHJlcXVpcmUgdGhhdCBubyBldmVudCBpcyBzZW50IHRvIGEgc3Vic2NyaWJlciBzeWNocm9ub3VzbHkgdG8gdGhlaXJcclxuICAgICAqICAgY2FsbCB0byBzdWJzY3JpYmUoKS5cclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcclxuICAgICAgICBsZXQgb2JzZXJ2ZXI7XHJcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyID09PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgZXJyb3IgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBPYnNlcnZlci4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQXNzZW1ibGUgYW4gT2JzZXJ2ZXIgb2JqZWN0IHdoZW4gcGFzc2VkIGFzIGNhbGxiYWNrIGZ1bmN0aW9ucy5cclxuICAgICAgICBpZiAoaW1wbGVtZW50c0FueU1ldGhvZHMobmV4dE9yT2JzZXJ2ZXIsIFtcclxuICAgICAgICAgICAgJ25leHQnLFxyXG4gICAgICAgICAgICAnZXJyb3InLFxyXG4gICAgICAgICAgICAnY29tcGxldGUnXHJcbiAgICAgICAgXSkpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXh0T3JPYnNlcnZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0ge1xyXG4gICAgICAgICAgICAgICAgbmV4dDogbmV4dE9yT2JzZXJ2ZXIsXHJcbiAgICAgICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYnNlcnZlci5uZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCA9IG5vb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYnNlcnZlci5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yID0gbm9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUgPSBub29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1bnN1YiA9IHRoaXMudW5zdWJzY3JpYmVPbmUuYmluZCh0aGlzLCB0aGlzLm9ic2VydmVycy5sZW5ndGgpO1xyXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gc3Vic2NyaWJlIHRvIGEgdGVybWluYXRlZCBPYnNlcnZhYmxlIC0gd2VcclxuICAgICAgICAvLyBqdXN0IHJlc3BvbmQgdG8gdGhlIE9ic2VydmVyIHdpdGggdGhlIGZpbmFsIGVycm9yIG9yIGNvbXBsZXRlXHJcbiAgICAgICAgLy8gZXZlbnQuXHJcbiAgICAgICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgdGhpcy50YXNrLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maW5hbEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHRoaXMuZmluYWxFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90aGluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgcmV0dXJuIHVuc3ViO1xyXG4gICAgfVxyXG4gICAgLy8gVW5zdWJzY3JpYmUgaXMgc3luY2hyb25vdXMgLSB3ZSBndWFyYW50ZWUgdGhhdCBubyBldmVudHMgYXJlIHNlbnQgdG9cclxuICAgIC8vIGFueSB1bnN1YnNjcmliZWQgT2JzZXJ2ZXIuXHJcbiAgICB1bnN1YnNjcmliZU9uZShpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzID09PSB1bmRlZmluZWQgfHwgdGhpcy5vYnNlcnZlcnNbaV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tpXTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyQ291bnQgLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlckNvdW50ID09PSAwICYmIHRoaXMub25Ob09ic2VydmVycyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ob09ic2VydmVycyh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JFYWNoT2JzZXJ2ZXIoZm4pIHtcclxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgLy8gQWxyZWFkeSBjbG9zZWQgYnkgcHJldmlvdXMgZXZlbnQuLi4uanVzdCBlYXQgdGhlIGFkZGl0aW9uYWwgdmFsdWVzLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNpbmNlIHNlbmRPbmUgY2FsbHMgYXN5bmNocm9ub3VzbHkgLSB0aGVyZSBpcyBubyBjaGFuY2UgdGhhdFxyXG4gICAgICAgIC8vIHRoaXMub2JzZXJ2ZXJzIHdpbGwgYmVjb21lIHVuZGVmaW5lZC5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZE9uZShpLCBmbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2FsbCB0aGUgT2JzZXJ2ZXIgdmlhIG9uZSBvZiBpdCdzIGNhbGxiYWNrIGZ1bmN0aW9uLiBXZSBhcmUgY2FyZWZ1bCB0b1xyXG4gICAgLy8gY29uZmlybSB0aGF0IHRoZSBvYnNlcnZlIGhhcyBub3QgYmVlbiB1bnN1YnNjcmliZWQgc2luY2UgdGhpcyBhc3luY2hyb25vdXNcclxuICAgIC8vIGZ1bmN0aW9uIGhhZCBiZWVuIHF1ZXVlZC5cclxuICAgIHNlbmRPbmUoaSwgZm4pIHtcclxuICAgICAgICAvLyBFeGVjdXRlIHRoZSBjYWxsYmFjayBhc3luY2hyb25vdXNseVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICB0aGlzLnRhc2sudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVycyAhPT0gdW5kZWZpbmVkICYmIHRoaXMub2JzZXJ2ZXJzW2ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm4odGhpcy5vYnNlcnZlcnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgZXhjZXB0aW9ucyByYWlzZWQgaW4gT2JzZXJ2ZXJzIG9yIG1pc3NpbmcgbWV0aG9kcyBvZiBhblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ic2VydmVyLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyBlcnJvciB0byBjb25zb2xlLiBiLzMxNDA0ODA2XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjbG9zZShlcnIpIHtcclxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKGVyciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYWxFcnJvciA9IGVycjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUHJveHkgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIGdhcmJhZ2UgY29sbGVjdCByZWZlcmVuY2VzXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMudGFzay50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25Ob09ic2VydmVycyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vKiogVHVybiBzeW5jaHJvbm91cyBmdW5jdGlvbiBpbnRvIG9uZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmZ1bmN0aW9uIGFzeW5jKGZuLCBvbkVycm9yKSB7XHJcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBmbiguLi5hcmdzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogUmV0dXJuIHRydWUgaWYgdGhlIG9iamVjdCBwYXNzZWQgaW4gaW1wbGVtZW50cyBhbnkgb2YgdGhlIG5hbWVkIG1ldGhvZHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbXBsZW1lbnRzQW55TWV0aG9kcyhvYmosIG1ldGhvZHMpIHtcclxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSB7XHJcbiAgICAgICAgaWYgKG1ldGhvZCBpbiBvYmogJiYgdHlwZW9mIG9ialttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBub29wKCkge1xyXG4gICAgLy8gZG8gbm90aGluZ1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDaGVjayB0byBtYWtlIHN1cmUgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBhcmd1bWVudHMgYXJlIHByb3ZpZGVkIGZvciBhIHB1YmxpYyBmdW5jdGlvbi5cclxuICogVGhyb3dzIGFuIGVycm9yIGlmIGl0IGZhaWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0gZm5OYW1lIFRoZSBmdW5jdGlvbiBuYW1lXHJcbiAqIEBwYXJhbSBtaW5Db3VudCBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxyXG4gKiBAcGFyYW0gbWF4Q291bnQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50IHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxyXG4gKiBAcGFyYW0gYXJnQ291bnQgVGhlIGFjdHVhbCBudW1iZXIgb2YgYXJndW1lbnRzIHByb3ZpZGVkLlxyXG4gKi9cclxuY29uc3QgdmFsaWRhdGVBcmdDb3VudCA9IGZ1bmN0aW9uIChmbk5hbWUsIG1pbkNvdW50LCBtYXhDb3VudCwgYXJnQ291bnQpIHtcclxuICAgIGxldCBhcmdFcnJvcjtcclxuICAgIGlmIChhcmdDb3VudCA8IG1pbkNvdW50KSB7XHJcbiAgICAgICAgYXJnRXJyb3IgPSAnYXQgbGVhc3QgJyArIG1pbkNvdW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXJnQ291bnQgPiBtYXhDb3VudCkge1xyXG4gICAgICAgIGFyZ0Vycm9yID0gbWF4Q291bnQgPT09IDAgPyAnbm9uZScgOiAnbm8gbW9yZSB0aGFuICcgKyBtYXhDb3VudDtcclxuICAgIH1cclxuICAgIGlmIChhcmdFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZm5OYW1lICtcclxuICAgICAgICAgICAgJyBmYWlsZWQ6IFdhcyBjYWxsZWQgd2l0aCAnICtcclxuICAgICAgICAgICAgYXJnQ291bnQgK1xyXG4gICAgICAgICAgICAoYXJnQ291bnQgPT09IDEgPyAnIGFyZ3VtZW50LicgOiAnIGFyZ3VtZW50cy4nKSArXHJcbiAgICAgICAgICAgICcgRXhwZWN0cyAnICtcclxuICAgICAgICAgICAgYXJnRXJyb3IgK1xyXG4gICAgICAgICAgICAnLic7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyB0byBwcmVmaXggYW4gZXJyb3IgbWVzc2FnZSBhYm91dCBmYWlsZWQgYXJndW1lbnQgdmFsaWRhdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0gZm5OYW1lIFRoZSBmdW5jdGlvbiBuYW1lXHJcbiAqIEBwYXJhbSBhcmdOYW1lIFRoZSBuYW1lIG9mIHRoZSBhcmd1bWVudFxyXG4gKiBAcmV0dXJuIFRoZSBwcmVmaXggdG8gYWRkIHRvIHRoZSBlcnJvciB0aHJvd24gZm9yIHZhbGlkYXRpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBlcnJvclByZWZpeChmbk5hbWUsIGFyZ05hbWUpIHtcclxuICAgIHJldHVybiBgJHtmbk5hbWV9IGZhaWxlZDogJHthcmdOYW1lfSBhcmd1bWVudCBgO1xyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gZm5OYW1lXHJcbiAqIEBwYXJhbSBhcmd1bWVudE51bWJlclxyXG4gKiBAcGFyYW0gbmFtZXNwYWNlXHJcbiAqIEBwYXJhbSBvcHRpb25hbFxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lc3BhY2UoZm5OYW1lLCBuYW1lc3BhY2UsIG9wdGlvbmFsKSB7XHJcbiAgICBpZiAob3B0aW9uYWwgJiYgIW5hbWVzcGFjZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vVE9ETzogSSBzaG91bGQgZG8gbW9yZSB2YWxpZGF0aW9uIGhlcmUuIFdlIG9ubHkgYWxsb3cgY2VydGFpbiBjaGFycyBpbiBuYW1lc3BhY2VzLlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclByZWZpeChmbk5hbWUsICduYW1lc3BhY2UnKSArICdtdXN0IGJlIGEgdmFsaWQgZmlyZWJhc2UgbmFtZXNwYWNlLicpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ2FsbGJhY2soZm5OYW1lLCBhcmd1bWVudE5hbWUsIFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xyXG5jYWxsYmFjaywgb3B0aW9uYWwpIHtcclxuICAgIGlmIChvcHRpb25hbCAmJiAhY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVDb250ZXh0T2JqZWN0KGZuTmFtZSwgYXJndW1lbnROYW1lLCBjb250ZXh0LCBvcHRpb25hbCkge1xyXG4gICAgaWYgKG9wdGlvbmFsICYmICFjb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ICE9PSAnb2JqZWN0JyB8fCBjb250ZXh0ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgY29udGV4dCBvYmplY3QuJyk7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLy8gQ29kZSBvcmlnaW5hbGx5IGNhbWUgZnJvbSBnb29nLmNyeXB0LnN0cmluZ1RvVXRmOEJ5dGVBcnJheSwgYnV0IGZvciBzb21lIHJlYXNvbiB0aGV5XHJcbi8vIGF1dG9tYXRpY2FsbHkgcmVwbGFjZWQgJ1xcclxcbicgd2l0aCAnXFxuJywgYW5kIHRoZXkgZGlkbid0IGhhbmRsZSBzdXJyb2dhdGUgcGFpcnMsXHJcbi8vIHNvIGl0J3MgYmVlbiBtb2RpZmllZC5cclxuLy8gTm90ZSB0aGF0IG5vdCBhbGwgVW5pY29kZSBjaGFyYWN0ZXJzIGFwcGVhciBhcyBzaW5nbGUgY2hhcmFjdGVycyBpbiBKYXZhU2NyaXB0IHN0cmluZ3MuXHJcbi8vIGZyb21DaGFyQ29kZSByZXR1cm5zIHRoZSBVVEYtMTYgZW5jb2Rpbmcgb2YgYSBjaGFyYWN0ZXIgLSBzbyBzb21lIFVuaWNvZGUgY2hhcmFjdGVyc1xyXG4vLyB1c2UgMiBjaGFyYWN0ZXJzIGluIEphdmFzY3JpcHQuICBBbGwgNC1ieXRlIFVURi04IGNoYXJhY3RlcnMgYmVnaW4gd2l0aCBhIGZpcnN0XHJcbi8vIGNoYXJhY3RlciBpbiB0aGUgcmFuZ2UgMHhEODAwIC0gMHhEQkZGICh0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGEgc28tY2FsbGVkIHN1cnJvZ2F0ZVxyXG4vLyBwYWlyKS5cclxuLy8gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy0xNS4xLjNcclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqL1xyXG5jb25zdCBzdHJpbmdUb0J5dGVBcnJheSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIGNvbnN0IG91dCA9IFtdO1xyXG4gICAgbGV0IHAgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIC8vIElzIHRoaXMgdGhlIGxlYWQgc3Vycm9nYXRlIGluIGEgc3Vycm9nYXRlIHBhaXI/XHJcbiAgICAgICAgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZ2ggPSBjIC0gMHhkODAwOyAvLyB0aGUgaGlnaCAxMCBiaXRzLlxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGFzc2VydChpIDwgc3RyLmxlbmd0aCwgJ1N1cnJvZ2F0ZSBwYWlyIG1pc3NpbmcgdHJhaWwgc3Vycm9nYXRlLicpO1xyXG4gICAgICAgICAgICBjb25zdCBsb3cgPSBzdHIuY2hhckNvZGVBdChpKSAtIDB4ZGMwMDsgLy8gdGhlIGxvdyAxMCBiaXRzLlxyXG4gICAgICAgICAgICBjID0gMHgxMDAwMCArIChoaWdoIDw8IDEwKSArIGxvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSBjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjIDwgMjA0OCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjIDwgNjU1MzYpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxOCkgfCAyNDA7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDEyKSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuLyoqXHJcbiAqIENhbGN1bGF0ZSBsZW5ndGggd2l0aG91dCBhY3R1YWxseSBjb252ZXJ0aW5nOyB1c2VmdWwgZm9yIGRvaW5nIGNoZWFwZXIgdmFsaWRhdGlvbi5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG5jb25zdCBzdHJpbmdMZW5ndGggPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICBsZXQgcCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICBwKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIHAgKz0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcclxuICAgICAgICAgICAgLy8gTGVhZCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpci4gIFRoZSBwYWlyIHRvZ2V0aGVyIHdpbGwgdGFrZSA0IGJ5dGVzIHRvIHJlcHJlc2VudC5cclxuICAgICAgICAgICAgcCArPSA0O1xyXG4gICAgICAgICAgICBpKys7IC8vIHNraXAgdHJhaWwgc3Vycm9nYXRlLlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcCArPSAzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQ29waWVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcclxuICogR2VuZXJhdGVzIGEgbmV3IHV1aWQuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmNvbnN0IHV1aWR2NCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsIHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gZXhwb25lbnRpYWxseSBpbmNyZWFzZS5cclxuICovXHJcbmNvbnN0IERFRkFVTFRfSU5URVJWQUxfTUlMTElTID0gMTAwMDtcclxuLyoqXHJcbiAqIFRoZSBmYWN0b3IgdG8gYmFja29mZiBieS5cclxuICogU2hvdWxkIGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAxLlxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9CQUNLT0ZGX0ZBQ1RPUiA9IDI7XHJcbi8qKlxyXG4gKiBUaGUgbWF4aW11bSBtaWxsaXNlY29uZHMgdG8gaW5jcmVhc2UgdG8uXHJcbiAqXHJcbiAqIDxwPlZpc2libGUgZm9yIHRlc3RpbmdcclxuICovXHJcbmNvbnN0IE1BWF9WQUxVRV9NSUxMSVMgPSA0ICogNjAgKiA2MCAqIDEwMDA7IC8vIEZvdXIgaG91cnMsIGxpa2UgaU9TIGFuZCBBbmRyb2lkLlxyXG4vKipcclxuICogVGhlIHBlcmNlbnRhZ2Ugb2YgYmFja29mZiB0aW1lIHRvIHJhbmRvbWl6ZSBieS5cclxuICogU2VlXHJcbiAqIGh0dHA6Ly9nby9zYWZlLWNsaWVudC1iZWhhdmlvciNzdGVwLTEtZGV0ZXJtaW5lLXRoZS1hcHByb3ByaWF0ZS1yZXRyeS1pbnRlcnZhbC10by1oYW5kbGUtc3Bpa2UtdHJhZmZpY1xyXG4gKiBmb3IgY29udGV4dC5cclxuICpcclxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZ1xyXG4gKi9cclxuY29uc3QgUkFORE9NX0ZBQ1RPUiA9IDAuNTtcclxuLyoqXHJcbiAqIEJhc2VkIG9uIHRoZSBiYWNrb2ZmIG1ldGhvZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1saWJyYXJ5L2Jsb2IvbWFzdGVyL2Nsb3N1cmUvZ29vZy9tYXRoL2V4cG9uZW50aWFsYmFja29mZi5qcy5cclxuICogRXh0cmFjdGVkIGhlcmUgc28gd2UgZG9uJ3QgbmVlZCB0byBwYXNzIG1ldGFkYXRhIGFuZCBhIHN0YXRlZnVsIEV4cG9uZW50aWFsQmFja29mZiBvYmplY3QgYXJvdW5kLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY3VsYXRlQmFja29mZk1pbGxpcyhiYWNrb2ZmQ291bnQsIGludGVydmFsTWlsbGlzID0gREVGQVVMVF9JTlRFUlZBTF9NSUxMSVMsIGJhY2tvZmZGYWN0b3IgPSBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SKSB7XHJcbiAgICAvLyBDYWxjdWxhdGVzIGFuIGV4cG9uZW50aWFsbHkgaW5jcmVhc2luZyB2YWx1ZS5cclxuICAgIC8vIERldmlhdGlvbjogY2FsY3VsYXRlcyB2YWx1ZSBmcm9tIGNvdW50IGFuZCBhIGNvbnN0YW50IGludGVydmFsLCBzbyB3ZSBvbmx5IG5lZWQgdG8gc2F2ZSB2YWx1ZVxyXG4gICAgLy8gYW5kIGNvdW50IHRvIHJlc3RvcmUgc3RhdGUuXHJcbiAgICBjb25zdCBjdXJyQmFzZVZhbHVlID0gaW50ZXJ2YWxNaWxsaXMgKiBNYXRoLnBvdyhiYWNrb2ZmRmFjdG9yLCBiYWNrb2ZmQ291bnQpO1xyXG4gICAgLy8gQSByYW5kb20gXCJmdXp6XCIgdG8gYXZvaWQgd2F2ZXMgb2YgcmV0cmllcy5cclxuICAgIC8vIERldmlhdGlvbjogcmFuZG9tRmFjdG9yIGlzIHJlcXVpcmVkLlxyXG4gICAgY29uc3QgcmFuZG9tV2FpdCA9IE1hdGgucm91bmQoXHJcbiAgICAvLyBBIGZyYWN0aW9uIG9mIHRoZSBiYWNrb2ZmIHZhbHVlIHRvIGFkZC9zdWJ0cmFjdC5cclxuICAgIC8vIERldmlhdGlvbjogY2hhbmdlcyBtdWx0aXBsaWNhdGlvbiBvcmRlciB0byBpbXByb3ZlIHJlYWRhYmlsaXR5LlxyXG4gICAgUkFORE9NX0ZBQ1RPUiAqXHJcbiAgICAgICAgY3VyckJhc2VWYWx1ZSAqXHJcbiAgICAgICAgLy8gQSByYW5kb20gZmxvYXQgKHJvdW5kZWQgdG8gaW50IGJ5IE1hdGgucm91bmQgYWJvdmUpIGluIHRoZSByYW5nZSBbLTEsIDFdLiBEZXRlcm1pbmVzXHJcbiAgICAgICAgLy8gaWYgd2UgYWRkIG9yIHN1YnRyYWN0LlxyXG4gICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqXHJcbiAgICAgICAgMik7XHJcbiAgICAvLyBMaW1pdHMgYmFja29mZiB0byBtYXggdG8gYXZvaWQgZWZmZWN0aXZlbHkgcGVybWFuZW50IGJhY2tvZmYuXHJcbiAgICByZXR1cm4gTWF0aC5taW4oTUFYX1ZBTFVFX01JTExJUywgY3VyckJhc2VWYWx1ZSArIHJhbmRvbVdhaXQpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBQcm92aWRlIEVuZ2xpc2ggb3JkaW5hbCBsZXR0ZXJzIGFmdGVyIGEgbnVtYmVyXHJcbiAqL1xyXG5mdW5jdGlvbiBvcmRpbmFsKGkpIHtcclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2l9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBpICsgaW5kaWNhdG9yKGkpO1xyXG59XHJcbmZ1bmN0aW9uIGluZGljYXRvcihpKSB7XHJcbiAgICBpID0gTWF0aC5hYnMoaSk7XHJcbiAgICBjb25zdCBjZW50ID0gaSAlIDEwMDtcclxuICAgIGlmIChjZW50ID49IDEwICYmIGNlbnQgPD0gMjApIHtcclxuICAgICAgICByZXR1cm4gJ3RoJztcclxuICAgIH1cclxuICAgIGNvbnN0IGRlYyA9IGkgJSAxMDtcclxuICAgIGlmIChkZWMgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gJ3N0JztcclxuICAgIH1cclxuICAgIGlmIChkZWMgPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gJ25kJztcclxuICAgIH1cclxuICAgIGlmIChkZWMgPT09IDMpIHtcclxuICAgICAgICByZXR1cm4gJ3JkJztcclxuICAgIH1cclxuICAgIHJldHVybiAndGgnO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldE1vZHVsYXJJbnN0YW5jZShzZXJ2aWNlKSB7XHJcbiAgICBpZiAoc2VydmljZSAmJiBzZXJ2aWNlLl9kZWxlZ2F0ZSkge1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlLl9kZWxlZ2F0ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG4gICAgfVxyXG59XG5cbmV4cG9ydHMuQ09OU1RBTlRTID0gQ09OU1RBTlRTO1xuZXhwb3J0cy5EZWNvZGVCYXNlNjRTdHJpbmdFcnJvciA9IERlY29kZUJhc2U2NFN0cmluZ0Vycm9yO1xuZXhwb3J0cy5EZWZlcnJlZCA9IERlZmVycmVkO1xuZXhwb3J0cy5FcnJvckZhY3RvcnkgPSBFcnJvckZhY3Rvcnk7XG5leHBvcnRzLkZpcmViYXNlRXJyb3IgPSBGaXJlYmFzZUVycm9yO1xuZXhwb3J0cy5NQVhfVkFMVUVfTUlMTElTID0gTUFYX1ZBTFVFX01JTExJUztcbmV4cG9ydHMuUkFORE9NX0ZBQ1RPUiA9IFJBTkRPTV9GQUNUT1I7XG5leHBvcnRzLlNoYTEgPSBTaGExO1xuZXhwb3J0cy5hcmVDb29raWVzRW5hYmxlZCA9IGFyZUNvb2tpZXNFbmFibGVkO1xuZXhwb3J0cy5hc3NlcnQgPSBhc3NlcnQ7XG5leHBvcnRzLmFzc2VydGlvbkVycm9yID0gYXNzZXJ0aW9uRXJyb3I7XG5leHBvcnRzLmFzeW5jID0gYXN5bmM7XG5leHBvcnRzLmJhc2U2NCA9IGJhc2U2NDtcbmV4cG9ydHMuYmFzZTY0RGVjb2RlID0gYmFzZTY0RGVjb2RlO1xuZXhwb3J0cy5iYXNlNjRFbmNvZGUgPSBiYXNlNjRFbmNvZGU7XG5leHBvcnRzLmJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nID0gYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmc7XG5leHBvcnRzLmNhbGN1bGF0ZUJhY2tvZmZNaWxsaXMgPSBjYWxjdWxhdGVCYWNrb2ZmTWlsbGlzO1xuZXhwb3J0cy5jb250YWlucyA9IGNvbnRhaW5zO1xuZXhwb3J0cy5jcmVhdGVNb2NrVXNlclRva2VuID0gY3JlYXRlTW9ja1VzZXJUb2tlbjtcbmV4cG9ydHMuY3JlYXRlU3Vic2NyaWJlID0gY3JlYXRlU3Vic2NyaWJlO1xuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5leHBvcnRzLmRlZXBDb3B5ID0gZGVlcENvcHk7XG5leHBvcnRzLmRlZXBFcXVhbCA9IGRlZXBFcXVhbDtcbmV4cG9ydHMuZGVlcEV4dGVuZCA9IGRlZXBFeHRlbmQ7XG5leHBvcnRzLmVycm9yUHJlZml4ID0gZXJyb3JQcmVmaXg7XG5leHBvcnRzLmV4dHJhY3RRdWVyeXN0cmluZyA9IGV4dHJhY3RRdWVyeXN0cmluZztcbmV4cG9ydHMuZ2V0RGVmYXVsdEFwcENvbmZpZyA9IGdldERlZmF1bHRBcHBDb25maWc7XG5leHBvcnRzLmdldERlZmF1bHRFbXVsYXRvckhvc3QgPSBnZXREZWZhdWx0RW11bGF0b3JIb3N0O1xuZXhwb3J0cy5nZXREZWZhdWx0RW11bGF0b3JIb3N0bmFtZUFuZFBvcnQgPSBnZXREZWZhdWx0RW11bGF0b3JIb3N0bmFtZUFuZFBvcnQ7XG5leHBvcnRzLmdldERlZmF1bHRzID0gZ2V0RGVmYXVsdHM7XG5leHBvcnRzLmdldEV4cGVyaW1lbnRhbFNldHRpbmcgPSBnZXRFeHBlcmltZW50YWxTZXR0aW5nO1xuZXhwb3J0cy5nZXRHbG9iYWwgPSBnZXRHbG9iYWw7XG5leHBvcnRzLmdldE1vZHVsYXJJbnN0YW5jZSA9IGdldE1vZHVsYXJJbnN0YW5jZTtcbmV4cG9ydHMuZ2V0VUEgPSBnZXRVQTtcbmV4cG9ydHMuaXNBZG1pbiA9IGlzQWRtaW47XG5leHBvcnRzLmlzQnJvd3NlciA9IGlzQnJvd3NlcjtcbmV4cG9ydHMuaXNCcm93c2VyRXh0ZW5zaW9uID0gaXNCcm93c2VyRXh0ZW5zaW9uO1xuZXhwb3J0cy5pc0VsZWN0cm9uID0gaXNFbGVjdHJvbjtcbmV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5leHBvcnRzLmlzSUUgPSBpc0lFO1xuZXhwb3J0cy5pc0luZGV4ZWREQkF2YWlsYWJsZSA9IGlzSW5kZXhlZERCQXZhaWxhYmxlO1xuZXhwb3J0cy5pc01vYmlsZUNvcmRvdmEgPSBpc01vYmlsZUNvcmRvdmE7XG5leHBvcnRzLmlzTm9kZSA9IGlzTm9kZTtcbmV4cG9ydHMuaXNOb2RlU2RrID0gaXNOb2RlU2RrO1xuZXhwb3J0cy5pc1JlYWN0TmF0aXZlID0gaXNSZWFjdE5hdGl2ZTtcbmV4cG9ydHMuaXNTYWZhcmkgPSBpc1NhZmFyaTtcbmV4cG9ydHMuaXNVV1AgPSBpc1VXUDtcbmV4cG9ydHMuaXNWYWxpZEZvcm1hdCA9IGlzVmFsaWRGb3JtYXQ7XG5leHBvcnRzLmlzVmFsaWRUaW1lc3RhbXAgPSBpc1ZhbGlkVGltZXN0YW1wO1xuZXhwb3J0cy5pc3N1ZWRBdFRpbWUgPSBpc3N1ZWRBdFRpbWU7XG5leHBvcnRzLmpzb25FdmFsID0ganNvbkV2YWw7XG5leHBvcnRzLm1hcCA9IG1hcDtcbmV4cG9ydHMub3JkaW5hbCA9IG9yZGluYWw7XG5leHBvcnRzLnByb21pc2VXaXRoVGltZW91dCA9IHByb21pc2VXaXRoVGltZW91dDtcbmV4cG9ydHMucXVlcnlzdHJpbmcgPSBxdWVyeXN0cmluZztcbmV4cG9ydHMucXVlcnlzdHJpbmdEZWNvZGUgPSBxdWVyeXN0cmluZ0RlY29kZTtcbmV4cG9ydHMuc2FmZUdldCA9IHNhZmVHZXQ7XG5leHBvcnRzLnN0cmluZ0xlbmd0aCA9IHN0cmluZ0xlbmd0aDtcbmV4cG9ydHMuc3RyaW5nVG9CeXRlQXJyYXkgPSBzdHJpbmdUb0J5dGVBcnJheTtcbmV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5O1xuZXhwb3J0cy51dWlkdjQgPSB1dWlkdjQ7XG5leHBvcnRzLnZhbGlkYXRlQXJnQ291bnQgPSB2YWxpZGF0ZUFyZ0NvdW50O1xuZXhwb3J0cy52YWxpZGF0ZUNhbGxiYWNrID0gdmFsaWRhdGVDYWxsYmFjaztcbmV4cG9ydHMudmFsaWRhdGVDb250ZXh0T2JqZWN0ID0gdmFsaWRhdGVDb250ZXh0T2JqZWN0O1xuZXhwb3J0cy52YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlID0gdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZTtcbmV4cG9ydHMudmFsaWRhdGVOYW1lc3BhY2UgPSB2YWxpZGF0ZU5hbWVzcGFjZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNqcy5qcy5tYXBcbiIsImNvbnN0IHsgaW5pdGlhbGl6ZUFwcCB9ID0gcmVxdWlyZSgnZmlyZWJhc2UvYXBwJyk7XHJcbmNvbnN0IHsgZ2V0TWVzc2FnaW5nLCBnZXRUb2tlbiB9ID0gcmVxdWlyZShcImZpcmViYXNlL21lc3NhZ2luZ1wiKTtcclxuXHJcbmNvbnN0IFJFQUNUX0FQUF9XRUJfUFVTSF9LRVlfUEFJUiA9IFwiQkkycXV4eGd3SDBfd2dHSnQyR0h0OXBoWV9EaGtsZHNKSkhDcTRUTXp6NjBLaU5UQ01xdXgtN2Z1UXFSR0JSSU5UQ21HS2hxWjZyVnVzeEY3b1lKR1BjXCJcclxuY29uc3QgUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQSV9LRVkgPSBcIkFJemFTeUJwWUZOVEZ2a256WS01cUpzMlJmcHBRSXE2MnZXejgwQVwiXHJcbmNvbnN0IFJFQUNUX0FQUF9GSVJFQkFTRV9BVVRIX0RPTUFJTiA9IFwiZ2VvLWxvY2F0ZS1tZS1zbnMuZmlyZWJhc2VhcHAuY29tXCJcclxuY29uc3QgUkVBQ1RfQVBQX0ZJUkVCQVNFX1BST0pFQ1RfSUQgPSBcImdlby1sb2NhdGUtbWUtc25zXCJcclxuY29uc3QgUkVBQ1RfQVBQX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUID0gXCJnZW8tbG9jYXRlLW1lLXNucy5hcHBzcG90LmNvbVwiXHJcbmNvbnN0IFJFQUNUX0FQUF9GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEID0gXCIxMDgyMjcwMjgyNzgwXCJcclxuY29uc3QgUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQUF9JRCA9IFwiMToxMDgyMjcwMjgyNzgwOndlYjo3ZDA3MTc5ZGYzYzVlZDQ1MDI1YmQ5XCJcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBSRUFDVF9BUFBfRklSRUJBU0VfQVBJX0tFWSxcclxuICAgIGF1dGhEb21haW46IFJFQUNUX0FQUF9GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICAgIHByb2plY3RJZDogUkVBQ1RfQVBQX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBSRUFDVF9BUFBfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogUkVBQ1RfQVBQX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgICBhcHBJZDogUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQUF9JRFxyXG59O1xyXG5cclxuY29uc3QgZmlyZWJhc2VBcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgbWVzc2FnaW5nID0gZ2V0TWVzc2FnaW5nKGZpcmViYXNlQXBwKTtcclxuZ2V0VG9rZW4obWVzc2FnaW5nLCB7IHZhcGlkS2V5OiBSRUFDVF9BUFBfV0VCX1BVU0hfS0VZX1BBSVIgfSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGZpcmViYXNlQXBwLFxyXG4gICAgbWVzc2FnaW5nLFxyXG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgYXBwID0gcmVxdWlyZSgnQGZpcmViYXNlL2FwcCcpO1xuXG52YXIgbmFtZSA9IFwiZmlyZWJhc2VcIjtcbnZhciB2ZXJzaW9uID0gXCIxMC4xMC4wXCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmFwcC5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ2FwcCcpO1xuXG5PYmplY3Qua2V5cyhhcHApLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYXBwW2tdOyB9XG4gIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5janMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBtZXNzYWdpbmcgPSByZXF1aXJlKCdAZmlyZWJhc2UvbWVzc2FnaW5nJyk7XG5cblxuXG5PYmplY3Qua2V5cyhtZXNzYWdpbmcpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWVzc2FnaW5nW2tdOyB9XG5cdH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5janMuanMubWFwXG4iLCJpbXBvcnQgeyB3IGFzIHdyYXAsIHIgYXMgcmVwbGFjZVRyYXBzIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5leHBvcnQgeyB1IGFzIHVud3JhcCwgdyBhcyB3cmFwIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBvcGVuREIobmFtZSwgdmVyc2lvbiwgeyBibG9ja2VkLCB1cGdyYWRlLCBibG9ja2luZywgdGVybWluYXRlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gICAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpO1xuICAgIGlmICh1cGdyYWRlKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBncmFkZSh3cmFwKHJlcXVlc3QucmVzdWx0KSwgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uKSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIG9wZW5Qcm9taXNlXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICBpZiAodGVybWluYXRlZClcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgICAgaWYgKGJsb2NraW5nKSB7XG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKGV2ZW50KSA9PiBibG9ja2luZyhldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCkpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlREIobmFtZSwgeyBibG9ja2VkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICAgIShwcm9wIGluIHRhcmdldCkgJiZcbiAgICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSlcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuICAgIGNvbnN0IHRhcmdldEZ1bmNOYW1lID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICAgIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gICAgY29uc3QgaXNXcml0ZSA9IHdyaXRlTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSk7XG4gICAgaWYgKFxuICAgIC8vIEJhaWwgaWYgdGhlIHRhcmdldCBkb2Vzbid0IGV4aXN0IG9uIHRoZSB0YXJnZXQuIEVnLCBnZXRBbGwgaXNuJ3QgaW4gRWRnZS5cbiAgICAhKHRhcmdldEZ1bmNOYW1lIGluICh1c2VJbmRleCA/IElEQkluZGV4IDogSURCT2JqZWN0U3RvcmUpLnByb3RvdHlwZSkgfHxcbiAgICAgICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoc3RvcmVOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6IHVuZGVmaW5lZCBnemlwcHMgYmV0dGVyLCBidXQgZmFpbHMgaW4gRWRnZSA6KFxuICAgICAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR4LnN0b3JlO1xuICAgICAgICBpZiAodXNlSW5kZXgpXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcbiAgICAgICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAgICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgICAgICAvLyBNdXN0IHJlamVjdCB3aXRoIG9wIHJlamVjdGlvbiBmaXJzdC5cbiAgICAgICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgICAgICBpc1dyaXRlICYmIHR4LmRvbmUsXG4gICAgICAgIF0pKVswXTtcbiAgICB9O1xuICAgIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gICAgcmV0dXJuIG1ldGhvZDtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICAgIGhhczogKHRhcmdldCwgcHJvcCkgPT4gISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXModGFyZ2V0LCBwcm9wKSxcbn0pKTtcblxuZXhwb3J0IHsgZGVsZXRlREIsIG9wZW5EQiB9O1xuIiwiY29uc3QgaW5zdGFuY2VPZkFueSA9IChvYmplY3QsIGNvbnN0cnVjdG9ycykgPT4gY29uc3RydWN0b3JzLnNvbWUoKGMpID0+IG9iamVjdCBpbnN0YW5jZW9mIGMpO1xuXG5sZXQgaWRiUHJveHlhYmxlVHlwZXM7XG5sZXQgY3Vyc29yQWR2YW5jZU1ldGhvZHM7XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldElkYlByb3h5YWJsZVR5cGVzKCkge1xuICAgIHJldHVybiAoaWRiUHJveHlhYmxlVHlwZXMgfHxcbiAgICAgICAgKGlkYlByb3h5YWJsZVR5cGVzID0gW1xuICAgICAgICAgICAgSURCRGF0YWJhc2UsXG4gICAgICAgICAgICBJREJPYmplY3RTdG9yZSxcbiAgICAgICAgICAgIElEQkluZGV4LFxuICAgICAgICAgICAgSURCQ3Vyc29yLFxuICAgICAgICAgICAgSURCVHJhbnNhY3Rpb24sXG4gICAgICAgIF0pKTtcbn1cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKSB7XG4gICAgcmV0dXJuIChjdXJzb3JBZHZhbmNlTWV0aG9kcyB8fFxuICAgICAgICAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgPSBbXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmFkdmFuY2UsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZVByaW1hcnlLZXksXG4gICAgICAgIF0pKTtcbn1cbmNvbnN0IGN1cnNvclJlcXVlc3RNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHdyYXAocmVxdWVzdC5yZXN1bHQpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgfSk7XG4gICAgcHJvbWlzZVxuICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgLy8gU2luY2UgY3Vyc29yaW5nIHJldXNlcyB0aGUgSURCUmVxdWVzdCAoKnNpZ2gqKSwgd2UgY2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbFxuICAgICAgICAvLyAoc2VlIHdyYXBGdW5jdGlvbikuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQkN1cnNvcikge1xuICAgICAgICAgICAgY3Vyc29yUmVxdWVzdE1hcC5zZXQodmFsdWUsIHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdGNoaW5nIHRvIGF2b2lkIFwiVW5jYXVnaHQgUHJvbWlzZSBleGNlcHRpb25zXCJcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAvLyBUaGlzIG1hcHBpbmcgZXhpc3RzIGluIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBidXQgZG9lc24ndCBkb2Vzbid0IGV4aXN0IGluIHRyYW5zZm9ybUNhY2hlLiBUaGlzXG4gICAgLy8gaXMgYmVjYXVzZSB3ZSBjcmVhdGUgbWFueSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QuXG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm9taXNlLCByZXF1ZXN0KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih0eCkge1xuICAgIC8vIEVhcmx5IGJhaWwgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIGEgZG9uZSBwcm9taXNlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlxuICAgIGlmICh0cmFuc2FjdGlvbkRvbmVNYXAuaGFzKHR4KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHR4LmVycm9yIHx8IG5ldyBET01FeGNlcHRpb24oJ0Fib3J0RXJyb3InLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgfSk7XG4gICAgLy8gQ2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbC5cbiAgICB0cmFuc2FjdGlvbkRvbmVNYXAuc2V0KHR4LCBkb25lKTtcbn1cbmxldCBpZGJQcm94eVRyYXBzID0ge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdHJhbnNhY3Rpb24uZG9uZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnZG9uZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRG9uZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFBvbHlmaWxsIGZvciBvYmplY3RTdG9yZU5hbWVzIGJlY2F1c2Ugb2YgRWRnZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnb2JqZWN0U3RvcmVOYW1lcycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0Lm9iamVjdFN0b3JlTmFtZXMgfHwgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0eC5zdG9yZSByZXR1cm4gdGhlIG9ubHkgc3RvcmUgaW4gdGhlIHRyYW5zYWN0aW9uLCBvciB1bmRlZmluZWQgaWYgdGhlcmUgYXJlIG1hbnkuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3N0b3JlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzFdXG4gICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIDogcmVjZWl2ZXIub2JqZWN0U3RvcmUocmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWxzZSB0cmFuc2Zvcm0gd2hhdGV2ZXIgd2UgZ2V0IGJhY2suXG4gICAgICAgIHJldHVybiB3cmFwKHRhcmdldFtwcm9wXSk7XG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbiAmJlxuICAgICAgICAgICAgKHByb3AgPT09ICdkb25lJyB8fCBwcm9wID09PSAnc3RvcmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0O1xuICAgIH0sXG59O1xuZnVuY3Rpb24gcmVwbGFjZVRyYXBzKGNhbGxiYWNrKSB7XG4gICAgaWRiUHJveHlUcmFwcyA9IGNhbGxiYWNrKGlkYlByb3h5VHJhcHMpO1xufVxuZnVuY3Rpb24gd3JhcEZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAvLyBEdWUgdG8gZXhwZWN0ZWQgb2JqZWN0IGVxdWFsaXR5ICh3aGljaCBpcyBlbmZvcmNlZCBieSB0aGUgY2FjaGluZyBpbiBgd3JhcGApLCB3ZVxuICAgIC8vIG9ubHkgY3JlYXRlIG9uZSBuZXcgZnVuYyBwZXIgZnVuYy5cbiAgICAvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBvYmplY3RTdG9yZU5hbWVzIChib29vKSwgc28gd2UgcG9seWZpbGwgaXQgaGVyZS5cbiAgICBpZiAoZnVuYyA9PT0gSURCRGF0YWJhc2UucHJvdG90eXBlLnRyYW5zYWN0aW9uICYmXG4gICAgICAgICEoJ29iamVjdFN0b3JlTmFtZXMnIGluIElEQlRyYW5zYWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdG9yZU5hbWVzLCAuLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCB0eCA9IGZ1bmMuY2FsbCh1bndyYXAodGhpcyksIHN0b3JlTmFtZXMsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLnNldCh0eCwgc3RvcmVOYW1lcy5zb3J0ID8gc3RvcmVOYW1lcy5zb3J0KCkgOiBbc3RvcmVOYW1lc10pO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAodHgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBDdXJzb3IgbWV0aG9kcyBhcmUgc3BlY2lhbCwgYXMgdGhlIGJlaGF2aW91ciBpcyBhIGxpdHRsZSBtb3JlIGRpZmZlcmVudCB0byBzdGFuZGFyZCBJREIuIEluXG4gICAgLy8gSURCLCB5b3UgYWR2YW5jZSB0aGUgY3Vyc29yIGFuZCB3YWl0IGZvciBhIG5ldyAnc3VjY2Vzcycgb24gdGhlIElEQlJlcXVlc3QgdGhhdCBnYXZlIHlvdSB0aGVcbiAgICAvLyBjdXJzb3IuIEl0J3Mga2luZGEgbGlrZSBhIHByb21pc2UgdGhhdCBjYW4gcmVzb2x2ZSB3aXRoIG1hbnkgdmFsdWVzLiBUaGF0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgIC8vIHdpdGggcmVhbCBwcm9taXNlcywgc28gZWFjaCBhZHZhbmNlIG1ldGhvZHMgcmV0dXJucyBhIG5ldyBwcm9taXNlIGZvciB0aGUgY3Vyc29yIG9iamVjdCwgb3JcbiAgICAvLyB1bmRlZmluZWQgaWYgdGhlIGVuZCBvZiB0aGUgY3Vyc29yIGhhcyBiZWVuIHJlYWNoZWQuXG4gICAgaWYgKGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkuaW5jbHVkZXMoZnVuYykpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICAgICAgZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAoY3Vyc29yUmVxdWVzdE1hcC5nZXQodGhpcykpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICByZXR1cm4gd3JhcChmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncykpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgICAvLyB3aGljaCBpcyBsYXRlciByZXR1cm5lZCBmb3IgdHJhbnNhY3Rpb24uZG9uZSAoc2VlIGlkYk9iamVjdEhhbmRsZXIpLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKVxuICAgICAgICBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuICAgIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaWRiUHJveHlUcmFwcyk7XG4gICAgLy8gUmV0dXJuIHRoZSBzYW1lIHZhbHVlIGJhY2sgaWYgd2UncmUgbm90IGdvaW5nIHRvIHRyYW5zZm9ybSBpdC5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3cmFwKHZhbHVlKSB7XG4gICAgLy8gV2Ugc29tZXRpbWVzIGdlbmVyYXRlIG11bHRpcGxlIHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdCAoZWcgd2hlbiBjdXJzb3JpbmcpLCBiZWNhdXNlXG4gICAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpXG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAgLy8gVGhpcyBpcyBmYXN0ZXIsIGJ1dCBpdCBhbHNvIHByb3ZpZGVzIG9iamVjdCBlcXVhbGl0eS5cbiAgICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgICAvLyBUaGVzZSBtYXkgYmUgcHJpbWl0aXZlIHR5cGVzLCBzbyB0aGV5IGNhbid0IGJlIFdlYWtNYXAga2V5cy5cbiAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmNvbnN0IHVud3JhcCA9ICh2YWx1ZSkgPT4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG5cbmV4cG9ydCB7IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBhcyBhLCBpbnN0YW5jZU9mQW55IGFzIGksIHJlcGxhY2VUcmFwcyBhcyByLCB1bndyYXAgYXMgdSwgd3JhcCBhcyB3IH07XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2ZiLW1lc3NhZ2luZy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwicmVxdWlyZSIsImdldE1lc3NhZ2luZyIsImdldFRva2VuIiwiUkVBQ1RfQVBQX1dFQl9QVVNIX0tFWV9QQUlSIiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQSV9LRVkiLCJSRUFDVF9BUFBfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJSRUFDVF9BUFBfRklSRUJBU0VfUFJPSkVDVF9JRCIsIlJFQUNUX0FQUF9GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIlJFQUNUX0FQUF9GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQUF9JRCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmlyZWJhc2VBcHAiLCJtZXNzYWdpbmciLCJ2YXBpZEtleSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9