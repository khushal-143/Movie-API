const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;
  app.use(cors());
app.use(express.json());

 const movies = [
{
    "Title": "Dil Bechara",
    "Year": "2020",
    "Rated": "Not Rated",
    "Released": "24 Jul 2020",
    "Runtime": "101 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Mukesh Chhabra",
    "Writer": "Shashank Khaitan, Suprotim Sengupta, Scott Neustadter",
    "Actors": "Sushant Singh Rajput, Sanjana Sanghi, Sahil Vaid",
    "Plot": "The emotional journey of two hopelessly-in-love youngsters; a young girl, Kizie, who is suffering from cancer; and Manny, a boy Kizie meets at a support group.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "9 wins & 13 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2U2ZWY0MjktM2RmNy00ZTc3LTg0MGMtZGJiNjAxYTkxOTZkXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "88%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.3",
    "imdbVotes": "137,372",
    "imdbID": "tt8110330",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Dil Chahta Hai",
    "Year": "2001",
    "Rated": "Not Rated",
    "Released": "10 Aug 2001",
    "Runtime": "183 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Farhan Akhtar",
    "Writer": "Kassim Jagmagia, Farhan Akhtar, Karan Vishwanath Kashyap",
    "Actors": "Aamir Khan, Saif Ali Khan, Akshaye Khanna",
    "Plot": "Three inseparable childhood friends are just out of college. Nothing comes between them - until they each fall in love, and their wildly different approaches to relationships creates tension.",
    "Language": "Hindi, English",
    "Country": "India",
    "Awards": "28 wins & 40 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjY4NzgzNTQtZDhiNi00ZGJiLWIzMWQtNDg3YzkyNTdkZjAyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "100%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.1",
    "imdbVotes": "76,921",
    "imdbID": "tt0292490",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Dil Se..",
    "Year": "1998",
    "Rated": "Not Rated",
    "Released": "21 Aug 1998",
    "Runtime": "163 min",
    "Genre": "Drama, Romance",
    "Director": "Mani Ratnam",
    "Writer": "Mani Ratnam, Sujatha, Tigmanshu Dhulia",
    "Actors": "Shah Rukh Khan, Manisha Koirala, Preity G Zinta",
    "Plot": "A radio broadcaster's intense attraction to a mysterious woman opens the door to a tidal wave of powerful emotions and desires.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "12 wins & 4 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGU3NGY5ZWUtMWQxOS00ZTMzLWJjNTEtMjkyZDVlY2E4OGZmXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "60%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.5",
    "imdbVotes": "32,231",
    "imdbID": "tt0164538",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Ae Dil Hai Mushkil",
    "Year": "2016",
    "Rated": "Not Rated",
    "Released": "28 Oct 2016",
    "Runtime": "158 min",
    "Genre": "Drama, Music, Musical",
    "Director": "Karan Johar",
    "Writer": "Karan Johar, Niranjan Iyengar",
    "Actors": "Ranbir Kapoor, Aishwarya Rai Bachchan, Anushka Sharma",
    "Plot": "A story about unrequited love - the shapes it takes, the ways it changes us and the exhilarating and often heartbreaking ride it takes us on. It is the journey of three characters, Ayan, Alizeh and Saba, as their lives intertwine ...",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "25 wins & 41 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTMwMjExMjMtZjIyYi00NzM4LWE4YWItN2FhMDMyZTRhMDQ0XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "53%"
        },
        {
            "Source": "Metacritic",
            "Value": "40/100"
        }
    ],
    "Metascore": "40",
    "imdbRating": "5.8",
    "imdbVotes": "26,873",
    "imdbID": "tt4559006",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$4,264,983",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Dil To Pagal Hai",
    "Year": "1997",
    "Rated": "Not Rated",
    "Released": "30 Oct 1997",
    "Runtime": "180 min",
    "Genre": "Comedy, Drama, Musical",
    "Director": "Yash Chopra",
    "Writer": "Tanuja Chandra, Aditya Chopra, Pamela Chopra",
    "Actors": "Shah Rukh Khan, Madhuri Dixit, Karisma Kapoor",
    "Plot": "A grand musical about three passionate and dreamy characters: Rahul, Pooja and Nisha. Will their dreams come true? Will they find their true love?",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "18 wins & 7 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjU1ZGI1MDctN2IzZi00ZDU3LTk5MTEtYTRkMTU3ZDI0ZTE4XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "82%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.0",
    "imdbVotes": "26,499",
    "imdbID": "tt0118983",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "Yash Raj Films",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Dil Dhadakne Do",
    "Year": "2015",
    "Rated": "Not Rated",
    "Released": "05 Jun 2015",
    "Runtime": "170 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Zoya Akhtar",
    "Writer": "Zoya Akhtar, Reema Kagti, Javed Akhtar",
    "Actors": "Anil Kapoor, Shefali Shah, Priyanka Chopra Jonas",
    "Plot": "The Mehra family must contemplate over their way of living and their love lives while on a cruise celebrating their 30th wedding anniversary.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "10 wins & 31 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmExOTlmNDAtYWMzZC00NzEyLWFhYmYtNTgwMjZiMDRhMDQyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "68%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.0",
    "imdbVotes": "20,475",
    "imdbID": "tt4110568",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$3,066,100",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Rehnaa Hai Terre Dil Mein",
    "Year": "2001",
    "Rated": "Not Rated",
    "Released": "19 Oct 2001",
    "Runtime": "160 min",
    "Genre": "Comedy, Drama, Musical",
    "Director": "Gautham Vasudev Menon",
    "Writer": "Gautham Vasudev Menon, Vipul D. Shah",
    "Actors": "Madhavan, Dia Mirza, Saif Ali Khan",
    "Plot": "Maddy impersonates Rajeev, the person his love interest, Reena, is about to marry and attempts to woo her. However, he is unprepared for the moment when the truth will be revealed.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 win & 7 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGRhODRiZTctYzVhNS00ZWJmLThmZWYtMTEwYWI3MWU0ZWVlXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.5/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.5",
    "imdbVotes": "9,764",
    "imdbID": "tt0299108",
    "Type": "movie",
    "DVD": "06 Mar 2007",  
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
"Title": "Phir Bhi Dil Hai Hindustani",
"Year": "2000",
"Rated": "Not Rated",
"Released": "21 Jan 2000",
"Runtime": "160 min",
"Genre": "Comedy, Drama, Musical",
"Director": "Aziz Mirza",
"Writer": "Sanjay Chhel, Raaj Kumar Dahima, Manoj Lalwani",
"Actors": "Shah Rukh Khan, Juhi Chawla, Johny Lever",
"Plot": "In order to seek justice for a man who exacts vengeance on a politician, who was responsible for his daughter's death, two rival reporters teams up to help him to prove his innocence.",
"Language": "Hindi",
"Country": "India",
"Awards": "1 win & 5 nominations",
"Poster": "https://m.media-amazon.com/images/M/MV5BNTQ1YzAxZjgtNjAyNy00MmZhLThjMjItNTFkNzhlNjBiMDFjXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
    "Source": "Internet Movie Database",
    "Value": "6.1/10"
}
],
"Metascore": "N/A",
"imdbRating": "6.1",
"imdbVotes": "8,841",
"imdbID": "tt0222270",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$588,606",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Dil",
"Year": "1990",
"Rated": "Not Rated",
"Released": "22 Jun 1990",
"Runtime": "172 min",
"Genre": "Comedy, Drama, Romance",
"Director": "Indra Kumar",
"Writer": "Rajeev Kaul, Naushir Khatau, Kamlesh Pandey",
"Actors": "Aamir Khan, Madhuri Dixit, Saeed Jaffrey",
"Plot": "A man pretends to be a rich industrialist to improve his son's chances of marrying in to wealth, but his plan backfires on him.",
"Language": "Hindi",
"Country": "India",
"Awards": "1 win & 6 nominations",
"Poster": "https://m.media-amazon.com/images/M/MV5BNWM5YTM1MDItMmViYy00NDliLWEwYWQtYTVjOGY3ODllZjEzXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
    "Source": "Internet Movie Database",
    "Value": "6.6/10"
}
],
"Metascore": "N/A",
"imdbRating": "6.6",
"imdbVotes": "5,805",
"imdbID": "tt0099429",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Har Dil Jo Pyar Karega...",
"Year": "2000",
"Rated": "N/A",
"Released": "04 Aug 2000",
"Runtime": "173 min",
"Genre": "Comedy, Drama, Musical",
"Director": "Raj Kanwar",
"Writer": "Rumi Jaffery",
"Actors": "Salman Khan, Preity G Zinta, Rani Mukerji",
"Plot": "Raj is a struggling singer with big dreams who is still waiting for his big break. One night he witnesses an accident where a car spins out of control and lands on the tracks of an on-coming train. Raj runs over to the wreckage an...",
"Language": "Hindi",
"Country": "India",
"Awards": "2 wins & 5 nominations",
"Poster": "https://m.media-amazon.com/images/M/MV5BOWI3M2RmMTktMjFiYi00MWZmLTgzYTYtZDdmZjUxYmI1ZTI0XkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
    "Source": "Internet Movie Database",
    "Value": "5.1/10"
}
],
"Metascore": "N/A",
"imdbRating": "5.1",
"imdbVotes": "4,939",
"imdbID": "tt0250415",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$406,235",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Sholay",
"Year": "1977",
"Rated": "N/A",
"Released": "N/A",
"Runtime": "N/A",
"Genre": "N/A",
"Director": "S.A. Saeedi",
"Writer": "N/A",
"Actors": "Amaan, Jamal Baber, Talat Iqbal",
"Plot": "N/A",
"Language": "Pashtu",
"Country": "Pakistan",
"Awards": "N/A",
"Poster": "N/A",
"Ratings": [
{
    "Source": "Internet Movie Database",
    "Value": "4.6/10"
}
],
"Metascore": "N/A",
"imdbRating": "4.6",
"imdbVotes": "14",
"imdbID": "tt0400818",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "The Sholay Girl",
"Year": "2019",
"Rated": "N/A",
"Released": "08 Mar 2019",
"Runtime": "106 min",
"Genre": "Action, Biography, Drama",
"Director": "Aditya Sarpotdar",
"Writer": "Faizal Akhtar, Shrabani Deodhar, Sambhav Khetarpal",
"Actors": "Bidita Bag, Chandan Roy Sanyal, Vineet Raina",
"Plot": "The journey of Indian film industry's first stunt woman Reshma Pathan, it will trace the life of Reshma and her stint in movies as a body double for various actresses. Bidita Bag plays the lead role of feisty stunt-woman.",
"Language": "Hindi, Marathi, English",
"Country": "India",
"Awards": "1 nomination",
"Poster": "https://m.media-amazon.com/images/M/MV5BNzNmYzcyODYtOWFhYi00NmFmLTgzYzgtODE0ZWRmMmIzNzViXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
    "Source": "Internet Movie Database",
    "Value": "7.2/10"
}
],
"Metascore": "N/A",
"imdbRating": "7.2",
"imdbVotes": "120",
"imdbID": "tt10011102",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Sholay: The Final Cut",
"Year": "2025",
"Rated": "N/A",
"Released": "12 Dec 2025",
"Runtime": "209 min",
"Genre": "Action, Adventure, Drama",
"Director": "Ramesh Sippy",
"Writer": "N/A",
"Actors": "Dharmendra, Sanjeev Kumar, Amitabh Bachchan",
"Plot": "Sholay, India's greatest film, returns in 4K with Dolby 5.1. This 1975 multi-genre masterpiece ran for 5 years straight, featuring top stars and inspired by global classics. First Hindi film in 70mm with stereo sound.",
"Language": "Hindi",
"Country": "N/A",
"Awards": "N/A",
"Poster": "https://m.media-amazon.com/images/M/MV5BMmRkN2I4MGUtYjAwMC00NjNjLWIxNWItYTMzZWViNDc0NDVhXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
    "Source": "Internet Movie Database",
    "Value": "9.0/10"
}
],
"Metascore": "N/A",
"imdbRating": "9.0",
"imdbVotes": "105",
"imdbID": "tt39151096",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
    "Title": "Ramgarh Ke Sholay",
    "Year": "1991",
    "Rated": "Not Rated",
    "Released": "21 Jun 1991",
    "Runtime": "123 min",
    "Genre": "Action, Comedy, Crime",
    "Director": "Ajit Dewani",
    "Writer": "Ajit Dewani, Miraq Mirza",
    "Actors": "Kishore Bhanushali, Dinesh Hingoo, Amjad Khan",
    "Plot": "Two imposters of well-known actors turn up to save the village from the terror of the local ruffian, Gabbar! But will they succeed?",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwZjdhZTgtNzI3Mi00YzkwLWE4ZGEtMTExMmQyOGFkZGJhXkEyXkFqcGdeQXVyMjkwMzIxNTY@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.8/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.8",
    "imdbVotes": "79",
    "imdbID": "tt0271138",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
"Title": "Duplicate Sholay",
"Year": "2002",
"Rated": "N/A",
"Released": "N/A",
"Runtime": "147 min",
"Genre": "Comedy",
"Director": "Kanti Shah",
"Writer": "Bashir Babar",
"Actors": "Sapna Sappu, Amit Pachori, Dimple",
"Plot": "When Thakur Baldev Singh gets blinded by notorious bandit Gabbar Singh, he seeks the assistance of two former convicts, Jay and Veeru, to bring Gabbar before him so that he can mete out justice in his own way. This was the plot of...",
"Language": "Hindi",
"Country": "India",
"Awards": "N/A",
"Poster": "https://m.media-amazon.com/images/M/MV5BMGMzMTQ1ZmMtNmUyYi00MTZjLTg4YWQtOWE3MTE2YWI4OWMxXkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.3/10"
}
],
"Metascore": "N/A",
"imdbRating": "6.3",
"imdbVotes": "78",
"imdbID": "tt0391099",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "The Incredible Hulk",
"Year": "2008",
"Rated": "PG-13",
"Released": "13 Jun 2008",
"Runtime": "112 min",
"Genre": "Action, Adventure, Sci-Fi",
"Director": "Louis Leterrier",
"Writer": "Zak Penn, Stan Lee, Jack Kirby",
"Actors": "Edward Norton, Liv Tyler, Tim Roth",
"Plot": "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
"Language": "English, Portuguese, Spanish",
"Country": "United States, Canada, Japan",
"Awards": "2 wins & 10 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.6/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "68%"
},
{
"Source": "Metacritic",
"Value": "61/100"
}
],
"Metascore": "61",
"imdbRating": "6.6",
"imdbVotes": "560,301",
"imdbID": "tt0800080",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$134,806,913",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Hulk",
"Year": "2003",
"Rated": "PG-13",
"Released": "20 Jun 2003",
"Runtime": "138 min",
"Genre": "Action, Sci-Fi",
"Director": "Ang Lee",
"Writer": "Stan Lee, Jack Kirby, James Schamus",
"Actors": "Eric Bana, Jennifer Connelly, Sam Elliott",
"Plot": "Bruce Banner, a genetics researcher with a tragic past, suffers a lab accident that makes him transform into a raging, giant green monster when angered, making him a target of forces seeking to abuse his power.",
"Language": "English, Spanish",
"Country": "United States",
"Awards": "3 wins & 15 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNTQxMmVlMTItMGFjYi00MTc2LWE5MzMtYjFhZWJmZGY0MTY5XkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "5.7/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "63%"
},
{
"Source": "Metacritic",
"Value": "54/100"
}
],
"Metascore": "54",
"imdbRating": "5.7",
"imdbVotes": "290,412",
"imdbID": "tt0286716",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$132,177,234",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "She-Hulk: Attorney at Law",
"Year": "2022",
"Rated": "TV-14",
"Released": "18 Aug 2022",
"Runtime": "N/A",
"Genre": "Action, Adventure, Comedy",
"Director": "N/A",
"Writer": "Jessica Gao",
"Actors": "Tatiana Maslany, Ginger Gonzaga, Malia Arrayah",
"Plot": "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered Hulk.",
"Language": "English",
"Country": "United States",
"Awards": "5 wins & 16 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNjg4ZTQ1MjctNzEyMS00YWM2LTk1ZTQtNDU3ZDJjNjhhMDhkXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "5.2/10"
}
],
"Metascore": "N/A",
"imdbRating": "5.2",
"imdbVotes": "206,437",
"imdbID": "tt10857160",
"Type": "series",
"totalSeasons": "1",
"Response": "True"
},{
"Title": "The Incredible Hulk",
"Year": "1977–1982",
"Rated": "TV-PG",
"Released": "04 Nov 1977",
"Runtime": "60 min",
"Genre": "Action, Adventure, Drama",
"Director": "N/A",
"Writer": "Kenneth Johnson",
"Actors": "Bill Bixby, Lou Ferrigno, Jack Colvin",
"Plot": "A fugitive scientist has the curse of becoming a powerful green monster under extreme emotional stress.",
"Language": "English",
"Country": "United States",
"Awards": "Won 1 Primetime Emmy. 3 wins & 5 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BYjI5NzkxNDItYmYyNi00NGYzLWJiNmEtY2Q3OGUwYWE0YWJjXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.0/10"
}
],
"Metascore": "N/A",
"imdbRating": "7.0",
"imdbVotes": "17,097",
"imdbID": "tt0077031",
"Type": "series",
"totalSeasons": "5",
"Response": "True"
},{
"Title": "Planet Hulk",
"Year": "2010",
"Rated": "PG-13",
"Released": "02 Feb 2010",
"Runtime": "81 min",
"Genre": "Animation, Action, Adventure, Drama, Sci-Fi",
"Director": "Sam Liu",
"Writer": "Greg Pak (comic book), Carlo Pagulayan (comic book), Greg Johnson (screen story), Craig Kyle (screen story), Joshua Fine (screen story), Greg Johnson (screenplay), Stan Lee (The Incredible Hulk created by), Jack Kirby (The Incredible Hulk created by), Jose Ladronn (original comics designs), Lucio Parrillo (original comics designs), Aaron Lopresti (original comics designs)",
"Actors": "Rick D. Wasserman, Lisa Ann Beley, Mark Hildreth, Liam O'Brien",
"Plot": "The Incredible Hulk, ejected from Earth in a spaceship, crash-lands on a planet ruled by a tyrant, who forces him to fight in a coliseum against other powerful creatures. The Hulk reluctantly befriends the combatants on his team.",
"Language": "English",
"Country": "USA",
"Awards": "N/A",
"Poster": "https://m.media-amazon.com/images/M/MV5BYmFlNTNhNjktNDQ4NC00ZmVhLTg2NmYtOWExMmI0MzQ1ODFmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.8/10"
}
],
"Metascore": "N/A",
"imdbRating": "6.8",
"imdbVotes": "12,405",
"imdbID": "tt1483025",
"Type": "movie",
"DVD": "25 Feb 2010",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Hulk Vs.",
"Year": "2009",
"Rated": "PG-13",
"Released": "27 Jan 2009",
"Runtime": "82 min",
"Genre": "Animation, Action, Adventure, Fantasy, Sci-Fi",
"Director": "Sam Liu, Frank Paur",
"Writer": "Stan Lee (comic book), Larry Lieber (comic book), Jack Kirby (comic book), Craig Kyle (screen story), Frank Paur (screen story), Christopher L. Yost (screenplay), Craig Kyle (screenplay), Christopher L. Yost (screenplay)",
"Actors": "Fred Tatasciore, Matthew Wolf, Graham McTavish, Grey Griffin",
"Plot": "Two stories featuring Marvel's anti-hero The Incredible Hulk and his encounters with the X-Man Wolverine and the god known as Thor.",
"Language": "English",
"Country": "USA",
"Awards": "N/A",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTc1NzMzMzU4Nl5BMl5BanBnXkFtZTcwNTQ3NDYwNQ@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.0/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "100%"
}
],
"Metascore": "N/A",
"imdbRating": "7.0",
"imdbVotes": "11,801",
"imdbID": "tt1325753",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "The Trial of the Incredible Hulk",
"Year": "1989",
"Rated": "Not Rated",
"Released": "07 May 1989",
"Runtime": "100 min",
"Genre": "Action, Adventure, Drama",
"Director": "Bill Bixby",
"Writer": "Gerald Di Pego",
"Actors": "Bill Bixby, Lou Ferrigno, Marta DuBois",
"Plot": "When Banner is held as a witness to a violent crime linked to the Kingpin, the fugitive is helped by lawyer Matt Murdock who is also the superhero, Daredevil.",
"Language": "English",
"Country": "United States",
"Awards": "N/A",
"Poster": "https://m.media-amazon.com/images/M/MV5BYWVlNWExMjAtYWNlMC00ODVkLTllMzMtNWM2NTRiYjYxM2UyXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "5.8/10"
}
],
"Metascore": "N/A",
"imdbRating": "5.8",
"imdbVotes": "3,141",
"imdbID": "tt0098512",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Hulk and the Agents of S.M.A.S.H.",
"Year": "2013–2015",
"Rated": "TV-Y7",
"Released": "11 Aug 2013",
"Runtime": "23 min",
"Genre": "Animation, Action, Adventure",
"Director": "N/A",
"Writer": "N/A",
"Actors": "Fred Tatasciore, Clancy Brown, Seth Green",
"Plot": "The Incredible Hulk teams up with Red Hulk, She-Hulk, Skaar, and Rick Jones aka A-Bomb to battle the forces of evil in front of cameras for Rick's web-based series to show the Hulk is more hero than monster.",
"Language": "English",
"Country": "United States",
"Awards": "12 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTg1MzIxMzM4Nl5BMl5BanBnXkFtZTcwMTg3Mzc5OQ@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.0/10"
}
],
"Metascore": "N/A",
"imdbRating": "6.0",
"imdbVotes": "3,636",
"imdbID": "tt2455514",
"Type": "series",
"totalSeasons": "2",
"Response": "True"
},{
"Title": "The Incredible Hulk Returns",
"Year": "1988",
"Rated": "TV-PG",
"Released": "22 May 1988",
"Runtime": "100 min",
"Genre": "Action, Adventure, Drama",
"Director": "Nicholas Corea, Bill Bixby",
"Writer": "Stan Lee, Nicholas Corea",
"Actors": "Bill Bixby, Lou Ferrigno, Jack Colvin",
"Plot": "Hopefully on the verge of curing his Hulk condition, Banner meets his colleague, Don Blake, who is mystically linked to a Viking warrior, Thor.",
"Language": "English",
"Country": "United States",
"Awards": "N/A",
"Poster": "https://m.media-amazon.com/images/M/MV5BMDA3M2U2NzYtODAyMS00YTBmLWE0YjAtOGI5M2YxY2M1ODVkXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "5.7/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "50%"
}
],
"Metascore": "N/A",
"imdbRating": "5.7",
"imdbVotes": "3,839",
"imdbID": "tt0095368",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "The Incredible Hulk",
"Year": "1996–1998",
"Rated": "TV-Y7",
"Released": "08 Sep 1996",
"Runtime": "40S min",
"Genre": "Animation, Action, Adventure",
"Director": "N/A",
"Writer": "Jack Kirby, Stan Lee",
"Actors": "Lou Ferrigno, Neal McDonough, John Vernon",
"Plot": "A nuclear scientist is afflicted with the tendency to change into a powerful green monster under stress.",
"Language": "English",
"Country": "United States",
"Awards": "1 win total",
"Poster": "https://m.media-amazon.com/images/M/MV5BOGZkM2Y1ZDgtOTM1Yy00ZGE5LTk2MzItNDQ0YzcwNGExZDcyXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.7/10"
}
],
"Metascore": "N/A",
"imdbRating": "6.7",
"imdbVotes": "3,900",
"imdbID": "tt0115215",
"Type": "series",
"totalSeasons": "2",
"Response": "True"
},{
"Title": "The Avengers",
"Year": "2012",
"Rated": "PG-13",
"Released": "04 May 2012",
"Runtime": "143 min",
"Genre": "Action, Sci-Fi",
"Director": "Joss Whedon",
"Writer": "Joss Whedon, Zak Penn",
"Actors": "Robert Downey Jr., Chris Evans, Scarlett Johansson",
"Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
"Language": "English, Russian",
"Country": "United States",
"Awards": "Nominated for 1 Oscar. 40 wins & 81 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.0/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "91%"
},
{
"Source": "Metacritic",
"Value": "69/100"
}
],
"Metascore": "69",
"imdbRating": "8.0",
"imdbVotes": "1,547,278",
"imdbID": "tt0848228",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$623,357,910",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Avengers: Endgame",
"Year": "2019",
"Rated": "PG-13",
"Released": "26 Apr 2019",
"Runtime": "181 min",
"Genre": "Action, Adventure, Sci-Fi",
"Director": "Anthony Russo, Joe Russo",
"Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
"Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
"Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
"Language": "English, Japanese, Xhosa, German",
"Country": "United States",
"Awards": "Nominated for 1 Oscar. 70 wins & 132 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.4/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "94%"
},
{
"Source": "Metacritic",
"Value": "78/100"
}
],
"Metascore": "78",
"imdbRating": "8.4",
"imdbVotes": "1,426,944",
"imdbID": "tt4154796",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$858,373,000",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Avengers: Infinity War",
"Year": "2018",
"Rated": "PG-13",
"Released": "27 Apr 2018",
"Runtime": "149 min",
"Genre": "Action, Adventure, Sci-Fi",
"Director": "Anthony Russo, Joe Russo",
"Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
"Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo",
"Plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
"Language": "English",
"Country": "United States, Norway",
"Awards": "Nominated for 1 Oscar. 48 wins & 80 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.4/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "85%"
},
{
"Source": "Metacritic",
"Value": "68/100"
}
],
"Metascore": "68",
"imdbRating": "8.4",
"imdbVotes": "1,353,948",
"imdbID": "tt4154756",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$678,815,482",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Avengers: Age of Ultron",
"Year": "2015",
"Rated": "PG-13",
"Released": "01 May 2015",
"Runtime": "141 min",
"Genre": "Action, Adventure, Sci-Fi",
"Director": "Joss Whedon",
"Writer": "Joss Whedon, Stan Lee, Jack Kirby",
"Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
"Plot": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
"Language": "English, Korean",
"Country": "United States, South Korea, Cambodia",
"Awards": "8 wins & 52 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BODBhYTg1NGQtNGVmNS00ZTdiLThjYTYtZDFkNzRiNTZmNDZjXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "75%"
},
{
"Source": "Metacritic",
"Value": "66/100"
}
],
"Metascore": "66",
"imdbRating": "7.3",
"imdbVotes": "992,968",
"imdbID": "tt2395427",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$459,005,868",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "The Avengers",
"Year": "1998",
"Rated": "PG-13",
"Released": "14 Aug 1998",
"Runtime": "89 min",
"Genre": "Action, Adventure, Sci-Fi",
"Director": "Jeremiah S. Chechik",
"Writer": "Sydney Newman, Don MacPherson",
"Actors": "Ralph Fiennes, Uma Thurman, Sean Connery",
"Plot": "Two British Agents team up to stop Sir August de Wynter from destroying the world with a weather-changing machine.",
"Language": "English",
"Country": "United States",
"Awards": "4 wins & 17 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BZTA4ZmZlZWQtZDRlYS00ZWZhLTk0MzEtYjExMGIzMTBlZDNlXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "3.8/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "5%"
},
{
"Source": "Metacritic",
"Value": "12/100"
}
],
"Metascore": "12",
"imdbRating": "3.8",
"imdbVotes": "46,537",
"imdbID": "tt0118661",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$23,384,939",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "The Avengers: Earth's Mightiest Heroes",
"Year": "2010–2024",
"Rated": "TV-Y7",
"Released": "22 Sep 2010",
"Runtime": "30 min",
"Genre": "Animation, Action, Adventure",
"Director": "N/A",
"Writer": "N/A",
"Actors": "Eric Loomis, Colleen O'Shaughnessey, Brian Bloom",
"Plot": "After 74 villains break out of prison, Marvel's most powerful superheroes team up to capture all of them, and also to defend the Earth from widespread threats.",
"Language": "English",
"Country": "United States",
"Awards": "8 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BY2NkYTNlMTQtZWVjNC00MTk4LTkzNGEtYjAyOTYxYWFjYTVkXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
}
],
"Metascore": "N/A",
"imdbRating": "8.3",
"imdbVotes": "17,182",
"imdbID": "tt1626038",
"Type": "series",
"totalSeasons": "2",
"Response": "True"
},{
"Title": "Ultimate Avengers: The Movie",
"Year": "2006",
"Rated": "PG-13",
"Released": "21 Feb 2006",
"Runtime": "72 min",
"Genre": "Animation, Action, Adventure, Sci-Fi",
"Director": "Curt Geda, Steven E. Gordon, Bob Richardson",
"Writer": "Mark Millar (comic book: \"The Ultimates\"), Bryan Hitch (comic book: \"The Ultimates\"), Greg Johnson (screen story), Boyd Kirkland (screen story), Craig Kyle (screen story), Greg Johnson (screenplay), Christopher L. Yost (additional writing), Joe Simon (comic book & character: Captain America), Jack Kirby (comic book & character: Captain America)",
"Actors": "Justin Gross, Grey Griffin, Michael Massee, Marc Worden",
"Plot": "To confront an alien menace, General Fury assembles a team of superheroes lead by a recently resuscitated Captain America.",
"Language": "Spanish, English",
"Country": "USA",
"Awards": "1 win & 1 nomination.",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.7/10"
}
],
"Metascore": "N/A",
"imdbRating": "6.7",
"imdbVotes": "12,075",
"imdbID": "tt0491703",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Iron Man",
"Year": "2008",
"Rated": "PG-13",
"Released": "02 May 2008",
"Runtime": "126 min",
"Genre": "Action, Adventure, Sci-Fi",
"Director": "Jon Favreau",
"Writer": "Mark Fergus, Hawk Ostby, Art Marcum",
"Actors": "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
"Plot": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
"Language": "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
"Country": "United States, Canada",
"Awards": "Nominated for 2 Oscars. 24 wins & 73 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.9/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "94%"
},
{
"Source": "Metacritic",
"Value": "79/100"
}
],
"Metascore": "79",
"imdbRating": "7.9",
"imdbVotes": "1,213,667",
"imdbID": "tt0371746",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$319,034,126",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Iron Man 3",
"Year": "2013",
"Rated": "PG-13",
"Released": "03 May 2013",
"Runtime": "130 min",
"Genre": "Action, Adventure, Sci-Fi",
"Director": "Shane Black",
"Writer": "Drew Pearce, Shane Black, Stan Lee",
"Actors": "Robert Downey Jr., Guy Pearce, Gwyneth Paltrow",
"Plot": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
"Language": "English",
"Country": "United States",
"Awards": "Nominated for 1 Oscar. 20 wins & 63 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.1/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "79%"
},
{
"Source": "Metacritic",
"Value": "62/100"
}
],
"Metascore": "62",
"imdbRating": "7.1",
"imdbVotes": "957,295",
"imdbID": "tt1300854",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$409,013,994",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Iron Man 2",
"Year": "2010",
"Rated": "PG-13",
"Released": "07 May 2010",
"Runtime": "124 min",
"Genre": "Action, Sci-Fi",
"Director": "Jon Favreau",
"Writer": "Justin Theroux, Stan Lee, Don Heck",
"Actors": "Robert Downey Jr., Mickey Rourke, Gwyneth Paltrow",
"Plot": "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
"Language": "English, French, Russian",
"Country": "United States",
"Awards": "Nominated for 1 Oscar. 7 wins & 45 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BYWYyOGQzOGYtMGQ1My00ZWYxLTgzZjktZWYzN2IwYjkxYzM0XkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.9/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "72%"
},
{
"Source": "Metacritic",
"Value": "57/100"
}
],
"Metascore": "57",
"imdbRating": "6.9",
"imdbVotes": "930,932",
"imdbID": "tt1228705",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$312,433,331",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "The Iron Giant",
"Year": "1999",
"Rated": "PG",
"Released": "06 Aug 1999",
"Runtime": "86 min",
"Genre": "Animation, Action, Adventure",
"Director": "Brad Bird",
"Writer": "Tim McCanlies, Brad Bird, Ted Hughes",
"Actors": "Eli Marienthal, Harry Connick Jr., Jennifer Aniston",
"Plot": "A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.",
"Language": "English",
"Country": "United States, Czech Republic, United Kingdom",
"Awards": "Won 1 BAFTA Award20 wins & 18 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BODM4ZjZjMGEtYmFiMy00MThjLWIzZjUtMDU0ODg1NTI2MzIwXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.1/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "96%"
},
{
"Source": "Metacritic",
"Value": "85/100"
}
],
"Metascore": "85",
"imdbRating": "8.1",
"imdbVotes": "257,198",
"imdbID": "tt0129167",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$23,315,035",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "The Man in the Iron Mask",
"Year": "1998",
"Rated": "PG-13",
"Released": "13 Mar 1998",
"Runtime": "132 min",
"Genre": "Action, Adventure, Drama",
"Director": "Randall Wallace",
"Writer": "Alexandre Dumas, Randall Wallace",
"Actors": "Leonardo DiCaprio, Jeremy Irons, John Malkovich",
"Plot": "The cruel King Louis XIV of France has a secret twin brother whom he keeps imprisoned. Can the twin be substituted for the real king?",
"Language": "English, Italian",
"Country": "United Kingdom, United States",
"Awards": "3 wins & 4 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNDc4YWYzNzEtNWMwMC00Y2ZlLWEzZWEtZDcwYjcwYTE3Y2ZlXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.5/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "33%"
},
{
"Source": "Metacritic",
"Value": "49/100"
}
],
"Metascore": "49",
"imdbRating": "6.5",
"imdbVotes": "189,340",
"imdbID": "tt0120744",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$56,968,902",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Iron Fist",
"Year": "2017–2018",
"Rated": "TV-MA",
"Released": "17 Mar 2017",
"Runtime": "2 min",
"Genre": "Action, Adventure, Crime",
"Director": "N/A",
"Writer": "Scott Buck",
"Actors": "Finn Jones, Jessica Henwick, Jessica Stroup",
"Plot": "A young man is bestowed with incredible martial arts skills and a mystical force known as the Iron Fist.",
"Language": "English, Mandarin, Japanese, Russian, Korean",
"Country": "United States",
"Awards": "2 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.4/10"
}
],
"Metascore": "N/A",
"imdbRating": "6.4",
"imdbVotes": "147,761",
"imdbID": "tt3322310",
"Type": "series",
"totalSeasons": "2",
"Response": "True"
},{
"Title": "The Iron Lady",
"Year": "2011",
"Rated": "PG-13",
"Released": "13 Jan 2012",
"Runtime": "105 min",
"Genre": "Biography, Drama",
"Director": "Phyllida Lloyd",
"Writer": "Abi Morgan",
"Actors": "Meryl Streep, Jim Broadbent, Richard E. Grant",
"Plot": "An elderly Margaret Thatcher talks to the imagined presence of her recently deceased husband as she struggles to come to terms with his death while scenes from her past life, from girlhood to British prime minister, intervene.",
"Language": "English",
"Country": "United Kingdom, France",
"Awards": "Won 2 Oscars. 27 wins & 47 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.4/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "51%"
},
{
"Source": "Metacritic",
"Value": "52/100"
}
],
"Metascore": "52",
"imdbRating": "6.4",
"imdbVotes": "115,536",
"imdbID": "tt1007029",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$30,017,992",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "The Iron Claw",
"Year": "2023",
"Rated": "R",
"Released": "22 Dec 2023",
"Runtime": "132 min",
"Genre": "Biography, Drama, Sport",
"Director": "Sean Durkin",
"Writer": "Sean Durkin",
"Actors": "Zac Efron, Jeremy Allen White, Harris Dickinson",
"Plot": "The true story of the inseparable Von Erich brothers, who made history in the intensely competitive world of professional wrestling in the early 1980s.",
"Language": "English",
"Country": "United Kingdom, United States",
"Awards": "4 wins & 42 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BYjJjZDc5YTUtYTc4My00Yzc2LTkwMGUtOTg3ODIwYzJkYTJiXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.6/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "89%"
},
{
"Source": "Metacritic",
"Value": "73/100"
}
],
"Metascore": "73",
"imdbRating": "7.6",
"imdbVotes": "114,811",
"imdbID": "tt21064584",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$35,070,296",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Iron Sky",
"Year": "2012",
"Rated": "R",
"Released": "04 Apr 2012",
"Runtime": "93 min",
"Genre": "Action, Adventure, Comedy",
"Director": "Timo Vuorensola",
"Writer": "Jarmo Puskala, Johanna Sinisalo, Michael Kalesniko",
"Actors": "Julia Dietze, Christopher Kirby, Götz Otto",
"Plot": "The Nazis set up a secret base on the far side of the moon in 1945 where they hide out and plan to return to power in 2018.",
"Language": "English, German",
"Country": "Finland, Germany, Australia",
"Awards": "5 wins & 2 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTM2MDg5MzgxNF5BMl5BanBnXkFtZTcwODUzNjMxOA@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "5.9/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "42%"
}
],
"Metascore": "N/A",
"imdbRating": "5.9",
"imdbVotes": "98,593",
"imdbID": "tt1034314",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$122,082",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "The Man with the Iron Fists",
"Year": "2012",
"Rated": "R",
"Released": "02 Nov 2012",
"Runtime": "95 min",
"Genre": "Action",
"Director": "RZA",
"Writer": "RZA, Eli Roth",
"Actors": "RZA, Rick Yune, Russell Crowe",
"Plot": "On the hunt for a fabled treasure of gold, a band of warriors, assassins, and a rogue British soldier descend upon a village in feudal China, where a humble blacksmith looks to defend himself and his fellow villagers.",
"Language": "English, Mandarin",
"Country": "United States, Hong Kong",
"Awards": "4 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "5.4/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "52%"
},
{
"Source": "Metacritic",
"Value": "51/100"
}
],
"Metascore": "51",
"imdbRating": "5.4",
"imdbVotes": "65,233",
"imdbID": "tt1258972",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$15,634,090",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Captain America: The Winter Soldier",
"Year": "2014",
"Rated": "PG-13",
"Released": "04 Apr 2014",
"Runtime": "136 min",
"Genre": "Action, Adventure, Sci-Fi",
"Director": "Anthony Russo, Joe Russo",
"Writer": "Christopher Markus, Stephen McFeely, Joe Simon",
"Actors": "Chris Evans, Samuel L. Jackson, Scarlett Johansson",
"Plot": "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
"Language": "English, French",
"Country": "United States",
"Awards": "Nominated for 1 Oscar. 5 wins & 52 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.7/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "90%"
},
{
"Source": "Metacritic",
"Value": "70/100"
}
],
"Metascore": "70",
"imdbRating": "7.7",
"imdbVotes": "965,363",
"imdbID": "tt1843866",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$259,766,572",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Captain America: The First Avenger",
"Year": "2011",
"Rated": "PG-13",
"Released": "22 Jul 2011",
"Runtime": "124 min",
"Genre": "Action, Adventure, Sci-Fi",
"Director": "Joe Johnston",
"Writer": "Christopher Markus, Stephen McFeely, Joe Simon",
"Actors": "Chris Evans, Hugo Weaving, Samuel L. Jackson",
"Plot": "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a \"Super-Soldier serum\". But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organiza...",
"Language": "English, Norwegian, French",
"Country": "United States",
"Awards": "4 wins & 50 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.9/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "80%"
},
{
"Source": "Metacritic",
"Value": "66/100"
}
],
"Metascore": "66",
"imdbRating": "6.9",
"imdbVotes": "958,774",
"imdbID": "tt0458339",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$176,654,505",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Captain America: Civil War",
"Year": "2016",
"Rated": "PG-13",
"Released": "06 May 2016",
"Runtime": "147 min",
"Genre": "Action, Sci-Fi",
"Director": "Anthony Russo, Joe Russo",
"Writer": "Christopher Markus, Stephen McFeely, Joe Simon",
"Actors": "Chris Evans, Robert Downey Jr., Scarlett Johansson",
"Plot": "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
"Language": "English, German, Xhosa, Russian, Romanian",
"Country": "United States, Germany, Iceland, United Kingdom",
"Awards": "16 wins & 73 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.8/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "90%"
},
{
"Source": "Metacritic",
"Value": "75/100"
}
],
"Metascore": "75",
"imdbRating": "7.8",
"imdbVotes": "917,200",
"imdbID": "tt3498820",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$408,084,349",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Once Upon a Time in America",
"Year": "1984",
"Rated": "R",
"Released": "01 Jun 1984",
"Runtime": "229 min",
"Genre": "Crime, Drama",
"Director": "Sergio Leone",
"Writer": "Harry Grey, Leonardo Benvenuti, Piero De Bernardi",
"Actors": "Robert De Niro, James Woods, Elizabeth McGovern",
"Plot": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan 35 years later, where he must once again confront the ghosts and regrets of his old life.",
"Language": "English, Italian, French, Yiddish, Hebrew",
"Country": "Italy, United States",
"Awards": "Won 2 BAFTA 11 wins & 13 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMDQ0ZTg2OGUtZjMyOC00M2M5LThkMmItZmM2MmUzMmIxMWJhXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "86%"
},
{
"Source": "Metacritic",
"Value": "75/100"
}
],
"Metascore": "75",
"imdbRating": "8.3",
"imdbVotes": "405,689",
"imdbID": "tt0087843",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$5,321,508",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Coming to America",
"Year": "1988",
"Rated": "R",
"Released": "29 Jun 1988",
"Runtime": "117 min",
"Genre": "Comedy, Romance",
"Director": "John Landis",
"Writer": "Eddie Murphy, David Sheffield, Barry W. Blaustein",
"Actors": "Eddie Murphy, Paul Bates, Garcelle Beauvais",
"Plot": "An extremely pampered African prince travels to Queens, New York and goes undercover to find a wife that he can respect for her intelligence and strong will.",
"Language": "English",
"Country": "United States",
"Awards": "Nominated for 2 Oscars. 5 wins & 5 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMDY1N2RiYWMtMTNmMy00MWQzLTlkYzAtYzRlZmM5OGZhMjUwXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.1/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "73%"
},
{
"Source": "Metacritic",
"Value": "47/100"
}
],
"Metascore": "47",
"imdbRating": "7.1",
"imdbVotes": "238,307",
"imdbID": "tt0094898",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$128,152,301",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Team America: World Police",
"Year": "2004",
"Rated": "R",
"Released": "15 Oct 2004",
"Runtime": "98 min",
"Genre": "Action, Comedy",
"Director": "Trey Parker",
"Writer": "Trey Parker, Matt Stone, Pam Brady",
"Actors": "Trey Parker, Matt Stone, Kristen Miller",
"Plot": "Popular Broadway actor Gary Johnston is recruited by the elite counter-terrorism organization Team America: World Police. As the world begins to crumble around him, he must battle with terrorists, celebrities and falling in love.",
"Language": "English, French, Klingon, Korean, Arabic",
"Country": "Germany, United States",
"Awards": "1 win & 11 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTM2Nzc4NjYxMV5BMl5BanBnXkFtZTcwNTM1MTcyMQ@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.2/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "77%"
},
{
"Source": "Metacritic",
"Value": "64/100"
}
],
"Metascore": "64",
"imdbRating": "7.2",
"imdbVotes": "184,476",
"imdbID": "tt0372588",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$32,786,074",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Captain America: Brave New World",
"Year": "2025",
"Rated": "PG-13",
"Released": "14 Feb 2025",
"Runtime": "118 min",
"Genre": "Action, Adventure, Sci-Fi",
"Director": "Julius Onah",
"Writer": "Rob Edwards, Malcolm Spellman, Dalan Musson",
"Actors": "Anthony Mackie, Harrison Ford, Danny Ramirez",
"Plot": "Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.",
"Language": "English, Spanish, Japanese",
"Country": "United States, Canada",
"Awards": "2 wins & 17 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "5.6/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "46%"
},
{
"Source": "Metacritic",
"Value": "42/100"
}
],
"Metascore": "42",
"imdbRating": "5.6",
"imdbVotes": "178,537",
"imdbID": "tt14513804",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$200,500,001",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "Coming 2 America",
"Year": "2021",
"Rated": "PG-13",
"Released": "05 Mar 2021",
"Runtime": "110 min",
"Genre": "Comedy, Music",
"Director": "Craig Brewer",
"Writer": "Eddie Murphy, Barry W. Blaustein, David Sheffield",
"Actors": "Eddie Murphy, Arsenio Hall, Shari Headley",
"Plot": "African monarch Akeem learns that he has a long-lost son in the United States and must return to America to meet this unexpected heir and build a relationship with his son.",
"Language": "English",
"Country": "United States",
"Awards": "Nominated for 1 Oscar. 6 wins & 15 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BN2NhODZjMTktOGNmOC00OTllLTk3NWItYzNiNmRlNTYwMTcxXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "5.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "49%"
},
{
"Source": "Metacritic",
"Value": "52/100"
}
],
"Metascore": "52",
"imdbRating": "5.3",
"imdbVotes": "80,613",
"imdbID": "tt6802400",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
"Title": "God Bless America",
"Year": "2011",
"Rated": "R",
"Released": "31 May 2012",
"Runtime": "105 min",
"Genre": "Comedy, Crime, Drama",
"Director": "Bobcat Goldthwait",
"Writer": "Bobcat Goldthwait",
"Actors": "Joel Murray, Tara Lynne Barr, Mackenzie Brooke Smith",
"Plot": "On a mission to rid society of its most repellent citizens, terminally ill Frank makes an unlikely accomplice in 16-year-old Roxy.",
"Language": "English",
"Country": "United States",
"Awards": "1 win & 5 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BN2ZkYjU5ZjAtNTRjZS00MzUwLWJmMzctZDdhNDBiMWI2ZWRiXkEyXkFqcGc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.1/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "66%"
},
{
"Source": "Metacritic",
"Value": "56/100"
}
],
"Metascore": "56",
"imdbRating": "7.1",
"imdbVotes": "73,419",
"imdbID": "tt1912398",
"Type": "movie",
"DVD": "N/A",
"BoxOffice": "$122,550",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},{
    "Title": "Don Jon",
    "Year": "2013",
    "Rated": "R",
    "Released": "27 Sep 2013",
    "Runtime": "90 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Joseph Gordon-Levitt",
    "Writer": "Joseph Gordon-Levitt",
    "Actors": "Joseph Gordon-Levitt, Scarlett Johansson, Julianne Moore",
    "Plot": "A New Jersey guy dedicated to his family, friends, and church, develops unrealistic expectations from watching porn and works to find happiness and intimacy with his potential true love.",
    "Language": "English",
    "Country": "United States",
    "Awards": "2 wins & 28 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDgwMTU2NDctODI0YS00ZmIxLWFiNjEtZDI2ZGE3NWFlZDY2XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "80%"
        },
        {
            "Source": "Metacritic",
            "Value": "66/100"
        }
    ],
    "Metascore": "66",
    "imdbRating": "6.5",
    "imdbVotes": "253,868",
    "imdbID": "tt2229499",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$24,477,704",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Don 2",
    "Year": "2011",
    "Rated": "Not Rated",
    "Released": "23 Dec 2011",
    "Runtime": "148 min",
    "Genre": "Action, Crime, Thriller",
    "Director": "Farhan Akhtar",
    "Writer": "Farhan Akhtar, Javed Akhtar, Salim Khan",
    "Actors": "Shah Rukh Khan, Florian Lukas, Om Puri",
    "Plot": "Don turns himself in and escapes with Vardhaan from prison, following which he recruits a team to steal currency printing plates from a bank in Berlin.",
    "Language": "Hindi",
    "Country": "India, Germany",
    "Awards": "10 wins & 21 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTc3YmI2OTgtMTBmMi00Y2FmLWJjNGUtZTJjOGI1NDVlMDY5XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "63%"
        },
        {
            "Source": "Metacritic",
            "Value": "49/100"
        }
    ],
    "Metascore": "49",
    "imdbRating": "7.1",
    "imdbVotes": "59,903",
    "imdbID": "tt1285241",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$3,680,306",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Don Juan DeMarco",
    "Year": "1994",
    "Rated": "PG-13",
    "Released": "07 Apr 1995",
    "Runtime": "97 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Jeremy Leven",
    "Writer": "Lord Byron, Jeremy Leven",
    "Actors": "Johnny Depp, Marlon Brando, Faye Dunaway",
    "Plot": "A psychiatrist must cure a young patient who presents himself as Don Juan, the world's greatest lover.",
    "Language": "English, Spanish",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 4 wins & 5 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTFjOWJhYjUtNjllYi00MDdkLWJjYTMtNTNlNjJlMDVmZGJlXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "70%"
        },
        {
            "Source": "Metacritic",
            "Value": "63/100"
        }
    ],
    "Metascore": "63",
    "imdbRating": "6.7",
    "imdbVotes": "55,132",
    "imdbID": "tt0112883",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$22,150,451",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Don",
    "Year": "2006",
    "Rated": "Not Rated",
    "Released": "20 Oct 2006",
    "Runtime": "171 min",
    "Genre": "Action, Crime, Thriller",
    "Director": "Farhan Akhtar",
    "Writer": "Salim Khan, Javed Akhtar, Farhan Akhtar",
    "Actors": "Shah Rukh Khan, Priyanka Chopra Jonas, Arjun Rampal",
    "Plot": "Vijay is recruited by a police officer to masquerade as his lookalike Don, the leader of an international gang of smugglers. Things go wrong when the officer is killed and Vijay is left to fend for himself.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "3 wins & 15 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjBmOTg2NTgtZTc2Mi00ZWRhLTkzMWQtMDI0YThhZTcyMzYwXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.2/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.2",
    "imdbVotes": "42,882",
    "imdbID": "tt0461936",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$2,223,961",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Man Who Killed Don Quixote",
    "Year": "2018",
    "Rated": "Not Rated",
    "Released": "19 Apr 2019",
    "Runtime": "132 min",
    "Genre": "Adventure, Comedy, Drama",
    "Director": "Terry Gilliam",
    "Writer": "Terry Gilliam, Tony Grisoni, Miguel de Cervantes y Saavedra",
    "Actors": "José Luis Ferrer, Ismael Fritschi, Juan López-Tagle",
    "Plot": "Toby, a disillusioned film director, is pulled into a world of time-jumping fantasy when a Spanish cobbler believes himself to be Sancho Panza. He gradually becomes unable to tell dreams from reality.",
    "Language": "English, Spanish",
    "Country": "United States, Spain, France, Belgium, Portugal, United Kingdom",
    "Awards": "5 wins & 12 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWRmOTY5MGYtNjAyYS00ZjUzLTk1YWQtOTMyMDFlNWNmOTI0XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "66%"
        },
        {
            "Source": "Metacritic",
            "Value": "58/100"
        }
    ],
    "Metascore": "58",
    "imdbRating": "6.3",
    "imdbVotes": "23,709",
    "imdbID": "tt1318517",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$391,963",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Don",
    "Year": "1978",
    "Rated": "Not Rated",
    "Released": "12 May 1978",
    "Runtime": "166 min",
    "Genre": "Action, Crime, Thriller",
    "Director": "Chandra Barot",
    "Writer": "Javed Akhtar, Salim Khan",
    "Actors": "Amitabh Bachchan, Zeenat Aman, Pran Sikand",
    "Plot": "Don, a wanted criminal, dies in a police chase. DSP D'Silva is the only one who knows about his death, and to get hold of the gang he trains Don-lookalike Vijay. But Vijay faces danger from the police and from within the gang.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "3 wins & 2 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDIyN2U3NDItZjFlYy00OWQ4LTg4Y2UtOGU2OGU5MWE5MmZhXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.7/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.7",
    "imdbVotes": "13,123",
    "imdbID": "tt0077451",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Don",
    "Year": "2022",
    "Rated": "N/A",
    "Released": "13 May 2022",
    "Runtime": "165 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Cibi Chakravarthi",
    "Writer": "Cibi Chakravarthi",
    "Actors": "Sivakarthikeyan, Priyanka Arulmohan, S.J. Suryah",
    "Plot": "Follows the life of a youngster from college to his marriage.",
    "Language": "Tamil",
    "Country": "India",
    "Awards": "2 wins & 1 nomination",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWYxZjE5MDctMjFkMy00NDA5LTkxY2EtOGU5YjVhZjliNmZlXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.8/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.8",
    "imdbVotes": "11,328",
    "imdbID": "tt10709484",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Don Verdean",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "11 Dec 2015",
    "Runtime": "90 min",
    "Genre": "Adventure, Comedy, Crime",
    "Director": "Jared Hess",
    "Writer": "Jared Hess, Jerusha Hess",
    "Actors": "Sam Rockwell, Amy Ryan, Jemaine Clement",
    "Plot": "Hired by an ambitious small-town pastor to find sacred relics in the Holy Land, a self-proclaimed biblical archaeologist finds himself in trouble and tries to cover up his failure.",
    "Language": "English",
    "Country": "United States",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTAzODQyMjM3NTleQTJeQWpwZ15BbWU4MDc2NDY5MDcx._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "29%"
        },
        {
            "Source": "Metacritic",
            "Value": "39/100"
        }
    ],
    "Metascore": "39",
    "imdbRating": "5.4",
    "imdbVotes": "6,051",
    "imdbID": "tt3534282",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$31,309",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Little World of Don Camillo",
    "Year": "1952",
    "Rated": "N/A",
    "Released": "13 Jan 1953",
    "Runtime": "107 min",
    "Genre": "Comedy",
    "Director": "Julien Duvivier",
    "Writer": "Giovanni Guareschi, Julien Duvivier, René Barjavel",
    "Actors": "Fernandel, Gino Cervi, Vera Talchi",
    "Plot": "A determined priest and a Communist mayor develop a grudging friendship in spite of their official rivalry.",
    "Language": "Italian, French, Latin",
    "Country": "Italy, France",
    "Awards": "Nominated for 1 BAFTA Award3 wins & 4 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2YxZDhlZTgtZTI0Ni00OGJjLThjYTYtM2Q4NjFmOWZhMTY4XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.6/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.6",
    "imdbVotes": "4,950",
    "imdbID": "tt0043918",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Adventures of Don Juan",
    "Year": "1948",
    "Rated": "Approved",
    "Released": "29 Jan 1949",
    "Runtime": "110 min",
    "Genre": "Action, Adventure, Romance",
    "Director": "Vincent Sherman",
    "Writer": "Herbert Dalmas, George Oppenheimer, Harry Kurnitz",
    "Actors": "Errol Flynn, Viveca Lindfors, Robert Douglas",
    "Plot": "The great lover Don Juan comes to the assistance of his queen.",
    "Language": "English, Spanish",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 2 wins & 2 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDdkYzdhYzQtM2I5My00YTUwLTllMTItZjBlZTBiODUzODhmXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.0/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.0",
    "imdbVotes": "3,758",
    "imdbID": "tt0040076",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Boy in the Striped Pajamas",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "26 Nov 2008",
    "Runtime": "94 min",
    "Genre": "Drama, War",
    "Director": "Mark Herman",
    "Writer": "John Boyne, Mark Herman",
    "Actors": "Asa Butterfield, David Thewlis, Rupert Friend",
    "Plot": "Through the innocent eyes of Bruno, the eight-year-old son of the commandant at a German concentration camp, a forbidden friendship with a Jewish boy on the other side of the camp fence has startling and unexpected consequences.",
    "Language": "English",
    "Country": "United Kingdom, United States",
    "Awards": "7 wins & 7 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzMTc3MjA5NF5BMl5BanBnXkFtZTcwOTk3MDE5MQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "65%"
        },
        {
            "Source": "Metacritic",
            "Value": "55/100"
        }
    ],
    "Metascore": "55",
    "imdbRating": "7.7",
    "imdbVotes": "271,521",
    "imdbID": "tt0914798",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$9,046,156",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "About a Boy",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "17 May 2002",
    "Runtime": "101 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Chris Weitz, Paul Weitz",
    "Writer": "Nick Hornby, Peter Hedges, Chris Weitz",
    "Actors": "Hugh Grant, Nicholas Hoult, Toni Collette",
    "Plot": "Will, who attends single parent meetings to woo women, meets Marcus, a troubled 12-year-old boy. As they become friends, Will learns to be responsible while he helps Marcus with his studies.",
    "Language": "English",
    "Country": "United Kingdom, France, United States, Germany",
    "Awards": "Nominated for 1 Oscar. 11 wins & 30 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2Mzg4MDAzNV5BMl5BanBnXkFtZTgwMjcxNTYxMTE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "93%"
        },
        {
            "Source": "Metacritic",
            "Value": "75/100"
        }
    ],
    "Metascore": "75",
    "imdbRating": "7.1",
    "imdbVotes": "198,092",
    "imdbID": "tt0276751",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$41,385,278",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Boy and the Heron",
    "Year": "2023",
    "Rated": "PG-13",
    "Released": "08 Dec 2023",
    "Runtime": "124 min",
    "Genre": "Animation, Adventure, Drama",
    "Director": "Hayao Miyazaki",
    "Writer": "Hayao Miyazaki",
    "Actors": "Soma Santoki, Masaki Suda, Kô Shibasaki",
    "Plot": "In the wake of his mother's death and his father's remarriage, a headstrong boy ventures into a dreamlike world shared by the living and the dead in search of his missing stepmother.",
    "Language": "Japanese",
    "Country": "Japan",
    "Awards": "Won 1 Oscar. 34 wins & 87 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzA5Zjg3MTAtM2FhZS00NTNjLTg3NjEtNWQ4MTRhZjhiNzVmXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "96%"
        },
        {
            "Source": "Metacritic",
            "Value": "91/100"
        }
    ],
    "Metascore": "91",
    "imdbRating": "7.3",
    "imdbVotes": "123,968",
    "imdbID": "tt6587046",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$47,343,204",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Last Boy Scout",
    "Year": "1991",
    "Rated": "R",
    "Released": "13 Dec 1991",
    "Runtime": "105 min",
    "Genre": "Action, Comedy, Crime",
    "Director": "Tony Scott",
    "Writer": "Shane Black, Greg Hicks",
    "Actors": "Bruce Willis, Damon Wayans, Chelsea Field",
    "Plot": "A private detective's protected female witness is murdered, prompting him and the victim's boyfriend to investigate the crime that leads to a corrupt politician and a crooked football team owner.",
    "Language": "English",
    "Country": "United States",
    "Awards": "2 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTI4MDcyZTktNTVhMC00NmQ3LWJiN2UtMzZkNDgwMzRkMzIwXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "46%"
        },
        {
            "Source": "Metacritic",
            "Value": "52/100"
        }
    ],
    "Metascore": "52",
    "imdbRating": "7.0",
    "imdbVotes": "119,810",
    "imdbID": "tt0102266",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$59,509,925",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Beautiful Boy",
    "Year": "2018",
    "Rated": "R",
    "Released": "25 Oct 2018",
    "Runtime": "120 min",
    "Genre": "Biography, Drama",
    "Director": "Felix van Groeningen",
    "Writer": "Luke Davies, Felix van Groeningen, David Sheff",
    "Actors": "Steve Carell, Maura Tierney, Jack Dylan Grazer",
    "Plot": "A family coping with addiction over many years goes through the heartbreaking and inspiring experience of survival, relapse and recovery.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 BAFTA Award10 wins & 31 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTRhNjg3NGMtMDM3Mi00ZmRmLTg0ZDMtYTBhMThiN2YxMTdjXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "68%"
        },
        {
            "Source": "Metacritic",
            "Value": "62/100"
        }
    ],
    "Metascore": "62",
    "imdbRating": "7.4",
    "imdbVotes": "117,984",
    "imdbID": "tt1226837",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$7,649,973",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "That's My Boy",
    "Year": "2012",
    "Rated": "R",
    "Released": "15 Jun 2012",
    "Runtime": "116 min",
    "Genre": "Comedy, Drama",
    "Director": "Sean Anders",
    "Writer": "David Caspe",
    "Actors": "Adam Sandler, Andy Samberg, Leighton Meester",
    "Plot": "While in his teens, Donny fathered a son, Todd, and raised him as a single parent until Todd's 18th birthday. Now Donny resurfaces just before Todd's wedding after years apart, sending the groom-to-be's world crashing down.",
    "Language": "English",
    "Country": "United States",
    "Awards": "5 wins & 10 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NDMyNzgzMV5BMl5BanBnXkFtZTcwMjIyMTA1Nw@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.6/10"
        },
        {
            "Source": "Metacritic",
            "Value": "31/100"
        }
    ],
    "Metascore": "31",
    "imdbRating": "5.6",
    "imdbVotes": "113,794",
    "imdbID": "tt1232200",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$36,931,089",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Boy",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "22 Jan 2016",
    "Runtime": "97 min",
    "Genre": "Horror, Mystery, Thriller",
    "Director": "William Brent Bell",
    "Writer": "Stacey Menear",
    "Actors": "Lauren Cohan, Rupert Evans, James Russell",
    "Plot": "An American nanny is shocked that her new English family's boy is actually a life-sized doll. After she violates a list of strict rules, disturbing events make her believe that the doll is really alive.",
    "Language": "English",
    "Country": "United States, Canada, China",
    "Awards": "6 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc1MjcxNzcwMV5BMl5BanBnXkFtZTgwMTE0NTE2NzE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "31%"
        },
        {
            "Source": "Metacritic",
            "Value": "42/100"
        }
    ],
    "Metascore": "42",
    "imdbRating": "6.0",
    "imdbVotes": "107,626",
    "imdbID": "tt3882082",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$35,819,556",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Tommy Boy",
    "Year": "1995",
    "Rated": "PG-13",
    "Released": "31 Mar 1995",
    "Runtime": "97 min",
    "Genre": "Adventure, Comedy",
    "Director": "Peter Segal",
    "Writer": "Bonnie Turner, Terry Turner",
    "Actors": "Chris Farley, David Spade, Brian Dennehy",
    "Plot": "After his auto-parts tycoon father dies, the overweight, underachieving son teams up with a snide accountant to try and save the family business.",
    "Language": "English",
    "Country": "United States",
    "Awards": "1 win & 2 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwOWU4NmYtZmU2Ny00MjM0LWI4NmQtN2YwNzdhYTI1MmFlXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "40%"
        },
        {
            "Source": "Metacritic",
            "Value": "46/100"
        }
    ],
    "Metascore": "46",
    "imdbRating": "7.1",
    "imdbVotes": "104,322",
    "imdbID": "tt0114694",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$32,679,899",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Grandma's Boy",
    "Year": "2006",
    "Rated": "R",
    "Released": "06 Jan 2006",
    "Runtime": "94 min",
    "Genre": "Comedy",
    "Director": "Nicholaus Goossen",
    "Writer": "Barry Wernick, Allen Covert, Nick Swardson",
    "Actors": "Allen Covert, Linda Cardellini, Shirley Jones",
    "Plot": "A thirty-five-year-old video game tester has to move in with his grandma and her two old lady roommates.",
    "Language": "English",
    "Country": "United States",
    "Awards": "1 nomination total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGQyMjIyNzYtNGRjZi00OWUzLTkzNTAtZGZlNjViNGNiZTE4XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.9/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "15%"
        },
        {
            "Source": "Metacritic",
            "Value": "33/100"
        }
    ],
    "Metascore": "33",
    "imdbRating": "6.9",
    "imdbVotes": "92,351",
    "imdbID": "tt0456554",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$6,090,172",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Gone Girl",
    "Year": "2014",
    "Rated": "R",
    "Released": "03 Oct 2014",
    "Runtime": "149 min",
    "Genre": "Drama, Mystery, Thriller",
    "Director": "David Fincher",
    "Writer": "Gillian Flynn",
    "Actors": "Ben Affleck, Rosamund Pike, Neil Patrick Harris",
    "Plot": "The husband of a missing woman becomes the main suspect in her disappearance.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 64 wins & 189 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "88%"
        },
        {
            "Source": "Metacritic",
            "Value": "79/100"
        }
    ],
    "Metascore": "79",
    "imdbRating": "8.1",
    "imdbVotes": "1,158,661",
    "imdbID": "tt2267998",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$167,767,189",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Girl with the Dragon Tattoo",
    "Year": "2011",
    "Rated": "R",
    "Released": "21 Dec 2011",
    "Runtime": "158 min",
    "Genre": "Crime, Drama, Mystery",
    "Director": "David Fincher",
    "Writer": "Steven Zaillian, Stieg Larsson",
    "Actors": "Daniel Craig, Rooney Mara, Christopher Plummer",
    "Plot": "Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for 40 years by hacker Lisbeth Salander.",
    "Language": "English, Swedish",
    "Country": "Sweden, United States",
    "Awards": "Won 1 Oscar. 26 wins & 91 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "86%"
        },
        {
            "Source": "Metacritic",
            "Value": "71/100"
        }
    ],
    "Metascore": "71",
    "imdbRating": "7.8",
    "imdbVotes": "525,793",
    "imdbID": "tt1568346",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$102,515,793",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "New Girl",
    "Year": "2011–2018",
    "Rated": "TV-14",
    "Released": "20 Sep 2011",
    "Runtime": "22 min",
    "Genre": "Comedy, Romance",
    "Director": "N/A",
    "Writer": "Elizabeth Meriwether",
    "Actors": "Zooey Deschanel, Jake Johnson, Max Greenfield",
    "Plot": "After a bad break-up, Jess, an offbeat young woman, moves into an apartment loft with three single men. Although they find her behavior very unusual, the men support her - most of the time.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 5 Primetime Emmys. 11 wins & 85 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ5MzM1NzMwMl5BMl5BanBnXkFtZTgwNjQ2MzI2NzE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.8",
    "imdbVotes": "261,736",
    "imdbID": "tt1826940",
    "Type": "series",
    "totalSeasons": "7",
    "Response": "True"
},{
    "Title": "The Girl Next Door",
    "Year": "2004",
    "Rated": "R",
    "Released": "09 Apr 2004",
    "Runtime": "109 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Luke Greenfield",
    "Writer": "David Wagner, Brent Goldberg, Stuart Blumberg",
    "Actors": "Emile Hirsch, Elisha Cuthbert, Timothy Olyphant",
    "Plot": "A teenager's dreams come true when a former porn star moves in next door and they fall in love.",
    "Language": "English",
    "Country": "United States",
    "Awards": "2 wins & 4 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ0ODIyMzE1N15BMl5BanBnXkFtZTcwODEwODczMw@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "56%"
        },
        {
            "Source": "Metacritic",
            "Value": "47/100"
        }
    ],
    "Metascore": "47",
    "imdbRating": "6.7",
    "imdbVotes": "257,258",
    "imdbID": "tt0265208",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$14,589,444",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Girl with the Dragon Tattoo",
    "Year": "2009",
    "Rated": "R",
    "Released": "30 Apr 2010",
    "Runtime": "152 min",
    "Genre": "Crime, Drama, Mystery",
    "Director": "Niels Arden Oplev",
    "Writer": "Nikolaj Arcel, Rasmus Heisterberg, Stieg Larsson",
    "Actors": "Michael Nyqvist, Noomi Rapace, Ewa Fröling",
    "Plot": "Influential industrialist Vanger's niece Harriet disappeared under mysterious circumstances 40 years ago. As a last attempt at solving the case, he hires investigative journalist Mikael Blomkvist.",
    "Language": "Swedish, English",
    "Country": "Sweden, Denmark, Germany, Norway, Spain",
    "Awards": "Won 1 BAFTA Award18 wins & 35 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc2Mjc0MDg3MV5BMl5BanBnXkFtZTcwMjUzMDkxMw@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        },
        {
            "Source": "Metacritic",
            "Value": "76/100"
        }
    ],
    "Metascore": "76",
    "imdbRating": "7.8",
    "imdbVotes": "227,905",
    "imdbID": "tt1132620",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$10,095,170",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Girl, Interrupted",
    "Year": "1999",
    "Rated": "R",
    "Released": "14 Jan 2000",
    "Runtime": "127 min",
    "Genre": "Biography, Drama",
    "Director": "James Mangold",
    "Writer": "James Mangold, Lisa Loomer, Anna Hamilton Phelan",
    "Actors": "Winona Ryder, Angelina Jolie, Clea DuVall",
    "Plot": "Directionless teenager Susanna is rushed to Claymoore, a mental institution, after a supposed suicide attempt. There she befriends a group of troubled women who deeply influence her life.",
    "Language": "English",
    "Country": "United States, Germany",
    "Awards": "Won 1 Oscar. 9 wins & 11 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWVhYzdiMTQtMzJkMC00YWEwLTkyNDEtNzkwMGQ3NTBhMzExXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "53%"
        },
        {
            "Source": "Metacritic",
            "Value": "51/100"
        }
    ],
    "Metascore": "51",
    "imdbRating": "7.3",
    "imdbVotes": "226,524",
    "imdbID": "tt0172493",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$28,912,646",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Gossip Girl",
    "Year": "2007–2012",
    "Rated": "TV-14",
    "Released": "19 Sep 2007",
    "Runtime": "42 min",
    "Genre": "Drama, Romance",
    "Director": "N/A",
    "Writer": "Stephanie Savage, Josh Schwartz",
    "Actors": "Blake Lively, Leighton Meester, Penn Badgley",
    "Plot": "Narrated by a mysterious vicious blogger, this show follows a set of wealthy teenagers through their day-to-day scandalous lives as Manhattans Elite, and how they betray each other for each other's gain.",
    "Language": "English",
    "Country": "United States",
    "Awards": "22 wins & 39 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDljNzZmMGMtM2FmNC00ZTkzLTg2OTctNDAxZGViYjVlYjAxXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.5/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.5",
    "imdbVotes": "211,315",
    "imdbID": "tt0397442",
    "Type": "series",
    "totalSeasons": "6",
    "Response": "True"
},{
    "Title": "The Girl on the Train",
    "Year": "2016",
    "Rated": "R",
    "Released": "07 Oct 2016",
    "Runtime": "112 min",
    "Genre": "Crime, Drama, Mystery",
    "Director": "Tate Taylor",
    "Writer": "Erin Cressida Wilson, Paula Hawkins",
    "Actors": "Emily Blunt, Haley Bennett, Rebecca Ferguson",
    "Plot": "A divorcee becomes entangled in a missing persons investigation that promises to send shockwaves throughout her life.",
    "Language": "English, Spanish",
    "Country": "United States, India",
    "Awards": "Nominated for 1 BAFTA Award4 wins & 13 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTg4MGViYTMtYTFkMC00YzVlLWExZDItOTM4NTUwMjc2NTE2XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "44%"
        },
        {
            "Source": "Metacritic",
            "Value": "48/100"
        }
    ],
    "Metascore": "48",
    "imdbRating": "6.5",
    "imdbVotes": "206,094",
    "imdbID": "tt3631112",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$75,395,035",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Danish Girl",
    "Year": "2015",
    "Rated": "R",
    "Released": "22 Jan 2016",
    "Runtime": "119 min",
    "Genre": "Biography, Drama",
    "Director": "Tom Hooper",
    "Writer": "Lucinda Coxon, David Ebershoff",
    "Actors": "Eddie Redmayne, Alicia Vikander, Amber Heard",
    "Plot": "A love story loosely inspired by the lives of Danish artists Lili Elbe and Gerda Wegener. Lili and Gerda's marriage and work evolve as they navigate Lili's groundbreaking journey as a transgender pioneer.",
    "Language": "English, French, German, Ukrainian",
    "Country": "United Kingdom, United States, Germany, Denmark, Belgium, Japan",
    "Awards": "Won 1 Oscar. 32 wins & 82 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0NjA4NjE2Nl5BMl5BanBnXkFtZTgwNzIxNTY2NjE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "66%"
        },
        {
            "Source": "Metacritic",
            "Value": "66/100"
        }
    ],
    "Metascore": "66",
    "imdbRating": "7.1",
    "imdbVotes": "204,119",
    "imdbID": "tt0810819",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$11,114,018",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Lars and the Real Girl",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "02 Nov 2007",
    "Runtime": "106 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Craig Gillespie",
    "Writer": "Nancy Oliver",
    "Actors": "Ryan Gosling, Emily Mortimer, Paul Schneider",
    "Plot": "A delusional young man strikes up an unconventional relationship with a doll he finds on the Internet.",
    "Language": "English, Spanish",
    "Country": "Canada, United States",
    "Awards": "Nominated for 1 Oscar. 7 wins & 36 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZThiOTA4N2UtNzJiYS00MDI0LWI3OWItYzYxYzU3M2YwM2M4XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "81%"
        },
        {
            "Source": "Metacritic",
            "Value": "70/100"
        }
    ],
    "Metascore": "70",
    "imdbRating": "7.3",
    "imdbVotes": "166,264",
    "imdbID": "tt0805564",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$5,972,884",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Mean Girls",
    "Year": "2004",
    "Rated": "PG-13",
    "Released": "30 Apr 2004",
    "Runtime": "97 min",
    "Genre": "Comedy",
    "Director": "Mark Waters",
    "Writer": "Rosalind Wiseman, Tina Fey",
    "Actors": "Lindsay Lohan, Jonathan Bennett, Rachel McAdams",
    "Plot": "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
    "Language": "English, German, Vietnamese, Swahili",
    "Country": "United States, Canada",
    "Awards": "7 wins & 25 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "84%"
        },
        {
            "Source": "Metacritic",
            "Value": "66/100"
        }
    ],
    "Metascore": "66",
    "imdbRating": "7.1",
    "imdbVotes": "481,631",
    "imdbID": "tt0377092",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$86,058,055",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Mean Streets",
    "Year": "1973",
    "Rated": "R",
    "Released": "14 Oct 1973",
    "Runtime": "112 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Martin Scorsese",
    "Writer": "Martin Scorsese, Mardik Martin",
    "Actors": "Robert De Niro, Harvey Keitel, David Proval",
    "Plot": "In New York City's Little Italy, a devoutly Catholic mobster must reconcile his desire for power, his feelings for his epileptic girlfriend, and his devotion to his troublesome friend.",
    "Language": "English, Italian, German, Yiddish",
    "Country": "United States",
    "Awards": "5 wins & 5 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWRlNDdiYWUtYjE1Zi00OWRhLWJiYTYtZWQ0NWFkYzc0NWMxXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "92%"
        },
        {
            "Source": "Metacritic",
            "Value": "96/100"
        }
    ],
    "Metascore": "96",
    "imdbRating": "7.2",
    "imdbVotes": "124,697",
    "imdbID": "tt0070379",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$32,645",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Mean Machine",
    "Year": "2001",
    "Rated": "R",
    "Released": "26 Dec 2001",
    "Runtime": "99 min",
    "Genre": "Comedy, Crime, Drama",
    "Director": "Barry Skolnick",
    "Writer": "Tracy Keenan Wynn, Charlie Fletcher, Chris Baker",
    "Actors": "Vinnie Jones, David Kelly, David Hemmings",
    "Plot": "A football star jailed for assault leads a group of inmates in a match against prison guards.",
    "Language": "English",
    "Country": "United Kingdom, United States",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWU5NjlkOTItMWQ2OS00YTQzLWFiYmQtZDVhYjIxYzIzNjMwXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "33%"
        },
        {
            "Source": "Metacritic",
            "Value": "45/100"
        }
    ],
    "Metascore": "45",
    "imdbRating": "6.4",
    "imdbVotes": "43,660",
    "imdbID": "tt0291341",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$92,770",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Mean Girls",
    "Year": "2024",
    "Rated": "PG-13",
    "Released": "12 Jan 2024",
    "Runtime": "112 min",
    "Genre": "Comedy, Musical",
    "Director": "Samantha Jayne, Arturo Perez Jr.",
    "Writer": "Tina Fey, Rosalind Wiseman",
    "Actors": "Angourie Rice, Reneé Rapp, Auli'i Cravalho",
    "Plot": "Cady Heron is a hit with the Plastics, an A-list girl clique at her new school. But everything changes when she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
    "Language": "English",
    "Country": "United States",
    "Awards": "1 win & 5 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzlhMTkxZWMtYzQwNi00OWI4LWI2ZGQtOWQ0OGM4NDlkYTdiXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "68%"
        },
        {
            "Source": "Metacritic",
            "Value": "58/100"
        }
    ],
    "Metascore": "58",
    "imdbRating": "5.5",
    "imdbVotes": "40,605",
    "imdbID": "tt11762114",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$72,581,770",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Mean Creek",
    "Year": "2004",
    "Rated": "R",
    "Released": "17 Sep 2004",
    "Runtime": "90 min",
    "Genre": "Crime, Drama",
    "Director": "Jacob Estes",
    "Writer": "Jacob Estes",
    "Actors": "Rory Culkin, Ryan Kelley, Scott Mechlowicz",
    "Plot": "When a teen is bullied, his brother and friends lure the bully into the woods to seek revenge.",
    "Language": "English",
    "Country": "United States",
    "Awards": "4 wins & 7 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGVjZDhkZDctODIyOS00YjQ3LTkwNWYtNzUyNzJiNzNiZmM0XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "88%"
        },
        {
            "Source": "Metacritic",
            "Value": "74/100"
        }
    ],
    "Metascore": "74",
    "imdbRating": "7.1",
    "imdbVotes": "33,692",
    "imdbID": "tt0377091",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$603,951",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Mean Girls 2",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "23 Jan 2011",
    "Runtime": "96 min",
    "Genre": "Comedy, Drama",
    "Director": "Melanie Mayron",
    "Writer": "Cliff Ruby, Elana Lesser, Allison Schroeder",
    "Actors": "Meaghan Martin, Donn Lamkin, Linden Ashby",
    "Plot": "The Plastics are back in the long-awaited follow-up to the smash hit Mean Girls - and now the clique is more fashionable, funny and ferocious than ever.",
    "Language": "English",
    "Country": "United States",
    "Awards": "1 win & 1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzMjUxNjQ3OF5BMl5BanBnXkFtZTcwMzgyMTkyNA@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.1/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.1",
    "imdbVotes": "27,202",
    "imdbID": "tt1679235",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Mean Season",
    "Year": "1985",
    "Rated": "R",
    "Released": "15 Feb 1985",
    "Runtime": "103 min",
    "Genre": "Crime, Thriller",
    "Director": "Phillip Borsos",
    "Writer": "John Katzenbach, Christopher Crowe",
    "Actors": "Kurt Russell, Mariel Hemingway, Richard Jordan",
    "Plot": "When a teenager is shot at the beach, a journalist from The Miami Journal is sent to cover the story. He's called by the murderer and told there'll be four more.",
    "Language": "English",
    "Country": "United States",
    "Awards": "1 win",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjY5ZTIzNmYtZjRhNi00MTc2LTlkN2MtMDE1ZTQ3NDJjMWVjXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "64%"
        },
        {
            "Source": "Metacritic",
            "Value": "55/100"
        }
    ],
    "Metascore": "55",
    "imdbRating": "6.1",
    "imdbVotes": "5,231",
    "imdbID": "tt0089572",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$4,349,446",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Mean Dreams",
    "Year": "2016",
    "Rated": "R",
    "Released": "17 Mar 2017",
    "Runtime": "108 min",
    "Genre": "Drama, Thriller",
    "Director": "Nathan Morlando",
    "Writer": "KC Coughlin, Ryan Grassby",
    "Actors": "Josh Wiggins, Sophie Nélisse, Joe Cobden",
    "Plot": "Follows Casey and Jonas, two teenagers desperate to escape their broken and abusive homes and examines the desperation of life on the run and the beauty of first love.",
    "Language": "English",
    "Country": "Canada",
    "Awards": "1 win & 5 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTlmZDJiZjItYzdkZS00ODI2LWE2ZGEtMGYxYjY3NTM4Mzk4XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "80%"
        },
        {
            "Source": "Metacritic",
            "Value": "64/100"
        }
    ],
    "Metascore": "64",
    "imdbRating": "6.3",
    "imdbVotes": "5,116",
    "imdbID": "tt5160928",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Mean Guns",
    "Year": "1997",
    "Rated": "R",
    "Released": "21 Nov 1997",
    "Runtime": "110 min",
    "Genre": "Action, Crime, Thriller",
    "Director": "Albert Pyun",
    "Writer": "Andrew Witham",
    "Actors": "Christopher Lambert, Ice-T, Michael Halsey",
    "Plot": "100 people, who have betrayed The Syndicate, are gathered in a prison opening the next day. They are given weapons and 6 hours to kill each other. The 3 remaining share $10,000,000.",
    "Language": "English",
    "Country": "United States",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjc5MjgyMjU3N15BMl5BanBnXkFtZTcwNDY4MzkxMQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.4/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.4",
    "imdbVotes": "4,951",
    "imdbID": "tt0119642",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}
    
];
  
  app.get("/", (req, res) => {
  res.send("Movie API Running");
});


// GET ALL MOVIES
app.get("/movies", (req, res) => {
    
  const { search, year } = req.query;

  let result = movies;

  if (search) {
    result = result.filter(movie =>
      movie.Title && movie.Title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (year) {
    result = result.filter(movie => movie.Year == year);
  }

  res.json(result);
});


// GET SINGLE MOVIE
app.get("/movies/:imdbID", (req, res) => {

  const movie = movies.find(m => m.imdbID == req.params.imdbID);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json(movie);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
