$(function(){
    let paused = false;
    let myRange =$('#myRange');
    let stream = $('#stream');
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
        console.log(value);
        stream.prop('volume', (value/100));

    })
});

//<script> var audio = document.getElementById('stream'); audio.volume = 0.5; audio.autoplay=true; </script>