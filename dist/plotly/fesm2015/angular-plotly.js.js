import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, ViewChild, Input, Output, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { __awaiter } from 'tslib';

class PlotlyService {
    static setModuleName(moduleName) {
        PlotlyService.moduleName = moduleName;
    }
    static getModuleName() {
        return PlotlyService.moduleName;
    }
    static setPlotly(plotly) {
        if (typeof plotly === 'object' && typeof plotly.react !== 'function') {
            throw new Error('Invalid plotly.js version. Please, use any version above 1.40.0');
        }
        PlotlyService.plotly = plotly;
    }
    static insert(instance) {
        const index = PlotlyService.instances.indexOf(instance);
        if (index === -1) {
            PlotlyService.instances.push(instance);
        }
        return instance;
    }
    static remove(div) {
        const index = PlotlyService.instances.indexOf(div);
        if (index >= 0) {
            PlotlyService.instances.splice(index, 1);
            PlotlyService.plotly.purge(div);
        }
    }
    getInstanceByDivId(id) {
        for (const instance of PlotlyService.instances) {
            if (instance && instance.id === id) {
                return instance;
            }
        }
        return undefined;
    }
    getPlotly() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitFor(() => this._getPlotly() !== 'waiting');
            return this._getPlotly();
        });
    }
    _getPlotly() {
        if (typeof PlotlyService.plotly === 'undefined') {
            const msg = PlotlyService.moduleName === 'ViaCDN'
                ? `Error loading Peer dependency plotly.js from CDN url`
                : `Peer dependency plotly.js isn't installed`;
            throw new Error(msg);
        }
        return PlotlyService.plotly;
    }
    waitFor(fn) {
        return new Promise((resolve) => {
            const localFn = () => {
                fn() ? resolve() : setTimeout(localFn, 10);
            };
            localFn();
        });
    }
    // tslint:disable max-line-length
    newPlot(div, data, layout, config, frames) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitFor(() => this._getPlotly() !== 'waiting');
            if (frames) {
                const obj = { data, layout, config, frames };
                return this._getPlotly().newPlot(div, obj).then(() => PlotlyService.insert(div));
            }
            return this._getPlotly().newPlot(div, data, layout, config).then(() => PlotlyService.insert(div));
        });
    }
    plot(div, data, layout, config, frames) {
        if (frames) {
            const obj = { data, layout, config, frames };
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
    }
    update(div, data, layout, config, frames) {
        if (frames) {
            const obj = { data, layout, config, frames };
            return this._getPlotly().react(div, obj);
        }
        return this._getPlotly().react(div, data, layout, config);
    }
    // tslint:enable max-line-length
    resize(div) {
        return this._getPlotly().Plots.resize(div);
    }
}
PlotlyService.instances = [];
PlotlyService.plotly = undefined;
PlotlyService.moduleName = undefined;
PlotlyService.ɵfac = function PlotlyService_Factory(t) { return new (t || PlotlyService)(); };
PlotlyService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PlotlyService, factory: PlotlyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlotlyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

/* tslint:disable component-selector no-output-native no-conflicting-lifecycle */
const _c0 = ["plot"];
const _c1 = ["*"];
// @dynamic
class PlotlyComponent {
    constructor(plotly, iterableDiffers, keyValueDiffers) {
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
        this.initialized = new EventEmitter();
        this.update = new EventEmitter();
        this.purge = new EventEmitter();
        this.error = new EventEmitter();
        this.afterExport = new EventEmitter();
        this.afterPlot = new EventEmitter();
        this.animated = new EventEmitter();
        this.animatingFrame = new EventEmitter();
        this.animationInterrupted = new EventEmitter();
        this.autoSize = new EventEmitter();
        this.beforeExport = new EventEmitter();
        this.buttonClicked = new EventEmitter();
        this.click = new EventEmitter();
        this.plotlyClick = new EventEmitter();
        this.clickAnnotation = new EventEmitter();
        this.deselect = new EventEmitter();
        this.doubleClick = new EventEmitter();
        this.framework = new EventEmitter();
        this.hover = new EventEmitter();
        this.legendClick = new EventEmitter();
        this.legendDoubleClick = new EventEmitter();
        this.react = new EventEmitter();
        this.relayout = new EventEmitter();
        this.restyle = new EventEmitter();
        this.redraw = new EventEmitter();
        this.selected = new EventEmitter();
        this.selecting = new EventEmitter();
        this.sliderChange = new EventEmitter();
        this.sliderEnd = new EventEmitter();
        this.sliderStart = new EventEmitter();
        this.transitioning = new EventEmitter();
        this.transitionInterrupted = new EventEmitter();
        this.unhover = new EventEmitter();
        this.relayouting = new EventEmitter();
        this.treemapclick = new EventEmitter();
        this.sunburstclick = new EventEmitter();
        this.eventNames = ['afterExport', 'afterPlot', 'animated', 'animatingFrame', 'animationInterrupted', 'autoSize',
            'beforeExport', 'buttonClicked', 'clickAnnotation', 'deselect', 'doubleClick', 'framework', 'hover',
            'legendClick', 'legendDoubleClick', 'react', 'relayout', 'restyle', 'redraw', 'selected', 'selecting', 'sliderChange',
            'sliderEnd', 'sliderStart', 'transitioning', 'transitionInterrupted', 'unhover', 'relayouting', 'treemapclick',
            'sunburstclick'];
    }
    ngOnInit() {
        this.createPlot().then(() => {
            const figure = this.createFigure();
            this.initialized.emit(figure);
        });
        if (this.click.observers.length > 0) {
            const msg = 'DEPRECATED: Reconsider using `(plotlyClick)` instead of `(click)` to avoid event conflict. '
                + 'Please check https://github.com/plotly/angular-plotly.js#FAQ';
            console.error(msg);
        }
    }
    ngOnDestroy() {
        if (typeof this.resizeHandler === 'function') {
            this.getWindow().removeEventListener('resize', this.resizeHandler);
            this.resizeHandler = undefined;
        }
        const figure = this.createFigure();
        this.purge.emit(figure);
        PlotlyService.remove(this.plotlyInstance);
    }
    ngOnChanges(changes) {
        let shouldUpdate = false;
        const revision = changes.revision;
        if (revision && !revision.isFirstChange()) {
            shouldUpdate = true;
        }
        const debug = changes.debug;
        if (debug && !debug.isFirstChange()) {
            shouldUpdate = true;
        }
        if (shouldUpdate) {
            this.updatePlot();
        }
        this.updateWindowResizeHandler();
    }
    ngDoCheck() {
        if (this.updateOnlyWithRevision) {
            return false;
        }
        let shouldUpdate = false;
        if (this.updateOnLayoutChange) {
            if (this.layoutDiffer) {
                const layoutHasDiff = this.layoutDiffer.diff(this.layout);
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
                const dataHasDiff = this.dataDiffer.diff(this.data);
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
    }
    getWindow() {
        return window;
    }
    getClassName() {
        let classes = [this.defaultClassName];
        if (Array.isArray(this.className)) {
            classes = classes.concat(this.className);
        }
        else if (this.className) {
            classes.push(this.className);
        }
        return classes.join(' ');
    }
    createPlot() {
        return this.plotly.newPlot(this.plotEl.nativeElement, this.data, this.layout, this.config, this.frames).then(plotlyInstance => {
            this.plotlyInstance = plotlyInstance;
            this.getWindow().gd = this.debug ? plotlyInstance : undefined;
            this.eventNames.forEach(name => {
                const eventName = `plotly_${name.toLowerCase()}`;
                plotlyInstance.on(eventName, (data) => this[name].emit(data));
            });
            plotlyInstance.on('plotly_click', (data) => {
                this.click.emit(data);
                this.plotlyClick.emit(data);
            });
            this.updateWindowResizeHandler();
        }, err => {
            console.error('Error while plotting:', err);
            this.error.emit(err);
        });
    }
    createFigure() {
        const p = this.plotlyInstance;
        const figure = {
            data: p.data,
            layout: p.layout,
            frames: p._transitionData ? p._transitionData._frames : null
        };
        return figure;
    }
    updatePlot() {
        if (!this.plotlyInstance) {
            const error = new Error(`Plotly component wasn't initialized`);
            this.error.emit(error);
            throw error;
        }
        const layout = Object.assign({}, this.layout);
        return this.plotly.update(this.plotlyInstance, this.data, layout, this.config, this.frames).then(() => {
            const figure = this.createFigure();
            this.update.emit(figure);
        }, err => {
            console.error('Error while updating plot:', err);
            this.error.emit(err);
        });
    }
    updateWindowResizeHandler() {
        if (this.useResizeHandler) {
            if (this.resizeHandler === undefined) {
                this.resizeHandler = () => this.plotly.resize(this.plotlyInstance);
                this.getWindow().addEventListener('resize', this.resizeHandler);
            }
        }
        else {
            if (typeof this.resizeHandler === 'function') {
                this.getWindow().removeEventListener('resize', this.resizeHandler);
                this.resizeHandler = undefined;
            }
        }
    }
    dataDifferTrackBy(_, item) {
        const obj = Object.assign({}, item, { uid: '' });
        return JSON.stringify(obj);
    }
}
PlotlyComponent.ɵfac = function PlotlyComponent_Factory(t) { return new (t || PlotlyComponent)(i0.ɵɵdirectiveInject(PlotlyService), i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(i0.KeyValueDiffers)); };
PlotlyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PlotlyComponent, selectors: [["plotly-plot"]], viewQuery: function PlotlyComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.plotEl = _t.first);
    } }, inputs: { data: "data", layout: "layout", config: "config", frames: "frames", style: "style", divId: "divId", revision: "revision", className: "className", debug: "debug", useResizeHandler: "useResizeHandler", updateOnLayoutChange: "updateOnLayoutChange", updateOnDataChange: "updateOnDataChange", updateOnlyWithRevision: "updateOnlyWithRevision" }, outputs: { initialized: "initialized", update: "update", purge: "purge", error: "error", afterExport: "afterExport", afterPlot: "afterPlot", animated: "animated", animatingFrame: "animatingFrame", animationInterrupted: "animationInterrupted", autoSize: "autoSize", beforeExport: "beforeExport", buttonClicked: "buttonClicked", click: "click", plotlyClick: "plotlyClick", clickAnnotation: "clickAnnotation", deselect: "deselect", doubleClick: "doubleClick", framework: "framework", hover: "hover", legendClick: "legendClick", legendDoubleClick: "legendDoubleClick", react: "react", relayout: "relayout", restyle: "restyle", redraw: "redraw", selected: "selected", selecting: "selecting", sliderChange: "sliderChange", sliderEnd: "sliderEnd", sliderStart: "sliderStart", transitioning: "transitioning", transitionInterrupted: "transitionInterrupted", unhover: "unhover", relayouting: "relayouting", treemapclick: "treemapclick", sunburstclick: "sunburstclick" }, features: [i0.ɵɵProvidersFeature([PlotlyService]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 3, vars: 3, consts: [[3, "ngClass", "ngStyle"], ["plot", ""]], template: function PlotlyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.getClassName())("ngStyle", ctx.style);
        i0.ɵɵattribute("id", ctx.divId);
    } }, directives: [i2.NgClass, i2.NgStyle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlotlyComponent, [{
        type: Component,
        args: [{
                selector: 'plotly-plot',
                template: `<div #plot [attr.id]="divId" [ngClass]="getClassName()" [ngStyle]="style">
      <ng-content></ng-content>
    </div>`,
                providers: [PlotlyService],
            }]
    }], function () { return [{ type: PlotlyService }, { type: i0.IterableDiffers }, { type: i0.KeyValueDiffers }]; }, { plotEl: [{
            type: ViewChild,
            args: ['plot', { static: true }]
        }], data: [{
            type: Input
        }], layout: [{
            type: Input
        }], config: [{
            type: Input
        }], frames: [{
            type: Input
        }], style: [{
            type: Input
        }], divId: [{
            type: Input
        }], revision: [{
            type: Input
        }], className: [{
            type: Input
        }], debug: [{
            type: Input
        }], useResizeHandler: [{
            type: Input
        }], updateOnLayoutChange: [{
            type: Input
        }], updateOnDataChange: [{
            type: Input
        }], updateOnlyWithRevision: [{
            type: Input
        }], initialized: [{
            type: Output
        }], update: [{
            type: Output
        }], purge: [{
            type: Output
        }], error: [{
            type: Output
        }], afterExport: [{
            type: Output
        }], afterPlot: [{
            type: Output
        }], animated: [{
            type: Output
        }], animatingFrame: [{
            type: Output
        }], animationInterrupted: [{
            type: Output
        }], autoSize: [{
            type: Output
        }], beforeExport: [{
            type: Output
        }], buttonClicked: [{
            type: Output
        }], click: [{
            type: Output
        }], plotlyClick: [{
            type: Output
        }], clickAnnotation: [{
            type: Output
        }], deselect: [{
            type: Output
        }], doubleClick: [{
            type: Output
        }], framework: [{
            type: Output
        }], hover: [{
            type: Output
        }], legendClick: [{
            type: Output
        }], legendDoubleClick: [{
            type: Output
        }], react: [{
            type: Output
        }], relayout: [{
            type: Output
        }], restyle: [{
            type: Output
        }], redraw: [{
            type: Output
        }], selected: [{
            type: Output
        }], selecting: [{
            type: Output
        }], sliderChange: [{
            type: Output
        }], sliderEnd: [{
            type: Output
        }], sliderStart: [{
            type: Output
        }], transitioning: [{
            type: Output
        }], transitionInterrupted: [{
            type: Output
        }], unhover: [{
            type: Output
        }], relayouting: [{
            type: Output
        }], treemapclick: [{
            type: Output
        }], sunburstclick: [{
            type: Output
        }] }); })();

class PlotlySharedModule {
    constructor() { }
}
PlotlySharedModule.ɵfac = function PlotlySharedModule_Factory(t) { return new (t || PlotlySharedModule)(); };
PlotlySharedModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PlotlySharedModule });
PlotlySharedModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PlotlyService], imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlotlySharedModule, [{
        type: NgModule,
        args: [{
                declarations: [PlotlyComponent],
                imports: [CommonModule],
                providers: [PlotlyService],
                exports: [PlotlyComponent],
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PlotlySharedModule, { declarations: [PlotlyComponent], imports: [CommonModule], exports: [PlotlyComponent] }); })();

class PlotlyModule {
    constructor() {
        if (!this.isValid()) {
            const msg = 'Invalid PlotlyJS object. Please check https://github.com/plotly/angular-plotly.js#quick-start'
                + ' to see how to add PlotlyJS to your project.';
            throw new Error(msg);
        }
        PlotlyService.setPlotly(PlotlyModule.plotlyjs);
    }
    isValid() {
        return PlotlyModule.plotlyjs !== undefined
            && (typeof PlotlyModule.plotlyjs.plot === 'function'
                || typeof PlotlyModule.plotlyjs.newPlot === 'function');
    }
}
PlotlyModule.plotlyjs = {};
PlotlyModule.ɵfac = function PlotlyModule_Factory(t) { return new (t || PlotlyModule)(); };
PlotlyModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PlotlyModule });
PlotlyModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PlotlyService], imports: [[CommonModule, PlotlySharedModule], PlotlySharedModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlotlyModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [CommonModule, PlotlySharedModule],
                providers: [PlotlyService],
                exports: [PlotlySharedModule],
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PlotlyModule, { imports: [CommonModule, PlotlySharedModule], exports: [PlotlySharedModule] }); })();

class PlotlyViaCDNModule {
    constructor(plotlyService) {
        this.plotlyService = plotlyService;
        PlotlyService.setModuleName('ViaCDN');
    }
    static setPlotlyVersion(version) {
        const isOk = version === 'latest' || /^\d\.\d{1,2}\.\d{1,2}$/.test(version);
        if (!isOk) {
            throw new Error(`Invalid plotly version. Please set 'latest' or version number (i.e.: 1.4.3)`);
        }
        PlotlyViaCDNModule.loadViaCDN();
        PlotlyViaCDNModule.plotlyVersion = version;
    }
    static setPlotlyBundle(bundle) {
        const isOk = bundle === null || PlotlyViaCDNModule.plotlyBundleNames.indexOf(bundle) >= 0;
        if (!isOk) {
            const names = PlotlyViaCDNModule.plotlyBundleNames.map(n => `"${n}"`).join(', ');
            throw new Error(`Invalid plotly bundle. Please set to null for full or ${names} for a partial bundle.`);
        }
        PlotlyViaCDNModule.plotlyBundle = bundle;
    }
    static loadViaCDN() {
        PlotlyService.setPlotly('waiting');
        const init = () => {
            const src = PlotlyViaCDNModule.plotlyBundle == null
                ? `https://cdn.plot.ly/plotly-${PlotlyViaCDNModule.plotlyVersion}.min.js`
                : `https://cdn.plot.ly/plotly-${PlotlyViaCDNModule.plotlyBundle}-${PlotlyViaCDNModule.plotlyVersion}.min.js`;
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = src;
            script.onerror = () => console.error(`Error loading plotly.js library from ${src}`);
            const head = document.getElementsByTagName('head')[0];
            head.appendChild(script);
            let counter = 200; // equivalent of 10 seconds...
            const fn = () => {
                const plotly = window.Plotly;
                if (plotly) {
                    PlotlyService.setPlotly(plotly);
                }
                else if (counter > 0) {
                    counter--;
                    setTimeout(fn, 50);
                }
                else {
                    throw new Error(`Error loading plotly.js library from ${src}. Timeout.`);
                }
            };
            fn();
        };
        setTimeout(init);
    }
}
PlotlyViaCDNModule.plotlyBundle = null;
PlotlyViaCDNModule.plotlyVersion = 'latest';
PlotlyViaCDNModule.plotlyBundleNames = ['basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox', 'finance'];
PlotlyViaCDNModule.ɵfac = function PlotlyViaCDNModule_Factory(t) { return new (t || PlotlyViaCDNModule)(i0.ɵɵinject(PlotlyService)); };
PlotlyViaCDNModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PlotlyViaCDNModule });
PlotlyViaCDNModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PlotlyService], imports: [[CommonModule, PlotlySharedModule], PlotlySharedModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlotlyViaCDNModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [CommonModule, PlotlySharedModule],
                providers: [PlotlyService],
                exports: [PlotlySharedModule],
            }]
    }], function () { return [{ type: PlotlyService }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PlotlyViaCDNModule, { imports: [CommonModule, PlotlySharedModule], exports: [PlotlySharedModule] }); })();

class PlotlyViaWindowModule {
    constructor() {
        const plotly = window.Plotly;
        if (typeof plotly === 'undefined') {
            throw new Error(`Plotly object not found on window.`);
        }
        PlotlyService.setPlotly(plotly);
    }
}
PlotlyViaWindowModule.ɵfac = function PlotlyViaWindowModule_Factory(t) { return new (t || PlotlyViaWindowModule)(); };
PlotlyViaWindowModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PlotlyViaWindowModule });
PlotlyViaWindowModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [PlotlyService], imports: [[CommonModule, PlotlySharedModule], PlotlySharedModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlotlyViaWindowModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [CommonModule, PlotlySharedModule],
                providers: [PlotlyService],
                exports: [PlotlySharedModule],
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PlotlyViaWindowModule, { imports: [CommonModule, PlotlySharedModule], exports: [PlotlySharedModule] }); })();

/*
 * Public API Surface of plotly
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PlotlyComponent, PlotlyModule, PlotlyService, PlotlySharedModule, PlotlyViaCDNModule, PlotlyViaWindowModule };
//# sourceMappingURL=angular-plotly.js.js.map
