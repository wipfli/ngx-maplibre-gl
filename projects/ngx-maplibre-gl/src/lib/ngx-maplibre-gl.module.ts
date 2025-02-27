import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AttributionControlDirective } from './control/attribution-control.directive';
import { ControlComponent } from './control/control.component';
import { FullscreenControlDirective } from './control/fullscreen-control.directive';
import { GeolocateControlDirective } from './control/geolocate-control.directive';
import { NavigationControlDirective } from './control/navigation-control.directive';
import { ScaleControlDirective } from './control/scale-control.directive';
import { DraggableDirective } from './draggable/draggable.directive';
import { ImageComponent } from './image/image.component';
import { LayerComponent } from './layer/layer.component';
import { MapComponent } from './map/map.component';
import { MarkerComponent } from './marker/marker.component';
import {
  ClusterPointDirective,
  PointDirective,
  MarkersForClustersComponent,
} from './markers-for-clusters/markers-for-clusters.component';
import { PopupComponent } from './popup/popup.component';
import { CanvasSourceComponent } from './source/canvas-source.component';
import { FeatureComponent } from './source/geojson/feature.component';
import { GeoJSONSourceComponent } from './source/geojson/geojson-source.component';
import { ImageSourceComponent } from './source/image-source.component';
import { RasterDemSourceComponent } from './source/raster-dem-source.component';
import { RasterSourceComponent } from './source/raster-source.component';
import { VectorSourceComponent } from './source/vector-source.component';
import { VideoSourceComponent } from './source/video-source.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MapComponent,
    LayerComponent,
    DraggableDirective,
    ImageComponent,
    VectorSourceComponent,
    GeoJSONSourceComponent,
    RasterDemSourceComponent,
    RasterSourceComponent,
    ImageSourceComponent,
    VideoSourceComponent,
    CanvasSourceComponent,
    FeatureComponent,
    MarkerComponent,
    PopupComponent,
    ControlComponent,
    FullscreenControlDirective,
    NavigationControlDirective,
    GeolocateControlDirective,
    AttributionControlDirective,
    ScaleControlDirective,
    PointDirective,
    ClusterPointDirective,
    MarkersForClustersComponent,
  ],
  exports: [
    MapComponent,
    LayerComponent,
    DraggableDirective,
    ImageComponent,
    VectorSourceComponent,
    GeoJSONSourceComponent,
    RasterDemSourceComponent,
    RasterSourceComponent,
    ImageSourceComponent,
    VideoSourceComponent,
    CanvasSourceComponent,
    FeatureComponent,
    MarkerComponent,
    PopupComponent,
    ControlComponent,
    FullscreenControlDirective,
    NavigationControlDirective,
    GeolocateControlDirective,
    AttributionControlDirective,
    ScaleControlDirective,
    PointDirective,
    ClusterPointDirective,
    MarkersForClustersComponent,
  ],
})
export class NgxMapLibreGLModule {}
