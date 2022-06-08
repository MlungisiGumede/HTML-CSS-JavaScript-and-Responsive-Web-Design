let Movies = [


    {
        name: "Spiderman ",
        img: '"images/spiderman.jpg" class="card-img-top"',
        price: 14.99,
        onsale: 0.0,
        tags: "Leash",
        description: " Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers.he uses his powers to help people and finds himself facing the Green Goblin,an evil Maniac"
    },

    {
        name: "Pulp Fiction",
        img: ' src="images/Pulp.jpg" class="card-img-top"',
        price: 14.99,
        onsale: 0.0,
        tags: "Leash",
        description: "His new movie Pulp Fictionis a comedy about blood, guts, violence, strange sex, drugs, fixed fights, dead body disposal, leather freaks, and a wristwatch that makes a dark journey down through the generations."
    },
    {
        name: "Shrek",
        img: 'src="images/shrek.jpg" class="card-img-top"',
        price: 14.99,
        onsale: 0.0,
        tags: "Leash",
        description: "   When a green ogre named Shrek discovers his swamp has been 'swamped' with all sorts of fairytale creatures by the scheming Lord Farquaad, Shrek sets out with a very loud donkey by his side to 'persuade' Farquaad to give Shrek his swamp back. Instead, a deal is made."
    },

{
        name: "Puss in Boots",
        img: 'src="images/puss.jpg" class="card-img-top"',
        price: 14.99,
        onsale: 0.0,
        tags: "Leash",
        description: "  An outlaw cat, his childhood egg-friend and a seductive thief kitty set out in search for the eggs of the fabled Golden Goose to clear his name, restore his lost honor and regain the trust of his mother and town."
    },

]

let movies = [
    {
    id: number, //a unique identifier for this movie
    title: string, //the title of this movie
    director: string, //the name of the director of this movie
    runtime: string, //the runtime of this movie
    release_year: number, //the year this movie was released
    description: string, //a description of this movie
    poster_url: string, //a URL or file path to an image of the poster for this movie
    cinema_number: number, //the number of the cinema this movie will be showing in
    ticket_price: number, //the price of a single ticket for this movie
    tickets_in_cart: number //the number of tickets that have been booked for this movie
    }
    ];
    

// Put the object into storage
localStorage.setItem('Movies', JSON.stringify(Movies));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('Movies');

var  MovieZs = [];


$( document ).ready(function uAddData() {
        console.log(Movies);
    });

function uAddData()     
{

    var AddData_ = document.querySelector("#divId").value;
    Movie.push({divId:DivID});

    console.log(Movies);

    Data();

}

function Data()
{

var dataBody = document.querySelector("#content");

dataBody.innerHTML = " ";

for (var i = 0; i < Movies.length; i++)
{

$("#content").append(



    `<div><p>Title: ${Movies.name}</p ></div>
    <div>${Movies[i].director}</div>
    <img src ${Movies[i].route}`
)

    dataBody.innerHTML += 
    `
    
    
//     <div class="container" style="border: black;">
//     <div class="title">
//         <h1>Movies</h1>

//     </div>
//     <br><br>
//     <div class="row">
//         <div class="col-md-3">

//             <div class="card text-center h-100">
//                 <div class="title-Movie text-center"><b>Cinema 1</b></div>
//                 <img src="images/spiderman.jpg" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title"><b>${Movie[i].name}</b></h5>
//                     <p>
                   
//                     ${Movie[i].description}

//                     </p>

//                 </div>
//                 <div class="text-right"  id="price"><b>${Movie.price}</b></div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn position-center btn-outline-info btn-sm"
//                         style="position:relative;" data-toggle="modal" data-target="#exampleModal">Show
//                         Details</button>
//                 </div>

//                 <!-- Modal -->
//                 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
//                     aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div class="modal-dialog" role="document">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalLabel">${Movie.name}</h5>
//                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div class="modal-body">
//                                <P class="text-left"> <b>Title : </b>${Movie.name}</P>

//                                <P class="text-left"><b>Director : </b> Sam  Raimi</P>

//                                <P class="text-left"> <b>Release Year : </b>2002</P>

//                                <P class="text-left"> <b>Run Time :</b> 2hr 1m</P>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary"
//                                     data-dismiss="modal">Close</button>
//                                 <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <br>
//                 <div>
//                     <button type="button" id="movie-details" class="btn btn-success  btn-sm">Book
//                         Ticket</button>
//                 </div>
//                 <br>
//             </div>
//         </div>



//         <div class="col-md-3">

//             <div class="card text-center h-100">
//                 <div class="title-Movie text-center"><b>Cinema 2</b></div>
//                 <img src="images/Pulp.jpg" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title"><b>${Movie.name}</b></h5>
//                     <p>
                        
//                     ${Movie.description}
//                     </p>

//                 </div>
//                 <div class="text-right"  id="price"><b>${Movie.price}</b></div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn position-center btn-outline-info btn-sm"
//                         style="position:relative;" data-toggle="modal" data-target="#exampleModal">Show
//                         Details</button>
//                 </div>

//                 <!-- Modal -->
//                 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
//                     aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div class="modal-dialog" role="document">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalLabel">${Movie.name}</h5>
//                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div class="modal-body">
//                                 <P class="text-left"> <b>Title :</b>${Movie.name}</P>

//                                <P class="text-left"><b>Director :</b>Quentin Tarantino </P>

//                                <P class="text-left"> <b>Release Year :</b> 1994</P>

//                                <P class="text-left"> <b>Run Time :</b> 2h 34m</P>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary"
//                                     data-dismiss="modal">Close</button>
//                                 <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn btn-success  btn-sm">Book Ticket</button>
//                 </div>
//                 <br>
//             </div>
//         </div>



//         <div class="col-md-3">

//             <div class="card text-center h-100">
//                 <div class="title-Movie text-center"><b>Cinema 3</b></div>
//                 <img src="images/shrek.jpg" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title"><b>${Movie.name}</b></h5>
//                     <p>
                     

//                     ${Movie.description}
//                     </p>

//                 </div>
//                 <div class="text-right"  id="price"><b>${Movie.price}</b></div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn position-center btn-outline-info btn-sm"
//                         style="position:relative;" data-toggle="modal" data-target="#exampleModal">Show
//                         Details</button>
//                 </div>

//                 <!-- Modal -->
//                 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
//                     aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div class="modal-dialog" role="document">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalLabel">${Movie.name} </h5>
//                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div class="modal-body">
//                                 <P class="text-left"> <b>Title :</b>${Movie.name}</P>

//                                <P class="text-left"><b>Director :</b> Andrew Adamson, Vicky Jenson</P>

//                                <P class="text-left"> <b>Release Year :</b>2001</P>

//                                <P class="text-left"> <b>Run Time :</b>1h 30m</P>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary"
//                                     data-dismiss="modal">Close</button>
//                                 <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn btn-success  btn-sm">Book Ticket</button>
//                 </div>
//                 <br>
//             </div>
//         </div>



//         <div class="col-md-3">

//             <div class="card text-center h-100">
//                 <div class="title-Movie text-center"><b>Cinema 4</b></div>
//                 <img src="images/puss.jpg" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title"><b>${Movie.name}</b></h5>
//                     <p>
//                     ${Movie.description}

//                     </p>

//                 </div>
//                 <div class="text-right" id="price"><b>${Movie.price}</b></div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn position-center btn-outline-info btn-sm"
//                         style="position:relative;" data-toggle="modal" data-target="#exampleModal">Show
//                         Details</button>
//                 </div>

//                 <!-- Modal -->
//                 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
//                     aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div class="modal-dialog" role="document">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalLabel">${Movie.name}</h5>
//                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
                           
//                             <div class="modal-body">
//                                 <P class="text-left"> <b>Title :</b>${Movie.name}</P>

//                                 <P class="text-left"><b>Director :</b>Chris Miller</P>

//                                 <P class="text-left"> <b>Release Year :</b>2011</P>

//                                 <P class="text-left"> <b>Run Time :</b>1h 30m</P>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary"
//                                     data-dismiss="modal">Close</button>
//                                 <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn btn-success  btn-sm">Book Ticket</button>
//                 </div>
//                 <br>
//             </div>
//         </div>
//     </div>
// </div>
    
    
//     `;
}

    
}



ovies.forEach(Movie => {

    var div = document.querySelector("#content")

    div.innerHTML = div.innerHTML + `
    <div class="container" style="border: black;">
    <div class="title">
        <h1>Movies</h1>

    </div>
    <br><br>
    <div class="row">
        <div class="col-md-3">

            <div class="card text-center h-100">
                <div class="title-Movie text-center"><b>Cinema 1</b></div>
                <img src="images/spiderman.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title"><b>${Movie.name}</b></h5>
                    <p>
                   
                    ${Movie.description}

                    </p>

                </div>
                <div class="text-right"  id="price"><b>${Movie.price}</b></div>
                <br>
                <div>
                    <button type="button" class="btn position-center btn-outline-info btn-sm"
                        style="position:relative;" data-toggle="modal" data-target="#exampleModal">Show
                        Details</button>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
//                             <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalLabel">${Movie.name}</h5>
//                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div class="modal-body">
//                                <P class="text-left"> <b>Title : </b>${Movie.name}</P>

//                                <P class="text-left"><b>Director : </b> Sam  Raimi</P>

//                                <P class="text-left"> <b>Release Year : </b>2002</P>

//                                <P class="text-left"> <b>Run Time :</b> 2hr 1m</P>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary"
//                                     data-dismiss="modal">Close</button>
//                                 <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <br>
//                 <div>
//                     <button type="button" id="movie-details" class="btn btn-success  btn-sm">Book
//                         Ticket</button>
//                 </div>
//                 <br>
//             </div>
//         </div>



//         <div class="col-md-3">

//             <div class="card text-center h-100">
//                 <div class="title-Movie text-center"><b>Cinema 2</b></div>
//                 <img src="images/Pulp.jpg" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title"><b>${Movie.name}</b></h5>
//                     <p>
                        
//                     ${Movie.description}
//                     </p>

//                 </div>
//                 <div class="text-right"  id="price"><b>${Movie.price}</b></div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn position-center btn-outline-info btn-sm"
//                         style="position:relative;" data-toggle="modal" data-target="#exampleModal">Show
//                         Details</button>
//                 </div>

//                 <!-- Modal -->
//                 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
//                     aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div class="modal-dialog" role="document">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalLabel">${Movie.name}</h5>
//                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div class="modal-body">
//                                 <P class="text-left"> <b>Title :</b>${Movie.name}</P>

//                                <P class="text-left"><b>Director :</b>Quentin Tarantino </P>

//                                <P class="text-left"> <b>Release Year :</b> 1994</P>

//                                <P class="text-left"> <b>Run Time :</b> 2h 34m</P>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary"
//                                     data-dismiss="modal">Close</button>
//                                 <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn btn-success  btn-sm">Book Ticket</button>
//                 </div>
//                 <br>
//             </div>
//         </div>



//         <div class="col-md-3">

//             <div class="card text-center h-100">
//                 <div class="title-Movie text-center"><b>Cinema 3</b></div>
//                 <img src="images/shrek.jpg" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title"><b>${Movie.name}</b></h5>
//                     <p>
                     

//                     ${Movie.description}
//                     </p>

//                 </div>
//                 <div class="text-right"  id="price"><b>${Movie.price}</b></div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn position-center btn-outline-info btn-sm"
//                         style="position:relative;" data-toggle="modal" data-target="#exampleModal">Show
//                         Details</button>
//                 </div>

//                 <!-- Modal -->
//                 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
//                     aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div class="modal-dialog" role="document">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalLabel">${Movie.name} </h5>
//                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div class="modal-body">
//                                 <P class="text-left"> <b>Title :</b>${Movie.name}</P>

//                                <P class="text-left"><b>Director :</b> Andrew Adamson, Vicky Jenson</P>

//                                <P class="text-left"> <b>Release Year :</b>2001</P>

//                                <P class="text-left"> <b>Run Time :</b>1h 30m</P>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary"
//                                     data-dismiss="modal">Close</button>
//                                 <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn btn-success  btn-sm">Book Ticket</button>
//                 </div>
//                 <br>
//             </div>
//         </div>



//         <div class="col-md-3">

//             <div class="card text-center h-100">
//                 <div class="title-Movie text-center"><b>Cinema 4</b></div>
//                 <img src="images/puss.jpg" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title"><b>${Movie.name}</b></h5>
//                     <p>
//                     ${Movie.description}

//                     </p>

//                 </div>
//                 <div class="text-right" id="price"><b>${Movie.price}</b></div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn position-center btn-outline-info btn-sm"
//                         style="position:relative;" data-toggle="modal" data-target="#exampleModal">Show
//                         Details</button>
//                 </div>

//                 <!-- Modal -->
//                 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
//                     aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div class="modal-dialog" role="document">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalLabel">${Movie.name}</h5>
//                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
                           
//                             <div class="modal-body">
//                                 <P class="text-left"> <b>Title :</b>${Movie.name}</P>

//                                 <P class="text-left"><b>Director :</b>Chris Miller</P>

//                                 <P class="text-left"> <b>Release Year :</b>2011</P>

//                                 <P class="text-left"> <b>Run Time :</b>1h 30m</P>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary"
//                                     data-dismiss="modal">Close</button>
//                                 <!-- <button type="button" class="btn btn-primary">Save changes</button> 
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br>
//                 <div>
//                     <button type="button" class="btn btn-success  btn-sm">Book Ticket</button>
//                 </div>
//                 <br>
//             </div>
//         </div>
//     </div>
// </div>
    
    
    
    
    
    
    
    
//     `









 })