async function fetchJSONFromVC(APIKey, city){
    try {
        let requestString = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
        requestString += `${city}?`;
        requestString += `key=${APIKey}`;

        const response = await fetch(requestString);
        const json = await response.json();
        return json;
    }
    catch (error){
        console.log(error);
        throw new Error(error);
    }
}

export {
    fetchJSONFromVC
}