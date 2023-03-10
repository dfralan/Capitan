/*!
  *  v1.0.0 (https://github.com/dfralan/capitan)
  * Copyright 2021-2022 Capitan Authors.
  * Licensed under GNU GENERAL PUBLIC LICENSE (https://github.com/dfralan/capitan/blob/main/LICENSE)
  */

function capitan(){

    //Reactive brain
    const reactiveFunction = () => {
        const observable = {
          subscribers: [],
          subscribe: function(subscriber) {
            this.subscribers.push(subscriber);
          },
          next: function(value) {
            this.subscribers.forEach(subscriber => subscriber(value));
          }
        };
      
        const subscription = {
          unsubscribe: function() {
            const index = observable.subscribers.indexOf(subscriber);
            observable.subscribers.splice(index, 1);
          }
        };
      
        const input = document.getElementById("input");
        const subscriber = (val) => (landTag.innerHTML = val);
      
        observable.subscribe(subscriber);
      
        input.addEventListener("input", (event) => {
            observable.next(event.target.value);
        });
    };


    //Land element where index will show, used to save frames on local storage
    const landTag = document.getElementsByTagName("land")[0]
      
    reactiveFunction();

}

//On load execute main function
window.onload = function() {
        capitan();
};
