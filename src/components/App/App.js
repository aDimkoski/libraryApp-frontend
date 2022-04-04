import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Header from '../Header/header';
import CountryList from "../Country/CountryList/country";
import AuthorList from "../Author/AuthorList/authors";
import libraryService from "../../repository/libraryRepository";
import BookList from "../Book/BookList/bookList";
import BookAdd from "../Book/BookAdd/bookAdd";
import BookEdit from "../Book/BookEdit/bookEdit";
import Footer from "../Footer/footer";
import AuthorAdd from "../Author/AuthorAdd/authorAdd";
import CountryAdd from "../Country/CountryAdd/countryAdd";
import Categories from "../Categories/categories";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            authors: [],
            books: [],
            categories: ["NOVEL", "THRILLER", "HISTORY", "FANTASY", "BIOGRAPHY", "CLASSICS", "DRAMA"],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Route path={"/categories"} exact render={() =>
                            <Categories categories={this.state.categories}/>}/>
                        <Route path={"/countries"} exact render={() =>
                            <CountryList countries={this.state.countries}
                                         onDelete={this.deleteCountry}/>}/>
                        <Route path={"/countries/add"} exact render={() =>
                            <CountryAdd onAddCountry={this.addCountry}/>}/>
                        <Route path={"/authors"} exact render={() =>
                            <AuthorList authors={this.state.authors}
                                        onDelete={this.deleteAuthor}/>}/>
                        <Route path={"/books"} exact render={() =>
                            <BookList books={this.state.books}
                                      onDelete={this.deleteBook}
                                      markAsTaken={this.markAsTaken}
                                      onEdit={this.getBook}/>}/>
                        <Route path={"/books/add"} exact render={() =>
                            <BookAdd authors={this.state.authors}
                                     onAddBook={this.addBook}/>}/>
                        <Route path={"/books/edit/:id"} exact render={() =>
                            <BookEdit authors={this.state.authors}
                                      onEditBook={this.editBook}
                                      book={this.state.selectedBook}/>}/>
                        <Route path={"/authors/add"} exact render={() =>
                            <AuthorAdd countries={this.state.countries}
                                       onAddAuthor={this.addAuthor}/>}/>
                        <Redirect to={"/books"}/>
                    </div>
                </main>
                <Footer/>
            </Router>
        );
    }

    componentDidMount() {
        this.loadCountries();
        this.loadAuthors();
        this.loadBooks();
    }

    loadCountries = () => {
        libraryService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            });
    }
    loadAuthors = () => {
        libraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }
    loadBooks = () => {
        libraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }
    addBook = (name, category, author, availableCopies) => {
        libraryService.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
    deleteBook = (id) => {
        libraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }
    getBook = (id) => {
        libraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }
    editBook = (id, name, category, author, availableCopies) => {
        libraryService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
    addAuthor = (name, surname, country) => {
        libraryService.addAuthor(name, surname, country)
            .then(() => {
                this.loadAuthors();
            });
    }
    deleteAuthor = (id) => {
        libraryService.deleteAuthor(id)
            .then(() => {
                this.loadAuthors();
            });
    }
    addCountry = (name, continent) => {
        libraryService.addCountry(name, continent)
            .then(() => {
                this.loadCountries();
            });
    }
    deleteCountry = (id) => {
        libraryService.deleteCountry(id)
            .then(() => {
                this.loadCountries();
            });
    }
    markAsTaken = (id) => {
        libraryService.markTaken(id)
            .then(() => {
                this.loadBooks();
            });
    }
}

export default App;