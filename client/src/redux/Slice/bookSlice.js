import { createSlice } from "@reduxjs/toolkit";
import {
    createBook,
    deleteBook,
    getAllBook,
    updateBook,
} from "../../service/bookService";

const initialState = {
    bookList: [
        {
            _id: "",
            book_name: "",
            author: "",
            rating: 0,
            book_img: "",
            catagory: "",
            price: 0,
            selled: 0,
            in_stock: "",
            description: "",
            discount: 0,
        },
    ],
    isLoading: false,
};
const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build
            .addCase(createBook.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createBook.fulfilled, (state, action) => {
                const tempArray = [
                    ...state.bookList,
                    action.payload.createdBook,
                ];
                tempArray.forEach((item, index) => {
                    item["key"] = index;
                });
                state.bookList = tempArray;
                state.isLoading = false;
            })
            .addCase(getAllBook.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllBook.fulfilled, (state, action) => {
                const tempArray = action.payload.bookList;
                tempArray.forEach((item, index) => {
                    item["key"] = index;
                });
                state.bookList = tempArray;
                state.isLoading = false;
            })
            .addCase(deleteBook.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteBook.fulfilled, (state, action) => {
                const bookDeletedID = action.payload.bookDeleted;
                const newBookList = state.bookList.filter(
                    (book) => book._id !== bookDeletedID
                );
                state.bookList = newBookList;
                state.isLoading = false;
            })
            .addCase(updateBook.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateBook.fulfilled, (state, action) => {
                state.bookList.some((book, index) => {
                    if (book._id === action.payload.bookUpdated._id) {
                        state.bookList[index] = {
                            ...action.payload.bookUpdated,
                            key: index,
                        };
                        return true;
                    }
                    return false;
                });
                state.isLoading = false;
            });
    },
});

export default bookSlice;
