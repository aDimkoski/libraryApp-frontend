import axios from '../custom-axios/axios';

const libraryService = {
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    addBook: (name, category, author, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        });
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        });
    },
    addAuthor: (name, surname, country) => {
        return axios.post("/authors/add", {
            "name" : name,
            "surname" : surname,
            "country" : country
        });
    },
    deleteAuthor: (id) => {
        return axios.delete(`/authors/delete/${id}`);
    },
    addCountry: (name, continent) => {
        return axios.post("/countries/add", {
            "name" : name,
            "continent" : continent
        });
    },
    deleteCountry: (id) => {
        return axios.delete(`/countries/delete/${id}`);
    },
    markTaken: (id) => {
        return axios.put(`/books/markAsTaken/${id}`);
    }
}

export default libraryService;