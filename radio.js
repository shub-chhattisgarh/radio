$(function(){
    let paused = false;
    let myRange =$('#myRange');
    let stream = $('#stream');
    stream.trigger('play');
    stream.prop('volume', 0.5);
    $('#playpausebutton').on('click', function(){
        if(paused == false){
            stream.trigger('pause');
            paused = true;
        } else{
            stream.trigger('play');
            paused = false;
        }
    })  

    myRange.on('change', function(){
        
        let value = myRange.val();
        stream.prop('volume', (value/100));

    })
});

//<script> var audio = document.getElementById('stream'); audio.volume = 0.5; audio.autoplay=true; </script>