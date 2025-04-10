package com.jwplayer

import android.content.Context
import com.google.android.gms.cast.framework.CastOptions
import com.google.android.gms.cast.framework.OptionsProvider
import com.google.android.gms.cast.framework.SessionProvider

class CastOptionsProvider : OptionsProvider {
    
    companion object {
        /**
         * Default Google Cast Receiver ID for the Default Media Receiver.
         * This ID allows the application to send media content (videos, music, images) 
         * to a Chromecast or Android TV without any custom receiver app.
         */
        private const val DEFAULT_RECEIVER_ID = "CC1AD845" 
    }

    override fun getCastOptions(context: Context): CastOptions {
        return CastOptions.Builder()
            .setReceiverApplicationId(DEFAULT_RECEIVER_ID)
            .build()
    }

    override fun getAdditionalSessionProviders(context: Context): List<SessionProvider>? {
        return null
    }
}
