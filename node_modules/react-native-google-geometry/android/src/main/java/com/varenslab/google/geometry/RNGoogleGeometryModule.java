
package com.varenslab.google.geometry;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import com.google.maps.android.PolyUtil;
import com.google.android.gms.maps.model.LatLng;
import java.util.List;
import java.util.ArrayList;

public class RNGoogleGeometryModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNGoogleGeometryModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNGoogleGeometry";
  }

      @ReactMethod
    public void containsLocation(
        ReadableMap point,
        ReadableArray polygon,
        Callback completionCallback) {

      LatLng locationPoint = new LatLng(
          point.getDouble("lat"),
          point.getDouble("lng")
      );

      List<LatLng> polygonList = new ArrayList<>();

      for (int i = 0; i < polygon.size(); i++) {
        ReadableMap vertex = polygon.getMap(i);
        polygonList.add(
            new LatLng(
              vertex.getDouble("lat"),
              vertex.getDouble("lng")
            )
        );
      }

      boolean isWithinCoverage = PolyUtil.containsLocation(locationPoint, polygonList, false);

      completionCallback.invoke(isWithinCoverage);
    }
}