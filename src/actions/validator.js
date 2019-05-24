
export function callTrustIndex(payload) {
    console.log('Vinay--> innside the validation actions-->', payload);
    return (dispatch, getState) => {

        const state = getState();
        const { app } = state;

      // eslint-disable-next-line no-console
      console.log('Vinay--> state is ', state);
    //     // var category = this.props.category;

      dispatch(requestTrustIndex());


    //     let query = { category: category };
    //       //Load spinner
    //     let url = `http://3.209.192.10:6066/address/validate?isDomestic=true&address2=apt 204c&city=ann arbor&zip=48105`;

    //     // http://3.209.192.10:6066/address/validate?isDomestic=true&address2=apt 204c&city=ann arbor&zip=48105
        
    //     return fetch(url, {
    //         method: 'GET',
    //         query: query,
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => {
    //         //res.ok - The ok read-only property of the Response interface contains a boolean
    //         // stating whether the response was successful. (status in the range 200-299) or not.
    //         console.log('Vinay--> callTrustIndex--> res-->',res);

    //         return (res.ok ? res.json() : Promise.reject(res.json()));
    //     })
    //     .then(() => {
    //         // let newPreference = _.extend({}, payload[preference], {status: Status.SUCCESS})
    //         // let data = _.extend({}, payload, {[preference]: newPreference});
    //         dispatch(updateTrustIndex(category, data));
    //         //Clear status message.
    //         // setTimeout(()=> {
    //         //     dispatch(clearStatus(preference));
    //         // }, 3000);
    //     }, errorPromise => {
    //         return errorPromise.then( error => {
    //             dispatch(updatePreferenceStatus(category, preference, error));
    //             //Clear status message.
    //             setTimeout(()=> {
    //                 dispatch(clearStatus(preference));
    //             }, 3000);
    //         });
    //     }
    //   );
    };
}
