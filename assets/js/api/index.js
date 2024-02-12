
const baseUrl = "http://localhost:1337"

//load home data
document.addEventListener('DOMContentLoaded', function () {
    // API endpoint URL
    const apiUrlhome = baseUrl + '/api/homes?populate=logomain&populate=backgroundimages&populate=logosecond&populate=signature&populate=circleText&populate=about';
    const apiUrlServices = baseUrl + '/api/services?';

    // Make the API call using fetch
    //home
    fetch(apiUrlhome)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the API response data
            console.log('API Response Home:', data.data[0].attributes);
            updateHtmlhome(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
        });

    //services
    fetch(apiUrlServices)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the API response data
            console.log('API Response Service:', data.data);
            updateHtmlService(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
        });
});

// Home
function updateHtmlhome(data) {
    // logo light
    const logomain = document.getElementById('logomain');
    logomain.src = baseUrl + data.data[0].attributes.logomain.data.attributes.url;

    //logo dark
    const logosecond = document.getElementById('logosecond');
    logosecond.src = baseUrl + data.data[0].attributes.logosecond.data.attributes.url;

    //backgrung images
    // const bannerone = document.getElementById('bannerone');
    // bannerone.style.backgroundImage = `url(${baseUrl + data.data[0].attributes.backgroundimages.data[0].attributes.url})`; 

    // const bannertwo = document.getElementById('bannertwo');
    // bannertwo.style.backgroundImage = `url(${baseUrl + data.data[0].attributes.backgroundimages.data[1].attributes.url})`;

    //banner texts
    // const subtitleBannerOne = document.getElementById('subtitleBannerOne');
    // subtitleBannerOne.textContent  = data.data[0].attributes.subtitleBannerOne;

    // const titleBannerOne = document.getElementById('titleBannerOne');
    // titleBannerOne.textContent  = data.data[0].attributes.titleBannerOne;

    // const textBannerOne = document.getElementById('textBannerOne');
    // textBannerOne.textContent  = data.data[0].attributes.textBannerOne;

    //start rate 
    const starRate = document.getElementById('starRate');
    starRate.textContent = data.data[0].attributes.starRate;


    //history
    const topicHistory = document.getElementById('topicHistory');
    topicHistory.textContent = data.data[0].attributes.topicHistory;

    const subTopicHistory = document.getElementById('subTopicHistory');
    subTopicHistory.textContent = data.data[0].attributes.subTopicHistory;

    const contentHistory = document.getElementById('contentHistory');
    contentHistory.textContent = data.data[0].attributes.contentHistory;

    const signature = document.getElementById('signature');
    signature.src = baseUrl + data.data[0].attributes.signature.data.attributes.url;

    const about = document.getElementById('about');
    about.src = baseUrl + data.data[0].attributes.about.data.attributes.url;

    const circleText = document.getElementById('circleText');
    circleText.src = baseUrl + data.data[0].attributes.circleText.data.attributes.url;

    const endTextHistory = document.getElementById('endTextHistory');
    endTextHistory.textContent = data.data[0].attributes.endTextHistory;

}

//services
function updateHtmlService(data) {
     //Res
     const MainTopicRes = document.getElementById('MainTopicRes');
     MainTopicRes.textContent = data.data[0].attributes.MainTopic;

     const ShortDescriptionRes = document.getElementById('ShortDescriptionRes');
     ShortDescriptionRes.textContent = data.data[0].attributes.ShortDescription;

     //Tra
     const MainTopicTra = document.getElementById('MainTopicTra');
     MainTopicTra.textContent = data.data[1].attributes.MainTopic;

     const ShortDescriptionTra = document.getElementById('ShortDescriptionTra');
     ShortDescriptionTra.textContent = data.data[1].attributes.ShortDescription;

     //Pre
     const MainTopicPre = document.getElementById('MainTopicPre');
     MainTopicPre.textContent = data.data[2].attributes.MainTopic;

     const ShortDescriptionPre = document.getElementById('ShortDescriptionPre');
     ShortDescriptionPre.textContent = data.data[2].attributes.ShortDescription;

}