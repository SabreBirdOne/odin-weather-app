import { fetchJSONFromVC } from "./fetchers";

const API_KEY = 'NY4Q722PUHG3SGC5NJMSH7LNN';

fetchJSONFromVC(API_KEY, 'London')
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log(error);
    })