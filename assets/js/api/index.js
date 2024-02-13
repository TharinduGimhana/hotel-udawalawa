
const baseUrl = "http://localhost:1337"

//load home data
document.addEventListener('DOMContentLoaded', function () {
    // API endpoint URL
    const apiUrlhome = baseUrl + '/api/homes?populate=logomain&populate=backgroundimages&populate=logosecond&populate=signature&populate=circleText&populate=about';
    const apiUrlServices = baseUrl + '/api/services';
    const apiUrlGallery = baseUrl + '/api/Galleries?populate=image';

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

    //gallery
    fetch(apiUrlGallery)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the API response data
            console.log('API Response Gallery:', data.data);
            updateHtmlGalerry(data);
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

    //gallery section
    const subTitleGal = document.getElementById('subTitleGal');
    subTitleGal.textContent = data.data[0].attributes.subTitleGal;

    const secTitleGal = document.getElementById('secTitleGal');
    secTitleGal.textContent = data.data[0].attributes.secTitleGal;

    const roomCatOne = document.getElementById('roomCatOne');
    roomCatOne.textContent = data.data[0].attributes.roomCatOne;

    const roomCatTwo = document.getElementById('roomCatTwo');
    roomCatTwo.textContent = data.data[0].attributes.roomCatTwo;

    const roomCatThree = document.getElementById('roomCatThree');
    roomCatThree.textContent = data.data[0].attributes.roomCatThree;

    const roomCatFour = document.getElementById('roomCatFour');
    roomCatFour.textContent = data.data[0].attributes.roomCatFour;


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

//gallery
function updateHtmlGalerry(data) {
    
    const galleryOne = document.getElementById('galleryOne');
    galleryOne.src = baseUrl + data.data[0].attributes.image.data.attributes.url;

    const galleryOneTtile = document.getElementById('galleryOneTtile');
    galleryOneTtile.textContent = data.data[0].attributes.title;

    const galleryOneText = document.getElementById('galleryOneText');
    galleryOneText.textContent = data.data[0].attributes.text;

    // const galleryOneRate = document.getElementById('galleryOneRate');
    // galleryOneRate.textContent = data.data[0].attributes.rating;


    const galleryTwo = document.getElementById('galleryTwo');
    galleryTwo.src = baseUrl + data.data[1].attributes.image.data.attributes.url;

    const galleryTwoTtile = document.getElementById('galleryTwoTtile');
    galleryTwoTtile.textContent = data.data[1].attributes.title;

    const galleryTwoText = document.getElementById('galleryTwoText');
    galleryTwoText.textContent = data.data[1].attributes.text;

    // const galleryTwoRate = document.getElementById('galleryTwoRate');
    // galleryTwoRate.textContent = data.data[1].attributes.rating;


    const galleryThree = document.getElementById('galleryThree');
    galleryThree.src = baseUrl + data.data[2].attributes.image.data.attributes.url;

    const galleryThreeTtile = document.getElementById('galleryThreeTtile');
    galleryThreeTtile.textContent = data.data[2].attributes.title;

    const galleryThreeText = document.getElementById('galleryThreeText');
    galleryThreeText.textContent = data.data[2].attributes.text;

    // const galleryTwoRate = document.getElementById('galleryTwoRate');
    // galleryTwoRate.textContent = data.data[1].attributes.rating;


    const galleryFour = document.getElementById('galleryFour');
    galleryFour.src = baseUrl + data.data[3].attributes.image.data.attributes.url;

    const galleryFourTtile = document.getElementById('galleryFourTtile');
    galleryFourTtile.textContent = data.data[3].attributes.title;

    const galleryFourText = document.getElementById('galleryFourText');
    galleryFourText.textContent = data.data[3].attributes.text;

    // const galleryTwoRate = document.getElementById('galleryTwoRate');
    // galleryTwoRate.textContent = data.data[1].attributes.rating;


    const galleryFive = document.getElementById('galleryFive');
    galleryFive.src = baseUrl + data.data[4].attributes.image.data.attributes.url;

    const galleryFiveTtile = document.getElementById('galleryFiveTtile');
    galleryFiveTtile.textContent = data.data[4].attributes.title;

    const galleryFiveText = document.getElementById('galleryFiveText');
    galleryFiveText.textContent = data.data[4].attributes.text;

    // const galleryTwoRate = document.getElementById('galleryTwoRate');
    // galleryTwoRate.textContent = data.data[1].attributes.rating;

}