const data= [
  {
    title: "Lourve",
    location: "France",
    googleMapsUrl: "https://www.google.com/maps/place/Louvre+Museum/@48.8606111,2.337644,15z/data=!4m5!3m4!1s0x0:0xb975fcfa192f84d4!8m2!3d48.8606111!4d2.337644",
    startDate: "21 april, 2024",
    endDate: "23 april, 2024",
    description: "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic landmark in Paris, France. It is the home of some of the best-known works of art, including the Mona Lisa and the Venus de Milo",
    imageUrl: "./images/lourve.png"
  },

  {
    title: "Venice",
    location: "Italy",
    googleMapsUrl: "https://www.google.com/maps/place/Venice,+Metropolitan+City+of+Venice,+Italy/@45.4042007,12.1071486,10z/data=!3m1!4b1!4m5!3m4!1s0x477eb1daf1d63d89:0x7ba3c6f0bd92102f!8m2!3d45.4408474!4d12.3155151?hl=en",
    startDate: "24 april, 2024",
    endDate: "25 april, 2024",
    description: "Venice, known also as the “City of Canals,” “The Floating City,” and “Serenissima,” is arguably one of Italy's most picturesque cities. With its winding canals, striking architecture, and beautiful bridges, Venice is a popular destination for travel.",
    imageUrl: "./images/venice.png"
  },


  {
    title: "Albrobello",
    location: "Italy",
    googleMapsUrl: "https://www.google.com/maps/place/70011+Alberobello,+Metropolitan+City+of+Bari,+Italy/@40.7915959,17.1773211,12z/data=!3m1!4b1!4m5!3m4!1s0x1347b264abcdaa6f:0xdec45d1171885f51!8m2!3d40.7864131!4d17.240936?hl=en",
    startDate: "24 april, 2024",
    endDate: "26 april, 2024",
    description: "The town of Alberobello is among the most famous of the region's attractions, known as home to the largest collection of trulli - whitewashed stone huts with conical roofs that have been around for centuries.",
    imageUrl: "./images/albrobello.png"

  },
 
 
  {
      title: "Mount Fuji",
      location: "Japan",
      googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
      startDate: "12 may, 2025",
      endDate: "14 may, 2025",
      description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
      imageUrl: "./images/mountfiji.png"
  },

  {
    title: "Central Park",
    location: "New York,US",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 may, 2025",
    endDate: "14 may, 2025",
    description: "It has classic architecture, gorgeous statuary and up to date sports, educational and performance facilities. Besides all of this there is the world famous Central Park Zoo and Wildlife Center and the Children's Zoo",
    imageUrl: "./images/centralpark.png"
},
  
]

const a=data.map(b=>{
  return(
    <Card
    {...b}
    />
  )
})


function Card(props)
{
  return(
  <article>
    <div class="article-wrapper">
      <figure>
      <img src={props.imageUrl}/>      
      </figure>
      <div class="article-body">
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
      <h3>{props.startDate}  -  {props.endDate}</h3>
      <p>{props.description}</p>
        <a href={props.googleMapsUrl} class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>

  </article>
  )
}

function Header()
{
  return(
    <div className="navbar">
    <img src="./images/travel.png" className="header-img"/>
    <h1>My Travel journal</h1>
    </div>
  )
}

function Main()
{
  return(
      <div>
        <Header/>
        <br/>
        <div className="articles">
          {a}
        </div>
      </div>
  )
}
ReactDOM.render(<Main/>,document.getElementById("root"))




      {/* <img src={props.imageUrl}className="card-img"/> */}
     {/* <div className="card-stats"> */}
      {/* <h1>{props.title}</h1> */}
      {/* <h2>{props.location}</h2>
      <a href={props.googleMapsUrl}>{props.title}
      </a>
      <h3>{props.startDate}  -  {props.endDate}</h3> */}
      {/* <p>{props.description}</p> */}
    {/* </div>    */}