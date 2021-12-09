/* tslint:disable component-selector no-output-native no-conflicting-lifecycle */
import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { PlotlyService } from './plotly.service';
import * as i0 from "@angular/core";
import * as i1 from "./plotly.service";
import * as i2 from "@angular/common";
const _c0 = ["plot"];
const _c1 = ["*"];
// @dynamic
export class PlotlyComponent {
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
PlotlyComponent.ɵfac = function PlotlyComponent_Factory(t) { return new (t || PlotlyComponent)(i0.ɵɵdirectiveInject(i1.PlotlyService), i0.ɵɵdirectiveInject(i0.IterableDiffers), i0.ɵɵdirectiveInject(i0.KeyValueDiffers)); };
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
    }], function () { return [{ type: i1.PlotlyService }, { type: i0.IterableDiffers }, { type: i0.KeyValueDiffers }]; }, { plotEl: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdGx5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3Bsb3RseS9zcmMvbGliL3Bsb3RseS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQWlGO0FBRWpGLE9BQU8sRUFDSCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04sU0FBUyxHQU1aLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0FBR2pELFdBQVc7QUFRWCxNQUFNLE9BQU8sZUFBZTtJQXNFeEIsWUFDVyxNQUFxQixFQUNyQixlQUFnQyxFQUNoQyxlQUFnQztRQUZoQyxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUF4RWpDLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBZ0JyQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6Qix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUU5QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ2hELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUMzQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDMUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFFbEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FB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QWE7a0JBQXRCLE1BQU07WUFDRyxLQUFLO2tCQUFkLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csZUFBZTtrQkFBeEIsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTTtZQUNHLEtBQUs7a0JBQWQsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU07WUFDRyxpQkFBaUI7a0JBQTFCLE1BQU07WUFDRyxLQUFLO2tCQUFkLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQUNHLHFCQUFxQjtrQkFBOUIsTUFBTTtZQUNHLE9BQU87a0JBQWhCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSBjb21wb25lbnQtc2VsZWN0b3Igbm8tb3V0cHV0LW5hdGl2ZSBuby1jb25mbGljdGluZy1saWZlY3ljbGUgKi9cblxuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25EZXN0cm95LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZSxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFZpZXdDaGlsZCxcbiAgICBEb0NoZWNrLFxuICAgIEl0ZXJhYmxlRGlmZmVyLFxuICAgIEl0ZXJhYmxlRGlmZmVycyxcbiAgICBLZXlWYWx1ZURpZmZlcixcbiAgICBLZXlWYWx1ZURpZmZlcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQbG90bHlTZXJ2aWNlIH0gZnJvbSAnLi9wbG90bHkuc2VydmljZSc7XG5pbXBvcnQgeyBQbG90bHkgfSBmcm9tICcuL3Bsb3RseS5pbnRlcmZhY2UnO1xuXG4vLyBAZHluYW1pY1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwbG90bHktcGxvdCcsXG4gICAgdGVtcGxhdGU6IGA8ZGl2ICNwbG90IFthdHRyLmlkXT1cImRpdklkXCIgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NOYW1lKClcIiBbbmdTdHlsZV09XCJzdHlsZVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PmAsXG4gICAgcHJvdmlkZXJzOiBbUGxvdGx5U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFBsb3RseUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xuICAgIHByb3RlY3RlZCBkZWZhdWx0Q2xhc3NOYW1lID0gJ2pzLXBsb3RseS1wbG90JztcblxuICAgIHB1YmxpYyBwbG90bHlJbnN0YW5jZTogUGxvdGx5LlBsb3RseUhUTUxFbGVtZW50O1xuICAgIHB1YmxpYyByZXNpemVIYW5kbGVyPzogKGluc3RhbmNlOiBQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQpID0+IHZvaWQ7XG4gICAgcHVibGljIGxheW91dERpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xuICAgIHB1YmxpYyBkYXRhRGlmZmVyOiBJdGVyYWJsZURpZmZlcjxQbG90bHkuRGF0YT47XG5cbiAgICBAVmlld0NoaWxkKCdwbG90JywgeyBzdGF0aWM6IHRydWUgfSkgcGxvdEVsOiBFbGVtZW50UmVmO1xuXG4gICAgQElucHV0KCkgZGF0YT86IFBsb3RseS5EYXRhW107XG4gICAgQElucHV0KCkgbGF5b3V0PzogUGFydGlhbDxQbG90bHkuTGF5b3V0PjtcbiAgICBASW5wdXQoKSBjb25maWc/OiBQYXJ0aWFsPFBsb3RseS5Db25maWc+O1xuICAgIEBJbnB1dCgpIGZyYW1lcz86IFBhcnRpYWw8UGxvdGx5LkNvbmZpZz5bXTtcbiAgICBASW5wdXQoKSBzdHlsZT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgICBASW5wdXQoKSBkaXZJZD86IHN0cmluZztcbiAgICBASW5wdXQoKSByZXZpc2lvbiA9IDA7XG4gICAgQElucHV0KCkgY2xhc3NOYW1lPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgQElucHV0KCkgZGVidWcgPSBmYWxzZTtcbiAgICBASW5wdXQoKSB1c2VSZXNpemVIYW5kbGVyID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSB1cGRhdGVPbkxheW91dENoYW5nZSA9IHRydWU7XG4gICAgQElucHV0KCkgdXBkYXRlT25EYXRhQ2hhbmdlID0gdHJ1ZTtcbiAgICBASW5wdXQoKSB1cGRhdGVPbmx5V2l0aFJldmlzaW9uID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KCkgaW5pdGlhbGl6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBsb3RseS5GaWd1cmU+KCk7XG4gICAgQE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGxvdGx5LkZpZ3VyZT4oKTtcbiAgICBAT3V0cHV0KCkgcHVyZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBsb3RseS5GaWd1cmU+KCk7XG4gICAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcblxuICAgIEBPdXRwdXQoKSBhZnRlckV4cG9ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJQbG90ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBhbmltYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYW5pbWF0aW5nRnJhbWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGFuaW1hdGlvbkludGVycnVwdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBhdXRvU2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYmVmb3JlRXhwb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBidXR0b25DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcGxvdGx5Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGNsaWNrQW5ub3RhdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZGVzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGRvdWJsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBmcmFtZXdvcmsgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBsZWdlbmRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgbGVnZW5kRG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHJlYWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSByZWxheW91dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcmVzdHlsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcmVkcmF3ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBzbGlkZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHNsaWRlckVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgc2xpZGVyU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHRyYW5zaXRpb25pbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHRyYW5zaXRpb25JbnRlcnJ1cHRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgdW5ob3ZlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcmVsYXlvdXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHRyZWVtYXBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgc3VuYnVyc3RjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyBldmVudE5hbWVzID0gWydhZnRlckV4cG9ydCcsICdhZnRlclBsb3QnLCAnYW5pbWF0ZWQnLCAnYW5pbWF0aW5nRnJhbWUnLCAnYW5pbWF0aW9uSW50ZXJydXB0ZWQnLCAnYXV0b1NpemUnLFxuICAgICAgICAnYmVmb3JlRXhwb3J0JywgJ2J1dHRvbkNsaWNrZWQnLCAnY2xpY2tBbm5vdGF0aW9uJywgJ2Rlc2VsZWN0JywgJ2RvdWJsZUNsaWNrJywgJ2ZyYW1ld29yaycsICdob3ZlcicsXG4gICAgICAgICdsZWdlbmRDbGljaycsICdsZWdlbmREb3VibGVDbGljaycsICdyZWFjdCcsICdyZWxheW91dCcsICdyZXN0eWxlJywgJ3JlZHJhdycsICdzZWxlY3RlZCcsICdzZWxlY3RpbmcnLCAnc2xpZGVyQ2hhbmdlJyxcbiAgICAgICAgJ3NsaWRlckVuZCcsICdzbGlkZXJTdGFydCcsICd0cmFuc2l0aW9uaW5nJywgJ3RyYW5zaXRpb25JbnRlcnJ1cHRlZCcsICd1bmhvdmVyJywgJ3JlbGF5b3V0aW5nJywgJ3RyZWVtYXBjbGljaycsXG4gICAgICAgICdzdW5idXJzdGNsaWNrJ107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHBsb3RseTogUGxvdGx5U2VydmljZSxcbiAgICAgICAgcHVibGljIGl0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgICAgICBwdWJsaWMga2V5VmFsdWVEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZVBsb3QoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZ3VyZSA9IHRoaXMuY3JlYXRlRmlndXJlKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkLmVtaXQoZmlndXJlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9ICdERVBSRUNBVEVEOiBSZWNvbnNpZGVyIHVzaW5nIGAocGxvdGx5Q2xpY2spYCBpbnN0ZWFkIG9mIGAoY2xpY2spYCB0byBhdm9pZCBldmVudCBjb25mbGljdC4gJ1xuICAgICAgICAgICAgICAgICsgJ1BsZWFzZSBjaGVjayBodHRwczovL2dpdGh1Yi5jb20vcGxvdGx5L2FuZ3VsYXItcGxvdGx5LmpzI0ZBUSc7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc2l6ZUhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyIGFzIGFueSk7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWd1cmUgPSB0aGlzLmNyZWF0ZUZpZ3VyZSgpO1xuICAgICAgICB0aGlzLnB1cmdlLmVtaXQoZmlndXJlKTtcbiAgICAgICAgUGxvdGx5U2VydmljZS5yZW1vdmUodGhpcy5wbG90bHlJbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcmV2aXNpb246IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXMucmV2aXNpb247XG4gICAgICAgIGlmIChyZXZpc2lvbiAmJiAhcmV2aXNpb24uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVidWc6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXMuZGVidWc7XG4gICAgICAgIGlmIChkZWJ1ZyAmJiAhZGVidWcuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbG90KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBuZ0RvQ2hlY2soKTogYm9vbGVhbiB8IHZvaWQge1xuICAgICAgICBpZiAodGhpcy51cGRhdGVPbmx5V2l0aFJldmlzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMudXBkYXRlT25MYXlvdXRDaGFuZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dERpZmZlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxheW91dEhhc0RpZmYgPSB0aGlzLmxheW91dERpZmZlci5kaWZmKHRoaXMubGF5b3V0KTtcbiAgICAgICAgICAgICAgICBpZiAobGF5b3V0SGFzRGlmZikge1xuICAgICAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dERpZmZlciA9IHRoaXMua2V5VmFsdWVEaWZmZXJzLmZpbmQodGhpcy5sYXlvdXQpLmNyZWF0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dERpZmZlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZU9uRGF0YUNoYW5nZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YURpZmZlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFIYXNEaWZmID0gdGhpcy5kYXRhRGlmZmVyLmRpZmYodGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YUhhc0RpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRhKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YURpZmZlciA9IHRoaXMuaXRlcmFibGVEaWZmZXJzLmZpbmQodGhpcy5kYXRhKS5jcmVhdGUodGhpcy5kYXRhRGlmZmVyVHJhY2tCeSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YURpZmZlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUgJiYgdGhpcy5wbG90bHlJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbG90KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRXaW5kb3coKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG5cbiAgICBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGNsYXNzZXMgPSBbdGhpcy5kZWZhdWx0Q2xhc3NOYW1lXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdCh0aGlzLmNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlUGxvdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxvdGx5Lm5ld1Bsb3QodGhpcy5wbG90RWwubmF0aXZlRWxlbWVudCwgdGhpcy5kYXRhLCB0aGlzLmxheW91dCwgdGhpcy5jb25maWcsIHRoaXMuZnJhbWVzKS50aGVuKHBsb3RseUluc3RhbmNlID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxvdGx5SW5zdGFuY2UgPSBwbG90bHlJbnN0YW5jZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93KCkuZ2QgPSB0aGlzLmRlYnVnID8gcGxvdGx5SW5zdGFuY2UgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRoaXMuZXZlbnROYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGBwbG90bHlfJHtuYW1lLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgICAgICAgICAgICBwbG90bHlJbnN0YW5jZS5vbihldmVudE5hbWUsIChkYXRhOiBhbnkpID0+ICh0aGlzW25hbWVdIGFzIEV2ZW50RW1pdHRlcjx2b2lkPikuZW1pdChkYXRhKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcGxvdGx5SW5zdGFuY2Uub24oJ3Bsb3RseV9jbGljaycsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrLmVtaXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbG90bHlDbGljay5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlV2luZG93UmVzaXplSGFuZGxlcigpO1xuICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgcGxvdHRpbmc6JywgZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVGaWd1cmUoKTogUGxvdGx5LkZpZ3VyZSB7XG4gICAgICAgIGNvbnN0IHA6IGFueSA9IHRoaXMucGxvdGx5SW5zdGFuY2U7XG4gICAgICAgIGNvbnN0IGZpZ3VyZTogUGxvdGx5LkZpZ3VyZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IHAuZGF0YSxcbiAgICAgICAgICAgIGxheW91dDogcC5sYXlvdXQsXG4gICAgICAgICAgICBmcmFtZXM6IHAuX3RyYW5zaXRpb25EYXRhID8gcC5fdHJhbnNpdGlvbkRhdGEuX2ZyYW1lcyA6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmlndXJlO1xuICAgIH1cblxuICAgIHVwZGF0ZVBsb3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKCF0aGlzLnBsb3RseUluc3RhbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgUGxvdGx5IGNvbXBvbmVudCB3YXNuJ3QgaW5pdGlhbGl6ZWRgKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxheW91dCA9IHsgLi4udGhpcy5sYXlvdXQgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wbG90bHkudXBkYXRlKHRoaXMucGxvdGx5SW5zdGFuY2UsIHRoaXMuZGF0YSwgbGF5b3V0LCB0aGlzLmNvbmZpZywgdGhpcy5mcmFtZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlndXJlID0gdGhpcy5jcmVhdGVGaWd1cmUoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQoZmlndXJlKTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoaWxlIHVwZGF0aW5nIHBsb3Q6JywgZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVXaW5kb3dSZXNpemVIYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy51c2VSZXNpemVIYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpemVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB0aGlzLnBsb3RseS5yZXNpemUodGhpcy5wbG90bHlJbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRXaW5kb3coKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIgYXMgYW55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXNpemVIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRXaW5kb3coKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIgYXMgYW55KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhRGlmZmVyVHJhY2tCeShfOiBudW1iZXIsIGl0ZW06IGFueSk6IHVua25vd24ge1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHVpZDogJycgfSk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH1cbn1cbiJdfQ==