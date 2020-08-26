package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Eu sou Full Cycle</h1><a href='https://github.com/SandroHerbst/MaratonaFullCycle4.0' target='_blank'><h2>Acesse meu repositório no Github</h2>")
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}