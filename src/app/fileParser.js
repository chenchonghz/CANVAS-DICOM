angular.module('fileParser', [])

.factory('fileParser', [function(){
    return {
        LUT: function createLUT(windowWidth, windoiwCenter, bitsAllocated){
            var winMin = (windoiwCenter - windowWidth * .5);
            var winMax = (windoiwCenter + windowWidth * .5);
            
            /**
              * minWindowValue = windowLevel - (windowWidth / 2)
              * jpegValue = 255 * (dicomValue - minWindowValue) / windowWidth
              * 
              **/
            var grayScaleFactor = 255/parseFloat(winMax - winMin);                
            var table = [];
            
            for(var i = 0,ii = Math.pow(2, bitsAllocated); i < ii; i++){
                //TODO CR
                if(i < winMin){
                    table[i] = 0;
                }else if(i > winMax){
                    table[i] = 255;
                }else {
                    table[i] = Math.round((i - winMin) * grayScaleFactor);
                }
            }
            return table;
        }
    }
}]);


function FileParser(){
    this.files = [];
}

FileParser.prototype.parseFiles = function(rawFile, callback){
    angular.forEach(rawFiles, function(file){
        var imageFile = new ImageFile(file, headers);
    })
}

