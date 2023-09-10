package handler

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
)

func handleGetList(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    w.WriteHeader(http.StatusOK)
    fmt.Fprintf(w, "Category: %v\n", vars["category"])
}