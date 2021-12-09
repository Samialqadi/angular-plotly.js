import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyService } from './plotly.service';
import { PlotlySharedModule } from './plotly-shared.module';
import * as i0 from "@angular/core";
export class PlotlyModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdGx5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3Bsb3RseS9zcmMvbGliL3Bsb3RseS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQVU1RCxNQUFNLE9BQU8sWUFBWTtJQUdyQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDakIsTUFBTSxHQUFHLEdBQUcsK0ZBQStGO2tCQUNyRyw4Q0FBOEMsQ0FBQztZQUNyRCxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVPLE9BQU87UUFDWCxPQUFPLFlBQVksQ0FBQyxRQUFRLEtBQUssU0FBUztlQUNuQyxDQUFDLE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssVUFBVTttQkFDN0MsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDOztBQWhCYSxxQkFBUSxHQUFRLEVBQUUsQ0FBQzt3RUFEeEIsWUFBWTs4REFBWixZQUFZO21FQUhWLENBQUMsYUFBYSxDQUFDLFlBRGpCLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDLEVBRWpDLGtCQUFrQjt1RkFFbkIsWUFBWTtjQU54QixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQztnQkFDM0MsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUMxQixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNoQzs7d0ZBQ1ksWUFBWSxjQUpYLFlBQVksRUFBRSxrQkFBa0IsYUFFaEMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFBsb3RseVNlcnZpY2UgfSBmcm9tICcuL3Bsb3RseS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsb3RseVNoYXJlZE1vZHVsZSB9IGZyb20gJy4vcGxvdGx5LXNoYXJlZC5tb2R1bGUnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBsb3RseVNoYXJlZE1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbUGxvdGx5U2VydmljZV0sXG4gICAgZXhwb3J0czogW1Bsb3RseVNoYXJlZE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFBsb3RseU1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBwbG90bHlqczogYW55ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgY29uc3QgbXNnID0gJ0ludmFsaWQgUGxvdGx5SlMgb2JqZWN0LiBQbGVhc2UgY2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL3Bsb3RseS9hbmd1bGFyLXBsb3RseS5qcyNxdWljay1zdGFydCdcbiAgICAgICAgICAgICAgICArICcgdG8gc2VlIGhvdyB0byBhZGQgUGxvdGx5SlMgdG8geW91ciBwcm9qZWN0Lic7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFBsb3RseVNlcnZpY2Uuc2V0UGxvdGx5KFBsb3RseU1vZHVsZS5wbG90bHlqcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gUGxvdGx5TW9kdWxlLnBsb3RseWpzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmICh0eXBlb2YgUGxvdGx5TW9kdWxlLnBsb3RseWpzLnBsb3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICB8fCB0eXBlb2YgUGxvdGx5TW9kdWxlLnBsb3RseWpzLm5ld1Bsb3QgPT09ICdmdW5jdGlvbicpO1xuICAgIH1cbn1cbiJdfQ==