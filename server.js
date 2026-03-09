const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

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
      },
    {
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
      },
    {
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
      },
    {
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
      },
    {
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
     },
    {
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
     },
    {
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
     },
    {
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
     },
    {
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
     },
    {
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