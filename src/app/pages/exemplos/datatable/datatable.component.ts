import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  movies: any[] = [];
  selectAll: boolean = false;
  searchTerm: string = '';

  constructor(
    private toastr: ToastrService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.movieService.findAll('lost').subscribe((result) => {
      this.movies = result.Search;
    });
  }

  updateCheck() {
    if (this.selectAll === true) {
      this.movies.map((movie) => (movie.checked = true));
    } else {
      this.movies.map((movie) => (movie.checked = false));
    }
  }

  exibeSelecionados() {
    const selectedMovies = this.movies
      .filter((movie) => movie.checked === true)
      .map((movie) => movie.imdbID);

    if (selectedMovies.length > 0) {
      this.toastr.success(selectedMovies.join(', '), 'Selecionados');
    } else {
      this.toastr.error('Nenhum filme selecionado');
    }
  }
}
