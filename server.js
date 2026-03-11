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
    "Year": "1975",
    "Rated": "Not Rated",
    "Released": "15 Aug 1975",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Ramesh Sippy",
    "Writer": "Javed Akhtar, Salim Khan",
    "Actors": "Sanjeev Kumar, Dharmendra, Amitabh Bachchan",
    "Plot": "After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws to capture the bandit.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "5 wins & 5 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmI1NTRmMWQtNDJlZC00MGIzLWEwYzctYTQwNTI2NWNjM2MwXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "95%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.1",
    "imdbVotes": "62,815",
    "imdbID": "tt0073707",
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
},{
    "Title": "Khiladi",
    "Year": "1992",
    "Rated": "Not Rated",
    "Released": "05 Jun 1992",
    "Runtime": "157 min",
    "Genre": "Action, Musical, Mystery",
    "Director": "Abbas Alibhai Burmawalla, Mastan Alibhai Burmawalla",
    "Writer": "Aadesh K. Arjun, Saroj Khan, Naeem-Ejaz",
    "Actors": "Akshay Kumar, Ayesha Jhulka, Deepak Tijori",
    "Plot": "Two friends wage bets for money and fun. There comes a time where they race to win the biggest bet, for they know that their lives depend on it.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 nomination",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzBkNTFmNzctZjEwMy00ZjgzLTlmN2QtYTJiOGI3NzIyNzUyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.1",
    "imdbVotes": "8,596",
    "imdbID": "tt0104605",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Khiladi 786",
    "Year": "2012",
    "Rated": "Not Rated",
    "Released": "07 Dec 2012",
    "Runtime": "141 min",
    "Genre": "Action, Comedy, Romance",
    "Director": "Ashish R. Mohan",
    "Writer": "Kushal Ved Bakshi, Bunty Rathore, Himesh Reshammiya",
    "Actors": "Akshay Kumar, Asin Thottumkal, Mithun Chakraborty",
    "Plot": "A father who runs a marriage bureau believes that his son is a failure in life. In order to prove him wrong, his son takes on the task of finding a match for a gangster's sister.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "7 wins & 1 nomination",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWEzOWMyODMtMzQ4Yy00ODMxLTllZWQtNjQ5YTAxNGZkNDE1XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "0%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.4",
    "imdbVotes": "8,030",
    "imdbID": "tt2166214",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$379,466",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Mr. & Mrs. Khiladi",
    "Year": "1997",
    "Rated": "Not Rated",
    "Released": "09 Oct 1997",
    "Runtime": "133 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "David Dhawan",
    "Writer": "Rumi Jaffery, E.V.V. Satyanarayana",
    "Actors": "Akshay Kumar, Juhi Chawla, Paresh Rawal",
    "Plot": "A slacker (Akshay Kumar) must impress a wealthy man to marry her daughter (Juhi Chawla).",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2YxNjM2MmYtZDhiZC00NTIyLWE2ZjgtMTZjZGJmNWM3MzkyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.3/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.3",
    "imdbVotes": "6,807",
    "imdbID": "tt0162480",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Main Khiladi Tu Anari",
    "Year": "1994",
    "Rated": "N/A",
    "Released": "23 Sep 1994",
    "Runtime": "175 min",
    "Genre": "Action, Comedy, Drama",
    "Director": "Sameer Malkan",
    "Writer": "Sachin Bhowmick, Kader Khan",
    "Actors": "Akshay Kumar, Saif Ali Khan, Shilpa Shetty Kundra",
    "Plot": "A Bombay police officer seeks revenge when his brother is killed by a powerful underworld figure. Things get complicated when a matinee movie idol begins to shadow the policeman so he can research a movie role.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "4 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTg1YmJlMmItMjcyNi00ODg3LTk0NGQtMDVkYmI1MGFhODFkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.5/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.5",
    "imdbVotes": "6,558",
    "imdbID": "tt0110438",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Khiladi",
    "Year": "2022",
    "Rated": "N/A",
    "Released": "11 Feb 2022",
    "Runtime": "154 min",
    "Genre": "Action, Crime, Thriller",
    "Director": "Ramesh Varma",
    "Writer": "Ramesh Varma, Srikanth Vissa, Sagar",
    "Actors": "Ravi Teja, Arjun Sarja, Unni Mukundan",
    "Plot": "A murder suspect escapes police custody due to criminologist Priya's misjudgment of her case for the thesis. Priya along with Arjun solves the mystery around the murder and money laundering which lead to the murder.",
    "Language": "Telugu",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjBhZWZhYzItYmNkYi00ZjhiLTljMGItMjlmMTQ2ODZkOTQyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.2/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.2",
    "imdbVotes": "3,882",
    "imdbID": "tt13299052",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "International Khiladi",
    "Year": "1999",
    "Rated": "Not Rated",
    "Released": "26 Mar 1999",
    "Runtime": "175 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Umesh Mehra",
    "Writer": "Umesh Mehra, Ved Prakash Sharma",
    "Actors": "Akshay Kumar, Twinkle Khanna, Rajat Bedi",
    "Plot": "A crime boss is accused by a reporter of murdering her brother and raping her. He investigates the frame-up.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk2MjA3OTU4M15BMl5BanBnXkFtZTcwMTU2ODgzMQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.8/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.8",
    "imdbVotes": "2,450",
    "imdbID": "tt0196635",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$47,238",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Khiladi 420",
    "Year": "2000",
    "Rated": "Not Rated",
    "Released": "29 Dec 2000",
    "Runtime": "157 min",
    "Genre": "Action, Romance, Thriller",
    "Director": "Neeraj Vora",
    "Writer": "Uttam Gada, Neeraj Vora",
    "Actors": "Akshay Kumar, Mahima Chaudhry, Antara Mali",
    "Plot": "Dev, a conman, gets killed by his wife Ritu, after she learns that the former is a debt-ridden thug who married her only to repay his debts. Her life turns upside down when she meets Anand, Dev's identical twin brother.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "3 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk2ODYzMTM4M15BMl5BanBnXkFtZTcwODY2ODgzMQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.2/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.2",
    "imdbVotes": "2,130",
    "imdbID": "tt0255305",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$26,731",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Ek Khiladi Ek Haseena",
    "Year": "2005",
    "Rated": "Not Rated",
    "Released": "18 Nov 2005",
    "Runtime": "143 min",
    "Genre": "Crime, Thriller",
    "Director": "Suparn Varma",
    "Writer": "Suparn Varma, Sudarshana Dwivedi",
    "Actors": "Fardeen Khan, Koena Mitra, Kay Kay Menon",
    "Plot": "Following his best friend's murder, a con-man finds himself plunged in debt against a feared gangster and assembles an eclectic bunch of fellow scamsters for a big job: 25 days, 25 crores.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 win",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDQxNzgxODgtY2NkYi00Mjg0LTkyY2YtOWE2ZjUyNDhjOGE0XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.7/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.7",
    "imdbVotes": "674",
    "imdbID": "tt0461209",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$90,869",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Jaani Dushman: Ek Anokhi Kahani",
    "Year": "2002",
    "Rated": "Not Rated",
    "Released": "16 Aug 2002",
    "Runtime": "170 min",
    "Genre": "Action, Fantasy, Horror",
    "Director": "Rajkumar Kohli",
    "Writer": "AbhishekSinha78, Naveena Bhandari, Ravi Shankar Jaiswal",
    "Actors": "Sunny Deol, Arman Kohli, Manisha Koirala",
    "Plot": "A shape-shifting snake exacts vengeance on a group of friends for a crime they did not even commit.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 nomination",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjc5MTljZmEtODE1Mi00MDdhLTk0MjMtODkyYmU0NzM5YWJlXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "2.7/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "2.7",
    "imdbVotes": "4,065",
    "imdbID": "tt0326983",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Dushman Duniya Ka",
    "Year": "1996",
    "Rated": "Not Rated",
    "Released": "20 Sep 1996",
    "Runtime": "153 min",
    "Genre": "Drama",
    "Director": "Mehmood, Tabrez Hashmi",
    "Writer": "Aziz Quaisi",
    "Actors": "Laila, Mehmood, Manzoor Ali",
    "Plot": "A social drama about the drug addiction among the youth and its adverse effects on their lives.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmY4ZjA3NzctNzA3Mi00M2FmLTgzZGMtMzZhODgxOGU1NDQwXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "3.9/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "3.9",
    "imdbVotes": "768",
    "imdbID": "tt0116153",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Main Tera Dushman",
    "Year": "1989",
    "Rated": "N/A",
    "Released": "03 Feb 1989",
    "Runtime": "155 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Vijay Reddy",
    "Writer": "Anwar Khan",
    "Actors": "Jackie Shroff, Jaya Prada, Sunny Deol",
    "Plot": "Honest and diligent Forest Officer Kishan Srivastav (Jackie Shroff) and his wife Jaya (Jaya Pradha) come to the rural area of Ramgarh, and upset the criminal activities of Thakur Dayalu (Anupam Kher), a corrupt Police Inspector Ki...",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzc5NzA3ZTktNWQxYS00NjkxLTkwZTgtYjZkOTgwOGRlNjJhXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.4/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.4",
    "imdbVotes": "108",
    "imdbID": "tt0097813",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Aulad Ke Dushman",
    "Year": "1993",
    "Rated": "Not Rated",
    "Released": "03 Dec 1993",
    "Runtime": "152 min",
    "Genre": "Drama",
    "Director": "Rajkumar Kohli",
    "Writer": "Lalit Mahajan",
    "Actors": "Vikas Anand, Harbans Darshan M. Arora, Raj Babbar",
    "Plot": "Rajan K. Choudhry is a wealthy industrialist. He lives in a palatial house with his older brother, and only son, Vikram. Vikram is a womanizer, alcoholic, and late party-goer, who has been handed everything on a silver plater by h...",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDgzYWYxMDAtNDdhYS00YjQxLTlmMmMtZDNlNzkwNzg1MDMxXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.2/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.2",
    "imdbVotes": "52",
    "imdbID": "tt0231197",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Dushman",
    "Year": "1990",
    "Rated": "Not Rated",
    "Released": "N/A",
    "Runtime": "146 min",
    "Genre": "Action, Drama",
    "Director": "Shakti Samanta",
    "Writer": "N/A",
    "Actors": "Mithun Chakraborty, Mandakini, Sadashiv Amrapurkar",
    "Plot": "Rakesh (a nickname \"Bullet\"), appeared the tool in hands of experienced gangsters, rises, not knowing that, on a way of the father which has decided to take justice in own hands and to revenge for family tragedy.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTczNDEyZmEtYWQ5OS00NWNjLTllODItYWNlMWQxZjFjYmI1XkEyXkFqcGdeQXVyMjU4NDY1ODA@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.9/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.9",
    "imdbVotes": "50",
    "imdbID": "tt0268273",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Go Goa Gone",
    "Year": "2013",
    "Rated": "Not Rated",
    "Released": "10 May 2013",
    "Runtime": "111 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Krishna D.K., Raj Nidimoru",
    "Writer": "Krishna D.K., Kunal Kemmu, Sita Menon",
    "Actors": "Saif Ali Khan, Kunal Kemmu, Vir Das",
    "Plot": "A group of friends, just looking to have a good time in a rave party on a remote island in Goa, find out that the island is infested with Zombies.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 win & 7 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmQ1NWI2M2MtOGVkNy00ZjViLWJiNmYtMjQ4NDA3YjNmZDczXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "71%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.7",
    "imdbVotes": "15,740",
    "imdbID": "tt2436516",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$298,457",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Hera Pheri",
    "Year": "2000",
    "Rated": "Not Rated",
    "Released": "31 Mar 2000",
    "Runtime": "156 min",
    "Genre": "Action, Comedy, Crime",
    "Director": "Priyadarshan",
    "Writer": "Siddique, Lal, Neeraj Vora",
    "Actors": "Akshay Kumar, Suniel Shetty, Paresh Rawal",
    "Plot": "Two tenants and a landlord look for answers to all their money problems - but when their opportunity arrives, will they know what to do with it?",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "8 wins & 6 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDZmMGEwMjQtNjFlNi00ZGIxLTlkZjItNmU3Mzg4Y2E0ZjUzXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.2/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.2",
    "imdbVotes": "75,076",
    "imdbID": "tt0242519",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Phir Hera Pheri",
    "Year": "2006",
    "Rated": "N/A",
    "Released": "09 Jun 2006",
    "Runtime": "153 min",
    "Genre": "Comedy, Crime",
    "Director": "Neeraj Vora",
    "Writer": "Neeraj Vora",
    "Actors": "Akshay Kumar, Suniel Shetty, Paresh Rawal",
    "Plot": "A twist of fate changes the lives of Raju, Shyam and Baburao when they get cheated by a fraudster. They must now find a way to repay a loan taken from a dreaded gangster.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "3 wins & 5 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTNkZTExMWYtMGZjMy00NGUwLWJmMWEtOThjYmZjY2Q0N2M5XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.3/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.3",
    "imdbVotes": "29,070",
    "imdbID": "tt0419058",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Bhagam Bhag",
    "Year": "2006",
    "Rated": "Not Rated",
    "Released": "22 Dec 2006",
    "Runtime": "157 min",
    "Genre": "Comedy, Drama, Mystery",
    "Director": "Priyadarshan",
    "Writer": "Neeraj Vora, Jay Master, Sarim Momin",
    "Actors": "Akshay Kumar, Govinda, Paresh Rawal",
    "Plot": "The members of a drama troupe fall in trouble when they are framed for a murder. Things go worse when they find their actress committing suicide, which is somehow linked with the murder.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyNmJjMDYtNTFjOS00NDA0LWI1NTMtNjc5NDRkZWQ2NjMyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.7/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.7",
    "imdbVotes": "16,253",
    "imdbID": "tt0805184",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$789,963",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Happy Phirr Bhag Jayegi",
    "Year": "2018",
    "Rated": "Not Rated",
    "Released": "24 Aug 2018",
    "Runtime": "136 min",
    "Genre": "Comedy",
    "Director": "Mudassar Aziz",
    "Writer": "Mudassar Aziz",
    "Actors": "Sonakshi Sinha, Diana Penty, Jimmy Shergill",
    "Plot": "Harpreet Kaur, a woman who travels to China to find her fiance, gets mistakenly kidnapped by some thugs whose assignment was to abduct another woman of the same name travelling by the same flight.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 win & 2 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWFkYzhmYTEtMjk3ZS00ZDhkLTliYTEtM2YyOTkxZTc3ZTNkXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "50%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.5",
    "imdbVotes": "1,518",
    "imdbID": "tt7881542",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$103,385",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Dan Da Dan: First Encounter",
    "Year": "2024",
    "Rated": "R",
    "Released": "13 Sep 2024",
    "Runtime": "83 min",
    "Genre": "Animation, Action, Comedy",
    "Director": "Fûga Yamashiro",
    "Writer": "Hiroshi Seko, Yukinobu Tatsu",
    "Actors": "Shion Wakayama, Natsuki Hanae, Mayumi Tanaka",
    "Plot": "Momo Ayase is a school girl who meets her classmate Ken Takakura (named after the actor). Their unlikely friendship will face them against ghosts and aliens in a series of dark and funny adventures.",
    "Language": "Japanese",
    "Country": "Japan",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmE4NGI0NWUtOGFmNS00Yzk4LWFjYWYtYjU2MTAxYTMxMGQ5XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.2/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.2",
    "imdbVotes": "2,690",
    "imdbID": "tt33343397",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "De Dana Dan",
    "Year": "2009",
    "Rated": "Not Rated",
    "Released": "27 Nov 2009",
    "Runtime": "162 min",
    "Genre": "Comedy, Crime",
    "Director": "Priyadarshan",
    "Writer": "Jay Master, Ashiesh Pandit, Priyadarshan",
    "Actors": "Akshay Kumar, Suniel Shetty, Katrina Kaif",
    "Plot": "Two down on their luck men tries to kidnap a wealthy businesswoman's dog to demand a hefty ransom from her. Things goes haywire when the dog goes missing.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "6 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGU3MDg5M2UtY2M5OC00NDE2LWIxYjEtMmVjNzIwMjZmNDYyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.9/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.9",
    "imdbVotes": "11,466",
    "imdbID": "tt1255951",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$944,979",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Chup Chup Ke",
    "Year": "2006",
    "Rated": "Not Rated",
    "Released": "09 Jun 2006",
    "Runtime": "164 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Priyadarshan, Kookie Gulati",
    "Writer": "Priyadarshan, Neeraj Vora, Meccartin",
    "Actors": "Shahid Kapoor, Kareena Kapoor, Om Puri",
    "Plot": "A debt-ridden young man attempts suicide, but is rescued only to find that his luck is finally turning.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg3MTMzNjUwOF5BMl5BanBnXkFtZTcwODgxODMzMQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.0/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.0",
    "imdbVotes": "13,541",
    "imdbID": "tt0464160",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$334,618",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Dhurandhar",
    "Year": "2025",
    "Rated": "N/A",
    "Released": "05 Dec 2025",
    "Runtime": "214 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Aditya Dhar",
    "Writer": "Aditya Dhar, Ojas Gautam, Shivkumar V. Panicker",
    "Actors": "Ranveer Singh, Akshaye Khanna, Sanjay Dutt",
    "Plot": "A mysterious traveler slips into the heart of Karachi's underbelly and rises through its ranks with lethal precision, only to tear the notorious ISI-Underworld nexus apart from within.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "15 wins & 15 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzFiNTVkZjYtM2I3Yi00MGNjLWEyYTAtMGViNGExZmMzMGMzXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.3/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.3",
    "imdbVotes": "118,730",
    "imdbID": "tt33014583",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$19,702,994",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Dhurandhar: The Revenge",
    "Year": "2026",
    "Rated": "N/A",
    "Released": "19 Mar 2026",
    "Runtime": "N/A",
    "Genre": "Action, Thriller",
    "Director": "Aditya Dhar",
    "Writer": "N/A",
    "Actors": "Ranveer Singh, Sara Arjun, Rakesh Bedi",
    "Plot": "Hamza Ali Mazari, whose real identity is Jaskirat Singh Rangi, pursues his undercover operation within Pakistan's criminal world while tracking down Majo.",
    "Language": "Hindi, Telugu, Tamil, Kannada, Malayalam",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTU1Zjk4MTYtMjc2YS00NjI5LWJkOWEtMjJlOGQ0ZTVjNmFjXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [],
    "Metascore": "N/A",
    "imdbRating": "N/A",
    "imdbVotes": "N/A",
    "imdbID": "tt39139925",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "3 Idiots",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "25 Dec 2009",
    "Runtime": "170 min",
    "Genre": "Comedy, Drama",
    "Director": "Rajkumar Hirani",
    "Writer": "Abhijat Joshi, Rajkumar Hirani, Vidhu Vinod Chopra",
    "Actors": "Aamir Khan, Madhavan, Mona Singh",
    "Plot": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\".",
    "Language": "Hindi, English",
    "Country": "India",
    "Awards": "64 wins & 30 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "100%"
        },
        {
            "Source": "Metacritic",
            "Value": "67/100"
        }
    ],
    "Metascore": "67",
    "imdbRating": "8.4",
    "imdbVotes": "474,710",
    "imdbID": "tt1187043",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$6,532,874",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Game of Thrones",
    "Year": "2011–2019",
    "Rated": "TV-MA",
    "Released": "17 Apr 2011",
    "Runtime": "57 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "N/A",
    "Writer": "David Benioff, D.B. Weiss",
    "Actors": "Emilia Clarke, Peter Dinklage, Kit Harington",
    "Plot": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    "Language": "English",
    "Country": "United States, United Kingdom",
    "Awards": "Won 59 Primetime Emmys. 396 wins & 655 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "9.2/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "9.2",
    "imdbVotes": "2,535,509",
    "imdbID": "tt0944947",
    "Type": "series",
    "totalSeasons": "8",
    "Response": "True"
},{
    "Title": "The Imitation Game",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "25 Dec 2014",
    "Runtime": "114 min",
    "Genre": "Biography, Drama, Thriller",
    "Director": "Morten Tyldum",
    "Writer": "Graham Moore, Andrew Hodges",
    "Actors": "Benedict Cumberbatch, Keira Knightley, Matthew Goode",
    "Plot": "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life.",
    "Language": "English, German",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 49 wins & 167 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "90%"
        },
        {
            "Source": "Metacritic",
            "Value": "71/100"
        }
    ],
    "Metascore": "71",
    "imdbRating": "8.0",
    "imdbVotes": "872,710",
    "imdbID": "tt2084970",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$91,125,683",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Squid Game",
    "Year": "2021–2025",
    "Rated": "TV-MA",
    "Released": "17 Sep 2021",
    "Runtime": "N/A",
    "Genre": "Action, Crime, Drama",
    "Director": "N/A",
    "Writer": "Hwang Dong-hyuk",
    "Actors": "Lee Jung-jae, Wi Ha-joon, Halley Kim",
    "Plot": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. A tempting prize awaits, but with deadly high stakes.",
    "Language": "Korean, English, Urdu",
    "Country": "South Korea",
    "Awards": "Won 6 Primetime Emmys. 55 wins & 90 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTU3ZDVhNmMtMDVlNC00MDc0LTgwNDMtYWE5MTI2ZGI4YWIwXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.9/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.9",
    "imdbVotes": "746,739",
    "imdbID": "tt10919420",
    "Type": "series",
    "totalSeasons": "3",
    "Response": "True"
},{
    "Title": "Sherlock Holmes: A Game of Shadows",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "16 Dec 2011",
    "Runtime": "129 min",
    "Genre": "Action, Adventure, Mystery",
    "Director": "Guy Ritchie",
    "Writer": "Michele Mulroney, Kieran Mulroney, Arthur Conan Doyle",
    "Actors": "Robert Downey Jr., Jude Law, Jared Harris",
    "Plot": "Detective Sherlock Holmes is on the trail of criminal mastermind Professor Moriarty, who is carrying out a string of random crimes across Europe.",
    "Language": "English, Romany, German, Italian, French",
    "Country": "United States",
    "Awards": "3 wins & 10 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "60%"
        },
        {
            "Source": "Metacritic",
            "Value": "48/100"
        }
    ],
    "Metascore": "48",
    "imdbRating": "7.4",
    "imdbVotes": "498,829",
    "imdbID": "tt1515091",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$186,848,418",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Game",
    "Year": "1997",
    "Rated": "R",
    "Released": "12 Sep 1997",
    "Runtime": "129 min",
    "Genre": "Drama, Mystery, Thriller",
    "Director": "David Fincher",
    "Writer": "John Brancato, Michael Ferris",
    "Actors": "Michael Douglas, Deborah Kara Unger, Sean Penn",
    "Plot": "A mysterious game invades a man's ordered existence.",
    "Language": "English, Cantonese, German, Spanish, Thai",
    "Country": "United States",
    "Awards": "1 nomination total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGUzNzQwNmMtNzI3Mi00ZDIwLWJlM2ItMTA5N2Q2ZDMxMjJiXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "77%"
        },
        {
            "Source": "Metacritic",
            "Value": "63/100"
        }
    ],
    "Metascore": "63",
    "imdbRating": "7.7",
    "imdbVotes": "465,745",
    "imdbID": "tt0119174",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$48,323,648",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Game Night",
    "Year": "2018",
    "Rated": "R",
    "Released": "23 Feb 2018",
    "Runtime": "100 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "John Francis Daley, Jonathan Goldstein",
    "Writer": "Mark Perez",
    "Actors": "Jason Bateman, Rachel McAdams, Kyle Chandler",
    "Plot": "A group of friends who meet regularly for game nights find themselves entangled in a real-life mystery when the shady brother of one of them is seemingly kidnapped by dangerous gangsters.",
    "Language": "English",
    "Country": "United States",
    "Awards": "4 wins & 22 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.9/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        },
        {
            "Source": "Metacritic",
            "Value": "66/100"
        }
    ],
    "Metascore": "66",
    "imdbRating": "6.9",
    "imdbVotes": "275,804",
    "imdbID": "tt2704998",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$69,268,230",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Ender's Game",
    "Year": "2013",
    "Rated": "PG-13",
    "Released": "01 Nov 2013",
    "Runtime": "114 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Gavin Hood",
    "Writer": "Gavin Hood, Orson Scott Card",
    "Actors": "Harrison Ford, Asa Butterfield, Hailee Steinfeld",
    "Plot": "Young Ender Wiggin is recruited by the International Military to lead the fight against the Formics, an insectoid alien race who had previously tried to invade Earth and had inflicted heavy losses on humankind.",
    "Language": "English, Arabic, Spanish",
    "Country": "United States",
    "Awards": "1 win & 6 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "63%"
        },
        {
            "Source": "Metacritic",
            "Value": "51/100"
        }
    ],
    "Metascore": "51",
    "imdbRating": "6.6",
    "imdbVotes": "263,151",
    "imdbID": "tt1731141",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$61,737,191",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Molly's Game",
    "Year": "2017",
    "Rated": "R",
    "Released": "05 Jan 2018",
    "Runtime": "140 min",
    "Genre": "Biography, Crime, Drama",
    "Director": "Aaron Sorkin",
    "Writer": "Aaron Sorkin, Molly Bloom",
    "Actors": "Jessica Chastain, Idris Elba, Kevin Costner",
    "Plot": "The true story of Molly Bloom, an Olympic-class skier who ran the world's most exclusive high-stakes poker game and became an FBI target.",
    "Language": "English, French",
    "Country": "United States, Canada, China",
    "Awards": "Nominated for 1 Oscar. 8 wins & 51 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmYxYTg1ZDktNjc1Yy00MjVlLTk2Y2MtNmMzZTBkZDNjZjdlXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "82%"
        },
        {
            "Source": "Metacritic",
            "Value": "71/100"
        }
    ],
    "Metascore": "71",
    "imdbRating": "7.4",
    "imdbVotes": "199,224",
    "imdbID": "tt4209788",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$28,780,744",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Spy Game",
    "Year": "2001",
    "Rated": "R",
    "Released": "21 Nov 2001",
    "Runtime": "126 min",
    "Genre": "Action, Crime, Thriller",
    "Director": "Tony Scott",
    "Writer": "Michael Frost Beckner, David Arata",
    "Actors": "Robert Redford, Brad Pitt, Catherine McCormack",
    "Plot": "A CIA agent tries to rescue his one-time protege who awaits execution in a Chinese prison.",
    "Language": "English, German, Arabic, French, Cantonese",
    "Country": "United Kingdom, France, Germany, Japan, United States",
    "Awards": "3 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTljZmI1MjctMWJmMC00ZjJmLTkwNzUtNGQxNWJhZGRjMjM3XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "64%"
        },
        {
            "Source": "Metacritic",
            "Value": "63/100"
        }
    ],
    "Metascore": "63",
    "imdbRating": "7.1",
    "imdbVotes": "177,136",
    "imdbID": "tt0266987",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$62,362,560",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Gerald's Game",
    "Year": "2017",
    "Rated": "TV-MA",
    "Released": "29 Sep 2017",
    "Runtime": "103 min",
    "Genre": "Drama, Horror, Thriller",
    "Director": "Mike Flanagan",
    "Writer": "Mike Flanagan, Jeff Howard, Stephen King",
    "Actors": "Carla Gugino, Bruce Greenwood, Chiara Aurelia",
    "Plot": "A couple tries to spice up their marriage in a remote lake house. After the husband dies unexpectedly, the wife is left handcuffed to their bed frame and must fight to survive and break free.",
    "Language": "English",
    "Country": "United States",
    "Awards": "4 wins & 5 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDA2ZjU5ZWMtMmQ4OS00ZTQzLWIwOWMtYTBmOTljYTIwNjM3XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "91%"
        },
        {
            "Source": "Metacritic",
            "Value": "77/100"
        }
    ],
    "Metascore": "77",
    "imdbRating": "6.5",
    "imdbVotes": "140,266",
    "imdbID": "tt3748172",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Garam Masala",
    "Year": "2005",
    "Rated": "Not Rated",
    "Released": "03 Nov 2005",
    "Runtime": "146 min",
    "Genre": "Comedy, Romance",
    "Director": "Priyadarshan",
    "Writer": "Priyadarshan, Neeraj Vora, Jay Master",
    "Actors": "Akshay Kumar, John Abraham, Paresh Rawal",
    "Plot": "A rib tickling tale of two flirts who constantly flirt with women despite one of them being engaged. Chaos ensues when the fiancé finds out that her to-be groom is cheating on her.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "3 wins & 5 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjQ5YmIxNWMtZDkxYy00YjYwLWIwYWYtZGQ3OGRkNDY3Y2E3XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.8/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.8",
    "imdbVotes": "18,598",
    "imdbID": "tt0453671",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$1,007,943",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Kissing Booth",
    "Year": "2018",
    "Rated": "TV-14",
    "Released": "11 May 2018",
    "Runtime": "105 min",
    "Genre": "Comedy, Romance",
    "Director": "Vince Marcello",
    "Writer": "Vince Marcello, Beth Reekles",
    "Actors": "Joey King, Jacob Elordi, Joel Courtney",
    "Plot": "A high school student is forced to confront her secret crush at a kissing booth.",
    "Language": "English",
    "Country": "United Kingdom, United States",
    "Awards": "1 win & 2 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.9/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "17%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.9",
    "imdbVotes": "102,962",
    "imdbID": "tt3799232",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Kissing Booth 2",
    "Year": "2020",
    "Rated": "TV-14",
    "Released": "24 Jul 2020",
    "Runtime": "134 min",
    "Genre": "Comedy, Romance",
    "Director": "Vince Marcello",
    "Writer": "Vince Marcello, Jay S Arnold, Beth Reekles",
    "Actors": "Joey King, Joel Courtney, Jacob Elordi",
    "Plot": "In the sequel to 2018's The Kissing Booth', high school senior Elle juggles a long-distance relationship with her dreamy boyfriend Noah, college applications, and a new friendship with a handsome classmate that could change everyt...",
    "Language": "English",
    "Country": "United Kingdom, United States",
    "Awards": "2 wins total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2IzODA4YTktZDkwOS00MTRkLWE3NjgtYjMwZTFlNTBhNjhjXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.7/10"
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
    "imdbRating": "5.7",
    "imdbVotes": "43,289",
    "imdbID": "tt9784456",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Kissing Booth 3",
    "Year": "2021",
    "Rated": "TV-14",
    "Released": "11 Aug 2021",
    "Runtime": "112 min",
    "Genre": "Comedy, Romance",
    "Director": "Vince Marcello",
    "Writer": "Beth Reekles, Vince Marcello, Jay S Arnold",
    "Actors": "Joey King, Joel Courtney, Jacob Elordi",
    "Plot": "It's the summer before Elle Evans is set to head off to college, and she has a big decision to make.",
    "Language": "English",
    "Country": "United Kingdom, United States",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWQyMTJiZWYtNzQ2Mi00Y2E1LThmNzgtNGU0ZjQ3NTg5YWRhXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "25%"
        },
        {
            "Source": "Metacritic",
            "Value": "36/100"
        }
    ],
    "Metascore": "36",
    "imdbRating": "4.8",
    "imdbVotes": "26,511",
    "imdbID": "tt12783454",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Golmaal 3",
    "Year": "2010",
    "Rated": "Not Rated",
    "Released": "05 Nov 2010",
    "Runtime": "155 min",
    "Genre": "Action, Comedy, Drama",
    "Director": "Rohit Shetty",
    "Writer": "Bunty Rathore, Yunus Sajawal, Sajid",
    "Actors": "Mithun Chakraborty, Ajay Devgn, Kareena Kapoor",
    "Plot": "In Goa, Pritam meets his love Geeta after many years. They decide to get married but the feud between their respective children creates tension in their marriage.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "9 wins & 22 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmEyM2M5OTItYjU1Ni00Mjk2LTgzZTMtOGZhZGU4MTA2MzcxXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "44%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.6",
    "imdbVotes": "10,063",
    "imdbID": "tt1562859",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$1,132,192",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Golmaal Returns",
    "Year": "2008",
    "Rated": "Not Rated",
    "Released": "29 Oct 2008",
    "Runtime": "135 min",
    "Genre": "Comedy, Crime, Mystery",
    "Director": "Rohit Shetty",
    "Writer": "Indie, Rumi Jaffery, Ashiesh Pandit",
    "Actors": "Ajay Devgn, Kareena Kapoor, Arshad Warsi",
    "Plot": "A man is sandwiched between his over possessive wife and a police inspector, where he is suspected for adultery and murder.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "3 wins & 6 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjdlYjIyZmQtODdjNC00ZmU1LTkxMjctZDI2ODhiMGQ3YWMzXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "0%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.3",
    "imdbVotes": "10,094",
    "imdbID": "tt1092005",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Golmaal Again",
    "Year": "2017",
    "Rated": "Not Rated",
    "Released": "20 Oct 2017",
    "Runtime": "140 min",
    "Genre": "Action, Comedy, Horror",
    "Director": "Rohit Shetty",
    "Writer": "Rohit Shetty, Yunus Sajawal, Farhad Samji",
    "Actors": "Ajay Devgn, Arshad Warsi, Tabu",
    "Plot": "The gang encounters with some spiritual bodies and finds out the truth about the Jamnadas Orphanage where they were brought up.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "5 wins & 7 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDljYzk0MzgtY2ZlMi00MjQ1LTk0MzYtZGFiZjdiM2VkMWU3XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "50%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.0",
    "imdbVotes": "11,032",
    "imdbID": "tt1806913",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$1,013,893",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Golmaal: Fun Unlimited",
    "Year": "2006",
    "Rated": "N/A",
    "Released": "14 Jul 2006",
    "Runtime": "150 min",
    "Genre": "Action, Comedy, Drama",
    "Director": "Rohit Shetty",
    "Writer": "Neeraj Vora",
    "Actors": "Ajay Devgn, Arshad Warsi, Sharman Joshi",
    "Plot": "Four runaway crooks take shelter in a bungalow which is owned by a blind couple.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "2 wins & 8 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWMwZTM3YzEtNzgzMi00YmI3LTkxN2EtZDY1OGM0MDQ2Y2NkXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.5/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.5",
    "imdbVotes": "19,937",
    "imdbID": "tt0495034",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Dhol",
    "Year": "2007",
    "Rated": "N/A",
    "Released": "14 Sep 2007",
    "Runtime": "145 min",
    "Genre": "Comedy, Crime, Mystery",
    "Director": "Priyadarshan, Aman Ullah",
    "Writer": "Manisha Korde, Suresh Krishnan, Ram Patil",
    "Actors": "Sharman Joshi, Tusshar Kapoor, Kunal Kemmu",
    "Plot": "Four lazy friends try to woo a rich girl, in order to live a wealthy lifestyle. Their plan, however goes horribly wrong after they get embroiled with a notorious criminal.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 nomination",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzk3MDk1NzEtMzI4Yy00YmVhLTg3NzUtYjhlMTJkM2VhZGEwXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.5/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.5",
    "imdbVotes": "8,030",
    "imdbID": "tt0995035",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "The Boys",
    "Year": "2019–2026",
    "Rated": "TV-MA",
    "Released": "26 Jul 2019",
    "Runtime": "31S min",
    "Genre": "Action, Comedy, Crime",
    "Director": "N/A",
    "Writer": "Eric Kripke",
    "Actors": "Karl Urban, Jack Quaid, Antony Starr",
    "Plot": "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 4 Primetime Emmys. 26 wins & 96 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGRlZDE2ZGEtZTU5Mi00ODdkLWFmMTEtY2UwMmViNWNmZjczXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.6/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.6",
    "imdbVotes": "832,322",
    "imdbID": "tt1190634",
    "Type": "series",
    "totalSeasons": "5",
    "Response": "True"
},{
    "Title": "Breaking Bad",
    "Year": "2008–2013",
    "Rated": "TV-MA",
    "Released": "20 Jan 2008",
    "Runtime": "49 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "N/A",
    "Writer": "Vince Gilligan",
    "Actors": "Bryan Cranston, Aaron Paul, Anna Gunn",
    "Plot": "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family's future.",
    "Language": "English, Spanish",
    "Country": "United States",
    "Awards": "Won 16 Primetime Emmys. 172 wins & 269 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "9.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "96%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "9.5",
    "imdbVotes": "2,486,656",
    "imdbID": "tt0903747",
    "Type": "series",
    "totalSeasons": "5",
    "Response": "True"
},{
    "Title": "Ek Hi Bhool",
    "Year": "1981",
    "Rated": "N/A",
    "Released": "09 Oct 1981",
    "Runtime": "144 min",
    "Genre": "Drama, Family, Romance",
    "Director": "Rama Rao Tatineni",
    "Writer": "Bhagyaraj, Rahi Masoom Reza",
    "Actors": "Jeetendra, Rekha, Nazneen",
    "Plot": "Sadhana (Rekha) and Ramkumar (Jeetendra) are a married couple. Their marriage gets into troubled waters when Sadhana starts to suspect that Ramkumar is having an affair. Sadhana does not handle the matter properly, and drives him ...",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThiN2IwY2QtN2Y2NS00OGUwLTgyNTAtMjJhZTcyYTI3NDQzXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.0/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.0",
    "imdbVotes": "186",
    "imdbID": "tt0259996",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Tumko Na Bhool Paayenge",
    "Year": "2002",
    "Rated": "N/A",
    "Released": "22 Feb 2002",
    "Runtime": "160 min",
    "Genre": "Action, Comedy, Crime",
    "Director": "Pankaj Parashar",
    "Writer": "Girish, Girish, Rumi Jaffery",
    "Actors": "Pankaj Dheer, Arbaaz Khan, Salman Khan",
    "Plot": "An amnesiac Hindu man remembers his past as a Muslim sharpshooter and an assassin.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzAxYzExZjEtYjE4MC00Yzk0LTkwYTEtYTI1OWM5YTRhOGQ5XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.7/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.7",
    "imdbVotes": "3,661",
    "imdbID": "tt0310254",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Bhool Chuk Maaf",
    "Year": "2025",
    "Rated": "N/A",
    "Released": "23 May 2025",
    "Runtime": "140 min",
    "Genre": "Comedy, Fantasy, Romance",
    "Director": "Karan Sharma",
    "Writer": "Karan Sharma, Haider Rizvi",
    "Actors": "Rajkummar Rao, Wamiqa Gabbi, Sanjay Mishra",
    "Plot": "Ranjan, a small-town romantic boy from Banaras, lands a government job to marry Titli but forgets his vow to Lord Shiva-only to be trapped until he fulfills his promise. A hilarious tale of love, fate, and redemption unfolds.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 nomination total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjlhZTI1YmEtZDMyYi00YTM5LWI4ZGEtMzYwMjYxZjUyNzQzXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "27%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.8",
    "imdbVotes": "22,799",
    "imdbID": "tt32058735",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Bhool Bhulaiyaa 2",
    "Year": "2022",
    "Rated": "N/A",
    "Released": "20 May 2022",
    "Runtime": "143 min",
    "Genre": "Comedy, Horror",
    "Director": "Anees Bazmee",
    "Writer": "Aakash Kaushik, Farhad Samji",
    "Actors": "Tabu, Kartik Aaryan, Kiara Advani",
    "Plot": "When strangers Reet and Ruhan cross paths, their journey leads to an abandoned mansion and a dreaded spirit that has been trapped for 18 years.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "10 wins & 35 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTZhY2NjMGItODAyOS00MGVlLTk5ZDYtNzBjMjQ3ZDdkYmZmXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "63%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.7",
    "imdbVotes": "35,287",
    "imdbID": "tt6455162",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Bhool Bhulaiyaa",
    "Year": "2007",
    "Rated": "Not Rated",
    "Released": "12 Oct 2007",
    "Runtime": "159 min",
    "Genre": "Comedy, Horror, Mystery",
    "Director": "Priyadarshan",
    "Writer": "Neeraj Vora, Manisha Korde, Madhu Muttam",
    "Actors": "Akshay Kumar, Vidya Balan, Shiney Ahuja",
    "Plot": "An NRI and his wife decide to stay in his ancestral home, paying no heed to the warnings about ghosts. Soon, inexplicable occurrences cause him to call a psychiatrist to help solve the mystery.",
    "Language": "Hindi, Bengali",
    "Country": "India",
    "Awards": "1 win & 13 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGI1Y2UwNmQtMmE4MS00ZmVhLTg3YzgtYTg3NGUzOTI5NjdjXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "33%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.5",
    "imdbVotes": "37,026",
    "imdbID": "tt0995031",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$1,097,797",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Bhool Bhulaiyaa 3",
    "Year": "2024",
    "Rated": "N/A",
    "Released": "01 Nov 2024",
    "Runtime": "158 min",
    "Genre": "Comedy, Fantasy, Horror",
    "Director": "Anees Bazmee",
    "Writer": "Aakash Kaushik",
    "Actors": "Kartik Aaryan, Vidya Balan, Madhuri Dixit",
    "Plot": "Ruhaan, a fraudster posing as an exorcist, takes on a lucrative case at a haunted castle, unraveling a sinister plot involving mischievous priests, culminating in a hilarious yet thrilling ride filled with unexpected twists and sc...",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "13 wins & 25 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGFhMDQ4MzMtMTUxOC00NDE0LTkzZWMtMzhhMGNiMDlhNDNmXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "38%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.6",
    "imdbVotes": "78,646",
    "imdbID": "tt26932223",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$2,230,000",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Lost Ladies",
    "Year": "2023",
    "Rated": "TV-14",
    "Released": "01 Mar 2024",
    "Runtime": "122 min",
    "Genre": "Comedy, Drama",
    "Director": "Kiran Rao",
    "Writer": "Biplab Goswami, Sneha Desai, Divy Nidhi Sharma",
    "Actors": "Nitanshi Goel, Pratibha Ranta, Sparsh Shrivastava",
    "Plot": "The misadventures of two young brides who get lost from the same train. From mistaken identities to laugh-out-aloud escapades, the ensuing chaos guarantees laughter galore and heartwarming moments.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "66 wins & 63 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGI5NzVmNDktZWY2Ni00ZGMwLTlhMzctNzJhYTgzZmQ2ZjNjXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "100%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.3",
    "imdbVotes": "58,723",
    "imdbID": "tt21626284",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Munjya",
    "Year": "2024",
    "Rated": "N/A",
    "Released": "07 Jun 2024",
    "Runtime": "123 min",
    "Genre": "Comedy, Horror",
    "Director": "Aditya Sarpotdar",
    "Writer": "Niren Bhatt, Yogesh Chandekar, Tushar Ajgaonkar",
    "Actors": "Sharvari, Abhay Verma, Mona Singh",
    "Plot": "A young man's visit to his native village unveils a family secret and a vengeful spirit, the Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya's clutches.",
    "Language": "Hindi, Tamil, Telugu",
    "Country": "India",
    "Awards": "2 wins",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGY4OTA3OWEtZjYxYy00YTBlLWJmYzEtNzM0NDliYzA5OGYwXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "56%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.4",
    "imdbVotes": "23,385",
    "imdbID": "tt27995594",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Stree",
    "Year": "2018",
    "Rated": "Not Rated",
    "Released": "31 Aug 2018",
    "Runtime": "128 min",
    "Genre": "Comedy, Horror",
    "Director": "Amar Kaushik",
    "Writer": "Raj Nidimoru, Krishna D.K., Sumit Arora",
    "Actors": "Rajkummar Rao, Shraddha Kapoor, Pankaj Tripathi",
    "Plot": "In the small town of Chanderi, the menfolk live in fear of an evil spirit named \"Stree\" who abducts men in the night. Based on the urban legend of \"Nale Ba\" that went viral in Karnataka in the 1990s.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "12 wins & 31 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODhiZjI1MDMtZjFjOS00NjZiLWI5N2YtZTM2NWIxNmE3MjMzXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "80%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.5",
    "imdbVotes": "43,429",
    "imdbID": "tt8108202",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Stree 2: Sarkate Ka Aatank",
    "Year": "2024",
    "Rated": "N/A",
    "Released": "16 Aug 2024",
    "Runtime": "147 min",
    "Genre": "Comedy, Horror",
    "Director": "Amar Kaushik",
    "Writer": "Niren Bhatt, Krishna D.K., Raj Nidimoru",
    "Actors": "Rajkummar Rao, Shraddha Kapoor, Pankaj Tripathi",
    "Plot": "After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it's up to Vicky and his friends to save their town and loved ones.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "32 wins & 52 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTA1NmUxYzItZmVmNy00YmQxLTk4Y2UtZjVkMWUwMWQ5N2IxXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.9/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "57%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.9",
    "imdbVotes": "46,160",
    "imdbID": "tt27510174",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$2,570,000",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Bhediya",
    "Year": "2022",
    "Rated": "Not Rated",
    "Released": "25 Nov 2022",
    "Runtime": "156 min",
    "Genre": "Comedy, Horror, Thriller",
    "Director": "Amar Kaushik",
    "Writer": "Niren Bhatt",
    "Actors": "Varun Dhawan, Kriti Sanon, Abhishek Banerjee",
    "Plot": "Set in the forests of Arunachal, Bhediya is a story of Bhaskar, a man who gets bitten by a wolf, and begins to transform into the creature. As Bhaskar and his buddies try to find answers, a bunch of twists, turns, and laughs ensue.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "5 wins & 34 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTIxYjUxMTAtNDM5Zi00ZWU1LThhZDMtNDU5ZjEwMzhjMzVmXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "62%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.7",
    "imdbVotes": "26,585",
    "imdbID": "tt14099334",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Sufna",
    "Year": "2020",
    "Rated": "N/A",
    "Released": "14 Feb 2020",
    "Runtime": "144 min",
    "Genre": "Romance",
    "Director": "Jagdeep Sidhu, Jugraj Singh",
    "Writer": "Jagdeep Sidhu",
    "Actors": "Ammy Virk, Tania, Jagjeet Sandhu",
    "Plot": "Jeet is a free-spirited youth in the village, he doesn't care or has not any goal in the life. But his life changes, when he meets Teg, a beautiful young girl from another village.",
    "Language": "Punjabi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWY4YzViZTUtMzlkNy00YzA1LWI5MDctOTViNGQyMmMxMzNmXkEyXkFqcGdeQXVyMjUxNjcxMjU@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.0/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.0",
    "imdbVotes": "2,257",
    "imdbID": "tt11173106",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Veer",
    "Year": "2010",
    "Rated": "Not Rated",
    "Released": "22 Jan 2010",
    "Runtime": "169 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Anil Sharma",
    "Writer": "Shailesh Verma, Shaktimaan Talwar, Salman Khan",
    "Actors": "Salman Khan, Mithun Chakraborty, Jackie Shroff",
    "Plot": "Prithvi seeks revenge on Gyanendra Singh and the British. He sends his son Veer to Britain to study their plans. Veer kills Gyanendra's son but ends up falling in love with his daughter.",
    "Language": "Hindi, Urdu",
    "Country": "India",
    "Awards": "5 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2E1MjAxYWQtODQwYS00ODliLWFiMGQtNTgyODYyMmQyNzExXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "40%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.6",
    "imdbVotes": "8,900",
    "imdbID": "tt1185412",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$527,193",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Swatantrya Veer Savarkar",
    "Year": "2024",
    "Rated": "N/A",
    "Released": "22 Mar 2024",
    "Runtime": "176 min",
    "Genre": "Biography, Drama",
    "Director": "Randeep Hooda",
    "Writer": "Randeep Hooda, Utkarsh Naithani",
    "Actors": "Randeep Hooda, Ankita Lokhande, Apinderdeep Singh",
    "Plot": "The life journey of Indian freedom fighter and reformer Vinayak Damodar Savarkar, popularly known as Veer Savarkar.",
    "Language": "Hindi, Marathi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjI4N2E5YTYtMDhlZC00OGU5LThhMjYtYjY1OTI4OGQ1ZTNhXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "14%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.7",
    "imdbVotes": "16,879",
    "imdbID": "tt14753612",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Highway",
    "Year": "2014",
    "Rated": "Not Rated",
    "Released": "21 Feb 2014",
    "Runtime": "133 min",
    "Genre": "Crime, Drama, Romance",
    "Director": "Imtiaz Ali",
    "Writer": "Imtiaz Ali",
    "Actors": "Alia Bhatt, Randeep Hooda, Durgesh Kumar",
    "Plot": "Right before her wedding, a young woman finds herself abducted and held for ransom. As the initial days pass, she begins to develop a strange bond with her kidnapper.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "10 wins & 27 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NjkyNTczM15BMl5BanBnXkFtZTgwNDg4MzE5MDE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "88%"
        },
        {
            "Source": "Metacritic",
            "Value": "40/100"
        }
    ],
    "Metascore": "40",
    "imdbRating": "7.6",
    "imdbVotes": "31,758",
    "imdbID": "tt2980794",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$529,136",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Ikk Kudi",
    "Year": "2025",
    "Rated": "N/A",
    "Released": "19 Sep 2025",
    "Runtime": "150 min",
    "Genre": "N/A",
    "Director": "Amarjit Singh Saron",
    "Writer": "Amarjit Singh Saron, Davinder Virk",
    "Actors": "Shehnaaz Gill, Juss, Udaybir Sandhu",
    "Plot": "A woman from a family of broken hearts starts doubting her arranged marriage match and embarks on a quest to uncover her fiancé's mysterious past.",
    "Language": "Punjabi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTVjYWVmZTMtYjBlYy00YmU2LWI3OTgtOGUwZWU0YTIzNmEyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.8",
    "imdbVotes": "384",
    "imdbID": "tt35063604",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "How to Train Your Dragon",
    "Year": "2010",
    "Rated": "PG",
    "Released": "26 Mar 2010",
    "Runtime": "98 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Dean DeBlois, Chris Sanders",
    "Writer": "William Davies, Dean DeBlois, Chris Sanders",
    "Actors": "Jay Baruchel, Gerard Butler, Christopher Mintz-Plasse",
    "Plot": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
    "Language": "English",
    "Country": "United Kingdom, France, United States",
    "Awards": "Nominated for 2 Oscars. 25 wins & 63 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "99%"
        },
        {
            "Source": "Metacritic",
            "Value": "75/100"
        }
    ],
    "Metascore": "75",
    "imdbRating": "8.1",
    "imdbVotes": "882,954",
    "imdbID": "tt0892769",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$217,581,231",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Bullet Train",
    "Year": "2022",
    "Rated": "R",
    "Released": "05 Aug 2022",
    "Runtime": "127 min",
    "Genre": "Action, Comedy, Thriller",
    "Director": "David Leitch",
    "Writer": "Zak Olkewicz, Kôtarô Isaka",
    "Actors": "Brad Pitt, Joey King, Aaron Taylor-Johnson",
    "Plot": "Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.",
    "Language": "English, Japanese, Spanish, Russian",
    "Country": "United States, Japan",
    "Awards": "2 wins & 19 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODUyZjkxZDMtZGI3ZC00ZmEwLTgwMTUtYTU4OTQ5YjU4ZjRlXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "52%"
        },
        {
            "Source": "Metacritic",
            "Value": "49/100"
        }
    ],
    "Metascore": "49",
    "imdbRating": "7.3",
    "imdbVotes": "519,374",
    "imdbID": "tt12593682",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$103,368,602",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "How to Train Your Dragon 2",
    "Year": "2014",
    "Rated": "PG",
    "Released": "13 Jun 2014",
    "Runtime": "102 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Dean DeBlois",
    "Writer": "Dean DeBlois, Cressida Cowell",
    "Actors": "Jay Baruchel, Cate Blanchett, Gerard Butler",
    "Plot": "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
    "Language": "English",
    "Country": "United States, India",
    "Awards": "Nominated for 1 Oscar. 15 wins & 61 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "92%"
        },
        {
            "Source": "Metacritic",
            "Value": "77/100"
        }
    ],
    "Metascore": "77",
    "imdbRating": "7.8",
    "imdbVotes": "398,152",
    "imdbID": "tt1646971",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$177,002,924",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Train to Busan",
    "Year": "2016",
    "Rated": "Not Rated",
    "Released": "20 Jul 2016",
    "Runtime": "118 min",
    "Genre": "Action, Horror, Thriller",
    "Director": "Yeon Sang-ho",
    "Writer": "Park Joo-suk, Yeon Sang-ho",
    "Actors": "Gong Yoo, Jung Yu-mi, Ma Dong-seok",
    "Plot": "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
    "Language": "Korean, English, Hawaiian",
    "Country": "South Korea",
    "Awards": "36 wins & 42 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "95%"
        },
        {
            "Source": "Metacritic",
            "Value": "73/100"
        }
    ],
    "Metascore": "73",
    "imdbRating": "7.6",
    "imdbVotes": "300,921",
    "imdbID": "tt5700672",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$2,129,768",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "How to Train Your Dragon: The Hidden World",
    "Year": "2019",
    "Rated": "PG",
    "Released": "22 Feb 2019",
    "Runtime": "104 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Dean DeBlois",
    "Writer": "Dean DeBlois, Cressida Cowell",
    "Actors": "Jay Baruchel, America Ferrera, F. Murray Abraham",
    "Plot": "When Hiccup discovers Toothless isn't the only Night Fury, he must seek the Hidden World, a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.",
    "Language": "English",
    "Country": "United States, Japan",
    "Awards": "Nominated for 1 Oscar. 7 wins & 66 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "90%"
        },
        {
            "Source": "Metacritic",
            "Value": "71/100"
        }
    ],
    "Metascore": "71",
    "imdbRating": "7.4",
    "imdbVotes": "175,859",
    "imdbID": "tt2386490",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$160,945,505",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "How to Train Your Dragon",
    "Year": "2025",
    "Rated": "PG",
    "Released": "13 Jun 2025",
    "Runtime": "125 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Dean DeBlois",
    "Writer": "Dean DeBlois, Cressida Cowell, William Davies",
    "Actors": "Mason Thames, Nico Parker, Gerard Butler",
    "Plot": "As an ancient threat endangers both Vikings and dragons alike on the isle of Berk, the friendship between Hiccup, an inventive Viking, and Toothless, a Night Fury dragon, becomes the key to both species forging a new future together.",
    "Language": "English",
    "Country": "United States, United Kingdom, Ireland, Iceland, Canada",
    "Awards": "Nominated for 1 BAFTA Award2 wins & 18 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODA5Y2M0NjctNWQzMy00ODRhLWE0MzUtYmE1YTAzZjYyYmQyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "77%"
        },
        {
            "Source": "Metacritic",
            "Value": "61/100"
        }
    ],
    "Metascore": "61",
    "imdbRating": "7.7",
    "imdbVotes": "122,205",
    "imdbID": "tt26743210",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$262,958,100",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
    "Year": "2020",
    "Rated": "R",
    "Released": "23 Apr 2021",
    "Runtime": "117 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Haruo Sotozaki",
    "Writer": "Koyoharu Gotouge",
    "Actors": "Natsuki Hanae, Akari Kitô, Yoshitsugu Matsuoka",
    "Plot": "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.",
    "Language": "Japanese",
    "Country": "Japan",
    "Awards": "6 wins & 6 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzEzYjhkYTctMWNmZS00MTc5LWI4OWUtZjFkNzNkYTNkMTJlXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.2/10"
        },
        {
            "Source": "Metacritic",
            "Value": "72/100"
        }
    ],
    "Metascore": "72",
    "imdbRating": "8.2",
    "imdbVotes": "98,764",
    "imdbID": "tt11032374",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$49,888,550",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Zootopia+",
    "Year": "2022",
    "Rated": "TV-PG",
    "Released": "09 Nov 2022",
    "Runtime": "N/A",
    "Genre": "Animation, Short, Adventure",
    "Director": "N/A",
    "Writer": "N/A",
    "Actors": "John Lavelle, Katie Lowes, Joey Lawrence",
    "Plot": "The adventures of the creatures of the most incredible metropolis: Zootopia.",
    "Language": "English",
    "Country": "United States, Canada",
    "Awards": "1 win & 5 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTE0ZTQyZDYtMzc1Zi00NGIwLTg1ZDQtZTc1MWM1NmM1YmYzXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.8/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.8",
    "imdbVotes": "6,980",
    "imdbID": "tt13622956",
    "Type": "series",
    "totalSeasons": "1",
    "Response": "True"
},{
    "Title": "Zootopia 2",
    "Year": "2025",
    "Rated": "PG",
    "Released": "26 Nov 2025",
    "Runtime": "108 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Jared Bush, Byron Howard",
    "Writer": "Jared Bush",
    "Actors": "Ginnifer Goodwin, Jason Bateman, Ke Huy Quan",
    "Plot": "Brave rabbit cop Judy Hopps and her friend, the fox Nick Wilde, team up again to crack a new case, the most perilous and intricate of their careers.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 9 wins & 74 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "91%"
        },
        {
            "Source": "Metacritic",
            "Value": "73/100"
        }
    ],
    "Metascore": "73",
    "imdbRating": "7.4",
    "imdbVotes": "83,646",
    "imdbID": "tt26443597",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$421,357,518",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Zootopia",
    "Year": "2016",
    "Rated": "PG",
    "Released": "04 Mar 2016",
    "Runtime": "108 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Byron Howard, Rich Moore, Jared Bush",
    "Writer": "Byron Howard, Rich Moore, Jared Bush",
    "Actors": "Ginnifer Goodwin, Jason Bateman, Idris Elba",
    "Plot": "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 49 wins & 75 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "98%"
        },
        {
            "Source": "Metacritic",
            "Value": "78/100"
        }
    ],
    "Metascore": "78",
    "imdbRating": "8.0",
    "imdbVotes": "625,023",
    "imdbID": "tt2948356",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$341,268,248",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Shaina",
    "Year": "2020",
    "Rated": "N/A",
    "Released": "21 Aug 2020",
    "Runtime": "97 min",
    "Genre": "Drama",
    "Director": "Beautie Masvaure Alt",
    "Writer": "Wanisai Chigwendere",
    "Actors": "Wilmah Munemera, Tinodiwanashe Chitima, Gamu Mukwakwami",
    "Plot": "Shaina is the story of Shine, a teenager in Zimbabwe who doesn't believe in herself. In the face of life-altering events, she is forced to rely on her own ingenuity and determination to face her future. It's a story of forgiveness...",
    "Language": "English",
    "Country": "Zimbabwe",
    "Awards": "1 win & 1 nomination total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmVkZTY4NjktMGRhYy00YzJmLTg0OGEtZWEyZGI4MDY0ODhmXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.3/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.3",
    "imdbVotes": "68",
    "imdbID": "tt13498060",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Fight Club",
    "Year": "1999",
    "Rated": "R",
    "Released": "15 Oct 1999",
    "Runtime": "139 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "David Fincher",
    "Writer": "Chuck Palahniuk, Jim Uhls",
    "Actors": "Brad Pitt, Edward Norton, Meat Loaf",
    "Plot": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    "Language": "English",
    "Country": "United States, Germany",
    "Awards": "Nominated for 1 Oscar. 12 wins & 38 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "81%"
        },
        {
            "Source": "Metacritic",
            "Value": "67/100"
        }
    ],
    "Metascore": "67",
    "imdbRating": "8.8",
    "imdbVotes": "2,567,948",
    "imdbID": "tt0137523",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$37,030,102",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Oppenheimer",
    "Year": "2023",
    "Rated": "R",
    "Released": "21 Jul 2023",
    "Runtime": "180 min",
    "Genre": "Biography, Drama, History",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan, Kai Bird, Martin Sherwin",
    "Actors": "Cillian Murphy, Emily Blunt, Matt Damon",
    "Plot": "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.",
    "Language": "English, German, Italian, Dutch",
    "Country": "United States, United Kingdom",
    "Awards": "Won 7 Oscars. 364 wins & 376 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "93%"
        },
        {
            "Source": "Metacritic",
            "Value": "90/100"
        }
    ],
    "Metascore": "90",
    "imdbRating": "8.2",
    "imdbVotes": "1,008,589",
    "imdbID": "tt15398776",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$330,078,895",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO, but his tragic past may doom the project and his team to disaster.",
    "Language": "English, Japanese, French",
    "Country": "United States, United Kingdom",
    "Awards": "Won 4 Oscars. 160 wins & 220 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "87%"
        },
        {
            "Source": "Metacritic",
            "Value": "74/100"
        }
    ],
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "2,793,322",
    "imdbID": "tt1375666",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$292,587,330",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Baahubali: The Beginning",
    "Year": "2015",
    "Rated": "Not Rated",
    "Released": "09 Jul 2015",
    "Runtime": "159 min",
    "Genre": "Action, Drama",
    "Director": "S.S. Rajamouli",
    "Writer": "Vijayendra Prasad, S.S. Rajamouli, C.H. Vijay Kumar",
    "Actors": "Prabhas, Rana Daggubati, Anushka Shetty",
    "Plot": "A child from the Mahishmati kingdom is raised by tribal people and one day learns about his royal heritage, his father's bravery in battle and a mission to overthrow the incumbent ruler.",
    "Language": "Telugu, Tamil",
    "Country": "India",
    "Awards": "55 wins & 22 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2YxZThhZmEtYzM0Yi00OWYxLWI4NGYtM2Y2ZDNmOGE0ZWQzXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "91%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.0",
    "imdbVotes": "148,835",
    "imdbID": "tt2631186",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$6,738,000",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Baahubali 2: The Conclusion",
    "Year": "2017",
    "Rated": "Not Rated",
    "Released": "28 Apr 2017",
    "Runtime": "167 min",
    "Genre": "Action, Drama",
    "Director": "S.S. Rajamouli",
    "Writer": "Vijayendra Prasad, S.S. Rajamouli, C.H. Vijay Kumar",
    "Actors": "Prabhas, Rana Daggubati, Anushka Shetty",
    "Plot": "Amarendra Baahubali, the heir apparent to the throne of Mahishmati, finds his life and relationships endangered as his adoptive brother Bhallaladeva conspires to claim the throne.",
    "Language": "Telugu, Tamil",
    "Country": "India",
    "Awards": "29 wins & 16 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTRhYTlhZTgtYmMyYy00NWI4LTk4MzItOWM2YjBmYTg2OTI2XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "88%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.2",
    "imdbVotes": "132,342",
    "imdbID": "tt4849438",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$20,186,659",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Baahubali: Crown of Blood",
    "Year": "2024–",
    "Rated": "N/A",
    "Released": "17 May 2024",
    "Runtime": "N/A",
    "Genre": "Animation, Action",
    "Director": "N/A",
    "Writer": "Sharad Devarajan, S.S. Rajamouli",
    "Actors": "Rajesh Khattar, Sharad Kelkar, Aviral Kumar",
    "Plot": "Set before the events of the films, this prequel follows Baahubali and Bhallaladeva as they unite to protect their kingdom, Mahishmati, and its throne from the looming danger of Raktadeva, a mysterious and powerful warlord.",
    "Language": "Telugu",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODU0MWJhNjEtNDNiMC00NzcyLWIxZDYtNTc1ZDQ4NzRlMTIyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.4/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.4",
    "imdbVotes": "2,217",
    "imdbID": "tt32263319",
    "Type": "series",
    "totalSeasons": "1",
    "Response": "True"
},{
    "Title": "Baahubali: The Epic",
    "Year": "2025",
    "Rated": "N/A",
    "Released": "31 Oct 2025",
    "Runtime": "225 min",
    "Genre": "Action, Drama",
    "Director": "S.S. Rajamouli",
    "Writer": "Vijayendra Prasad, S.S. Rajamouli",
    "Actors": "Prabhas, Rana Daggubati, Anushka Shetty",
    "Plot": "A legendary warrior emerges from humble beginnings to challenge powerful forces threatening his homeland, as ancient prophecies and family bonds shape his journey.",
    "Language": "Telugu",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmIwYTI3ODItMzRkOS00MzlhLWI4NzQtNDFmOGJhZGJhM2VkXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "100%"
        },
        {
            "Source": "Metacritic",
            "Value": "79/100"
        }
    ],
    "Metascore": "79",
    "imdbRating": "8.5",
    "imdbVotes": "1,178",
    "imdbID": "tt37893389",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$1,039,440",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Baahubali: The Lost Legends",
    "Year": "2017–",
    "Rated": "N/A",
    "Released": "23 Apr 2017",
    "Runtime": "23 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "N/A",
    "Writer": "Sharad Devarajan, S.S. Rajamouli",
    "Actors": "Viraj Adhav, Manoj Pandey, Manini Mishra",
    "Plot": "Two royal princes embark on an exciting journey to rule the kingdom of Mahishmati and prove their worth.",
    "Language": "N/A",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzE5ZmJhNzMtNTZlNS00NDdjLTkwNTQtYWE0MjVmY2RjYjUyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.1",
    "imdbVotes": "603",
    "imdbID": "tt5523460",
    "Type": "series",
    "totalSeasons": "5",
    "Response": "True"
},{
    "Title": "Fukrey",
    "Year": "2013",
    "Rated": "Not Rated",
    "Released": "14 Jun 2013",
    "Runtime": "139 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Mrighdeep Lamba",
    "Writer": "Mrighdeep Lamba, Vipul Vig",
    "Actors": "Pulkit Samrat, Manjot Singh, Ali Fazal",
    "Plot": "The paths of four dream-chasing college friends cross with an array of colourful characters, from a tough-talking Punjabi female don to a Jugaad Baaz college watchman. Mayhem ensues.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "5 wins & 13 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.9/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "50%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.9",
    "imdbVotes": "13,632",
    "imdbID": "tt2806788",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$125,279",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Fukrey Returns",
    "Year": "2017",
    "Rated": "Not Rated",
    "Released": "08 Dec 2017",
    "Runtime": "141 min",
    "Genre": "Comedy",
    "Director": "Mrighdeep Lamba",
    "Writer": "Vipul Vig, Mrighdeep Lamba",
    "Actors": "Pulkit Samrat, Varun Sharma, Ali Fazal",
    "Plot": "Just out of jail, a don is ready to get back at the four friends who conned her.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmRlNmYxODItNWYyNy00ZGU2LTk0NzMtZTNlMWJhODM4ZjdiXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "11%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.5",
    "imdbVotes": "6,565",
    "imdbID": "tt6712014",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Fukrey 3",
    "Year": "2023",
    "Rated": "Not Rated",
    "Released": "28 Sep 2023",
    "Runtime": "147 min",
    "Genre": "Comedy, Crime, Drama",
    "Director": "Mrighdeep Lamba",
    "Writer": "Vipul Vig",
    "Actors": "Pulkit Samrat, Varun Sharma, Manjot Singh",
    "Plot": "The friends facing disastrously funny situations together and having each other's backs through the trenches to make it out of a new mess this time.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 win & 1 nomination total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDk1OGVjMWEtN2UwNy00MDlhLWFhMWEtMTAzYTlkZGZkYTcwXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "40%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.5",
    "imdbVotes": "24,512",
    "imdbID": "tt26445483",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Fukrey Boyzzz",
    "Year": "2019–",
    "Rated": "TV-Y",
    "Released": "12 Oct 2019",
    "Runtime": "N/A",
    "Genre": "Animation, Comedy",
    "Director": "N/A",
    "Writer": "N/A",
    "Actors": "Vikky Kumar, Blué, Viraaj Modgill",
    "Plot": "Choocha, Hunny and Laali pursue their outlandish and sometimes dangerous dreams while the scheming Bholi Punjaban constantly tries to sabotage their plans.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTY4NTY5NzEtMmY3MC00MDhjLTg2OGItZjBlMTliYThkNzg5XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [],
    "Metascore": "N/A",
    "imdbRating": "N/A",
    "imdbVotes": "37",
    "imdbID": "tt13788916",
    "Type": "series",
    "totalSeasons": "N/A",
    "Response": "True"
},{
    "Title": "The White Tiger",
    "Year": "2021",
    "Rated": "R",
    "Released": "22 Jan 2021",
    "Runtime": "125 min",
    "Genre": "Crime, Drama",
    "Director": "Ramin Bahrani",
    "Writer": "Ramin Bahrani, Aravind Adiga",
    "Actors": "Adarsh Gourav, Rajkummar Rao, Priyanka Chopra Jonas",
    "Plot": "An ambitious Indian driver uses his wit and cunning to escape from poverty and rise to the top. An epic journey based on the New York Times bestseller.",
    "Language": "Hindi, English",
    "Country": "India, United States",
    "Awards": "Nominated for 1 Oscar. 7 wins & 17 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWUyNDEyMDgtM2IwNy00MTllLWJiMzUtODQ2ODcxZjk4N2ExXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "91%"
        },
        {
            "Source": "Metacritic",
            "Value": "76/100"
        }
    ],
    "Metascore": "76",
    "imdbRating": "7.1",
    "imdbVotes": "67,626",
    "imdbID": "tt6571548",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Ek Tha Tiger",
    "Year": "2012",
    "Rated": "Not Rated",
    "Released": "27 Dec 2025",
    "Runtime": "132 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Kabir Khan",
    "Writer": "Aditya Chopra, Kabir Khan, Neelesh Misra",
    "Actors": "Salman Khan, Katrina Kaif, Girish Karnad",
    "Plot": "A RAW agent, Tiger, is sent to Dublin to observe an Indian scientist who is suspected of sharing nuclear secrets with the ISI. He meets and falls for his caretaker Zoya, a girl with a dark secret.",
    "Language": "Hindi, English",
    "Country": "India",
    "Awards": "19 wins & 16 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjUzOWEzZTMtNDQzYS00ZDI4LWI4NjctNzcyN2NkY2IwMTA4XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "75%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.7",
    "imdbVotes": "41,832",
    "imdbID": "tt2016894",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$2,347,774",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Tiger Zinda Hai",
    "Year": "2017",
    "Rated": "Not Rated",
    "Released": "22 Dec 2017",
    "Runtime": "161 min",
    "Genre": "Action, Adventure, Thriller",
    "Director": "Ali Abbas Zafar, Md Minhaj Miah",
    "Writer": "Neelesh Misra, Ali Abbas Zafar, Aditya Chopra",
    "Actors": "Salman Khan, Katrina Kaif, Khalida Jan",
    "Plot": "RAW Agent Tiger joins forces with Zoya in order to rescue a group of nurses who are held hostage by a terrorist organisation.",
    "Language": "Hindi, English",
    "Country": "India",
    "Awards": "5 wins & 9 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzdiNDU4NjUtNmNjMi00YTc5LTk0OTQtNjY4ODQzMDUzYmI4XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.9/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "64%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.9",
    "imdbVotes": "35,935",
    "imdbID": "tt5956100",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$5,560,921",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Tiger 3",
    "Year": "2023",
    "Rated": "Not Rated",
    "Released": "11 Nov 2023",
    "Runtime": "155 min",
    "Genre": "Action, Adventure, Thriller",
    "Director": "Maneesh Sharma",
    "Writer": "Shridhar Raghavan, Anckur Chaudhry, Aditya Chopra",
    "Actors": "Salman Khan, Katrina Kaif, Emraan Hashmi",
    "Plot": "Tiger and Zoya are back - to save the country and their family. This time it's personal.",
    "Language": "Hindi, English, Vietnamese",
    "Country": "India",
    "Awards": "14 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ1MzkzZDYtMzg1YS00ODE0LTgyYTYtNDdkOWNjMDFhMmZjXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "52%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.7",
    "imdbVotes": "55,731",
    "imdbID": "tt18411490",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$5,365,263",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "RRR",
    "Year": "2022",
    "Rated": "TV-MA",
    "Released": "25 Mar 2022",
    "Runtime": "187 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "S.S. Rajamouli",
    "Writer": "Vijayendra Prasad, S.S. Rajamouli, Sai Madhav Burra",
    "Actors": "N.T. Rama Rao Jr., Ram Charan, Ajay Devgn",
    "Plot": "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
    "Language": "Telugu",
    "Country": "India",
    "Awards": "Won 1 Oscar. 93 wins & 152 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "96%"
        },
        {
            "Source": "Metacritic",
            "Value": "83/100"
        }
    ],
    "Metascore": "83",
    "imdbRating": "7.8",
    "imdbVotes": "201,689",
    "imdbID": "tt8178634",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$15,156,051",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Yeh Jawaani Hai Deewani",
    "Year": "2013",
    "Rated": "Not Rated",
    "Released": "31 May 2013",
    "Runtime": "160 min",
    "Genre": "Comedy, Drama, Musical",
    "Director": "Ayan Mukerji",
    "Writer": "Hussain Dalal, Ayan Mukerji",
    "Actors": "Ranbir Kapoor, Deepika Padukone, Aditya Roy Kapoor",
    "Plot": "Kabir and Naina bond during a trekking trip. Before Naina can express herself, Kabir leaves India to pursue his career. They meet again years later, but he still cherishes his dreams more than bonds.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "24 wins & 96 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "70%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.3",
    "imdbVotes": "54,074",
    "imdbID": "tt2178470",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$3,827,466",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Billu",
    "Year": "2009",
    "Rated": "Not Rated",
    "Released": "13 Feb 2009",
    "Runtime": "137 min",
    "Genre": "Comedy, Drama",
    "Director": "Priyadarshan",
    "Writer": "Manisha Korde, Priyadarshan, Mushtaq Shiekh",
    "Actors": "Irrfan Khan, Lara Dutta, Om Puri",
    "Plot": "In an Indian village, a struggling barber sees his luck begin to turn when residents learn that a famous actor he once knew is coming to town.",
    "Language": "Hindi, Awadhi",
    "Country": "India",
    "Awards": "3 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2M4M2Y0NTEtMTU4ZS00OTA5LWE1YmMtMzViNmY3ZDc5NmRkXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "60%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.4",
    "imdbVotes": "13,974",
    "imdbID": "tt1230448",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$754,928",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Swades",
    "Year": "2004",
    "Rated": "Not Rated",
    "Released": "17 Dec 2004",
    "Runtime": "189 min",
    "Genre": "Drama, Musical",
    "Director": "Ashutosh Gowariker",
    "Writer": "M.G. Sathya, Ashutosh Gowariker, Sameer Sharma",
    "Actors": "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal",
    "Plot": "A successful Indian scientist returns to an Indian village to take his nanny to America with him and in the process rediscovers his roots.",
    "Language": "Hindi, English",
    "Country": "India, United States",
    "Awards": "18 wins & 26 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWJlNmQ2NmQtM2U3Yi00MTZjLWI1YzktY2I2MmExMzgwNmE3XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "89%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.2",
    "imdbVotes": "100,779",
    "imdbID": "tt0367110",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$1,223,240",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Barfi!",
    "Year": "2012",
    "Rated": "Not Rated",
    "Released": "14 Sep 2012",
    "Runtime": "151 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Anurag Basu",
    "Writer": "Anurag Basu, Tani Basu, Sanjeev Dutta",
    "Actors": "Ranbir Kapoor, Priyanka Chopra Jonas, Ileana D'Cruz",
    "Plot": "Three young people learn that love can neither be defined nor contained by society's definition of normal and abnormal.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "68 wins & 40 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQzMTEyODY2Ml5BMl5BanBnXkFtZTgwMjA0MDUyMjE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "80%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.1",
    "imdbVotes": "91,570",
    "imdbID": "tt2082197",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$2,804,874",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Yeh Jawaani Hai Deewani",
    "Year": "2013",
    "Rated": "Not Rated",
    "Released": "31 May 2013",
    "Runtime": "160 min",
    "Genre": "Comedy, Drama, Musical",
    "Director": "Ayan Mukerji",
    "Writer": "Hussain Dalal, Ayan Mukerji",
    "Actors": "Ranbir Kapoor, Deepika Padukone, Aditya Roy Kapoor",
    "Plot": "Kabir and Naina bond during a trekking trip. Before Naina can express herself, Kabir leaves India to pursue his career. They meet again years later, but he still cherishes his dreams more than bonds.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "24 wins & 96 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "70%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.3",
    "imdbVotes": "54,074",
    "imdbID": "tt2178470",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$3,827,466",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Delhi Safari",
    "Year": "2012",
    "Rated": "PG",
    "Released": "07 Dec 2012",
    "Runtime": "96 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Nikkhil Advani",
    "Writer": "Nikkhil Advani, Rahul Awate, Girish Dhamija",
    "Actors": "Govinda, Akshaye Khanna, Urmila Matondkar",
    "Plot": "A group of animals plan a trip to Delhi in order to ask the parliament why the forest they live in is on the verge of destruction.",
    "Language": "Hindi, English",
    "Country": "India",
    "Awards": "1 win total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyOTg2NzAwM15BMl5BanBnXkFtZTcwMTUxNjU0OA@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "20%"
        },
        {
            "Source": "Metacritic",
            "Value": "37/100"
        }
    ],
    "Metascore": "37",
    "imdbRating": "5.5",
    "imdbVotes": "2,131",
    "imdbID": "tt1172587",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Delhi Belly",
    "Year": "2011",
    "Rated": "Not Rated",
    "Released": "01 Jul 2011",
    "Runtime": "103 min",
    "Genre": "Action, Comedy, Crime",
    "Director": "Abhinay Deo, Akshat Verma",
    "Writer": "Mr. Moris, Akshat Verma",
    "Actors": "Imran Khan, Vir Das, Kunaal Roy Kapur",
    "Plot": "Three struggling room-mates unknowingly become potential prey of a ruthless gangster.",
    "Language": "English, Hindi",
    "Country": "India",
    "Awards": "6 wins & 23 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmMyZjk0MjUtZmEwZi00YmJjLWIyNGQtZDA0NzBjNWJjZjIwXkEyXkFqcGc@._V1_SX300.jpg",
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
            "Value": "66/100"
        }
    ],
    "Metascore": "66",
    "imdbRating": "7.6",
    "imdbVotes": "33,003",
    "imdbID": "tt1934231",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$1,532,594",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Dhamaal",
    "Year": "2007",
    "Rated": "Not Rated",
    "Released": "07 Sep 2007",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Indra Kumar",
    "Writer": "Paritosh Painter, Balvinder Singh Suri, Bunty Rathore",
    "Actors": "Sanjay Dutt, Riteish Deshmukh, Arshad Warsi",
    "Plot": "Four lazy slacker conmen buddies learn about the secret of a hidden treasure from a dying thief and set out to find and claim it while being pursued by a determined police inspector who is hellbent to get the treasure all by himself.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 win & 1 nomination total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWU3OTEzODgtMWY4OS00N2NkLWJlNGQtMWZhZDJmODQwN2E5XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.5/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.5",
    "imdbVotes": "19,863",
    "imdbID": "tt0845448",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$166,339",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Double Dhamaal",
    "Year": "2011",
    "Rated": "N/A",
    "Released": "01 Jul 2011",
    "Runtime": "138 min",
    "Genre": "Comedy, Crime, Drama",
    "Director": "Indra Kumar",
    "Writer": "Tushar Hiranandani, Sajid, Farhad Samji",
    "Actors": "Sanjay Dutt, Riteish Deshmukh, Arshad Warsi",
    "Plot": "Four slackers decide to avenge their humiliation at the hands of a con-man.",
    "Language": "Hindi, Marathi, Punjabi, Tamil, English",
    "Country": "India",
    "Awards": "1 win & 7 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzEwNjIxOTI4NV5BMl5BanBnXkFtZTcwODk0ODg0NQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "17%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.0",
    "imdbVotes": "4,760",
    "imdbID": "tt1728239",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$543,646",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Total Dhamaal",
    "Year": "2019",
    "Rated": "Not Rated",
    "Released": "22 Feb 2019",
    "Runtime": "130 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Indra Kumar",
    "Writer": "Paritosh Painter, Ved Prakash, Bunty Rathore",
    "Actors": "Ajay Devgn, Anil Kapoor, Madhuri Dixit",
    "Plot": "A group of people learn about a hidden treasure and then they race to find it and claim it.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 win & 3 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjhkY2ViNTYtYjc3MC00OWU3LWFhYWMtMjU5ZDhjZTNkYTc3XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "30%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.2",
    "imdbVotes": "8,150",
    "imdbID": "tt7639372",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$2,167,632",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Malamaal Weekly",
    "Year": "2006",
    "Rated": "N/A",
    "Released": "10 Mar 2006",
    "Runtime": "137 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Priyadarshan",
    "Writer": "Manisha Korde, Priyadarshan, Chandu Shah",
    "Actors": "Paresh Rawal, Om Puri, Riteish Deshmukh",
    "Plot": "Lilaram sells lottery tickets and one customer has hit the jackpot but dies of shock upon finding out that he has won. Now, Lilaram wants all the money, and so does everyone around him.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "3 nominations",
    "Poster": "N/A",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.0/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.0",
    "imdbVotes": "8,181",
    "imdbID": "tt0476805",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$204,612",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Mela",
    "Year": "2000",
    "Rated": "N/A",
    "Released": "07 Jan 2000",
    "Runtime": "172 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Dharmesh Darshan",
    "Writer": "Robin Bhatt, Dharmesh Darshan, Sanjeev Duggal",
    "Actors": "Aamir Khan, Twinkle Khanna, Faisal Khan",
    "Plot": "When a village belle's brother is killed by a bandit, she vows revenge and enlists the help of two truckers-come-theatre artists in her mission.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjlmZTcxOTYtYmUwZC00NTY2LWE0ODctYjZjMDEzOTgzMGE0XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "3.7/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "3.7",
    "imdbVotes": "5,046",
    "imdbID": "tt0232079",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$220,524",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Laal Singh Chaddha",
    "Year": "2022",
    "Rated": "PG-13",
    "Released": "11 Aug 2022",
    "Runtime": "159 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Advait Chandan",
    "Writer": "Atul Kulkarni, Winston Groom, Eric Roth",
    "Actors": "Sharik Khan Jr., Aamir Khan, Ahmad Ibn Umar",
    "Plot": "The story of Laal Singh Chaddha, a simple man whose extraordinary journey will fill you with love, warmth and happiness.",
    "Language": "Hindi, Punjabi, English",
    "Country": "India",
    "Awards": "5 wins & 26 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM1ODNiMWItODk3YS00MGUwLTkxNTgtOGI0OGZmZTgwZDZhXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "69%"
        },
        {
            "Source": "Metacritic",
            "Value": "46/100"
        }
    ],
    "Metascore": "46",
    "imdbRating": "5.6",
    "imdbVotes": "178,736",
    "imdbID": "tt10028196",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$3,401,324",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Laal Kaptaan",
    "Year": "2019",
    "Rated": "Not Rated",
    "Released": "18 Oct 2019",
    "Runtime": "155 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Navdeep Singh",
    "Writer": "Abdul Rafay Chandio, Sudip Sharma, Siddha",
    "Actors": "Saif Ali Khan, Zoya Hussain, Manav Vij",
    "Plot": "In an 18th century setting, a Naga sadhu in India sets out on a journey across Bundelkhand to seek revenge for an injustice committed in the past.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "1 win & 5 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzcwZGQ1OWQtOWQxNC00YmM0LWIyMmYtMTM5MmQ5ODYyMjJhXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "11%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.2",
    "imdbVotes": "5,430",
    "imdbID": "tt9052960",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Laal Rang",
    "Year": "2016",
    "Rated": "Not Rated",
    "Released": "22 Apr 2016",
    "Runtime": "147 min",
    "Genre": "Comedy, Crime, Drama",
    "Director": "Syed Ahmad Afzal",
    "Writer": "Syed Ahmad Afzal, Pankaj Matta",
    "Actors": "Randeep Hooda, Akshay Oberoi, Rajneesh Duggal",
    "Plot": "The friendship of two men is tested when things go wrong in their blood theft business.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU4MzMyNjAtNmEzZS00YjRjLTgxNWMtNzRlNGY1MTAwZGE3XkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "56%"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.8",
    "imdbVotes": "5,028",
    "imdbID": "tt5600714",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},
    
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
