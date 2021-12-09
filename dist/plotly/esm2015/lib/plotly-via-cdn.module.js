import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyService } from './plotly.service';
import { PlotlySharedModule } from './plotly-shared.module';
import * as i0 from "@angular/core";
import * as i1 from "./plotly.service";
export class PlotlyViaCDNModule {
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
PlotlyViaCDNModule.ɵfac = function PlotlyViaCDNModule_Factory(t) { return new (t || PlotlyViaCDNModule)(i0.ɵɵinject(i1.PlotlyService)); };
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
    }], function () { return [{ type: i1.PlotlyService }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PlotlyViaCDNModule, { imports: [CommonModule, PlotlySharedModule], exports: [PlotlySharedModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdGx5LXZpYS1jZG4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcGxvdGx5L3NyYy9saWIvcGxvdGx5LXZpYS1jZG4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBWTVELE1BQU0sT0FBTyxrQkFBa0I7SUFLM0IsWUFBbUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDM0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQWU7UUFDMUMsTUFBTSxJQUFJLEdBQUcsT0FBTyxLQUFLLFFBQVEsSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsNkVBQTZFLENBQUMsQ0FBQztTQUNsRztRQUVELGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLGtCQUFrQixDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7SUFDL0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBK0I7UUFDekQsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxNQUFNLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pGLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELEtBQUssd0JBQXdCLENBQUMsQ0FBQztTQUMzRztRQUVELGtCQUFrQixDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVO1FBQ3BCLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbkMsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ2QsTUFBTSxHQUFHLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxJQUFJLElBQUk7Z0JBQy9DLENBQUMsQ0FBQyw4QkFBOEIsa0JBQWtCLENBQUMsYUFBYSxTQUFTO2dCQUN6RSxDQUFDLENBQUMsOEJBQThCLGtCQUFrQixDQUFDLFlBQVksSUFBSSxrQkFBa0IsQ0FBQyxhQUFhLFNBQVMsQ0FBQztZQUVqSCxNQUFNLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUVwRixNQUFNLElBQUksR0FBb0IsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFekIsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsOEJBQThCO1lBRWpELE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRTtnQkFDWixNQUFNLE1BQU0sR0FBSSxNQUFjLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxJQUFJLE1BQU0sRUFBRTtvQkFDUixhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNuQztxQkFBTSxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7b0JBQ3BCLE9BQU8sRUFBRyxDQUFDO29CQUNYLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLEdBQUcsWUFBWSxDQUFDLENBQUM7aUJBQzVFO1lBQ0wsQ0FBQyxDQUFDO1lBRUYsRUFBRSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUM7UUFFRixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQzs7QUE5RGMsK0JBQVksR0FBWSxJQUFJLENBQUM7QUFDN0IsZ0NBQWEsR0FBRyxRQUFRLENBQUM7QUFDMUIsb0NBQWlCLEdBQXVCLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7b0ZBSGhILGtCQUFrQjtvRUFBbEIsa0JBQWtCO3lFQUhoQixDQUFDLGFBQWEsQ0FBQyxZQURqQixDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQyxFQUVqQyxrQkFBa0I7dUZBRW5CLGtCQUFrQjtjQU45QixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQztnQkFDM0MsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUMxQixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNoQzs7d0ZBQ1ksa0JBQWtCLGNBSmpCLFlBQVksRUFBRSxrQkFBa0IsYUFFaEMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFBsb3RseVNlcnZpY2UgfSBmcm9tICcuL3Bsb3RseS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsb3RseVNoYXJlZE1vZHVsZSB9IGZyb20gJy4vcGxvdGx5LXNoYXJlZC5tb2R1bGUnO1xuXG5cbmV4cG9ydCB0eXBlIFBsb3RseUJ1bmRsZU5hbWUgPSAnYmFzaWMnIHwgJ2NhcnRlc2lhbicgfCAnZ2VvJyB8ICdnbDNkJyB8ICdnbDJkJyB8ICdtYXBib3gnIHwgJ2ZpbmFuY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQbG90bHlTaGFyZWRNb2R1bGVdLFxuICAgIHByb3ZpZGVyczogW1Bsb3RseVNlcnZpY2VdLFxuICAgIGV4cG9ydHM6IFtQbG90bHlTaGFyZWRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBQbG90bHlWaWFDRE5Nb2R1bGUge1xuICAgIHByaXZhdGUgc3RhdGljIHBsb3RseUJ1bmRsZT86IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcGxvdGx5VmVyc2lvbiA9ICdsYXRlc3QnO1xuICAgIHB1YmxpYyBzdGF0aWMgcGxvdGx5QnVuZGxlTmFtZXM6IFBsb3RseUJ1bmRsZU5hbWVbXSA9IFsnYmFzaWMnLCAnY2FydGVzaWFuJywgJ2dlbycsICdnbDNkJywgJ2dsMmQnLCAnbWFwYm94JywgJ2ZpbmFuY2UnXTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwbG90bHlTZXJ2aWNlOiBQbG90bHlTZXJ2aWNlKSB7XG4gICAgICAgIFBsb3RseVNlcnZpY2Uuc2V0TW9kdWxlTmFtZSgnVmlhQ0ROJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXRQbG90bHlWZXJzaW9uKHZlcnNpb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc09rID0gdmVyc2lvbiA9PT0gJ2xhdGVzdCcgfHwgL15cXGRcXC5cXGR7MSwyfVxcLlxcZHsxLDJ9JC8udGVzdCh2ZXJzaW9uKTtcbiAgICAgICAgaWYgKCFpc09rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcGxvdGx5IHZlcnNpb24uIFBsZWFzZSBzZXQgJ2xhdGVzdCcgb3IgdmVyc2lvbiBudW1iZXIgKGkuZS46IDEuNC4zKWApO1xuICAgICAgICB9XG5cbiAgICAgICAgUGxvdGx5VmlhQ0ROTW9kdWxlLmxvYWRWaWFDRE4oKTtcbiAgICAgICAgUGxvdGx5VmlhQ0ROTW9kdWxlLnBsb3RseVZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UGxvdGx5QnVuZGxlKGJ1bmRsZTogUGxvdGx5QnVuZGxlTmFtZSB8IG51bGwpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXNPayA9IGJ1bmRsZSA9PT0gbnVsbCB8fCBQbG90bHlWaWFDRE5Nb2R1bGUucGxvdGx5QnVuZGxlTmFtZXMuaW5kZXhPZihidW5kbGUpID49IDA7XG4gICAgICAgIGlmICghaXNPaykge1xuICAgICAgICAgICAgY29uc3QgbmFtZXMgPSBQbG90bHlWaWFDRE5Nb2R1bGUucGxvdGx5QnVuZGxlTmFtZXMubWFwKG4gPT4gYFwiJHtufVwiYCkuam9pbignLCAnKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwbG90bHkgYnVuZGxlLiBQbGVhc2Ugc2V0IHRvIG51bGwgZm9yIGZ1bGwgb3IgJHtuYW1lc30gZm9yIGEgcGFydGlhbCBidW5kbGUuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBQbG90bHlWaWFDRE5Nb2R1bGUucGxvdGx5QnVuZGxlID0gYnVuZGxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFZpYUNETigpOiB2b2lkIHtcbiAgICAgICAgUGxvdGx5U2VydmljZS5zZXRQbG90bHkoJ3dhaXRpbmcnKTtcblxuICAgICAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gUGxvdGx5VmlhQ0ROTW9kdWxlLnBsb3RseUJ1bmRsZSA9PSBudWxsXG4gICAgICAgICAgICAgICAgPyBgaHR0cHM6Ly9jZG4ucGxvdC5seS9wbG90bHktJHtQbG90bHlWaWFDRE5Nb2R1bGUucGxvdGx5VmVyc2lvbn0ubWluLmpzYFxuICAgICAgICAgICAgICAgIDogYGh0dHBzOi8vY2RuLnBsb3QubHkvcGxvdGx5LSR7UGxvdGx5VmlhQ0ROTW9kdWxlLnBsb3RseUJ1bmRsZX0tJHtQbG90bHlWaWFDRE5Nb2R1bGUucGxvdGx5VmVyc2lvbn0ubWluLmpzYDtcblxuICAgICAgICAgICAgY29uc3Qgc2NyaXB0OiBIVE1MU2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IGNvbnNvbGUuZXJyb3IoYEVycm9yIGxvYWRpbmcgcGxvdGx5LmpzIGxpYnJhcnkgZnJvbSAke3NyY31gKTtcblxuICAgICAgICAgICAgY29uc3QgaGVhZDogSFRNTEhlYWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAyMDA7IC8vIGVxdWl2YWxlbnQgb2YgMTAgc2Vjb25kcy4uLlxuXG4gICAgICAgICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbG90bHkgPSAod2luZG93IGFzIGFueSkuUGxvdGx5O1xuICAgICAgICAgICAgICAgIGlmIChwbG90bHkpIHtcbiAgICAgICAgICAgICAgICAgICAgUGxvdGx5U2VydmljZS5zZXRQbG90bHkocGxvdGx5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgLS07XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZm4sIDUwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGxvYWRpbmcgcGxvdGx5LmpzIGxpYnJhcnkgZnJvbSAke3NyY30uIFRpbWVvdXQuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzZXRUaW1lb3V0KGluaXQpO1xuICAgIH1cbn1cbiJdfQ==