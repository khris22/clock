const secondHand = document.querySelector('.second-hand')
        const hourHand = document.querySelector('.hour-hand')
        const minutesHand = document.querySelector('.min-hand')

        function setDate() {
       
            // date today
            const now = new Date();
            // get the seconds
            const seconds = now.getSeconds();
            // turn seconds into degrees to move the clock hands
            // add 90 degrees to offset the css default
            const secondsDegrees = ((seconds / 60) * 360) + 90;
            // move the secondHand accdg to the degrees
            // manipulate the css
            secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

            const minutes = now.getMinutes();
            // to set the minutes hand right:
            const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
            // const minutesDegrees = ((minutes / 60) * 360) + 90;
            minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

            const hour = now.getHours();
            const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
            // const hourDegrees = ((hour / 12) * 360) + 90;
            hourHand.style.transform = `rotate(${hourDegrees}deg)`

            // temporarily take off the transition
            // then reapply to avoid going backwardss
            // if(secondsDegrees === 90) {
            //     secondHand.style.transition = 'all 0s';
            // }else{
            //     secondHand.style.transition = 'all 5s'
            // }
            // if(minutesDegrees === 90) {
            //     minutesHand.style.transition = 'all 0s';
            // }else{
            //     minutesHand.style.transition = 'all 5s'
            // }
        }

    // run every second/any amount of time
    setInterval(setDate, 1000);
    setDate();