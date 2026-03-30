import { fetchJSONFromVC } from "./fetchers";
import API_KEY from "./APIKey";

fetchJSONFromVC(API_KEY, 'London')
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log(error);
    })