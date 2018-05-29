const district = {
    district: 5
}

const statements = {
    Taxes: "We will need to raise taxes.",
    Jobs: "We will create new jobs.",
    Infrastructure: "We will repair and create ",
    Healthcare: "We will address Healthcare issues",
    Crime: "We will hir more police",
}
const donationForm = {
    url: "www.donate.com",
}

const calendar = {
    events: "Here are calendar events.",
}

const volunteers = {
    name: "Joe Smith",
    address: "255 Apple Ave.",
    phoneNumber: "555-833-1222",
    availability: "Monday through Wednesday",
    activities: " Answer phones",
}
const bio = {
    aboutMe: "I am from bla bla. I did this and I did that.",
}
const imageGallery = {
    headShot: "",
    pictureOfFamily: "",
    picturOfConstituents: "",
}

const missionStatement = {
    myStatement: "",
}
const registerToVote = {
    url: "",
}

// Creating the Function

function changeActivities(NewActivities) {
    volunteers.activities = NewActivities;


}
console.log(volunteers.activities);
changeActivities("Cold calling")
console.log(volunteers)
console.log(volunteers.activities);