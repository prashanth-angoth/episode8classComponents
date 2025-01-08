there are two stages in react life cycle
1. render cycle and 
2. commit cycle
to understand this please reffer to react life cycle diagram 
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

In CBC whenever a component loads, initially as  per the react lifecycle methods diagram,
when the component loads/mounts, firstly constructor gets called and then with dummy data in state variable it gets loaded to the DOM.
Once it is loaaded with dummy data after constructor gets called, render method will get called. now the component will be mounted with dummydata for few milli seconds.
after that component didMount gets called and we write API calls in it. and that will update the state variable with the real time data. anf then componentDidUpdate life cycle get called

componentWIllUnmount life cycle method gets called once the user moves from one compoent to another component.