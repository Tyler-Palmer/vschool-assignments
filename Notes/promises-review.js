// Javascript Promise
    // A promise can be in 1 of 3 states:
        // 1: Pending
        // 2: Resolved
        // 3: Reject

const wait = time => new Promise((resolve, reject) => setTimeout(resolve, time))
wait(3000).then(() => console.log('Hello!'))

// Promise Chaining
    // Google Geolocator API  =>  Salt Lake City
        // =>  Lat: 40.29503, lng: 85.98340
            // Request to weather app with lat, long => Dark Sky Api
                // Return weather


    // axios.get('google geolocator api')
    //     .then(response => {
    //         const { lat, lng } = response.data.location
    //         return axios.get(`darksky api ? location=${lat}-${long}`)
    //     })
    //     .then(response => {
    //         console.log(response.data.currentWeather)
    //         return axios
    //     })
    //     .then(response => {

    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
