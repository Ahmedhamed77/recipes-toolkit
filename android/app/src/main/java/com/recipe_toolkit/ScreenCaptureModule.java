package com.recipe_toolkit;

import android.app.Activity;
import android.util.Log;
import android.view.WindowManager;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class ScreenCaptureModule extends ReactContextBaseJavaModule {
    ScreenCaptureModule(ReactApplicationContext context) {
        super(context);
    }


    @Override
    public String getName() {
        return "ScreenCaptureModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }


    @ReactMethod
    public void preventScreenCapture() {
        final Activity activity = getCurrentActivity();
        try{

            if (activity != null) {
                activity.runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
                    }
                });
            }

        }catch (Exception e){}

    }
    @ReactMethod
    public void allowScreenCapture() {
        final Activity activity = getCurrentActivity();

        try {
            if (activity != null) {
                activity.runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
                    }
                });
            }
        }catch (Exception e){

        }
    }

}