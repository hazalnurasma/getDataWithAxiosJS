import axios from 'axios';

async function getData(number) {
    const {data : user} = await axios ("https://jsonplaceholder.typicode.com/users/1");
    const {data : post} = await axios ("https://jsonplaceholder.typicode.com/posts?userId=1");

    console.log("USER YAZDIRILDI", user );
    console.log("POST YAZDIRILDI", post );
};

getData(2);

export {getData}