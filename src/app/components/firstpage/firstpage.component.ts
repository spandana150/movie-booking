import { Component } from '@angular/core'; 
import {Router} from '@angular/router';
@Component({
  selector: 'app-demo',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent { 
  constructor(public router: Router){}
  title = 'mini_project'; 
  obj = [{"t":"https://youtube/AeOydbt9e6g","imdbID":"tt0468569","Title":"The Dark Knight","Year":"2008","Poster":"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":40,"Theaters":{"names":["PVR","ASIAN"],"no_tickets":[25,15]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt2975590","Title":"Batman v Superman: Dawn of Justice","Year":"2016","Poster":"https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":50,"Theaters":{"names":["PVR","ASIAN"],"no_tickets":[25,25]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt1345836","Title":"The Dark Knight Rises","Year":"2012","Poster":"https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":40,"Theaters":{"names":["PVR","ASIAN"],"no_tickets":[20,20]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt0372784","Title":"Batman Begins","Year":"2005","Poster":"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":57,"Theaters":{"names":["abc","def"],"no_tickets":[29,28]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt4116284","Title":"The LEGO Batman Movie","Year":"2017","Poster":"https://ia.media-imdb.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":78,"Theaters":{"names":["abc","def"],"no_tickets":[46,32]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt0112462","Title":"Batman Forever","Year":"1995","Poster":"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":69,"Theaters":{"names":["abc","def"],"no_tickets":[37,32]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt0118688","Title":"Batman & Robin","Year":"1997","Poster":"https://ia.media-imdb.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":42,"Theaters":{"names":["SRIDEVI","S2"],"no_tickets":[25,17]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt0103776","Title":"Batman Returns","Year":"1992","Poster":"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":33,"Theaters":{"names":["abc","def"],"no_tickets":[12,21]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt0468569","Title":"The Dark Knight","Year":"2008","Poster":"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":40,"Theaters":{"names":["pvr","asian"],"no_tickets":[25,15]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt2975590","Title":"Batman v Superman: Dawn of Justice","Year":"2016","Poster":"https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":50,"Theaters":{"names":["abc","def"],"no_tickets":[25,25]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt1345836","Title":"The Dark Knight Rises","Year":"2012","Poster":"https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":40,"Theaters":{"names":["abc","def"],"no_tickets":[20,20]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt0372784","Title":"Batman Begins","Year":"2005","Poster":"https://ia.media-imdb.com/images/M/MV5BYzc4ODgyZmYtMGFkZC00NGQyLWJiMDItMmFmNjJiZjcxYzVmXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":57,"Theaters":{"names":["abc","def"],"no_tickets":[29,28]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt4116284","Title":"The LEGO Batman Movie","Year":"2017","Poster":"https://ia.media-imdb.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":78,"Theaters":{"names":["abc","def"],"no_tickets":[46,32]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt0112462","Title":"Batman Forever","Year":"1995","Poster":"https://ia.media-imdb.com/images/M/MV5BNWY3M2I0YzItNzA1ZS00MzE3LThlYTEtMTg2YjNiOTYzODQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":69,"Theaters":{"names":["abc","def"],"no_tickets":[37,32]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt0118688","Title":"Batman & Robin","Year":"1997","Poster":"https://ia.media-imdb.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":42,"Theaters":{"names":["abc","def"],"no_tickets":[25,17]}},{"t":"https://youtu.be/AeOydbt9e6g","imdbID":"tt0103776","Title":"Batman Returns","Year":"1992","Poster":"https://ia.media-imdb.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg","Total":33,"Theaters":{"names":["abc","def"],"no_tickets":[12,21]}}];
  send(val:any,s:any){
     s.total = s.total - parseInt(val);
  }  
}
