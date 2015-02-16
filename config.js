var config = {
        plugins: [
          //  "video-png"     // Display the video feed as static pngs (work in every browser)
          , "video-stream"  // Display the video as a native h264 stream decoded in JS 
          , "hud"           // Display the artificial horizon, altimeter, compass, etc.
          , "battery"       // Display a simple battery widget in the header bar
          , "pilot"
          , "blackbox"      
        //, "replay"        
        ],

        // Config for pilot plugin
        keyboard: 'qwerty',

        // Config for blackbox plugin. Path is an existing folder where to store mission data
        // Each new mission will have its own timestamped folder.
        blackbox: {
            path: "/Users/Vasuimports/Desktop/PennApps/Drone\ Video" 

        },

        // Config for replay plugin. Path points to a specific mission folder to be replayed.
        replay: {
            path: "/tmp/2013-06-03_09-10-33/"
        }
};

module.exports = config;