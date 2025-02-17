(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-plotly.js', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['angular-plotly'] = global['angular-plotly'] || {}, global['angular-plotly'].js = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, i2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    /*! *****************************************************************************
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
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
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
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var PlotlyService = /** @class */ (function () {
        function PlotlyService() {
        }
        PlotlyService.setModuleName = function (moduleName) {
            PlotlyService.moduleName = moduleName;
        };
        PlotlyService.getModuleName = function () {
            return PlotlyService.moduleName;
        };
        PlotlyService.setPlotly = function (plotly) {
            if (typeof plotly === 'object' && typeof plotly.react !== 'function') {
                throw new Error('Invalid plotly.js version. Please, use any version above 1.40.0');
            }
            PlotlyService.plotly = plotly;
        };
        PlotlyService.insert = function (instance) {
            var index = PlotlyService.instances.indexOf(instance);
            if (index === -1) {
                PlotlyService.instances.push(instance);
            }
            return instance;
        };
        PlotlyService.remove = function (div) {
            var index = PlotlyService.instances.indexOf(div);
            if (index >= 0) {
                PlotlyService.instances.splice(index, 1);
                PlotlyService.plotly.purge(div);
            }
        };
        PlotlyService.prototype.getInstanceByDivId = function (id) {
            var e_1, _a;
            try {
                for (var _b = __values(PlotlyService.instances), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var instance = _c.value;
                    if (instance && instance.id === id) {
                        return instance;
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
            return undefined;
        };
        PlotlyService.prototype.getPlotly = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.waitFor(function () { return _this._getPlotly() !== 'waiting'; })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, this._getPlotly()];
                    }
                });
            });
        };
        PlotlyService.prototype._getPlotly = function () {
            if (typeof PlotlyService.plotly === 'undefined') {
                var msg = PlotlyService.moduleName === 'ViaCDN'
                    ? "Error loading Peer dependency plotly.js from CDN url"
                    : "Peer dependency plotly.js isn't installed";
                throw new Error(msg);
            }
            return PlotlyService.plotly;
        };
        PlotlyService.prototype.waitFor = function (fn) {
            return new Promise(function (resolve) {
                var localFn = function () {
                    fn() ? resolve() : setTimeout(localFn, 10);
                };
                localFn();
            });
        };
        // tslint:disable max-line-length
        PlotlyService.prototype.newPlot = function (div, data, layout, config, frames) {
            return __awaiter(this, void 0, void 0, function () {
                var obj;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.waitFor(function () { return _this._getPlotly() !== 'waiting'; })];
                        case 1:
                            _a.sent();
                            if (frames) {
                                obj = { data: data, layout: layout, config: config, frames: frames };
                                return [2 /*return*/, this._getPlotly().newPlot(div, obj).then(function () { return PlotlyService.insert(div); })];
                            }
                            return [2 /*return*/, this._getPlotly().newPlot(div, data, layout, config).then(function () { return PlotlyService.insert(div); })];
                    }
                });
            });
        };
        PlotlyService.prototype.plot = function (div, data, layout, config, frames) {
            if (frames) {
                var obj = { data: data, layout: layout, config: config, frames: frames };
                if (typeof (this._getPlotly().plot) === 'function') {
                    return this._getPlotly().plot(div, obj);
                }
                else {
                    // Adds support for Plotly 2.0.0 release candidates
                    return this._getPlotly().newPlot(div, obj);
                }
            }
            if (typeof (this._getPlotly().plot) === 'function') {
                return this._getPlotly().plot(div, data, layout, config);
            }
            else {
                // Adds support for Plotly 2.0.0 release candidates
                return this._getPlotly().newPlot(div, data, layout, config);
            }
        };
        PlotlyService.prototype.update = function (div, data, layout, config, frames) {
            if (frames) {
                var obj = { data: data, layout: layout, config: config, frames: frames };
                return this._getPlotly().react(div, obj);
            }
            return this._getPlotly().react(div, data, layout, config);
        };
        // tslint:enable max-line-length
        PlotlyService.prototype.resize = function (div) {
            return this._getPlotly().Plots.resize(div);
        };
        return PlotlyService;
    }());
    PlotlyService.instances = [];
    PlotlyService.plotly = undefined;
    PlotlyService.moduleName = undefined;
    PlotlyService.ɵfac = function PlotlyService_Factory(t) { return new (t || PlotlyService)(); };
    PlotlyService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: PlotlyService, factory: PlotlyService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PlotlyService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    /* tslint:disable component-selector no-output-native no-conflicting-lifecycle */
    var _c0 = ["plot"];
    var _c1 = ["*"];
    // @dynamic
    var PlotlyComponent = /** @class */ (function () {
        function PlotlyComponent(plotly, iterableDiffers, keyValueDiffers) {
            this.plotly = plotly;
            this.iterableDiffers = iterableDiffers;
            this.keyValueDiffers = keyValueDiffers;
            this.defaultClassName = 'js-plotly-plot';
            this.revision = 0;
            this.debug = false;
            this.useResizeHandler = false;
            this.updateOnLayoutChange = true;
            this.updateOnDataChange = true;
            this.updateOnlyWithRevision = false;
            this.initialized = new i0.EventEmitter();
            this.update = new i0.EventEmitter();
            this.purge = new i0.EventEmitter();
            this.error = new i0.EventEmitter();
            this.afterExport = new i0.EventEmitter();
            this.afterPlot = new i0.EventEmitter();
            this.animated = new i0.EventEmitter();
            this.animatingFrame = new i0.EventEmitter();
            this.animationInterrupted = new i0.EventEmitter();
            this.autoSize = new i0.EventEmitter();
            this.beforeExport = new i0.EventEmitter();
            this.buttonClicked = new i0.EventEmitter();
            this.click = new i0.EventEmitter();
            this.plotlyClick = new i0.EventEmitter();
            this.clickAnnotation = new i0.EventEmitter();
            this.deselect = new i0.EventEmitter();
            this.doubleClick = new i0.EventEmitter();
            this.framework = new i0.EventEmitter();
            this.hover = new i0.EventEmitter();
            this.legendClick = new i0.EventEmitter();
            this.legendDoubleClick = new i0.EventEmitter();
            this.react = new i0.EventEmitter();
            this.relayout = new i0.EventEmitter();
            this.restyle = new i0.EventEmitter();
            this.redraw = new i0.EventEmitter();
            this.selected = new i0.EventEmitter();
            this.selecting = new i0.EventEmitter();
            this.sliderChange = new i0.EventEmitter();
            this.sliderEnd = new i0.EventEmitter();
            this.sliderStart = new i0.EventEmitter();
            this.transitioning = new i0.EventEmitter();
            this.transitionInterrupted = new i0.EventEmitter();
            this.unhover = new i0.EventEmitter();
            this.relayouting = new i0.EventEmitter();
            this.treemapclick = new i0.EventEmitter();
            this.sunburstclick = new i0.EventEmitter();
            this.eventNames = ['afterExport', 'afterPlot', 'animated', 'animatingFrame', 'animationInterrupted', 'autoSize',
                'beforeExport', 'buttonClicked', 'clickAnnotation', 'deselect', 'doubleClick', 'framework', 'hover',
                'legendClick', 'legendDoubleClick', 'react', 'relayout', 'restyle', 'redraw', 'selected', 'selecting', 'sliderChange',
                'sliderEnd', 'sliderStart', 'transitioning', 'transitionInterrupted', 'unhover', 'relayouting', 'treemapclick',
                'sunburstclick'];
        }
        PlotlyComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.createPlot().then(function () {
                var figure = _this.createFigure();
                _this.initialized.emit(figure);
            });
            if (this.click.observers.length > 0) {
                var msg = 'DEPRECATED: Reconsider using `(plotlyClick)` instead of `(click)` to avoid event conflict. '
                    + 'Please check https://github.com/plotly/angular-plotly.js#FAQ';
                console.error(msg);
            }
        };
        PlotlyComponent.prototype.ngOnDestroy = function () {
            if (typeof this.resizeHandler === 'function') {
                this.getWindow().removeEventListener('resize', this.resizeHandler);
                this.resizeHandler = undefined;
            }
            var figure = this.createFigure();
            this.purge.emit(figure);
            PlotlyService.remove(this.plotlyInstance);
        };
        PlotlyComponent.prototype.ngOnChanges = function (changes) {
            var shouldUpdate = false;
            var revision = changes.revision;
            if (revision && !revision.isFirstChange()) {
                shouldUpdate = true;
            }
            var debug = changes.debug;
            if (debug && !debug.isFirstChange()) {
                shouldUpdate = true;
            }
            if (shouldUpdate) {
                this.updatePlot();
            }
            this.updateWindowResizeHandler();
        };
        PlotlyComponent.prototype.ngDoCheck = function () {
            if (this.updateOnlyWithRevision) {
                return false;
            }
            var shouldUpdate = false;
            if (this.updateOnLayoutChange) {
                if (this.layoutDiffer) {
                    var layoutHasDiff = this.layoutDiffer.diff(this.layout);
                    if (layoutHasDiff) {
                        shouldUpdate = true;
                    }
                }
                else if (this.layout) {
                    this.layoutDiffer = this.keyValueDiffers.find(this.layout).create();
                }
                else {
                    this.layoutDiffer = undefined;
                }
            }
            if (this.updateOnDataChange) {
                if (this.dataDiffer) {
                    var dataHasDiff = this.dataDiffer.diff(this.data);
                    if (dataHasDiff) {
                        shouldUpdate = true;
                    }
                }
                else if (Array.isArray(this.data)) {
                    this.dataDiffer = this.iterableDiffers.find(this.data).create(this.dataDifferTrackBy);
                }
                else {
                    this.dataDiffer = undefined;
                }
            }
            if (shouldUpdate && this.plotlyInstance) {
                this.updatePlot();
            }
        };
        PlotlyComponent.prototype.getWindow = function () {
            return window;
        };
        PlotlyComponent.prototype.getClassName = function () {
            var classes = [this.defaultClassName];
            if (Array.isArray(this.className)) {
                classes = classes.concat(this.className);
            }
            else if (this.className) {
                classes.push(this.className);
            }
            return classes.join(' ');
        };
        PlotlyComponent.prototype.createPlot = function () {
            var _this = this;
            return this.plotly.newPlot(this.plotEl.nativeElement, this.data, this.layout, this.config, this.frames).then(function (plotlyInstance) {
                _this.plotlyInstance = plotlyInstance;
                _this.getWindow().gd = _this.debug ? plotlyInstance : undefined;
                _this.eventNames.forEach(function (name) {
                    var eventName = "plotly_" + name.toLowerCase();
                    plotlyInstance.on(eventName, function (data) { return _this[name].emit(data); });
                });
                plotlyInstance.on('plotly_click', function (data) {
                    _this.click.emit(data);
                    _this.plotlyClick.emit(data);
                });
                _this.updateWindowResizeHandler();
            }, function (err) {
                console.error('Error while plotting:', err);
                _this.error.emit(err);
            });
        };
        PlotlyComponent.prototype.createFigure = function () {
            var p = this.plotlyInstance;
            var figure = {
                data: p.data,
                layout: p.layout,
                frames: p._transitionData ? p._transitionData._frames : null
            };
            return figure;
        };
        PlotlyComponent.prototype.updatePlot = function () {
            var _this = this;
            if (!this.plotlyInstance) {
                var error = new Error("Plotly component wasn't initialized");
                this.error.emit(error);
                throw error;
            }
            var layout = Object.assign({}, this.layout);
            return this.plotly.update(this.plotlyInstance, this.data, layout, this.config, this.frames).then(function () {
                var figure = _this.createFigure();
                _this.update.emit(figure);
            }, function (err) {
                console.error('Error while updating plot:', err);
                _this.error.emit(err);
            });
        };
        PlotlyComponent.prototype.updateWindowResizeHandler = function () {
            var _this = this;
            if (this.useResizeHandler) {
                if (this.resizeHandler === undefined) {
                    this.resizeHandler = function () { return _this.plotly.resize(_this.plotlyInstance); };
                    this.getWindow().addEventListener('resize', this.resizeHandler);
                }
            }
            else {
                if (typeof this.resizeHandler === 'function') {
                    this.getWindow().removeEventListener('resize', this.resizeHandler);
                    this.resizeHandler = undefined;
                }
            }
        };
        PlotlyComponent.prototype.dataDifferTrackBy = function (_, item) {
            var obj = Object.assign({}, item, { uid: '' });
            return JSON.stringify(obj);
        };
        return PlotlyComponent;
    }());
    PlotlyComponent.ɵfac = function PlotlyComponent_Factory(t) { return new (t || PlotlyComponent)(i0__namespace.ɵɵdirectiveInject(PlotlyService), i0__namespace.ɵɵdirectiveInject(i0__namespace.IterableDiffers), i0__namespace.ɵɵdirectiveInject(i0__namespace.KeyValueDiffers)); };
    PlotlyComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PlotlyComponent, selectors: [["plotly-plot"]], viewQuery: function PlotlyComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.plotEl = _t.first);
            }
        }, inputs: { data: "data", layout: "layout", config: "config", frames: "frames", style: "style", divId: "divId", revision: "revision", className: "className", debug: "debug", useResizeHandler: "useResizeHandler", updateOnLayoutChange: "updateOnLayoutChange", updateOnDataChange: "updateOnDataChange", updateOnlyWithRevision: "updateOnlyWithRevision" }, outputs: { initialized: "initialized", update: "update", purge: "purge", error: "error", afterExport: "afterExport", afterPlot: "afterPlot", animated: "animated", animatingFrame: "animatingFrame", animationInterrupted: "animationInterrupted", autoSize: "autoSize", beforeExport: "beforeExport", buttonClicked: "buttonClicked", click: "click", plotlyClick: "plotlyClick", clickAnnotation: "clickAnnotation", deselect: "deselect", doubleClick: "doubleClick", framework: "framework", hover: "hover", legendClick: "legendClick", legendDoubleClick: "legendDoubleClick", react: "react", relayout: "relayout", restyle: "restyle", redraw: "redraw", selected: "selected", selecting: "selecting", sliderChange: "sliderChange", sliderEnd: "sliderEnd", sliderStart: "sliderStart", transitioning: "transitioning", transitionInterrupted: "transitionInterrupted", unhover: "unhover", relayouting: "relayouting", treemapclick: "treemapclick", sunburstclick: "sunburstclick" }, features: [i0__namespace.ɵɵProvidersFeature([PlotlyService]), i0__namespace.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 3, vars: 3, consts: [[3, "ngClass", "ngStyle"], ["plot", ""]], template: function PlotlyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0, 1);
                i0__namespace.ɵɵprojection(2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngClass", ctx.getClassName())("ngStyle", ctx.style);
                i0__namespace.ɵɵattribute("id", ctx.divId);
            }
        }, directives: [i2__namespace.NgClass, i2__namespace.NgStyle], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PlotlyComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'plotly-plot',
                        template: "<div #plot [attr.id]=\"divId\" [ngClass]=\"getClassName()\" [ngStyle]=\"style\">\n      <ng-content></ng-content>\n    </div>",
                        providers: [PlotlyService],
                    }]
            }], function () { return [{ type: PlotlyService }, { type: i0__namespace.IterableDiffers }, { type: i0__namespace.KeyValueDiffers }]; }, { plotEl: [{
                    type: i0.ViewChild,
                    args: ['plot', { static: true }]
                }], data: [{
                    type: i0.Input
                }], layout: [{
                    type: i0.Input
                }], config: [{
                    type: i0.Input
                }], frames: [{
                    type: i0.Input
                }], style: [{
                    type: i0.Input
                }], divId: [{
                    type: i0.Input
                }], revision: [{
                    type: i0.Input
                }], className: [{
                    type: i0.Input
                }], debug: [{
                    type: i0.Input
                }], useResizeHandler: [{
                    type: i0.Input
                }], updateOnLayoutChange: [{
                    type: i0.Input
                }], updateOnDataChange: [{
                    type: i0.Input
                }], updateOnlyWithRevision: [{
                    type: i0.Input
                }], initialized: [{
                    type: i0.Output
                }], update: [{
                    type: i0.Output
                }], purge: [{
                    type: i0.Output
                }], error: [{
                    type: i0.Output
                }], afterExport: [{
                    type: i0.Output
                }], afterPlot: [{
                    type: i0.Output
                }], animated: [{
                    type: i0.Output
                }], animatingFrame: [{
                    type: i0.Output
                }], animationInterrupted: [{
                    type: i0.Output
                }], autoSize: [{
                    type: i0.Output
                }], beforeExport: [{
                    type: i0.Output
                }], buttonClicked: [{
                    type: i0.Output
                }], click: [{
                    type: i0.Output
                }], plotlyClick: [{
                    type: i0.Output
                }], clickAnnotation: [{
                    type: i0.Output
                }], deselect: [{
                    type: i0.Output
                }], doubleClick: [{
                    type: i0.Output
                }], framework: [{
                    type: i0.Output
                }], hover: [{
                    type: i0.Output
                }], legendClick: [{
                    type: i0.Output
                }], legendDoubleClick: [{
                    type: i0.Output
                }], react: [{
                    type: i0.Output
                }], relayout: [{
                    type: i0.Output
                }], restyle: [{
                    type: i0.Output
                }], redraw: [{
                    type: i0.Output
                }], selected: [{
                    type: i0.Output
                }], selecting: [{
                    type: i0.Output
                }], sliderChange: [{
                    type: i0.Output
                }], sliderEnd: [{
                    type: i0.Output
                }], sliderStart: [{
                    type: i0.Output
                }], transitioning: [{
                    type: i0.Output
                }], transitionInterrupted: [{
                    type: i0.Output
                }], unhover: [{
                    type: i0.Output
                }], relayouting: [{
                    type: i0.Output
                }], treemapclick: [{
                    type: i0.Output
                }], sunburstclick: [{
                    type: i0.Output
                }] });
    })();

    var PlotlySharedModule = /** @class */ (function () {
        function PlotlySharedModule() {
        }
        return PlotlySharedModule;
    }());
    PlotlySharedModule.ɵfac = function PlotlySharedModule_Factory(t) { return new (t || PlotlySharedModule)(); };
    PlotlySharedModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: PlotlySharedModule });
    PlotlySharedModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [PlotlyService], imports: [[i2.CommonModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PlotlySharedModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [PlotlyComponent],
                        imports: [i2.CommonModule],
                        providers: [PlotlyService],
                        exports: [PlotlyComponent],
                    }]
            }], function () { return []; }, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(PlotlySharedModule, { declarations: [PlotlyComponent], imports: [i2.CommonModule], exports: [PlotlyComponent] }); })();

    var PlotlyModule = /** @class */ (function () {
        function PlotlyModule() {
            if (!this.isValid()) {
                var msg = 'Invalid PlotlyJS object. Please check https://github.com/plotly/angular-plotly.js#quick-start'
                    + ' to see how to add PlotlyJS to your project.';
                throw new Error(msg);
            }
            PlotlyService.setPlotly(PlotlyModule.plotlyjs);
        }
        PlotlyModule.prototype.isValid = function () {
            return PlotlyModule.plotlyjs !== undefined
                && (typeof PlotlyModule.plotlyjs.plot === 'function'
                    || typeof PlotlyModule.plotlyjs.newPlot === 'function');
        };
        return PlotlyModule;
    }());
    PlotlyModule.plotlyjs = {};
    PlotlyModule.ɵfac = function PlotlyModule_Factory(t) { return new (t || PlotlyModule)(); };
    PlotlyModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: PlotlyModule });
    PlotlyModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [PlotlyService], imports: [[i2.CommonModule, PlotlySharedModule], PlotlySharedModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PlotlyModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [i2.CommonModule, PlotlySharedModule],
                        providers: [PlotlyService],
                        exports: [PlotlySharedModule],
                    }]
            }], function () { return []; }, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(PlotlyModule, { imports: [i2.CommonModule, PlotlySharedModule], exports: [PlotlySharedModule] }); })();

    var PlotlyViaCDNModule = /** @class */ (function () {
        function PlotlyViaCDNModule(plotlyService) {
            this.plotlyService = plotlyService;
            PlotlyService.setModuleName('ViaCDN');
        }
        PlotlyViaCDNModule.setPlotlyVersion = function (version) {
            var isOk = version === 'latest' || /^\d\.\d{1,2}\.\d{1,2}$/.test(version);
            if (!isOk) {
                throw new Error("Invalid plotly version. Please set 'latest' or version number (i.e.: 1.4.3)");
            }
            PlotlyViaCDNModule.loadViaCDN();
            PlotlyViaCDNModule.plotlyVersion = version;
        };
        PlotlyViaCDNModule.setPlotlyBundle = function (bundle) {
            var isOk = bundle === null || PlotlyViaCDNModule.plotlyBundleNames.indexOf(bundle) >= 0;
            if (!isOk) {
                var names = PlotlyViaCDNModule.plotlyBundleNames.map(function (n) { return "\"" + n + "\""; }).join(', ');
                throw new Error("Invalid plotly bundle. Please set to null for full or " + names + " for a partial bundle.");
            }
            PlotlyViaCDNModule.plotlyBundle = bundle;
        };
        PlotlyViaCDNModule.loadViaCDN = function () {
            PlotlyService.setPlotly('waiting');
            var init = function () {
                var src = PlotlyViaCDNModule.plotlyBundle == null
                    ? "https://cdn.plot.ly/plotly-" + PlotlyViaCDNModule.plotlyVersion + ".min.js"
                    : "https://cdn.plot.ly/plotly-" + PlotlyViaCDNModule.plotlyBundle + "-" + PlotlyViaCDNModule.plotlyVersion + ".min.js";
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = src;
                script.onerror = function () { return console.error("Error loading plotly.js library from " + src); };
                var head = document.getElementsByTagName('head')[0];
                head.appendChild(script);
                var counter = 200; // equivalent of 10 seconds...
                var fn = function () {
                    var plotly = window.Plotly;
                    if (plotly) {
                        PlotlyService.setPlotly(plotly);
                    }
                    else if (counter > 0) {
                        counter--;
                        setTimeout(fn, 50);
                    }
                    else {
                        throw new Error("Error loading plotly.js library from " + src + ". Timeout.");
                    }
                };
                fn();
            };
            setTimeout(init);
        };
        return PlotlyViaCDNModule;
    }());
    PlotlyViaCDNModule.plotlyBundle = null;
    PlotlyViaCDNModule.plotlyVersion = 'latest';
    PlotlyViaCDNModule.plotlyBundleNames = ['basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox', 'finance'];
    PlotlyViaCDNModule.ɵfac = function PlotlyViaCDNModule_Factory(t) { return new (t || PlotlyViaCDNModule)(i0__namespace.ɵɵinject(PlotlyService)); };
    PlotlyViaCDNModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: PlotlyViaCDNModule });
    PlotlyViaCDNModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [PlotlyService], imports: [[i2.CommonModule, PlotlySharedModule], PlotlySharedModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PlotlyViaCDNModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [i2.CommonModule, PlotlySharedModule],
                        providers: [PlotlyService],
                        exports: [PlotlySharedModule],
                    }]
            }], function () { return [{ type: PlotlyService }]; }, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(PlotlyViaCDNModule, { imports: [i2.CommonModule, PlotlySharedModule], exports: [PlotlySharedModule] }); })();

    var PlotlyViaWindowModule = /** @class */ (function () {
        function PlotlyViaWindowModule() {
            var plotly = window.Plotly;
            if (typeof plotly === 'undefined') {
                throw new Error("Plotly object not found on window.");
            }
            PlotlyService.setPlotly(plotly);
        }
        return PlotlyViaWindowModule;
    }());
    PlotlyViaWindowModule.ɵfac = function PlotlyViaWindowModule_Factory(t) { return new (t || PlotlyViaWindowModule)(); };
    PlotlyViaWindowModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: PlotlyViaWindowModule });
    PlotlyViaWindowModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [PlotlyService], imports: [[i2.CommonModule, PlotlySharedModule], PlotlySharedModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PlotlyViaWindowModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [i2.CommonModule, PlotlySharedModule],
                        providers: [PlotlyService],
                        exports: [PlotlySharedModule],
                    }]
            }], function () { return []; }, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(PlotlyViaWindowModule, { imports: [i2.CommonModule, PlotlySharedModule], exports: [PlotlySharedModule] }); })();

    /*
     * Public API Surface of plotly
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PlotlyComponent = PlotlyComponent;
    exports.PlotlyModule = PlotlyModule;
    exports.PlotlyService = PlotlyService;
    exports.PlotlySharedModule = PlotlySharedModule;
    exports.PlotlyViaCDNModule = PlotlyViaCDNModule;
    exports.PlotlyViaWindowModule = PlotlyViaWindowModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-plotly.js.umd.js.map
