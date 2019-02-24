package com.nbeerbower.vuedroid;

import androidx.appcompat.app.AppCompatActivity;
import wendu.webviewjavascriptbridge.WVJBWebView;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    private WVJBWebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.activity_main_webview);
        if (savedInstanceState == null) {
            webView.loadUrl("file:///android_asset/www/index.html");
        }
    }
}
